define(["jquery", "knockout", "text!./register.html", "messi"], function($, ko, registerTemplate) {

    function RegisterUserViewModel() {
        var self = this;

        this.username = ko.observable();
        this.password = ko.observable();

        this.Register = function() {
            $.ajax({
                type: 'POST',
                data: ko.toJSON(self),
                contentType: 'application/json',
                url: 'https://whowillresign-jd78.c9.io/user/create'
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

        return self;
    }
    
    return {
        viewModel: RegisterUserViewModel,
        template: registerTemplate
    };
    
});