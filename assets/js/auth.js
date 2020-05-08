var firebaseConfig = {
    apiKey: "AIzaSyAFyIIzKZW44Qu67UySlxQuD3wL4-dduOM",
    authDomain: "pbwork-1cec1.firebaseapp.com",
    databaseURL: "https://pbwork-1cec1.firebaseio.com",
    projectId: "pbwork-1cec1",
    storageBucket: "pbwork-1cec1.appspot.com",
    messagingSenderId: "764814583663",
    appId: "1:764814583663:web:fd84bfe1a41418f30baa9a",
    measurementId: "G-Q0XG3SM66P"
    };
firebase.initializeApp(firebaseConfig);
firebase.analytics(); 
function checkuser(){
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        window.location.href = "./admin";
    }).catch((error)=>{
        if(error){
        alert("WRONG CREDENTIALS");
        }
    });
}

document.querySelector('#container button').addEventListener('click', _=>{
    checkuser()
});