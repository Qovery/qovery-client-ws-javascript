# websocket_gateway

WebsocketGateway - JavaScript client for websocket_gateway
Describe the weboscket endpoints
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: $(grep &#39;version&#39; _build/openapi.yaml | head -1 | tr &#39;:&#39; &#39;\n&#39; | tail -1 | tr -d &#39; &#39;)
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install websocket_gateway --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your websocket_gateway from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/qovery/qovery-client-ws-javascript
then install it via:

```shell
    npm install qovery/qovery-client-ws-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var WebsocketGateway = require('websocket_gateway');


var api = new WebsocketGateway.ClusterStatusApi()
var organization = "organization_example"; // {String} 
var cluster = "cluster_example"; // {String} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.handleClusterStatusRequest(organization, cluster, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebsocketGateway.ClusterStatusApi* | [**handleClusterStatusRequest**](docs/ClusterStatusApi.md#handleClusterStatusRequest) | **GET** /cluster/status | 
*WebsocketGateway.DeploymentApi* | [**handleDeploymentLogsRequest**](docs/DeploymentApi.md#handleDeploymentLogsRequest) | **GET** /deployment/logs | 
*WebsocketGateway.DeploymentApi* | [**handleDeploymentStatusRequest**](docs/DeploymentApi.md#handleDeploymentStatusRequest) | **GET** /deployment/status | 
*WebsocketGateway.LogsApi* | [**handleInfraLogsRequest**](docs/LogsApi.md#handleInfraLogsRequest) | **GET** /infra/logs | 
*WebsocketGateway.LogsApi* | [**handleServiceLogsRequest**](docs/LogsApi.md#handleServiceLogsRequest) | **GET** /service/logs | 
*WebsocketGateway.ServiceListPodsApi* | [**handleServiceListPodsRequest**](docs/ServiceListPodsApi.md#handleServiceListPodsRequest) | **GET** /service/pods | 
*WebsocketGateway.ServiceMetricsApi* | [**handleMetricsRequest**](docs/ServiceMetricsApi.md#handleMetricsRequest) | **GET** /service/metrics | 
*WebsocketGateway.ServiceStatusApi* | [**handleServiceStatusRequest**](docs/ServiceStatusApi.md#handleServiceStatusRequest) | **GET** /service/status | 


## Documentation for Models

 - [WebsocketGateway.ApplicationStatusDto](docs/ApplicationStatusDto.md)
 - [WebsocketGateway.CertificateStatusDto](docs/CertificateStatusDto.md)
 - [WebsocketGateway.ClusterNodeDto](docs/ClusterNodeDto.md)
 - [WebsocketGateway.ClusterStatusDto](docs/ClusterStatusDto.md)
 - [WebsocketGateway.ContainerStateDto](docs/ContainerStateDto.md)
 - [WebsocketGateway.ContainerStateTerminatedDto](docs/ContainerStateTerminatedDto.md)
 - [WebsocketGateway.ContainerStatusDto](docs/ContainerStatusDto.md)
 - [WebsocketGateway.ContainerStatusDtoCurrentState](docs/ContainerStatusDtoCurrentState.md)
 - [WebsocketGateway.ContainerStatusDtoLastTerminatedState](docs/ContainerStatusDtoLastTerminatedState.md)
 - [WebsocketGateway.DatabaseStatusDto](docs/DatabaseStatusDto.md)
 - [WebsocketGateway.EnvironmentStatusDto](docs/EnvironmentStatusDto.md)
 - [WebsocketGateway.MetricDto](docs/MetricDto.md)
 - [WebsocketGateway.NodeAddressDto](docs/NodeAddressDto.md)
 - [WebsocketGateway.NodeConditionDto](docs/NodeConditionDto.md)
 - [WebsocketGateway.NodePodInfoDto](docs/NodePodInfoDto.md)
 - [WebsocketGateway.NodeResourceDto](docs/NodeResourceDto.md)
 - [WebsocketGateway.NodeTaintDto](docs/NodeTaintDto.md)
 - [WebsocketGateway.PodDto](docs/PodDto.md)
 - [WebsocketGateway.PodStatusDto](docs/PodStatusDto.md)
 - [WebsocketGateway.ResourceStatusDto](docs/ResourceStatusDto.md)
 - [WebsocketGateway.ServiceInfraLogResponseDto](docs/ServiceInfraLogResponseDto.md)
 - [WebsocketGateway.ServiceListPodsResponseDto](docs/ServiceListPodsResponseDto.md)
 - [WebsocketGateway.ServiceLogResponseDto](docs/ServiceLogResponseDto.md)
 - [WebsocketGateway.ServiceMetricsDto](docs/ServiceMetricsDto.md)
 - [WebsocketGateway.ServiceStateDto](docs/ServiceStateDto.md)
 - [WebsocketGateway.ServiceStatusDto](docs/ServiceStatusDto.md)
 - [WebsocketGateway.ServiceType](docs/ServiceType.md)
 - [WebsocketGateway.UnitDto](docs/UnitDto.md)


## Documentation for Authorization

All endpoints do not require authorization.
