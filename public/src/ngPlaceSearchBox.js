
(function( angular ){

  'use strict';

  var app = angular.module( 'google.maps', [] );

  app.directive( 'ngPlaceSearchBox' , function(){

    return {

      restrict: "A",

      require: 'ngModel',
      
      scope:{
        value:'=ngModel',
        bounds:'=bounds',
        placesChanged:"&onPlacesChanged",
        required:"@boxRequired",
        inputText:"=boxText",
        placeholderText:"@placeholderText",
        boxClass:"@boxClass"
      }, 

      template:'<input type="text" ng-required="{{required}}" placeholder="{{placeholderText}}" ng-model="inputText"/>',

      compile: function(tElement, tAttrs, transclude) {

        return {

          pre: function preLink(scope, iElement, iAttrs, controller) {

            var input = iElement.find( 'input' );

            if ( iAttrs.boxClass ) input.attr( 'class', iAttrs.boxClass );
          }
        };
      },

      link:function( scope, elem, attrs, ctrl ){

        var input = elem.find( 'input' );

        var searchBox = new google.maps.places.SearchBox( input[0] );


        google.maps.event.addListener( searchBox, 'places_changed', function(){

          scope.value = {places:searchBox.getPlaces()};
          scope.$apply();

          if ( angular.isFunction( scope.placesChanged ) ) scope.placesChanged();
        });

        var clearListener = scope.$watch( "bounds", function(){

          searchBox.setBounds( scope.bounds );
        });

        scope.$on( "$destroy", function(){

          clearListener();
          google.maps.event.clearListeners( searchBox, 'places_changed' );
        });
 
      }

    };

  });

})( angular );

