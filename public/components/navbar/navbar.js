define(['knockout', 'knockout-postbox', 'text!./navbar.html'], function(ko, postbox, template) {

  function NavBarViewModel(params) {
    var self = this;

    this.isUserLogged = ko.observable();
    this.username = ko.observable();
    this.token = ko.observable();
    this.isAdmin = ko.observable();
    this.showLogin = ko.observable();
    this.showLogout = ko.observable();

    this.route = params.route;
    
    ko.postbox.subscribe("refreshNavbar", function() {
        self.RefreshNavbar();
    }, self);

    this.RefreshNavbar = function(){
      switch (self.route().page) {
        case 'home':
          self.isUserLogged(window.localStorage.getItem("token") != null && window.localStorage.getItem("token") != "null");
          self.username(window.localStorage.getItem("username"));
          self.token(window.localStorage.getItem("token"));
          self.isAdmin(window.localStorage.getItem("isAdmin") == "1");
          self.showLogin(true);
          self.showLogout(self.isUserLogged() ? true : false);
          break;
        case 'login':
          self.showLogin(true);
          self.showLogout(false);
          break;
        case 'register':
          self.showLogin(true);
          self.showLogout(false);
          break;
        default:
          throw new Error("navbar - page not found");
      }
    };
    
    this.Logout = function() {
      self.isUserLogged(false);
      self.username('');
      self.token('');
      self.showLogout(false);
      window.localStorage.setItem("token", null);
      window.localStorage.setItem("username", null);
      window.localStorage.setItem("token", null);
      window.localStorage.setItem("isAdmin", null);
    }
    
    self.RefreshNavbar();
    return self;
  }

  return {
    viewModel: NavBarViewModel,
    template: template
  };
});