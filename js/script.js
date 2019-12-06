/* Задание 1 */
function getObjFromNum(num) {
    let obj = {};
    if (num < 1 || num > 999 || isNaN(num)) {
        console.log('Ошибка. Введите число от 1 до 999');
        return obj;
    } else {
        obj['едининцы'] = num % 10;
        obj['десятки'] = (num - obj['едининцы']) % 100 / 10;
        obj['сотни'] = (num - obj['едининцы'] - obj['десятки'] * 10) % 1000 / 100;
        return obj;
    }
}

console.log(getObjFromNum(245));

/* Задание 2 */
let OOBD = {
    productNames: ['Processor', 'Display', 'Notebook', 'Mouse', 'Keyboard'],
    prices: [100, 120, 1000, 15, 18],
    ids: [0, 1, 2, 3, 4]
};
let products = [];

let cart = {
    items: [],
    total: 0,
    addProduct: (id) => {
        let find = products.find(el => el.product_id === id);
        cart.items.push(Object.assign({}, find, {quantity: 1}));
    }
};

function getData() {
    for (let i = 0; i < OOBD.ids.length; i++) {
        products.push(createNewProduct(i))
    }
}

function createNewProduct(index) {
    return {
        product_name: OOBD.productNames[index],
        price: OOBD.prices[index],
        product_id: OOBD.ids[index]
    }
}

/* Задание 4 Bulls and cows */
let start = {
    game: () => {
        this.goal = start.getNumber();
        this.rounds = 10;
        this.playing = true;

        while (this.playing) {
            if (this.rounds >= 1) {
                this.playing = start.findOut(this.goal);
                this.playing ? console.log(`Осталось ${--this.rounds}`) : console.log(`You win: ` + this.goal);
            } else {
                this.playing = false;
                console.log(`You loose: ` + this.goal);
                return false;
            }
        }
    },
    findOut: (g) => {
        this.bulls = 0;
        this.cows = 0;
        this.user = [...prompt('Введите число')];

        this.user.forEach(function (num, index) {
            if (+num === g [index]) {
                this.bulls++;
            } else if (g.indexOf(+num) >= 0) {
                this.cows++;
            }
        });
        console.log(`Ваш вариант ${this.user}`);
        console.log(`Cows: ${this.cows}; Bulls: ${this.bulls}`);
        return this.bulls < 4 ? true : false;
    },
    getNumber: () => {
        this.arr = [];

        while (this.arr.length < 4) {
            this.num = start.randomize();
            if (this.arr.indexOf(this.num) === -1) {
                this.arr.push(this.num);
            }
        }
        return this.arr;
    },
    randomize: () => {
        return Math.floor(Math.random() * 10);
    }
};

/* Задание 4 Rock, Paper, Scissors */
let rockPaperScissors = {
    game: (user) => {
        this.comp = rockPaperScissors.getPC();

        if ((user === 0 && this.comp === 1) || (user === 1 && this.comp === 2) || (user === 2 && this.comp === 0)) {
            console.log('Пользователь победил! ' + rockPaperScissors.translate(user) + '; ' + rockPaperScissors.translate(this.comp));
        } else if (this.comp === user) {
            console.log('Ничья');
        } else {
            console.log('Пользователь проиграл! ' + rockPaperScissors.translate(user) + '; ' + rockPaperScissors.translate(this.comp));
        }
    },
    getPC: () => {
        return Math.floor(Math.random() * 3);
    },
    translate: (ch) => {
        return ch === 0 ? 'Камень' : (ch === 1 ? 'Ножницы' : 'Бумага');
    }
};
