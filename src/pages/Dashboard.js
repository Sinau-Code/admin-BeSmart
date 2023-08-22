import React from 'react'
import Navbar from '../components/Navbar'
import CardDashboard from "../components/CardDashboard-Input";

function Dashboard() {
  return (
    <div>
        <Navbar />
        <div className="mt-3 mx-auto">
        <CardDashboard />
      </div>
    </div>
  )
}

export default Dashboard