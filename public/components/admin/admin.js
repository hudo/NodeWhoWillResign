define(["knockout", "text!./admin.html"], function(ko, homeTemplate) {

    function homeViewModel(params) {
        var self = this;
        
        return self;
    }
    
    return {
        viewModel: homeViewModel,
        template: homeTemplate
    };

});