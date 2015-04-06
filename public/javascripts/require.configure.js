var require = {
    baseUrl: "/",
    paths: {
        "bootstrap": "bower/bootstrap/dist/js/bootstrap",
        "jquery": "bower/jquery/dist/jquery",
        "knockout": "bower/knockoutjs/dist/knockout",
        "site": "javascripts/site",
        "messi": "bower/messi/messi",
        "viewModel": "javascripts/ViewModel/Home/HomeViewModel",
        "authAndNavigation": "javascripts/ViewModel/AuthAndNavigationObject",
        "login": "javascripts/ViewModel/User/LoginUserViewModel"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "messi": {
            deps: ["jquery"]
        }
    }
};