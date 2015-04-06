define(["jquery", "knockout", "knockout-postbox", "messi", "text!./login.html"], function($, ko, postbox, messi, loginTemplate) {

    function loginUserViewModel() {
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
                location.href = "#";
            }).error(function(data){
                self.password('');
                messi.alert(data.responseJSON.error);
            });
        };
        
        return self;
    }
    
    return {
        viewModel: loginUserViewModel,
        template: loginTemplate
    };
});