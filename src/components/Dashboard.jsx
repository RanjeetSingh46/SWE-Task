import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const Dashboard = ({ onUpdateBanner }) => {
  const [bannerData, setBannerData] = useState({
    description: '',
    timer: 0,
    link: '',
    visible: false,
  });

  useEffect(() => {
    // Fetch banner data from the backend
    axios.get('http://localhost:3000/banner').then((response) => {
      setBannerData(response.data);
    });
  }, []);

  const handleUpdate = () => {
    axios.post('http://localhost:3000/banner', bannerData).then(() => {
      onUpdateBanner(bannerData);
    });
  };



  return (
    <div className="dashboard">
      <Form>
        <Form.Group controlId="description">
          <Form.Label>Banner Description</Form.Label>
          <Form.Control
            type="text"
            value={bannerData.description}
            onChange={(e) => setBannerData({ ...bannerData, description: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="timer">
          <Form.Label>Banner Timer (seconds)</Form.Label>
          <Form.Control
            type="number"
            value={bannerData.timer}
            onChange={(e) => setBannerData({ ...bannerData, timer: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="link">
          <Form.Label>Banner Link</Form.Label>
          <Form.Control
            type="text"
            value={bannerData.link}
            onChange={(e) => setBannerData({ ...bannerData, link: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="visible">
          <Form.Check
            type="checkbox"
            label="Show Banner"
            checked={bannerData.visible}
            onChange={(e) => setBannerData({ ...bannerData, visible: e.target.checked })}
          />
        </Form.Group>
        <Button onClick={handleUpdate}>Update Banner</Button>&nbsp;
      </Form>
    </div>
  );
};

export default Dashboard;
