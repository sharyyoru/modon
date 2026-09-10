'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, CheckCircle, Send } from 'lucide-react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Button } from './ui/Button';
import { trackFormStart, trackFormSubmit, trackLinkedInConversion } from '@/lib/tracking';
import { getUTMParams } from '@/lib/utils';

const formSchema = z.object({
  full_name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(8, 'Valid phone required'),
});

type FormData = z.infer<typeof formSchema>;

export function HeroForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formStarted, setFormStarted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: '+971',
    },
  });

  const handleFormFocus = () => {
    if (!formStarted) {
      trackFormStart();
      setFormStarted(true);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const utmParams = getUTMParams();
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...data, 
          ...utmParams, 
          lead_source: 'linkedin',
          country: 'Not specified',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit');
      }

      trackFormSubmit(true);
      trackLinkedInConversion();
      setIsSuccess(true);
    } catch (err) {
      trackFormSubmit(false);
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600 text-sm">
          We'll send you the payment plan shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          Get the Payment Plan
        </h3>
        <p className="text-gray-500 text-sm">
          5% down · 75% ADIB financing
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        onFocus={handleFormFocus}
        className="space-y-4"
      >
        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div>
          <input
            {...register('full_name')}
            type="text"
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C4A35A] focus:border-transparent transition-all text-gray-900 text-base"
            placeholder="Your Name"
            autoComplete="name"
          />
          {errors.full_name && (
            <p className="text-red-500 text-xs mt-1">{errors.full_name.message}</p>
          )}
        </div>

        <div>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                defaultCountry="ae"
                inputClassName="!w-full !px-4 !py-4 !border-gray-200 !rounded-xl focus:!ring-2 focus:!ring-[#C4A35A] focus:!border-transparent !text-gray-900 !text-base"
                countrySelectorStyleProps={{
                  buttonClassName: '!px-3 !py-4 !border-gray-200 !rounded-l-xl !bg-gray-50',
                }}
                className="phone-input-wrapper"
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#C4A35A] focus:border-transparent transition-all text-gray-900 text-base"
            placeholder="Email Address"
            autoComplete="email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full py-4 text-base font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Me the Payment Plan
            </>
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">
          Your info is secure and never shared.
        </p>
      </form>
    </div>
  );
}
