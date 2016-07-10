/**
 * Created by user on 2016-07-07.
 */
Template.contact_me.events({
    "click #submit": function(e) {
        var getEmail = document.getElementById("getEmail");
        var setEmail = getEmail.value;

        var getName = document.getElementById("getName");
        var setName = getName.value;

        var getMessage = document.getElementById("getMessage");
        var setMessage = getMessage.value;

        //Inserts into MongoDB with fields: email, name, message
        ContactForm.insert({
            email: setEmail,
            name: setName,
            message: setMessage,
            createdDate: new Date()}
        );

        //Reset all the values.
        document.getElementById("contact-form").reset();
        document.getElementById("thanksForm").innerHTML = "Thank you for submitting a form. We will shortly be directing you to homepage.";

        setTimeout(function() {
            FlowRouter.go("/");
        }, 3000);

        e.preventDefault();
    },

    "click #cancel": function (e) {
        document.getElementById("contact-form").reset();
        e.preventDefault();
    }
});