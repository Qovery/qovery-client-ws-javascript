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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WebsocketGateway);
  }
}(this, function(expect, WebsocketGateway) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WebsocketGateway.ServiceLogResponseDto();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ServiceLogResponseDto', function() {
    it('should create an instance of ServiceLogResponseDto', function() {
      // uncomment below and update the code to test ServiceLogResponseDto
      //var instance = new WebsocketGateway.ServiceLogResponseDto();
      //expect(instance).to.be.a(WebsocketGateway.ServiceLogResponseDto);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new WebsocketGateway.ServiceLogResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instance = new WebsocketGateway.ServiceLogResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property podName (base name: "pod_name")', function() {
      // uncomment below and update the code to test the property podName
      //var instance = new WebsocketGateway.ServiceLogResponseDto();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new WebsocketGateway.ServiceLogResponseDto();
      //expect(instance).to.be();
    });

  });

}));