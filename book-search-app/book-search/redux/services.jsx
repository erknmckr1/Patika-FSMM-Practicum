import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ queryText }) => {
    const query = queryText === "" ? "Beyoğlu'nun en güzel abisi" : queryText;

    try{
       // axios ile cektıgımız datayı response degıskenıne atayalım.
    const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return response.data.items.map((item) => {
    // her kitap ogesi ıcın asagıdakı ozellıklerı destructurıng yontemı ıle alalım. Ve ihtiyacımız olan verılerı nesne olarak return edelım.
        const {
          id,
          volumeInfo: {
            title,
            authors,
            pageCount,
            language,
            previewLink,
            infoLink,
            publishedDate,
            description,
            imageLinks
          },
        } = item;
        return {
            id,
            title,
            authors,
            pageCount,
            language,
            previewLink,
            infoLink,
            publishedDate,
            description,
            imageLinks
            
          };
    })
    }catch(error){
      console.log("Error fetching:", error)
    }
   
}
);
