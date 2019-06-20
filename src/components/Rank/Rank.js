import React from "react";

class Rank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: ""
    };
  }

  componentDidMount() {
    this.generateEmoji(this.props.entries);
  }

  componentDidUpdate(prevProps, prevState) {
    // this life cicle hook trigers everytime the props or the state updates
    if (
      prevProps.entries === this.props.entries &&
      prevProps.name === this.props.name
    ) {
      return null;
    }
    this.generateEmoji(this.props.entries);
  }

  generateEmoji = entries => {
    fetch(
      `https://ilgohnhbp4.execute-api.eu-west-3.amazonaws.com/prod/rank?rank=${entries}`
    )
      .then(response => response.json())
      .then(data => this.setState({ emoji: data.input }))
      .catch(console.log);
  };

  render() {
    return (
      <div>
        <div className="white f3">
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className="white f1">{this.props.entries}</div>
        <div className="white f3">{`Rank Badge: ${this.state.emoji}`}</div>
      </div>
    );
  }
}

export default Rank;
