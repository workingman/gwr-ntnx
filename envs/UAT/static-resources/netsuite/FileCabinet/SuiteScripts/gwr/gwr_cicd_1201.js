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
function(record, search) {
    // 20231201-092345 gr conflicting change 20231204-101212
    
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
// gwr non conflicting 20231204-083705
// gwr non confcliting 20231204-101225
// gwr non conflicting 20231205-101937
    return {
        pageInit: pageInit,
    };
    // km non conflicting 1 20231204-100134
    // kgr nonconflicting 20231205-1019
    // kgr nonconflicting 20231205-1023 update to same feature branch

});
