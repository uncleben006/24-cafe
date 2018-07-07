firebase.initializeApp({
  apiKey: 'AIzaSyCSYD-7qz06ZUa-OkCQGtJWcB2papxme_U',
  authDomain: 'cafe-24.firebaseapp.com',
  projectId: 'cafe-24'
});

// Initialize Cloud Firestore through Firebase
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

// Add a second document with a generated ID.
// db.collection("users").add({
//   first: "Alan",
//   middle: "Mathison",
//   last: "Turing",
//   born: 1912
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

// retreive collection
firestore.collection("users").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
  });
});