var gitbook = window.gitbook;

// Init configuration at start
gitbook.events.bind('start', function(e, config) {
	let password = config.password;

	gitbook.storage.set("password", password);
});

gitbook.events.on('page.change', function() {
	if (gitbook.storage.get('login@global') == true || gitbook.storage.get('login@' + gitbook.page.getState().filepath) == true) {
		$(".book").show();
	} else {
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
			if (password == gitbook.storage.get('password')['global']) {
				$('.modal').modal('hide');
				$('.book').show();
				gitbook.storage.set("login@global", true);
			} else if (password == gitbook.storage.get('password')[gitbook.page.getState().filepath]) {
				$('.modal').modal('hide');
				$('.book').show();
				gitbook.storage.set("login@" + gitbook.page.getState().filepath, true);
			} else {
				alert('密码错误');
			}
		})
	}
});

