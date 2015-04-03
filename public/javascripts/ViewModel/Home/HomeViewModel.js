function HomeViewModel(){
    var self = this;
    
    this.navigation = ko.observable(new AuthAndNavigationObject("Home"));
    
    this.Load = function(){
        $.get('https://whowillresign-jd78.c9.io/employee/', function(data){
            console.log(data);
        }).fail(function(err){
            console.log(err);
        });
    };
}

var viewModel;
$(document).ready(function(){
   viewModel = new HomeViewModel();
   ko.applyBindings(viewModel);
});

$(window).load(function(){
   viewModel.Load(); 
});