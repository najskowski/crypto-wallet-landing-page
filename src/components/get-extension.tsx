import { FaChrome } from "react-icons/fa";

export default function GetExtension() {
  return (
    <button
      type="button"
      className="flex items-center gap-3 text-2xl text-primary border border-primary py-2 px-5 rounded-xl"
    >
      <FaChrome />
      <span className="hidden sm:block">Get extension</span>
    </button>
  );
}
