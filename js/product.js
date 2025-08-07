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
    name: "Carton Astronaut Tshirts",
    price: 78,
    image: "../assets/images/1.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "4",
    name: "Carton Leaf Tshirts",
    price: 78,
    image: "../assets/images/2.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "5",
    name: "Carton Astronaut Tshirts",
    price: 78,
    image: "../assets/images/1.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "6",
    name: "Carton Leaf Tshirts",
    price: 78,
    image: "../assets/images/2.jpg",
    desc: "Thiết kế đơn giản với họa tiết lá.",
  },
  {
    id: "7",
    name: "Carton Astronaut Tshirts",
    price: 78,
    image: "../assets/images/1.jpg",
    desc: "Áo thun chất liệu cotton, hình phi hành gia độc đáo.",
  },
  {
    id: "8",
    name: "Carton Leaf Tshirts",
    price: 78,
    image: "../assets/images/2.jpg",
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


