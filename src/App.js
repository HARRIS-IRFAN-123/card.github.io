import React from 'react';
import './App.css';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <div className="App">
      <CourseCard
        image="laptop-image-url.jpg"
        title="Health Care"
        subTitle={<span className="text-black text-xl font-bold text-left">Clinic Management Software Development</span>}
        description="Web-based clinic management software for a facility treatment clinic with dedicated portals for clinics, sperm."
      />
    </div>
  );
}

export default App;
