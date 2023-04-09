const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD9ErTnFOX2YfqKLBL3sSRtrietorSgN7c",
  authDomain: "auth-form-7783d.firebaseapp.com",
  projectId: "auth-form-7783d",
  storageBucket: "auth-form-7783d.appspot.com",
  messagingSenderId: "526805002925",
  appId: "1:526805002925:web:4ee15c3f36a9ffde137424"
});


   const db = firebaseApp.firestore();
   const auth = firebaseApp.auth();

   const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
    }