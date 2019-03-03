
//app variable represents customersApp module  --Option 1
//var app = angular.module('customersApp', []);  //This is how you create a module named 'customersApp' , [] is used for any dependencies i.e. any third party libraries used 

//Option 2 - We wrap the module definition inside the anonymous function 
(function(){
	//Anything you put inside in this function will no longer will be in the global scope 
	var app = angular.module('customersApp', ['ngRoute']);  //here we definie reference or dependecy which is called ngRoute, and we are set up to configure some routes 

	app.config(function ($routeProvider){  //we inject in $routeProvider dynamically, $routeProvider will be injected automatically meaning that AngularJs will create that instance just like the scope 

		//Routes go here 
		//We can use now $routeProvider to configure a route: we will give it 3 things : 1. Path   2. View   3. Controller
		$routeProvider
			.when('/', {     //First parameter '/' represents our path 
				//Object Literals 
				controller: 'CustomersController',  //Name of the controller that was configured and add it into our module 
				//When the users go to the home page '/' then customers.html view is going to be loaded and brain behind that is the CustomersController 
				templateUrl: '/app/views/customers.html'  //Path to the view that you want to load in with this controller 
			})
			/*.when('/orders', {     //First parameter '/' represents our path 
				//Object Literals 
				controller: 'OrdersController',  //Name of the controller that was configured and add it into our module 
				templateUrl: '/app/views/orders.html'  //Path to the view that you want to load in with this controller 
			})*/
			.otherwise({ redirectTo: '/'});  //Otherwise (default) will redirect to the home page 

	});

}());