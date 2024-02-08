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
import EnvironmentStatusDto from './EnvironmentStatusDto';

/**
 * The ServiceStatusDto model module.
 * @module model/ServiceStatusDto
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class ServiceStatusDto {
    /**
     * Constructs a new <code>ServiceStatusDto</code>.
     * @alias module:model/ServiceStatusDto
     * @param environments {Array.<module:model/EnvironmentStatusDto>} 
     */
    constructor(environments) { 
        
        ServiceStatusDto.initialize(this, environments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, environments) { 
        obj['environments'] = environments;
    }

    /**
     * Constructs a <code>ServiceStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceStatusDto} obj Optional instance to populate.
     * @return {module:model/ServiceStatusDto} The populated <code>ServiceStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceStatusDto();

            if (data.hasOwnProperty('environments')) {
                obj['environments'] = ApiClient.convertToType(data['environments'], [EnvironmentStatusDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/EnvironmentStatusDto>} environments
 */
ServiceStatusDto.prototype['environments'] = undefined;






export default ServiceStatusDto;

