import heroImage from '../assets/hero-image.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-24 md:py-12 px-4'>
                <section className="w-1/2 text-center md:text-left md:max-w-lg order-2 md:order-1">
                    <h1 className='text-3xl md:text-8xl mb-2 text-[#495E57] font-bold'>Little Lemon</h1>
                    <h3 className='text-xl md:text-4xl'>Chicago</h3>
                    <p className='text-md md:text-2xl my-4'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    
                    <button className='bg-[#495E57] text-[#F4CE14] rounded-sm px-4 py-2 text-md md:text-2xl mt-8'><Link to="/booking">Reserve a Table</Link></button>
                    
                </section>
                <section className='w-full md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2'>
                    <img src={heroImage} alt="Little Lemon Restaurant" className="hero-image rounded-lg " />
                </section>
            </section>
        </>
    )
}

export default Hero