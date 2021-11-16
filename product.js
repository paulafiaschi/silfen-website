fetch("http://tolloman.com/re-create/wp-json/wp/v2/categories?_fields=name")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleBreadCrumbs(data);
  });

function handleBreadCrumbs(data) {
  // console.log(data);
  data.forEach(showCate);
}

function showCate(bag) {
  console.log(bag.name);
  const template = document.querySelector(".catetemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a.cate-link").textContent = bag.name;
  copy.querySelector("a.cate-link").href = `productp.html?bagname=${bag.name}`;
  const parent = document.querySelector(".menu-op");
  parent.appendChild(copy);
  //console.log(parent);
  //getHouses();
}

fetch(
  "http://tolloman.com/re-create/wp-json/wp/v2/house?per_page=100&orderby=title&order=asc&_embed"
)
  .then(function (source) {
    return source.json();
  })
  .then(function (data) {
    productList(data);
  });

function productList(data) {
  console.log(data);
  data.forEach(showBags);
}

function showBags(bags) {
  //console.log(bags);
  //grap the template
  const template = document.querySelector("#bagtemp").content;
  //clont it
  const copy = template.cloneNode(true);
  //change the content
  copy.querySelector(".img-display").src =
    bags._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
  copy.querySelector(".bag-name").textContent = `${bags.title.rendered}`;
  copy.querySelector(".bag-price").textContent = `${bags.bed}` + " DDK";
  //grab parent
  const parent = document.querySelector(".product-list");
  //append
  parent.appendChild(copy);
}

/*function getHouses() {
  fetch("http://tolloman.com/re-create/wp-json/wp/v2/house?_embed")
    .then((res) => res.json())
    .then(setupHouses);
}

function setupHouses(houseArry) {
  //console.log(houseArry);
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

fetch("http://tolloman.com/re-create/wp-json/wp/v2/house?_embed")
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    showPosts(data);
  });

function showPosts(data) {
  //console.log(data);
}*/
