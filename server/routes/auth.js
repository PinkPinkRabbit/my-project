const Router=require('koa-router');
const axios=require('axios');
const JWT = require('jsonwebtoken');
const router=new Router({prefix:"/api/auth"})
const User=require('../model/user')
router.post('/send_code',async(ctx)=>{
    ctx.verifyParams({
        code:'string'
    });
    const appid='wx3303e4f0b422fde9';
    const secret='d5f3783fe2c63fb9e3c4784064ed977a';
    const code=ctx.request.body.code;
    const result = await axios.get(
        `https://api.weixin.qq.com/sns/jscode2session?appid=${appid}&secret=${secret}&js_code=${code}&grant_type=authorization_code`
    );
    console.log(result)
    if(result.status===200){
        const user=await User.findOne({openid: result.data.openid})
        if(user){
            //老用户了
        }else{
            //新用户，需要注册
            const newUser = await new User({openid: result.data.openid}).save();
        }
        const token=JWT.sign({
            openid:result.data.openid
        },'hello world',{expiresIn:'7d'})
        ctx.status = 200;
        ctx.body = {
            message: 'ok',
            token
        };
    }
    else{
        console.log('换取openid失败了');
    }
})


router.get('/check_login',async(ctx)=>{
    ctx.verifyParams({
        token:'string'
    });
    const result=JWT.verify(ctx.request.query.token,'hello world');
    const user = await User.findOne({openid: result.openid});
    if(user){
    ctx.status = 200;
    ctx.body = {
        message: '登录成功'
    }
}else{
    ctx.status = 401;
    ctx.body = {
    message: '登录过期,请重新登录'
    }
    }
})


module.exports=router