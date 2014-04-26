var App =  function(undefined) {

    var _url = 'http://localhost:8000';

    _login = function(user) {
        _proxy("POST","/login",{name: user.name, password: user.password});
    };

    // Private
    _proxy = function(method, type, parameters) {
      $.ajax({
          url: _url+type,
          type: method,
          data: parameters,
          dataType: 'json'
        }).done(function() {
          console.log("done!");
        });
    };

    return {
        login: _login
    };
}();

$( "#login_button" ).click(function() {
  App.login({
    name: $("#name_input").val(),
    password: $("#pass_input").val()
  });
});