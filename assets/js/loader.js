const loaderWrapper = document.querySelector('#phaino-loader-wrapper');

const fade = loaderWrapper.animate([
  { opacity: 1 },
  ], {
    duration: 5000,
		easing: "ease-in"
  }
)

// Remove the element to allow clicking the main content.
fade.addEventListener("finish", () => loaderWrapper.remove())


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