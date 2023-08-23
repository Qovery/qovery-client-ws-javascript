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


import ApiClient from "../ApiClient";
import ServiceInfraLogResponseDto from '../model/ServiceInfraLogResponseDto';
import ServiceLogResponseDto from '../model/ServiceLogResponseDto';

/**
* Logs service.
* @module api/LogsApi
* @version $(grep 'version' _build/openapi.yaml | head -1 | tr ':' '\n' | tail -1 | tr -d ' ')
*/
export default class LogsApi {

    /**
    * Constructs a new LogsApi. 
    * @alias module:api/LogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the handleInfraLogsRequest operation.
     * @callback module:api/LogsApi~handleInfraLogsRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceInfraLogResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} organization 
     * @param {String} cluster 
     * @param {String} project 
     * @param {String} environment 
     * @param {String} service 
     * @param {String} infraComponentType 
     * @param {module:api/LogsApi~handleInfraLogsRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceInfraLogResponseDto}
     */
    handleInfraLogsRequest(organization, cluster, project, environment, service, infraComponentType, callback) {
      let postBody = null;
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling handleInfraLogsRequest");
      }
      // verify the required parameter 'cluster' is set
      if (cluster === undefined || cluster === null) {
        throw new Error("Missing the required parameter 'cluster' when calling handleInfraLogsRequest");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling handleInfraLogsRequest");
      }
      // verify the required parameter 'environment' is set
      if (environment === undefined || environment === null) {
        throw new Error("Missing the required parameter 'environment' when calling handleInfraLogsRequest");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling handleInfraLogsRequest");
      }
      // verify the required parameter 'infraComponentType' is set
      if (infraComponentType === undefined || infraComponentType === null) {
        throw new Error("Missing the required parameter 'infraComponentType' when calling handleInfraLogsRequest");
      }

      let pathParams = {
        'organization': organization,
        'cluster': cluster,
        'project': project,
        'environment': environment,
        'service': service,
        'infra_component_type': infraComponentType
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceInfraLogResponseDto;
      return this.apiClient.callApi(
        '/infra/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the handleServiceLogsRequest operation.
     * @callback module:api/LogsApi~handleServiceLogsRequestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceLogResponseDto} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} organization 
     * @param {String} cluster 
     * @param {String} project 
     * @param {String} environment 
     * @param {String} service 
     * @param {module:api/LogsApi~handleServiceLogsRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceLogResponseDto}
     */
    handleServiceLogsRequest(organization, cluster, project, environment, service, callback) {
      let postBody = null;
      // verify the required parameter 'organization' is set
      if (organization === undefined || organization === null) {
        throw new Error("Missing the required parameter 'organization' when calling handleServiceLogsRequest");
      }
      // verify the required parameter 'cluster' is set
      if (cluster === undefined || cluster === null) {
        throw new Error("Missing the required parameter 'cluster' when calling handleServiceLogsRequest");
      }
      // verify the required parameter 'project' is set
      if (project === undefined || project === null) {
        throw new Error("Missing the required parameter 'project' when calling handleServiceLogsRequest");
      }
      // verify the required parameter 'environment' is set
      if (environment === undefined || environment === null) {
        throw new Error("Missing the required parameter 'environment' when calling handleServiceLogsRequest");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling handleServiceLogsRequest");
      }

      let pathParams = {
        'organization': organization,
        'cluster': cluster,
        'project': project,
        'environment': environment,
        'service': service
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceLogResponseDto;
      return this.apiClient.callApi(
        '/service/logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}