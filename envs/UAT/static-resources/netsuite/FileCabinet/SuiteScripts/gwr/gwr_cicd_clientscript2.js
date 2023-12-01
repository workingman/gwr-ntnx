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
    // non conflicting code 20231201-094502

    // KGR test 12/01/2023 Update for BIZAPP-0002 update for 0003 too
    // KGR test 12/01/2023 Update for BIZAPP-0003 non conflict



    return {
        pageInit: pageInit,
    };
    // 20231130-175636
    // 20231130-181935
    // 20231130-182155
    // KGR test 12/01/2023 Update for BIZAPP-0002 conflict additional updates for BIZAPP-0003
});
