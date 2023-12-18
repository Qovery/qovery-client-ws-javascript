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
    instance = new WebsocketGateway.NodePodInfoDto();
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

  describe('NodePodInfoDto', function() {
    it('should create an instance of NodePodInfoDto', function() {
      // uncomment below and update the code to test NodePodInfoDto
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be.a(WebsocketGateway.NodePodInfoDto);
    });

    it('should have the property cpuMilliLimit (base name: "cpu_milli_limit")', function() {
      // uncomment below and update the code to test the property cpuMilliLimit
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property cpuMilliRequest (base name: "cpu_milli_request")', function() {
      // uncomment below and update the code to test the property cpuMilliRequest
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property environmentId (base name: "environment_id")', function() {
      // uncomment below and update the code to test the property environmentId
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property imagesVersion (base name: "images_version")', function() {
      // uncomment below and update the code to test the property imagesVersion
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property memoryMibLimit (base name: "memory_mib_limit")', function() {
      // uncomment below and update the code to test the property memoryMibLimit
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property memoryMibRequest (base name: "memory_mib_request")', function() {
      // uncomment below and update the code to test the property memoryMibRequest
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property namespace (base name: "namespace")', function() {
      // uncomment below and update the code to test the property namespace
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "service_id")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new WebsocketGateway.NodePodInfoDto();
      //expect(instance).to.be();
    });

  });

}));
