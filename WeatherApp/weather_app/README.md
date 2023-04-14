## Getting Started

```bash
npm run dev
# or
yarn dev
```
## notes to myself

-  const date = new Date(currentWeather.dt * 1000)
   const day  =  date && date.toLocaleDateString("en-EN" , {weekday:"long"})

   // get the clock data
   const hour = date.getHours()
   const minute = date.getMinutes()
   const time = hour + ":" + (minute < 10  ? "0" + minute : minute )
   console.log(day);

Apiden cektiğimiz günlük hava durumu verilerini currentWeather state'ine atamıstık ve state'in baslangıc degerını null verdiğimiz için apiden cektiğimiz data gelmeden currentWeather state'ini kullanmıs oldum ve bu sekılde currentWeather.dt verisi undefined oldugundan hataya sebep oldu. currentWeather ın varlıgına dair bir sorgu yaparak bu hatanın onune gectım. 

-  let day;
  let time;
  if (currentWeather) {
    const date = new Date(currentWeather.dt * 1000);
    day = date && date.toLocaleDateString("en-EN", { weekday: "long" });
    const hour = date.getHours();
    const minute = date.getMinutes();
    const period = hour >= 12 ? "PM" : "AM"; // pm ve am durumunu belırledık.
    time =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (minute < 10 ? "0" + minute : minute) +
      " " +
      period;
  }
  

### Unix zaman değeri (1970-01-01 00:00:00'dan bu yana geçen saniye)
apiden gelen dt objesını date Date() fonskyonunu kullanarak toLocaleDateString() metodu ıle yerel tarih ve saat dilimine cevırdık. Javascripte tarihler ms cinsınden alındıgı ıcın 1000 ıle carptık 

### toFixed() metodu
JavaScript'te bir sayının virgülden sonra belirli bir sayıda hane gösterilmesini sağlamak için toFixed() metodu kullanılabilir. Bu yöntem, bir sayıyı bir dize olarak döndürür ve virgülden sonra belirli bir sayıda hane gösterir.

let num = 2.52;
let formattedNum = num.toFixed(1) -> 2.5 olarak gelecek

### tailwind CSS bg 
bg-[url('/bg/cloudsbg.png')]


