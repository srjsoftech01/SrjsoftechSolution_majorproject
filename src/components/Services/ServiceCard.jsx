import React from 'react'
import { Link } from 'react-router-dom';

const ServiceCard = ({image,title,description, path}) => {

    // const CardList = [
    //     {
    //         image:"",
    //         title:"Website Designing",
    //         description:"We are inventive and imaginative in website composition and our essential center is to add new elements that can set down to guarantee a good outcome for your internet based business. Our imaginative planning group invests the energy to get your business goals and target specialty prior to beginning the planning system.",
    //         path:"/services/website-design",
    //     },
    //      {
    //         image:"",
    //         title:"Web Development",
    //         description:"We are a main web advancement organization. We have been offering serious web answers for SMEs worldwide. Our client driven site arrangements convey anticipated business results. We foster a wide range of web-based interfaces to offer expansive usefulness and dynamic web insight to our clients.",
    //         path: "/services/web-development",

    //     },
    //      {
    //         image:"",
    //         title:"E-Commerce Development",
    //         description:"Softech Solution offers total start to finish eCommerce improvement arrangements across different industries. We cover each basic action focused on at the turn of events, upkeep, and development of a web store. We perform on creating web arrangements that are the best component with your satisfaction. ",
    //          path: "/services/ecommerce",
    //     },
    //      {
    //         image:"",
    //         title:"Digital Marketing",
    //         description:"All digital marketing services conveyed by Ambeytech are organized with an inside and out arranging and procedure advancement process. We are Digital Marketing Agency in Noida and Delhi that brings groundbreaking development for our clients. Our computerized showcasing group then, at that point, designs.",
    //         path:"/services"
    //     },
    //      {
    //         image:"",
    //         title:"App Development",
    //         description:"Softech Solution is known among the top portable application advancement organizations. We foster dependable portable applications to empower our clients to get imaginative thoughts and make their undertaking unmistakably interesting. Our application improvement group makes drawing in and adaptable portable applications.",
    //     },
    //      {
    //         image:"",
    //         title:"Graphic Designing",
    //         description:"Being a trailblazer in graphic design, Ambeytech makes superb plans that change the norm of your internet based business across different stages. Our creators truly do savvy and imaginative work to pass your business thoughts on to the crowd through amazing realistic plans.",
    //     },
    //      {
    //         image:"",
    //         title:"Logo Designing",
    //         description:"Your logo configuration is crucial for your image's personality. An organization logo is the primary thing clients will see when they're acquainted with another brand or business, so you must make a logo as a matter of first importance. An all around made logo tells your crowd what industry you're in, what the future held offer, what makes your business interesting, and gives a knowledge into your image's character.",
    //     },
    //      {
    //         image:"",
    //         title:"Custom Website Design",
    //         description:"We deliver high-quality and precision logo designs. Your site should to mirror your interesting business style and we can make it feasible for you. Let us know your business prerequisites including your altered style and we will convey the site that addresses your site. Our website designers guarantee that your site is completely improved utilizing the best SEO practices so it can undoubtedly be found. ",
    //     },
    //      {
    //         image:"",
    //         title:"WordPress Development",
    //         description:"We have gained strength in planning and creating drawing in WooCommerce layouts and topics for the eCommerce entryways according to the client. Every one of the layouts engineers are SEO-accommodating and easy to use. Independent of whether our clients need to broaden any usefulness or further develop the far reaching eCommerce store, our WooCommerce engineers have the capability of customization benefits.",
    //     },
    //      {
    //         image:"",
    //         title:"Search Engine Optimization",
    //         description:"Our SEO specialists are energetic about our SEO benefits so they figure out their own strategies to acquire achievement. It is an alternate sort of fervor when our client comes to on the primary page of Google. Our expert SEO groups contribute a few hours to test new inventive SEO strategies prior to conveying our SEO administrations in India. ",
    //     },
    //      {
    //         image:"",
    //         title:"PPC Advertising",
    //         description:"Our PPC specialists are generally energetic about dealing with new difficulties and carry productive outcomes to the clients. It gives us enormous delight when we come to the main page of web crawlers. As a top PPC Management Company, we work on a site: Google advertisements, FB promotions, YouTube advertisements, Instagram advertisements.",
    //     }, {
    //         image:"",
    //         title:"Content Writing",
    //         description:"Softech soluton offers convincing substance for your sites to arrive at the main interest group according to your business idea. Content composing administrations to compose content for powerful internet showcasing. Our group of expert scholars and editors give great site content composing administrations which are based on SEO puposes.",
    //     },
    //     {
    //       image:"",
    //       title:"Web Hosting",
    //       description:"Assuming you are searching for the best web hosting service for your site, we have definite outlines and surveys for each web facilitating supplier, featuring their separate assets and highlights that might be significant for your decision, in addition to data on evaluating and why every specific web host might be an optimal fit for you. We likewise have a point by point clarification of how we completely test each web facilitating supplier.",
    //     },
    //     {
    //       image:"",
    //       title:"Domain Registration",
    //       description:"A Domain Name Registration resembles a distinguishing proof name which is there to show the proprietorship to that name on the web. It is an extraordinary location through which your clients and companions track down all the data about your administrations. When an area enrollment is done under your name it can not be utilized by some other client. This turns into your long-lasting location and clients can approach all the data regardless of where you are found. Area names are otherwise called hostnames.",
    //     },{
    //       image:"",
    //       title:"Bulk SMS",
    //       description:"We provide you with a special advertising stage so you can focus on your likely clients through our financially savvy SMS promoting. We utilize all the accessible most recent innovation and the techniques to guarantee 100% client fulfillment. We never miss the mark concerning changing over our responsibilities right into it. We generally guarantee quality client experience. Our Bulk SMS administrations enhance our client's business.",
    //     }
    // ]
  return (
    // <section className='w-full bg-gray-100 px-4 py-10'>
    //   <div className="max-w-7xl  mx-auto">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {
    //         CardList.map((card, index)=>(
    //           <Link to={card.path} key={index}>
    //           <div className="bg-white rounded-xl  shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
    //             <img src={card.image}
    //             alt={card.title}
    //             className="w-24 h-24 object-contain mb-4"
    //             />
    //               <h2 className="text-xl font-bold text-blue-900 mb-2">
    //               {card.title}
    //             </h2>
    //             <p className="text-gray-600 mb-4 text-sm md:text-base">
    //               {card.description}
    //             </p>
    //             <button className="text-blue-900 font-semibold flex items-center gap-1 hover:underline">
    //               Learn More <span>➜</span>
    //             </button>
    //           </div>
    //           </Link>
    //         ))
    //       }
    //     </div>
    //   </div>

    // </section>

    <Link to={path}>
         <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-300">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-20 h-20 object-contain mb-4"
          />
        )}
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          {description}
        </p>
        <button className="text-blue-900 font-medium hover:underline">
          Learn More ➜
        </button>
      </div>
    </Link>
  )
}

export default ServiceCard;