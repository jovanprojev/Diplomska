Parse.initialize("byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", "cPVB8GgClmkvsXnkWPiQPbyTuHBOmZ0nQ4cYMMHJ");
$(function(){
	
	Parse.initialize("byR5XyYU1jpRIJKiBbxKcE5T3vxF97p2tqCSpc8Q", "cPVB8GgClmkvsXnkWPiQPbyTuHBOmZ0nQ4cYMMHJ");

	$('#DOTabela').hide();
    	$('#IZTabela').hide();
    	$('#logOut').hide();
    	
    	var check = $.session.get("username");
    	if(check != null){
    		$('#dodadi').empty();
    		$('#dodadi').append("<h3>Добредојде <span style='color:red'>"+check+"</span></h3>");
    		$('#DOTabela').show();
    		$('#IZTabela').show();
    		$('#logOut').show();
    		$('#logIn').hide();

    		
    		var scope = angular.element($("#dodadi")).scope();
    		scope.$apply(function(){
        	scope.username = check;
    })
    		
    	}
    	
    	
    	$("#send").click(function(){
	var username = $('#uname').val();
        	var password=$('#passwd').val();
       	Parse.User.logIn($('#uname').val(), $('#passwd').val(), {
        	success: function(user) {
        		alert("Корисникот е логиран!")
        		$('#dodadi').empty();
        	$('#dodadi').append("<h3>Добредојде <span style='color:red'>"+username+"</span></h3>");
        	$('#DOTabela').show();
    	$('#IZTabela').show();
    	$('#logOut').show();
    		$('#logIn').hide();

    	$.session.set("username", username);
    	//user
    	var scope = angular.element($("#dodadi")).scope();
    scope.$apply(function(){
        scope.username = username;
    })
    	
 		 }, 
      	  error: function(user, error) {
       	$('#dodadi').append("<span style='color:red'>Неточно корисничко име или лозинка</span>");  }
});

      });
	
	
	 $("#reg").click(function(){
	var user = new Parse.User();
			user.set("username", document.getElementById('username').value);
			user.set("password", document.getElementById('password').value);
			user.set("email", document.getElementById('email').value);
 
	
 
		user.signUp(null, {
 			 success: function(user) {
   		 console.log("success")
			alert("Додаден е нов корисник!")
			location.reload();
  		},
  
  		error: function(user, error) {
    		// Show the error message somewhere and let the user try again.
    		alert("Error: " + error.code + " " + error.message);
  		}
		});
		    });
    });

	$(function(){
	$(".registracija").hide();

		$("#najava").click(function(){
			$(".registracija").hide();
			$(".najavuvanje").show();
			return false;
		});
		$("#regist").click(function(){
			$(".najavuvanje").hide();
			$(".registracija").show();
			return false;
		});
	});



	