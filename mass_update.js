/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */

define(['N/currentRecord','./k-p.js','./shopify-calls.js'],
	//not really the entry point function more of a wrapper
	function(currentRecord,keys,shopify){
		//entry point function
		function bulkUpdateShopify(){
			var rec = currentRecord.get();
            var rec_title = rec.getValue({
                fieldId:'title'
            });
			var keyData = keys.getKeysU();
			var options = {
				keyData:{
					key:keyData.mesak,
					pass:keyData.mesap,
					url:keyData.mesaurl
				}
			};
			if(rec_title.includes('Mass Update Shopify Inventory')){
				return shopify.getAllProducts(options)
			
				.then(function(productdata){
					try{
						log.debug ({
							title: 'Title',
							details: rec_title
						});
						
						log.debug ({
							title: 'Product Data',
							details: productdata
						});
		
						return true;
					}
					catch(err){
						log.error({
							title:err.name,
							details:err.message
						});
						
						return false;
					}
				})
				
				.catch(function(err){
					log.debug ({
						title: 'Error getting all product Data',
						details: err
					});
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