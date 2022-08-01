import {Component} from 'react';
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro: {
        backgroundColor:'#359A2C',
        color:'#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    burbuja: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() { 
        const {carro, mostrarCarro, carroVisible} = this.props;
        const cantidad = carro.reduce((acc, val) => acc + val.cantidad,  0);
        return (
            <div>
                <span style={styles.burbuja}>
                    {cantidad !== 0
                        ? <BubbleAlert value={cantidad}/>
                        : null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                { carroVisible &&
                <DetallesCarro carro={carro}/>
                }
            </div>
        );
    }
}
 
export default Carro;