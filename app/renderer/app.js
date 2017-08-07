import React from "react";

import styles from "./style.css";

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.PureComponent {

  componentDidMount() {
    this.viewer = new Cesium.Viewer(this.element);
  }

  componentWillUnmount() {
    this.element = null;
    this.viewer = null;
  }

  element = null
  viewer = null

  render() {
    return (
      <div
        className={styles.root}
        ref={e => { this.element = e; }} />
    );
  }

}
