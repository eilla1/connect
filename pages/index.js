import { useEffect } from "react";
import Link from "next/link";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import { BsChevronCompactDown } from "react-icons/bs";
import Footer from "../components/footer";

export default function Home() {
  useEffect(() => {
    console.log('Ella was here. https://ela.now.sh')
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="">
        <section>
          <div className="text-center">
            <p className="text-gray-400 text-xl font-montserrat font-semibold">
              command tech presents
            </p>
            <h1 className="text-5xl font-extrabold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#C67DFF] to-[#497CFF] text-shadow-lg dark:text-shadow-white">
              Command Connect
            </h1>
            <h3 className="text-lg md:text-xl font-openSans mt-2 md:w-4/5 mx-auto">
              A virtual mentorship program connecting female and nonbinary
              students interested in STEM with industry professionals.
            </h3>
            <Link href="#about">
              <BsChevronCompactDown
                size={50}
                color="gray"
                className="mx-auto"
              />
            </Link>
          </div>
        </section>
        <section id="about">
          <div>alsdkfjasdlf</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
