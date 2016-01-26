function download(text, name, type) {

  var file = new Blob([text], {type: type})

  var a = $('<a id="download-it">Download it</a>').appendTo('body')

  a[0].href = URL.createObjectURL(file)

  a[0].download = name

  a[0].click()

}
