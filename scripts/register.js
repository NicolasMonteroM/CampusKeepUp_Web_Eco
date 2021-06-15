const database = firebase.database();
const auth = firebase.auth();

const register = document.querySelector('.register');

register.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = register.email.value;
    const password = register.password.value;
    const name = register.name.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (credentials) {

            const uid = credentials.user.uid;

            database.ref('teacher/' + uid).set({
                name: name,
                email: email,
                id: uid,
            }).then(function () {
                window.location.href = 'home.html';
            });

        })
        .catch(function (error) {

            console.log(error)

            register.querySelector('.form__error').classList.remove('hidden');

        });
});
