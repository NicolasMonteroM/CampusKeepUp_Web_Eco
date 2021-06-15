const authSignout = document.querySelector('.signOut');

authSignout.addEventListener('click', function (event) {

    console.log("aaaaaaaaa");

    event.preventDefault();
    firebase.auth().signOut();
    window.location.href = 'index.html';
});