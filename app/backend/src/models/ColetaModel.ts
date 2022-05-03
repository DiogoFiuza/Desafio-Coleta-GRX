import { Schema, model as createModel, Document } from 'mongoose';
import { FormsData } from '../interfaces/IFormsData';

interface ColetaDocument extends FormsData, Document { }

const ColetaSchema = new Schema<ColetaDocument>({
  Pergunta1: String,
  Pergunta2: String,
  Pergunta3: String,
  Pergunta4: String,
  QuantidadePositiva: Number,
  QuantidadeNegativa: Number,
  QuantidadeNaoAvaliada: Number
}, { versionKey: false });

class ColetaModel {
  constructor(public model = createModel('coleta', ColetaSchema)) { }
  
  public async getDatas(): Promise<FormsData[] | void> {
    const datas = await this.model.find();
    return datas;
  }

  public async createData(coletaData: object): Promise<FormsData> {
    const data = await this.model.create(coletaData);
    return data;
  }

}

export default ColetaModel;
