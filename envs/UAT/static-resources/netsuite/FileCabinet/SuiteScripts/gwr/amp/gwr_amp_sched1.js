/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define(['N/log'],
    /**
 * @param{log} log
 */
    (log) => {
      /**
       * A bunch of new code!! 
       *const execute = (scriptContext) => {
       *     var otherFieldList = ['custbody_jg_quote_number','custbody32','custbody39','otherrefnum','leadsource','partner','department','intercotransaction'];
       *}
       */
      
        
        const execute = (scriptContext) => {
            var otherFieldList = ['custbody_jg_quote_number','custbody32','custbody39','otherrefnum','leadsource','partner','department','intercotransaction'];
        }
        // custbody_vat_id customworkflowworkflow5_v2_2_3.custworkflow13_2
        return {execute}

    });
