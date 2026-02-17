'use client'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface DatePickerFieldProps {
  selected: Date | null
  onChange: (date: Date | null) => void
  placeholderText?: string
  minDate?: Date
  className?: string
}

export default function DatePickerField({
  selected,
  onChange,
  placeholderText,
  minDate,
  className = "w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
}: DatePickerFieldProps) {
  return (
    <DatePicker
      selected={selected}
      onChange={(date: Date | null) => onChange(date)}
      placeholderText={placeholderText}
      className={className}
      minDate={minDate}
      dateFormat="dd-MM-yyyy"
    />
  )
}
