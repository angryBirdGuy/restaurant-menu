import { Menu } from "../types/menuType";

export const resolvers = {
  Query: {
    menu: (): Menu => ({
      appetizers: [
        {
          name: "Iceberg Wedge Salad with House Cured Bacon",
          description: "tomato salsa gorgonzola",
          price: 7.5,
        },
        {
          name: "Sautéed Shredded Brussels Sprouts",
          description: "bacon hazelnuts gorgonzola",
          price: 6.95,
        },
        {
          name: "Kale Salad",
          description: "parmesan crisp corn radish garlic-lemon vinaigrette",
          price: 7.5,
        },
        {
          name: "Pecan Crusted Utah Goat Cheese with Basil-Mint Pesto",
          description: "grilled tomato salsa crostini",
          price: 6.95,
        },
        {
          name: "Chicken and Cabbage Eggrolls",
          description: "hot & sour dipping sauce",
          price: 6.95,
        },
      ],
      entrees: [
        {
          name: "Farfalle Pasta with Braised Pork in Tomato Cream",
          description: "capers butternut squash kale",
          price: 12.95,
        },
        {
          name: "Stout Braised Bratwurst",
          description: "horseradish mashed potatoes roasted root veggies grilled onion",
          price: 13.95,
        },
        {
          name: "Salmon & Crispy Tofu in Yellow Curry Sauce",
          description: "vegetable sauté golden raisin chutney",
          price: 15.95,
        },
        {
          name: "Sesame Shrimp",
          description: "udon noodles ramen broth shiitake mushrooms bean sprouts scallions",
          price: 13.95,
        },
      ],
      sandwiches: {
        cold: [
          {
            name: "Turkey & Avocado",
            description: "with tomato",
            price: 7.95,
          },
          {
            name: "Pub Club",
            description: "turkey, bacon, lettuce, tomato",
            price: 7.95,
          },
          {
            name: "Rare Roast Beef & Swiss",
            description: "sweet-hot mustard, lettuce, red onion",
            price: 7.95,
          },
          {
            name: "Veggie",
            description: "pepper jack, avocado, sprout, tomato",
            price: 7.95,
          },
        ],
        hot: [
          {
            name: "Southwest Chicken Breast",
            description: "Grilled Onion, Poblano Pepper, Tomato, Lettuce, Jack Cheese",
            price: 9.5,
          },
          {
            name: "Portobello Fresh Mozzarella",
            description: "Caramelized Onion, Roasted Pepper, Tomato, Field Greens, Basil Aioli",
            price: 9.5,
          },
          {
            name: "Chipotle BBQ Pork Sandwich",
            description: "with Pickled Jalapeño Slaw",
            price: 9.5,
          },
          {
            name: "Bacon Burger",
            description: "Swiss, Lettuce, Tomato",
            price: 9.25,
          },
          {
            name: "Mexi Burger",
            description: "Pepper Relish, Pepper Jack, Tomato, Lettuce, Guacamole",
            price: 9.25,
          },
          {
            name: "Herb Marinated Top Sirloin",
            description: "Crimini Mushrooms, Caramelized Onion, Gorgonzola, Basil Aioli, Served Open Faced on Focaccia",
            price: 10.95,
          },
          {
            name: "Roast Beef with Ancho Au Jus",
            description: "Jack Cheese, Grilled Onions, Served on Crumb Bros. Baguette",
            price: 9.75,
          },
          {
            name: "Blackened Catfish",
            description: "Creole Peppers & Onions, Fresh Herb Aioli, Served on house made Sourdough",
            price: 9.75,
          },
        ],
      },
      soupAndSaladCombos: [
        {
          name: "French Onion or Soup of the Day",
          description: "",
          price: 4.95,
        },
        {
          name: "French Onion or Soup of the Day Combos with small green salad, fresh fruit or house pasta",
          description: "",
          price: 7.25,
        },
        {
          name: "French Onion or Soup of the Day Combos with half pasta of the day",
          description: "",
          price: 8.75,
        },
      ],
      fajitas: [
        {
          name: "Chicken",
          description: "Onions, Poblano and Bell Peppers, Guacamole, Two Salsas",
          price: 10.95,
        },
        {
          name: "Sirloin Steak",
          description: "Onions, Poblano and Bell Peppers, Carrots, Onion, Guacamole, Two Salsas",
          price: 10.95,
        },
      ],
      tacos: [
        {
          name: "Beer Battered Fish",
          description: "with Jalapeño Remoulade, Roasted Salsa, Cabbage",
          price: 9.95,
        },
        {
          name: "Carne Asada",
          description: "marinated sirloin with Guacamole, Tomatillo Salsa",
          price: 9.95,
        },
        {
          name: "Citrus Marinated Chicken",
          description: "with Guacamole, Tomatillo Salsa",
          price: 9.95,
        },
        {
          name: "Grilled Veggie",
          description: "Zucchini, Yellow Squash, Bell Peppers, Onion, Guacamole, Tomatillo Salsa",
          price: 9.95,
        },
      ],
      enchiladas: [
        { type: "uno", description: "Choice of Beef, Chicken, Cheese or Veggie", price: 8.5 },
        { type: "dos", description: "Choice of Beef, Chicken, Cheese or Veggie", price: 9.95 },
        { type: "tres", description: "Choice of Beef, Chicken, Cheese or Veggie", price: 11.5 },
        {
          type: "Chili Relleno",
          description: "Stuffed with Jack Cheese & Corn Glazed Yam, Chayote Squash Succotash, Red Chili Sauce",
          price: 9.95,
        },
        {
          type: "Pepita Crusted Salmon",
          description: "with Chipotle Glaze, chevre whipped yams, jicama slaw, tomatillo sauce",
          price: 10.95,
        },
      ],
      quiches: [
        {
          name: "Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche",
          description: "Choice of Fresh Fruit or Green Salad",
          price: 8.95,
        },
      ],
      greenSalads: [
        {
          name: "Grilled Red Trout",
          description: "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette",
          price: 10.95,
        },
      ],
    }),
  },
};