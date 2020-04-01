import React, { Component } from "react";
import { connect } from "react-redux";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      hovered: false,
      time: 4
    };
  }
  render() {
    return (
      <div
        style={{
          height: 45,
          marginTop: 5,
          display: "flex",
          backgroundColor:
            this.state.hovered || this.props.isHighlighted ? "yellow" : "",
          justifyContent: "center",
          alignItems: "center"
        }}
        onClick={() => {
          this.setState({
            selected: !this.state.selected,
            time: this.props.selectedNote
          });
          this.props.onClick(this.state.selected, this.props.selectedNote);
        }}
        onMouseEnter={() => {
          this.setState({ hovered: true });
        }}
        onMouseLeave={() => {
          this.setState({ hovered: false });
        }}
      >
        {this.state.selected ? this.state.time : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedNote: state.selectedNote
  };
};

export default connect(mapStateToProps)(Note);
