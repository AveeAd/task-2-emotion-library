import { Header, Brand, Nav } from "./styledComponents/styledComponents";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <Header>
      <Brand>
        <Link to="/">Emotion</Link>
      </Brand>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
