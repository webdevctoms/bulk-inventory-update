/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */

define(['N/currentRecord','N/https','./k-p.js'],
	//not really the entry point function more of a wrapper
	function(currentRecord,https,keys){
		//entry point function
		function bulkUpdateShopify(){
			var rec = currentRecord.get();
            var rec_title = rec.getValue({
                fieldId:'title'
			});

			//var url = keys.getInventoryUrl().url;
			var urlData = keys.getTestUrl();
			var ck = urlData.ck;
			var url = urlData.url;
			var tokenUrl = urlData.tokenUrl;
			if(rec_title.includes('Mass Update Shopify Inventory')){
				var header = {
					Authorization:ck
				}
				return https.get.promise({
					url:tokenUrl,
					headers:header
				}).then(function(tokenData){
					var parsedBody = JSON.parse(tokenData.body)
					var token = parsedBody.token;
					log.debug ({
						title: 'token Data',
						details: token
					});
					var body = JSON.stringify({
						token:token
					});
					header['Content-Type'] = 'application/json';
					//pass token in this request
					return https.post.promise({
						url:url,
						headers:header,
						body:body
					})
				})

				.then(function(inventoryData){
					
					log.debug ({
						title: 'inventory Data',
						details: inventoryData
					});
					
					return true;
				})

				.catch(function(err){
					log.debug ({
						title: 'Error Getting data',
						details: err
					});

					return true;
				});	
				
			}
			else{
				return true;
			}
			
		}

		return{
			saveRecord:bulkUpdateShopify
		}
	}
);