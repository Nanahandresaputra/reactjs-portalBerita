// import { useEffect, useState } from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import NavigationBar from "./content/navbar";
import CardDat from "./content/card";
import { homePage, pencarian } from "./content/getApi";
import React from "react";

// import { home } from "./content/api";

class Content extends React.Component {
  state = {
    dataGetApi: [],
  };

  componentDidMount() {
    homePage()
      .then((d) =>
        this.setState({
          dataGetApi: d,
        })
      )
      .catch((e) => console.log(e));
  }
  cari = async (q) => {
    if (q.length > 5) {
      let cariData = await pencarian(q);
      this.setState({
        dataGetApi: cariData,
      });
    }
  };
  render() {
    return (
      <div>
        <NavigationBar newsArticles={this.cari} />
        <Container>
          <Row xs={1} sm={1} md={3} xl={3} xxl={4} className="g-4">
            {this.state.dataGetApi.map((datas, i) => (
              <CardDat datas={datas} key={i} />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Content;
