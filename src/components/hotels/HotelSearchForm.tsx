'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import DatePickerField from '@/components/ui/DatePickerField'

interface FormData {
  destination: string;
}

export default function HotelSearchForm() {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date | null>(new Date())
  const [checkOut, setCheckOut] = useState<Date | null>(new Date(Date.now() + 86400000))
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const params = new URLSearchParams({
      destination: data.destination,
      checkIn: checkIn?.toISOString() || '',
      checkOut: checkOut?.toISOString() || ''
    })
    router.push(`/hotels/results?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input {...register("destination", { required: true })} placeholder="Destination" className="w-full p-3 border rounded" />
      <DatePickerField selected={checkIn} onChange={setCheckIn} placeholderText="Check-in" minDate={new Date()} />
      <DatePickerField selected={checkOut} onChange={setCheckOut} placeholderText="Check-out" minDate={checkIn || new Date()} />
      <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Search Hotels</button>
    </form>
  )
}
