define(["jquery", "knockout", "text!./admin.html", "configuration", "employee"], function($, ko, homeTemplate, configuration, employee) {

    function homeViewModel(params) {
        var self = this;
        
        this.employees = ko.observableArray();
        
        $.get(configuration.webApiUrl + 'employee', function(data) {
            var obj = JSON.parse(data);
            $.each(obj, function(i, item){
               self.employees.push(employee.create(item)); 
            });
        }).fail(function(err){
            console.log(err);
        });
        
        return self;
    }
    
    return {
        viewModel: homeViewModel,
        template: homeTemplate
    };
});