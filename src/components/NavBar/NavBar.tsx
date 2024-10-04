import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeMaxOutlinedIcon from "@mui/icons-material/HomeMaxOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import DataObjectOutlinedIcon from "@mui/icons-material/DataObjectOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const FixedNavBar = styled(BottomNavigation)`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  z-index: 1000;
  border-radius: 30px 30px 0 0;
  padding: 40px 0;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
`;

export const NavBar = () => {
  const location = useLocation();

  const [value, setValue] = React.useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <FixedNavBar value={value} onChange={handleChange}>
      <BottomNavigationAction
        label='Главная'
        value='/'
        icon={<HomeMaxOutlinedIcon />}
        component={Link}
        to='/'
      />
      <BottomNavigationAction
        label='Команда'
        value='/team'
        icon={<Diversity1OutlinedIcon />}
        component={Link}
        to='/team'
      />
      <BottomNavigationAction
        label='Статистика'
        value='/stats'
        icon={<DataObjectOutlinedIcon />}
        component={Link}
        to='/stats'
      />
      <BottomNavigationAction
        label='Кейсы'
        value='/cases'
        icon={<HomeRepairServiceOutlinedIcon />}
        component={Link}
        to='/cases'
      />
    </FixedNavBar>
  );
};
