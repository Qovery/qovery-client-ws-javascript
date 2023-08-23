# WebsocketGateway.ServiceStatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleServiceStatusRequest**](ServiceStatusApi.md#handleServiceStatusRequest) | **GET** /service/status | 



## handleServiceStatusRequest

> ServiceStatusDto handleServiceStatusRequest(organization, cluster, project, environment)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.ServiceStatusApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
apiInstance.handleServiceStatusRequest(organization, cluster, project, environment, (error, data, response) => {
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

### Return type

[**ServiceStatusDto**](ServiceStatusDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

