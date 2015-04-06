define(["jquery", "knockout", "authAndNavigation"], function($, ko, auth){
    
    function HomeViewModel(){
        var self = this;
        
        this.navigation = ko.observable(new auth("Home"));
        this.content = ko.observable();
        
        this.Load = function(){
            $.get('https://whowillresign-jd78.c9.io/employee/', function(data){
                console.log(JSON.parse(data));
            }).fail(function(err){
                console.log(err);
            });
        };
        
        this.LoginContent = function(){
            $.get('https://whowillresign-jd78.c9.io/user/login', function(html){
               self.content(html);
               self.navigation(new auth("Login"));
            });
        };
        
        this.RegisterContent = function(){
            $.get('https://whowillresign-jd78.c9.io/user/create', function(html){
               self.content(html);
               self.navigation(new auth("Register"));
            });
        };
    }
    
    var viewModel = new HomeViewModel();
    
    $(document).ready(function(){
       ko.applyBindings(viewModel);
    });
    
    $(window).load(function(){
       viewModel.Load(); 
    });
    
    return viewModel;
});