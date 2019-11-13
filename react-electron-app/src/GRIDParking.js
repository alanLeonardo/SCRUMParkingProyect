import React from 'react';
import './CSS/GRIDParking.css';
import Swal from 'sweetalert2';


class GRIDParking extends React.Component {

    constructor(props){
        super(props);
        var a1,a2,a3,a4,a5,a6,a7,a8,b1,b2,b3,b4,b5,b6,b7,b8,c1,c2,c3,c4,c5,c6,c7,c8,d1,d2,d3,d4,d5,d6,d7,d8,e1,e2,e3,e4,e5,e6,e7,e8,f1,f2,f3,f4,f5,f6,f7,f8,g1,g2,g3,g4,g5,g6,g7,g8,h1,h2,h3,h4,h5,h6,h7,h8 = ''

        const ESTADO_INICIAL = [a1,a2,a3,a4,a5,a6,a7,a8,
            b1,b2,b3,b4,b5,b6,b7,b8,
            c1,c2,c3,c4,c5,c6,c7,c8,
            d1,d2,d3,d4,d5,d6,d7,d8,
            e1,e2,e3,e4,e5,e6,e7,e8,
            f1,f2,f3,f4,f5,f6,f7,f8,
            g1,g2,g3,g4,g5,g6,g7,g8,
            h1,h2,h3,h4,h5,h6,h7,h8]
        this.state = {
            titulo: 'GRIDParking',
            lugares: ESTADO_INICIAL,
        }
    }
    onClearArray = () => {
        this.setState(state => {
            const lugares = state.lugares.map(lugar => lugar = '');
            return {lugares};
        });
    };
    modify = (event) => {
        event.preventDefault();
        const index = event.target.getAttribute('data-index')
        Swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
        }).queue([
            {
                title: 'Patente',
                text: ''
            },
            'Nombre',
            'Apellido'
        ]).then((result) => {
            if (result.value) {
                Swal.fire({
                    title: 'All done!',
                    html:
                        'Datos: <br/>' +
                        'Patente ' + result.value[0] + '<br/>' +
                        'Nombre ' + result.value[1] + '<br/>' +
                        'Apellido ' + result.value[2],
                    confirmButtonText: 'Aceptar'
                });
                this.setState(state => {
                    const lugares = state.lugares.map((lugar, i) => {
                        if(index == i){
                            lugar = result.value[0];
                            return lugar;
                        }
                    });
                    return {lugares};
                })
            }
        })
    }
    render() {
        return(
            <div className="grid">
                {this.state.lugares.map((lugar, index) => {
                    return (<button className="btn btn-dark item-grid" onClick={this.modify} data-index={index} key={index}>{lugar}</button>)
                })}
                <div className="clearArray">
                    <button type="button" onClick={this.onClearArray}>
                        Desocupar parcelas
                    </button>
                </div>
            </div>
        )
    }
}
export default GRIDParking;