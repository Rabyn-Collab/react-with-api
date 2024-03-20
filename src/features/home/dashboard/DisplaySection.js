import React from 'react'

const DisplaySection = () => {
  return (
    <div className='grid grid-cols-2 items-center bg-black p-5 text-white'>
      <div className="animation">
        <dotlottie-player src="https://lottie.host/fc2f884e-31a7-4d4c-9153-64249a08ac00/BvQK7vrxg4.json"
          background="transparent" speed="1" loop autoplay></dotlottie-player>
      </div>
      <div className="dis-info">
        <h1>Hi, i am John</h1>
        <p className='italic text-pink-600'>Some Dev, Freelancer</p>
        <p className='text-slate-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae praesentium sapiente dignissimos, blanditiis accusantium fugit labore velit ipsa sit voluptate tenetur illo obcaecati assumenda culpa? Dolor ducimus id tempore a.</p>
      </div>
    </div>
  )
}

export default DisplaySection