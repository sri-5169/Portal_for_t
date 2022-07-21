import User from "../model/user_schema.js";

export const UserCounter = async (request,response) => {
    
    User.countDocuments().then((count_documents) => {
        console.log(count_documents);
        return response.status(200).json({
            message : 'Successfully counted',
            count : count_documents,
          });
    }).catch((err) => {
        response.status(500).json({ msg: "Error while counting the users" });
    });
}
