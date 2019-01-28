import React, { Component, Fragment } from "react";
import PhotographerCard from "./PhotograperCard";
import { Row, Col, Input } from "reactstrap";

class List extends Component {
  state = { value: "" };

  change = e => {
    this.setState({ value: e.target.value });
  };

  render = () => {
    const { data, match } = this.props;
    const inputValue = this.state.value.toLocaleLowerCase();
    const photograper = data
      .filter(
        x =>
          x.person.toLocaleLowerCase().includes(inputValue) ||
          x.motherland.toLocaleLowerCase().includes(inputValue)
      )
      .map(photographer => (
        <Col md="3" key={photographer.id}>
          <PhotographerCard route={match.url} data={photographer} />
        </Col>
      ));
    return (
      <Fragment>
        <Input
          type="search"
          name="search"
          placeholder="Photograper name or place"
          style={{ marginBottom: "30px", width: "300px" }}
          onChange={this.change}
          value={this.state.value}
        />
        <Row>{photograper}</Row>
      </Fragment>
    );
  };
}

export default List;
