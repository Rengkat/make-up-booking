import { useState } from "react";
import { servicesOptions } from "../../../../../utilities/extras";
import { useBookAppointmentMutation } from "../../../../../redux/services/AppointmentApiSlice";
import { useGetUserDetailsQuery } from "../../../../../redux/services/UserApiSlice";

interface Props {
  closeModal: () => void;
  displayDate: string;
  time: string;
}

interface Appointment {
  time: string;
  date: string;
  service: string;
  type: string;
  address?: string; // Optional address for home service
}

const BookingModal = ({ closeModal, displayDate, time }: Props) => {
  const [bookAppointment, { isLoading, error }] = useBookAppointmentMutation();
  const { data } = useGetUserDetailsQuery({});
  const addresses: any = data?.user?.addresses || [];
  const [selectedService, setSelectedService] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  const [service, setService] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedService(e.target.value);
  };

  const handleSubmit = async () => {
    const newAppointment: Appointment = {
      time,
      date: displayDate,
      service,
      type: selectedService,
    };

    if (selectedService === "home service" && selectedAddress) {
      newAppointment.address = selectedAddress; // Include address if home service is selected
    }

    try {
      const res = await bookAppointment(newAppointment).unwrap();
      setSuccessMessage(res.message);
      setSelectedService("");
      setService("");
      setSelectedAddress("");

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

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-[70%] lg:w-[40%] bg-white">
        <div className="w-full bg-dark-gold text-white flex justify-between py-3 px-5">
          <h1>REQUEST AN APPOINTMENT</h1>
          <button onClick={closeModal}>X</button>
        </div>
        <section className="p-5 text-[18px]">
          <p className="text-sm lg:text-base">
            You are about to request an appointment for Rengkat Alexander. Please review and confirm
            that you would like to request the following appointment:
          </p>
          <div className="border-2 p-2 my-5 lg:my-2 text-[17px] md:text-[20px]">
            {displayDate} at {time}
          </div>
          <div className="flex items-end gap-5 my-4">
            <label
              htmlFor="services"
              className="text-[18px] md:text-[20px] font-semibold text-dark-green">
              Services:
            </label>
            <select
              onChange={(e) => setService(e.target.value)}
              name="services"
              id="services"
              className="w-full border-[1px]">
              {servicesOptions.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end gap-5 my-4">
            <label
              htmlFor="services"
              className="text-[18px] md:text-[20px] font-semibold text-dark-green">
              Services Type:
            </label>
            <div className="flex gap-5">
              <div className="flex items-center gap-3">
                <label htmlFor="spa">Spa</label>
                <input
                  className="text-yellowish-orange"
                  type="radio"
                  name="service"
                  id="spa"
                  value="spa"
                  onChange={handleChange}
                  checked={selectedService === "spa"}
                />
              </div>
              <div className="flex items-center gap-3">
                <label htmlFor="home-service">Home Service</label>
                <input
                  className="text-yellowish-orange"
                  type="radio"
                  name="service"
                  id="home-service"
                  value="home service"
                  onChange={handleChange}
                  checked={selectedService === "home service"}
                />
              </div>
            </div>
          </div>
          {/* Render address selection only if home service is selected */}
          {selectedService === "home service" && addresses.length > 0 && (
            <div className="my-4">
              <label
                htmlFor="address"
                className="text-[18px] md:text-[20px] font-semibold text-dark-green">
                Select Address:
              </label>
              <select
                onChange={(e) => setSelectedAddress(e.target.value)}
                name="address"
                id="address"
                className="w-full border-[1px]">
                <option value="">-- Select an Address --</option>
                {addresses.map((address: any, index: number) => (
                  <option key={index} value={address.homeAddress}>
                    {address.homeAddress}
                  </option>
                ))}
              </select>
            </div>
          )}
          {successMessage && <div className="text-green-500">{successMessage}</div>}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
          <div className="flex gap-5 my-[2rem]">
            <button
              onClick={handleSubmit}
              className="py-2 text-sm lg:text-base bg-dark-green text-white px-4 shadow w-full lg:w-[70%]">
              Request Appointment
            </button>
            <button
              onClick={closeModal}
              className="py-2 text-sm lg:text-base bg-dark-gold text-white px-4 shadow w-full lg:w-[30%]">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookingModal;
