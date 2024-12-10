import http from 'http';
import { server } from '../index';

interface Appetizer {
  name: string;
  price: number;
}

describe('API Server', () => {
  const port = 4000;

  beforeAll(() => {
    // Ensure the server is not already listening
    if (!server.listening) {
      server.listen(port, () => {
        console.log(`Menu data is available at http://localhost:${port}/menu`);
      });  // Start the server
    }
  });

  afterAll(() => {
    server.close();
  });

  it('should respond with menu data on GET /menu', (done) => {
    http.get(`http://localhost:${port}/menu`, (res) => {
      expect(res.statusCode).toBe(200);
      let data = '';
      res.on('data', (chunk: Buffer) => {
        data += chunk.toString();
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(data) as { appetizers: Appetizer[] };
          expect(parsedData.appetizers).toBeDefined();
          done();
        } catch (error) {
          done(error);
        }
      });
    });
  });

  it('should return 404 for an invalid route', (done) => {
    http.get(`http://localhost:${port}/invalid-route`, (res) => {
      expect(res.statusCode).toBe(404);
      let data = '';
      res.on('data', (chunk: Buffer) => {
        data += chunk.toString();
      });
      res.on('end', () => {
        expect(data).toBe('Not Found');
        done();
      });
    });
  });
});
