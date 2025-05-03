import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatch({ type: "UPDATE_TIMES", payload: selectedDate });
        validateForm();
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
        validateForm();
    };

    const handleOccasionChange = (e) => {
        setOccasion(e.target.value);
        validateForm();
    };

    const validateForm = () => {
        // Validación básica: todos los campos deben estar completos
        if (date && time && guests >= 1 && occasion) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        console.log("Form submitted with the following data:", formData);
        navigate("/confirmation");
    };

    return (
        <>
            <section className="py-32 md:py-12">
                <h1 className="text-6xl md:text-8xl mb-2 text-[#495E57] font-bold text-center">Reservation</h1>
                <h3 className="text-3xl md:text-4xl text-center">Book a table</h3>

                <form
                    onSubmit={handleSubmit}
                    className="grid max-w-[300px] md:max-w-[400px] mx-auto mt-8 p-4 text-center shadow-md rounded-lg min-h-[500px] border-1 border-[#F4CE14] text-white bg-[#495E57]"
                >
                    <div>
                        <label htmlFor="res-date" className="text-[#F4CE14] block font-bold pt-2 text-xl">
                            Choose date
                        </label>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            id="res-date"
                            className="text-xl py-4 w-full text-[#495E57] rounded-md bg-white text-center px-[40px] md:px-[100px]"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="res-time" className="text-[#F4CE14] block font-bold pt-2 text-xl">
                            Choose time
                        </label>
                        <select
                            id="res-time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="text-xl text-center py-4 w-full text-[#495E57] rounded-md"
                            required
                        >
                            {availableTimes.map((timeOption, index) => (
                                <option key={index} value={timeOption}>
                                    {timeOption}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests" className="text-[#F4CE14] block font-bold py-2 text-xl">
                            Number of guests
                        </label>
                        <input
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            value={guests}
                            onChange={handleGuestsChange}
                            className="text-center appearance text-xl text-[#495E57] bg-white rounded-md w-full py-4"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="occasion" className="text-[#F4CE14] block font-bold pt-2 text-xl">
                            Occasion
                        </label>
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={handleOccasionChange}
                            className="text-xl text-center py-4 w-full rounded-md text-[#495E57] mb-4"
                            required
                        >
                            <option value="">Select an occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className={`bg-[#F4CE14] text-[#495E57] font-bold text-xl p-2 ${
                            isFormValid ? "" : "opacity-50 cursor-not-allowed"
                        }`}
                        disabled={!isFormValid}
                    >
                        Make Your Reservation
                    </button>
                </form>
            </section>
        </>
    );
};

export default BookingForm;