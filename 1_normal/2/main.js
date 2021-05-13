window.onload = function() {
    const executeButton = document.getElementById("execute");
    executeButton.addEventListener('click', function() {
        alert("execute button clicked");
    });

    const deleteButton = document.getElementById("delete");
    deleteButton.addEventListener('click', function() {
        alert("delete button clicked");
    });
}
