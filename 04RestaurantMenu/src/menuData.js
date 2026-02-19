export const menuData = {
  restaurantName: "Himalayan Bites",
  currency: "NPR",
  categories: [
    {
      id: "starters",
      title: "Starters",
      items: [
        {
          id: 1,
          name: "Chicken Momo",
          description: "Steamed dumplings filled with spiced minced chicken.",
          price: 180,
          image: "https://source.unsplash.com/400x300/?momo",
          isSpecial: true,
        },
        {
          id: 2,
          name: "Veg Spring Rolls",
          description: "Crispy rolls stuffed with fresh vegetables.",
          price: 150,
          image: "https://source.unsplash.com/400x300/?spring-rolls",
          isSpecial: false,
        },
      ],
    },
    {
      id: "main-course",
      title: "Main Course",
      items: [
        {
          id: 3,
          name: "Butter Chicken",
          description: "Creamy tomato-based curry with tender chicken pieces.",
          price: 450,
          image: "https://source.unsplash.com/400x300/?butter-chicken",
          isSpecial: true,
        },
        {
          id: 4,
          name: "Dal Bhat",
          description:
            "Traditional Nepali lentil soup served with rice and sides.",
          price: 250,
          image: "https://source.unsplash.com/400x300/?dal-bhat",
          isSpecial: false,
        },
      ],
    },
    {
      id: "desserts",
      title: "Desserts",
      items: [
        {
          id: 5,
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center.",
          price: 220,
          image: "https://source.unsplash.com/400x300/?lava-cake",
          isSpecial: false,
        },
        {
          id: 6,
          name: "Gulab Jamun",
          description: "Soft milk-solid dumplings soaked in sugar syrup.",
          price: 120,
          image: "https://source.unsplash.com/400x300/?gulab-jamun",
          isSpecial: true,
        },
      ],
    },
  ],
};
