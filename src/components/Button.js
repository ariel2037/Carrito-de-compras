import {Component} from 'react';


const styles = {
    boton:{
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class Button extends Component {
    render() {
        return(
            <button style={styles.boton} {...this.props}/>
        )
    }
}

export default Button;