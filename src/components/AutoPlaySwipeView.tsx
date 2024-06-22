// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import workers from '../components/assets/home-slider/workers.jpg'
import welding from '../components/assets/home-slider/welding.jpg'
import kitchen from '../components/assets/home-slider/kitchen.jpg'
import glasscleaner from '../components/assets/home-slider/glasscleaner.jpg'
import farms from '../components/assets/home-slider/farms.jpg'
import carpenter from '../components/assets/home-slider/carpenter.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

export const AutoPlaySwipeView = () => {
  return (
    <>
    <Box sx={{height: '100vh', width: '100%'}}>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
            <img src={workers} alt="Toilers" style={{objectFit: 'contain'}} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={welding} alt="Toilers" style={{objectFit: 'fill'}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={kitchen} alt="Toilers" style={{objectFit: 'cover'}}/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={glasscleaner} alt="Toilers" style={{objectFit: 'scale-down'}} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={farms} alt="Toilers" style={{objectFit: 'none'}} />
        </SwiperSlide>
        <SwiperSlide>
            <img src={carpenter} alt="Toilers" />
        </SwiperSlide>
      </Swiper>
      <Box>
        kjwhdbjb
      </Box>
      </Box>
    </>
  );
}
