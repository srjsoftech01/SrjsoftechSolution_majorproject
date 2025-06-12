import React from 'react'

const Dropdown = ({title, isOpen,setOpen ,items , width}) => {
  return (
    <div className='relative'>
        <button 
         onMouseEnter={()=> setOpen(true)}
         onMouseLeave={() => setOpen(false)}
         className='px-3 py-1 bg-[#181734]  text-white rounded font-semibold hover:bg-white hover:text-[#1701A1] tansition'
        >
            {title}+
        </button>

        {isOpen && (
            <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={`absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md p-4 ${width} grid grid-cols-2 gap-4 z-50`}
            >
                {items.map((section,index) =>(
                <div key={index}>
                    {section.title && (<h4 className="font-bold mb-2">{section.title}</h4>)}
                    <ul className="space-y-1">
                        {section.list.map((item, i)  => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
                ))}

            </div>
        )}
    </div>
  )
}

export default Dropdown