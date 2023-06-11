let products = [
  { id: 0, name: "Bat", price: 6, is_featured: false },
  { id: 1, name: "Cricket Pads", price: 20, is_featured: false },
  { id: 2, name: "Football", price: 20, is_featured: false },
]
for (let product of products) {

  if (product.is_featured == true) {
    let mainDiv = document.getElementById("wrapper")

    let card = document.createElement('DIV')
    card.className = "carousel-items"
    mainDiv.appendChild(card)

    let heading = document.createElement('H3')
    card.appendChild(heading)

    let heading_text = document.createTextNode(product.name)
    heading.appendChild(heading_text)

    let photo = document.createElement('IMG')
    photo.src = product.image
    card.appendChild(photo)

    let description = document.createElement('P')
    let description_text = document.createTextNode(product.description)
    description.appendChild(description_text)
    card.appendChild(description)

    let add_to_cart_button = document.createElement("BUTTON")
    let add_to_cart_button_text = document.createTextNode('add to cart')
    add_to_cart_button.appendChild(add_to_cart_button_text)
    add_to_cart_button.addEventListener('click', addToCart)
    add_to_cart_button.id = product.id
    card.appendChild(add_to_cart_button)
  }
}


var slideIndex = 0;
var slides = document.getElementsByClassName("myslide");

function showSlide(n) {
  if (n < 0) {
    slideIndex = slides.length - 1;
  } else if (n >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = n;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  showSlide(slideIndex + n);
}

showSlide(slideIndex);


// Add to cart 
function addToCart(id) {
  // Getting the element with id cart as a string
  cart = document.getElementById("cart").innerText

  // splitting it to convert it in an array
  let cartArray = cart.split("")

  //Taking last item of cartArray using .pop() and storing it in lastItemCart
  let lastItemCart = cartArray.pop()

  // declaring variable updatedCart and storing value of cart
  const updatedCartvalue = Number(lastItemCart) + 1

  // Taking the remaining array and continating it with updated cart and storing it in the element with id cart
  let updatedCart = cartArray.join("") + updatedCartvalue

  document.getElementById("cart").innerText = updatedCart
  localStorage.setItem('cartValue', updatedCart)



  //                                 giving value of product to local storage
  // localStorage.setItem('cart',JSON.stringify(this.id))
  var existing = localStorage.getItem('cart');

  // // If no existing data, use the value by itself
  // // Otherwise, add the new value to it
  console.log(id)
  let data = existing ? JSON.stringify([...JSON.parse(existing), Number(id)]) : JSON.stringify([Number(id)])
  // var data = (existing) ? existing + ',' + JSON.stringify(id) : JSON.stringify(id);
  // var data = JSON.stringify(this.id);

  // // Save back to localStorage
  localStorage.setItem('cart', data);
  // let objectId = products[this.id]
  // localStorage.setItem('cart',Object.entries(objectId))


  // alerting "article added tocart"
  alert("Article added to cart")
}


function ScrollToFooter() {
  var footerElement = document.getElementById("footer");
  footerElement.scrollIntoView();
}
function ScrollToMid() {
  var moveToProduct = document.getElementById("product");
  moveToProduct.scrollIntoView();      //scrollIntoView(): Pre defined function used to scroll the page
}
function validPassword() {
  var password = document.getElementById("password").value;
  var numberRegx = /\d/;
  if (password.length < 8 || !numberRegx.test(password)) {
    alert("Password must be at least 8 characters long and contain at least one number.")
    return false;
  }
  else {
    return true;
  }
}

function saveLogintolocal() {
  let fields = document.getElementById('login-page').getElementsByClassName('input')
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value !== '') {
      localStorage.setItem("isLoggedin", true)
      let loginDiv = document.getElementById('login-page')
      loginDiv.style.display = 'none'
    }
  }
}

function loginAnchor() {
  let loginDiv = document.getElementById('login-page')
  loginDiv.style.display = 'flex'
}

function checkRequired() {
  let fields = document.getElementById('login-page').getElementsByClassName('input')
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].value == '') {
      let alertBlock = document.getElementById('login-page').getElementsByTagName('p')
      alertBlock[0].style.display = 'flex'
    }
  }
}