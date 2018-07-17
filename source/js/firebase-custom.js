var productArray = []

firebase.initializeApp({
  apiKey: 'AIzaSyCSYD-7qz06ZUa-OkCQGtJWcB2papxme_U',
  authDomain: 'cafe-24.firebaseapp.com',
  projectId: 'cafe-24',
  databaseURL: "https://cafe-24.firebaseio.com",
  storageBucket: "cafe-24.appspot.com",
  messagingSenderId: "438960617286"
});

// Initialize Cloud Firestore through Firebase
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

// Add a new document in collection 'cities'
// firestore.collection('product').add({
//   sort: '羽球拍',
//   name: '[24磅羽球用具] VICTOR勝利 羽球拍 極速 JS-08N',
//   price: 2320,
//   timestamp: firebase.firestore.FieldValue.serverTimestamp()
// })
// .then(function() {
//   console.log('Document successfully written!');
// })
// .catch(function(error) {
//   console.error('Error writing document: ', error);
// });

firestore.collection('product').get()
.then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // console.log(doc.data())
    productArray.push(doc.data())
  })
  // console.log(productArray)
})
.then(function () {
  let productColumn = document.querySelector('#productColumn')
  let str = ''
  for (let i = 0; i < productArray.length; i++) {
    // console.log('for loop')
    // console.log(productArray[i])    
    let productName = productArray[i].name
    let productShortName = productName.substring(0,29)      
    let productPrice = productArray[i].price
    console.log(productArray[i].name.length)   
    if(productArray[i].name.length > 30) { productShortName+='...' }
    let content = 
      '<div class="card shadow">\
        <div class="carousel slide" data-ride="carousel" data-interval="false">\
          <div class="carousel-inner">\
            <div class="carousel-item active">\
              <img src="./images/24-cafe-badminton-racket.jpg" alt="">\
            </div>\
            <div class="carousel-item">\
              <img src="./images/24-cafe-badminton-racket.jpg" alt="">\
            </div>\
            <div class="carousel-item">\
              <img src="./images/24-cafe-badminton-racket.jpg" alt="">\
            </div>\
          </div>\
          <a class="carousel-control-prev" href="javascript: void(0)" role="button" data-slide="prev">\
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
            <span class="sr-only">Previous</span>\
          </a>\
          <a class="carousel-control-next" href="javascript: void(0)" role="button" data-slide="next">\
            <span class="carousel-control-next-icon" aria-hidden="true"></span>\
            <span class="sr-only">Next</span>\
          </a>\
        </div>\
        <div class="card-body">\
          <p title="'+ productName +'">'+ productShortName +'</p>\
          <price>$'+ productPrice +'</price>\
        </div>\
      </div>'
    str+= content
  }
  // console.log(str)
  productColumn.innerHTML = str
})
.catch(function(error) {
    console.log('Error getting documents: ', error);
});



// upload part
// Create a root reference

var storageRef = firebase.storage().ref();
