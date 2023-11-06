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
* Enum class UnitDto.
* @enum {}
* @readonly
*/
export default class UnitDto {
    
        /**
         * value: "mCPU"
         * @const
         */
        "mCPU" = "mCPU";

    
        /**
         * value: "MiB"
         * @const
         */
        "MiB" = "MiB";

    
        /**
         * value: "GiB"
         * @const
         */
        "GiB" = "GiB";

    

    /**
    * Returns a <code>UnitDto</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UnitDto} The enum <code>UnitDto</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}

