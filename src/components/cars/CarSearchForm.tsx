'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useTranslations } from 'next-intl'

interface FormData {
  pickupLocation: string;
}

export default function CarSearchForm() {
  const router = useRouter()
  const t = useTranslations("Cars")
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
        placeholder={t("pickupLocation")}
        className="w-full p-3 border rounded"
      />
      <DatePicker
        selected={pickupDate}
        onChange={(date: Date | null) => setPickupDate(date)}
        placeholderText={t("pickupDate")}
        className="w-full p-3 border rounded"
        minDate={new Date()}
        dateFormat="dd-MM-yyyy"
      />
      <DatePicker
        selected={returnDate}
        onChange={(date: Date | null) => setReturnDate(date)}
        placeholderText={t("returnDate")}
        className="w-full p-3 border rounded"
        minDate={pickupDate || new Date()}
        dateFormat="dd-MM-yyyy"
      />
      <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        {t("search")}
      </button>
    </form>
  )
}
