export type Dish = {
  name: string;
  price: number;
  description: string;
};

export type MenuType = {
  title: string;
  dishes: Dish[];
};

export const MenuType: MenuType[] = [
  {
    title: "MAKI",
    dishes: [
      {
        name: "SPICY TUNA MAKI",
        price: 5,
        description:
          "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
      },
      {
        name: "MANGO MAKI",
        price: 5,
        description:
          "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
      },
      {
        name: "SALMON MAKI",
        price: 5,
        description:
          "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
      },
      {
        name: "TUNA MAKI",
        price: 5,
        description:
          "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
      },
    ],
  },
  {
    title: "URAMAKI",
    dishes: [
      {
        name: "VOLCANO DELIGHT",
        price: 12,
        description:
          "Creamy crab salad, avocado, and cucumber rolled inside, topped with spicy tuna and drizzled with fiery sriracha sauce.",
      },
      {
        name: "RAINBOW FUSION",
        price: 12,
        description:
          "A colorful blend of fresh tuna, salmon, yellowtail, and avocado, enveloping a core of cucumber and crab stick.",
      },
      {
        name: "DRAGON ELEGANCE",
        price: 12,
        description:
          "Grilled eel and avocado nestled within the roll, draped with slices of ripe avocado resembling dragon scales.",
      },
      {
        name: "SUNSET SERENITY",
        price: 12,
        description:
          "Tempura shrimp, cucumber, and spicy mayo embraced by a roll of soy paper, crowned with slices of creamy mango.",
      },
      {
        name: "MYSTIC GARDEN",
        price: 12,
        description:
          "Shiitake mushrooms, asparagus, and cucumber intermingle with crispy tempura bits, blanketed by a layer of sesame seeds.",
      },
      {
        name: "OCEAN BREEZE",
        price: 12,
        description:
          "A medley of fresh shrimp, crab stick, and avocado, laced with a gentle touch of zesty yuzu-infused tobiko.",
      },
      {
        name: "TOKYO BLOSSOM",
        price: 12,
        description:
          "Delicate pink soy paper envelopes a blend of tuna, crab stick, and cucumber, embellished with edible flower petals.",
      },
    ],
  },
  {
    title: "ROLLS",
    dishes: [
      {
        name: "SUNRISE BLISS",
        price: 16,
        description:
          "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
      },
      {
        name: "MANGO TANGO",
        price: 16,
        description:
          "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
      },
      {
        name: "TRUFFLE INDULGENCE",
        price: 16,
        description:
          "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
      },
      {
        name: "PACIFIC FIRECRACKER",
        price: 16,
        description:
          "Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
      },
      {
        name: "ETERNAL EEL",
        price: 16,
        description:
          "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
      },
    ],
  },
];
