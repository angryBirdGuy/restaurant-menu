import http from "http";
import { resolvers } from './resolvers/menuResolvers';

const getMenuData = () => resolvers.Query.menu();

export const server = http.createServer((req, res) => {
  // GraphQL endpoint
  if (req.method === "GET" && req.url === "/menu") {
    try {
      const menuData = getMenuData(); // Get the menu data
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(menuData)); // Send the menu data as JSON response
    } catch (error) {
      console.error("Error fetching menu data:", error);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Failed to fetch menu data" }));
    }
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Menu data is available at http://localhost:${PORT}/menu`);
});