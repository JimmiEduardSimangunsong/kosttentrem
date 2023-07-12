
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import bed from "../asset/images/froom/bed.png";
import chair from "../asset/images/froom/chair.png";
import dresstable from "../asset/images/froom/dresstable.png";
import table from "../asset/images/froom/table.png";
import pillow from "../asset/images/froom/pillow.png";
import cupboard from "../asset/images/froom/cupboard.png";
import clothesline from "../asset/images/froom/clothesline.png";
import '../style/tailwind.css';

function froom() {
  return (
    <div className="d-flex flex-wrap justify-content-around">
       <Card className="bg-light text-center d-flex align-items-center" style={{ width: '10rem', height: '10rem',padding: '1rem' }}>
  <div className="mx-auto">
    <Card.Img variant="top" src={bed} className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
    <Card.Body>
      <Card.Title>Kasur</Card.Title>
    </Card.Body>
  </div>
</Card>

      <Card className="bg-light text-center d-flex align-items-center" style={{ width: '10rem', height: '10rem',padding: '1rem' }}>
  <div className="mx-auto">
    <Card.Img variant="top" src={table} className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
    <Card.Body>
      <Card.Title>Meja</Card.Title>
    </Card.Body>
  </div>
</Card>

      <Card className="bg-light text-center d-flex align-items-center" style={{ width: '10rem', height: '10rem',padding: '1rem' }}>
      <div className="mx-auto">
        <Card.Img variant="top" src={chair} className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
        <Card.Body>
          <Card.Title>kursi</Card.Title>
        </Card.Body>
      </div>
      </Card>

      <Card className="bg-light text-center d-flex align-items-center" style={{ width: '10rem', height: '10rem',padding: '1rem' }}>
  <div className="mx-auto">
    <Card.Img variant="top" src={dresstable} className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
    <Card.Body>
      <Card.Title>M.Rias</Card.Title>
    </Card.Body>
  </div>
</Card>

      <Card className="bg-light text-center d-flex align-items-center" style={{ width: '10rem', height: '10rem',padding: '1rem' }}>
      <div className="mx-auto">
        <Card.Img variant="top" src={cupboard} className="img-fluid" style={{ width: '5rem', height: '5rem' }} />
        <Card.Body>
          <Card.Title>lemari</Card.Title>
        </Card.Body>
      </div>
      </Card>

      <Card className="bg-light text-center d-flex align-items-center" style={{ width: '10rem', height: '10rem',padding: '1rem' }}>
      <div className="mx-auto">
        <Card.Img variant="top" src={pillow} className="img-fluid" style={{ width: '5rem', height: '5rem' }}  />
        <Card.Body>
          <Card.Title>bantal</Card.Title>
        </Card.Body>
      </div>
      </Card>

      {/* <Card className="bg-light text-center" style={{ width: '18rem'  }}>
        <Card.Img variant="top" src={clothesline} />
        <Card.Body>
          <Card.Title>Jemuran</Card.Title>
        </Card.Body>
      </Card> */}




    </div>
  );
}

export default froom;