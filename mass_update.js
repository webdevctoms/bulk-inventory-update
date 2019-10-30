/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */

define(['N/currentRecord','./k-p.js'],
	//not really the entry point function more of a wrapper
	function(currentRecord,keys){
		//entry point function
		function bulkUpdateShopify(){
            var keyData = keys.getKeys();
            var rec = currentRecord.get();
            var rec_title = rec.getValue({
                fieldId:'title'
            });
			try{
				log.debug ({
                    title: 'Title',
                    details: rec_title
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

		}

		return{
			saveRecord:bulkUpdateShopify
		}
	}
);