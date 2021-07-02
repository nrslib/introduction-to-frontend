$(function() {
    $('#execute').click(function() {
        $('#message').text('execute button clicked');

        $.get({
            url: 'https://httpbin.org/uuid'
        }).done(function(data) {
            $('#result').text(data.uuid);
            $('#message').text('data received');
        });
    });

    $('#delete').click(function() {
        $('#message').text('delete button clicked');
        $('#result').text('');
    });
})