define(["jquery", "knockout", "authAndNavigation", "messi", "viewModel"], function($, ko, auth, messi, viewModel){

    function RegisterUserViewModel() {
        var self = this;
        
        this.navigation = ko.observable(new auth("Register"));
        
        this.username = ko.observable();
        this.password = ko.observable();
        
        this.Register = function() {
            $.ajax({
              type: 'POST',
              data: ko.toJSON(self),
              contentType: 'application/json',
              url: 'https://whowillresign-jd78.c9.io/user/create'
            }).done(function(data){
                console.log(data);
                new messi(data.message, {buttons: [{id: 0, label: 'Go to login', val: 'Y'}], 
                    callback: function() { 
                        location.href = "/user/login"; 
                    }});
            }).error(function(data){
                console.log(data);
                messi.alert(data.responseJSON.error);
            });
        };
    }
    
    var registerUserViewModel = new RegisterUserViewModel();;

    $(document).ready(function(){
        ko.applyBindings(registerUserViewModel, $('#registerTemplate')[0]);
    });

});