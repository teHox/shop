import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import styles from "./styles.module.scss";
import TextElement from "../TextElement/TextElement.tsx";
import { textTypes } from "../../constants/constants.ts";

const items = [
    {
        name: "ПЛЮШЕВИЙ ВЕДМІДЬ 'Ігор'",
        description:
            "Це іграшка, яка не залишить байдужими як малюків,так і їхніх батьків.",
    },
    {
        name: "ПЛЮШЕВИЙ ВЕДМІДЬ 'Ігор'",
        description:
            "Це іграшка, яка не залишить байдужими як малюків,так і їхніх батьків.",
    },
    {
        name: "ПЛЮШЕВИЙ ВЕДМІДЬ 'Ігор'",
        description:
            "Це іграшка, яка не залишить байдужими як малюків,так і їхніх батьків.",
    },
];

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
            className={styles.bannerMobile}>
            {items.map((item, index) => (
                <SwiperSlide className={styles.bannerMobileSlide} key={index}>
                    <img src="img/banner__small.png" alt="" />
                    <div>
                        <TextElement content={item.name} />
                        <TextElement content={item.description} type={textTypes.small} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default BannerMobile;
