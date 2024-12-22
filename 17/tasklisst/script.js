window.onload = function(){
    document.getElementById('addTaskButton').addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Ви не ввели назву задачі.');
            return;
        }

        const taskList = document.getElementById('taskList');
        const listItem = document.createElement('li');
        listItem.textContent = taskText;


        // Це кнопка для видалення зі списку!!!!

        // const deleteButton = document.createElement('button');
        // deleteButton.textContent = 'Видалити';
        // deleteButton.className = 'delete';
        // deleteButton.addEventListener('click', function() {
        //     taskList.removeChild(listItem);
        // });
        const deleteButton = document.createElement('button');
            deleteButton.textContent = '\u2716'; // Символ хрестика
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', function() {
                taskList.removeChild(listItem);
            });

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
        taskInput.value = '';
    });
}