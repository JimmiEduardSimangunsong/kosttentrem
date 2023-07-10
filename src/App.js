import { Card } from "react-bootstrap";
import ResponsiveAppBar from "./components/appbar";
import CarouselFade from "./components/carousel";
import Group from "./components/tagcolumn";
import Froom from "./components/roomfasilitation";
import Bath from "./components/bathfasilitation";
import './style/tailwind.css';

function App() {
  return (
    <div>
      <div className='appbar'>
        <ResponsiveAppBar/>
      </div>
      <div className='slide'>
        <CarouselFade/>
      </div>
      <div className='tagcl'>
        <Group/>
      </div>
      <div className="fasilitationroom">
        <h1 className="text-3xl font-bold text-center">Fasilitas Kamar</h1>
        <Froom/>
      </div>
      <div className="fasilitationbath">
        <h1 className="text-3xl font-bold text-center">Fasilitas Kamar Mandi</h1>
        <Bath/>
        </div>
      



    </div>
  );
}

export default App;