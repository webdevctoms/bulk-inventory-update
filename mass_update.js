/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */

define(['N/ui/dialog'],
	//not really the entry point function more of a wrapper
	function(dialog){
		//entry point function
		function helloWorld(){
			var options = {
				title:'Hello',
				message:'Hello world'
			};

			try{
				//create the alert using the module
				dialog.alert(options);
				log.debug ({
                    title: 'Success',
                    details: 'Alert displayed successfully'
                });
			}
			catch(err){
				//globally available logger
				log.error({
					title:err.name,
					details:err.message
				});
			}

		}

		return{
			pageInit:helloWorld
		}
	}
);