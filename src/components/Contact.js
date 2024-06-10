import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className=' flex justify-center p-4 text-3xl'>
        Contact Page
      </div>
      <div className='flex mt-6 p-6'>
        <input type='text' placeholder='Name' className='m-2 p-2 border  border-gray-400 rounded-md'/>
        <input type='text' placeholder='Email' className='m-2 p-2 border border-gray-400 rounded-md'/>
        <button className='m-2 p-2 bg-green-300 rounded-md hover:bg-green-400'>Submit</button>
      </div>
    </div>
  )
}

export default Contact