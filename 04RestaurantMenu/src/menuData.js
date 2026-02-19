export const menuData = [
  {
    restaurantName: "Himalayan Bites",
    currency: "NPR",
    id: 1,
    menuSections: [
      {
        id: 1,
        title: "Starters",
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
                description:
                  "Triple layered sandwich with fresh veggies and mayo.",
                price: 100,
                isSpecial: false,
              },
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Main Course",
        categories: [
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
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Dessert",
        categories: [
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
            ],
          },
        ],
      },
    ],
  },
];
