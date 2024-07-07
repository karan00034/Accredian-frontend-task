import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import HowToRefer from './components/HowToRefer';
import ReferralBenefits from './components/ReferralBenefits';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <HowToRefer />
      <ReferralBenefits />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
