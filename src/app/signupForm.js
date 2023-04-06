import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // Cerrar signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    // reiniciar  el form
    signUpForm.reset();

    // mostrar mensaje de confirmacion 
    showMessage("¡Bienvenido! " + userCredential.user.email);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("El correo ya esta en uso", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Correo inválido", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Contraseña débil", "error")
    } else if (error.code) {
      showMessage("Algo salió mal", "error")
    }
  }

});