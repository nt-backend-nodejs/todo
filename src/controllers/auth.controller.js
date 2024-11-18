export const authController ={
    register : async function(req, res,next){
        const {name, username, email,password} = req.body
        if(!name || !username || !email || !password){
            return res.status(400).send("Sorry!! malumotlarni toldiring...")
        }
        const data = register(req.body)
    },
    login : async function(req, res,next){
        const {name, username, email,password} = req.body
        if(!name || !username || !email || !password){
            return res.status(400).send("Sorry!! malumotlarni toldiring...")
        }
        const data = login(req.body)
    },

}
