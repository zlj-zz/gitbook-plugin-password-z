require(["gitbook", "jQuery"], function (gitbook, $) {
  // Init configuration at start
  gitbook.events.bind("start", function (e, config) {
    let password = config.password;

    gitbook.storage.set("password", password);
    // console.log("ps", gitbook.storage);
    // console.log("ps", gitbook.storage.get("password"));
  });

  gitbook.events.on("page.change", function () {
    // If set password.
    if (gitbook.storage.get("password") === undefined) {
      $(".book").show();
      return;
    }

    // process password.
    if (
      gitbook.storage.get("login@global") === true ||
      gitbook.storage.get("login@" + gitbook.page.getState().filepath) ===
        true ||
      (gitbook.storage.get("password")["global"] == undefined &&
        gitbook.storage.get("password")[gitbook.page.getState().filepath] ==
          undefined)
    ) {
      $(".book").show();
    } else {
      let ps = gitbook.storage.get("password");

      let enter_password_modal = [
        '<div class="modal" tabindex="-1" role="dialog">',
        '<div class="modal-dialog-centered" role="document">',
        '<form class="form-inline">',
        '<div class="form-group mx-sm-3 mb-2">',
        '<label for="inputPassword" class="sr-only">Password</label>',
        '<input type="password" class="form-control" id="inputPassword" placeholder="Password">',
        "</div>",
        '<button type="submit" class="btn btn-dark mx-sm-3 mb-2">Submit</button>',
        "</form>",
        "</div>",
        "</div>",
      ].join("");

      $("body").append(enter_password_modal);

      console.log($(".modal"));
      // $('.modal').modal({ backdrop: "static" })

      $("form").submit(function (event) {
        event.preventDefault();
        let password = $("#inputPassword").val();
        // console.log("ps ps", password);

        if (password == undefined || password == "") {
          alert("请输入密码！");
          return;
        }
        if (password == ps["global"]) {
          //$('.modal').modal('hide');
          $(".book").show();
          $(".modal").remove();
          gitbook.storage.set("login@global", true);
        } else if (password == ps[gitbook.page.getState().filepath]) {
          //$('.modal').modal('hide');
          $(".book").show();
          $(".modal").remove();
          gitbook.storage.set(
            "login@" + gitbook.page.getState().filepath,
            true
          );
        } else {
          alert("密码错误");
        }
      });
    }
  });
});
