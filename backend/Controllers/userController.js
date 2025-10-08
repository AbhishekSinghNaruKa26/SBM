



export const userRegisterController = async(req,res)=>{
    try {
        
        const {userName , email , password , mobile }= req.body;

    } catch (error) {
        return res.status(500).json({
            message:error || error.message,
            success:false,
            error:true
        })
    }
}