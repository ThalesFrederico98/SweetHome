import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Cards.css'

function animar(e) {
    e.target.classList.toggle('animate');
}

export default function Cards({ dados, isLoading }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (dados.length > 0) {
            setIsVisible(true);
        }
    }, [dados]);

    if (isLoading == false && dados.length === 0) {
        return (
            <div className='container-fluid mt-5 text-muted'>
                <div className="row general-container px-2">
                    <span className='text-center fs-5'>Nenhuma acomodação encontrada</span>
                </div>
            </div>
        )
    } else
        return (
            <div className={`container-fluid px-sm-5 px-0`}>
                <div className="row general-container px-2">
                    {dados.map((acomodacao) => (
                        <div key={acomodacao.id} className={`position-relative card-container card-root ${isVisible ? 'card-loaded' : 'card-loading'}`}>
                            <div className="favorite position-absolute" onClick={animar}> </div>
                            <Swiper
                                direction={'horizontal'}
                                spaceBetween={0}
                                slidesPerView={1}
                                slidesPerGroup={1}
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                                className="CardsSwiper"
                            >
                                {acomodacao.imagens.map((imagem, index) => (
                                    <SwiperSlide key={index} virtualIndex={index}>
                                        <img className="img-fluid" src={imagem} alt={`${acomodacao.cidade} - ${acomodacao.pais}`} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="card-info">
                                <p className="fw-bold" >{acomodacao.cidade}, {acomodacao.pais}</p>
                                <p className="fw-bold">R$ {acomodacao.preco.toLocaleString('pt-BR')} por noite</p>

                            </div>
                            <div className="star-info">
                                <i className="mdi mdi-star"></i>
                                <p>{acomodacao.nota}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        )
}
