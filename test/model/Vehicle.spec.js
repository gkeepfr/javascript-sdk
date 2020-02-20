/**
 * Gkeep API
 * Gkeep API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GkeepApi);
  }
}(this, function(expect, GkeepApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GkeepApi.Vehicle();
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

  describe('Vehicle', function() {
    it('should create an instance of Vehicle', function() {
      // uncomment below and update the code to test Vehicle
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be.a(GkeepApi.Vehicle);
    });

    it('should have the property photoPath (base name: "photo_path")', function() {
      // uncomment below and update the code to test the property photoPath
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property totalDayOff (base name: "total_day_off")', function() {
      // uncomment below and update the code to test the property totalDayOff
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property initialConsumption (base name: "initial_consumption")', function() {
      // uncomment below and update the code to test the property initialConsumption
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property navSystemObjectUid (base name: "nav_system_object_uid")', function() {
      // uncomment below and update the code to test the property navSystemObjectUid
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property photo (base name: "photo")', function() {
      // uncomment below and update the code to test the property photo
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property registration (base name: "registration")', function() {
      // uncomment below and update the code to test the property registration
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property releaseYear (base name: "release_year")', function() {
      // uncomment below and update the code to test the property releaseYear
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property technical (base name: "technical")', function() {
      // uncomment below and update the code to test the property technical
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property navSystem (base name: "nav_system")', function() {
      // uncomment below and update the code to test the property navSystem
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property sensor (base name: "sensor")', function() {
      // uncomment below and update the code to test the property sensor
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property tanks (base name: "tanks")', function() {
      // uncomment below and update the code to test the property tanks
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property tankPosition (base name: "tank_position")', function() {
      // uncomment below and update the code to test the property tankPosition
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property isMaintenanceEnabled (base name: "is_maintenance_enabled")', function() {
      // uncomment below and update the code to test the property isMaintenanceEnabled
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property ptac (base name: "ptac")', function() {
      // uncomment below and update the code to test the property ptac
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property eligibleForTicpe (base name: "eligible_for_ticpe")', function() {
      // uncomment below and update the code to test the property eligibleForTicpe
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property eligibleForTsvr (base name: "eligible_for_tsvr")', function() {
      // uncomment below and update the code to test the property eligibleForTsvr
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property nationalType (base name: "national_type")', function() {
      // uncomment below and update the code to test the property nationalType
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property fuelType (base name: "fuel_type")', function() {
      // uncomment below and update the code to test the property fuelType
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property property (base name: "property")', function() {
      // uncomment below and update the code to test the property property
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

    it('should have the property boxId (base name: "box_id")', function() {
      // uncomment below and update the code to test the property boxId
      //var instane = new GkeepApi.Vehicle();
      //expect(instance).to.be();
    });

  });

}));
