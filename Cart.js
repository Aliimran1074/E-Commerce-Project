let products = [
    { id: 0, name: "Bat", price: 6, is_featured: false },
    { id: 1, name: "Cricket Pads",price: 20, is_featured: false },
    { id: 2, name: "Football", price: 20, is_featured: false },
  ]

//taking index
let cartArray = JSON.parse(localStorage.getItem('cart'))
// console.log(cartBodyWrapper)
console.log(cartArray);

for (i = 0; i < cartArray.length; i++) {

    let cartId = cartArray[i]
    console.log(cartId,"cartId")


    // creating cart wrapper div
    let cartWrapper = document.createElement('DiV')

    cartWrapper.className = 'cart-wrapper'


    // creating cart body div
    let cartBody = document.createElement('DIV')

    cartBody.className = 'cart-body1'

    // appending cartbody to cart wrapper as child
    cartWrapper.appendChild(cartBody)

    // // creating img element
    // let imagePath = document.createElement('IMG')

    // // giving src attribute
    // imagePath.setAttribute('src', products[cartId].image)

    // // appending imagePath to cart body as child
    // cartBody.appendChild(imagePath)

    //creating heading of cart product with h3 element
    let heading = document.createElement('H3')

    // creating headingText
    
    let headingText = document.createTextNode(products[cartId].name)

    // appending heading text to heading
    heading.appendChild(headingText)

    // appending heading to cart body as child
    cartBody.appendChild(heading)





    // creating cart quantity div
    let cartQuantityDiv = document.createElement('DIV')

    // giving class of cart-quantity to cartQuantity
    cartQuantityDiv.className = 'cart-quantity1'



    // // creating increment div
    // let incrementDiv = document.createElement('DIV')

    // // giving class name
    // incrementDiv.className = 'increment'

    // // giving text node to incrementDiv
    // let incrementDivText = document.createTextNode('+')

    // // appending incrementDivText to incrementDiv
    // incrementDiv.appendChild(incrementDivText)

    // // appending increment div to cart quantity div
    // cartQuantityDiv.appendChild(incrementDiv)



    // creating cart quantity P
    let cartQuantityP = document.createElement('P')

    // creating cart quantity text
    let cartQuantitytext = document.createTextNode(1)

    // giving cartQuantityP a class
    cartQuantityP.className = 'quantityValue'

    // appending cartQuantityText to cartQuantityP as child
    cartQuantityP.appendChild(cartQuantitytext)

    // appending cartQuantityP to cartQuantityDiv
    cartQuantityDiv.appendChild(cartQuantityP)

    // appending cartQuantity to CartWrapper as child
    cartWrapper.appendChild(cartQuantityDiv)

    //creating cartPriceDiv
    let cartPriceDiv = document.createElement('DIV')

    // giving classname to cartPriceDiv
    cartPriceDiv.className = 'cart-price1'

    // creating a p element
    let cartPriceP = document.createElement('P')

    // creating cart price text
    let cartPricetext = document.createTextNode("$" + products[cartId].price)

    // appendind cartPricetext to cartPrice
    cartPriceP.appendChild(cartPricetext)

    // appending cartPrice to cartPriceDiv
    cartPriceDiv.appendChild(cartPriceP)

    cartWrapper.appendChild(cartPriceDiv)

    // creating subtotalDiv
    let subtotalDiv = document.createElement('DIV')

    // giving classname to subtotalDIv
    subtotalDiv.className = 'subtotal1'

    //creating subotalp
    let subtotalP = document.createElement('P')

    // giving classname to subtotalP
    subtotalP.className = 'subtotal1-p'

    // saving subtotal price to variable
    let subtotalprice = products[cartId].price * cartQuantityP.innerText

    // creating subtotal text
    let subTotalText = document.createTextNode('$' + subtotalprice)

    // appending subTotalText to subtotalDiv
    subtotalP.appendChild(subTotalText)

    // appending subtotalp to  subtotal DIv
    subtotalDiv.appendChild(subtotalP)

    // appending subtotalDiv to cart quantity div
    cartWrapper.appendChild(subtotalDiv)



    // getting previous subtotal
    let previousSubTotal = document.getElementsByClassName('subtotal1-p')





    // appending cartwrapper to document
    let cartDiv = document.getElementById('cart-body-wrapper')

    cartDiv.appendChild(cartWrapper)

    document.getElementById('total-price').innerText = Number(document.getElementById('total-price').innerText) + Number(subtotalprice)
}

let totalWithout$ = document.getElementById('total-price').innerText

document.getElementById('total-price').innerText = "$" + totalWithout$





let isCartEmpty = localStorage.getItem('cartValue') == null
document.getElementById("cart-value").innerText = isCartEmpty ? 'Cart:0' : localStorage.getItem('cartValue')

function checkout() {
    localStorage.removeItem('cart')
    localStorage.removeItem('cartValue')
    // if cart is empty
    if (localStorage.getItem('isLoggedin') == false || localStorage.getItem('isLoggedin') == null) {
        let loginDiv = document.getElementById('login-page')
        loginDiv.style.display = 'flex'
    } else {
        window.location = 'index.html'
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