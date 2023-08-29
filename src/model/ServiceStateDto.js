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
* Enum class ServiceStateDto.
* @enum {}
* @readonly
*/
export default class ServiceStateDto {
    
        /**
         * value: "STARTING"
         * @const
         */
        "STARTING" = "STARTING";

    
        /**
         * value: "RUNNING"
         * @const
         */
        "RUNNING" = "RUNNING";

    
        /**
         * value: "ERROR"
         * @const
         */
        "ERROR" = "ERROR";

    
        /**
         * value: "STOPPING"
         * @const
         */
        "STOPPING" = "STOPPING";

    
        /**
         * value: "STOPPED"
         * @const
         */
        "STOPPED" = "STOPPED";

    
        /**
         * value: "COMPLETED"
         * @const
         */
        "COMPLETED" = "COMPLETED";

    
        /**
         * value: "WARNING"
         * @const
         */
        "WARNING" = "WARNING";

    

    /**
    * Returns a <code>ServiceStateDto</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ServiceStateDto} The enum <code>ServiceStateDto</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

