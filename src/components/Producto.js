import {Component} from 'react';
import Button from './Button'


const styles = {
    producto:{
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },
    imagenes:{
        width: '100%',
    }
}

class Producto extends Component {
    render() {
        const  {producto, agregarAlCarro, eliminarDelCarro} = this.props;
        return (
           <div style={styles.producto}> 
                <img style={styles.imagenes} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <h3>{producto.price}</h3>
                <Button onClick={() => agregarAlCarro(producto)}> 
                    Agregar al carro
                </Button>
                <br/>
                <br/>
                <Button onClick={() => eliminarDelCarro(producto)}> 
                    Eliminar del Carro
                </Button>
           </div>
        )
    }
}

export default Producto;