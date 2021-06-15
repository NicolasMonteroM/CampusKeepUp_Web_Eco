const database = firebase.database();

const className = document.getElementById('class-name');
const classID = document.getElementById('class-ID');
const addBtn = document.getElementById('class-btn');

const classesContainer = document.getElementById('classes-container');

var user = firebase.auth().currentUser;
console.log(user);

addBtn.addEventListener('click', function (e) {

    e.preventDefault();
    
    if (className.value === '') {
        alert("Ingrese la descripción de la tarea");
    } else {

        let reference = database.ref('Tasks/To Do').push();

        let classObj = {
            id: reference.key,
            description: className.value,
            classID: classID.value,
        }

        reference.set(classObj);
        className.value = "";
        classID.value = "";
    }
});

database.ref('Tasks/To Do').on('value', function (data) {
    toDoContainer.innerHTML = '';
    data.forEach(taskObj => {
        let value = taskObj.val();
        let task = new Task(value);
        toDoContainer.appendChild(task.render());
    }
    );
})