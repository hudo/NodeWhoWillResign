define(["jquery", "knockout", "router", "bootstrap", "knockout-projections"], function($, ko, router) {

    ko.components.register('navbar', { require: 'components/navbar/navbar' });
    ko.components.register("home", { require: "components/home/home" });
    ko.components.register("login", { require: "components/login/login" });
    ko.components.register("register", { require: "components/register/register" });
    
    ko.applyBindings({
        route: router.currentRoute
    });
});