import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
  const [Banner1Pos, setBanner1Pos] = useState(0);

  const [Banner2Pos, setBanner2Pos] = useState(0);

  const [Banner3Pos, setBanner3Pos] = useState(0);

  const [Banner4Pos, setBanner4Pos] = useState(0);

  const Banner1 = [
    {
      id: "1",
      img: "/banner1.jpg",
    },
    {
      id: "2",
      img: "/banner2.jpg",
    },
    {
      id: "3",
      img: "/banner3.jpg",
    },
  ];

  const Banner2 = [
    {
      id: "1",
      img: "/banner2.1.jpg",
    },
    {
      id: "2",
      img: "/banner2.2.jpg",
    },
    {
      id: "3",
      img: "/banner2.3.jpg",
    },
  ];

  const Banner3 = [
    {
      id: "1",
      img: "/banner3.1.jpg",
    },
    {
      id: "2",
      img: "/banner3.2.jpg",
    },
  ];

  const Banner4 = [
    {
      id: "1",
      img: "/banner4.1.jpg",
    },
    {
      id: "2",
      img: "/banner4.2.jpg",
    },
  ];
  useEffect(() => {
    const banner1 = document.getElementById("banner1");

    if (Banner1Pos == 0) {
      for (var i = 1; i <= Banner1.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner1.length) {
              banner1.scrollLeft = 0;
              return setBanner1Pos(1);
            }
            banner1.scrollLeft = (banner1.scrollWidth / Banner1.length) * i;
          }, i * 2000);
        })(i);
      }
    }

    if (Banner1Pos == 1) {
      for (var i = 1; i <= Banner1.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner1.length) {
              banner1.scrollLeft = 0;
              return setBanner1Pos(0);
            }

            banner1.scrollLeft = (banner1.scrollWidth / Banner1.length) * i;
          }, i * 2000);
        })(i);
      }
    }
  }, [Banner1Pos]);

  useEffect(() => {
    const banner2 = document.getElementById("banner2");
    if (Banner2Pos == 0) {
      for (var i = 1; i <= Banner2.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner2.length) {
              banner2.scrollLeft = 0;
              return setBanner2Pos(1);
            }
            banner2.scrollLeft = (banner2.scrollWidth / Banner2.length) * i;
          }, i * 2000);
        })(i);
      }
    }

    if (Banner2Pos == 1) {
      for (var i = 1; i <= Banner2.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner2.length) {
              banner2.scrollLeft = 0;
              return setBanner2Pos(0);
            }
            banner2.scrollLeft = (banner2.scrollWidth / Banner2.length) * i;
          }, i * 2000);
        })(i);
      }
    }
  }, [Banner2Pos]);

  useEffect(() => {
    const banner3 = document.getElementById("banner3");
    if (Banner3Pos == 0) {
      for (var i = 1; i <= Banner3.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner3.length) {
              banner3.scrollLeft = 0;
              return setBanner3Pos(1);
            }
            banner3.scrollLeft = (banner3.scrollWidth / Banner3.length) * i;
          }, i * 2000);
        })(i);
      }
    }

    if (Banner3Pos == 1) {
      for (var i = 1; i <= Banner3.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner3.length) {
              banner3.scrollLeft = 0;
              return setBanner3Pos(0);
            }
            banner3.scrollLeft = (banner3.scrollWidth / Banner3.length) * i;
          }, i * 2000);
        })(i);
      }
    }
  }, [Banner3Pos]);

  useEffect(() => {
    const banner4 = document.getElementById("banner4");
    if (Banner4Pos == 0) {
      for (var i = 1; i <= Banner4.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner3.length) {
              banner4.scrollLeft = 0;
              return setBanner4Pos(1);
            }
            banner4.scrollLeft = (banner4.scrollWidth / Banner4.length) * i;
          }, i * 2000);
        })(i);
      }
    }

    if (Banner4Pos == 1) {
      for (var i = 1; i <= Banner4.length; i++) {
        (function (index) {
          setTimeout(function () {
            if (i == Banner4.length) {
              banner4.scrollLeft = 0;
              return setBanner4Pos(0);
            }
            banner4.scrollLeft = (banner4.scrollWidth / Banner4.length) * i;
          }, i * 2000);
        })(i);
      }
    }
  }, [Banner4Pos]);

  return (
    <div className="flex justify-center mt-10">
      <div className="row-span-2">
        <div
          id="banner1"
          style={{ width: 571, scrollBehavior: "smooth" }}
          className="flex overflow-scroll banner"
        >
          {Banner1.map((banner) => (
            <img
              key={banner.id}
              src={banner.img}
              style={{ height: 280, width: 571 }}
            />
          ))}
        </div>
      </div>
      <div className="row-span-2 ml-10">
        <div
          id="banner2"
          style={{ width: 280, scrollBehavior: "smooth" }}
          className="flex overflow-scroll banner"
        >
          {Banner2.map((banner) => (
            <img
              key={banner.id}
              src={banner.img}
              style={{ height: 280, width: 280 }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-between ml-10">
        <div>
          <div
            id="banner3"
            style={{ width: 275, scrollBehavior: "smooth" }}
            className="flex overflow-scroll banner"
          >
            {Banner3.map((banner) => (
              <img
                src={banner.img}
                key={banner.id}
                style={{ width: 275, height: 125 }}
              />
            ))}
          </div>
        </div>
        <div>
          <div
            id="banner4"
            style={{ width: 275, scrollBehavior: "smooth" }}
            className="flex overflow-scroll banner"
          >
            {Banner4.map((banner) => (
              <img src={banner.img} style={{ width: 275, height: 125 }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
