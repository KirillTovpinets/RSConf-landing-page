import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

class PhotograperCard extends Component {
  toUrl = name => {
    return name.person
      .split(" ")
      .map(name => name.toLowerCase())
      .join("-");
  };

  render = () => {
    const { data, route, btnLabel } = this.props;
    const url = this.toUrl(data);

    return (
      <div>
        <Card
          style={{
            height: "25rem",
            marginBottom: "3rem"
          }}
        >
          <CardImg top style={{ height: "60%" }} src={data.avatar} />
          <CardBody style={{ height: "40%" }}>
            <CardTitle
              style={{ fontSize: "18px", fontWeight: "bold", height: "70%" }}
            >
              {data.person}
            </CardTitle>
            <Link to={route.concat(url)}>{btnLabel}</Link>
          </CardBody>
        </Card>
      </div>
    );
  };
}

export default PhotograperCard;

