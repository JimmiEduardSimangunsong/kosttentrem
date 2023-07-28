import React from 'react';
import '../style/tailwind.css';
import noackamarmandiluar from "../asset/images/tipekamar/noackamarmandiluar.jpg";
import noackamarmandidalam from "../asset/images/tipekamar/noackamarmandidalam.jpg";
import ackamarmandidalam from "../asset/images/tipekamar/ackamarmandidalam.jpg";
import acbesar from "../asset/images/tipekamar/acbesar.jpg";
import aclobby from "../asset/images/tipekamar/aclobby.jpg";
import acjumbo from "../asset/images/tipekamar/acjumbo.jpg";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function KitchenSinkExample() {
  const cardImageStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  const harganonacwcluar = {
    harga: 950000,
  };

  const harganonacwcdalam = {
    harga: 1150000,
  };

  const hargaac = {
    harga: 1700000,
  };

  const hargaacbesar = {
    harga: 2000000,
  };

  const hargaacjumbo = {
    harga: 2800000,
  };

  const hargaaclobby = {
    harga: 200000,
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#777',
    marginBottom: '10px',
  };

  const hargaStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2d7719',
  };

  const handlePesanSekarang = () => {
    const phoneNumber = '628126515295';
    const message = 'Halo, saya ingin pesan kamar.';

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <Row>
      <Col md={4} className="mb-4">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={noackamarmandiluar} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>Non AC, WC Luar</Card.Title>
            <Card.Text style={textStyle}>
              Biaya tambahan untuk orang kedua sebesar 200.000/bulan.
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {harganonacwcluar.harga}/bulan</span> {/* Harga asli */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Lemari Baju</ListGroup.Item>
            <ListGroup.Item>Meja</ListGroup.Item>
            <ListGroup.Item>Kursi</ListGroup.Item>
            <ListGroup.Item>Tempat Tidur</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={handlePesanSekarang}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={noackamarmandidalam} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>Non AC, WC Dalam</Card.Title>
            <Card.Text style={textStyle}>
              Biaya tambahan untuk orang kedua sebesar 200.000/bulan.
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {harganonacwcdalam.harga}/Bulan</span> {/* Harga asli */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kamar Mandi Dalam</ListGroup.Item>
            <ListGroup.Item>Meja</ListGroup.Item>
            <ListGroup.Item>Kursi</ListGroup.Item>
            <ListGroup.Item>Tempat Tidur</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={handlePesanSekarang}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={ackamarmandidalam} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>Kamar AC</Card.Title>
            <Card.Text style={textStyle}>
              Biaya tambahan untuk orang kedua sebesar 200.000/bulan.
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaac.harga}/Bulan</span> {/* Harga asli */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kamar Mandi Dalam</ListGroup.Item>
            <ListGroup.Item>AC</ListGroup.Item>
            <ListGroup.Item>Meja</ListGroup.Item>
            <ListGroup.Item>Kursi</ListGroup.Item>
            <ListGroup.Item>Lemari</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={handlePesanSekarang}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={acjumbo} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>AC Jumbo</Card.Title>
            <Card.Text style={textStyle}>
              Biaya tambahan untuk orang kedua sebesar 200.000/bulan.
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaacjumbo.harga}/Bulan</span> {/* Harga asli */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kamar Mandi Dalam</ListGroup.Item>
            <ListGroup.Item>SpringBed</ListGroup.Item>
            <ListGroup.Item>AC</ListGroup.Item>
            <ListGroup.Item>Meja</ListGroup.Item>
            <ListGroup.Item>Kursi</ListGroup.Item>
            <ListGroup.Item>Lemari</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={handlePesanSekarang}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={acbesar} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>AC Besar</Card.Title>
            <Card.Text style={textStyle}>
              Biaya tambahan untuk orang kedua sebesar 200.000/bulan.
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaacbesar.harga}/Bulan</span> {/* Harga asli */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kamar mandi Dalam</ListGroup.Item>
            <ListGroup.Item>2 Tempat Tidur</ListGroup.Item>
            <ListGroup.Item>AC</ListGroup.Item>
            <ListGroup.Item>Meja.</ListGroup.Item>
            <ListGroup.Item>Kursi</ListGroup.Item>
            <ListGroup.Item>Lemari</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={handlePesanSekarang}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4} className="mb-4">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={aclobby} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>AC Lobby</Card.Title>
            <Card.Text style={textStyle}>
              Khusus untuk Guest Room (permalam/perminggu)
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaaclobby.harga}/Malam</span> {/* Harga asli */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kamar Mandi Dalam</ListGroup.Item>
            <ListGroup.Item>AC</ListGroup.Item>
            <ListGroup.Item>Springbed</ListGroup.Item>
            <ListGroup.Item>Meja</ListGroup.Item>
            <ListGroup.Item>Kursi</ListGroup.Item>
            <ListGroup.Item>Lemari</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={handlePesanSekarang}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default KitchenSinkExample;
