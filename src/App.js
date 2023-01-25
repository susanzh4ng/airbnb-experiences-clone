import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import airbnbData from './airbnbData';

//{...card} spreads all the items of the card object into props
function App() {
  const cardElements = airbnbData.map(card => {
    return (<Card
      key={card.id}
      {...card}
      />)
  })

  return (
    <div className="App">
      <NavBar />
      <Hero /> 
      <section className="cardsList">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
