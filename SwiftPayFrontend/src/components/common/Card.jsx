import React from 'react'
//Ye ek reusable white box hai — title, action button, aur andar ka content props se aata hai 
// — poore app mein yahi card use hota hai taaki style consistent rahe.

export default function Card({ children, className = '', title, action }) {
  return (
    <div className={`card ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <h2 className="text-base font-semibold text-gray-900">{title}</h2>}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  )
}
