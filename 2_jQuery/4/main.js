$(function() {
    $('#execute').click(function() {
        $('#message').text('execute button clicked');

        $.get({
            url: 'http://118.27.26.228/my-data.php'
        }).done(function(data) {
            $('#result').text(data["date"]);
            $('#message').text('data received');
        });
    });

    $('#delete').click(function() {
        $('#message').text('delete button clicked');
        $('#result').text('');
    });
})