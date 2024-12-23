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

const showToast = (message, isError = false) => {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${isError ? "error" : ""}`;
  toast.style.display = "block";
  setTimeout(() => (toast.style.display = "none"), 3000);
};

const updateData = () => {
  const courseId = document.getElementById("course-id").value;
  const coursename = document.getElementById("course").value.trim();
  const coursedescription = document.getElementById("description").value.trim();

  if (!courseId || !coursename || !coursedescription) {
    showToast("All fields are required.", true);
    return;
  }

  // Check if document exists before updating
  db.collection("courses")
    .doc(courseId)
    .get()
    .then((doc) => {
      if (!doc.exists) {
        showToast("Course ID not found.", true);
        return;
      }

      // Proceed to update if document exists
      db.collection("courses")
        .doc(courseId)
        .update({
          coursename: coursename,
          coursedescription: coursedescription,
        })
        .then(() => {
          alert("Data Updated Successfully");
          showToast("Data updated successfully!", false);
        })
        .catch((err) => {
          console.error("Error updating document: ", err);
          showToast("Error updating data: " + err.message, true);
        });
    })
    .catch((err) => {
      console.error("Error checking document: ", err);
      showToast("Error checking document: " + err.message, true);
    });
};
