/**
 * Created by user on 2016-07-10.
 */
Template.nav.events({
   'click .logout': function(e) {
       Meteor.logout();

       setTimeout(function() {
           FlowRouter.go("/login");
       }, 3000);

       e.preventDefault();
   }
});

Template.nav.helpers({
    username: function() {
        return Meteor.user().username;
    }
})