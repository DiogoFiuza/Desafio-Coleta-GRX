import { z } from 'zod';
import { SchemaForms } from './IFormsResponse';


export const FormsDataSchema = SchemaForms.extend({
  QuantidadePositiva: z.number(),
  QuantidadeNegativa: z.number(),
  QuantidadeNaoAvaliada: z.number()
});

export type FormsData = z.infer<typeof FormsDataSchema>
