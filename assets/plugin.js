var gitbook = window.gitbook;

gitbook.events.on('page.change', function() {

	let enter_password_modal = [
		'<div class="modal" tabindex="-1" role="dialog">',
		'<div class="modal-dialog-centered" role="document">',
		'<form class="form-inline">',
		'<div class="form-group mx-sm-3 mb-2">',
		'<label for="inputPassword" class="sr-only">Password</label>',
		'<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
		'</div>',
		'<button type="submit" class="btn btn-dark mb-2">Submit</button>',
		'</form>',
		'</div>',
		'</div>'
	].join("");

	$("body").append(enter_password_modal)

	$('.modal').modal({backdrop: "static"})

	$('form').submit(function(event) {
		event.preventDefault();
		let password = $('input[name="password"]').val();
		if (password == 123456) {
			$('.modal').modal('hide');
			$('.book').show();
		} else {
			alert('密码错误');
		}
	})
	
});
