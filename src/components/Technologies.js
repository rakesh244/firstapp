import {Link, Outlet} from 'react-router-dom'
function Technologies(){
    return(
        <div>
           <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link" to="html">Html</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="java">Java</Link>
  </li>
</ul>
<Outlet/>
        </div>
    )
}
export default Technologies