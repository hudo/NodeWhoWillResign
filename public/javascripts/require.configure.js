var require = {
    baseUrl: "/",
    paths: {
        "bootstrap": "bower/bootstrap/dist/js/bootstrap",
        "jquery": "bower/jquery/dist/jquery",
        "knockout": "bower/knockoutjs/dist/knockout",
        "site": "javascripts/site",
        "messi": "bower/messi/messi",
        "crossroads": "bower/crossroads/dist/crossroads",
        "knockout-projections": "bower/knockout-projections/dist/knockout-projections",
        "knockout-postbox": "bower/knockout-postbox/build/knockout-postbox",
        "signals": "bower/js-signals/dist/signals",
        "hasher": "bower/hasher/dist/js/hasher",
        "text": "bower/requirejs-text/text",
        "router": "javascripts/router"
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