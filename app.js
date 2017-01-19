
$( document ).ready(function() {

	$('#userBtn').click(function(event) {
		event.preventDefault();

		$.get('https://api.github.com/users/eashevchenko', function(data) {
			$('#data').text(JSON.stringify(data, null, 4););
		});
	});
});