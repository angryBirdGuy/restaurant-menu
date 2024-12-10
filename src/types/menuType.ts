export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface Sandwich {
  name: string;
  description: string;
  price: number;
  options?: SandwichOptions;
}

export interface SandwichOptions {
  bread: string[];
  upgrades: UpgradeOption[];
}

export interface UpgradeOption {
  name: string;
  price: number;
}

export interface Enchilada {
  type: string;
  description: string;
  price: number;
}

export interface Menu {
  appetizers: MenuItem[];
  entrees: MenuItem[];
  sandwiches: {
    cold: Sandwich[];
    hot: Sandwich[];
  };
  soupAndSaladCombos: MenuItem[];
  fajitas: MenuItem[];
  tacos: MenuItem[];
  enchiladas: Enchilada[];
  quiches: MenuItem[];
  greenSalads: MenuItem[];
}