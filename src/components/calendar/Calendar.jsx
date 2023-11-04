import React, { useRef, useState } from "react";
import Dateslots from "./Dateslots";
import { Swiper, SwiperSlide } from "swiper/react";
import "./calendar.css";
import { weekdays, Months } from "../../data/data";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "swiper/css";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { scheduletime } from "../../redux/slice";
const Calendar = (props) => {
  const date = new Date();
  const [show, setshow] = useState(false);
  const [active, setactive] = useState("");
  const [activedate, setactivedate] = useState("");
  const [selecteddate, setdate] = useState("");
  const [hide, sethide] = useState(false);
  const prev = useRef();
  const next = useRef();
  const dates = [];
  const Morning = ["09", "10", "11"];
  const Noon = ["01", "02", "03"];
  const Evening = ["05", "06", "07"];
  const dispatch = useDispatch();
  const startdate = new Date(date.getFullYear(), date.getMonth(), 1).getTime();
  const enddate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  for (let i = 0; i < enddate; i++) {
    if (dates[0]) {
      dates.push(dates[i - 1] + 24 * 60 * 60 * 1000);
    } else {
      dates.push(startdate);
    }
  }
  const store = useSelector((state) => state.user.date);

  const handle = (c) => {
    setshow(true);
    setactive(c);
  };

  const handledate = (c, b) => {
    setactivedate(c);
    const date = new Date(active).getDate();
    const month = Months[new Date(active).getMonth()];
    const day = weekdays[new Date(active).getDay()];
    props.actionProvider.handleschedule(
      date + " " + month + "," + day + " " + c + b
    );
    sethide(true);
  };
  return (
    <>
      {!hide && (
        <div>
          <Swiper
            className=" relative"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            navigation={{ nextEl: prev.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prev.current;
              swiper.params.navigation.nextEl = next.current;
            }}
          >
            <button className="  absolute bottom-2 left-0 z-20" ref={prev}>
              <BsFillArrowLeftCircleFill size="1.2rem" />
            </button>
            <button className="  absolute bottom-2 right-0 z-20" ref={next}>
              <BsFillArrowRightCircleFill size="1.2rem" />
            </button>
            {dates.map((c) => (
              <SwiperSlide
                className={active === c ? "blu" : "wht"}
                onClick={() => handle(c)}
              >
                <Dateslots active={active} data={c} />
              </SwiperSlide>
            ))}
          </Swiper>
          {show && (
            <div className=" mt-4">
              <div className=" flex flex-col">
                <h1 className=" text-xs font-bold text-slate-900">MORNING</h1>
                <div className=" flex justify-between mt-1">
                  {Morning.map((c) => (
                    <div
                      onClick={() => handledate(c, "AM")}
                      className={
                        activedate === c
                          ? "blu time rounded-md flex hover:cursor-pointer"
                          : "wht time rounded-md flex hover:cursor-pointer"
                      }
                    >
                      <h1
                        style={{ fontSize: "10px" }}
                        className=" text-slate-500 font-medium flex w-max px-2 py-2"
                      >
                        {c}:00 AM
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" my-4">
                <h1 className=" text-xs font-bold text-slate-900">NOON</h1>
                <div className=" flex justify-between mt-1">
                  {Noon.map((c) => (
                    <div
                      onClick={() => handledate(c, "PM")}
                      className=" time rounded-md flex hover:cursor-pointer "
                    >
                      <h1
                        style={{ fontSize: "10px" }}
                        className=" text-slate-500 font-medium flex w-max px-2 py-2"
                      >
                        {c}:00 PM
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <h1 className=" text-xs font-bold text-slate-900">EVENING</h1>
                <div className="  flex justify-between mt-1">
                  {Evening.map((c) => (
                    <div
                      onClick={() => handledate(c, "PM")}
                      className=" time rounded-md flex hover:cursor-pointer "
                    >
                      <h1
                        style={{ fontSize: "10px" }}
                        className=" text-slate-500 font-medium flex w-max px-2 py-2"
                      >
                        {c}:00 PM
                      </h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Calendar;
