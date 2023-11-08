import { Phone, Link, MailCheck, MapPinned } from "lucide-react";

function ContactUs() {
  return (
    <div className="flex items-center justify-center flex-col gap-8 mt-3">
      <span className="font-medium text-green-500 text-2xl italic">
        Contact us
      </span>

      <div className="flex items-center justify-center flex-col gap-6 p-6 bg-green-100 rounded w-fit">
        <div className="flex items-center gap-2 m-1">
          <Phone color="#4ADE80"></Phone> <span>+456-897-321</span>
        </div>
        <div className="flex items-center gap-2 m-1">
          <Link color="#4ADE80"></Link> <span>www.greenisland.com</span>
        </div>
        <div className="flex items-center gap-2 m-1">
          <MailCheck color="#4ADE80"></MailCheck> <span>green@island.com</span>
        </div>
        <div className="flex items-center gap-2 m-1 ">
          <MapPinned color="#4ADE80"></MapPinned>
          <span>Mr John Smith. 132, My Street, Kingston, New York 12401</span>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
