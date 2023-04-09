import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import format from "date-fns/format";
import tr from "date-fns/locale/tr";
import { BsLinkedin, BsGithub } from "react-icons/bs";
function Calender() {
  //client side ve server side da calander için kullanılan diller farklıydı bu yuzden hata aldık bır takım kutuphaneler ekleyıp calender bılesenınde kulandık daha sonra tekrardan goz at
  const [value, onChange] = useState(new Date());
  const router = useRouter();
  const { t } = useTranslation();
  const locale = router.locale === "tr" ? tr : undefined;
  return (
    <div className="w-[25%] flex flex-col justify-evenly py-10 items-center">
      <div>
        <span className="text-[#17202A] font-dancing text-[50px]">
          Calendar
        </span>
      </div>
      <div className="w-[95%] flex justify-center ">
        <Calendar
          onChange={onChange}
          value={value}
          locale={locale}
          formatShortWeekday={(locale, date) =>
            format(date, "EEEEEE", { locale: locale })
          }
          formatMonthYear={(locale, date) =>
            format(date, "LLLL yyyy", { locale: locale })
          }
          calendarType="ISO 8601"
        />
      </div>
      <div>
        <div className="w-full flex justify-center gap-7">
        <button className="btn text-blue-300">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/"
          >
            <BsLinkedin />
          </a>
        </button>
        <button className="btn">
          <a
            href="https://github.com/erknmckr1?tab=overview&from=2023-04-01&to=2023-04-09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
        </button>
        </div>
        
      </div>
    </div>
  );
}

export default Calender;
