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
                    const json = JSON.parse(request.responseText);
                    resultParagraph.textContent = json.uuid;
                    messageParagraph.textContent = "data received";
                }
            }
        }

        request.open('GET', 'https://httpbin.org/uuid', true);
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