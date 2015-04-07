define(["jquery", "knockout", "router", "bootstrap", "knockout-projections", "knockout-validation"], function($, ko, router) {

    ko.components.register('navbar', { require: 'components/navbar/navbar' });
    ko.components.register("home", { require: "components/home/home" });
    ko.components.register("login", { require: "components/login/login" });
    ko.components.register("register", { require: "components/register/register" });
    ko.components.register("admin", { require: "components/admin/admin" });
    
    ko.validation.init({
      registerExtenders: true,
      messagesOnModified: true,
      insertMessages: false,
      parseInputAttributes: true,
      messageTemplate: null,
      decorateInputElement: true,
      errorElementClass: 'error'
    });
    
    ko.applyBindings({
        route: router.currentRoute
    });
});