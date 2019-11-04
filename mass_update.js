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
					/*
					log.debug ({
						title: 'token Data',
						details: tokenData
					});
					*/
					//pass token in this request
					return https.get.promise({
						url:url,
						headers:header
					})
				})

				.then(function(inventoryData){
					/*
					log.debug ({
						title: 'inventory Data',
						details: inventoryData
					});
					*/
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