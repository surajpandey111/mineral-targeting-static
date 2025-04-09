import React from 'react';
import './App.css';
import HackathonInfo from './components/HackathonInfo';
import CopperPlots from './components/CopperPlots';
import GoldPlots from './components/GoldPlots';
import IronPlots from './components/IronPlots';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Mineral Targeting 2025</h1>
        <HackathonInfo />
      </header>
      <main>
        <CopperPlots />
        <GoldPlots />
        <IronPlots />
        <DownloadSection />
      </main>
      <footer>
        <p>Developed by: Suraj Kumar Pandey</p>
      </footer>
    </div>
  );
}

export default App;