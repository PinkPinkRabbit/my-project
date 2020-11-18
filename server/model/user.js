const {model}=require('mongoose')

module.exports = model('user', {
    openid: String,
    nickName: {
    type: String,
    required: false
    },
    city:{
    type:String,
    required:false
    },
    gender:
    {
    type:Number,
    required:false,
    } ,
    language:{
    type:Number,
    required:false,
    },
    city: {
        type:String,
        required:false
    },
    province: {
        type:String,
        required:false
    },
    country:
    {
        type:String,
        required:false
    } ,
    avatarUrl:{
        type:String,
        required:false
    }, 
    token:{
        type:String,
        required:false
    },
})