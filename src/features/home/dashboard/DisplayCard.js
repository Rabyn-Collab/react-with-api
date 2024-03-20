import React from 'react'

const DisplayCard = () => {
  return (
    <div
      className='animation-wrapper-section grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2  justify-items-center flex-wrap bg-black text-white'>
      <div className='card border text-center m-4 flex flex-col gap-4
       w-[310px] p-5'>
        <div className="top p-1">
          <h1 className='font-extrabold text-[24px]'>Starter</h1>
          <p className='text-slate-600'>Best option for personal use & for your next project.</p>
        </div>
        <div className="mid space-x-1">
          <span className='text-[24px] font-bold'>$29</span>
          <span className='text-[13px] text-slate-400'>/month</span>
        </div>
        <div className="bottom text-start pl-5 text-[15px] text-slate-600 ">
          <p>✅Individual configuration</p>
          <p>✅No setup, or hidden fees</p>
          <p>
            <span>✅Team size: </span>
            <span className='font-bold'>1 developer</span>
          </p>
          <p>
            <span>✅Premium support: </span>
            <span className='font-bold'>6 months</span>
          </p>
          <p>
            <span>✅Free updates: </span>
            <span className='font-bold'>6 months</span>
          </p>
        </div>
        <button className='bg-blue-600 p-2 rounded-3xl'>Get started</button>
      </div>

      <div className='card border text-center m-4 flex flex-col gap-4
       w-[310px] p-5'>
        <div className="top p-1">
          <h1 className='font-extrabold text-[24px]'>Company</h1>
          <p className='text-slate-600'>Relevant for multiple users, extended & premium support.</p>
        </div>
        <div className="mid space-x-1">
          <span className='text-[24px] font-bold'>$99</span>
          <span className='text-[13px] text-slate-400'>/month</span>
        </div>
        <div className="bottom text-start pl-5 text-[15px] text-slate-600 ">
          <p>✅Individual configuration</p>
          <p>✅No setup, or hidden fees</p>
          <p>
            <span>✅Team size: </span>
            <span className='font-bold'>10 developers</span>
          </p>
          <p>
            <span>✅Premium support: </span>
            <span className='font-bold'>24 months</span>
          </p>
          <p>
            <span>✅Free updates: </span>
            <span className='font-bold'>24 months</span>
          </p>
        </div>
        <button className='bg-blue-600 p-2 rounded-3xl'>Get started</button>
      </div>
      <div className='card border text-center m-4 flex flex-col gap-4
       w-[310px] p-5'>
        <div className="top p-1">
          <h1 className='font-extrabold text-[24px]'>Company</h1>
          <p className='text-slate-600'>Relevant for multiple users, extended & premium support.</p>
        </div>
        <div className="mid space-x-1">
          <span className='text-[24px] font-bold'>$499</span>
          <span className='text-[13px] text-slate-400'>/month</span>
        </div>
        <div className="bottom text-start pl-5 text-[15px] text-slate-600 ">
          <p>✅Individual configuration</p>
          <p>✅No setup, or hidden fees</p>
          <p>
            <span>✅Team size: </span>
            <span className='font-bold'>100+ developers</span>
          </p>
          <p>
            <span>✅Premium support: </span>
            <span className='font-bold'>36 months</span>
          </p>
          <p>
            <span>✅Free updates: </span>
            <span className='font-bold'>36 months</span>
          </p>
        </div>
        <button className='bg-blue-600 p-2 rounded-3xl'>Get started</button>
      </div>
    </div>
  )
}

export default DisplayCard