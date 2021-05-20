mport React from 'react';
 const Navbar = ()=>{
<nav>
    <ul className="left">
        <li> <a href="www.sc">Indian Express</a></li>
    </ul>
    <ul className="right">
        <li><a href="www.sc">
         <span className="shoppingCart"><i class="fas fa-shopping-cart"></i>
         <span className="cartCount">0</span></span>   
            </a></li>
    </ul>
</nav>
 }

 export default Navbar;