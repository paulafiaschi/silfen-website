const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "http://tolloman.com/re-create/wp-json/wp/v2/house/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showBags(data));

function showBags(bags) {
  //grap the template
  const template = document.querySelector("#bagtemp-page").content;
  //clont it
  const copy = template.cloneNode(true);
  copy.querySelector(".img-display-page").src = bags.photo[0].guid;
  //bags._links["wp:featuredmedia"][0].href;
  console.log(bags.guid.rendered);
  copy.querySelector(".bag-name-page").textContent = `${bags.title.rendered}`;
  copy.querySelector(".bag-price-page").textContent = `${bags.bed}` + " DDK";
  copy.querySelector(".descripition").textContent = `${bags.description}`;
  //grab parent
  const parent = document.querySelector(".product-page");
  console.log(parent);
  //append
  parent.appendChild(copy);
}
