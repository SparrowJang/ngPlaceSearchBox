ngPlaceSearchBox
===============================

An [Angularjs](http://angularjs.org/) module that is place box of google map.

##Dependency

* angularjs
* google map

##Install

```
bower install ngPlaceSearchBox
```

##Usage

####Include angular 、google map and ngPlaceSearchBox javascripts
```
<script type="text/javascript" src="/bower_components/angular/angular.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&libraries=places"></script>
<script type="text/javascript" src="/src/ngPlaceSearchBox.js"></script>
```

####Create a search box element ,and set output model and input model
```
<div ng-place-search-box box-input="inputText" ng-model="data" ></div>
```

####Setup a dependency of module
```
angular.module( "app", [
	"google.maps"
]);
```

> Optionally, specify `bounds` 、 `on-places-changed` event and placeholder text:
Set a event of search result.
```
<div on-places-changed="onPlacesChanged()" ng-place-search-box box-text="inputText" ng-model="data"></div>
```
Set a high priority bounds.
```
<div bounds="bounds" ng-place-search-box box-input="inputText" ng-model="data"></div>
```
```
var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(21.88189,119.254875),
    new google.maps.LatLng(25.492868,122.97924));
$scope.defaultBounds;
```
Set a placeholder text.
```
div placeholder-text="Search Box" ng-place-search-box ng-model="data"></div>
```

If you want to set `required` or `class` attribute to input, do the following:

```
<div box-input="inputText" box-required="true" box-class="boxClass" ng-place-search-box ng-model="data"></div>
```

##Demo
 
Clone this project.
 
```
git clone http://github.com/SparrowJang/ngPlaceSearchBox.git
 
cd ngPlaceSearchBox
```
 
Install the express framework and grunt modules.
```
npm install
```
 
run a server:
```
grunt server
```
 
Finally,open your brower,enter [http://localhost:3000/index.html](http://localhost/index.html).

