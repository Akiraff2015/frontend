import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    if (Meteor.users.find().count() < 1) {
        var id = Accounts.createUser({
            email: 'admin@gmail.com',
            username: 'Boss',
            password: 'apple1'
        });
        Roles.addUsersToRoles(id, 'admin');
    } else {
        if (Meteor.users.find({username: 'Akiraff'}) === 'Akiraff') {
            console.log('hello world');
        }
    }
});
