import "./styles.scss";

import { ShoesCard } from "../ShoesCard/index";

export const Content = () => {
  return (
    <>
      <div className="contentContainer">
        <div className="contentTexts">
          <p className="contentTitle">Destaques</p>
          <p className="contentDesc">
            Frete grátis e chinelo de brinde é aqui, aproveite por <span>tempo limitdo</span>
          </p>
        </div>
        <ShoesCard
          shoes={[
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368272/1_z38p4b.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368272/2_taprh2.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368272/3_ofsibf.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368273/4_zkoxxf.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368273/5_aqjuoh.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368273/6_y8pjnz.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368273/7_xkqhxg.png",
              name: "Jordan",
            },
            {
              image: "https://res.cloudinary.com/dv61ldehl/image/upload/v1680368273/8_tzvpmx.png",
              name: "Jordan",
            },
          ]}
        />
      </div>
    </>
  );
};
