let OOBD = {
    productNames: ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard', 'Phone', 'Keyboard2', 'Keyboard3', 'Keyboard4', 'Keyboard5', 'Keyboard', 'Keyboard'],
    prices: [100, 120, 1000, 15, 18, 1000, 15, 18, 1000, 15, 18, 48],
    ids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
};

let catalog = {
    items: [],
    container: `.row`,
    countProductRow: 3,

    construct() {
        this._init();
    },
    _init() {
        this._handleData();
        this.render();
    },
    _handleData() {
        for (let i = 0; i < OOBD.ids.length; i++) {
            this.items.push(this._createNewProduct(i))
        }
    },
    _createNewProduct(index) {
        return {
            product_name: OOBD.productNames[index],
            price: OOBD.prices[index],
            product_id: OOBD.ids[index]
        }
    },
    render() {
        let str = '';
        let row = this.items.length / this.countProductRow; // Кол-во строк, по 3 продукта в строке
        let i = 0; // помогатор по именам
        for (let rows = 0; rows < row; rows++) {
            str += `<div data-id="${rows}" class="row-item">`;
            for (let prod = 0; prod < this.countProductRow; prod++) {
                    str += `<div class="trend-product">
                                <img class="image-product-tranding" src="https://placehold.it/300x200">
                                <div>
                                    <span>${this.items[i].product_name}</span>
                                    <span>${this.items[i].price}</span>
                                </div>
                                <button name="cart-btn">Купить</button>
                            </div>`;
                i++;
            }
            str+=`</div>`;
        }
        document.querySelector(this.container).innerHTML = str;
    }
};

let cart = {
    items: [],
    total: 0,
    sum: 0,
    addProduct(product) {
        let id = product;
        //нарушение инкапсуляции (Вообще так не делаем, но пока делаем)
        let prod = catalog._createNewProduct(product);

        let find = this.items.find(product => product.product_id === id);
        if (find) {
            find.quantity++
        } else {
            prod.quantity = 1;
            this.items.push(prod)
        }

        this._checkTotal()
        // cart.items.push (Object.assign ({}, find, {quantity: 1}))
    },
    deleteProduct() {
        return false
    },
    calculateSum() {
        return //
    },
    _checkTotal() {
        //
    }
};
catalog.construct();
window.onload = () =>{
    let btn = document.querySelectorAll('button[name = "cart-btn"]');
    for(let i = 0; i < btn.length; i++){
        btn[i].addEventListener(`click`, addCartProduct);
    }
};


function addCartProduct(event){
    let price = event.target.previousSibling.previousSibling.childNodes[3].textContent;
    let nameProduct = event.target.previousSibling.previousSibling.childNodes[1].textContent;
    let img = event.target.previousSibling.previousSibling.previousSibling.previousSibling;
    let cartEl = document.querySelector(`.cart`);
    let row = '';
    let a = 0;
    let total = document.querySelector(`.totalPrice`);
    let summTotalPrice = document.querySelectorAll(`.cartPrice`);
    row+= `<div class="item">${img}<p>Name: ${nameProduct}</p> <p class="cartPrice">${price}</p></div>`;
    cartEl.innerHTML += row;

    for (let i = 0; i < summTotalPrice.length; i++){
        a += parseInt(summTotalPrice[i].textContent);
    }
    let rowT =  `<span>Total price: </span><span>${a}</span>`;
    total.innerHTML = rowT;
    console.log('Итоговая стоимость: ' + total);
}