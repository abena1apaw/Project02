
$(document).ready(function () {

    $('.search_button').on('click', function () {

        var userInput = $('#form-value').val().trim();

        userInput = userInput.replace(/ /g, "+");

        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + userInput + '&api_key=R2NP7MwgdjjDC3cLhTidUXRKCdVQ1rsX';

        $.ajax({ url: queryURL, method: 'GET' }).done(function (response) {

            const data = response.data;
            const result = data.map(function (gif) {
                return `<div><img src="${gif.images.fixed_height.url}" alt="${gif.title}" /></div>`;
            }).join('');
            document.body.innerHTML = result;
            console.log(response.data);

            $('#here_is_gif').attr('src', response.data);

        });

        $('#reset_button').on('click', function () {

            $('#here_is_gif').attr("src", '');

        })

        return false;

    })
});

