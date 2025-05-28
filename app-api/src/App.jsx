
import { productos } from './data';

function App() {
  return (
    <div>
      <h1>Productos</h1>
      <div>
        {productos.map(producto => (
          <div key={producto.id}>
            <img src={producto.images[0]} alt={producto.title} width="150" />
            <div>
              <h3>{producto.title}</h3>
              <p>${producto.price}</p>
              <p>{producto.category.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;