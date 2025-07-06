class EcommerceStore{
    constructor(){
        this.products = []
        this.carts = []
    }

    addProduct(){
        let product1 = {
            id : Math.floor(Math.random()*1000000),
            name : "Apple",
            price : 100,
            stock : 10,
            unit : "kg"
        }
        let product2 = {
            id : Math.floor(Math.random()*1000000),
            name : "Mango",
            price : 300,
            stock : 40,
            unit : "kg"
        }
        this.products.push(product1, product2)
        console.log("products: ", this.products)
        this.updateProductsUI()
    }

    updateProductsUI(){
        let productsUIEle = document.getElementById("products")
        productsUIEle.innerHTML = this.products.map(
            (product, index)=>{
                return `<li key="${product.id}">
                    <h3>${product.name}</h3>
                    <b>${product.price} | ${product.unit}</b>
                    <i>Stock: ${product.stock}</i><br>
                    <input type="number" placeholder="Enter Quantity" id="quantity-${product.id}">
                    <button key="${product.id}" onclick="store.addToCart('${product.id}')">Add To Cart</button>
                </li>`
            }
        ).join(" ")
    }

    addToCart(productId){
        console.log("productId: ", productId)
        // finding matching product with productId
        let matchedProduct = this.products.find(
            (p)=>{
                return p.id == productId
            }
        )
        // finding quantity input element
        let quantityIntpuEle = document.getElementById("quantity-"+matchedProduct.id)
        // validation of empty quanity
        if(quantityIntpuEle.value === ""){
            alert("Please enter quantity")
            return;
        }
        // converting string quanity to integer
        let quantity = parseInt(quantityIntpuEle.value)
        // checking avability of stock
        if(quantity > matchedProduct.stock){
            alert("Stock is not available")
            return;
        }
        // finding existing product cart
        let matchingCart = this.carts.find(
            (cart)=>cart.productName == matchedProduct.name
        )
        // if matching cart exist then update the cart details
        if(matchingCart){
            let totalQuantity = matchingCart.quantity + quantity
            if(totalQuantity > matchedProduct.stock){
                alert("not enough stock")
                return
            }
            matchingCart.quantity = totalQuantity
            let newUpdatedCarts = this.carts.map(
                (cart, index)=>{
                    if(cart.id == matchingCart.id){
                        return matchingCart
                    }
                    return cart
                }
            )
            this.carts = newUpdatedCarts
            console.log("cart updated : ", this.carts)
            return;
        }
        let cartDetails = {
            id : Math.floor(Math.random()*1000000),
            productId : matchedProduct.id,
            quantity : quantity,
            productName : matchedProduct.name,
            price : matchedProduct.price,
            unit : matchedProduct.unit
        }
        this.carts.push(cartDetails)
        console.log("cart added : ", this.carts)
    }
}

let store = new EcommerceStore()
store.addProduct()