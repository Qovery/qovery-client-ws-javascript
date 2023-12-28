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


import ApiClient from './ApiClient';
import ApplicationStatusDto from './model/ApplicationStatusDto';
import CertificateStatusDto from './model/CertificateStatusDto';
import ClusterNodeDto from './model/ClusterNodeDto';
import ClusterStatusDto from './model/ClusterStatusDto';
import ContainerStateDto from './model/ContainerStateDto';
import ContainerStateTerminatedDto from './model/ContainerStateTerminatedDto';
import ContainerStatusDto from './model/ContainerStatusDto';
import ContainerStatusDtoCurrentState from './model/ContainerStatusDtoCurrentState';
import ContainerStatusDtoLastTerminatedState from './model/ContainerStatusDtoLastTerminatedState';
import DatabaseStatusDto from './model/DatabaseStatusDto';
import EnvironmentStatusDto from './model/EnvironmentStatusDto';
import MetricDto from './model/MetricDto';
import NodeAddressDto from './model/NodeAddressDto';
import NodeConditionDto from './model/NodeConditionDto';
import NodePodInfoDto from './model/NodePodInfoDto';
import NodeResourceDto from './model/NodeResourceDto';
import NodeTaintDto from './model/NodeTaintDto';
import PodDto from './model/PodDto';
import PodStatusDto from './model/PodStatusDto';
import ResourceStatusDto from './model/ResourceStatusDto';
import ServiceInfraLogResponseDto from './model/ServiceInfraLogResponseDto';
import ServiceListPodsResponseDto from './model/ServiceListPodsResponseDto';
import ServiceLogResponseDto from './model/ServiceLogResponseDto';
import ServiceMetricsDto from './model/ServiceMetricsDto';
import ServiceStateDto from './model/ServiceStateDto';
import ServiceStatusDto from './model/ServiceStatusDto';
import ServiceType from './model/ServiceType';
import UnitDto from './model/UnitDto';
import ClusterStatusApi from './api/ClusterStatusApi';
import DeploymentApi from './api/DeploymentApi';
import LogsApi from './api/LogsApi';
import ServiceListPodsApi from './api/ServiceListPodsApi';
import ServiceMetricsApi from './api/ServiceMetricsApi';
import ServiceStatusApi from './api/ServiceStatusApi';


/**
* Describe_the_weboscket_endpoints.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var WebsocketGateway = require('index'); // See note below*.
* var xxxSvc = new WebsocketGateway.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new WebsocketGateway.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new WebsocketGateway.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new WebsocketGateway.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ApplicationStatusDto model constructor.
     * @property {module:model/ApplicationStatusDto}
     */
    ApplicationStatusDto,

    /**
     * The CertificateStatusDto model constructor.
     * @property {module:model/CertificateStatusDto}
     */
    CertificateStatusDto,

    /**
     * The ClusterNodeDto model constructor.
     * @property {module:model/ClusterNodeDto}
     */
    ClusterNodeDto,

    /**
     * The ClusterStatusDto model constructor.
     * @property {module:model/ClusterStatusDto}
     */
    ClusterStatusDto,

    /**
     * The ContainerStateDto model constructor.
     * @property {module:model/ContainerStateDto}
     */
    ContainerStateDto,

    /**
     * The ContainerStateTerminatedDto model constructor.
     * @property {module:model/ContainerStateTerminatedDto}
     */
    ContainerStateTerminatedDto,

    /**
     * The ContainerStatusDto model constructor.
     * @property {module:model/ContainerStatusDto}
     */
    ContainerStatusDto,

    /**
     * The ContainerStatusDtoCurrentState model constructor.
     * @property {module:model/ContainerStatusDtoCurrentState}
     */
    ContainerStatusDtoCurrentState,

    /**
     * The ContainerStatusDtoLastTerminatedState model constructor.
     * @property {module:model/ContainerStatusDtoLastTerminatedState}
     */
    ContainerStatusDtoLastTerminatedState,

    /**
     * The DatabaseStatusDto model constructor.
     * @property {module:model/DatabaseStatusDto}
     */
    DatabaseStatusDto,

    /**
     * The EnvironmentStatusDto model constructor.
     * @property {module:model/EnvironmentStatusDto}
     */
    EnvironmentStatusDto,

    /**
     * The MetricDto model constructor.
     * @property {module:model/MetricDto}
     */
    MetricDto,

    /**
     * The NodeAddressDto model constructor.
     * @property {module:model/NodeAddressDto}
     */
    NodeAddressDto,

    /**
     * The NodeConditionDto model constructor.
     * @property {module:model/NodeConditionDto}
     */
    NodeConditionDto,

    /**
     * The NodePodInfoDto model constructor.
     * @property {module:model/NodePodInfoDto}
     */
    NodePodInfoDto,

    /**
     * The NodeResourceDto model constructor.
     * @property {module:model/NodeResourceDto}
     */
    NodeResourceDto,

    /**
     * The NodeTaintDto model constructor.
     * @property {module:model/NodeTaintDto}
     */
    NodeTaintDto,

    /**
     * The PodDto model constructor.
     * @property {module:model/PodDto}
     */
    PodDto,

    /**
     * The PodStatusDto model constructor.
     * @property {module:model/PodStatusDto}
     */
    PodStatusDto,

    /**
     * The ResourceStatusDto model constructor.
     * @property {module:model/ResourceStatusDto}
     */
    ResourceStatusDto,

    /**
     * The ServiceInfraLogResponseDto model constructor.
     * @property {module:model/ServiceInfraLogResponseDto}
     */
    ServiceInfraLogResponseDto,

    /**
     * The ServiceListPodsResponseDto model constructor.
     * @property {module:model/ServiceListPodsResponseDto}
     */
    ServiceListPodsResponseDto,

    /**
     * The ServiceLogResponseDto model constructor.
     * @property {module:model/ServiceLogResponseDto}
     */
    ServiceLogResponseDto,

    /**
     * The ServiceMetricsDto model constructor.
     * @property {module:model/ServiceMetricsDto}
     */
    ServiceMetricsDto,

    /**
     * The ServiceStateDto model constructor.
     * @property {module:model/ServiceStateDto}
     */
    ServiceStateDto,

    /**
     * The ServiceStatusDto model constructor.
     * @property {module:model/ServiceStatusDto}
     */
    ServiceStatusDto,

    /**
     * The ServiceType model constructor.
     * @property {module:model/ServiceType}
     */
    ServiceType,

    /**
     * The UnitDto model constructor.
     * @property {module:model/UnitDto}
     */
    UnitDto,

    /**
    * The ClusterStatusApi service constructor.
    * @property {module:api/ClusterStatusApi}
    */
    ClusterStatusApi,

    /**
    * The DeploymentApi service constructor.
    * @property {module:api/DeploymentApi}
    */
    DeploymentApi,

    /**
    * The LogsApi service constructor.
    * @property {module:api/LogsApi}
    */
    LogsApi,

    /**
    * The ServiceListPodsApi service constructor.
    * @property {module:api/ServiceListPodsApi}
    */
    ServiceListPodsApi,

    /**
    * The ServiceMetricsApi service constructor.
    * @property {module:api/ServiceMetricsApi}
    */
    ServiceMetricsApi,

    /**
    * The ServiceStatusApi service constructor.
    * @property {module:api/ServiceStatusApi}
    */
    ServiceStatusApi
};
