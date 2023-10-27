import { Outlet, } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Layout = () =>{
 return <div>
   <Navbar bg="dark" variant="dark" expand="lg">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav.Item>
      </Nav >
   </Navbar>
   
    <hr />
    <Outlet />
 </div>;
}

export default Layout;