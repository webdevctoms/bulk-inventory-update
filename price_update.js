/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */

 define(['N/currentRecord','N/https','./k-p.js'],function(currentRecord,https,keys){

    var updatePrice = false;
    var previousPrice = null;
    function postPrice(context){
        return true;
    }

    function priceChanged(context){
        log.debug ({
            title: 'Field Changed',
            details: context
        });

        var fieldId = context.fieldId;
        var sublistId = context.sublistId;
        var record = currentRecord.get();
        var line = context.line;
        var column = context.column;
        var price = record.getValue({
            fieldId: fieldId
        });
        log.debug ({
            title: 'Field ID | sublist Id | price | line | column',
            details: fieldId + '|' + sublistId + '|' + price + '|' + line + '|' + column
        });
        return true;
    }

    return{
        fieldChanged:priceChanged,
        saveRecord:postPrice
    };

 });