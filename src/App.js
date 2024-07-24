import './App.css';
import Hero from './component/Hero/Hero'
import Programs from './component/Programs/Programs'
import Reason from './component/Reasons/Reason'
import Plans from './component/Plans/Plans'
import Testimonial from './component/Testimonials/Testimonials'
import Join from './component/Join/Join'
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reason />
      <Plans />
      <Testimonial />
      <Join />
    </div>
  );
}

export default App;
