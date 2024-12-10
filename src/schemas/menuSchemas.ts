import { buildSchema } from "graphql";

export const typeDefs = buildSchema(`
  type Menu {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwiches: SandwichCategory
    soupAndSaladCombos: [MenuItem]
    fajitas: [MenuItem]
    tacos: [MenuItem]
    enchiladas: [Enchilada]
    quiches: [MenuItem]
    greenSalads: [MenuItem]
  }

  type MenuItem {
    name: String
    description: String
    price: Float
  }

  type SandwichCategory {
    cold: [Sandwich]
    hot: [Sandwich]
  }

  type Sandwich {
    name: String
    description: String
    price: Float
    options: SandwichOptions
  }

  type SandwichOptions {
    bread: [String]
    upgrades: [UpgradeOption]
  }

  type UpgradeOption {
    name: String
    price: Float
  }

  type Enchilada {
    type: String
    description: String
    price: Float
  }

  type Query {
    menu: Menu
  }
`);