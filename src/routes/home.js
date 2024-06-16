import React from 'react';
import './home.css'
import gprofil from '../assets/gauteprofil.jpg'

function Home() {
    return (
        <div className="home">
            <WelcomeSection />
        </div>
    );
}

function WelcomeSection() {
    return (
        <div className="App">
           <header className="App-header">
             <img src={gprofil} className="App-logo" alt="logo" />
             <p>
               Nettside under konstruksjon
             </p>
           </header>
         </div>
    );
}

export default Home;
