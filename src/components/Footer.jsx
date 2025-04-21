import Logo from '../assets/Logo.svg';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <section className="container mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start">
                {/* Columna 1: Logo */}
                <figure className="w-full md:w-1/4 text-center">
                    <img src={Logo} alt="Little Lemon Logo" className="h-12 mx-auto" />
                </figure>

                {/* Columna 2: Navegación principal */}
                <nav aria-label="Primary Navigation" className="w-full md:w-1/4 text-center">
                    <h5 className="font-bold mb-4">Doormat Navigation</h5>
                    <ul className="list-none space-y-2">
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Menu</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Reservations</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Order Online</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Login</a></li>
                    </ul>
                </nav>

                {/* Columna 3: Contacto */}
                <nav aria-label="Secondary Navigation" className="w-full md:w-1/4 text-center">
                    <h5 className="font-bold mb-4">Contact</h5>
                    <ul className="list-none space-y-2">
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Address</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Phone Number</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Email</a></li>
                    </ul>
                </nav>

                {/* Columna 4: Redes sociales */}
                <nav aria-label="Social Media Links" className="w-full md:w-1/4 text-center">
                    <h5 className="font-bold mb-4">Social Media Links</h5>
                    <ul className="list-none space-y-2">
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Facebook</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Twitter</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-gray-600">Instagram</a></li>
                    </ul>
                </nav>
            </section>
        </footer>
    );
};

export default Footer;