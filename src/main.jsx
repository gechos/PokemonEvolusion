import ReactDOM from 'react-dom/client';
import { App } from './App';
import './sass/index.scss';

const rootElement = document.querySelector('#root');
const root = ReactDOM.createRoot(rootElement);

//console.log(root)  // el metodo render permite dibujar el metodo en pantallla
//root.render(<h1>Bienvenidos a CodingTube</h1>);

//ReactDOM.createRoot(document.getElementById('root')).render(

//)
root.render(<App />);
