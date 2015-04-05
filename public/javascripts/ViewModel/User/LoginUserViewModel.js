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
            window.localStorage.setItem("isAdmin", data.isAdmin);
            //location.href = "/";
            viewModel.navigation(new AuthAndNavigationObject("Home"));
            viewModel.content("");
        }).error(function(data){
            self.password('');
            Messi.alert(data.responseJSON.error);
        });
    };
}

var loginUserViewModel = new LoginUserViewModel();

$(document).ready(function(){
   ko.applyBindings(loginUserViewModel, $('#loginTemplate')[0]); 
});