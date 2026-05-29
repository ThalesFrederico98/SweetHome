import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Mousewheel, Pagination, Navigation, Scrollbar } from 'swiper/modules';

//Importing CSS files
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css';
import './Categorias.css'

//Import cotagories data
import { categorias } from '../../../backend/dados'

export default function Categorias({ changeCat }) {

    const [active, setActive] = useState(1);

    const handleclick = (e, id) => {
        setActive(id);
        changeCat(id);
    }

    return (
        <div className="categorias unselectable">
            <div className="col-11 border-bottom">
                <Swiper
                    direction={'horizontal'}
                    //spaceBetween={7}
                    //slidesPerView={11}
                    //slidesPerGroup={14}
                    breakpoints={{
                        //janelas maiores que 160px (xs)
                        160: {
                            spaceBetween: 0,
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },

                        //janelas maiores que 425px (sm)
                        425: {
                            spaceBetween: 2,
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        //janelas maiores que 576px (sm)
                        576: {
                            spaceBetween: 4,
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        //janelas maiores que 768px (md)
                        768: {
                            spaceBetween: 7,
                            slidesPerView: 4,
                            slidesPerGroup: 4,

                        },

                        1024: {
                            spaceBetween: 7,
                            slidesPerView: 6,
                            slidesPerGroup: 6,

                        },
                        //janelas maiores que 1200px (lg)
                        1200: {
                            spaceBetween: 7,
                            slidesPerView: 7,
                            slidesPerGroup: 7,
                        },
                        // janelas maiores que 1400px (xxl)
                        1400: {
                            spaceBetween: 7,
                            slidesPerView: 9,
                            slidesPerGroup: 9,
                        },

                        1600: {
                            spaceBetween: 7,
                            slidesPerView: 11,
                            slidesPerGroup: 11,
                        }

                    }
                    }
                    mousewheel={true}
                    navigation={true}
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Mousewheel, Navigation, Scrollbar]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {categorias.map((dados, index) => (
                        <SwiperSlide key={dados.id} virtualIndex={index} className={`categoriasSlide ${dados.id === active ? 'active' : ''}`} onClick={(e) => handleclick(e, dados.id)}>
                            <img src={dados.imagem} alt={dados.nome} />
                            <span>{dados.titulo}</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="buttondiv">
                <button className="filterButton" data-bs-toggle="modal" data-bs-target="#filtersModal">
                    <i className=" mdi mdi-filter-variant"> </i>
                    Filtros</button>
            </div>
        </div>
    )
}
