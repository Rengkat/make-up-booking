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

  // Create the final formatted date string
  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
}
