function HomeViewModel(){
    var self = this;
    
    this.navigation = ko.observable(new AuthAndNavigationObject("Home"));
}

var viewModel;
$(document).ready(function(){
   viewModel = new HomeViewModel();
   ko.applyBindings(viewModel);
});