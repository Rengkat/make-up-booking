import { Datepicker } from "flowbite-react";
export default function Date() {
  // const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-04-17"));

  return (
    <>
      <Datepicker inline className="grid grid-cols-7" />;
    </>
  );
}
