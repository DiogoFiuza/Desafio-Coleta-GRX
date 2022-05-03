import { Request, Response } from 'express';
import ColetaService from '../services/ColetaService';

class ColetaController {
  constructor(private coletaService = new ColetaService()) { }

  format = 'Error in the format data';
  internalError = 'Internal server error';

  public getDatas = async (req: Request, res: Response): Promise<Response> => {
    try {
      const datas = await this.coletaService.getDatas();
      return res.status(200).send(datas);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.coletaService.createData(req.body);
      return res.status(201).send(data);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.format });
    }
  };
}

export default ColetaController;
