

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("layout1", {top: "nav", main: "index"});

    }
});

FlowRouter.route('/about', {
    action: function() {
        BlazeLayout.render("layout", {top: "nav", main: "about", footer: "footer"});
    }
});

FlowRouter.route('/goals', {
   action: function() {
       BlazeLayout.render("layout", {top: "nav", main: "goals", footer: "footer"});
   }
});

FlowRouter.route('/project', {
   action: function() {
       BlazeLayout.render("layout", {top: "nav", main: "project", footer: "footer"});
   }
});

FlowRouter.route('/contact_me', {
    action: function() {
        BlazeLayout.render("layout1", {top: "nav", main: "contact_me"});
    }
});

FlowRouter.route('/login', {
   action: function() {
       BlazeLayout.render("layout1", {top: "nav", main: "login"});
   }
});

FlowRouter.route('/register', {
   action: function() {
       BlazeLayout.render("layout1", {top: "nav", main: "register"});
   }
});

FlowRouter.route('/admin/table_message', {
   action: function() {
       BlazeLayout.render("admin-layout", {top: "nav", main: "table_message"});
   }
});

FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render("layout1", {top: "nav", main: "404"});
    }
};