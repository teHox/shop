import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const BannerMobile: FC = () => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            breakpoints={{
                530: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                100: {
                    slidesPerView: 1,
                    spaceBetween: 60,
                },
            }}
            modules={[Pagination]}
            pagination={{ type: "bullets", clickable: true }}
            className="banner-mobile">
            <SwiperSlide className="banner-mobile__slide">
                <img src="img/banner__small.png" alt="" />
                <div className="banner-mobile__description">
                    <span className="text">ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"</span>
                    <p className="small">
                        Це іграшка, яка не залишить байдужими як малюків,так і їхніх
                        батьків.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="banner-mobile__slide">
                <img src="img/banner__small.png" alt="" />
                <div className="banner-mobile__description">
                    <span className="text">ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"</span>
                    <p className="small">
                        Це іграшка, яка не залишить байдужими як малюків,так і їхніх
                        батьків.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="banner-mobile__slide">
                <img src="img/banner__small.png" alt="" />
                <div className="banner-mobile__description">
                    <span className="text">ПЛЮШЕВИЙ ВЕДМІДЬ "Ігор"</span>
                    <p className="small">
                        Це іграшка, яка не залишить байдужими як малюків,так і їхніх
                        батьків.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default memo(BannerMobile);
