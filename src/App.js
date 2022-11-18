import './App.css';
import Product from './Product';


function App() {
  return (
    <div className="app">
      {/* <h1>app about props</h1> */}
     
      <Product
        name="iphone"
        description="The new iphone 14 Pro"
        price={1200.00} />
      
      <Product
        name="Sony Camera"
        description="he best mirrorless camera "
        price={800.00} />
      
      <Product
        name="Macbook pro"
        description="The M1 chip"
        price={2500.00} />
    </div>
  );
}

export default App;
