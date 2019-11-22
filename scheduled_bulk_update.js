/**
 *@NApiVersion 2.0
 *@NScriptType ScheduledScript
 */
define(['N/https','./k-p.js'],function(https,keys){

    function startUpdate(context){
        var urlData = keys.getInventoryUrl();
        var ck = urlData.ck;
        var url = urlData.url;
        var tokenUrl = urlData.tokenUrl;
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

            return;
        })
    }

    return {
        execute:startUpdate
    };
});