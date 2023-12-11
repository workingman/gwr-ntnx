/**
 *@NApiVersion 2.0
 *@NScriptType MassUpdateScript
 */

 define(['N/record', 'N/log'],
    function(record, log) {
        function each(params) {
            var id = record.submitFields({
                type: params.type,
                id: params.id,
                values: {
                    'custrecord_contracts_queued_for_renew': 'F'
                    /*
                     * For standard records the format would look like:
                     *      comments : "This is a sample note."
                     *
                     * For CUSTOM Records the format would look like:
                     *      'custrecord_custom_field' : 'This is a custom field value'
                     *
                     */
                }
            });
            log.debug({
                title: 'EACH',
                details: 'Contract ID:  = ' + id

            });
        }
        return {
            each: each
        };
    }
);
