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
 * The NodePodInfoDto model module.
 * @module model/NodePodInfoDto
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class NodePodInfoDto {
    /**
     * Constructs a new <code>NodePodInfoDto</code>.
     * @alias module:model/NodePodInfoDto
     * @param name {String} 
     * @param namespace {String} 
     */
    constructor(name, namespace) { 
        
        NodePodInfoDto.initialize(this, name, namespace);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, namespace) { 
        obj['name'] = name;
        obj['namespace'] = namespace;
    }

    /**
     * Constructs a <code>NodePodInfoDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodePodInfoDto} obj Optional instance to populate.
     * @return {module:model/NodePodInfoDto} The populated <code>NodePodInfoDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodePodInfoDto();

            if (data.hasOwnProperty('cpu_milli_limit')) {
                obj['cpu_milli_limit'] = ApiClient.convertToType(data['cpu_milli_limit'], 'Number');
            }
            if (data.hasOwnProperty('cpu_milli_request')) {
                obj['cpu_milli_request'] = ApiClient.convertToType(data['cpu_milli_request'], 'Number');
            }
            if (data.hasOwnProperty('environment_id')) {
                obj['environment_id'] = ApiClient.convertToType(data['environment_id'], 'String');
            }
            if (data.hasOwnProperty('memory_mib_limit')) {
                obj['memory_mib_limit'] = ApiClient.convertToType(data['memory_mib_limit'], 'Number');
            }
            if (data.hasOwnProperty('memory_mib_request')) {
                obj['memory_mib_request'] = ApiClient.convertToType(data['memory_mib_request'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('service_id')) {
                obj['service_id'] = ApiClient.convertToType(data['service_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cpu_milli_limit
 */
NodePodInfoDto.prototype['cpu_milli_limit'] = undefined;

/**
 * @member {Number} cpu_milli_request
 */
NodePodInfoDto.prototype['cpu_milli_request'] = undefined;

/**
 * @member {String} environment_id
 */
NodePodInfoDto.prototype['environment_id'] = undefined;

/**
 * @member {Number} memory_mib_limit
 */
NodePodInfoDto.prototype['memory_mib_limit'] = undefined;

/**
 * @member {Number} memory_mib_request
 */
NodePodInfoDto.prototype['memory_mib_request'] = undefined;

/**
 * @member {String} name
 */
NodePodInfoDto.prototype['name'] = undefined;

/**
 * @member {String} namespace
 */
NodePodInfoDto.prototype['namespace'] = undefined;

/**
 * @member {String} project_id
 */
NodePodInfoDto.prototype['project_id'] = undefined;

/**
 * @member {String} service_id
 */
NodePodInfoDto.prototype['service_id'] = undefined;






export default NodePodInfoDto;
