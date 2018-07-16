
var inputs = document.querySelectorAll('.custom-file-input');
Array.prototype.forEach.call(inputs, function (input) {
  console.log(input)
  var label = input.nextElementSibling
  var labelVal = label.innerHTML
  console.log(label)
  console.log(labelVal)

  input.addEventListener('change', function (e) {
    var reader = new FileReader()
    var fileName = ''
    // if select more than 1 file
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length)
    } else {
      fileName = e.target.value.split('\\').pop()
    }
    console.log(fileName)
    if (fileName) {
      reader.onload = function (e) {
        label.innerHTML = fileName
        console.log(e.target.result.readAsDataURL)
        selectedImage = e.target.result
        uploadImg = document.querySelector('.upload-img').attr
        uploadImg = selectedImage
      }
      reader.readAsDataURL(this.files[0])
    } else {
      label.innerHTML = labelVal
    }
  })
})