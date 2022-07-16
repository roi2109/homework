const div1 = document.getElementById("div1");
console.log(div1);
div1.classList.add("round");
const div2 = document.getElementById("div2");
console.log(div2);
div2.innerHTML = `<ul>
    <li>Roi</li>
    <li>Gal</li>
    <li>21</li>
    <li>Yehud</li>
  </ul>`;
const car = {
  title: "car",
  price: 200_000,
  hand: 2,
  km: 100_403,
  year: 2014,
  pic: "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg",
};
const div3 = document.getElementById("div3");
console.log(div3);
document.querySelector(".pic").innerHTML = `<img class="w-100"
    src="https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_960_720.jpg"
    alt=""
  />`;

console.log((document.querySelector(".card-title").innerHTML = car.title));
document.querySelector(".price").innerHTML = "Price:" + " " + car.price;
document.querySelector(".hand").innerHTML = "hand:" + " " + car.hand;
document.querySelector(".km").innerHTML = "km:" + " " + car.km;
document.querySelector(".year").innerHTML = "year:" + " " + car.year;
document.querySelector(".pic");
const div4 = document.getElementById("div4");
console.log(div4);
div4.classList.add("bg-danger");
div4.style.width = " 100px";
div4.style.height = "100px";
