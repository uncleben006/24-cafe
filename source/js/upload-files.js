function previewImages() {
  var preview = document.querySelector('#preview')       
  let fileName = ''     
  if (this.files) {
    for (let i = 0; i < this.files.length; i++) {
      fileName = fileName + this.files[i].name + ', '
      document.querySelector('.custom-file-input + label').innerHTML = fileName
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
      var image = new Image()
      image.height = 100
      image.title = file.name
      image.src = this.result
      preview.appendChild(image)
      // console.log('load')
      // console.log(reader)
    }, false)
    reader.readAsDataURL(file)
  }
}
document.querySelector('.custom-file-input').addEventListener("change", previewImages, false)