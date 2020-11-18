//app.js
App({
    globalData:{
      isLogin:null,
    },
 
  onLaunch: function () {
    console.log('launch')
    this.checkLogin();
  },
  checkLogin(){
    const token=wx.getStorageSync('TOKEN');
    if(token){
      this.globalData.isLogin=true
      wx.request({
        url: 'http://localhost:3000/api/auth/check_login',
        method:'GET',
        data:{
          token
        },
        success:({statusCode})=>{
          console.log(statusCode);
          if(statusCode!==200){
            this.Login();
          
          }
          else{
           
          }
        },
        fail:(error)=>{
         
        }
      })
    }
    else{
      this.globalData.isLogin=false;
      this.Login();
    }
  },
  Login(){
    wx.login({
      success({code}){
       wx.request({
         url: 'http://localhost:3000/api/auth/send_code',
         method:'POST',
         data:{
           code:code
         },
         success(res){
           console.log(res);
           const token=res.data.token;
           wx.setStorageSync('TOKEN', token)
         },
         fail(error){
           console.log(error);
         }
       })
      }
     })
  },
})
