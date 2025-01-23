import { User } from "../models/user.model.js"
export const authcallback = async (req, res, next) =>{
    try{
        const { id, firstName, lastName, imageUrl} = req.body;
        // check if user already exists
        const user = await UserFindOne({clerkId: id});

        if(!user){
            // signup 
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl
            })
        }
        res.status(200).json({success: true})
    }catch (error) {
        console.log("error in auth callback", error);
        next(error);
    }
}
