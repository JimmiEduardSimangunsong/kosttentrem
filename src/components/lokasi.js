import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMap } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/tailwind.css';

function HeaderAndFooterExample() {
  const googleMapsLink = 'https://www.google.com/maps/dir/3.5706942,98.6490691/link+google+map+kost+tentrem+medan/@3.5695559,98.6477265,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x30312fdae412c01d:0x3eee7480058b1f02!2m2!1d98.6507414!2d3.5685751?entry=ttu';

  const cardStyle = {
    backgroundColor: '#2d7719', 
    
  };

  return (
    <Card className="text-center custom-card" style={cardStyle}>
      <Card.Header>
        <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
        Lokasi
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Padang Bulan Selayang I, Kec. Medan Selayang, Kota Medan, Sumatera Utara
        </Card.Text>
        <Button variant="primary" href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMap} style={{ marginRight: '5px' }} />
          Lihat Google Map
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HeaderAndFooterExample;
