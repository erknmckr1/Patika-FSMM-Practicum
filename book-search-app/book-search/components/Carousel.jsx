import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
function Xarousel() {
  const data = useSelector((state) => state.books.data);

  return (
    <div className=" w-full my-5 p-5 bg-[#E5E7E9] container mx-auto rounded-3xl">
      <Carousel
        showArrows={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={1000}
      >
        {/* data var ise listelemeyi yap... */}
        {data &&
          data.slice(4, 8).map((item, index) => {
            return (
              <div className="w-full h-full flex justify-evenly items-center">
                <div className="w-[170px]">
                  <Image
                    width={100}
                    height={100}
                    alt={item.title}
                    src={item.imageLinks && item.imageLinks.thumbnail}
                  />
                </div>
                <div className="sm:text-[35px] text-[20px] flex flex-col justify-center italic">
                  <p className="text-[#D4AC0D]">{item.authors}</p>
                  <p>{item.title}</p>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}

export default Xarousel;
