const database = firebase.database();
const auth = firebase.auth();

const userName = document.getElementById('user-name');

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

        database.ref('classes/').on('value', function (data) {

            classesContainer.innerHTML = '';
            data.forEach(classObj => {
                let value = classObj.val();
                if (value.teacherID === user.uid) {
                    let singleClass = new uClass(value);
                    classesContainer.appendChild(singleClass.render());

                }

            }
            );
        })
    }
);



