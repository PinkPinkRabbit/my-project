const http=require('http');
const app=require('./app');
const mongoose=require('mongoose')
const server=http.createServer(app.callback());

mongoose.connect(
    'mongodb://localhost:27017/xiaochengxu',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    },
    (error)=>{
        if(error){
            console.log('连接失败');
        }
        else{
            console.log('数据库连接成功');
            server.on('error',(error)=>{
                console.log('服务器启动失败');
            })
            
            server.listen(3000,'localhost',()=>{
                console.log('服务器启动成功');
            })
        }
    }
)
