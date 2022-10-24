import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style: none;
  font-size: 1.5rem;
`;
export const ConteinerNav = styled.nav`
  width: 100%;
  height: 6em;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px;
  background-color: #ff3030;
`;
export const ListMember = styled(Link)`
  text-decoration: none;
  font-family: "Tajawal", sans-serif;
  color: white;

  &:hover {
    color: white;
  }
`;
export const DetailList = styled.li`
  font-weight: 300;
  font-family: "Bungee Shade", cursive;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    color: #ff3030;
    transform: scale(1.1);
  }
`;
