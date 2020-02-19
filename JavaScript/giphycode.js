// JavaScript source code
$(document).ready(function () {

    // Part 1 - Collect User Input Using jQuery Click Listener note we use the class (.) of search_button
    $('.search_button').on('click', function () {
        //javascript, jQuery
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
        xhr.done(function (data) {
            console.log("success got data", data)
     });