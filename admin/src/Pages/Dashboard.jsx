import React from 'react'
import {Chart as ChartJS , CategoryScale , PointElement ,LineElement ,BarElement ,Title ,Tooltip ,Legend , ArcElement, LinearScale,Filler} from 'chart.js';
import {Line ,Bar , Pie } from 'react-chartjs-2';


// ChartJS Register
ChartJS.register(
    CategoryScale, LinearScale , PointElement ,LineElement , BarElement ,ArcElement ,Title , Tooltip ,Legend,Filler
);



const Dashboard = () => {

    // 1. Sales Grpah Last 7 days 
    const salesData = {
        labels : ["Mon" , "Tue" , "Wed" , "Thu" ,"Fri" ,"Sat" ,"Sun"],
        datasets :[
            {
                label:"Sales (₹)",
                data: [1200, 1900, 3000, 3000, 2000, 3500, 4000],
                fill: true,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                tension: 0.4,        
                    }
                ]        
    };

     // 2. Orders Status (Pie Chart)
  const ordersData = {
    labels: ["Delivered", "Pending", "Cancelled"],
    datasets: [
      {
        data: [120, 40, 15],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
        hoverOffset: 8,
      },
    ],
  };

  // 3. Top Selling Products (Bar Chart)
  const productsData = {
    labels: ["Haldi", "Mirch", "Jeera", "Garam Masala"],
    datasets: [
      {
        label: "Units Sold",
        data: [300, 450, 200, 380],
        backgroundColor: [
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderRadius: 8,
      },
    ],
  };

  // 4. Users Growth (Line Chart)
  const usersData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "New Users",
        data: [50, 120, 180, 250],
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // 5. Recent Orders Table (dummy)
  const recentOrders = [
    { id: 1, product: "Haldi", customer: "Ravi", status: "Delivered" },
    { id: 2, product: "Jeera", customer: "Aman", status: "Pending" },
    { id: 3, product: "Mirch", customer: "Priya", status: "Cancelled" },
    { id: 4, product: "Garam Masala", customer: "Sita", status: "Delivered" },
  ];


  return (
    <>

    <div className='max-w-[1400px] w-full px-6'>

      <div className='text-xl md:text-2xl font-semibold'><h1>Dashboard</h1></div>
        {/* 1 Total Amount  , Total Orders , Total Products , Total Users */}
        <div className='flex-wrap justify-center  flex gap-4'>

            {/* Total Amount */}
            <div className='bg-violet-500 text-white md:max-w-[200px] w-full px-4 md:py-6 py-2 w rounded-md '>
                <div className='text-[18px] whitespace-nowrap '>Toatal Sales Amount</div>
                <div className='font-bold'>₹ 1 ,40, 251 </div>
            </div>

            {/* Total Orders */}
            <div className='bg-yellow-400 text-white px-6 md:max-w-[200px] w-full md:py-6 py-2  rounded-md '>
                <div className='text-[18px] whitespace-nowrap '>Toatal Orders</div>
                <div className='font-bold'>36</div>
            </div>

            {/* Total Products */}
            <div className='bg-green-500 text-white px-6 md:max-w-[200px] w-full md:py-6 py-2  rounded-md '>
                <div className='text-[18px] whitespace-nowrap '>Toatal Products</div>
                <div className='font-bold'>12</div>
            </div>

            {/* Total Users */}
            <div className='bg-pink-500 text-white px-6 md:max-w-[200px] w-full md:py-6 py-2  rounded-md '>
                <div className='text-[18px] whitespace-nowrap'>Total Users </div>
                <div className='font-bold'>21</div>
            </div>

        </div>

        <div className='mt-15 font-semibold text-xl md:text-2xl'><h1 className=''>SBM Data :-</h1></div>

        {/* All Charts And Graphs Work */}

        <div className='grid grid-cols-1 md:grid-cols-[1fr_430px] gap-8 mt-15 max-w-[1800px] w-full mx-auto'>

            {/* Sales Graph */}
            <div className='bg-white shadow-2xl p-1 md:p-4 max-w-[800px] w-full mx-auto '> 
                <h2 className='flex justify-center mb-3'>Sales Trend (Last 7 days)</h2>
                <Line  data={salesData}/>
            </div>


            {/* Order Order Status */}
            <div className='bg-white shadow-2xl md:max-w-[350px] w-full mx-auto px-2 '>
                <h2 className='flex justify-center mb-3 md:mb-20 pt-6'>Order Status</h2>
                <Line className='' data={ordersData}/>
            </div>

            {/*Top Product  */}
            <div className='bg-white shadow-2xl max-w-[800px] w-full mx-auto px-4'>
                <h2 className='flex justify-center mb-3 md:mb-10 pt-6'>Top Selling Product</h2>
                <Bar data={productsData}/>
            </div>

            {/* User Growrth */}
            <div className='bg-white shadow-2xl max-w-[350px] w-full mx-auto px-2'>
                <h2 className='flex justify-center mb-3 md:mb-20 pt-6'>User Growth</h2>
                <Line data={usersData}/>
            </div>


        </div>

        {/* Recent Orders */}
        <div className='my-15 '>
          <h1 className='text-xl md:text-2xl font-semibold '>Recent Orders</h1>
          <table className='mt-6 w-full border-collapse h-350px'>

            <thead className='w-full'>
              <tr className='text-center'>
                <th>ID</th>
                <th>product</th>
                <th>Customer</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className='w-full '>
              {recentOrders.map((order, index)=>(
                <tr key={index} className='text-center '>
                  <td className='py-3'>{order.id}</td>
                  <td className=' '>{order.product}</td>
                  <td className=' '>{order.customer}</td>
                  <td className={`${order.status==="Delivered" ? "bg-green-600 text-white" :"bg-amber-500"} w-fit rounded px-1`}>{order.status}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

    </div>

    </>
  )
}

export default Dashboard