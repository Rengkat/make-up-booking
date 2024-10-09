"use client";
import { useState } from "react";
import { convertDate, servicesOptions } from "../../../../../utilities/extras";
import { useBookAppointmentMutation } from "../../../../../redux/services/AppointmentApiSlice";
import { useGetUserDetailsQuery } from "../../../../../redux/services/UserApiSlice";
import { useRouter } from "next/navigation";

interface Props {
  closeModal: () => void;
  service: string;
}

interface Appointment {
  time: string;
  date: string;
  service: string;
  type: string;
  address?: {
    homeAddress: string;
    city: string;
    state: string;
    country: string;
    town: string;
  }; // Address for home service
}

const BookingModal = ({ closeModal, service }: Props) => {
  const [bookAppointment, { isLoading, error }] = useBookAppointmentMutation();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { data } = useGetUserDetailsQuery({});
  const addresses: any = data?.user?.addresses || [];
  const router = useRouter();

  const converted = (inputDate: Date | string) => {
    const parsedDate = new Date(inputDate);
    const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;

    return formattedDate;
  };

  // Format date
  const displayDate = convertDate(new Date(date));

  const handleSubmit = async () => {
    const newAppointment: Appointment = {
      time,
      date: displayDate,
      service,
      type: selectedService,
    };

    if (selectedService === "home service") {
      const selectedAddressDetails = addresses.find(
        (address: any) => address.homeAddress === selectedAddress
      );
      if (!selectedAddressDetails) {
        setErrorMessage("Please select a valid home address.");
        return;
      }

      newAppointment.address = {
        homeAddress: selectedAddressDetails.homeAddress,
        city: selectedAddressDetails.city,
        state: selectedAddressDetails.state,
        town: selectedAddressDetails.town,
        country: selectedAddressDetails.country,
      };
    }

    try {
      const res = await bookAppointment(newAppointment).unwrap();
      setSuccessMessage(res.message);
      setTimeout(() => {
        setSuccessMessage("");
        closeModal();
      }, 5000);
    } catch (err) {
      setErrorMessage("Failed to book the appointment. Please try again.");
      setTimeout(() => {
        setErrorMessage("");
        closeModal();
      }, 5000);
    }
  };

  const handleAddAddress = () => {
    router.push("/account/addresses/add-address");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#00000094]">
      <div className="w-full md:w-[70%] lg:w-[40%] bg-white rounded-lg shadow-lg">
        <div className="w-full bg-dark-gold text-white flex justify-between py-3 px-5 rounded-t-lg">
          <h1 className="font-semibold">Request an Appointment</h1>
          <button onClick={closeModal} className="font-bold text-xl">
            X
          </button>
        </div>

        <section className="p-5 text-[18px]">
          <p className="text-sm lg:text-base mb-4">
            You are about to book <strong>{service}</strong> service. Please review your appointment
            details below before submitting:
          </p>

          {/* Date Input */}
          <div className="my-4">
            <label className="block mb-2 font-medium">Select Date:</label>
            <input
              onChange={(e) => setDate(converted(e.target.value))}
              value={date}
              type="date"
              name="date"
              id="date"
              className="w-full lg:w-[70%] py-2 px-3 border border-gray-300 rounded-md"
            />
          </div>

          {/* Time Selection */}
          {date && (
            <div className="my-4">
              {/* <h2 className="mb-2 font-medium">Available Appointment Times on {displayDate}:</h2> */}
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full lg:w-[70%] py-2 px-3 border border-gray-300 rounded-md">
                <option value="" disabled>
                  Select a time
                </option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
              </select>
            </div>
          )}

          {/* Service Type Selection */}
          <div className="my-4 flex items-center gap-5">
            <label className="block font-medium">Service Type:</label>
            <div className="flex gap-5">
              <div className="flex items-center gap-3">
                <label htmlFor="spa" className="font-medium">
                  Spa
                </label>
                <input
                  type="radio"
                  name="service"
                  id="spa"
                  value="spa"
                  onChange={(e) => setSelectedService(e.target.value)}
                  checked={selectedService === "spa"}
                  className="w-4 h-4"
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="home-service" className="font-medium">
                  Home Service
                </label>
                <input
                  type="radio"
                  name="service"
                  id="home-service"
                  value="home service"
                  onChange={(e) => setSelectedService(e.target.value)}
                  checked={selectedService === "home service"}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* Address for Home Service */}
          {selectedService === "home service" && (
            <div className="my-4">
              {addresses.length > 0 ? (
                <div>
                  <label htmlFor="address" className="block mb-2 font-medium">
                    Select Address:
                  </label>
                  <select
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    name="address"
                    id="address"
                    className="w-full py-2 px-3 border border-gray-300 rounded-md">
                    <option value="">-- Select an Address --</option>
                    {addresses.map((address: any, index: number) => (
                      <option key={index} value={address.homeAddress}>
                        {address.homeAddress}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <p className="text-red-500">You have no saved home addresses.</p>
                  <button
                    onClick={handleAddAddress}
                    className="py-2 bg-dark-green text-white px-4 rounded shadow">
                    Add Home Address
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Summary Section */}
          {date && time && selectedService && (
            <div className="my-4 py-2 px-4 bg-gray-100 rounded-md">
              <h3 className="font-bold mb-2">Appointment Summary:</h3>
              <p>
                <strong>Service:</strong> {service}
              </p>
              <p>
                <strong>Date:</strong> {displayDate}
              </p>
              <p>
                <strong>Time:</strong> {time}
              </p>
              {selectedService === "home service" && selectedAddress && (
                <p>
                  <strong>Location:</strong> {selectedAddress}
                </p>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-5 my-4">
            <button
              onClick={handleSubmit}
              className="py-2 bg-dark-green text-white px-4 rounded-md w-full lg:w-[70%]">
              {isLoading ? "Booking..." : "Book Appointment"}
            </button>
            <button
              onClick={closeModal}
              className="py-2 bg-gray-500 text-white px-4 rounded-md w-full lg:w-[70%]">
              Cancel
            </button>
          </div>

          {/* Feedback Messages */}
          {successMessage && <div className="text-center text-green-500">{successMessage}</div>}
          {errorMessage && <div className="text-center text-red-500">{errorMessage}</div>}
        </section>
      </div>
    </div>
  );
};

export default BookingModal;
