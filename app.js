
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAc-vezaze1APwUUrdOpzCSal9Kp2iW-mQ",
        authDomain: "fir-auth-a53a4.firebaseapp.com",
        projectId: "fir-auth-a53a4",
        storageBucket: "fir-auth-a53a4.appspot.com",
        messagingSenderId: "13985420105",
        appId: "1:13985420105:web:5e321bf2ceddb1038b8098"
      };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    console.log(app);



    //----- New Registration code start	  
    document.getElementById("register").addEventListener("click", function () {
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        //For new registration
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert("Registration successfully!!");
                window.location.href = 'main.html';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
                alert(error);
            });
    });
    //----- End

    //----- Login code start	  
    document.getElementById("login").addEventListener("click", function () {
        var email = document.getElementById("login_email").value;
        var password = document.getElementById("login_password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                alert(user.email + " Login successfully!!!");
                document.getElementById('logout').style.display = 'block';
                window.location.href = 'main.html';
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
            });
    });
    //----- End

    //----- Logout code start	  
    document.getElementById("logout").addEventListener("click", function () {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log('Sign-out successful.');
            alert('Sign-out successful.');
            document.getElementById('logout').style.display = 'none';
        }).catch((error) => {
            // An error happened.
            console.log('An error happened.');
        });
    });
    //----- End
