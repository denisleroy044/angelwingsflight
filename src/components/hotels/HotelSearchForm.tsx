'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

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
      <input
        {...register("destination", { required: true })}
        placeholder="Destination"
        className="w-full p-3 border rounded"
      />
      <DatePicker
        selected={checkIn}
        onChange={(date: Date | null) => setCheckIn(date)}
        placeholderText="Check-in"
        className="w-full p-3 border rounded"
        minDate={new Date()}
        dateFormat="dd-MM-yyyy"
      />
      <DatePicker
        selected={checkOut}
        onChange={(date: Date | null) => setCheckOut(date)}
        placeholderText="Check-out"
        className="w-full p-3 border rounded"
        minDate={checkIn || new Date()}
        dateFormat="dd-MM-yyyy"
      />
      <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Search Hotels
      </button>
    </form>
  )
}
