import { useState, FC, MouseEvent } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface IProps {
  title: string;
}

const StyledButton = styled(Button)`
  cursor: pointer;
  background-color: #1976d2;
  color: white !important;
  margin: 0 !important;
  padding: 0 !important;

  span {
    background-color: transparent !important;
  }
`;

const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: #fff;
    margin-top: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const StyledMenuItem = styled(MenuItem)`
  &:hover,
  &:focus {
    color: red;
    background-color: #fff !important;
  }

  span {
    position: static;
  }
`;

export const DropDownMenu: FC<IProps> = ({ title = "" }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        id='basic-button'
        aria-controls={open ? "basic-dropDownMenu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
      </StyledButton>
      <StyledMenu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <StyledMenuItem>Profile</StyledMenuItem>
        <StyledMenuItem>My account</StyledMenuItem>
        <StyledMenuItem>Logout</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};
