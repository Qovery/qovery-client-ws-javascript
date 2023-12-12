# WebsocketGateway.InfraStatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleInfraStatusRequest**](InfraStatusApi.md#handleInfraStatusRequest) | **GET** /infra/status | 



## handleInfraStatusRequest

> Object handleInfraStatusRequest(organization, cluster)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.InfraStatusApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
apiInstance.handleInfraStatusRequest(organization, cluster, (error, data, response) => {
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

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

