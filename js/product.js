const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

//console.log("ID sản phẩm được chọn là:", productId);

const products = [
  {
    id: "1",
    name: "Carton Astronaut Tshirts",
    price: 78,
    image: "../assets/images/1.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "2",
    name: "Carton Leaf Tshirts",
    price: 78,
    image: "../assets/images/2.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "3",
    name: "Rose Multicolor Tshirts",
    price: 78,
    image: "../assets/images/9.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "4",
    name: "Pink Flower Tshirts",
    price: 78,
    image: "../assets/images/4.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "5",
    name: "Purple Flowering Tshirts",
    price: 78,
    image: "../assets/images/10.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "6",
    name: "Short Knicker ",
    price: 78,
    image: "../assets/images/15.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "7",
    name: "2 in 1 Double Routed",
    price: 78,
    image: "../assets/images/11.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "8",
    name: "Ash Short",
    price: 78,
    image: "../assets/images/14.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "9",
    name: "Cool Black Shirt",
    price: 55,
    image: "../assets/images/p1.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "10",
    name: "Summer Grey T-shirt",
    price: 60,
    image: "../assets/images/p2.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "11",
    name: "Chill Pink Shorts",
    price: 40,
    image: "../assets/images/p3.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "12",
    name: "Funky Yellow Tee",
    price: 48,
    image: "../assets/images/p4.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "14",
    name: "Summer Grey T-shirt",
    price: 60,
    image: "../assets/images/p6.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "13",
    name: "Cool Black Shirt",
    price: 55,
    image: "../assets/images/p5.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "15",
    name: "Chill Pink Shorts",
    price: 40,
    image: "../assets/images/p7.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "16",
    name: "Funky Yellow Tee",
    price: 48,
    image: "../assets/images/p8.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
];

const product = products.find(p => p.id === productId);
if (product) {
  document.getElementById("product-name").innerText = product.name;
  document.getElementById("product-price").innerText = "$" + product.price;
  document.getElementById("product-img").src = product.image;
  document.getElementById("product-desc").innerText = product.desc;
}

function selectSize(button) {
  // Bỏ active khỏi tất cả nút
  const buttons = document.querySelectorAll('.size-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Thêm active vào nút vừa click
  button.classList.add('active');

  // (Tuỳ chọn) Lưu size được chọn
  const selectedSize = button.innerText;
  console.log("Size đã chọn:", selectedSize);
}


