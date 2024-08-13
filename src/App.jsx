import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import { Container } from 'react-bootstrap';
import './App.css'
import axios from 'axios';


function App() {

  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
    visible: false,
  });


  const handleUpdateBanner = (data) => {
    setBannerData(data);
  };
  return (
    <>
      
      <Container>
      <Banner
        showBanner={bannerData.visible}
        bannerData={bannerData}
        onToggleBanner={(visible) => setBannerData((prev) => ({ ...prev, visible }))}
      />
      <Dashboard onUpdateBanner={handleUpdateBanner} />
      </Container>
    </>
  )
}

export default App
