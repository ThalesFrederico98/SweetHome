import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import Swal from 'sweetalert2'
import './Registro.css'

// Extensão Day Picker para calendário
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";






export default function Registro() {

    /*const [selectedDay, setSelectedDay] = React.useState("Dia")
    const [selectedMonth, setSelectedMonth] = React.useState("Mês")
    const [selectedYear, setSelectedYear] = React.useState("Ano")*/
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    const [form, setForm] = useState({
        nome: "",
        email: "",
        senha: "",
        data: "",
    })

    function sendForm(e) {
        e.preventDefault();

        //Pode adicionar o que quiser. Swal.fire é uma função da biblioteca SweetAlert2, que exibe um alerta estilizado na tela.
        try {
            const response = fetch('link para sua api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                Swal.fire(
                    'Formulário Enviado!',
                    'Seus dados foram registrados com sucesso.',
                    'success'
                );
                setForm({ nome: '', senha: '', data: '', email: '' }); // Limpa o formulário
            } else {
                Swal.fire(
                    'Formulário não enviado',
                    'Seus dados não foram registrados',
                    'error'
                );
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
        }
    };

    //callbacks para evitar que as funções sejam recriadas a cada renderização, melhorando a performance
    const handleChangeAll = useCallback((e) => {
        setForm(prevForm => ({
            ...prevForm, [e.target.name]: e.target.value
        }));
        console.log('CLICK no select:', e.target.type === "text" ? 'texto: ' + e.target.value : e.target.type === "radio" ? 'opção: ' + e.target.id : e.target.type === "checkbox" ? 'seleção: ' + e.target.checked : e.target.value, e.target.name);
    })

    //States para o calendário
    const [selected, setSelected] = useState(undefined);
    const [showCalendar, setShowCalendar] = useState(false);

    return (
        <div>
            <div className="form-container">
                <h2 className="Title">Cadastro</h2>
                <form onSubmit={sendForm}>
                    <label htmlFor="nome" className="Text1">Nome de usuário: </label>
                    <input name="nome" id="nome" className="select" type="text" placeholder="Nome" value={form.nome} onChange={handleChangeAll} />
                    <p> {form.nome != "" ? `Olá ${form.nome}!` : ``} </p>

                    <label htmlFor="email" className="Text1">Email: </label>
                    <input name="email" id="email" className="select-email" type="text" placeholder="Email" value={form.email} onChange={handleChangeAll} />


                    <label className="Text1"> Senha </label>
                    <input name="senha" id="senha" type="password" className="select" placeholder="Senha" value={form.senha} onChange={handleChangeAll} />

                    <button
                        className="dateButton"
                        type="button"
                        onClick={() => setShowCalendar(!showCalendar)}
                    >
                        📅 Data de nascimento: {selected ? selected.toLocaleDateString() : "Selecione"}
                    </button>

                    <div className={`calendar-container ${showCalendar ? 'visible' : ''}`}>
                        <DayPicker
                            mode="single"
                            navLayout="around"
                            selected={selected}
                            onSelect={setSelected}
                            footer={
                                selected ? `Selecionado: ${selected.toLocaleDateString()}` : "Escolha a data"
                            }
                        />
                    </div>
                </form>
                <button className="sendButton" type="submit" onClick={sendForm}>Enviar</button>
            </div>
        </div>
    )
}
