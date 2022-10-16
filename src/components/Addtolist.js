import { useState } from 'react'
import {useForm} from 'react-hook-form'
function Addtolist(){
    const {register,handleSubmit,formSate:{errors}}=useForm()
    const [todos,setTodos]=useState([])
    const onFormSubmit=(todoobj)=>{
        console.log(todoobj)
        setTodos([...todos,todoobj.todo])
    }
    return(
        <div className="row row-11 row-sm-10 row-md-7">
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="todo">Enter a task</label>
                    <input type="text" id="todo" className="form-control" {...register("todo" ,{required:true})}/>
                     {errors.todo?.type==='required' &&<p className="text-danger">* task is required</p>}
                    </div>
                    <button type="submit" className="btn btn-success w-100">Submit</button>
               
            </form>

        </div>
    )
}
export default Addtolist