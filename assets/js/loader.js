document.addEventListener("DOMContentLoaded", (e) => {

  const sel = ".container-loader-loader";
  let path = "assets/img/loader-loader.gif";

  document.querySelector(sel).style.backgroundImage = `url(${path})`;

  setTimeout(() => {
    path = '';
    document.querySelector(sel).style.backgroundImage = `url(${path})`;
  }, 2590);

  setTimeout(() => {
    document.querySelector("#phaino-loader-wrapper").remove();
  }, 2610);

  
});

//const loaderWrapper = document.querySelector('#phaino-loader-wrapper');

/*const fade = loaderWrapper.animate([
  { opacity: 1 },
  ], {
    duration: 3000,
		easing: "ease-in"
  }
)*/

// Remove the element to allow clicking the main content.
/*fade.addEventListener("finish", () => {
  
  document
    .querySelector("#p-slide-out-top-p1")
    .classList.add("slide-out-top-p1");
  
  document
    .querySelector("#p-slide-out-top-system")
    .classList.add("slide-out-top-system");
  
  loaderWrapper.remove();

})*/

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
