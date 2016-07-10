/**
 * Created by user on 2016-07-07.
 */

Meteor.subscribe('contact-form');

Template.table_message.helpers({
    contact_list() {
        return ContactForm.find({}, {sort: {createdAt: -1}});
    }
});

Template.table_message.events({
    'click .delete': function() {
        return ContactForm.remove({_id:this._id});
    }
});