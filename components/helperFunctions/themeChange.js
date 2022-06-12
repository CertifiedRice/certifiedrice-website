export const themeChange = (mode) => {
  if (mode) {  //check if dark mode is set to true  
    window.document.body.classList.remove('myLight');  //remove the light styling class from the body tag
    window.document.body.classList.add('myDark');  //attatch the dark styling class to the body tag
    //check if there are any box containers be used on the current page (containers around projects etc)
    let classLength = window.document.getElementsByClassName('box').length;
    
    //if there are 1 or more of them then get them and change their border styling
    if (classLength > 0) {
        let boxes = window.document.getElementsByClassName('box');
        for (let i = 0; i < classLength; i++) {
            boxes[i].classList.remove('myDarkBorder');
            boxes[i].classList.add('myLightBorder');
        }
    }

  }

  else {
    window.document.body.classList.remove('myDark');  //remove the light styling class from the body tag
    window.document.body.classList.add('myLight');  //attatch the dark styling class to the body tag
    //check if there are any box containers be used on the current page (containers around projects etc)
    let classLength = window.document.getElementsByClassName('box').length;
    
    //if there are 1 or more of them then get them and change their border styling
    if (classLength > 0) {
        let boxes = window.document.getElementsByClassName('box');
        for (let i = 0; i < classLength; i++) {
            boxes[i].classList.remove('myLightBorder');
            boxes[i].classList.add('myDarkBorder');
        }
    }
  }
  
}

//,<
