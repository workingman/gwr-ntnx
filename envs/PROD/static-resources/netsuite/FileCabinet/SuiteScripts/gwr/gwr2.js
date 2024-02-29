/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

define(['N/record', 'N/search'], 
/**
 * @param{record} record
 * @param{search} search  

 */
       // gwr 20231211-113344 update after deployment created.
       // gwr 20231211-115417 BIZAPP-10507-fixes-1 added line2
       // gwr 20231213-091454 BIZAPP-091410
       // gwr 20231220-072743 BIZAPP-00020
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
        alert("Bonjour tout la monde")

    }
    return {
        pageInit: pageInit,
    };
});
