export const dynamic = "force-dynamic"
import React from 'react'
import Documents from "@/components/Documents"

const Dashboard = () => {
    return (
        <div className="h-fu;; max-w-2xl mx-auto">
            <h1 className='text-3xl p-5 bg-gray-100  font-extralight text-yellow-500'>My Documents</h1>

            {/* DOCUMENTS */}
            <Documents />
        </div>
    )
}

export default Dashboard