		function CustomersController(){
			//Default behaviour
			this.sortBy = 'name';
			this.reverse = false;

			//now our this object has the customers property 
			this.customers = [{joined: '2000-12-02', name: 'John', city:'Chandler', orderTotal: 9.9956},
						  {joined: '1965-01-02', name: 'Jack', city:'New York', orderTotal: 6.945},
						  {joined: '2010-12-02', name: 'Sam', city:'Ireland', orderTotal: 3.76},
						  {joined: '2004-11-04', name: 'Danny', city:'Shannon', orderTotal: 5.2332}]

			this.doSort = function(propName){
				this.sortBy = propName;
				this.reverse = !this.reverse;
			};
		}