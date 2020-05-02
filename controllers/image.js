
const Clarifai = require('clarifai');
const app = new Clarifai.App({apiKey: '77b1488d057a43e09bb11a45ef9724f4'});
const handleApiCall = (req,res) => {
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", req.body.input)
      /* .then(data => console.log) */
      .then(data => res.json(data))
      .catch(err => { res.status(404).json("cannot handleApiCall")})
}



const handleImage = (req,res,db)=>{
    const { id } = req.body;
    db("users")
    .where('id', '=', id)
    .increment("entries", 1)
    .returning("entries")
    .then(entries => {res.json(entries[0])})
    .catch(err => {res.status(400).json("Hata/Error")})
}

module.exports = {
    handleImage,
    handleApiCall
}