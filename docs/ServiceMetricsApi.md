# WebsocketGateway.ServiceMetricsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleMetricsRequest**](ServiceMetricsApi.md#handleMetricsRequest) | **GET** /service/metrics | 



## handleMetricsRequest

> ServiceMetricsDto handleMetricsRequest(organization, cluster, project, environment, service, serviceType)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.ServiceMetricsApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
let project = "project_example"; // String | 
let environment = "environment_example"; // String | 
let service = "service_example"; // String | 
let serviceType = new WebsocketGateway.ServiceType(); // ServiceType | 
apiInstance.handleMetricsRequest(organization, cluster, project, environment, service, serviceType, (error, data, response) => {
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
 **serviceType** | [**ServiceType**](.md)|  | 

### Return type

[**ServiceMetricsDto**](ServiceMetricsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

