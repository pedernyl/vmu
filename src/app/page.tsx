import About from "@/app/about/page";
import Join from "@/app/join/page";
import Support from "@/app/support/page";
import Contacts from "@/app/contacts/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <h1>Hello word</h1>
        <p>This is a content to make our page longer</p>
        <div id="home" className="w-full h-screen bg-green-300">
          home
        </div>

        <div id="about" className="w-full h-screen bg-blue-600">
            <About />
        </div>

        <div id="join" className="w-full h-screen bg-red-800">
          <Join />
        </div>

        <div id="support" className="w-full h-screen bg-yellow-600">
          <Support />
        </div>

        <div id="contacts" className="w-full h-screen bg-cyan-500 hover:bg-cyan-600">
          <Contacts />
        </div>

      </div>
    </>
  );
}