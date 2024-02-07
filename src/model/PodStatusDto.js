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
import ContainerStatusDto from './ContainerStatusDto';
import ServiceStateDto from './ServiceStateDto';

/**
 * The PodStatusDto model module.
 * @module model/PodStatusDto
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class PodStatusDto {
    /**
     * Constructs a new <code>PodStatusDto</code>.
     * @alias module:model/PodStatusDto
     * @param containers {Array.<module:model/ContainerStatusDto>} 
     * @param name {String} 
     * @param restartCount {Number} 
     * @param serviceVersion {String} 
     * @param state {module:model/ServiceStateDto} 
     * @param stateMessage {String} 
     * @param stateReason {String} 
     */
    constructor(containers, name, restartCount, serviceVersion, state, stateMessage, stateReason) { 
        
        PodStatusDto.initialize(this, containers, name, restartCount, serviceVersion, state, stateMessage, stateReason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, containers, name, restartCount, serviceVersion, state, stateMessage, stateReason) { 
        obj['containers'] = containers;
        obj['name'] = name;
        obj['restart_count'] = restartCount;
        obj['service_version'] = serviceVersion;
        obj['state'] = state;
        obj['state_message'] = stateMessage;
        obj['state_reason'] = stateReason;
    }

    /**
     * Constructs a <code>PodStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PodStatusDto} obj Optional instance to populate.
     * @return {module:model/PodStatusDto} The populated <code>PodStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PodStatusDto();

            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [ContainerStatusDto]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('restart_count')) {
                obj['restart_count'] = ApiClient.convertToType(data['restart_count'], 'Number');
            }
            if (data.hasOwnProperty('service_version')) {
                obj['service_version'] = ApiClient.convertToType(data['service_version'], 'String');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ServiceStateDto.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('state_message')) {
                obj['state_message'] = ApiClient.convertToType(data['state_message'], 'String');
            }
            if (data.hasOwnProperty('state_reason')) {
                obj['state_reason'] = ApiClient.convertToType(data['state_reason'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PodStatusDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PodStatusDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PodStatusDto.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['containers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containers'])) {
                throw new Error("Expected the field `containers` to be an array in the JSON data but got " + data['containers']);
            }
            // validate the optional field `containers` (array)
            for (const item of data['containers']) {
                ContainerStatusDto.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['service_version'] && !(typeof data['service_version'] === 'string' || data['service_version'] instanceof String)) {
            throw new Error("Expected the field `service_version` to be a primitive type in the JSON string but got " + data['service_version']);
        }
        // ensure the json data is a string
        if (data['state_message'] && !(typeof data['state_message'] === 'string' || data['state_message'] instanceof String)) {
            throw new Error("Expected the field `state_message` to be a primitive type in the JSON string but got " + data['state_message']);
        }
        // ensure the json data is a string
        if (data['state_reason'] && !(typeof data['state_reason'] === 'string' || data['state_reason'] instanceof String)) {
            throw new Error("Expected the field `state_reason` to be a primitive type in the JSON string but got " + data['state_reason']);
        }

        return true;
    }


}

PodStatusDto.RequiredProperties = ["containers", "name", "restart_count", "service_version", "state", "state_message", "state_reason"];

/**
 * @member {Array.<module:model/ContainerStatusDto>} containers
 */
PodStatusDto.prototype['containers'] = undefined;

/**
 * @member {String} name
 */
PodStatusDto.prototype['name'] = undefined;

/**
 * @member {Number} restart_count
 */
PodStatusDto.prototype['restart_count'] = undefined;

/**
 * @member {String} service_version
 */
PodStatusDto.prototype['service_version'] = undefined;

/**
 * Unix timestamp with millisecond precision
 * @member {Number} started_at
 */
PodStatusDto.prototype['started_at'] = undefined;

/**
 * @member {module:model/ServiceStateDto} state
 */
PodStatusDto.prototype['state'] = undefined;

/**
 * @member {String} state_message
 */
PodStatusDto.prototype['state_message'] = undefined;

/**
 * @member {String} state_reason
 */
PodStatusDto.prototype['state_reason'] = undefined;






export default PodStatusDto;

