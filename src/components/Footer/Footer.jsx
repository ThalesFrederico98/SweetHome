import React from 'react'
import './Footer.css'

export default function Footer() {
    const data = new Date()
    return (
        <>
            <footer>
                <div className="footer-box px-5 pt-5">
                    <div className="d-flex footer-links flex-column gap-1 mb-5">
                        <span className="fs-6 fw-bold">Atendimento</span>
                        <span className="fs-6">Central de ajuda</span>
                        <span className="fs-6">Segurança</span>
                        <span className="fs-6">SweetCover</span>
                        <span className="fs-6">Gerenciamento</span>
                        <span className="fs-6">Reporte um problema</span>
                    </div>
                    <div className="d-flex footer-links flex-column gap-1 mb-5">
                        <span className="fs-6 fw-bold">Hospedagem</span>
                        <span className="fs-6">Anuncie sua hospedagem</span>
                        <span className="fs-6">Serviços de hospedagem</span>
                        <span className="fs-6">SweetCover para anfitriões</span>
                        <span className="fs-6">Fórum da comunidade</span>
                        <span className="fs-6">Aulas de hospedagem gratuitas</span>
                        <span className="fs-6">Encontre um anfitrião</span>
                        <span className="fs-6">Indique um anfitrião</span>
                    </div>
                    <div className="d-flex footer-links flex-column gap-1 mb-5">
                        <span className="fs-6 fw-bold">SweetHome</span>
                        <span className="fs-6">SweetHome - Edição de {data.toLocaleString('default', { month: 'long' })}</span>
                        <span className="fs-6">Carreiras</span>
                        <span className="fs-6">Investidores</span>
                        <span className="fs-6">Locais Emergenciais</span>
                    </div>
                </div >

                <div className="footer-inc-container d-flex flex-row-wrap border-top justify-content-between">
                    <div className="sweethome-inc px-5 pt-4 pb-5 d-flex flex-row align-items-center">
                        <span className="fs-6  text-muted">© 2026 SweetHome, Inc. Todos os direitos reservados.</span>
                    </div>
                    <div className="footer-icons-container px-5 pt-4 pb-5 d-flex flex-row align-items-center">
                        <i className="mdi mdi-web "> Português(BR)</i>
                        <span> R$ BRL </span>
                        <i className="mdi mdi-facebook footer-icons" ></i>
                        <i className="mdi mdi-twitter footer-icons" ></i>
                        <i className="mdi mdi-instagram footer-icons" ></i>
                    </div>
                </div>
            </footer >
        </>
    )
}
