import { Roboto, Montserrat_Alternates, Bubblegum_Sans, Dancing_Script } from "next/font/google";

export const roboto = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "greek-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const montserrat = Montserrat_Alternates({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
  variable: "--montserrat",
  weight: ["100", "300", "400", "500", "700", "900"],
});
export const bubblegum = Bubblegum_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--bubblegum",
  weight: "400",
});
export const dancingScript = Dancing_Script({
  subsets: ["latin", "latin-ext", "vietnamese"],
  variable: "--dancing",
  weight: ["400", "500", "700"],
});

export function convertDateFormat(inputDate: Date | string) {
  // Convert input string to Date object
  const date = new Date(inputDate);

  // Define months array
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, month, and year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Get hours and minutes
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format time as '12:00 am'
  const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes} ${
    hours < 12 ? "am" : "pm"
  }`;

  // Create the final formatted date string
  const formattedDate = `${day} ${month} ${year} by ${formattedTime}`;

  return formattedDate;
}
export function convertDate(inputDate: Date | string) {
  // Convert input string to Date object
  const date = new Date(inputDate);

  // Define months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July.",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get day, month, and year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Create the final formatted date string
  const formattedDate = `${day} ${month}, ${year}`;

  return formattedDate;
}
export const services = [
  {
    service: "Fullbeauty Customers",
    id: 1,
    price: "N7,000",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    service: "Nutritionist",
    id: 2,
    price: "N9,000",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    service: "Sauna Relax",
    id: 3,
    price: "N8,000",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    service: "Hot stone massage",
    id: 4,
    price: "N10,000",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    service: "Body Mud Masks",
    id: 5,
    price: "N11,000",
  },
  {
    service: "Oxygen Facials",
    id: 6,
    price: "N13,000",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    service: "LED Facials",
    id: 7,
    price: "N15,000",
    sub: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
export const makeups = [
  { service: "facials and hand manicure only", price: "N12,000", id: 1 },
  { service: "facials and toe manicure only", price: "N10,000", id: 2 },
  { service: "facials, hand and toe manicure", price: "N9,000", id: 3 },
  { service: "only facials", price: "N7,000", id: 4 },
];
export const executiveMassage = [
  {
    serviceType: "Comfort Spa",
    price: "N18,000",
    id: 1,
    services: ["hand manicure", "toe manicure", "facials"],
  },
  {
    serviceType: "Home Service",
    price: "N20,000",
    id: 2,
    services: ["hand manicure", "toe manicure", "facials", "VIP treats"],
  },
  {
    serviceType: "Ceremonials",
    price: "Negotiable",
    id: 3,
    services: ["hand manicure", "toe manicure", "facials", "multiple persons"],
  },
];
export const therapies = [
  {
    serviceType: "comfortable Spa",
    price: "NGN30K",
    id: 1,
    services: ["Day Spa", "Oil Therapy", "Manicure & Pedicure", "Rejuvenating Sauna"],
  },
  {
    serviceType: "Premium Spa",
    price: "NGN45K",
    id: 2,
    services: [
      "Day Spa",
      "Oil Therapy",
      "Manicure & Pedicure",
      "Rejuvenating Sauna",
      "Relaxing Facials",
    ],
  },
  {
    serviceType: "Luxury Spa",
    price: "NGN60K",
    id: 3,
    services: [
      "Day Spa",
      "Oil Therapy",
      "Manicure & Pedicure",
      "Rejuvenating Sauna",
      "Back & Foot Massage",
      "Signature Body Scrub",
    ],
  },
];
