export const menuData = [
  {
    restaurantName: "Himalayan Bites",
    currency: "NPR",
    id: 1,
    categories: [
      {
        id: 1,
        title: "Sandwiches",
        titleText:
          "Includes your choice of garden salad, mixed fresh fruits or baked potato chips.",
        img: "https://images.pexels.com/photos/28681955/pexels-photo-28681955.jpeg",
        items: [
          {
            id: 1,
            name: "Chicken Grilled Sandwich",
            description: "Chicken sandwich grilled with butter.",
            price: 120,
            isSpecial: true,
          },
          {
            id: 2,
            name: "Veg Club Sandwich",
            description: "Triple layered sandwich with fresh veggies and mayo.",
            price: 100,
            isSpecial: false,
          },
          {
            id: 3,
            name: "Cheese Corn Sandwich",
            description: "Creamy cheese mixed with sweet corn and herbs.",
            price: 110,
            isSpecial: false,
          },
          {
            id: 4,
            name: "Tuna Delight Sandwich",
            description: "Fresh tuna filling with light seasoning and lettuce.",
            price: 150,
            isSpecial: true,
          },
          {
            id: 5,
            name: "Spicy Paneer Sandwich",
            description: "Grilled paneer with spicy sauce and onions.",
            price: 130,
            isSpecial: false,
          },
          {
            id: 6,
            name: "Egg Mayo Sandwich",
            description: "Boiled eggs mixed with creamy mayo and pepper.",
            price: 90,
            isSpecial: false,
          },
        ],
      },
      {
        id: 2,
        title: "Burgers",
        titleText: "Delicious burgers with fresh toppings and sauces.",
        img: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
        items: [
          {
            id: 1,
            name: "Classic Chicken Burger",
            description:
              "Juicy chicken patty with lettuce, tomato, and cheese.",
            price: 200,
            isSpecial: true,
          },
          {
            id: 2,
            name: "Veggie Burger",
            description: "Grilled vegetable patty with fresh greens.",
            price: 180,
            isSpecial: false,
          },
          {
            id: 3,
            name: "Cheese Burger",
            description: "Chicken patty with melted cheese and secret sauce.",
            price: 210,
            isSpecial: false,
          },
        ],
      },
      {
        id: 3,
        title: "Drinks",
        titleText: "Refreshing beverages to complement your meal.",
        img: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg",
        items: [
          {
            id: 1,
            name: "Fresh Lemonade",
            description: "Citrusy and refreshing lemonade.",
            price: 50,
            isSpecial: false,
          },
          {
            id: 2,
            name: "Cold Coffee",
            description: "Chilled coffee with cream and sugar.",
            price: 80,
            isSpecial: true,
          },
          {
            id: 3,
            name: "Mango Shake",
            description: "Sweet mango shake with ice cream.",
            price: 100,
            isSpecial: false,
          },
        ],
      },
    ],
  },
];
