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
* The AlertListDriver model module.
* @module model/AlertListDriver
* @version 1.0.0
*/
export default class AlertListDriver {
    /**
    * Constructs a new <code>AlertListDriver</code>.
    * @alias module:model/AlertListDriver
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AlertListDriver</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AlertListDriver} obj Optional instance to populate.
    * @return {module:model/AlertListDriver} The populated <code>AlertListDriver</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertListDriver();
                        
            
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} firstname
    */
    firstname = undefined;
    /**
    * @member {String} lastname
    */
    lastname = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;




}
