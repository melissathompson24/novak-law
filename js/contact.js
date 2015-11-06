//Contact Page JS================================================

	//Listen for user to submit form
	$('#form').submit(function(event) {//make sure you're calling the form, not the button. :)
		event.preventDefault();

		//store name field value
		var myName = $("input#name").val();

		//store email field value
	 	var myEmail = $("input#email").val();

	 	//store name field value
		var myPhone = $("input#phone").val();

	 	//store option field value
	  	var myOptions = $("input:radio[name=options]:checked").val();

		//store description field value
	  	var myDescription = $("textarea#description").val();

		//submit form
	  	submitForm(myName, myEmail, myPhone, myDescription, myOptions); 
	 	//console.log(myName, myEmail, myDescription, myPersonal, myProfessional, myBoth);
		
		$('#form')[0].reset();
	 });





	//Send/post form values to httpbin
	function submitForm(myName, myEmail, myPhone, myDescription, myOptions) { 

		$.ajax({ 
			url:'https://httpbin.org/post', 
			type: 'POST', 
			data:{ description:myDescription,options:myOptions,phone:myPhone,email:myEmail,name:myName }, //phone:MyPhone,
			dataType: 'json',
			success: function(response){		

				function render(form){

					var formThanks = $('.formThanks');
					var formResults = $('.formResults');
					//formResults.empty();//replaces the results each time the form is submittted.
					formThanks.append('<div><h2 class="text-center">Thanks!</h2></div><div><h2 class="text-center">We\'ll be in touch soon.</h2></div>');

				}				

				render(response);

			}
		})

	};