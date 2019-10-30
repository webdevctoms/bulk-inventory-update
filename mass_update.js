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

			var url = keys.getInventoryUrl().url;
			if(rec_title.includes('Mass Update Shopify Inventory')){
				var dataFromRestlet = https.get(url);
				log.debug ({
					title: 'dataFromRestlet Data',
					details: dataFromRestlet
				});
				return true;
			}
			
		}

		return{
			saveRecord:bulkUpdateShopify
		}
	}
);