import { clerkClient } from '@clerk/express';

export const protectRoute = async( req, res, next) => {
    if(req.auth.userId){
        return res.status(401).json({message: "Unautthorised - you must be logged in"});
    }

    next();
};

// create function for check user is admin or not
export const requireAdmin = async(req, res, next) => {
    try {
        const currentUser = await clerkClient.user.getUser(req.auth. userId);
        const isAdmin = process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress?.emailaddress;

        if(!isAdmin){
            return res.status(403).json({ message: "Unauthorised - you must be an admin"});
        }

        next();
    } catch (error) {
      next(error);
    }
};