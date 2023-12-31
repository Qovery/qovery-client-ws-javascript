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
 * The NodeTaintDto model module.
 * @module model/NodeTaintDto
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class NodeTaintDto {
    /**
     * Constructs a new <code>NodeTaintDto</code>.
     * @alias module:model/NodeTaintDto
     * @param effect {String} 
     * @param key {String} 
     * @param value {String} 
     */
    constructor(effect, key, value) { 
        
        NodeTaintDto.initialize(this, effect, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, effect, key, value) { 
        obj['effect'] = effect;
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>NodeTaintDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeTaintDto} obj Optional instance to populate.
     * @return {module:model/NodeTaintDto} The populated <code>NodeTaintDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NodeTaintDto();

            if (data.hasOwnProperty('effect')) {
                obj['effect'] = ApiClient.convertToType(data['effect'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} effect
 */
NodeTaintDto.prototype['effect'] = undefined;

/**
 * @member {String} key
 */
NodeTaintDto.prototype['key'] = undefined;

/**
 * @member {String} value
 */
NodeTaintDto.prototype['value'] = undefined;






export default NodeTaintDto;

