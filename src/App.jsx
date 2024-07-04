import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';

const App = () => {
  const [cards, setCards] = useState([]);

  async function fetchData() {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await a.json();
    setCards(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar title='tanmay1394' />
      <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cards.map((card) => {
          return (
            <Card key={card.id} title={card.title} body={card.body} userid={card.id}/>
          );
        })}
      </div>
      <Footer year={2024} />
    </div>
  );
};

export default App;
