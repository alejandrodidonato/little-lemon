import imageSpecials1 from '../assets/greek-salad.jpg';
import imageSpecials2 from '../assets/bruchetta.svg';
import imageSpecials3 from '../assets/lemon-dessert.jpg'
import DeliveryIcon from '../assets/bike.svg';

const Specials = () => {
    return (
        <>
        <section>
            <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4'>
                    <section className="w-1/2 text-center md:text-left md:max-w-lg pb-8 md:pb-0">
                        <h2 className='text-3xl md:text-6xl mb-2 text-[#495E57]'>Specials</h2>
                    </section>
                    <section className='w-full md:w-1/2 flex md:justify-end justify-center md:mb-0'>
                    <button className='bg-[#495E57] text-[#F4CE14] rounded-sm px-6 py-4 text-md md:text-2xl'><a href="#">Online menu</a></button>
                    </section>
            </section>
            <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4'>
  {/* Card 1 */}
<div className="bg-white w-3/4 md:w-1/3 min-h-[500px] shadow-md rounded-t-2xl mb-4 md:mb-0 md:mx-2 flex flex-col justify-between my-4 md:my-0">
  <img src={imageSpecials1} alt="Dish 1" className="w-full h-40 object-cover rounded-t-2xl" />
  <div className="flex justify-between items-center p-4">
    <h3 className="text-3xl font-bold text-[#495E57]">Greek salad</h3>
    <span className="text-xl font-bold text-[#F4CE14]">$12.99</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
  <div className="flex items-center p-4">
    <span className="font-bold text-xl">Order a delivery</span>
    <img src={DeliveryIcon} alt="Delivery Icon" className="inline-block w-5 h-5 ml-2" />
  </div>
</div>

{/* Card 2 */}
<div className="bg-white w-3/4 md:w-1/3 min-h-[500px] shadow-md rounded-t-2xl mb-4 md:mb-0 md:mx-2 flex flex-col justify-between my-4 md:my-0">
  <img src={imageSpecials2} alt="Dish 2" className="w-full h-40 object-cover rounded-t-2xl" />
  <div className="flex justify-between items-center p-4">
    <h3 className="text-3xl font-bold text-[#495E57]">Bruchetta</h3>
    <span className="text-xl font-bold text-[#F4CE14]">$8.50</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
  <div className="flex items-center p-4">
    <span className="font-bold text-xl">Order a delivery</span>
    <img src={DeliveryIcon} alt="Delivery Icon" className="inline-block w-5 h-5 ml-2" />
  </div>
</div>

{/* Card 3 */}
<div className="bg-white w-3/4 md:w-1/3 min-h-[500px] shadow-md rounded-t-2xl md:mx-2 flex flex-col justify-between my-4 md:my-0">
  <img src={imageSpecials3} alt="Dish 3" className="w-full h-40 object-cover rounded-t-2xl" />
  <div className="flex justify-between items-center p-4">
    <h3 className="text-3xl font-bold text-[#495E57]">Lemon Dessert</h3>
    <span className="text-xl font-bold text-[#F4CE14]">$5.99</span>
  </div>
  <p className="text-gray-600 text-xl flex-grow p-4">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
  <div className="flex items-center p-4">
    <span className="font-bold text-xl">Order a delivery</span>
    <img src={DeliveryIcon} alt="Delivery Icon" className="inline-block w-5 h-5 ml-2" />
  </div>
</div>
</section>
        </section>
        </>
    )
}

export default Specials