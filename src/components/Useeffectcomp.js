import {useState,useEffect} from 'react'
import axios from 'axios';
function Useeffectcomp(){
    let [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>setUsers(response.data))
        .catch(err=>console.log(err.message))
    },[])
    return(
        <div className="container">
            {users.length===0 && <p className="display-1 text-danger">Users not found</p>}
            {users.length!==0 &&
            <table className="table text-center">
                <thead>
                    <td>UserId</td>
                    <td>Id</td>
                    <td>Title</td>
                </thead>
                <tbody>
                    {
                        users.map((userobj)=><tr key={userobj.id}>
                            <td>{userobj.userId}</td>
                            <td>{userobj.id}</td>
                            <td>{userobj.title}</td>
                        </tr>)
                    }
                </tbody>
            </table>
} 
        </div>
    )
}
export default Useeffectcomp;