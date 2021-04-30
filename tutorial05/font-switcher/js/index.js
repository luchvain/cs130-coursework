const makeBigger = () => {
   //alert('make bigger!');
   document.querySelector(".content p").style.fontSize = "35px";
};

const makeSmaller = () => {
   //alert('make smaller!');
   document.querySelector(".content p").style.fontSize ="15px";
};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;

