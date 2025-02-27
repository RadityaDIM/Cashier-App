import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu , tambahKeranjang}) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => tambahKeranjang(menu)}>
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
          style={{height: 200, }}
        />
        <Card.Body>
          <Card.Title>{menu.nama} <strong style={{fontSize:17}}>({menu.kode})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
