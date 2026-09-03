import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { contactSchema } from '@/lib/contactSchema';

export default function ContactForm({ showQuantity = false }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Limpa o erro do campo assim que o usuário começa a corrigi-lo.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const firstErrors = Object.fromEntries(
        Object.entries(fieldErrors).map(([key, msgs]) => [key, msgs?.[0]])
      );
      setErrors(firstErrors);
      const firstField = Object.keys(firstErrors)[0];
      if (firstField) {
        document.querySelector(`[name="${firstField}"]`)?.focus();
      }
      return;
    }

    setErrors({});
    setLoading(true);

    const data = result.data;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          institution: data.institution,
          quantity: data.quantity,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066B3] ${
      errors[field] ? 'border-red-400' : 'border-gray-300'
    }`;

  const FieldError = ({ field }) =>
    errors[field] ? <p className="mt-1 text-sm text-red-600">{errors[field]}</p> : null;

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-[#0066B3] mb-2">Mensagem enviada!</p>
        <p className="text-gray-700">Nossa equipe entrará em contato em breve.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            aria-invalid={errors.name ? 'true' : undefined}
            className={inputClass('name')}
            placeholder="Seu nome"
          />
          <FieldError field="name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            aria-invalid={errors.email ? 'true' : undefined}
            className={inputClass('email')}
            placeholder="seu@email.com"
          />
          <FieldError field="email" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={errors.phone ? 'true' : undefined}
            className={inputClass('phone')}
            placeholder="+55 (11) 00000-0000"
          />
          <FieldError field="phone" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Instituição</label>
          <input
            name="institution"
            value={form.institution}
            onChange={handleChange}
            aria-invalid={errors.institution ? 'true' : undefined}
            className={inputClass('institution')}
            placeholder="Hospital / Clínica"
          />
          <FieldError field="institution" />
        </div>
      </div>

      {showQuantity && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade estimada de pacientes/mês</label>
          <input
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            aria-invalid={errors.quantity ? 'true' : undefined}
            className={inputClass('quantity')}
            placeholder="Ex: 50"
          />
          <FieldError field="quantity" />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          aria-invalid={errors.message ? 'true' : undefined}
          className={`${inputClass('message')} resize-none`}
          placeholder="Como podemos ajudar sua instituição?"
        />
        <FieldError field="message" />
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-[#0066B3] hover:bg-[#004080] text-white">
        <Send className="w-4 h-4 mr-2" />
        {loading ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
}
