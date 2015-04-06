console.log("controller.js connected");
var itemApp = angular.module('itemApp', []);

itemApp.controller('itemsController', function ($scope) {
  object = {
      "items": [
      {
      "Id": "54b52ea0b924ef3433491c2d", "OSS": {
      "Name": "Rowe Moran",
      "Company": "TALENDULA",
      "Image": "http://lorempixel.com/100/100/sports/"
      } },
      {
      "Id": "54b52ea0ca3b0ae85e780ad2", "OSS": {
      "Name": "Lorena Warren",
      "Company": "CYTREK",
      "Image": "http://lorempixel.com/100/100/sports/"
      } },
      {
      "Id": "54b52ea033a2c0b90c63d4f1", "OSS": {
      "Name": "Guthrie Howard",
      "Company": "BICOL",
      "Image": "http://lorempixel.com/100/100/sports/"
      } },
      {
      "Id": "54b52ea0ac080a7ea68023f4", "OSS": {
      "Name": "Cheri Sawyer",
      "Company": "ORGANICA",
      "Image": "http://lorempixel.com/100/100/sports/"
      } },
      {
      "Id": "54b52ea03063c4c95edd015d", "OSS": {
      "Name": "Kelly Vinson",
      "Company": "ZEPITOPE",
      "Image": "http://lorempixel.com/100/100/sports/"
      } }
    ]
  }

  console.log(object.items[1].OSS);
  $scope.items = object.items;
});
