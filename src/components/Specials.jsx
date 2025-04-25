import imageSpecials1 from '../assets/greek-salad.jpg';
import imageSpecials2 from '../assets/bruchetta.svg';
import imageSpecials3 from '../assets/lemon-dessert.jpg'

const Specials = () => {
    return (
        <>
        <section>
            <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4'>
                    <section className="w-1/2 text-center md:text-left md:max-w-lg">
                        <h2 className='text-3xl md:text-4xl mb-2 text-[#495E57]'>Specials</h2>
                    </section>
                    <section className='w-full md:w-1/2 flex md:justify-end justify-center my-8 md:mb-0'>
                    <button className='bg-[#495E57] text-[#F4CE14] rounded-sm px-6 py-4 text-md md:text-xl'><a href="#">Online menu</a></button>
                    </section>
            </section>
            <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4'>
                <div className="bg-white w-3/4 md:w-1/3 min-h-100 shadow-md rounded-t-2xl mb-4 md:mb-0 md:mx-2 flex-1">
                    <img src={imageSpecials1} alt="Dish 1" className="w-full h-40 object-cover mb-4 rounded-t-2xl" />
                    <h3 className="text-xl font-bold text-[#495E57] mb-2 p-4">Greek salad</h3>
                    <p className="text-gray-600 p-4">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>

                <div className="bg-white w-3/4 md:w-1/3 min-h-100 shadow-md rounded-t-2xl mb-4 md:mb-0 md:mx-2 flex-1">
                    <img src={imageSpecials2} alt="Dish 2" className="w-full h-40 object-cover mb-4 rounded-t-2xl" />
                    <h3 className="text-xl font-bold text-[#495E57] mb-2 p-4">Bruchetta</h3>
                    <p className="text-gray-600 p-4">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                </div>

                <div className="bg-white w-3/4 md:w-1/3 min-h-100 shadow-md rounded-t-2xl md:mx-2 flex-1">
                    <img src={imageSpecials3} alt="Dish 3" className="w-full h-40 object-cover mb-4 rounded-t-2xl" />
                    <h3 className="text-xl font-bold text-[#495E57] mb-2 p-4">Lemon Dessert</h3>
                    <p className="text-gray-600 p-4">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <div>
                        <span>Order a delivery <i></i></span>
                    </div>
                </div>
            </section>
        </section>
        </>
    )
}

export default Specials