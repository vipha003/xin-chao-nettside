import React from "react";
import menuData from "../data/MenuData.json";

const Menu = () => {
  return (
    <div>
      <section className="relative fadeIn">
        <img
          src="../assets/images/heroImages/menypageHeroImage.png"
          alt="Title Image"
          className="w-screen max-h-[500px] object-cover opacity-40 min-h-[400px]"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-5xl text-center font-bold p-[20px]">
          Meny
        </h1>
      </section>

      <section className="loadAnimation justify-center w-14/15 min-w-[300px] max-w-[1800px] m-auto mb-44">
        <div className="p-20 max-md:px-5">
          {menuData.map((category) => (
            <div key={category.category}>
              <div
                className="w-full h-16 flex justify-start mt-10  mt-15 max-sm:flex-col"
                id={category.category.toLowerCase()}
              >
                <h1 className="text-3xl font-extrabold text-[#FBFFF4]">
                  {category.category}
                </h1>
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-auto ">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    className="scroll-target card w-full h-auto bg-[#0E202F95] rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
                  >
                    <div className="h-60">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain rounded-t-lg"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-xl font-semibold text-[#FBFFF4]">
                        {item.name}
                      </p>
                      <p className="text-sm text-[#B0BEC5] mt-2">
                        {item.description}
                      </p>
                      <div className="flex-grow"></div>
                      <p className="text-lg font-semibold h-auto text-[#ebf4f8] mt-5">
                        {item.price} NOK
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
