function LoginUserViewModel() {
    var self = this;

    this.username = ko.observable();
    this.password = ko.observable();

    this.Login = function() {
        $.ajax({
            type: 'POST',
            data: ko.toJSON(self),
            contentType: 'application/json',
            url: 'https://whowillresign-jd78.c9.io/user/login'
        }).done(function(data){
            console.log(data);
            window.localStorage.setItem("token", data.token);
            window.localStorage.setItem("username", data.username);
            location.href = "/";
        }).error(function(data){
            self.password('');
            Messi.alert(data.responseJSON.error);
        });
    };
}

var viewModel;

$(document).ready(function() {
    viewModel = new LoginUserViewModel();
    ko.applyBindings(viewModel);
});