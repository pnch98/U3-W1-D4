import { Component } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: "3",
      elementId: this.props.id,
    },
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.handleValue("createdAt", Date.now());
    console.log(this.state);

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify(this.state.review),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2ZlM2I1MjViYjAwMThlZDA3ZWQiLCJpYXQiOjE3MDMxNjU5MjMsImV4cCI6MTcwNDM3NTUyM30.VUXUi44olcV3-2nfBWch_QUBs1QcEqQz91DH458oAV8",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        this.props.addComment(this.state.review);
        this.setState({
          review: {
            comment: "",
            rate: "3",
            elementId: this.props.id,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  handleValue(propertyName, propertyValue) {
    this.setState({ review: { ...this.state.review, [propertyName]: propertyValue } });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formRate">
          <small>Rate</small>
          <FormRange
            type="number"
            min={0}
            max={5}
            value={this.state.review.rate}
            onChange={(event) => this.handleValue("rate", event.target.value)}
            required
          />
        </FormGroup>

        <FormGroup controlId="formComment">
          <FormControl
            className="mb-2"
            type="text"
            placeholder="Comment"
            value={this.state.review.comment}
            onChange={(event) => this.handleValue("comment", event.target.value)}
            required
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Add comment
        </Button>
      </Form>
    );
  }
}
export default AddComment;
