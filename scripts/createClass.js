const database = firebase.database();
const auth = firebase.auth();

const className = document.getElementById('class-name');
const classID = document.getElementById('class-ID');
const addBtn = document.getElementById('class-btn');

auth.onAuthStateChanged(
    (user) => {
        console.log(user.uid);
        database.ref('teacher/' + user.uid).once(
            'value',
            (data) => {

                let userDB = data.val();

            }
        );

        addBtn.addEventListener('click', function (e) {

            e.preventDefault();

            if (className.value === '') {
                alert("Ingrese el nombre de la clase");
            } else {

                let reference = database.ref('classes/').push();
             //   let reference2 = database.ref('teacher/' + user.uid + '/classes/').push();

                let classObj = {
                    id: reference.key,
                    name: className.value,
                    classID: classID.value,
                    teacherID: user.uid,
                }

                reference.set(classObj);
                //reference2.set(classObj);
                className.value = "";
                classID.value = "";
            }
        });


    }
);