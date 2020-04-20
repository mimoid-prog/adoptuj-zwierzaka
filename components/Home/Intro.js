import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="container">
        <h2 className="secondary-title">Najnowsze ogłoszenia</h2>
        <div className="ads">
          {ads.map((ad, i) => (
            <div className="ad" key={i}>
              <div className="image">
                <img src={ad.photo} alt="zwierzę" />
              </div>
              <div className="content">
                <div>
                  <p className="title">{ad.title}</p>
                  <p className="place">
                    {ad.voivo}, {ad.city}
                  </p>
                </div>
                <div>
                  <Link href="/ogloszenie">
                    <a className="see-more">Zobacz</a>
                  </Link>
                  <p className="time">{ad.time} temu</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/ogloszenie">
          <a className="a btn secondary-btn see-all-btn">Zobacz wszystkie</a>
        </Link>
      </div>

      <style jsx>
        {`
          .intro {
            padding: 30px 0 40px;
            background: #ededed;
            text-align: center;
          }

          h2 {
            text-align: center;
          }

          .ad {
            display: flex;
            margin-top: 20px;
            background: white;
          }

          .ad .image {
            width: 30%;
            height: 120px;
          }

          .ad .image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .ad .content {
            width: 70%;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: left;
          }

          .ad .content div:last-child {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .ad .title {
            font-weight: 700;
            font-size: 16px;
            line-height: 1.3;
            margin-bottom: 3px;
          }

          .ad .place {
            font-size: 14px;
          }

          .ad .see-more {
            color: var(--main-color);
            font-weight: 700;
          }

          .ad .time {
            font-size: 14px;
            text-align: right;
            color: gray;
          }

          .see-all-btn {
            margin-top: 30px;
            text-align: center;
          }

          @media (min-width: 1000px) {
            .intro {
              padding: 50px 0 80px;
            }

            .ads {
              width: 700px;
              margin: 0 auto;
            }

            .ad .image {
              height: 140px;
            }

            .ad .title {
              font-size: 18px;
              margin-bottom: 2px;
            }

            .ad .place,
            .ad .time {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

const ads = [
  {
    photo: "kot1.jpeg",
    title: "Piękny beżowy kotek",
    voivo: "Mazowieckie",
    city: "Warszawa",
    time: "2g",
  },
  {
    photo: "pies1.jpg",
    title: "Kochany piesek czeka na właściciela",
    voivo: "Pomorskie",
    city: "Gdynia",
    time: "4g",
  },
  {
    photo: "pies2.png",
    title: "Wierny białofutrzasty pies",
    voivo: "Małopolskie",
    city: "Kraków",
    time: "5g",
  },
  {
    photo: "papuga1.jpg",
    title: "Kolorowa papuga",
    voivo: "Małopolskie",
    city: "Zakopane",
    time: "6g",
  },
];

export default Intro;
