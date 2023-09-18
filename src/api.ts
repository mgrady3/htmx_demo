import { Router, Request, Response } from 'express';

const api_routes: Router = Router();

api_routes.post('/clickme', (req: Request, res: Response) => {
  return res.send(`<h2>This HTML was returned from Backend</h2>`)
});


export default api_routes;