import React from 'react';
import {Routes,Route, NavLink, Navigate, useNavigate} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Contactus from './components/Contactus'
import Technologies from './components/Technologies'
import Html from './components/Html'
import Java from './components/Java'
import Register from './components/Registraion'
import {useSelector,useDispatch} from 'react-redux'
import {clearLoginStatus} from './slice/userslice'
// import Addtolist from './components/Addtolist'
// import Todolist from './components/Todolist'
// import Todocount from './components/Todocount'
function App() {
    

//   let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(state=>state.user)
//   let dispatch=useDispatch();
//   let navigate=useNavigate()
//   const userLogout=()=>{
// localStorage.clear();
// dispatch(clearLoginStatus());
// navigate('/login')
//   }
  return(
  <div className="container  mt-5">
    {/* <div>{
      isSuccess!==true ?(
 <> */}
    <nav className="navbar navbar-expand-sm bg-light ms-auto ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MyAppr</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="register">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="contactus">Contactus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="technologies">Technologies</NavLink>
        </li>
      </ul>
    </div>
  </div>
  </nav>
{/* </nav>
</>
      ): (
        <>
        <nav className="navbar navbar-expand-sm bg-light ms-auto ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyAppr</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-success" onClick={userLogout}>LogOut</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
      )}
</div> */}


      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/technologies" element={<Technologies/>}>
          <Route path="html" element={<Html/>}/>
          <Route path="" element={<Navigate replace to="html"/>}/>
          <Route path="java" element={<Java/>}/>

        </Route>
      </Routes>
  </div>
// {/* <div className="container text-center mt-5">
//   <div className="row">
//     <h1>Rakesh</h1>
//     <div className="col-sm-4">
//         <Addtolist/>
//     </div>
//     <div className="col-sm-4">
//         <Todocount/>
//     </div> 
//     <div className="col-sm-4">
//         <Todolist/>
//     </div>
//    </div>

// </div> */}
  )
}
  

export default App;
