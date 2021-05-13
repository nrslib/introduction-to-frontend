window.onload = function() {
    const executeButton = document.getElementById('execute');
    executeButton.addEventListener('click', function() {
        const messageParagraph = document.getElementById('message');
        messageParagraph.textContent = 'execute button clicked';

        const resultParagraph = document.getElementById('result');
        resultParagraph.textContent = 'test';
    });

    const deleteButton = document.getElementById('delete');
    deleteButton.addEventListener('click', function() {
        const messageParagraph = document.getElementById('message');
        messageParagraph.textContent = 'delete button clicked';

        const resultParagraph = document.getElementById('result');
        resultParagraph.textContent = '';
    });
}
