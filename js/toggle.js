$(document).ready(function(){
	
	
		$("#logIn").leanModal({top : 200, overlay : 0.6, closeButton: ".hidemodal" });
	

	
	// Calling Login Form
		$("#login_form").click(function(){
			$(".social_login").hide();
			$(".user_login").show();
			return false;
		});
		
		$("#logOut").click(function(){
			$.session.remove('username');
			location.reload();
		});

		// Calling Register Form
		$("#register_form").click(function(){
			$(".social_login").hide();
			$(".user_register").show();
			$(".header_title").text('Регистрирај');
			return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function(){
			$(".user_login").hide();
			$(".user_register").hide();
			$(".social_login").show();
			$(".header_title").text('Логирај');
			return false;
		});

 	$("#prikaziTabela").click(function(){
		$('#IzmeniOGL').hide();
		$('#DodadiOGL').hide();
		$('#oglasi').hide();
   $("#oglasi").toggle(1000);
  });
});

$(document).ready(function(){
	$("#DOTabela").click(function(){
		$('#oglasi').hide();
		$('#IzmeniOGL').hide();
		$('#DodadiOGL').hide();
   $("#DodadiOGL").toggle(1000);
  });
});

$(document).ready(function(){
   $("#IZTabela").click(function(){
		$('#oglasi').hide();
		$('#DodadiOGL').hide();
		$('#IzmeniOGL').hide();
   $("#IzmeniOGL").toggle(1000);
  });
});