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
import BigDecimal from './BigDecimal';
import VehicleStatusTanks from './VehicleStatusTanks';
import VehicleStatusVehicle from './VehicleStatusVehicle';

/**
* The VehicleStatus model module.
* @module model/VehicleStatus
* @version 1.0.0
*/
export default class VehicleStatus {
    /**
    * Constructs a new <code>VehicleStatus</code>.
    * @alias module:model/VehicleStatus
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleStatus</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleStatus} obj Optional instance to populate.
    * @return {module:model/VehicleStatus} The populated <code>VehicleStatus</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleStatus();
                        
            
            if (data.hasOwnProperty('fuel_level')) {
                obj['fuel_level'] = ApiClient.convertToType(data['fuel_level'], BigDecimal);
            }
            if (data.hasOwnProperty('fuel_level_on_raise_start')) {
                obj['fuel_level_on_raise_start'] = ApiClient.convertToType(data['fuel_level_on_raise_start'], BigDecimal);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('is_vehicle_stop')) {
                obj['is_vehicle_stop'] = ApiClient.convertToType(data['is_vehicle_stop'], 'Boolean');
            }
            if (data.hasOwnProperty('is_engine_stop')) {
                obj['is_engine_stop'] = ApiClient.convertToType(data['is_engine_stop'], 'Boolean');
            }
            if (data.hasOwnProperty('battery_level')) {
                obj['battery_level'] = ApiClient.convertToType(data['battery_level'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('vehicle')) {
                obj['vehicle'] = VehicleStatusVehicle.constructFromObject(data['vehicle']);
            }
            if (data.hasOwnProperty('tanks')) {
                obj['tanks'] = ApiClient.convertToType(data['tanks'], [VehicleStatusTanks]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/BigDecimal} fuel_level
    */
    fuel_level = undefined;
    /**
    * @member {module:model/BigDecimal} fuel_level_on_raise_start
    */
    fuel_level_on_raise_start = undefined;
    /**
    * @member {Number} created_at
    */
    created_at = undefined;
    /**
    * @member {Boolean} is_vehicle_stop
    */
    is_vehicle_stop = undefined;
    /**
    * @member {Boolean} is_engine_stop
    */
    is_engine_stop = undefined;
    /**
    * @member {Number} battery_level
    */
    battery_level = undefined;
    /**
    * @member {Number} longitude
    */
    longitude = undefined;
    /**
    * @member {Number} latitude
    */
    latitude = undefined;
    /**
    * @member {module:model/VehicleStatusVehicle} vehicle
    */
    vehicle = undefined;
    /**
    * @member {Array.<module:model/VehicleStatusTanks>} tanks
    */
    tanks = undefined;




}
