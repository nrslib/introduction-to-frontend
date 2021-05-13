window.onload = function() {
    const executeButton = document.getElementById("execute");
    executeButton.addEventListener('click', function() {
        const messageParagraph = document.getElementById('message');
        messageParagraph.textContent = 'execute button clicked';

        const request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const resultParagraph = document.getElementById("result");
                    resultParagraph.textContent = request.responseText;
                    messageParagraph.textContent = "data received";
                }
            }
        }

        request.open('GET', 'http://118.27.26.228/my-data.php', true);
        request.send(null);
    });

    const deleteButton = document.getElementById('delete');
    deleteButton.addEventListener('click', function() {
        const messageParagraph = document.getElementById('message');
        messageParagraph.textContent = 'delete button clicked';

        const resultParagraph = document.getElementById('result');
        resultParagraph.textContent = '';
    });
}