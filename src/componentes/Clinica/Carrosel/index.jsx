import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carrosel.module.scss";
import dentista from "./dentista.jpg";
import dentista2 from "./dentista2.jpeg";
import donos from "./donos.jpg";
import cadeira from "./cadeira.jpg";

const Carousel = () => {
  const images = [dentista, dentista2, donos, cadeira];
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
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

export default Carousel;
