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
import ServiceStateDto from './ServiceStateDto';

/**
 * The CertificateStatusDto model module.
 * @module model/CertificateStatusDto
 * @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
 */
class CertificateStatusDto {
    /**
     * Constructs a new <code>CertificateStatusDto</code>.
     * @alias module:model/CertificateStatusDto
     * @param dnsNames {Array.<String>} 
     * @param failedIssuanceAttemptCount {Number} 
     * @param state {module:model/ServiceStateDto} 
     */
    constructor(dnsNames, failedIssuanceAttemptCount, state) { 
        
        CertificateStatusDto.initialize(this, dnsNames, failedIssuanceAttemptCount, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, dnsNames, failedIssuanceAttemptCount, state) { 
        obj['dns_names'] = dnsNames;
        obj['failed_issuance_attempt_count'] = failedIssuanceAttemptCount;
        obj['state'] = state;
    }

    /**
     * Constructs a <code>CertificateStatusDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateStatusDto} obj Optional instance to populate.
     * @return {module:model/CertificateStatusDto} The populated <code>CertificateStatusDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateStatusDto();

            if (data.hasOwnProperty('dns_names')) {
                obj['dns_names'] = ApiClient.convertToType(data['dns_names'], ['String']);
            }
            if (data.hasOwnProperty('failed_issuance_attempt_count')) {
                obj['failed_issuance_attempt_count'] = ApiClient.convertToType(data['failed_issuance_attempt_count'], 'Number');
            }
            if (data.hasOwnProperty('last_failure_issuance_time')) {
                obj['last_failure_issuance_time'] = ApiClient.convertToType(data['last_failure_issuance_time'], 'Number');
            }
            if (data.hasOwnProperty('not_after')) {
                obj['not_after'] = ApiClient.convertToType(data['not_after'], 'Number');
            }
            if (data.hasOwnProperty('not_before')) {
                obj['not_before'] = ApiClient.convertToType(data['not_before'], 'Number');
            }
            if (data.hasOwnProperty('renewal_time')) {
                obj['renewal_time'] = ApiClient.convertToType(data['renewal_time'], 'Number');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ServiceStateDto.constructFromObject(data['state']);
            }
            if (data.hasOwnProperty('state_message')) {
                obj['state_message'] = ApiClient.convertToType(data['state_message'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CertificateStatusDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CertificateStatusDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CertificateStatusDto.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['dns_names'])) {
            throw new Error("Expected the field `dns_names` to be an array in the JSON data but got " + data['dns_names']);
        }
        // ensure the json data is a string
        if (data['state_message'] && !(typeof data['state_message'] === 'string' || data['state_message'] instanceof String)) {
            throw new Error("Expected the field `state_message` to be a primitive type in the JSON string but got " + data['state_message']);
        }

        return true;
    }


}

CertificateStatusDto.RequiredProperties = ["dns_names", "failed_issuance_attempt_count", "state"];

/**
 * @member {Array.<String>} dns_names
 */
CertificateStatusDto.prototype['dns_names'] = undefined;

/**
 * @member {Number} failed_issuance_attempt_count
 */
CertificateStatusDto.prototype['failed_issuance_attempt_count'] = undefined;

/**
 * Unix timestamp with millisecond precision
 * @member {Number} last_failure_issuance_time
 */
CertificateStatusDto.prototype['last_failure_issuance_time'] = undefined;

/**
 * Unix timestamp with millisecond precision
 * @member {Number} not_after
 */
CertificateStatusDto.prototype['not_after'] = undefined;

/**
 * Unix timestamp with millisecond precision
 * @member {Number} not_before
 */
CertificateStatusDto.prototype['not_before'] = undefined;

/**
 * Unix timestamp with millisecond precision
 * @member {Number} renewal_time
 */
CertificateStatusDto.prototype['renewal_time'] = undefined;

/**
 * @member {module:model/ServiceStateDto} state
 */
CertificateStatusDto.prototype['state'] = undefined;

/**
 * @member {String} state_message
 */
CertificateStatusDto.prototype['state_message'] = undefined;






export default CertificateStatusDto;

