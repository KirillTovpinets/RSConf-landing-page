import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

class PhotograperCard extends Component {
  toUrl = name => {
    return name.person
      .split(" ")
      .map(name => name.toLowerCase())
      .join("-");
  };

  render = () => {
    const { data, route } = this.props;
    const url = this.toUrl(data);

    return (
      <div>
        <Card
          style={{
            height: "25rem",
            width: "230px",
            marginBottom: "3rem",
            position: "relative"
          }}
        >
          <CardImg top style={{ height: "60%" }} src={data.avatar} />
          <CardBody>
            <CardTitle style={{ fontSize: "14px", fontWeight: "bold" }}>
              {data.person}
            </CardTitle>
            <CardText style={{ fontSize: "12px" }}>{data.motherland}</CardText>
            <Link
              to={route.concat(url)}
              style={{ position: "absolute", bottom: "10px" }}
            >
              Подробнее
            </Link>
          </CardBody>
        </Card>
      </div>
    );
  };
}

export default PhotograperCard;