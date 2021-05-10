let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/overload1.jpeg') {
      myImage.setAttribute('src', 'images/overload2.jpeg');
    } else {
      myImage.setAttribute('src', 'images/overload1.jpeg');
    }
}