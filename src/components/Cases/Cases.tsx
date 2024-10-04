import React, { useEffect } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add"; // Иконка плюса
import { styled } from "@mui/material/styles";
import { cases } from "@/data/cases";

const Block = styled("div")`
  padding: 40px 0;
`;

const CasesWrapper = styled("div")`
  h2 {
    background: linear-gradient(
      91deg,
      #fff -16.56%,
      rgba(255, 255, 255, 0.9) -0.25%,
      rgba(255, 255, 255, 0) 142.87%
    );
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: top;
    background-repeat: no-repeat;
  }
`;

const StyledAccordion = styled(Accordion)({
  marginBottom: "16px",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "none",
  border: "none",
  "&:before": {
    display: "none",
  },
});

const StyledAccordionSummary = styled(AccordionSummary)({
  borderRadius: "30px",
  backgroundColor: "#fff",
  color: "#000",
  borderBottom: "1px solid #fff",
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: "#000",
    backgroundColor: "#fff",
    marginLeft: "40px",
  },
  "& .MuiSvgIcon-root": {
    color: "#000",
  },

  h3: {
    fontSize: "16px",
  },
});

const StyledAccordionDetails = styled(AccordionDetails)({
  backgroundColor: "#fff",
  color: "#000",
  padding: "16px",
  borderRadius: "20px",
});

const SummaryTitle = styled("h3")`
  font-weight: 400;
  font-size: 18px !important;
`;

const DescWrapper = styled("div")`
  font-weight: 400;
  margin-bottom: 20px;

  span {
    font-size: 16px;
  }

  ul {
    margin-top: 10px;

    li {
      position: relative;
      padding-left: 15px;

      &::before {
        content: "-";
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
`;

const StackTitle = styled("h4")``;

const StackList = styled("ul")`
  li {
    position: relative;
    padding-left: 15px;

    &::before {
      content: "-";
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;

export const Cases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Block>
      {cases.map(wrapper => (
        <CasesWrapper key={wrapper.title} sx={{ marginBottom: "32px" }}>
          <h2
            style={{ marginBottom: "40px" }}
            dangerouslySetInnerHTML={{ __html: wrapper.title }}
          />
          {wrapper.childs.map((child, index) => (
            <StyledAccordion key={index}>
              <StyledAccordionSummary expandIcon={<AddIcon color={"white"} />}>
                <SummaryTitle>{child.title}</SummaryTitle>
              </StyledAccordionSummary>
              <StyledAccordionDetails>
                <DescWrapper>
                  <span>{child.desc}</span>
                </DescWrapper>
                {child?.stack && child.stack.length > 0 ? (
                  <>
                    <StackTitle>Стек технологий:</StackTitle>
                    <StackList>
                      {child?.stack.map((tech, idx) => (
                        <li key={idx}>
                          <Typography>{tech}</Typography>
                        </li>
                      ))}
                    </StackList>
                  </>
                ) : null}
              </StyledAccordionDetails>
            </StyledAccordion>
          ))}
        </CasesWrapper>
      ))}
    </Block>
  );
};
