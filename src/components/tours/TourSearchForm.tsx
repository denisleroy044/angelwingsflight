'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import DatePickerField from '@/components/ui/DatePickerField'

interface FormData {
  city: string;
  travellers: number;
}

export default function TourSearchForm() {
  const router = useRouter()
  const [tourDate, setTourDate] = useState<Date | null>(new Date())
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const params = new URLSearchParams({
      city: data.city,
      date: tourDate?.toISOString() || '',
      travellers: data.travellers.toString()
    })
    router.push(`/tours/results?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input {...register("city", { required: true })} placeholder="Destination" className="w-full p-3 border rounded" />
      <DatePickerField selected={tourDate} onChange={setTourDate} placeholderText="Tour Date" minDate={new Date()} />
      <select {...register("travellers", { valueAsNumber: true, required: true })} className="w-full p-3 border rounded">
        {[1,2,3,4,5,6,7,8].map(num => <option key={num} value={num}>{num} Traveller{num > 1 ? 's' : ''}</option>)}
      </select>
      <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Search Tours</button>
    </form>
  )
}
