'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import DatePickerField from '@/components/ui/DatePickerField'

interface FormData {
  pickupLocation: string;
}

export default function CarSearchForm() {
  const router = useRouter()
  const [pickupDate, setPickupDate] = useState<Date | null>(new Date())
  const [returnDate, setReturnDate] = useState<Date | null>(new Date(Date.now() + 86400000))
  const { register, handleSubmit } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const params = new URLSearchParams({
      location: data.pickupLocation,
      pickupDate: pickupDate?.toISOString() || '',
      returnDate: returnDate?.toISOString() || ''
    })
    router.push(`/cars/results?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <input
        {...register("pickupLocation", { required: true })}
        placeholder="Pickup Location"
        className="w-full p-3 border rounded"
      />
      <DatePickerField
        selected={pickupDate}
        onChange={setPickupDate}
        placeholderText="Pickup Date"
        minDate={new Date()}
      />
      <DatePickerField
        selected={returnDate}
        onChange={setReturnDate}
        placeholderText="Return Date"
        minDate={pickupDate || new Date()}
      />
      <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Search Cars
      </button>
    </form>
  )
}
