import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import NavBar from './Navbar';
import ImageCollage from './ImageCollage';
import AdventurePage from './AdventurePage'; // Make sure to create and import this
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  useEffect(() => {
    // Trigger confetti on component mount
    confetti({
      particleCount: 1000,
      spread: 360,
      startVelocity: 100,
    });
  }, []);

  // Function that returns the main content of your homepage
  const Home = () => (
    <div>
      <header className="App-header">
        <h1>HAPPY BIRTHDAY ANNA :)</h1>
        <ImageCollage />
      </header>
      <LoveSection />
    </div>
  );

  return (
    <Router >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/birthday-collage" element={<Home />} />
          <Route path="/adventure" element={<AdventurePage />} />
        </Routes>
      </div>
    </Router>
  );
}

const items = [
  "Ojai treep", "Getty lol", "Vegas", "LA Arboretum", "Escondido Falls", "FNAF", "Hawaii", "Mexico City", "Costa Rica",
  "Beach day", "Sweeeem", "Movie Marathon", "Spa Day", "Wine Route", "Horseback Riding", "Tennis", "Cook together", "J Tree", "More zoos",
  "Rot in bed", "Disneyland again", "Mini golf", "Club", "Europe trip", "Ice cream", "Rock gym", "Get shitfaced", "NYC trip", "KBBQ", 
  "Shabu Shabu", "Canada", "Yosemite", "Picnic", "Concert", "Cat cafe", "Cuddle with tito", "Farmer's market", "Blueberry picking", "Hotsprings",
  "Huntington Library", "Sushi date", "Good tacos", "Lake Arrowhead", "Visit Chicago", "626 Night Market", "Hiking", "More Hiking",
  "More Hiking", "More Hiking", "Ran out of ideas", 
]

function LoveSection() {
  return (
    <section className="loveSection">
      <h2>50 Things We Have To Do Together</h2>
      <p>
      For the past two years, we've created memories that will last. Here's a list of 50 adventures I'm excited to experience with you, each one showing how much I care and celebrating the great times we've spent together
      </p>
      <div className="bullet-list">
        {items.map((item, index) => (
          <div className="bullet-item" key={item}>
            <span>{`${index + 1}.`}</span> {item}
          </div>
        ))}
      </div>
    </section>
  );
}


export default App;
