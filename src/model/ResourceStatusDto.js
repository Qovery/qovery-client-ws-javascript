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
* Enum class ResourceStatusDto.
* @enum {}
* @readonly
*/
export default class ResourceStatusDto {
    
        /**
         * value: "OK"
         * @const
         */
        "OK" = "OK";

    
        /**
         * value: "WARNING"
         * @const
         */
        "WARNING" = "WARNING";

    
        /**
         * value: "ALERT"
         * @const
         */
        "ALERT" = "ALERT";

    

    /**
    * Returns a <code>ResourceStatusDto</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/ResourceStatusDto} The enum <code>ResourceStatusDto</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
