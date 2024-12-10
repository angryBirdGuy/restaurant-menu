import { resolvers } from '../resolvers/menuResolvers';

describe('Menu Resolvers', () => {
  test('Menu should return appetizers', () => {
    const menu = resolvers.Query.menu();

    expect(menu).toBeDefined();
    expect(menu.appetizers).toBeDefined();
    expect(menu.appetizers.length).toBeGreaterThan(0);
    expect(menu.appetizers[0].name).toBe("Iceberg Wedge Salad with House Cured Bacon");
    expect(menu.appetizers[0].description).toBe("tomato salsa gorgonzola");
    expect(menu.appetizers[0].price).toBe(7.5);
  });

  test('Menu should return entrees', () => {
    const menu = resolvers.Query.menu();

    expect(menu.entrees).toBeDefined();
    expect(menu.entrees.length).toBeGreaterThan(0);
    expect(menu.entrees[0].name).toBe("Farfalle Pasta with Braised Pork in Tomato Cream");
    expect(menu.entrees[0].description).toBe("capers butternut squash kale");
    expect(menu.entrees[0].price).toBe(12.95);
  });

  test('Menu sandwiches should have cold and hot options', () => {
    const menu = resolvers.Query.menu();

    expect(menu.sandwiches).toBeDefined();
    expect(menu.sandwiches.cold).toBeDefined();
    expect(menu.sandwiches.cold.length).toBeGreaterThan(0);
    expect(menu.sandwiches.hot).toBeDefined();
    expect(menu.sandwiches.hot.length).toBeGreaterThan(0);

    expect(menu.sandwiches.cold[0].name).toBe("Turkey & Avocado");
    expect(menu.sandwiches.hot[0].name).toBe("Southwest Chicken Breast");
  });

  test('Menu should return tacos', () => {
    const menu = resolvers.Query.menu();

    expect(menu.tacos).toBeDefined();
    expect(menu.tacos.length).toBeGreaterThan(0);
    expect(menu.tacos[0].name).toBe("Beer Battered Fish");
    expect(menu.tacos[0].description).toBe("with Jalapeño Remoulade, Roasted Salsa, Cabbage");
    expect(menu.tacos[0].price).toBe(9.95);
  });

  test('Menu should return enchiladas', () => {
    const menu = resolvers.Query.menu();

    expect(menu.enchiladas).toBeDefined();
    expect(menu.enchiladas.length).toBeGreaterThan(0);
    expect(menu.enchiladas[0].type).toBe("uno");
    expect(menu.enchiladas[0].description).toBe("Choice of Beef, Chicken, Cheese or Veggie");
    expect(menu.enchiladas[0].price).toBe(8.5);
  });

  test('Menu should return quiche', () => {
    const menu = resolvers.Query.menu();

    expect(menu.quiches).toBeDefined();
    expect(menu.quiches.length).toBeGreaterThan(0);
    expect(menu.quiches[0].name).toBe("Bacon, Swiss, Mushroom, Zucchini and Mushroom Quiche");
    expect(menu.quiches[0].description).toBe("Choice of Fresh Fruit or Green Salad");
    expect(menu.quiches[0].price).toBe(8.95);
  });

  test('Menu should return green salads', () => {
    const menu = resolvers.Query.menu();

    expect(menu.greenSalads).toBeDefined();
    expect(menu.greenSalads.length).toBeGreaterThan(0);
    expect(menu.greenSalads[0].name).toBe("Grilled Red Trout");
    expect(menu.greenSalads[0].description).toBe(
      "Lentils, Tomatoes, Cukes, Green Beans, Red Bells, Almonds, Sundried Tomato Vinaigrette"
    );
    expect(menu.greenSalads[0].price).toBe(10.95);
  });
});