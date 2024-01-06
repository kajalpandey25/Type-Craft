"use strict";
const getUsername = document.querySelector("#user");
const formSubmit = document.querySelector('.form');
const main_container = document.querySelector('.main-container');
// Resuable function
function myCustomFetcher(url, options) {
}
function fetchUserData(url) {
    myCustomFetcher(url, {});
}
// default fun call
fetchUserData("https://api.github.com/users");
