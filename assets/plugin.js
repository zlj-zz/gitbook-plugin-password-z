var gitbook = window.gitbook;

gitbook.events.on('page.change', function() {

	let enter_password_modal = [
		'<div class="modal" tabindex="-1" role="dialog">',
		'<div class="modal-dialog-centered" role="document">',
        '<Form>',
		'<Form.Group>',
		'<Input type="password" name="password" placeholder="请输入密码" required />',
		'</Form.Group>',
		'<Form.Actions>',
		'<Button type="submit" style="primary">提交</Button>',
		'</Form.Actions>',
		'</Form>',
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
