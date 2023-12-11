/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 * additional commit for BA-0009
 */


define(['N/record', 'N/search'], 
/**
 * @param{record} record
 * @param{search} search  

 */
function(record, search) {

    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {
        alert("Have a good day")

    }

    return {
        pageInit: pageInit,
    };
   
});
