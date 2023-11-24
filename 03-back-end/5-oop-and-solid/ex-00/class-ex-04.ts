class Client {
    constructor(private _name:string){};

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
};

class OrderItem {
   
    constructor(
        private _name: string,
        private _price: number
    ){};

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        this._price = value;
    }
    
};

class Order {
  
    constructor(
        private _client: Client,
        private _items: OrderItem[] = [],
        private _paymentMethod: string,
        private _discount = 0
    ){};

    get discount() {
        return this._discount;
    }

    set discount(value) {
        this._discount = value;
    }

    get paymentMethod(): string {
        return this._paymentMethod;
    }

    set paymentMethod(value: string) {
        this._paymentMethod = value;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    set items(value: OrderItem[]) {
        this._items = value;
    }

    get client(): Client {
        return this._client;
    }

    set client(value: Client) {
        this._client = value;
    }  

    totalOrder():number {
        return this.items.reduce((acc, el) => acc + el.price, 0);
    }

    totalWhithDiscount():number {
        return this.totalOrder() - this._discount;
    }
};

