import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Personal from "./Personal";
import List from "./List";

class Photographers extends Component {
  toName = url => {
    return url
      .split("-")
      .map(name => name[0].toUpperCase() + name.slice(1))
      .join(" ");
  };

  render = () => {
    const { data, match, labels } = this.props;

    return (
      <Fragment>
        <Route
          exact
          path={match.path}
          render={props => <List {...props} data={data} buttonLabel={labels.buttons} />}
        />
        <Route
          path={match.path.concat("/:id")}
          render={props => (
            <Personal {...props} data={data} labels={labels} toName={this.toName} />
          )}
        />
      </Fragment>
    );
  };
}

export default Photographers;

