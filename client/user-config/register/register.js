/**
 * Created by user on 2016-07-09.
 */
Template.register.events({
    'click #submitForm': function (e) {
        var get_username = document.getElementById('getUsername');
        var set_username = get_username.value;

        var get_email = document.getElementById('getEmail');
        var set_email = get_email.value;

        var get_password = document.getElementById('getPassword');
        var set_password = get_password.value;

        console.log(set_username);
        console.log(set_email);
        console.log(set_password);

        Accounts.createUser({
            username: set_username,
            email: set_email,
            password: set_password
        });

        e.preventDefault();
    }

});