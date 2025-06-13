import { useState } from "react"
import ReCAPTCHA from "react-google-recaptcha";

const InputForm = () =>{ 

    const [form , setForm] = useState({
        name:"",
        contact:"",
        email:"",
        service:"",
        message:"",
        agreed:false,
    });
    
    const [captcha, setCapture] = useState(null);

    const handleChange = (e) =>{
      const {name,value,type,checked} = e.target;
      setForm({...form, [name]: type === "checkbox" ? checked: value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!captcha){
            alert("Please verify reCAPTCHA");
            return;
        }
        console.log("Form Data:", form);
    }


    return(
        <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6 ">
            <form action="handleSubmit"
             className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl space-y-4">

                <h2 className="text-xl font-bold text-gray-700">Have a Question? Send Us a Message</h2>

                <input type="text" name="name" placeholder="Your Name*" requied className="w-full p-2 border rounded"
                onChange={handleChange} 
                />

                <input type="tel" name="contact" placeholder="Your Contact Number*" required className="w-full p-2 border rounded"
                onChange={handleChange}
                />

                <input  type="email" name="email" placeholder="Email Address" 
                className="w-full p-2  border rounded" 
                onChange={handleChange}
                />

                <select 
                    name="service" required className="w-full p-2 border rounded "
                    onChange={handleChange} >
                    <option>Select Service</option>
                    <option value="web">Web Development</option>
                    <option value="seo">SEO</option>
                     <option value="design">UI/UX Design</option>
                </select>

                <textarea name="message" placeholder="Your Message" 
                rows="4" required className="w-full p-2 border rounded"
                onChange={handleChange}></textarea>
                
                <label className="flex items-center text-sm">
                    <input type="checkbox"
                    name="agreed" className="mr-2" required onChange={handleChange} />
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 underline ml-1">
                        Terms & Conditions
                    </a>
                </label>

                <ReCAPTCHA
                   sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                   onChange={(value) => setCapture(value)}
                ></ReCAPTCHA>

                <button
                   type="submit"
                   className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                 >
                   Submit
                 </button>

            </form>

        </div>
    )
}

export default InputForm;