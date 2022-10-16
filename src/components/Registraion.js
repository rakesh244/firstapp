import axios from 'axios';
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
//import userApi from '../../APIS/userApi';
function Registraion(){
    const {register,handleSubmit,formState:{errors}}=useForm();
    // const onFormSubmit=(userdata)=>{
    //     console.log(userdata)
    // }
    let [img,setImg]=useState(null);

    const onImageSelect=(event)=>{
        setImg(event.target.files[0]);
        console.log(event.target.files[0]);
        console.log(event);
    };
    const navigate=useNavigate();
    const onFormSubmit=(userobj)=>{
        let formData=new FormData();
        formData.append("userObj",JSON.stringify(userobj));
        formData.append('photo',img);
        axios.post("http://localhost:4000/user-api/create-user",formData)
        .then(response=>{
            console.log(userobj);
            //alert(response.data.message);
            //console.log(response);
            if(response.data.message=="user inserted"){
                navigate('/Login');
            }
        })
        .catch(error=>{
            console.log(error)
            alert("somthing went wrong");
        })
    }
    return(
        <div className="row ">
            <div className="col-11 col-sm-8 col-md-6 mx-auto ">
           <form onSubmit={handleSubmit(onFormSubmit)}>
               <div className="mb-3">
                     <label htmlFor="un">UserName</label>
                     <input type="text" id="un" className="form-control" {...register("username",{required:true,minLength:4})}/>
                     {errors.username?.type==='required' &&<p className="text-danger">* Username is required</p>}
                     {errors.username?.type==='minLength' &&<p className="text-danger">* Length is 4</p>}
               </div>
               <div className="mb-3">
                     <label htmlFor="pswd">Password</label>
                     <input type="text" id="pswd" className="form-control" {...register("password",{required:true,maxLength:4})}/>
                     {errors.username?.type==='required' &&<p className="text-danger">* password is required</p>}
                     {errors.username?.type==='maxLength' &&<p className="text-danger">* Length is 4</p>}
               </div>
               <div className="mb-3">
                     <label htmlFor="email">Email</label>
                     <input type="email" id="email" className="form-control" {...register("email")}/>
               </div>
               <div className="mb-3">
                     <label htmlFor="pic">Profile pic</label>
                     <input type="file" id="pic" className="form-control" {...register("photo",{required:true})} onChange={(event)=>onImageSelect(event)}/>
               </div>
               {/* <div className="mb-3">
                     <label htmlFor="dob">DOB</label>
                     <input type="date" id="dob" className="form-control" {...register("DOB")}/>
               </div> */}
               {/* <div className="mb-3 ">
                   <label>Gender</label>
                   <div className="d-flex justify-centent-around">                  
                        <div className="form-check form-switch">
                       <label htmlFor="male" className="form-check-label">Male</label>
                        <input type="radio" id="male" className="form-check-input"{...register("gender")} value="male"/>
                   </div>
                   <div className="form-check form-switch">
                       <label htmlFor="female" className="form-check-label">Female</label>
                        <input type="radio" id="female" className="form-check-input"{...register("gender")} value="male"/>
                   </div>
                   </div> 
                   </div>*/}

               
               {/* <div className="mb-3">
                   <label htmlFor="branch">Branch</label>
                   <select id="branch" className="form-select" {...register("branch")}>
                        <option value="cse">CSE</option>
                        <option value="it">IT</option>
                        <option value="civil">CIVIL</option>
                   </select>

               </div> */}
               {/* <div className="mb-3">
                     <label htmlFor="feedback">Feedback</label>
                    <textarea id="feedback" row="5" className="form-control" {...register("feedback")}></textarea>
               </div> */}
               <button type="submit" className="btn btn-success w-100">Submit</button>
           </form>
           </div>
        </div>
    )
}
export default Registraion