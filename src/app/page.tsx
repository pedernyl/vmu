import Start from "@/Components/start/page";
import About from "@/Components/about/page";
import Join from "@/Components/join/page";
import Support from "@/Components/support/page";
import Contacts from "@/Components/contacts/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-0 top-0">
        <div id="home" className="w-full h-screen content">
          <Start />
        </div>

        <div id="support" className="w-full content">
          <Support />
        </div>

        <div id="contacts" className="w-full h-auto content">
          <Contacts />
        </div>

      </div>
    </>
  );
}