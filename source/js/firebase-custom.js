var productArray = []

firebase.initializeApp({
  apiKey: 'AIzaSyCSYD-7qz06ZUa-OkCQGtJWcB2papxme_U',
  authDomain: 'cafe-24.firebaseapp.com',
  projectId: 'cafe-24'
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
    let content = 
    '<div class="card">\
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
        <p>'+ productArray[i].name +'</p>\
        <price>$'+ productArray[i].price +'</price>\
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



for (let i = 0; i < productArray.length; i++) {
  console.log('for loop')
  console.log(productArray[i])
  // let content = 
  //   '<div class="card">\
  //     <div class="carousel slide" data-ride="carousel" data-interval="false">\  
  //       <div class="carousel-inner">\
  //         <div class="carousel-item active">\
  //           <img src="./images/24-cafe-badminton-racket.jpg" alt="">\
  //         </div>\
  //         <div class="carousel-item">\
  //           <img src="./images/24-cafe-badminton-racket.jpg" alt="">\
  //         </div>\
  //         <div class="carousel-item">\
  //           <img src="./images/24-cafe-badminton-racket.jpg" alt="">\
  //         </div>\
  //       </div>\
  //       <a class="carousel-control-prev" href="javascript: void(0)" role="button" data-slide="prev">\
  //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>\
  //         <span class="sr-only">Previous</span>\
  //       </a>\
  //       <a class="carousel-control-next" href="javascript: void(0)" role="button" data-slide="next">\
  //         <span class="carousel-control-next-icon" aria-hidden="true"></span>\
  //         <span class="sr-only">Next</span>\
  //       </a>\
  //     </div>\
  //     <div class="card-body">\
  //       <p>'+ productArray[i]. +'</p>\
  //       <price>$5,180</price>\
  //     </div>\
  //   </div>'
}