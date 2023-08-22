import React from 'react'
import Navbar from '../../components/Navbar';
import BreadCrumb from "../../components/Breadcrumb";
import Table from "../../components/TableWithAction";
import { Col, Container, Row } from 'react-bootstrap';
import SearchInput from '../../components/SearchInput';
import SelectBox from '../../components/SelectBox';
import Button from "../../components/Button";

function OrderService() {
  return (
    <>
    <Navbar />
    <Container className="mt-3">
      <BreadCrumb textSecound={"OrderService"} />
      <Row>
        <Col>
          <SearchInput />
        </Col>
        <Col>
          <SelectBox
            placeholder={"Masukan pencarian Departement"}
            name="category"
            value={""}
            options={""}
            handleChange={""}
          />
        </Col>
      </Row>

      <Table
        status={""}
        thead={[
            "Title",
            "Image",
            "Description",
            "Aksi"
        ]}
        data={""}
        tbody={[
            "Title",
            "Image",
            "Description",
            "Aksi"
        ]}
        confirmationUrl={`/work-order-page/confirmation-wo`}
        Detail={`/work-order-page/history-wo`}
        //editUrl={`/register-page/edit-user`}
        customAction={(id, status = "") => {
          return (
            <Button
              className={"mx-2"}
              variant="primary"
              size={"sm"}
              action={""}
            >
              Change Status
            </Button>
          );
        }}
      />

    </Container>
    </>
  )
}

export default OrderService