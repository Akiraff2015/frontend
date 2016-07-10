/**
 * Created by user on 2016-07-09.
 */

Meteor.publish('contact-form', function(){
    return ContactForm.find({}, {sort: {createdAt: -1}});
});