import React from "react";

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? (
      <h1 style={{ color: "red" }}>OOPs! Something Went Wrong!</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorHandler;
