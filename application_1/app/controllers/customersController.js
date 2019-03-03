//$scope will be passed in automatically at runtime by AngularJS
//$scope is the glue between the view and the controller as far as data binding, handling events and those kind of things 
		
	//Option 1
	/*
	app.controller('CustomersController',  //now the app object module has controller inside of it called 'CustomersController'
		function CustomersController($scope){
			//Default behaviour
			$scope.sortBy = 'name';
			$scope.reverse = false;

			//now our $scope object has the customers property 
			$scope.customers = [{joined: '2000-12-02', name: 'John', city:'Chandler', orderTotal: 9.9956},
						  {joined: '1965-01-02', name: 'Jack', city:'New York', orderTotal: 6.945},
						  {joined: '2010-12-02', name: 'Sam', city:'Ireland', orderTotal: 3.76},
						  {joined: '2004-11-04', name: 'Danny', city:'Shannon', orderTotal: 5.2332}];

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			};
		}
	);
	*/

	//Option 2
	/*
	(function (){  //Defining a ananomous function is optional here, you could just leave it out

		angular.module('customersApp').controller('CustomersController',  //now the app object module has controller inside of it called 'CustomersController'
			function CustomersController($scope){
				//Default behaviour
				$scope.sortBy = 'name';
				$scope.reverse = false;

				//now our $scope object has the customers property 
				$scope.customers = [{joined: '2000-12-02', name: 'John', city:'Chandler', orderTotal: 9.9956},
							  {joined: '1965-01-02', name: 'Jack', city:'New York', orderTotal: 6.945},
							  {joined: '2010-12-02', name: 'Sam', city:'Ireland', orderTotal: 3.76},
							  {joined: '2004-11-04', name: 'Danny', city:'Shannon', orderTotal: 5.2332}];

				$scope.doSort = function(propName){
					$scope.sortBy = propName;
					$scope.reverse = !$scope.reverse;
				};
			}
		);

	}());
	*/


	//Option 3 

	(function (){  //Defining a ananomous function (This function gets self invoked, anything in this function gets pulled out of the global scope) is optional here, you could just leave it out

		//We have a variable or an object that is defined to a Function that does the AngularJs functionality and everything is stored inside the CustomersController
		//This technique is used to write your code first 
		var CustomersController = function CustomersController($scope){
				//Default behaviour
				$scope.sortBy = 'name';
				$scope.reverse = false;

				//now our $scope object has the customers property 
				$scope.customers = [{joined: '2000-12-02', name: 'John', city:'Chandler', orderTotal: 9.9956},
							  {joined: '1965-01-02', name: 'Jack', city:'New York', orderTotal: 6.945},
							  {joined: '2010-12-02', name: 'Sam', city:'Ireland', orderTotal: 3.76},
							  {joined: '2004-11-04', name: 'Danny', city:'Shannon', orderTotal: 5.2332}];

				$scope.doSort = function(propName){
					$scope.sortBy = propName;
					$scope.reverse = !$scope.reverse;
				};
			};

			//property used to avoid script minification issues with parameters that are injected into a controller
			CustomersController.$inject = ['$scope'];  //$inject used for putting different parameter names in CustomersController

		angular.module('customersApp').controller('CustomersController', CustomersController);//now the app object module has controller inside of it called 'CustomersController'


	}());