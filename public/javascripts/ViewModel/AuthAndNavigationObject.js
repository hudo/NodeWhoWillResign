define(["knockout"], function(ko){
   return function AuthAndNavigationObject(pageName){
        var self = this;
        
        this.pageName = pageName;
        this.isUserLogged = ko.observable();
        this.username = ko.observable();
        this.token = ko.observable();
        this.isAdmin = ko.observable();
        this.showLogin = ko.observable();
        this.showLogout = ko.observable();
        
        switch (pageName) {
            case 'Home':
                self.isUserLogged(window.localStorage.getItem("token") != null && window.localStorage.getItem("token") != "null");
                self.username(window.localStorage.getItem("username"));
                self.token(window.localStorage.getItem("token"));
                self.isAdmin(window.localStorage.getItem("isAdmin") == "1");
                self.showLogin(true);
                self.showLogout(self.isUserLogged() ? true : false);
                break;
            case 'Login':
                self.showLogin(true);
                self.showLogout(false);
                break;
            case 'Register':
                self.showLogin(true);
                self.showLogout(false);
                break;
            default:
                throw new Error("AuthAndNavigationObject - Page not found");
        }
        
        this.Logout = function(){
            self.isUserLogged(false);
            self.username('');
            self.token('');
            self.showLogout(false);
            window.localStorage.setItem("token", null);
            window.localStorage.setItem("username", null);
            window.localStorage.setItem("token", null);
            window.localStorage.setItem("isAdmin", null);
        };
    } 
});