import { graphql } from "graphql";
import { typeDefs } from "../schemas/menuSchemas";

// Test data for the menu query
const mockData = {
  menu: {
    appetizers: [
      { name: "Iceberg Wedge Salad", description: "Crisp lettuce with dressing", price: 7.5 },
    ],
    entrees: [
      { name: "Farfalle Pasta", description: "Delicious pasta with tomato cream", price: 12.95 },
    ],
    sandwiches: {
      cold: [
        { name: "Turkey Sandwich", description: "Turkey and avocado", price: 7.95 },
      ],
      hot: [
        { name: "BBQ Pork Sandwich", description: "BBQ pork with slaw", price: 9.5 },
      ],
    },
    soupAndSaladCombos: [
      { name: "Soup & Salad", description: "Combination of soup and salad", price: 8.75 },
    ],
    fajitas: [
      { name: "Chicken Fajitas", description: "Chicken with peppers", price: 10.95 },
    ],
    tacos: [
      { name: "Fish Tacos", description: "Crispy fish with salsa", price: 9.95 },
    ],
    enchiladas: [
      { type: "Beef Enchilada", description: "Beef with sauce", price: 8.5 },
    ],
    quiches: [
      { name: "Veggie Quiche", description: "Vegetarian quiche", price: 8.95 },
    ],
    greenSalads: [
      { name: "Garden Salad", description: "Fresh greens with dressing", price: 6.95 },
    ],
  },
};

describe("menuSchema type definitions", () => {
  it("should successfully validate the menu query", async () => {
    const query = `
      query {
        menu {
          appetizers {
            name
            description
            price
          }
          entrees {
            name
            description
            price
          }
          sandwiches {
            cold {
              name
              description
              price
            }
            hot {
              name
              description
              price
            }
          }
          soupAndSaladCombos {
            name
            description
            price
          }
          fajitas {
            name
            description
            price
          }
          tacos {
            name
            description
            price
          }
          enchiladas {
            type
            description
            price
          }
          quiches {
            name
            description
            price
          }
          greenSalads {
            name
            description
            price
          }
        }
      }
    `;

    const rootValue = {
      menu: mockData.menu,
    };

    const response = await graphql({
      schema: typeDefs, // Use `typeDefs` as the pre-built schema
      source: query,
      rootValue,
    });

    expect(response.errors).toBeUndefined();
    expect(response.data).toBeDefined();
    expect(response.data).toEqual({ menu: mockData.menu });
  });
});
