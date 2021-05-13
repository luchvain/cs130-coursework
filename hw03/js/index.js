const images = [
    "images/field1.jpg",
    "images/purple.jpg",
    "images/jar.jpg",
    "images/green.jpg",
    "images/green1.jpg",
    "images/purple1.jpg",
    "images/magnolias.jpg",
    "images/daisy1.jpg",
  ];
  
  const initScreen = () => {
    images.forEach((image, idx) => {
      document.querySelector(".cards").innerHTML += `
              <li class="card">
                  <div class="image" 
                      style="background-image:url('${image}')"
                      data-index="${idx}"></div>
              </li>`;
    });
  };
  
  let currentIndex = 0;
  
  // create event handler:
  const showImage = (ev) => {
    const elem = ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
    console.log("currentIndex:", currentIndex);
    document.querySelector(".featured_image").style.backgroundImage =
      elem.style.backgroundImage;
  };
  
  const showNext = (ev) => {
    if (currentIndex + 1 > images.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    console.log("currentIndex:", currentIndex);
    const featuredImage = document.querySelector(".featured_image");
    const imageUrl = images[currentIndex];
    featuredImage.style.backgroundImage = `url(${imageUrl})`;
  };
  
  const showPrev = (ev) => {
    if (currentIndex - 1 < 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex -= 1;
    }
    console.log("currentIndex:", currentIndex);
    const featuredImage = document.querySelector(".featured_image");
    const imageUrl = images[currentIndex];
    featuredImage.style.backgroundImage = `url(${imageUrl})`;
  };
  
  initScreen();
  
  // attach event handler to all of the image tags
  // (after initScreen() has been invoked).
  const imageElements = document.querySelectorAll(".image");
  for (const elem of imageElements) {
    elem.onclick = showImage;
  }
  
  document.querySelector(".next").onclick = showNext;
  document.querySelector(".prev").onclick = showPrev;
  document.querySelector(".featured_image").onclick = showNext;
  