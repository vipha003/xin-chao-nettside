import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="relative fadeIn">
        <img
          src="../assets/images/heroImages/contactpageHeroImage.webp"
          alt="Title Image"
          className="w-screen max-h-[500px] object-cover opacity-40 min-h-[400px]"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-center font-bold p-[20px]">
          Kontakt oss
        </h1>
      </section>
      <main className="loadAnimation">
        <section className="flex flex-row justify-center w-14/15 min-w-[300px] max-w-[1800px] m-auto max-md:flex-col mb-44">
          <div className="flex flex-col pr-10  p-20 w-1/2 max-md:w-full max-md:p-10 max-md:px-5">
            <div className=" mb-10">
              <p className="font-bold">
                E-post:{" "}
                <a
                  className="font-normal text-sky-400"
                  href="mailto:elisabethoceanart@hotmail.com"
                >
                  elisabethoceanart@hotmail.com
                </a>
              </p>
              <p className="font-bold">
                Telefon:{" "}
                <a className="font-normal text-sky-400" href="tel:952 23 111">
                  952 23 111
                </a>
              </p>
            </div>
            <div className="mb-10">
              <p className="font-bold">Adresse</p>
              <p>
                <a
                  className="hover:text-gray-400"
                  href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x46416f0da6c0726b:0x59ab1abd94dda9cb?sa=X&ved=1t:8290&ictx=111"
                >
                  Møllergata 42, 0179 Oslo
                </a>
              </p>
            </div>
            <div className="mb-10">
              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center">
                  <ion-icon
                    className="size-5 mr-2"
                    name="logo-facebook"
                  ></ion-icon>
                  <p>
                    <a
                      className="hover:text-gray-400"
                      href="https://www.facebook.com/XinChaoRestauant/?locale=nb_NO"
                    >
                      Xin Chao - Restaurant
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <ion-icon
                    className="size-5 mr-2"
                    name="logo-instagram"
                  ></ion-icon>
                  <p>
                    <a
                      className="hover:text-gray-400"
                      href="https://www.instagram.com/xinchao.oslo/"
                    >
                      xinchao.oslo
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="font-bold mb-5">Åpningstider</p>
              <div className="bg-[#0E202F95] p-5 w-100 rounded-2xl w-full">
                <div className="flex justify-between border-b-1 p-2 pt-0 border-black">
                  <p>Mandag</p>
                  <p>Stengt</p>
                </div>
                <div className="flex justify-between border-b-1 p-2 border-black">
                  <p>Tirsdag</p>
                  <p>14:00-21:00</p>
                </div>
                <div className="flex justify-between border-b-1 p-2 border-black">
                  <p>Onsdag</p>
                  <p>14:00-21:00</p>
                </div>
                <div className="flex justify-between border-b-1 p-2 border-black">
                  <p>Torsdag</p>
                  <p>14:00-21:00</p>
                </div>
                <div className="flex justify-between border-b-1 p-2 border-black">
                  <p>Fredag</p>
                  <p>14:00-21:00</p>
                </div>
                <div className="flex justify-between border-b-1 p-2 border-black">
                  <p>Lørdag</p>
                  <p>14:00-21:00</p>
                </div>
                <div className="flex justify-between p-2 pb-0">
                  <p>Søndag</p>
                  <p>14:00-21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-20 pl-10 w-1/2 max-md:w-full max-md:p-5 max-md:pt-0 self-end">
            <iframe
              alt="map"
              className="rounded-2xl w-full bg-[#0E202F95]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1999.8512802663256!2d10.7507092!3d59.9180155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416f0da6c0726b%3A0x59ab1abd94dda9cb!2zWGluIGNow6Bv!5e0!3m2!1sno!2sno!4v1738610932790!5m2!1sno!2sno"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
