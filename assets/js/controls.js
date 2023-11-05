// special functions for get active letter, side and shade
const getActiveLetter = () => {
    if (document.querySelectorAll(".on-lter-lft").length > 0) {
      return "left.jpg";
    }

    if (document.querySelectorAll(".on-lter-rgt").length > 0) {
      return "right.jpg";
    }
}

const getActiveOnlyLetter = () => {
  if (document.querySelectorAll(".on-lter-lft").length > 0) {
    return "left";
  }

  if (document.querySelectorAll(".on-lter-rgt").length > 0) {
    return "right";
  }
};


// special functions for remove class active to letters
const removeClsActiveLetterLeft = () => { 

    const letters = document.querySelectorAll(".one-opt-letp-p.on-lter-lft");

    if (letters.length > 0) {
        letters.forEach((el) => {
            el.classList.remove("on-lter-lft")
            el.classList.add("off-lter-lft")
        })
    }
    
}

const removeClsActiveLetterRight = () => {
    const letters = document.querySelectorAll(
      ".sec-opt-letp-p.on-lter-rgt"
    );

    if (letters.length > 0) {
        letters.forEach((el) => {
            el.classList.remove("on-lter-rgt");
            el.classList.add("off-lter-rgt");
        });
    }
}


const removeClsSides = () => {
  const sides = document.querySelectorAll(".sq-opt-sd-p.on-side");

  if (sides.length > 0) {
      sides.forEach((el) => {
        
          if (el.getAttribute("data-ctrl-side") === "-center") {
              el.classList.remove("on-side");
              el.classList.remove("on-center");

              el.classList.add("off-side");
              el.classList.add("off-center");
          } else {
              el.classList.remove("on-side");
              el.classList.add("off-side");
          }
          
    });
  }
};


// special function to add class active by letter

const addClsActiveLtr = (reference) => {

    const arrParams = reference.split("-");
    const cls = arrParams[1] === "left" ? "on-lter-lft" : "on-lter-rgt";
    const clsOff = arrParams[1] === "left" ? "off-lter-lft" : "off-lter-rgt";

    document.querySelector(`#${reference}`).classList.remove(clsOff)
    document.querySelector(`#${reference}`).classList.add(cls)
}


const addClsActiveSide = (reference) => {

    const arrParams = reference.split("-");

    if ( arrParams[1] === "center") {
       document.querySelector(`#${reference}`).classList.remove("off-side");
        document.querySelector(`#${reference}`).classList.remove("off-center");
        
       document.querySelector(`#${reference}`).classList.add("on-side");
       document.querySelector(`#${reference}`).classList.add("on-center");
    } else {
        document.querySelector(`#${reference}`).classList.remove("off-side");
        document.querySelector(`#${reference}`).classList.add("on-side");
    }
    

}


// constants for structure name and path for get name file considering all options posibles
let letterOption = "a";
let shadeOption = "circle";
let insideBlock = `block-${letterOption}`;
let sideOption = "left";
let nameFile = getActiveLetter();
let nameFileSecond = "";

// constant for base path to get complete path images collections
const basePath = "assets/img/renders/";


// constants with name to ID for geometics controls right
const square = "#ctrl-square-c";
const triangle = "#ctrl-triangle-c";
const close = "#ctrl-close-c";
const circle = "#ctrl-circle-c";

// special function for get element using querySelector
const qSelector = (el) => {
    return document.querySelector(el)
}

// special function to change fill to each SVG
const changeFillSvg = (el, fill) => {
    qSelector(el).getAttributeNode("fill").value = fill
}


// special function to chnage name inside block option

const changeInsideBlock = (newLetter) => {
  return `block-${newLetter}`;
};

// special function to combine name with both options

const combineNameWithBothOptions = (newOption) => {
    return `${getActiveOnlyLetter()}${newOption}.jpg`;
};



// special function to clean second name in file name

const cleanFileName = () => {
    return getActiveLetter();
}



// special functions for change option and combination each block

const optionLetterOne = document.querySelectorAll(".one-opt-letp-p");

if ( optionLetterOne.length > 0) {
    optionLetterOne.forEach((el) => {
        
        el.addEventListener("click", (e) => {

            removeClsActiveLetterLeft()
            removeClsActiveLetterRight()

            addClsActiveLtr(e.target.id);


            letterOption = e.target.getAttribute("data-ctrl-ltr");
            insideBlock = changeInsideBlock(letterOption);

            let name = '';
            if (nameFileSecond.length > 0) {
                name = combineNameWithBothOptions(nameFileSecond);
            } else {
                name = cleanFileName();
            }

            generatePath(
                letterOption,
                shadeOption,
                insideBlock,
                sideOption,
                name
            )
     
        })
    })
}


const optionsSide = document.querySelectorAll(".sq-opt-sd-p");

if (optionsSide.length > 0) {
  optionsSide.forEach((el) => {
      el.addEventListener("click", (e) => {
        
        nameFileSecond = e.target.getAttribute("data-ctrl-side");
        sideOption = e.target.getAttribute("data-side");
          
        removeClsSides();
        addClsActiveSide(e.target.id);

        generatePath(
          letterOption,
          shadeOption,
          insideBlock,
          sideOption,
          combineNameWithBothOptions(nameFileSecond)
        )
    });
  });
}


const optionLetterSecond = document.querySelectorAll(".sec-opt-letp-p");

if (optionLetterSecond.length > 0) {
  optionLetterSecond.forEach((el) => {

      el.addEventListener("click", (e) => {
        
          
          removeClsActiveLetterLeft();
          removeClsActiveLetterRight();

          addClsActiveLtr(e.target.id);

          const dataEl = e.target.getAttribute("data-ctrl-ltr-sec");
          const arrData = dataEl.split(",")
          
          letterOption = arrData[1];;
          insideBlock = changeInsideBlock(letterOption);

          let name = '';
          if (nameFileSecond.length > 0) {
            name = combineNameWithBothOptions(nameFileSecond);
          } else {
            name = cleanFileName();
          }

          generatePath(letterOption, shadeOption, insideBlock, sideOption, name);
          
    });
  });
}


const changeOptionByLetter = (option) => {
    if (letter === option) return

}

const changeOptionBySide = (option) => {
    if (option === option) return;

}

const changeOptionByShade = (shade) => {
    if (option === shade) return;

}

const clickedCircle = () => {
    changeFillSvg(circle, "#FFFFFF");
    changeFillSvg(close, "#707070");
    changeFillSvg(triangle, "#707070");
    changeFillSvg(square, "#707070");
    
    shadeOption = "circle";

    let name = "";
    if (nameFileSecond.length > 0) {
      name = combineNameWithBothOptions(nameFileSecond);
    } else {
      name = cleanFileName();
    }


    generatePath(letterOption, shadeOption, insideBlock, sideOption, name)
    
};

const clickedClose = () => {
  changeFillSvg(close, "#FFFFFF");
  changeFillSvg(circle, "#707070");
  changeFillSvg(triangle, "#707070");
    changeFillSvg(square, "#707070");
    
    shadeOption = "close";

    let name = "";
    if (nameFileSecond.length > 0) {
      name = combineNameWithBothOptions(nameFileSecond);
    } else {
      name = cleanFileName();
    }


    generatePath(letterOption, shadeOption, insideBlock, sideOption, name)
    
};

const clickedTriangle = () => {
  changeFillSvg(triangle, "#FFFFFF");
  changeFillSvg(close, "#707070");
  changeFillSvg(circle, "#707070");
    changeFillSvg(square, "#707070");
    
    shadeOption = "triangle";

    let name = "";
    if (nameFileSecond.length > 0) {
      name = combineNameWithBothOptions(nameFileSecond);
    } else {
      name = cleanFileName();
    }

    generatePath(letterOption, shadeOption, insideBlock, sideOption, name)
    
};

const clickedSquare = () => {
  changeFillSvg(square, "#FFFFFF");
  changeFillSvg(close, "#707070");
  changeFillSvg(triangle, "#707070");
    changeFillSvg(circle, "#707070");
    
    shadeOption = "square";

    let name = "";
    if (nameFileSecond.length > 0) {
      name = combineNameWithBothOptions(nameFileSecond);
    } else {
      name = cleanFileName();
    }

    generatePath(letterOption, shadeOption, insideBlock, sideOption, name)
    
};


const generatePath = (letter, shade, block, side, file) => {
    const path = `${basePath}${letter}/${shade}/${block}/${side}/${file}`;
    
    const reference = "#collection-body-collection";
    document.querySelector(reference).style.backgroundImage = `url(${path})`;
};
