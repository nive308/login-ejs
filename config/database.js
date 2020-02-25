const mongoose=require('mongoose')

const setupDB=()=>{
    mongoose.connect('mongodb://localhost:27017/july-project-interaction-one',{useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>{
        console.log('connect to db')
    })
    .catch((err)=>{
        console.log('err',err)
    })
}

module.exports=setupDB