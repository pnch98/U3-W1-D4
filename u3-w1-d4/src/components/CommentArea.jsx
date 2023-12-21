import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2ZlM2I1MjViYjAwMThlZDA3ZWQiLCJpYXQiOjE3MDMxNjU5MjMsImV4cCI6MTcwNDM3NTUyM30.VUXUi44olcV3-2nfBWch_QUBs1QcEqQz91DH458oAV8",
    },
  };
  fetchComments = async (id, options) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, options);
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: data });
      }
    } catch (err) {
      console.log(err);
    }
  };
  componentDidMount() {
    this.fetchComments(this.props.id, this.options);
  }
  addComment(newComment) {
    console.log(newComment);
    this.setState({ comments: { ...this.state.comments, newComment } });
  }
  render() {
    return (
      <div className="bg-white p-2 mb-3">
        <AddComment id={this.props.id} addComment={this.addComment} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2ZlM2I1MjViYjAwMThlZDA3ZWQiLCJpYXQiOjE3MDMxNjU5MjMsImV4cCI6MTcwNDM3NTUyM30.VUXUi44olcV3-2nfBWch_QUBs1QcEqQz91DH458oAV8
