/**
 * Created by user on 2016-07-11.
 */
Meteor.startup(function() {
    if (typeof Meteor.users.findOne({username: "Akiraff"}) === 'undefined') {
        Accounts.createUser({
            username: "Akiraff",
            email: "akiraff@hotmail.com",
            password: "apple1"
        });
        var akira_id = Meteor.users.findOne({username: 'Akiraff'});
        if (akira_id != null) {
            Roles.addUsersToRoles(akira_id._id, ['admin']);
        }
    }
});