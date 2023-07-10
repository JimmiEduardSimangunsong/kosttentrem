import 'bootstrap/dist/css/bootstrap.min.css';
import campur from "../asset/images/tagcl/campur.png";
import medan from "../asset/images/tagcl/medan.png";
import kamar from "../asset/images/tagcl/pilihan kamar.png";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Group() {
  return (
    <CardGroup fluid>
      <Card className="w-100 h-50 rounded shadow">
        <Card.Img variant="top" src={campur} />
      </Card>

      <Card className="w-100 h-50 rounded shadow">
        <Card.Img variant="top" src={kamar} />
      </Card>
      <Card className="w-100 h-50 rounded shadow">

        <Card.Img variant="top" src={medan} />
      </Card>

    </CardGroup>
  );
}

export default Group;