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

document.getElementById("filterBtn").addEventListener("click", filterData);

// Function to Filter Data
async function filterData() {
  const searchTerm = document.getElementById("").value.toLowerCase();

  const dataRef = collection(db, "yourCollectionName");

  const q = query(
    dataRef,
    where("name", ">=", searchTerm),
    where("name", "<=", searchTerm + "\uf8ff")
  );

  try {
    const querySnapshot = await getDocs(q);
    displayResults(querySnapshot);
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
}

function displayResults(querySnapshot) {
  const dataList = document.getElementById("data-list");

  List.innerHTML = "";

  if (querySnapshot.empty) {
    dataList.innerHTML = "<p>No matching documents.</p>";
    return;
  }

  querySnapshot.forEach((doc) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("data-item");
    itemDiv.textContent = `${doc.data().name} - ${doc.data().info}`; // Modify according to your fields in Firestore

    dataList.appendChild(itemDiv);
  });
}
