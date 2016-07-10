/**
 * Created by user on 2016-07-10.
 */
Template.login.events({
   'click #loginForm': function(e) {
       var get_username = document.getElementById('getUsername');
       var set_username = get_username.value;

       var get_password = document.getElementById('getPassword');
       var set_password = get_password.value;

       Meteor.loginWithPassword(set_username, set_password);
       e.preventDefault();
   },

    'click #registerBtn': function(e) {
        FlowRouter.go('/register');
        e.preventDefault();
    }
});

Template.login.helpers({
   redirect: function() {
       FlowRouter.go("/");
   }
});