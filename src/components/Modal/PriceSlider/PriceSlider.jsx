import React from 'react'
import './PriceSlider.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function PriceSlider(props) {
    const [min, setMin] = useState(props.min)
    const [max, setMax] = useState(props.max)
    const [left, setLeft] = useState('0%')
    const [right, setRight] = useState('0%')

    function changeRangeMin(e) {
        if (parseInt(e.target.value) > max - 100) {
            setMin(max - 100);
            document.getElementById('inputMin').value = max - 100;
        }
        else if (parseInt(e.target.value) == '' || parseInt(e.target.value) == null || parseInt(e.target.value) < props.min || /^[+-]?\d+(\.\d+)?$/.test(parseInt(e.target.value)) == false) {
            setMin(props.min);
            document.getElementById('inputMin').value = props.min;
            setLeft('0%');
        }
        else {
            setMin(parseInt(e.target.value));
        }
        var barraTotal = props.max - props.min;
        var barraPerc = ((parseInt(e.target.value) - props.min) / barraTotal) * 100;
        setLeft(barraPerc + '%');
    }

    function changeRangeMax(e) {
        if (parseInt(e.target.value) < min + 100) {
            setMax(min + 100);
            document.getElementById('inputMax').value = min + 100;
        }
        else if (parseInt(e.target.value) == '' || parseInt(e.target.value) == null || parseInt(e.target.value) > props.max || /^[+-]?\d+(\.\d+)?$/.test(parseInt(e.target.value)) == false) {
            setMax(props.max);
            document.getElementById('inputMax').value = props.max;
            setRight('0%');
        }
        else {
            setMax(parseInt(e.target.value));
        }
        var barraTotal = props.max - props.min;
        var barraPerc = 100 - ((parseInt(e.target.value) - props.min) / barraTotal) * 100;
        setRight(barraPerc + '%');

    }

    useEffect(() => {
        if (document.getElementById('inputMin') == document.getElementById('inputMax' + 2)) {
        }
        else {
            document.getElementById('inputMin').value = min;
            document.getElementById('inputMax').value = max;
            props.filterByPrice(props.catID, min, max);
        }
    }, [min, max])

    return (
        <div>
            <div className="slider">
                <div className="progress" style={{ left: left, right: right }}>
                </div>
            </div>
            <div className="range-input">
                <input type="range" id="rangeMin" onChange={changeRangeMin} min={props.min} max={props.max} step={props.step} value={min} />
                <input type="range" id="rangeMax" onChange={changeRangeMax} min={props.min} max={props.max} step={props.step} value={max} />
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label className="text-muted">Preço mínimo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id="inputMin" type="text" onBlur={changeRangeMin} className="form-control" placeholder="Preço mínimo" />
                    </div>
                </div>
                <div className="col">
                    <label className="text-muted">Preço máximo</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">R$</span>
                        <input id="inputMax" type="text" onBlur={changeRangeMax} className="form-control" placeholder="Preço máximo" />
                    </div>
                </div>
            </div>
        </div>
    )
}
