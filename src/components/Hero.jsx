import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
    return (
        <>
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
                <img src={heroImage} alt="Little Lemon Restaurant" className="hero-image" />
            </section>
        </>
    )
}

export default Hero