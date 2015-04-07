define(["jquery", "knockout", "text!./register.html", "configuration", "messi"], function($, ko, registerTemplate, configuration) {

    function RegisterUserViewModel() {
        var self = this;

        this.username = ko.observable().extend({ required: true });
        this.password = ko.observable().extend({ required: true });

        this.Register = function() {
            if (self.errors().length > 0) {
              self.errors.showAllMessages();
              return;
            }  
            
            $.ajax({
                type: 'POST',
                data: ko.toJSON(self),
                contentType: 'application/json',
                url: configuration.webApiUrl + 'user/create'
            }).done(function(data) {
                console.log(data);
                new Messi(data.message, {
                    buttons: [{
                        id: 0,
                        label: 'Go to login',
                        val: 'Y'
                    }],
                    callback: function() {
                        location.href = "#login";
                    }
                });
            }).error(function(data) {
                console.log(data);
                Messi.alert(data.responseJSON.error);
            });
        };
        
        this.errors = ko.validation.group(self);

        return self;
    }
    
    return {
        viewModel: RegisterUserViewModel,
        template: registerTemplate
    };
    
});