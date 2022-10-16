import {useForm} from 'react-hook-form'
import {useSelector,useDispatch} from 'react-redux'
import {userLogin} from '../slice/userslice'
function Login(){

    const {register,handleSubmit,formState:{errors}}=useForm();
    let {userObj,isError,isLoading,isSuccess,errMsg}=useSelector(state=>state.user)
    let dispatch=useDispatch();
    const onFormSubmit=(userCredentialsObject)=>{
        console.log(userCredentialsObject);
    dispatch(userLogin(userCredentialsObject));
    };
    return(
        <div className="row ">
        <div className="col-11 col-sm-8 col-md-6 mx-auto ">
       <form onSubmit={handleSubmit(onFormSubmit)}>
           <div className="mb-3">
                 <label htmlFor="un">UserName</label>
                 <input type="text" id="un" className="form-control" {...register("username")}/>
   
           </div>
           <div className="mb-3">
                 <label htmlFor="pswd">Password</label>
                 <input type="text" id="pswd" className="form-control" {...register("password")}/>
              
           </div>
           <button type="submit" className="btn btn-success w-100">Submit</button>
       </form>
       </div>
    </div>
    )
}
export default Login