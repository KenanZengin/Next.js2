import AddUserForm from './addUserForm'
import UpdateUserForm from './updateUserForm'


const Form = () => {

    const flug = true

   return(
    <div className="container mx-auto py-5">
        {flug ? <AddUserForm /> :<UpdateUserForm /> }
    </div>
   )
}

export default Form