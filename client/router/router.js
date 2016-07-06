

FlowRouter.route('/', {
    action: function() {
        BlazeLayout.render("layout1", {top: "index", main: "content"});

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
        BlazeLayout.render("layout", {top: "nav", main: "contact_me"});
    }
})