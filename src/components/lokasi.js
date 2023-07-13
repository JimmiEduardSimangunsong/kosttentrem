import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faMap } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function HeaderAndFooterExample() {
  const googleMapsLink = 'https://www.google.com/maps?q=Padang+Bulan+Selayang+I,+Kec.+Medan+Selayang,+Kota+Medan,+Sumatera+Utara';

  const cardStyle = {
    backgroundColor: '#2d7719', 
    color: 'white', 
  };

  return (
    <Card className="text-center" style={cardStyle}>
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
