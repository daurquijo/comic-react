import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComicById } from '../../redux/actions';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ComicList.css';

const ComicList = () => {
    const comics = useSelector(state => state.comics);
    const dispatch = useDispatch();

    const handleFetchComicById = (comicId) => {
        dispatch(fetchComicById(parseInt(comicId)));
    };

    return (
        <div className="comic-slider">
            <h1>List of Comics:</h1>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
            >
                {comics.map(comic => (
                    <SwiperSlide key={comic.num}>
                        <div className="comic-slide">
                            <div className="comic-info">
                                <h2>{comic.title}</h2>
                                <p>{comic.rating}</p>
                                <img src={comic.img} alt={comic.alt} />
                                <button onClick={() => handleFetchComicById(comic.num)}>View Comic</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ComicList;