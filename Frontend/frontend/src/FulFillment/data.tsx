export default {
  orders: [
    {
      id: "ORD001",
      totalPrice: 150,
      status: "shipped",
      products: [
        {
          name: "Nike Shirt",
          quantity: 2,
          price: 75,
        },
      ],
    },
    {
      id: "ORD002",
      totalPrice: 250,
      status: "unfulfilled",
      products: [
        {
          name: "Adidas Shoes",
          quantity: 1,
          price: 250,
        },
      ],
    },
    {
      id: "ORD003",
      totalPrice: 440,
      status: "shipped",
      products: [
        {
          name: "Jio Shoes",
          quantity: 1,
          price: 122,
        },
      ],
    },
    {
      id: "ORD004",
      totalPrice: 300,
      status: "unfulfilled",
      products: [
        {
          name: "Nokaa Shoes",
          quantity: 1,
          price: 322,
        },
      ],
    },
  ],
};
