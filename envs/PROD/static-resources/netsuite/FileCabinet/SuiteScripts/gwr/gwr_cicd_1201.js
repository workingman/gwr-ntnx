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
    // 20231201-092345 gr conflicting change 20231206-110915 ; new change gr 20231206-110925
    
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
// gwr non conflicting Changes:
//    gwr 20231205-105641
//    gwr 20231206-110945
//    gwr 20231206-113345
    return {
        pageInit: pageInit,
    };
    // km non conflicting 1 20231204-100134
    // kgr nonconflicting 20231205-1019
    // kgr nonconflicting 20231205-1023 update to same feature branch
    // kgr non conflicting change 20231205-1056 BIZAPP-0005
    // kgr non conflicting change 20231205-1056 BIZAPP-0005 rework
    // kgr non conflicting change 20231205-1056 BIZAPP-0006



});
