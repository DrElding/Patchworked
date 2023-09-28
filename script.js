var password = "xkclass";

function passcheck(){
  if(document.getElementById('pass2').value != password)  {
    alert('NOPE');
  }
  
  if(document.getElementById('pass2').value == password)  {
    alert('Correct');
}
}
