import Layout from "@/components/Layout/Layout";

import { WeatherProvider } from "@/context/WeatherContext";

export default function Home() {
  
  return (
    
    // index.js dosyamızı parent olarak ele alalım ve context ile sarmalayalım. 
    <WeatherProvider>
      <>
        <Layout/>
      </>
    </WeatherProvider>
  );
}
