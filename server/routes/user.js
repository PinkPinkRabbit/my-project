const Router = require("koa-router");
const User = require('../model/user');
const JWT = require('jsonwebtoken');

const router = new Router({ prefix: "/api/user" });

router.post('/set_userinfo', async (ctx)=>{
    ctx.verifyParams({
        // nickName: String,
        // gender: Number,
        // language: String,
        // city: String,
        // province: String,
        // country: String,
        // avatarUrl: String,
        // token: String,
    });
    const result = JWT.verify(ctx.request.body.token, 'hello world');
    const user = await User.deleteOne({openid: result.openid});
    if(user){
        const newUser = await new User(
            {openid: result.openid,
            nickName:ctx.request.body.nickName,
            city:ctx.request.body.city,
            country:ctx.request.body.country,
            province:ctx.request.body.province
        }
            ).save();
    }
    ctx.status = 200;
        ctx.body = {
            message: 'ok',
        };
})


module.exports = router;