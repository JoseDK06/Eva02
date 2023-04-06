import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // reset the form
    signInForm.reset();

    // show welcome message
      showMessage("¡Bienvenido! " + userCredential.user.email);
  }  catch (error) {
    if (error.code === 'auth/wrong-password') {
      showMessage("Contraseña Incorrecta", "error")
    } else if (error.code === 'auth/user-not-found') {
      showMessage("No se encontró usuario", "error")
    } else {
      showMessage("Algo salió mal", "error")
    }
  }
});