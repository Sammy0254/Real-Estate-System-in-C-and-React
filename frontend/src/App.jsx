import React from 'react';
import Header from './Components/Header';
import About from './Components/About';
import OurValues from './Components/OurValues';
import Projects from './Components/Projects';
import ContactUs from './Components/ContactUs';


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header/>
      <About/>
      <OurValues/>
      <Projects/>
      <ContactUs/>

    </div>
  );
};
export default App;