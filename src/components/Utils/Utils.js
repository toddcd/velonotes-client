import React from 'react'
import { format as formatDate } from 'date-fns'
import './Utils.css'

export function NiceDate({ date, format='Do MMMM YYYY' }) {
  return formatDate(date, format)
}

export function Hyph() {
  return <span className='Hyph'>{' - '}</span>
}

export function Button({ className, ...props }) {
  return <button className={['Button', className].join(' ')} {...props} />
}

export function Textarea({ className, ...props }) {
  return (
    <textarea className={['Textarea', className].join(' ')} {...props} />
  )
}
export function Required({ className, ...props }) {
  return (
    <span className={['Required', className].join(' ')} {...props}>
      &#42;
    </span>
  )
}
