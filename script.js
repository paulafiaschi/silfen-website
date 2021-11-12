window.addEventListener("load", setup);
const endpoint = "http://tolloman.com/re-create/wp-json/wp/v2/";

function setup() {
  getCate();
}
function getCate() {
  fetch(endpoint + "categories?parent=0&_fields=name")
    .then((res) => res.json())
    .then(setupCate);
}
//http://tolloman.com/re-create/wp-json/wp/v2/house?_embed
function getHouses() {
  fetch("http://tolloman.com/re-create/wp-json/wp/v2/house?_embed")
    .then((res) => res.json())
    .then(setupHouses);
}

function setupHouses(houseArry) {
  console.log(houseArry);
  const template = document.querySelector("template#housetemp").content;
  const parentElement = document.querySelector("main");
  houseArry.forEach((house) => {
    const copy = template.cloneNode(true);
    //copy.querySelector("h2").textContent = `${house.title.rendered}`;

    //copy.querySelector("img").scr =house._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url;
    //copy.querySelector(".img").scr = `${house.photo.guid}`;
    copy.querySelector(".price").textContent = `${house.bed}`;
    copy.querySelector(".name").textContent = `${house.title.rendered}`;
    //copy.querySelector(".sqs").textContent = `${house.categories.description}`;
    parentElement.appendChild(copy);
  });
  //document.querySelector(".main li").classList.add("open");
  //document.querySelector(".main section.colla").classList.add("open");
}

function setupCate(catArry) {
  const template = document.querySelector("template#catetemp").content;
  const parentElement = document.querySelector(".mainlist");
  catArry.forEach((cat) => {
    const copy = template.cloneNode(true);
    copy.querySelector("li").textContent = cat.name;
    parentElement.appendChild(copy);
  });
  //document.querySelector(".main li").classList.add("open");
  //document.querySelector(".main section.colla").classList.add("open");
  getHouses();
}

fetch("http://tolloman.com/re-create/wp-json/wp/v2/house?_embed")
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    showPosts(data);
  });

function showPosts(data) {
  //console.log(data);
}
