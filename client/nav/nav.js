/**
 * Created by user on 2016-07-10.
 */
Template.nav.events({
   'click #logout': function(e) {
       Meteor.logout();
       FlowRouter.go("/login");

       e.preventDefault();
   }
});

Template.nav.helpers({
    username: function() {
        return Meteor.user().username;
    },

    count_messages: function() {
        if (ContactForm.find().count() > 0) {
            return ContactForm.find().count();
        } else {
            return 0;
        }
    }
})