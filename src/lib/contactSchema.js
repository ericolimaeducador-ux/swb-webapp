import { z } from 'zod';

// Schema do formulário de contato (src/components/shared/ContactForm.jsx).
// Todos os inputs são controlados e sempre string ('' quando não preenchido).
// Obrigatórios: name, email. Demais campos: opcionais, mas validados se preenchidos.
// O campo `quantity` só aparece quando showQuantity=true; quando oculto o valor
// é sempre '' e passa na validação.
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Informe seu nome (mínimo 2 caracteres).')
    .max(100, 'Nome muito longo (máximo 100 caracteres).'),

  email: z
    .string()
    .trim()
    .min(1, 'Informe seu e-mail.')
    .email('E-mail inválido.')
    .max(150, 'E-mail muito longo.'),

  phone: z
    .string()
    .trim()
    .max(20, 'Telefone muito longo.')
    .refine(
      (v) => v === '' || /^[\d\s()+-]+$/.test(v),
      'Use apenas números, espaços e os símbolos ( ) + -.'
    )
    .refine((v) => {
      if (v === '') return true;
      const digits = (v.match(/\d/g) || []).length;
      return digits >= 10 && digits <= 13;
    }, 'Telefone deve incluir DDD + número (10 a 13 dígitos).'),

  institution: z
    .string()
    .trim()
    .max(150, 'Nome da instituição muito longo (máximo 150 caracteres).'),

  quantity: z
    .string()
    .trim()
    .refine((v) => v === '' || /^\d{1,6}$/.test(v), 'Informe apenas números.')
    .refine((v) => v === '' || parseInt(v, 10) > 0, 'A quantidade deve ser maior que zero.'),

  message: z
    .string()
    .trim()
    .max(2000, 'Mensagem muito longa (máximo 2000 caracteres).'),
});
