import { useReducer } from "react"
import { BiPlus } from "react-icons/bi"
import Success from "./success"
import Bug from "./bug"

const formReducer = (state,event)=>{
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}



const AddUserForm = () => {
    const [formData,setFormData] = useReducer(formReducer,{})

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.keys(formData).length == 0) return console.log("dont send form");
        console.log(formData);
    }

    // if(Object.keys(formData).length > 0 ) return <Success message={"Data added"}></Success>
    if(Object.keys(formData).length > 0 ) return <Bug message={"error"}></Bug>


  return (
    <form className='grid lg:grid-cols-2 w-4/6 gap-5 ' onSubmit={handleSubmit}>
        <div className="input-type">
            <input type="text" name='firstname' onChange={setFormData} placeholder='FirstName' className='border w-full px-5 py-3 focus:outline-none rounded-md' />
        </div>
        <div className="input-type">
            <input type="text" name='lastname'  onChange={setFormData} placeholder='lastName'  className='border w-full px-5 py-3 focus:outline-none rounded-md' />
        </div>
        <div className="input-type">
            <input type="text" name='email'     onChange={setFormData} placeholder='Email'     className='border w-full px-5 py-3 focus:outline-none rounded-md' />
        </div>
        <div className="input-type">
            <input type="text" name='salary'    onChange={setFormData} placeholder='Salary'    className='border w-full px-5 py-3 focus:outline-none rounded-md' />
        </div>
        <div className="input-type">
            <input type="date" name='date'      onChange={setFormData} placeholder='Salary'    className='border px-5 py-3 focus:outline-none rounded-md ' />
        </div> 

        <div className='flex gap-10 items-center'>
            <div className="form-check">
                <input type="radio" value="active"   onChange={setFormData} id='radioDefault1' name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-green-500
                checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer' />
                <label htmlFor="radioDefault1" className='inline-block text-gray-800'>
                    Active
                </label>
            </div>
            <div className="form-check">
                <input type="radio" value="Inactive" onChange={setFormData} id='radioDefault2' name="status" className='form-check-input appearance-none rounded-full h-4 w-4 border-gray-300 bg-white checked:bg-green-500
                checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-contain float-left mr-2 cursor-pointer' />
                <label htmlFor="radioDefault2" className='inline-block text-gray-800'>
                    Inactive
                </label>
            </div>
        </div>

        <button className='flex justify-center text-md w-2/6 bg-green-500 px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500'>
            Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>
    </form>
  )
}

export default AddUserForm