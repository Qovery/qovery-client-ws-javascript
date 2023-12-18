# WebsocketGateway.ClusterStatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleClusterStatusRequest**](ClusterStatusApi.md#handleClusterStatusRequest) | **GET** /cluster/status | 



## handleClusterStatusRequest

> ClusterStatusDto handleClusterStatusRequest(organization, cluster)



### Example

```javascript
import WebsocketGateway from 'websocket_gateway';

let apiInstance = new WebsocketGateway.ClusterStatusApi();
let organization = "organization_example"; // String | 
let cluster = "cluster_example"; // String | 
apiInstance.handleClusterStatusRequest(organization, cluster, (error, data, response) => {
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

[**ClusterStatusDto**](ClusterStatusDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

