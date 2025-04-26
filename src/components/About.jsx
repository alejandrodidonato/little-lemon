import restaurantImage from '../assets/about.jpg';
import restaurantImage2 from '../assets/about-2.jpg';

const About = () => {
    return (
        <>
        <section className='container mx-auto flex flex-col md:flex-row items-center justify-between py-8 px-4 md:my-8'>
                <section className="w-1/2 text-center md:text-left md:max-w-lg order-2 md:order-1">
                    <h1 className='text-2xl md:text-6xl text-[#495E57] font-bold'>Little Lemon</h1>
                    <h3 className='text-xl md:text-4xl'>Chicago</h3>
                    <p className='text-md md:text-2xl my-4 font-bold'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    
                    
                    
                </section>
                <section className='w-full md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2 relative'>
  <div className="relative w-[200px] h-[300px] md:w-[300px] md:h-[400px] mb-8 md:mb-0">
    <img 
      src={restaurantImage} 
      alt="Little Lemon Restaurant" 
      className="rounded-lg w-full h-full object-cover absolute top-0 left-10 md:left-20 z-0"
    />
    <img 
      src={restaurantImage2} 
      alt="Little Lemon Restaurant" 
      className="rounded-lg w-full h-full object-cover absolute top-10 right-20 md:right-40 z-10"
    />
  </div>
</section>
            </section>
        </>
    )
}

export default About