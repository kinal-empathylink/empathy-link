"use client"

import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      Dashboard
      <Link
        href="/console/Report"
      >
        REDIRECT REPORTS
      </Link>
    </div>
  )
}

export default Dashboard