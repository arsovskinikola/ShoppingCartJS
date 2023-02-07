let totalAll = 0
function addToCart(element) {
    let mainEl = element.closest(".single-item")
    let price = mainEl.querySelector(".price").innerText
    let name = mainEl.querySelector("h3").innerText
    let quantity = mainEl.querySelector("input").value
    let cartItems = document.querySelector(".cart-items")
    let total = document.querySelector(".total")

    if(parseInt(quantity) > 0) {
        price = price.substring(1)
        price = parseInt(price)
        quantity = parseInt(quantity)
        let productTotal = price * quantity
        totalAll += productTotal
        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${name}</h3>
                                    <p>$${price} x ${quantity} = $<span>${productTotal}</span> </p>
                                    <button class="remove-item" onclick="removeFromCart(this)">Remove</button>
                                </div>` 

        element.innerText = "Added"
        element.setAttribute("disabled", "true")

        total.innerHTML = `Total: $<span>${totalAll}</span>`

    } else {
        alert("Choose amount!")
    } 

}

function removeFromCart(element) {
    let mainEl = element.closest(".cart-single-item")
    let price = mainEl.querySelector("p span").innerText
    let name = mainEl.querySelector("h3").innerText
    let vegetables = document.querySelectorAll(".single-item")
    price = parseInt(price)
    totalAll = parseInt(totalAll)
    totalAll -= price

    document.querySelector(".total").innerText = `Total: $${totalAll}`

    mainEl.remove()

    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector(".si-content h3").innerText
        if(itemName === name) {
            vege.querySelector(".actions input").value = 0
            vege.querySelector(".actions button").removeAttribute('disabled')
            vege.querySelector(".actions button").innerText = "Add"
        }
    })
}

