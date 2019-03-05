//$scope will be passed in automatically at runtime by AngularJS
//$scope is the glue between the view and the controller as far as data binding, handling events and those kind of things 
		function CustomersController($scope){
			//Default behaviour
			$scope.sortBy = 'name';
			$scope.reverse = false;

			//now our $scope object has the customers property 
			$scope.customers = [{joined: '2000-12-02', name: 'John', city:'Chandler', orderTotal: 9.9956},
						  {joined: '1965-01-02', name: 'Jack', city:'New York', orderTotal: 6.945},
						  {joined: '2010-12-02', name: 'Sam', city:'Ireland', orderTotal: 3.76},
						  {joined: '2004-11-04', name: 'Danny', city:'Shannon', orderTotal: 5.2332}]

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			}
		}