import React, { Component } from "react";
import PhotographerCard from "./PhotograperCard";
import { Row, Col } from "reactstrap";

export default class List extends Component {
  render = () => {
    const { data, match } = this.props;
    return (
      <Row>
        {data.map(photographer => (
          <Col md="3" key={photographer.id}>
            <PhotographerCard route={match.url} data={photographer} />
          </Col>
        ))}
      </Row>
    );
  };
}
