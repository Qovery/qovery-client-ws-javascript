# WebsocketGateway.ServiceListPodsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleServiceListPodsRequest**](ServiceListPodsApi.md#handleServiceListPodsRequest) | **GET** /service/pods | 



## handleServiceListPodsRequest

> ServiceListPodsResponseDto handleServiceListPodsRequest(organization, cluster, project, environment, service)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.ServiceListPodsApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
let service = "service_example"; // String | 
apiInstance.handleServiceListPodsRequest(organization, cluster, project, environment, service, (error, data, response) => {
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

[**ServiceListPodsResponseDto**](ServiceListPodsResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

