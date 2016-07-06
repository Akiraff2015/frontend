/**
 * Created by user on 2016-07-07.
 */
//function prepareEventHandlers() {
//    document.getElementById("contact-form").onsubmit = function () {
//        console.log("the page have been submitted");
//    }
//}
//
//window.onload = function () {
//    prepareEventHandlers();
//}
Template.contact_me.events({
    "click [data-action ='task/submit']": function(e) {
        var getEmail = document.getElementById("getEmail");
        var setEmail = getEmail.value;

        var getName = document.getElementById("getName");
        var setName = getName.value;

        var getMessage = document.getElementById("getMessage");
        var setMessage = getMessage.value;

        console.log(setEmail);
        console.log(setName);
        console.log(setMessage);

        //Reset all the values.
        document.getElementById("contact-form").reset();
        document.getElementById("thanksForm").innerHTML = "Thank you for submitting a form";

        e.preventDefault();
    },

    "click [data-action='task/cancel']": function (e) {
        document.getElementById("contact-form").reset();
        e.preventDefault();
    }
});