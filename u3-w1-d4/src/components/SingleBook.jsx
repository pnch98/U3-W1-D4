import { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  switchState = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <Card
        className="mb-3"
        style={
          this.state.selected ? { border: "2px solid lightblue", backgroundColor: "lightblue" } : { border: "none" }
        }
      >
        <div className="overflow-hidden" style={{ height: "300px" }} onClick={this.switchState}>
          <Card.Img variant="top" src={this.props.img} />
        </div>
        <Card.Body
          style={{ height: "200px" }}
          className="d-flex flex-column justify-content-between align-items-center"
        >
          <div>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.price}$</Card.Text>
          </div>
          <Button variant="primary">Buy</Button>
        </Card.Body>
        {this.state.selected && <CommentArea id={this.props.id} />}
      </Card>
    );
  }
}

export default SingleBook;
