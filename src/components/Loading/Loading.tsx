import React from "react";
// import { Spin } from "antd";
// import styled from "styled-components";
// import { TestIDs } from "../../../testing";

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   text-align: center;
// `;

interface LoadingProps {
  title?: string;
}

const Loading = ({ title }: LoadingProps) => (
  // <Container>
  //   <Spin
  //     style={{ margin: "0 auto" }}
  //     size="large"
  //     tip={title}
  //     data-testid={TestIDs.spinner}
  //   />
  // </Container>
  <>Loading...</>
);

export default Loading;
