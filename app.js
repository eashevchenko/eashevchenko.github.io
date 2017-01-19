
$( document ).ready(function() {
   $.get('https://api.github.com/users/eashevchenko', function(data) {
	$('#data').text(JSON.stringify(data));
	});
});