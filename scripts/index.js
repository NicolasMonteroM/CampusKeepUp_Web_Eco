const database = firebase.database();
const auth = firebase.auth();

const userName = document.getElementById('user-name');
var userID = "";

const className = document.getElementById('class-name');
const classID = document.getElementById('class-ID');
const addBtn = document.getElementById('class-btn');

const classesContainer = document.getElementById('classes-container');

auth.onAuthStateChanged(
    (user) => {
        console.log(user.uid);
        database.ref('teacher/' + user.uid).once(
            'value',
            (data) => {

                let userDB = data.val();
                userName.innerHTML = userDB.name;
                userID = userDB.uid;
            }
        );

        addBtn.addEventListener('click', function (e) {

            e.preventDefault();

            if (className.value === '') {
                alert("Ingrese el nombre de la clase");
            } else {

                let reference = database.ref('classes/' + user.uid).push();

                let classObj = {
                    id: reference.key,
                    name: className.value,
                    classID: classID.value,
                }

                reference.set(classObj);
                className.value = "";
                classID.value = "";
            }
        });


    }
);

auth.onAuthStateChanged(
    (user) => {

        database.ref('classes/' + user.uid).on('value', function (data) {
            classesContainer.innerHTML = '';
            data.forEach(classObj => {
                let value = classObj.val();
                let singleClass = new uClass(value);
                classesContainer.appendChild(singleClass.render());
            }
            );
        })
    }
);
