// Points to the root reference
var storageRef = firebase.storage().ref();
// Points to 'images'
var imagesRef = storageRef.child('images');


function previewImages(e) {
  var preview = document.querySelector('#preview')       
  let fileName = ''     
  
  if (this.files) {
    for (let i = 0; i < this.files.length; i++) {
      fileName = fileName + this.files[i].name + ', '
      document.querySelector('.custom-file-input + label').innerHTML = fileName
      // Get files and do upload image as promise function
      var imageFile = e.target.files[i];
      uploadImageAsPromise(imageFile);
    }          
    [].forEach.call(this.files, readAndPreview)
  }  
  function readAndPreview(file) {
    // Make sure `file.name` matches our extensions criteria
    if (!/\.(jpe?g|png|gif)$/i.test(file.name)) {
      return alert(file.name + " is not an image")
    } // else...
    var reader = new FileReader()
    preview.innerHTML = ''
    
    reader.addEventListener("load", function () {
      // var image = new Image()
      var str = document.createElement('div')
      str.className = 'shadow img-box'
      str.innerHTML = 
        ' <div class="text-center hover-delete flex-auto" onclick="this.parentElement.remove()">X</div>\
          <div>\
            <img class="img-fluid" src="'+ this.result +'">\
          </div>'
      preview.appendChild(str)
      console.log(file)
      console.log(reader)
    }, false)
    reader.readAsDataURL(file)
  }
}
//Handle waiting to upload each file using promise
function uploadImageAsPromise (imageFile) {
  return new Promise(function (resolve, reject) {
      var storageRef = firebase.storage().ref("../images/"+imageFile.name);

      //Upload file
      var task = storageRef.put(imageFile);

      //Update progress bar
      task.on('state_changed',
          function progress(snapshot){
              var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              uploader.value = percentage;
          },
          function error(err){

          },
          function complete(){
              var downloadURL = task.snapshot.downloadURL;
          }
      );
  });
}


document.querySelector('.custom-file-input').addEventListener("change", previewImages, false)