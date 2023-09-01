import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
        <h1>
          <Link style={{all:"unset", textAlign:"center"}} to="/">MESTIZO  <br/> <samp style={{color: "yellow", textAlign:"center"}}>HUMMUS</samp></Link>
        </h1>

        <ul style={{ display: "flex", justifyContent: "space-around", alignItems: "center" , width: '100%', textDecoration: "none" }}>
          <li style={{textDecoration: "none", listStyle: "none", color: "black", all: "unset"}}>
            <NavLink style={{textDecoration: "none", listStyle: "none", color: "black", all: "unset"}} to="/category/hummus">Hummus</NavLink>
          </li>
          <li style={{textDecoration: "none", listStyle: "none", color: "black", all: "unset"}}>
            <NavLink style={{textDecoration: "none", listStyle: "none", color: "black", all: "unset"}} to="/category/tahini">Tahini</NavLink>
          </li>
          <li style={{textDecoration: "none", listStyle: "none", color: "black", all: "unset"}}>
            <NavLink style={{textDecoration: "none", listStyle: "none", color: "black", all: "unset"}} to="/category/garbanzo">Garbanzo</NavLink>
          </li>
        </ul>
      </nav>

      <div>CartWidget</div>
    </div>
  );
};

export default Navbar;