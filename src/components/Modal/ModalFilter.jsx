import React from 'react'
import './ModalFilter.css'
import PriceSlider from './PriceSlider/PriceSlider'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import CardGroup from './CardGroup/CardGroup'


export default function ModalFilter({ resetFilters, catID, filterByPrice, itens }) {
    return (
        <div className="modal fade modalfilter" id="filtersModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title w-100 fs-5" id="exampleModalLabel">Filtros</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <section className="border-bottom mb-5 px-2">
                            <p className="fs-5 fw-bold mb-4">Faixa de preço</p>
                            <PriceSlider catID={catID} filterByPrice={filterByPrice} min={0} max={2000} step={2} />
                        </section>
                        <section className="border-bottom mb-4 px-2">
                            <span className="fs-5 fw-bold">Tipo de Lugar</span>
                            <div className="row mt-4">
                                <div className="col-md-6 mb-4">
                                    <div className="form-check ms-3">
                                        <input className="form-check-input fs-4" type="checkbox" value="" id="inteiro" />
                                        <label className="form-check-label" htmlFor="inteiro">
                                            Espaço Inteiro <br />
                                            <small className="text-muted"> Um lugar só para você </small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-check ms-3">
                                        <input className="form-check-input fs-4" type="checkbox" value="" id="quarto" />
                                        <label className="form-check-label" htmlFor="quarto">
                                            Quarto<br />
                                            <small className="text-muted"> Seu próprio quarto em uma casa ou hotel, além de alguns espaços comuns compartilhados</small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-check ms-3">
                                        <input className="form-check-input fs-4" type="checkbox" value="" id="quartoCompartilhado" />
                                        <label className="form-check-label" htmlFor="quartoCompartilhado">
                                            Quarto compartilhado<br />
                                            <small className="text-muted"> Um espaço para dormir e áreas comuns que podem ser compartilhadas com outras pessoas</small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="border-bottom mb-4 px-2 selectionFilters">
                            <span className="fs-5 fw-bold">Quartos e Camas</span>
                            <p className="text-muted mt-3 px-1">Quantos quartos?</p>
                            <ButtonGroup
                                className="d-flex flex-column align-items-start"
                                buttons={["Qualquer um", "1", "2", "3", "4+"]}
                            />
                            <p className="text-muted mt-3 px-1">Quantas camas?</p>
                            <ButtonGroup
                                buttons={["Qualquer um", "1", "2", "3", "4+"]}
                            />
                            <p className="text-muted mt-3 px-1">Quantos banheiros?</p>
                            <ButtonGroup
                                buttons={["Qualquer um", "1", "2", "3", "4+"]}
                            />
                        </section>
                        <section className="border-bottom mb-4 px-2">
                            <span className="fs-5 fw-bold">Tipo de propriedade</span>
                            <CardGroup options={[
                                { icon: "mdi mdi-home-outline", text: "Casa" },
                                { icon: "mdi mdi-city-variant-outline", text: "Apartamento" },
                                { icon: "mdi mdi-home-import-outline", text: "Casa de hóspedes" },
                                { icon: "mdi mdi-office-building-outline", text: "Hotel" }
                            ]} />
                        </section>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <button type="button" onClick={() => { resetFilters(catID) }} className="btn btn-secondary px-2 py-2" data-bs-dismiss="modal">Remover filtros</button>
                        <button type="button" className="btn btn-primary px-4 py-3" data-bs-dismiss="modal">Salvar Filtros</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
