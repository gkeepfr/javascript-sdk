/**
 * Gkeep API
 * Gkeep API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The VehicleMaintenance model module.
* @module model/VehicleMaintenance
* @version 1.0.0
*/
export default class VehicleMaintenance {
    /**
    * Constructs a new <code>VehicleMaintenance</code>.
    * @alias module:model/VehicleMaintenance
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleMaintenance</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleMaintenance} obj Optional instance to populate.
    * @return {module:model/VehicleMaintenance} The populated <code>VehicleMaintenance</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleMaintenance();
                        
            
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {Boolean} enabled
    */
    enabled = undefined;




}
