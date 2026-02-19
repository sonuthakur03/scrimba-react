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
            title: "Sandwiches & Snacks",
            titleText:
              "Includes your choice of garden salad, mixed fresh fruits or baked potato chips.",
            img: [
              "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg",
              "https://images.pexels.com/photos/28445589/pexels-photo-28445589.jpeg",
            ],
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
              {
                id: 3,
                name: "Momo (Chicken)",
                description:
                  "Steamed dumplings filled with minced chicken and spices.",
                price: 150,
                isSpecial: true,
              },
              {
                id: 4,
                name: "Momo (Veg)",
                description: "Steamed dumplings with mixed vegetables.",
                price: 120,
                isSpecial: false,
              },
              {
                id: 5,
                name: "Sel Roti",
                description:
                  "Traditional Nepali rice doughnut, slightly sweet.",
                price: 80,
                isSpecial: false,
              },
              {
                id: 6,
                name: "Chatamari",
                description: "Rice crepe topped with minced meat or veggies.",
                price: 140,
                isSpecial: true,
              },
              {
                id: 7,
                name: "Pakora",
                description:
                  "Deep-fried vegetable fritters with Nepali spices.",
                price: 100,
                isSpecial: false,
              },
              {
                id: 8,
                name: "Paneer Tikka",
                description:
                  "Grilled Indian-style paneer cubes with Nepali spices.",
                price: 180,
                isSpecial: true,
              },
              {
                id: 9,
                name: "Aloo Chop",
                description:
                  "Spicy potato balls deep-fried to golden perfection.",
                price: 90,
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
            title: "Burgers & Nepali Specialties",
            titleText: "Delicious main courses with authentic Nepali flavors.",
            img: [
              "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg",
              "https://images.pexels.com/photos/4595313/pexels-photo-4595313.jpeg",
            ],
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
                name: "Dal Bhat Tarkari",
                description:
                  "Steamed rice with lentil soup, vegetable curry, and pickle.",
                price: 250,
                isSpecial: true,
              },
              {
                id: 4,
                name: "Chicken Sekuwa",
                description:
                  "Grilled marinated chicken served with spicy achar.",
                price: 300,
                isSpecial: true,
              },
              {
                id: 5,
                name: "Aloo Tama Bodi",
                description:
                  "Nepali curry with potato, bamboo shoots, and black-eyed peas.",
                price: 220,
                isSpecial: false,
              },
              {
                id: 6,
                name: "Gundruk Soup",
                description: "Fermented leafy greens soup, a Nepali delicacy.",
                price: 200,
                isSpecial: false,
              },
              {
                id: 7,
                name: "Vegetarian Thali",
                description: "Rice, dal, vegetable curry, achar, and papad.",
                price: 300,
                isSpecial: false,
              },
              {
                id: 8,
                name: "Non-Veg Thali",
                description:
                  "Rice, chicken curry, dal, vegetable curry, and pickle.",
                price: 400,
                isSpecial: true,
              },
              {
                id: 9,
                name: "Thakali Set",
                description:
                  "Traditional Thakali set with rice, gundruk soup, chicken sekuwa, and achar.",
                price: 450,
                isSpecial: true,
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
            title: "Sweets & Drinks",
            titleText:
              "Refreshing desserts and beverages to complete your meal.",
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
                name: "Yomari",
                description:
                  "Sweet rice flour dumpling filled with jaggery and sesame seeds.",
                price: 120,
                isSpecial: true,
              },
              {
                id: 4,
                name: "Juju Dhau",
                description: "Famous Bhaktapur yogurt, creamy and rich.",
                price: 150,
                isSpecial: true,
              },
              {
                id: 5,
                name: "Kheer",
                description: "Rice pudding with milk, sugar, and cardamom.",
                price: 110,
                isSpecial: false,
              },
              {
                id: 6,
                name: "Lassi",
                description: "Thick sweetened yogurt drink.",
                price: 90,
                isSpecial: false,
              },
              {
                id: 7,
                name: "Masala Chiya",
                description: "Traditional Nepali spiced tea.",
                price: 60,
                isSpecial: true,
              },
              {
                id: 8,
                name: "Ginger Tea",
                description: "Hot tea with fresh ginger.",
                price: 50,
                isSpecial: false,
              },
              {
                id: 9,
                name: "Chhang",
                description: "Traditional Nepali fermented millet drink.",
                price: 100,
                isSpecial: true,
              },
            ],
          },
        ],
      },
    ],
  },
];
