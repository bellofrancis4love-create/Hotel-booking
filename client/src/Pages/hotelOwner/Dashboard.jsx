import React, { useState } from 'react'
import Title from '../../components/Title'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashboardData, setDashboardData] = useState(dashboardDummyData)

  return (
    <div>

      {/* Dashboard Title */}
      <Title
        align='left'
        font='outfit'
        title='Dashboard'
        subTitle='Welcome to your hotel management dashboard. Here you can easily manage your hotel listings, view bookings, and track your performance.' />

      {/* Dashboard Cards */}
      <div className='flex gap-4 my-8'>

        {/* Total Bookings */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>

          <img src={assets.bookin} alt='Total Bookings' className='max-sm:hidden h-10' />

          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>
              Total Bookings
            </p>

            <p className='text-neutral-400 text-base'>
              {dashboardData.totalBookings}
            </p>
          </div>

        </div>


        {/* Total Revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>

          <img
            src={assets.salary}
            alt='Total Revenue'
            className='max-sm:hidden h-10'
          />

          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>
              Total Revenue
            </p>

            <p className='text-neutral-400 text-base'>
              ${dashboardData.totalRevenue}
            </p>
          </div>

        </div>

      </div>


      {/* Recent Bookings */}
      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>
        Recent Bookings
      </h2>


      {/* Bookings Table */}
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>

        <table className='w-full'>

          {/* Table Header */}
          <thead className='bg-gray-50'>

            <tr>

              <th className='py-3 px-4 text-gray-800 font-medium'>
                User Name
              </th>

              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>
                Room Name
              </th>

              <th className='py-3 px-4 text-gray-800 font-medium text-center'>
                Total Amount
              </th>

              <th className='py-3 px-4 text-gray-800 font-medium text-center'>
                Payment Status
              </th>

              <th className='py-3 px-4 text-gray-800 font-medium text-center'>
                Status
              </th>

            </tr>

          </thead>


          {/* Table Body */}
          <tbody className='text-sm'>

            {dashboardData.recentBookings.map((item, index) => (

              <tr key={index}>

                {/* Guest Name */}
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  {item.guestName}
                </td>


                {/* Room Name */}
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                  {item.room.roomType}
                </td>


                {/* Total Amount */}
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  ${item.totalAmount}
                </td>


                {/* Payment Status */}
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  {item.paymentStatus}
                </td>


                {/* Status Button */}
                <td className='py-3 px-4 border-t border-gray-300'>

                  <div className='flex justify-center'>

                    <button
                      className={`py-1 px-3 text-xs rounded-full ${item.paymentStatus === 'Paid'
                        ? 'bg-green-200 text-green-600'
                        : 'bg-amber-200 text-yellow-600'
                        }`}
                    >
                      {item.paymentStatus === 'Paid'
                        ? 'Completed'
                        : 'Pending'}
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default Dashboard


