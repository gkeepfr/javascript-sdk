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
import VehicleBrandListInner from './VehicleBrandListInner';

/**
* The VehicleBrandList model module.
* @module model/VehicleBrandList
* @version 1.0.0
*/
export default class VehicleBrandList extends Array {
    /**
    * Constructs a new <code>VehicleBrandList</code>.
    * @alias module:model/VehicleBrandList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>VehicleBrandList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleBrandList} obj Optional instance to populate.
    * @return {module:model/VehicleBrandList} The populated <code>VehicleBrandList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleBrandList();
            ApiClient.constructFromObject(data, obj, 'VehicleBrandListInner');
            
            
        }
        return obj;
    }





}
