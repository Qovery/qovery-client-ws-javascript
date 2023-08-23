# WebsocketGateway.LogsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleInfraLogsRequest**](LogsApi.md#handleInfraLogsRequest) | **GET** /infra/logs | 
[**handleServiceLogsRequest**](LogsApi.md#handleServiceLogsRequest) | **GET** /service/logs | 



## handleInfraLogsRequest

> ServiceInfraLogResponseDto handleInfraLogsRequest(organization, cluster, project, environment, service, infraComponentType)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.LogsApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
let service = "service_example"; // String | 
let infraComponentType = "infraComponentType_example"; // String | 
apiInstance.handleInfraLogsRequest(organization, cluster, project, environment, service, infraComponentType, (error, data, response) => {
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
 **service** | **String**|  | 
 **infraComponentType** | **String**|  | 

### Return type

[**ServiceInfraLogResponseDto**](ServiceInfraLogResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## handleServiceLogsRequest

> ServiceLogResponseDto handleServiceLogsRequest(organization, cluster, project, environment, service)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.LogsApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
let service = "service_example"; // String | 
apiInstance.handleServiceLogsRequest(organization, cluster, project, environment, service, (error, data, response) => {
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
 **service** | **String**|  | 

### Return type

[**ServiceLogResponseDto**](ServiceLogResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

