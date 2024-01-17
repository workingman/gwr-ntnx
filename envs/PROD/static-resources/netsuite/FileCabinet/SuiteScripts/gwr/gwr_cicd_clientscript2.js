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

// non-conflicting line GR 20231201-100259
       // 20231210-120823
       // 20231210-121100
       // 20231210-122829
       // BIZAPP-105707
       // BIZAPP-105707 post-PR-creation change
       // BIZAPP-154404 gr

       // BIZAPP-154404 rework 20240116-155442
       // more rework 20240116-160105

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


    // 20231130-175636
    // 20231130-181935
    // 20231130-182155
    // KGR test 12/01/2023 Update for BIZAPP-0002 conflict additional updates for BIZAPP-0003
       //kgr222


});
