import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Details from "@/components/ui/Details";
function index() {
  const router = useRouter();
  const data = useSelector((state) => state.books.data);
  const { id } = router.query;
  const filteredData = data.find((book) => book.id === id);

  console.log(id);
  console.log(filteredData);
  return (
    <div>
      <Details/>
      <div className=" w-screen h-[calc(100vh_-_88px)] flex flex-col justify-center items-center py-3">
        {filteredData && (
          <div className="w-[90%] sm:w-2/3 h-full border-2 flex items-center justify-center bg-white border-black rounded-3xl booksShadow overflow-hidden ">
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
                  Prewiev Book
                </Link>
              </button>
            </div>
            <div className="w-2/3 h-full border-2  overflow-x-auto p-3 ">
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
          </div>
        )}
      </div>
    </div>
  );
}

export default index;
