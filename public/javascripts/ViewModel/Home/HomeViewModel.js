function HomeViewModel(){
    var self = this;
    
    this.isUserLogged = ko.observable(window.localStorage.getItem("token") != null && window.localStorage.getItem("token") != "null");
    this.username = ko.observable(window.localStorage.getItem("username"));
    this.token = ko.observable(window.localStorage.getItem("token"));
    
    this.Logout = function(){
        self.isUserLogged(false);
        self.username('');
        self.token('');
        window.localStorage.setItem("token", null);
        window.localStorage.setItem("username", null);
        window.localStorage.setItem("token", null);
    };
}

var viewModel;
$(document).ready(function(){
   viewModel = new HomeViewModel();
   ko.applyBindings(viewModel);
});