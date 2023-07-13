import ResponsiveAppBar from "./components/appbar";
import CarouselFade from "./components/carousel";
import Group from "./components/tagcolumn";
import Froom from "./components/roomfasilitation";
import Bath from "./components/bathfasilitation";
import Folder from "./components/pubfacilities";
import Tipekamar from "./components/tipekamar";
import Gallery from "./components/gallery";
import  Promosi from "./components/promosi";
import Lokasi from "./components/lokasi";
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
        <Promosi/>
      </div>
      <div className="fasilitationroom">
        <h1 className="text-3xl font-bold text-center">Fasilitas Kamar</h1>
        <Froom/>
      </div>
      <div className="fasilitationbath" style={{ color: 'white' }}>
        <h1 className="text-3xl font-bold text-center">Fasilitas Kamar Mandi</h1>
        <Bath/>
        </div>
      <div className="pubfacilities">
        <h1 className="text-3xl font-bold text-center">Fasilitas Umum</h1>
        <Folder/>
        </div>
        <div className="tipekamar">
        <h1 className="text-3xl font-bold text-center">Tipe Kamar</h1>
        <Tipekamar/>
        </div>

        <div className="lokasi" style={{ color: 'white' }}>
        <h1 className="text-3xl font-bold text-center ">Lokasi Kost Tentrem</h1>
        <Lokasi/>
        </div>


        <div className="Gallery">
        <h1 className="text-3xl font-bold text-center">Gallery</h1>
        <Gallery/>
        </div>
      



    </div>
  );
}

export default App;