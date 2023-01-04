import { Button, Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

class CarDat extends React.Component {
  render() {
    return (
      <div>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.datas.urlToImage} />
            <Card.Body>
              <Card.Title>{this.props.datas.title}</Card.Title>
              <Card.Text>{this.props.datas.description}</Card.Text>
              <Button variant="primary" href={this.props.datas.url} target="blank">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </div>
    );
  }
}

export default CarDat;

// let CardDat = ({ datas }) => {
//   return (
//     // console.log(datas.title);
//     <div>
//       <Col>
//         <Card style={{ width: "18rem" }}>
//           <Card.Img variant="top" src={datas.urlToImage} />
//           <Card.Body>
//             <Card.Title>{datas.title}</Card.Title>
//             <Card.Text>{datas.description}</Card.Text>
//             <Button variant="primary" href={datas.url} target="blank">
//               Go somewhere
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     </div>
//   );
// };
