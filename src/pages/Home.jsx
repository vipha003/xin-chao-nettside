import React from "react";
import { Link } from "react-router-dom";
import Specialties from "../data/Specialties.json";

const Home = () => {
  return (
    <>
      <section className="relative fadeIn">
        <img
          src="assets/images/heroImages/homepageHeroImage.webp"
          alt="Hero"
          className="w-screen max-h-[500px] object-cover opacity-40 min-h-[400px]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="assets/images/XinChaoLogoSVGWhite.svg"
            alt="Xin Chao Logo"
            className="max-w-[250px] md:max-w-[300px] lg:max-w-[350px] w-full"
          />
        </div>
      </section>

      <section className="loadAnimation relative w-full min-w-[300px] max-w-[1800px] mx-auto h-150">
        <section className="flex mx-20 max-md:mx-5 justify-center mt-24 max-sm:flex-col">
          <Link
            to={"/meny"}
            className="flex items-center justify-between bg-[#0E202F95] max-sm:mb-5 font-bold py-3 px-10 rounded-lg shadow-md hover:bg-[#26507295] text-center transition-all duration-300 mx-0"
          >
            <div className="flex items-center">
              <ion-icon className="text-xl mr-2" name="grid-outline"></ion-icon>
              <p>Se Meny</p>
            </div>
            <div className="flex items-center">
              <ion-icon
                className="text-2xl mr-2 sm:hidden"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </div>
          </Link>
          <div className="mx-5"></div>
          <Link
            to="/contact"
            className="flex items-center justify-between bg-[#0E202F95] max-sm:mb-5 font-bold py-3 px-10 rounded-lg shadow-md hover:bg-[#26507295] text-center transition-all duration-300 mx-0"
          >
            <div className="flex items-center">
              <ion-icon
                className="text-xl mr-2"
                name="location-outline"
              ></ion-icon>
              <p>Finn oss</p>
            </div>
            <div className="flex items-center">
              <ion-icon
                className="text-2xl mr-2 sm:hidden"
                name="arrow-forward-circle-outline"
              ></ion-icon>
            </div>
          </Link>
        </section>

        <section className="loadAnimation relative w-full min-w-[300px] max-w-[1800px] mx-auto h-150">
          <div className="">
            <div className="px-20 pt-24 pb-10 max-md:px-5 w-full h-16 flex items-center text-3xl font-extrabold text-[#FBFFF4]">
              <ion-icon name="ribbon" className="mr-2"></ion-icon>Våre
              spesialiteter
            </div>

            {/* Scroll container */}
            <div className="overflow-x-auto scrollbar-hidden mb-60 px-20 max-md:px-5">
              <div className="flex gap-4 snap-x snap-mandatory">
                {Specialties.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="card w-[300px] h-[300px] bg-[#0E202F95] rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col shrink-0 snap-start"
                  >
                    <div className="h-2/3">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-contain rounded-t-lg"
                      />
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-xl font-semibold text-[#FBFFF4]">
                        {item.name}
                      </p>
                    </div>
                  </Link>
                ))}
                <div className="shrink-0 w-20 max-md:w-1" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
