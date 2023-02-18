import Header from './components/Header';
import Card from './components/Card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map(item=>{
    return(
      <Card 
      id={item.id}
      item={item}
     />)
  })

  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
