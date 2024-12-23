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

const saveData = (e) => {
  e.preventDefault();

  const coursename = document.getElementById("course").value.trim();
  const coursedescription = document.getElementById("description").value.trim();

  if (!coursename || !coursedescription) {
    showToast("Course name and description are required.", true);
    return;
  }

  db.collection("courses")
    .add({
      course_name: coursename,
      course_description: coursedescription,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      showToast("Data saved successfully!", false);
      document.getElementById("course").value = "";
      document.getElementById("description").value = "";
    })
    .catch((err) => {
      console.error("Error adding document: ", err);
      showToast(err.message, true);
    });
};

const readData = () => {
  db.collection("courses")
    .get()
    .then((data) => {
      const courses = data.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      //   console.log("Courses: ", courses);

      // Display courses dynamically (if needed)
      const courseList = document.createElement("ul");
      courses.forEach((course) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${course.course_name}: ${course.course_description}`;
        courseList.appendChild(listItem);
        courseList.classList.add("course-list");
      });

      document.body.appendChild(courseList);
    })
    .catch((err) => {
      console.error("Error fetching data: ", err);
      showToast(err.message, true);
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