// window.addEventListener("load", startup);

const assets = [
  "assets/000.jpg",
  "assets/001.jpg",
  "assets/002.jpg",
  "assets/003.jpg",
  "assets/004.jpg",
  "assets/005.jpg",
  "assets/006.jpg",
  "assets/007.jpg",
  "assets/008.jpg",
  "assets/009.jpg",
  "assets/010.jpg",
  "assets/011.jpg",
  "assets/012.jpg",
  "assets/013.jpg",
  "assets/014.jpg",
  "assets/015.jpg",
  "assets/016.jpg",
  "assets/017.jpg",
  "assets/018.jpg",
  "assets/019.jpg",
  "assets/020.jpg",
  "assets/021.jpg",
  "assets/022.jpg",
  "assets/023.jpg",
  "assets/024.jpg",
  "assets/025.jpg",
  "assets/026.jpg",
  "assets/027.jpg",
  "assets/028.jpg",
  "assets/029.jpg",
  "assets/030.jpg",
  "assets/031.jpg",
  "assets/032.jpg",
  "assets/033.jpg",
  "assets/034.jpg",
  "assets/035.jpg",
  "assets/036.jpg",
  "assets/037.jpg",
  "assets/038.jpg",
  "assets/039.jpg",
  "assets/040.jpg",
  "assets/041.jpg",
  "assets/042.jpg",
  "assets/043.jpg",
  "assets/044.jpg",
  "assets/045.jpg",
  "assets/046.jpg",
  "assets/047.jpg",
  "assets/048.jpg",
  "assets/049.jpg",
  "assets/050.jpg",
  "assets/051.jpg",
  "assets/052.jpg",
  "assets/053.jpg",
  "assets/054.jpg",
  "assets/055.jpg",
  "assets/056.jpg",
  "assets/057.jpg",
  "assets/058.jpg",
  "assets/059.jpg",
  "assets/060.jpg",
  "assets/061.jpg",
  "assets/062.jpg",
  "assets/063.jpg",
  "assets/064.jpg",
  "assets/065.jpg",
  "assets/066.jpg",
  "assets/067.jpg",
  "assets/068.jpg",
  "assets/069.jpg",
  "assets/070.jpg",
  "assets/071.jpg",
  "assets/072.jpg",
  "assets/073.jpg",
  "assets/074.jpg",
  "assets/075.jpg",
  "assets/076.jpg",
  "assets/077.jpg",
  "assets/078.jpg",
  "assets/079.jpg",
  "assets/080.jpg",
  "assets/081.jpg",
  "assets/082.jpg",
  "assets/083.jpg",
  "assets/084.jpg",
  "assets/085.jpg",
  "assets/086.jpg",
  "assets/087.jpg",
  "assets/088.jpg",
  "assets/089.jpg",
  "assets/090.jpg",
  "assets/091.jpg",
  "assets/092.jpg",
  "assets/094.jpg",
  "assets/093.jpg",
  "assets/095.jpg",
  "assets/096.jpg",
  "assets/097.jpg",
  "assets/098.jpg",
  "assets/img0.jpg",
  "assets/img1.jpg",
  "assets/img2.jpg",
  "assets/img3.jpg",
  "assets/img4.jpg",
  "assets/img5.jpg",
  "assets/img6.jpg",
  "assets/img7.jpg",
  "assets/img8.jpg",
  "assets/img9.jpg",
  "assets/img10.jpg",
  "assets/img11.jpg",
  "assets/img12.jpg",
  "assets/img13.jpg",
  "assets/img14.jpg",
  "assets/img15.jpg",
  "assets/img16.jpg",
  "assets/img17.jpg",
  "assets/img18.jpg",
  "assets/img19.jpg",
  "assets/img20.jpg",
  "assets/img21.jpg",
  "assets/img22.jpg",
  "assets/img23.jpg",
  "assets/img24.jpg",
  "assets/img25.jpg",
  "assets/img26.jpg",
  "assets/img27.jpg",
  "assets/img28.jpg",
  "assets/img29.jpg",
  "assets/img30.jpg",
  "assets/img31.jpg",
  "assets/img32.jpg",
  "assets/img33.jpg",
  "assets/img34.jpg",
  "assets/img35.jpg",
  "assets/img36.jpg",
  "assets/img37.jpg",
  "assets/img38.jpg",
  "assets/img39.jpg",
  "assets/img40.jpg",
  "assets/img41.jpg",
  "assets/img42.jpg",
  "assets/img43.jpg",
  "assets/img44.jpg",
  "assets/img45.jpg",
  "assets/img46.jpg",
  "assets/img47.jpg",
  "assets/img48.jpg",
  "assets/img49.jpg",
];

let i = 0;

function placeImage(x, y) {
  const nextSrc = assets[i];

  const img = document.createElement("img")
  img.setAttribute("src", nextSrc);
  img.setAttribute("draggable", "false");

  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.transform = "translate(-50%, -50%) scale(0.5) rotate(" + (Math.random() * 20 - 10) + "deg)";

  document.getElementById("container").appendChild(img);

  i = i + 1;
  if (i >= assets.length) {
    i = 0
  }
};

document.getElementById("container").addEventListener("click", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
});

document.getElementById("container").addEventListener("touchend", function (event) {
  event.preventDefault()
  placeImage(event.pageX, event.pageY)
});

var handler = function(event){
  console.log(event);
}
