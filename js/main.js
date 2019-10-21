
var accordianHeaders = document.querySelectorAll('#accordian .accordian-headers');

var accordianDescription = document.querySelectorAll('#accordian .accordian-description');

//handles accordian drop down actions
function expandAccordianDescription(){



  //handles the toggle indicator
  for(i=0; i<accordianHeaders.length; i++){
    accordianHeaders[i].childNodes[3].innerHTML = '+';
    accordianDescription[i].classList.remove('accordian-open');

  }
    this.nextElementSibling.classList.toggle('accordian-open');
    this.childNodes[3].innerHTML = '-';

}

//add click event listener for accordian headers
for(i=0; i < accordianHeaders.length; i++){
  accordianHeaders[i].addEventListener('click', expandAccordianDescription);

}
