"use client";
import { Fragment, useState } from "react";
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa"; // Add icons
import { convertDate, servicesOptions } from "../../../../../utilities/extras";
import BookingModal from "./BookingModal";

export default function AppointmentServices() {
  const [selectedService, setSelectedService] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Delay when clicked
  const handleOpenModal = () => {
    setIsLoading(true);
    setIsModelOpen((prev) => !prev);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="lg:w-[100%] mt-[0rem] px-8 py-12 bg-gradient-to-r from-gray-50 to-gray-200 rounded-lg shadow-lg">
        <div className="my-5 text-center">
          <h1 className="font-bold text-4xl text-dark-green mb-2">Book an Appointment with Us</h1>
          <p className="text-dark-gold text-lg mb-4">Kindly select the service you need</p>
        </div>

        {/* Service Dropdown */}
        <div className="relative w-full lg:w-[70%] mx-auto">
          <select
            onChange={(e) => setSelectedService(e.target.value)}
            name="services"
            id="services"
            className="w-full py-4 px-3 bg-white text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-gold transition">
            <option value="" disabled selected>
              Select a service
            </option>
            {servicesOptions.map((service, index) => (
              <Fragment key={index}>
                <option key={index} value={service}>
                  {service}
                </option>
              </Fragment>
            ))}
          </select>
        </div>
        {selectedService && (
          <div className="text-center pt-6">
            <button
              onClick={handleOpenModal}
              className="inline-flex items-center justify-center py-3 px-6 bg-dark-gold text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-gold-600 transition transform hover:scale-105">
              <FaCalendarAlt className="mr-2" />
              Book Appointment
            </button>
          </div>
        )}
      </div>

      {/* Modal and Loading State */}
      <div>
        {isModelOpen && (
          <div className="fixed z-20 bg-[#00000094] inset-0 w-full h-screen flex items-center justify-center">
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-10 w-10 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                </svg>
              </div>
            ) : (
              <BookingModal closeModal={handleOpenModal} service={selectedService} />
            )}
          </div>
        )}
      </div>
    </>
  );
}
