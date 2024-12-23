const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBc5dZ_AxEGI6yhX4529SN4HY3aApw9wfU",
  authDomain: "input-form-ce7d1.firebaseapp.com",
  projectId: "input-form-ce7d1",
  storageBucket: "input-form-ce7d1.appspot.com",
  messagingSenderId: "305551063775",
  appId: "1:305551063775:web:05246c445e4ce33646076a",
  measurementId: "G-J57TH4HQD8",
});

const auth = firebaseapp.auth();
const showToast = (message, isError = false) => {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${isError ? "error" : ""}`;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
};

const showSignup = () => {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
};

const showLogin = () => {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
};

const register = () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById(
    "signup-confirm-password"
  ).value;

  if (password !== confirmPassword) {
    showToast("Passwords do not match", true);
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      showToast("Signup successful! Please log in.");
      showLogin();
    })
    .catch((err) => showToast(err.message, true));
};

const login = () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      document.getElementById("user-info").style.display = "block";
      document.getElementById(
        "user-info"
      ).textContent = `Logged in as: ${res.user.email}`;
      showToast("Login successful!");
    })
    .catch((err) => showToast(err.message, true));
};
