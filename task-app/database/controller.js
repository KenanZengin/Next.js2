import Kenan from '../model/user'



export async function getUsers(req, res){
    try {
        const users = await Kenan.find({})

        if(!users) return res.status(404).json( { error: "Data not Found"})
        
        res.send().json(users);


    } catch (error) {
        res.status(404).json( { error : "Error While Fetching Data"})
    }
}