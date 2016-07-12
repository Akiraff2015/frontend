/**
 * Created by user on 2016-07-07.
 */

//TODO: Prototype only, don't return TRUE
ContactForm.allow({
    'insert': function(id) {
        return Roles.usersIsInRole(id, ['admin']);
    },

    'remove': function() {
        return Roles.usersIsInRole(id, ['admin']);
    }
})