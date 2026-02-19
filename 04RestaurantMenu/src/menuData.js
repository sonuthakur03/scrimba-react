export const menuData = [
  {
    restaurantName: "Himalayan Bites",
    currency: "NPR",
    categories: [
      {
        id: "sandwich",
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
            description: "Creamy cheese mixed with sweet corn.",
            price: 110,
            isSpecial: false,
          },
          {
            id: 4,
            name: "Tuna Sandwich",
            description: "Fresh tuna mix with light seasoning.",
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
        ],
      },
    ],
  },
];
