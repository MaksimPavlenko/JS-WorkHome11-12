$(function(){

	
	var html = $('#home').html(); 

	var data = {
		myName: 'Павленко Максим Николаевич',
		image: 'img/home.jpg',
		pCenter: 'Закончил Политехнический университет' + '<br>' + 'Работаю системным администратором',
		learn: 'Хочу учить FrontEnd, потому что:',
		about: 'Потому, что мне нравится этим заниматься' + '<br>' + 'Зниматься FrontEnd интересно' + '<br>' + 'И самое главное этот труд стоит того',
		phoneTitle: 'Мой контактный номер телефона:',
		phoneNumber: '+38063283141§',
		myProfile: 'Мой профиль в соц. сетях:',
		facebookUrl: 'facebook.com/хххх',
		twitterUrl: 'twitter.com/хххх',

	};


	var content = tmpl(html, data);
	$('body').append(content);

});	