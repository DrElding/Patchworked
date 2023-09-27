var password = "World";

function passcheck(){
  if(document.getElementById('pass1').value != password)  {
    alert('NOPE');
  }
  
  if(document.getElementById('pass1').value == password)  {
    alert('Correct');
}
}

var password2 = "xkclass";

function passcheck(){
  if(document.getElementById('pass2').value != password2)  {
    alert('NOPE');
  }
  
  if(document.getElementById('pass2').value == password2)  {
    alert('Correct');
}
}
