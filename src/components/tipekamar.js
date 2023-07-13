import React from 'react';
import kamartipe1 from "../asset/images/tipekamar/kamartipe1.png";
import kamartipe2 from "../asset/images/tipekamar/kamartipe2.png";
import kamartipe3 from "../asset/images/tipekamar/kamartipe3.png";
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

  // Harga sebelum diskon dan harga setelah diskon
  const hargaTipe1 = {
    harga: 1500000,
    diskon: 200000,
  };

  const hargaTipe2 = {
    harga: 1800000,
    diskon: 300000,
  };

  const hargaTipe3 = {
    harga: 2000000,
    diskon: 400000,
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
    fontSize: '18px',
    color: '#2d7719',
    marginBottom: '5px',
    textDecoration: 'line-through',
  };

  const hargaDiskonStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2d7719',
  };

  const handleWhatsAppClick = (phoneNumber) => {
    const message = 'Halo, saya ingin pesan kamar.'; // Ganti dengan pesan yang diinginkan

    const url = `https://api.whatsapp.com/send?phone=+62${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePesanSekarang = (tipeKamar) => {
    let phoneNumber = ''; // Ganti dengan nomor WhatsApp pemilik kost sesuai dengan tipe kamar
    if (tipeKamar === '1') {
      phoneNumber = '8126515295'; // Ganti dengan nomor WhatsApp pemilik kost untuk Kamar Tipe 1
    } else if (tipeKamar === '2') {
      phoneNumber = '8126515295'; // Ganti dengan nomor WhatsApp pemilik kost untuk Kamar Tipe 2
    } else if (tipeKamar === '3') {
      phoneNumber = '8126515295'; // Ganti dengan nomor WhatsApp pemilik kost untuk Kamar Tipe 3
    }

    handleWhatsAppClick(phoneNumber);
  };

  return (
    <Row>
      <Col md={4}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={kamartipe1} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>Kamar Tipe 1</Card.Title>
            <Card.Text style={textStyle}>
              Bayar dengan harga abnormal, bisa bayar bulanan. Dan kabar baiknya harga tersebut sudah termasuk biaya listrik.
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaTipe1.harga}</span> {/* Harga sebelum diskon */}
              <br />
              <span style={hargaDiskonStyle}>Harga Sekarang: Rp {hargaTipe1.harga - hargaTipe1.diskon}</span> {/* Harga setelah diskon */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>AC</ListGroup.Item>
            <ListGroup.Item>Kamar Mandi Dalam</ListGroup.Item>
            <ListGroup.Item>Meja Rias</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={() => handlePesanSekarang('1')}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={kamartipe2} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>Kamar Tipe 2</Card.Title>
            <Card.Text style={textStyle}>
            Bayar dengan harga abnormal, bisa bayar bulanan. Dan kabar baiknya harga tersebut sudah termasuk biaya listrik. 
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaTipe2.harga}</span> {/* Harga sebelum diskon */}
              <br />
              <span style={hargaDiskonStyle}>Harga Sekarang: Rp {hargaTipe2.harga - hargaTipe2.diskon}</span> {/* Harga setelah diskon */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>tidak ada water heater</ListGroup.Item>
            <ListGroup.Item>tidak ada water heater</ListGroup.Item>
            <ListGroup.Item>tidak ada water heater</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={() => handlePesanSekarang('2')}>
              <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
              Pesan Sekarang
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src={kamartipe3} style={cardImageStyle} />
          <Card.Body>
            <Card.Title style={titleStyle}>Kamar Tipe 3</Card.Title>
            <Card.Text style={textStyle}>
            Bayar dengan harga abnormal, bisa bayar bulanan. Dan kabar baiknya harga tersebut sudah termasuk biaya listrik. 
            </Card.Text>
            <Card.Text>
              <span style={hargaStyle}>Harga: Rp {hargaTipe3.harga}</span> {/* Harga sebelum diskon */}
              <br />
              <span style={hargaDiskonStyle}>Harga Sekarang: Rp {hargaTipe3.harga - hargaTipe3.diskon}</span> {/* Harga setelah diskon */}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Kamar full furnish</ListGroup.Item>
            <ListGroup.Item>free wifi</ListGroup.Item>
            <ListGroup.Item>bebas dari biaya-biaya lainnya.</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="success" onClick={() => handlePesanSekarang('3')}>
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
