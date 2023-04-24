import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Header from "@/components/Header/Header";
import { BiArrowBack } from "react-icons/bi";
import Footer from "@/components/Footer/Footer";
function index() {
  const router = useRouter();
  const data = useSelector((state) => state.books.data);
  // query parametresını yakaladık ve datadan tıkladıgımız elemanı
  const { id } = router.query;
  const filteredData = data.find((book) => book.id === id);

  // bir öncek sayfaya gitme ıcın
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="h-screen">
      <Header />
      <div className=" w-screen h-full flex flex-col justify-center items-center py-3">
        <h3>TİTLE</h3>
        {filteredData && (
          <div className="mt-[3.5rem] w-[90%] sm:w-2/3  border-2 flex items-center justify-center bg-white border-black rounded-3xl booksShadow overflow-hidden relative mb-[2.5rem] ">
            {filteredData.imageLinks && (
              <div className="w-1/3 h-full flex flex-col justify-center items-center border-2  ">
                <div className=" w-full  h-1/3 m-2">
                  <Image
                    width={100}
                    height={50}
                    alt="none"
                    src={filteredData.imageLinks.thumbnail}
                    className="rounded-md w-full h-full  "
                  />
                </div>
                <button className="text:[15px] sm:text-[25px] underline hover:text-blue-500">
                  <Link target="_blank" href={filteredData.previewLink}>
                    Preview Book
                  </Link>
                </button>
              </div>
            )}
            <div
              className={`w-${
                filteredData.imageLinks ? "2/3" : "full"
              } h-full border-2  overflow-x-auto p-3 `}
            >
              <p>
                <span className="title">Author:</span>{" "}
                {filteredData.authors && filteredData.authors[0]}
              </p>
              <p>
                <span className="title">Title:</span>
                {filteredData.title}
              </p>
              <p>
                <span className="title">Page Count:</span>{" "}
                {filteredData.pageCount}
              </p>
              <p>
                <span className="title">Publish Date :</span>{" "}
                {filteredData.publishedDate}{" "}
              </p>
              <p>
                <span className="title">Description:</span>{" "}
                {filteredData && filteredData.description}{" "}
              </p>
            </div>
            <div
              onClick={handleBack}
              className="cursor-pointer absolute top-2 left-0  sm:top-4 sm:right-32 hover:text-blue-700 flex items-center"
            >
              <button className="text-[25px]">
                <BiArrowBack />
              </button>
              <span className="text-[10px]">previous page</span>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default index;
