const loaderWrapper = document.querySelector('#phaino-loader-wrapper');

const fade = loaderWrapper.animate([
  { opacity: 1 },
  ], {
    duration: 3000,
		easing: "ease-in"
  }
)

/*setTimeout(() => {
  document
    .querySelector("#phaino-section-title-collections")
    .classList.add("slide-in-bottom");
  
  console.log('aded');
}, 500);*/
// Remove the element to allow clicking the main content.
fade.addEventListener("finish", () => {

  /*document
    .querySelector(".container-main-bottom-controls")
    .classList.add("fade-in");*/
  
  document
    .querySelector("#p-slide-out-top-p1")
    .classList.add("slide-out-top-p1");
  
  document
    .querySelector("#p-slide-out-top-system")
    .classList.add("slide-out-top-system");
  
  loaderWrapper.remove();

  
  
})


/*function moveLoaderMainIcon() {
  let id = null;
  const elem = document.querySelector('#phaino-main-icon-loader')
  let pos = 343;
  clearInterval(id);
  id = setInterval(frame, 5);
  
  function frame() {
    if (pos == 40) {
      clearInterval(id);
    } else {
      pos--; 
      console.log(pos);
      elem.style.top = `${pos}px`; 
      elem.style.left = `${pos}px`; 
    }
  }
}


const div = document.querySelector('#phaino-main-icon-loader')
const getOffset = (el) => {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

console.log(getOffset(div));
      

setTimeout(() => {
    //moveLoaderMainIcon()
}, 2000);
*/