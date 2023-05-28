import { Link } from "react-router-dom";

let links = [
    {path : '/', title : 'Home'},
    {path : '/about', title : 'About'},
    {path : '/contact', title : 'Contact'},
    {path : '/login', title : 'Login'},
    {path : '/products', title : 'Products'}
]

export default function Navbar(){
    return(
        <div style={{display : 'flex' , justifyContent : 'space-around', margin : '10px'}}>
            {links.map(el => 
              <Link key={el.path} to={el.path}>{el.title}</Link>    
            )}
        </div>
    )
}