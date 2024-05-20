import Start from "@/app/start/page";
import About from "@/Components/about/page";
import Join from "@/app/join/page";
import Support from "@/app/support/page";
import Contacts from "@/app/contacts/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-0 top-0">
        <div id="home" className="w-full h-screen content">
          <Start />
        </div>

        <div id="about" className="w-full">
            <About />
        </div>

        <div id="join" className="w-full h-screen content">
          <Join />
        </div>

        <div id="support" className="w-full h-screen content">
          <Support />
        </div>

        <div id="contacts" className="w-full h-auto content bg-black text-white">
          <Contacts />
        </div>

      </div>
    </>
  );
}