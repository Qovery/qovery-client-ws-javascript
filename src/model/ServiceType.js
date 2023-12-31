/**
 * websocket-gateway
 * Describe the weboscket endpoints
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: erebe@erebe.eu
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
/**
* Enum class ServiceType.
* @enum {}
* @readonly
*/
export default class ServiceType {
    
        /**
         * value: "APPLICATION"
         * @const
         */
        "APPLICATION" = "APPLICATION";

    
        /**
         * value: "CONTAINER"
         * @const
         */
        "CONTAINER" = "CONTAINER";

    
        /**
         * value: "DATABASE"
         * @const
         */
        "DATABASE" = "DATABASE";

    
        /**
         * value: "JOB"
         * @const
         */
        "JOB" = "JOB";

    
        /**
         * value: "HELM"
         * @const
         */
        "HELM" = "HELM";

    

    /**
    * Returns a <code>ServiceType</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ServiceType} The enum <code>ServiceType</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

