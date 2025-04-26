import imageProfile from '../assets/profile-example.png';

const Testimonials = () => {
    return (
        <>
        <section>
            <section className='container mx-auto flex flex-col md:flex-row items-center text-center py-8 px-4'>
                    <h2 className='mx-auto text-3xl md:text-6xl mb-2 text-[#495E57] text-center'>Testimonials</h2>
            </section>
            <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4'>
  {/* Card 1 */}
<div className="bg-white w-3/4 md:w-1/4 min-h-[300px] shadow-md mb-4 md:mb-0 md:mx-2 flex flex-col justify-between my-4 md:my-0 p-4">
  
  <div className="flex justify-between items-center p-4">
    <span className="text-xl font-bold text-[#495E57]">Rating</span>
  </div>
  <div className="flex items-center p-4">
    <img src={imageProfile} alt="Delivery Icon" className="inline-block w-15 h-15 mr-4 bg-[#495E57] rounded-full" />
    <span className="font-bold text-xl">Name</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">Review text</p>
  
</div>

{/* Card 2 */}
<div className="bg-white w-3/4 md:w-1/4 min-h-[300px] shadow-md mb-4 md:mb-0 md:mx-2 flex flex-col justify-between my-4 md:my-0 p-4">
  
  <div className="flex justify-between items-center p-4">
    <span className="text-xl font-bold text-[#495E57]">Rating</span>
  </div>
  <div className="flex items-center p-4">
    <img src={imageProfile} alt="Delivery Icon" className="inline-block w-15 h-15 mr-4 bg-[#495E57] rounded-full" />
    <span className="font-bold text-xl">Name</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">Review text</p>
  
</div>

{/* Card 3 */}
<div className="bg-white w-3/4 md:w-1/4 min-h-[300px] shadow-md mb-4 md:mb-0 md:mx-2 flex flex-col justify-between my-4 md:my-0 p-4">
  
  <div className="flex justify-between items-center p-4">
    <span className="text-xl font-bold text-[#495E57]">Rating</span>
  </div>
  <div className="flex items-center p-4">
    <img src={imageProfile} alt="Delivery Icon" className="inline-block w-15 h-15 mr-4 bg-[#495E57] rounded-full" />
    <span className="font-bold text-xl">Name</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">Review text</p>
  
</div>
{/* Card 4 */}
<div className="bg-white w-3/4 md:w-1/4 min-h-[300px] shadow-md mb-4 md:mb-0 md:mx-2 flex flex-col justify-between my-4 md:my-0 p-4">
  
  <div className="flex justify-between items-center p-4">
    <span className="text-xl font-bold text-[#495E57]">Rating</span>
  </div>
  <div className="flex items-center p-4">
    <img src={imageProfile} alt="Delivery Icon" className="inline-block w-15 h-15 mr-4 bg-[#495E57] rounded-full" />
    <span className="font-bold text-xl">Name</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">Review text</p>
  
</div>
</section>
        </section>
        </>
    )
}

export default Testimonials