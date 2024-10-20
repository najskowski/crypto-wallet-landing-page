import { FaHandSparkles } from "react-icons/fa";
import GetExtension from "./get-extension";

export default function Header() {
  return (
    <header className="text-white flex fixed top-0 left-0 p-5 lg:px-10 items-center justify-between w-full z-50 backdrop-blur-sm">
      <div className="flex items-center gap-3 text-4xl">
        <span className="text-primary">
          <FaHandSparkles />
        </span>
        <h1>Holdr</h1>
      </div>
      <GetExtension />
    </header>
  )
}