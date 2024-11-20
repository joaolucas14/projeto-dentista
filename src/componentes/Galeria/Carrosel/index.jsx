import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carrosel.module.scss";
import foto1 from "./foto1.png";
import foto2 from "./foto2.png";
import foto3 from "./foto3.png";
import foto4 from "./foto4.png";
import foto5 from "./foto5.png";
import foto6 from "./foto6.png";
import foto7 from "./foto7.png";
import foto8 from "./foto8.png";
import foto9 from "./foto9.png";
import foto10 from "./foto10.png";

const Carrosel = () => {
  const images = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
  ];
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView="4" // As imagens serão fluídas
        spaceBetween={0} // Remove qualquer espaçamento entre slides
        loop={true} // Ativa o loop contínuo
        speed={10000} // Velocidade para um efeito suave
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.fotos}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrosel;
