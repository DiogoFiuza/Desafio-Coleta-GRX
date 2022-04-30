import ColetaModel from '../models/ColetaModel';
import { FormsData } from '../interfaces/IFormsData';

class ColetaService {
  constructor(private coletaModel = new ColetaModel()) { }

  public async getDatas(): Promise<FormsData[] | void> {
    const datas = await this.coletaModel.getDatas();
    return datas;
  }

  public async createData(data: object): Promise<FormsData> {
    const infos = await this.coletaModel.createData(data);
    return infos;
  }
}

export default ColetaService;
