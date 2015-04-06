define(["knockout", "text!./home.html"], function(ko, homeTemplate) {

    function homeViewModel(params) {
        var self = this;
        self.title = ko.observable("Dipping your feet into KnockoutJS");

        return self;
    }
    
    return {
        viewModel: homeViewModel,
        template: homeTemplate
    };

});