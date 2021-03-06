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
* The VehicleStatusVehicleDriver model module.
* @module model/VehicleStatusVehicleDriver
* @version 1.0.0
*/
export default class VehicleStatusVehicleDriver {
    /**
    * Constructs a new <code>VehicleStatusVehicleDriver</code>.
    * @alias module:model/VehicleStatusVehicleDriver
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleStatusVehicleDriver</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleStatusVehicleDriver} obj Optional instance to populate.
    * @return {module:model/VehicleStatusVehicleDriver} The populated <code>VehicleStatusVehicleDriver</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleStatusVehicleDriver();
                        
            
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} firstname
    */
    firstname = undefined;
    /**
    * @member {String} lastname
    */
    lastname = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;




}
