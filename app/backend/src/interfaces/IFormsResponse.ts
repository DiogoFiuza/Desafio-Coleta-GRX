import { z } from 'zod';

export const SchemaForms = z.object({
  Pergunta1: z.string(),
  Pergunta2: z.string(),
  Pergunta3: z.string(),
  Pergunta4: z.string().min(15).max(200),
});

export type FormsResponse = z.infer<typeof SchemaForms>
