<template>
 <div >
  <div class="container header" >
     <b-row align-h="center" align-v="center" >
        <b-col cols="4" class="logo"><img src="/static/login/logo.png"></b-col>
        <b-col cols="8" class="login">欢迎登录</b-col>
    </b-row>   
  </div>

  <div class="bgimg">
    <b-container class="bv-example-row">
      <b-row align-v="center">
        <!-- 展示图 -->
        <b-col class="clothespic"> <img src="/static/login/clothes.png" /> </b-col>
        <!-- 口号 -->
        <b-col>
          <h2 class="slogan center"><img src="/static/login/app.png" /></h2>
          <h2 class="slogan center">买商品上<span class="tianmao">天猫</span></h2>
          <h2 class="slogan center">买服务上<span class="yishang">衣依</span></h2>
          <h6 class="slogan2 center"><span>衣依APP，接单发单就是那么简单</span></h6>
        </b-col>
        <!-- 登录 -->
        <b-col class="login-form center" >
          <keep-alive>
            <!-- 二维码 -->
            <div class="qr-code" v-if="switchToPC">
              <h4>使用衣依APP 扫码安全登录</h4>
              <div id="qr-code">
                <img :src="qrCodeUrl" alt="二维码" class="qr-code-img" />
              </div>
               <b-button @click="refreshQr" variant="primary" class="refresh">刷新二维码框</b-button>
               <h6 class="remind"><span class="scan" ></span>打开手机端 扫一扫登录</h6>

              <div class="switch-btn" @click="swicthFn"></div>
            </div>
            <!-- 账号登录 -->
            <div class="pc" v-else="switchToPC">
              <h4 class="padding-bottom">密码登录</h4>
              <div class="input-group">
                <input class="form-control input-text-indent"
                 v-model="account.name" @focus="focused('请输入账号')" @blur="focused('')"
                  type="text"
                  placeholder="请输入手机号码或者账号" />
                <span class="bg-icon input-account"></span>
              </div>
              <div class="input-group">
                <input class="form-control input-text-indent"
                  v-model="account.password"  @focus="focused('请输入密码')" @blur="focused('')"
                  @keyup.enter="login"
                  type="password"
                  placeholder="请输入密码" />
                  <span class="bg-icon input-secret"></span>
              </div>
              <div >
                <input type="checkbox" value="checked" v-model="account.save" />记住密码
              </div>
              <div class="input-group">
                <span :class="{ err : resFalse }">{{ message }}</span>
              </div>
              <b-button @click="login" variant="primary" class="refresh login-btn">登录</b-button>
              <div class="switch-btn" @click.enter="swicthFn"></div>
              <!-- 提示 -->
              <div class='remind-scan' ></div>
            </div>
          </keep-alive>
        </b-col>
      </b-row>
    </b-container>
  </div>
  
  <Footerinfo></Footerinfo>
  
 </div>
</template>

<script>
// import Footerinfo from "../footer"  
const Footerinfo  =  () => import(/* webpackChunkName: "footer" */ '../footer')
import { mapMutations } from 'vuex'
export default {
  name: 'login',
  components: { Footerinfo },
  data() {
    return {
      myToggle: false,
      switchToPC: false,
      account: { name: '', password: '',save : false},
      qrCodeUrl : "",
      saveInfo:false,
      message: '',
      resFalse: false,
      customCode: ''
    }
  },
  created(){    
    this.refreshQr()
  },  
  mounted(){
    if(this.$cookies.get("yiyiphone")){
        this.$router.push('/login')
    }
  },
  methods:{
    ...mapMutations([
      'setSavePassword',
      'setCustomerInfo'
    ]),
    focused (val){
      this.message = val
      this.resFalse = false
    },
    login(){  
      let args = {
        phone : this.account.name,
        password: this.account.password
      }
      this.LoginCheck(args)
      .then((res)=>{
            if(res.data.status == 200){
              this.setCustomerInfo({
                avatar: res.data.content.avatar,
                id: res.data.content.id
              });
              if(this.account.save){
                this.setSavePassword(true)
              }
              this.$cookies.set('yiyiavatar', res.data.content.avatar, 60*1000);
              this.$cookies.set('yiyiphone', res.data.content.phone, 60*1000);
              this.account= { name: '',password:'', save : false}
              this.$router.push("/")
            }else{
              this.message= res.data.msg
              this.resFalse = true
            }
      })
    },
    refreshQr(){
      this.Qrcode().then((res)=>{
        //console.log(res)
          if(res.status == 200){
            this.qrCodeUrl =res.data
            this.customCode = res.headers["custom-code"]
          }         
      });
    },
    loopQr(){
      let args = {code: this.customCode}
      let timer = setInterval(()=>{
          if( !this.switchToPC ){
             clearInterval(timer)
          }
          this.QrcodeLoop(args).then((res)=>{
                // console.log(res)
                if(res.data){
                 this.qrcodeLogin()
                 clearInterval(timer)
                }      
            });
      },3000)
    },
    qrcodeLogin(){
      let args = {code: this.customCode}
      this.QrcodeLogin(args).then((res)=>{
          // console.log(res)
          if(res.status == 200){
            if(res.data.status == 200){
              this.setCustomerInfo({
                avatar: res.data.content.avatar,
                id: res.data.content.id
              });
              if(this.account.save){
                this.setSavePassword(true)
              }
              this.$cookies.set('yiyiavatar', res.data.content.avatar, 10000*60);
              this.$cookies.set('yiyiphone', res.data.content.phone, 10000*60);
              this.$router.push("/")
            }else{
            }       
          }         
      });
    },
    swicthFn(){
      this.switchToPC = !this.switchToPC
      if(this.switchToPC){
        this.loopQr()
      }
    }
  }
}
</script>

<style scoped>
  .header{
    padding: 30px;
    height: 110px;
  }
  .logo {
    text-align: right;
    color: rgb(148, 46, 234);
    padding-right: 34px;
    border-right: 1px solid #e0e0e0;
  }
  .login{
    font-size: 18px;
    padding-left: 34px;
    font-family: "Microsoft YaHei";
    color: rgb(148, 46, 234);
  }
  .bgimg{
    padding:  60px 0;
    background-image: url(/static/login/main-bg.jpg);
    background-repeat: no-repeat;  
    background-size: 100% 100%;
  }

  .body-block { 
    padding: 0 60px;  
    background-color: rgb(255, 123, 123);
    width: 100%;
  }

  .clothespic{
    padding: 0 60px;  
    width: 100%;
  }
  .clothespic img{
    position: relative;
    display: inline-block;
    right: -90px;
  }

  .tianmao{
    color: #ff0036;
  }
  .yishang{
    color: rgb(148, 46, 234);
  }

  .slogan {
    font-size: 50px;
    color: rgb(51, 51, 51);
    line-height: 1.2;
    text-align: center;
  }
  .slogan2 {
     width: 100%;
    margin-top: 10px;
    text-align: center;
    background: #111;
    height: 20px；
  }
  .slogan2  span{  
    width: 100%;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    color: rgb(255, 255, 255); 
  }
  .foot-info{
    text-align: center;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    color: rgba(135, 132, 132, 0.77);
  }
  .foot-info span{
    display: inline-block;
    height: 1.2em;
    margin: 10px;
    font-weight: 700;
  }

  .qr-code, .pc{
    padding-top: 40px;
    position: relative;
    width: 352px;
    height: 392px;
    background-image: url(/static/login/pc-qr.jpg);  
    background-repeat: no-repeat;   
    background-position: 0 0;
  }
  .pc{
    padding: 40px;
    text-align: left;
    background-position: -352px 0;
  }
  .switch-btn{
    position: absolute;
    right: 0px;
    bottom: 0;
    height: 60px;
    width: 60px;
    cursor: pointer;
  }
  #qr-code .qr-code-img{
    padding: 20px;
    width: 180px;
    height: 180px;
    border: 1px solid rgba(244,244,244,1);  
  } 
  .refresh{
    width: 180px;
    height: 36px;
    margin: 10px;
    border-color: rgb(148, 46, 234);
    background: rgb(148, 46, 234);
  }
  .remind {
    font-size: 12px;
    color: rgb(51, 51, 51);  
  }
  .remind-scan{
    position: absolute;
    display: none;
    width: 185px;
    height: 95px;
    right: -171px;
    bottom: 41px;
    background-image: url(/static/login/remind-scan.png);
    background-repeat: no-repeat; 
    background-size: 100% 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }
  .pc:hover .remind-scan{
    display: block;
    opacity: 1;
  }
  .scan{
    display: inline-block;
    vertical-align: middle;
    width: 29px;
    height: 29px;
    background-image: url(/static/login/scan.jpg);
    background-repeat: no-repeat;  
    background-position:0px -4px;
  }

  .form-control{
    font-size: 15px;
  }
  .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #942eea;
      outline: none;
      box-shadow: 0 0 0 0.2em rgba(148, 46, 234, 0.15);
  }
  .input-group{
    height: 35px;
    margin-bottom: 10px;
  }
  .input-group h4{
    font-size: 20px;
  }
  .input-group span{
    color: #942eea;
  }
  .input-group input[type="checkbox"]{
      margin-right: 5px;
      height: 1.7rem;
  }
  .login-btn{
    width: 100%;
    margin: 0px; 
    cursor: pointer;
  }
  .input-account{
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    background-position: -90px 6px;
    z-index: 3;
    opacity: 0.5;
    transition: opacity 0.3s;
  }
  .input-secret{
    position: absolute;
    top: 0;
    left: 0;
    height: 32px;
    width: 32px;
    background-position: -48px 3px;
    z-index: 3;
    opacity: 0.4;
     transition: opacity 0.3s;
  }
  .input-group:hover .input-account,
  .input-group:hover .input-secret{
    opacity: 0.8;
  }
  .input-text-indent{
    text-indent: 24px;
  }
  span.err{
    text-indent: 1em;
    color: #e60a45;
    font-style:italic;
  }
  span.err:before{
    content: '*';
  }
</style>