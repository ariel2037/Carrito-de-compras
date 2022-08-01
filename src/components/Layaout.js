import {Component} from 'react';

const styles = {
    layaout:{
        backgroundColor: '#fff',
        color: '#0A283E',
        alignItems:'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container:{
        width:'1200px',
    }
}

class Layaout extends Component {
    render() {
        return(
            <div style={styles.layaout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layaout;