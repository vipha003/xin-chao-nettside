import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0E202F95] text-[#FBFFF4] py-12 px-6 mt-50">
      <div className="max-w-screen-xl w-full mx-auto grid grid-cols-1 gap-8 text-center md:text-left md:grid-cols-3 px-6 md:px-20">
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-xl mb-3">Følg oss</p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/XinChaoRestauant/?locale=nb_NO"
              target="_blank"
              className="hover:text-gray-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <ion-icon name="logo-facebook" className="text-3xl"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/xinchao.oslo/"
              target="_blank"
              className="hover:text-gray-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <ion-icon name="logo-instagram" className="text-3xl"></ion-icon>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-xl mb-3">Kontakt oss</p>
          <p>
            E-post:
            <a
              className="text-sky-400 hover:underline"
              href="mailto:elisabethoceanart@hotmail.com"
            >
              elisabethoceanart@hotmail.com
            </a>
          </p>
          <p>
            Telefon:
            <a className="text-sky-400 hover:underline" href="tel:95223111">
              952 23 111
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="font-bold text-xl mb-3">Finn oss</p>
          <p>
            <a
              className="hover:text-gray-400 transition-colors duration-200"
              href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x46416f0da6c0726b:0x59ab1abd94dda9cb?sa=X&ved=1t:8290&ictx=111"
            >
              Møllergata 42, 0179 Oslo
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-10 pt-5 text-center text-sm">
        <p>
          &copy; 2025 Xin Chao Restaurant Oslo. Alle rettigheter forbeholdes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
