import styled from "styled-components";

export const Container = ({ children = null, className = "" }) => {
  const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1268px;
    padding: 0 20px;
  `;

  return <Container className={className}>{children}</Container>;
};
