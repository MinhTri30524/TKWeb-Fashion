const proContainer = document.querySelector('.pro-container');

// const mobileMenu = document.querySelector('#mobile');
// const navbar = document.querySelector('#navbar');

// mobileMenu.addEventListener('click', () => {
//   navbar.classList.toggle('active');
// });

// Trang 2: danh sách sản phẩm
const page2Products = [
  {
    id: 9,
    img: "../assets/images/p1.jpg",
    brand: "nike",
    title: "Cool Black Shirt",
    price: "$55"
  },
  {
    id: 10,
    img: "../assets/images/p2.jpg",
    brand: "nike",
    title: "Summer Grey T-shirt",
    price: "$60"
  },
  {
    id: 11,
    img: "../assets/images/p3.jpg",
    brand: "puma",
    title: "Chill Pink Shorts",
    price: "$40"
  },
  {
    id: 12,
    img: "../assets/images/p4.jpg",
    brand: "puma",
    title: "Funky Yellow Tee",
    price: "$48"
  },
  {
    id: 13,
    img: "../assets/images/p5.jpg",
    brand: "nike",
    title: "Cool Black Shirt",
    price: "$55"
  },
  {
    id: 14,
    img: "../assets/images/p6.jpg",
    brand: "nike",
    title: "Summer Grey T-shirt",
    price: "$60"
  },
  {
    id: 15,
    img: "../assets/images/p7.jpg",
    brand: "puma",
    title: "Chill Pink Shorts",
    price: "$40"
  },
  {
    id: 16,
    img: "../assets/images/p8.jpg",
    brand: "puma",
    title: "Funky Yellow Tee",
    price: "$48"
  }
];

function createProductHTML(product) {
  return `
    <div class="pro" onclick="goToProductDetail(${product.id})">
      <img src="${product.img}" alt="">
      <div class="des">
        <span>${product.brand}</span>
        <h5>${product.title}</h5>
        <div class="star">
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <i class="fas fa-star"></i><i class="fas fa-star"></i>
        </div>
        <h4>${product.price}</h4>
      </div>
      <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
    </div>
  `;
}

document.getElementById('page2').addEventListener('click', function (e) {
  e.preventDefault();

  const newHTML = page2Products.map(createProductHTML).join('');
  proContainer.innerHTML = newHTML;
});
document.getElementById('page1').addEventListener('click', function (e) {
  e.preventDefault();
  location.reload();
});


const paginationLinks = document.querySelectorAll('#pagination a');

paginationLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    paginationLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}

