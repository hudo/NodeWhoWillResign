define(["jquery", "knockout", 'knockout-postbox', "crossroads", "hasher"], function($, ko, postbox, crossroads, hasher) {

    return new Router({
        routes: [
            { url: "", params: { page: "home" } }, 
            { url: "login", params: { page: "login" } }, 
            { url: "register", params: { page: "register" } },
            { url: "admin", params: { page: "admin" } }
        ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function(route) {
            crossroads.addRoute(route.url, function(requestParams) {
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });
        crossroads.routed.add(console.log, console);
        activateCrossroads();
    }

    function activateCrossroads() {
        function parseHash(newHash, oldHash) {
            crossroads.parse(newHash);
            ko.postbox.publish("refreshNavbar", "refresh");
        }
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;

        hasher.initialized.add(parseHash);
        hasher.changed.add(parseHash);
        hasher.init();
    }
});