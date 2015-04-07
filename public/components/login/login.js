define([
    "jquery", 
    "knockout", 
    "text!./login.html",
    "configuration",
    "knockout-postbox", 
    "messi", 
    "knockout-validation"
    ], function($, ko, loginTemplate, configuration) {

    function loginUserViewModel() {
        var self = this;
        this.username = ko.observable().extend({ required: true });
        this.password = ko.observable().extend({ required: true });
    
        this.Login = function() {
            if (self.errors().length > 0) {
              self.errors.showAllMessages();
              return;
            }  
            
            $.ajax({
                type: 'POST',
                data: ko.toJSON(self),
                contentType: 'application/json',
                url: configuration.webApiUrl + 'user/login'
            }).done(function(data){
                console.log(data);
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", data.username);
                window.localStorage.setItem("isAdmin", data.isAdmin);
                location.href = "#";
            }).error(function(data){
                self.password('');
                Messi.alert(data.responseJSON.error);
            });
        };
        
        this.errors = ko.validation.group(self);
        
        return self;
    }
    
    return {
        viewModel: loginUserViewModel,
        template: loginTemplate
    };
});