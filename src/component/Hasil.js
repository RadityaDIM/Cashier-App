import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import { ListGroup, Badge, Button } from "react-bootstrap";

export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Hasil</strong>
        </h4>
        <hr />
        {keranjangs.length !== 0 && (
          <ListGroup>
            {keranjangs.map((menuKeranjang) => (
              <ListGroup.Item key={keranjangs.id} >
                <Row>
                  <Col xs="2">
                  <h4>
                    <Badge bg="warning" text="dark"> {menuKeranjang.jumlah}</Badge>
                  </h4>
                  </Col>

                  <Col>
                    <h6>{menuKeranjang.product.nama}</h6>
                    <p>Rp. {menuKeranjang.product.harga}</p>
                  </Col>
                  <Col>
                    <h6><strong>Rp. {menuKeranjang.total_harga}</strong></h6>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}
