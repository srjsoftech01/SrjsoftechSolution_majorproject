import React from 'react'

const ContactUs = () => {
  return (
    <div className='flex  md:flex '>
        
        <div>
            {/* form  */}
               <section className="bg-gradient-to-br from-[#E7FCFF] to-white py-12 px-4 md:px-8">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#0F0F4D] mb-6">
                        Have Question? Write a Message
                      </h2>
                      <ContactForm />
                    </div>
                    <ContactIllustration />
                  </div>
                </section>
        </div>
        <div>
            {/* address */}
            <h3>CALL US</h3>
            <span>(+91) 9266872499</span>
            <span>(+91) 9266594199</span>

            <h3>LOCATION</h3>
             <p>Infosys limited -noida campus urbtech trade center TOWER C 1101</p>

             <h3>BUSINESS HOURS</h3>
             <p>Mon - Sat ...10am - 7:30pm , Sun .....Closed</p>
        </div>
    </div>
  )
}

export default ContactUs
