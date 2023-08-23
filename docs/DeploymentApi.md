# WebsocketGateway.DeploymentApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleDeploymentLogsRequest**](DeploymentApi.md#handleDeploymentLogsRequest) | **GET** /deployment/logs | 
[**handleDeploymentStatusRequest**](DeploymentApi.md#handleDeploymentStatusRequest) | **GET** /deployment/status | 



## handleDeploymentLogsRequest

> String handleDeploymentLogsRequest(organization, cluster, project, environment, version)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.DeploymentApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
let version = "version_example"; // String | 
apiInstance.handleDeploymentLogsRequest(organization, cluster, project, environment, version, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **String**|  | 
 **cluster** | **String**|  | 
 **project** | **String**|  | 
 **environment** | **String**|  | 
 **version** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain


## handleDeploymentStatusRequest

> String handleDeploymentStatusRequest(organization, cluster, project, environment, version)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.DeploymentApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
let version = "version_example"; // String | 
apiInstance.handleDeploymentStatusRequest(organization, cluster, project, environment, version, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organization** | **String**|  | 
 **cluster** | **String**|  | 
 **project** | **String**|  | 
 **environment** | **String**|  | 
 **version** | **String**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

