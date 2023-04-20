let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}
    , telefone: ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, 
    ${order.address.apartment}`)
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
    let newBuyer = order.name = 'Luiz Silva'
    let newTotal = order.payment.total = '50'
    let pizza = Object.keys(order.order.pizza)
    let drink = order.order.drinks.coke.type
    return `Olá ${newBuyer}, o valor total de seu pedido de ${pizza}, e ${drink} é ${newTotal}`
}

  console.log(orderModifier(order))