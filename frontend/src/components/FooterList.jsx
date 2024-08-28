import React from 'react'

function FooterList({header,list}) {
  return (
    <div className=''>
        <h1 className='font-bold mb-2 text-lg '>{header?header:"header"}</h1>
        <div className='flex flex-col'>
        {list?.length > 0 && (
        <ul className='text-sm font-light'>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
        </div>
                        
    </div>
  )
}

export default FooterList