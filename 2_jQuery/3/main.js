$(function() {
    $('#execute').click(function() {
        $('#message').text('execute button clicked');
        $('#result').text('test');
    })

    $('#delete').click(function() {
        $('#message').text('delete button clicked');
        $('#result').text('');
    })
})