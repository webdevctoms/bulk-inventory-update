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
        var tokenData = https.get({
            url:tokenUrl,
            headers:header
        });

        var parsedBody = JSON.parse(tokenData.body);
        var token = parsedBody.token;
        log.debug ({
            title: 'token Data',
            details: token
        });
        var body = JSON.stringify({
            token:token
        });
        header['Content-Type'] = 'application/json';

        var inventoryData = https.post({
            url:url,
            headers:header,
            body:body
        });

        log.debug ({
            title: 'inventory Data',
            details: inventoryData
        });

        return true;
    }

    return {
        execute:startUpdate
    };
});