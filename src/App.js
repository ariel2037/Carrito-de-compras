import {Component} from 'react';
import Productos from './components/Productos';
import Layaout from './components/Layaout';
import Title from './components/Title';
import Navbar from './components/Navbar';



class App extends Component { 
  state = {
    productos : [
      { name: 'Tomate', price: 1500, img: 'productos/tomate.jpg'},
      { name: 'Arbejas', price: 2500, img: 'productos/arbejas.jpg'},
      { name: 'Lechuga', price: 500, img: 'productos/lechuga.jpg'},
    ],
    carro: [
      // { name: 'Tomate', price: 1500, img: 'productos/tomate.jpg', cantidad: 1},
    ],
    carroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x =>x.name === producto.name 
        ? ({
          ...x, 
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({carro: newCarro}) 
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    })
  }
  eliminarDelCarro = (producto) => {
    const {carro} = this.state
    if(carro.find(x => x.name === producto.name)) {
      let newCarro = carro.map(x =>x.name === producto.name 
        ? ({
          ...x, 
          cantidad: x.cantidad - 1
        })
        : x)
      
        newCarro = newCarro.filter((x) => x.cantidad > 0);
        return this.setState({carro: newCarro}) 
    } 
  }
  

  mostrarCarro =() => {
    if (!this.state.carro.length) {
      return
    }
    this.setState({ carroVisible: !this.state.carroVisible })
  }

  render() {
    return(
  <div>
    <Navbar 
      carro={this.state.carro} 
      carroVisible={this.state.carroVisible}
      mostrarCarro={this.mostrarCarro}
    />
    <Layaout>
      <Title/>
      <Productos
        agregarAlCarro={this.agregarAlCarro}
        eliminarDelCarro={this.eliminarDelCarro}
        productos={this.state.productos}
      />
    </Layaout>
  </div>
  )}
}


export default App;
