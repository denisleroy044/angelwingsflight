'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const flightSearchSchema = z.object({
  origin: z.string().min(3, "Airport code required"),
  destination: z.string().min(3, "Airport code required"),
  tripType: z.enum(["round", "oneway"]),
  adults: z.number().min(1).max(9),
  cabinClass: z.enum(["economy", "business", "first"]),
})

type FlightSearchFormData = z.infer<typeof flightSearchSchema>

export default function FlightSearchForm() {
  const router = useRouter()
  const [departDate, setDepartDate] = useState<Date | null>(new Date())
  const [returnDate, setReturnDate] = useState<Date | null>(new Date(Date.now() + 86400000 * 7))
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FlightSearchFormData>({
    resolver: zodResolver(flightSearchSchema),
    defaultValues: {
      tripType: "round",
      adults: 1,
      cabinClass: "economy",
    },
  })

  const tripType = watch("tripType")

  const onSubmit = (data: FlightSearchFormData) => {
    const params = new URLSearchParams({
      origin: data.origin,
      destination: data.destination,
      departDate: departDate?.toISOString() || '',
      adults: data.adults.toString(),
      cabinClass: data.cabinClass,
      tripType: data.tripType,
    })
    if (returnDate && data.tripType === "round") {
      params.append("returnDate", returnDate.toISOString())
    }
    router.push(`/flights/results?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex space-x-4 mb-4">
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            value="round" 
            {...register("tripType")} 
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-gray-700">Round Trip</span>
        </label>
        <label className="flex items-center space-x-2">
          <input 
            type="radio" 
            value="oneway" 
            {...register("tripType")} 
            className="w-4 h-4 text-blue-600"
          />
          <span className="text-gray-700">One Way</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <input
            {...register("origin")}
            placeholder="From"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
          />
          {errors.origin && <p className="text-red-500 text-sm mt-1">{errors.origin.message}</p>}
        </div>
        <div>
          <input
            {...register("destination")}
            placeholder="To"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
          />
          {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>}
        </div>
        <div>
          <DatePicker
            selected={departDate}
            onChange={(date: Date | null) => setDepartDate(date)}
            placeholderText="Depart"
            className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
            minDate={new Date()}
            dateFormat="dd-MM-yyyy"
          />
        </div>
        {tripType === 'round' && (
          <div>
            <DatePicker
              selected={returnDate}
              onChange={(date: Date | null) => setReturnDate(date)}
              placeholderText="Return"
              className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
              minDate={departDate || new Date()}
              dateFormat="dd-MM-yyyy"
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <select {...register("adults", { valueAsNumber: true })} className="w-full p-3 border rounded">
            {[1,2,3,4,5,6,7,8,9].map(num => (
              <option key={num} value={num}>{num} Adults</option>
            ))}
          </select>
        </div>
        <div>
          <select {...register("cabinClass")} className="w-full p-3 border rounded">
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First</option>
          </select>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        Search Flights
      </button>
    </form>
  )
}
