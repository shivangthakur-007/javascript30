const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyBc5dZ_AxEGI6yhX4529SN4HY3aApw9wfU",
  authDomain: "input-form-ce7d1.firebaseapp.com",
  projectId: "input-form-ce7d1",
  storageBucket: "input-form-ce7d1.appspot.com",
  messagingSenderId: "305551063775",
  appId: "1:305551063775:web:05246c445e4ce33646076a",
  measurementId: "G-J57TH4HQD8",
});

const db = firebaseapp.firestore();
const auth = firebaseapp.auth();

// Register Function
const register = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.statuscode);
      console.log(err.message);
    });
};

const login = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log(res.user);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err.code);
      console.log(err.message);
    });
};

const saveData = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  db.collection("users")
    .add({
      email: email,
      password: password,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    // console.log('ehl')
    })
    .catch((error) => {
    //   console.error("Error adding document: ", error);
    });
};

const readData = () => {
  db.collection("users")
    .get()
    .then((data) => {
      console.log(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        })
      );
    });
};

const updateData = () => {
  db.collection("users")
    .doc("xTFP83uUHVRUPG6NWAAf")
    .update({
      email: "ashishisagoodboy1234@gmail.com",
      password: "123456",
    })
    .then(() => {
      alert("Data Updated");
    });
};

const deleteData = () => {
  db.collection("users")
    .doc("xTFP83uUHVRUPG6NWAAf")
    .delete()
    .then(() => {
      alert("Data Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
};