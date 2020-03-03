const handleProfile = (req,res,db)=>{
    const { id } = req.params;
    db.select("*").from("users").where(
        { id: id }
    )
    .then(user => {
        if(user.length > 0){
            res.json(user[0])
        }else{
            res.status(404).json("Kullanıcı Bulunamadı/User not found")
        }
    })
}

module.exports = {
    handleProfile
}