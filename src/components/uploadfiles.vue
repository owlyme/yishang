<template>
 <div >
  <ul class="clearfixed">
    <!-- default image -->
    <li class="img-li" v-if="defaultImg">
      <img :src="defaultImg" @click="showBig(defaultImg)" />
    </li>
    <li class="img-li" v-if="defaultImg2">
      <img :src="defaultImg2" @click="showBig(defaultImg2)" />
    </li>

    <!-- uploaded image/images -->
    <li class="img-li" v-for="(img, index) in computedList" :key="index">
      <img :src="img" class="" @click="showBig(img)"/>
      <span class="top-right" @click="handleDeleteImg(index)" >
        <img src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhFBMVEX/////4eH/3t7/WVn/AwP/AgL/sbH/DQ3/DAz/pqb/kJD/jo7/qKj/Wlr/WFj/4OD/39//p6f/jIz/paX/3d3/h4f/Rkb/HBz/Bwf/DAz/KCj/R0f/AAD/AQH/GRn/enr/FBT/iIj/////09P/FRX/1NT/Gxv/Fhb/Bgb+Bgb/Ghr/BQX6OfJ6AAAAFXRSTlMAHiKn/f1O8/NacHJYpacgIFh0WiJkiCngAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+IBDw8YJEcfEnoAAADESURBVCjPdVKJFoIgEFwzy8o8KsxyzQup9P//L2xVJGMeD9gZYA8WgGCx+Jrc7ilbwRyWvcYBjm0pfrPFGdzdyO8d1JAdiPcy/EHmfd93cQG393PEP/ABAnLwyIt+KfIHxRZASUfyquaIvK5ysktIacMbqcip4WSnIHBSGjmegykgQaUoHl/w1gSuBONTseJ151O4PSWVKdyQEmzHBFtKMATwDSUxFxGiZdkjw0edDF97njWDP11yfEvvExaLrhMxuwzEB3AXMzQf9NL7AAAAAElFTkSuQmCC" />
      </span>
    </li>
    <el-upload class="avatar-uploader" 
      
      multiple
      :action="actionUrl"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"> 
      <span class="avatar-uploader-text">点击上传</span>
    </el-upload>
  </ul>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
 export default {
    name: 'uploadfiles',
    props:{
      oneImage: {
        type: Boolean,
        default: false
      },
      getUploadUrl: {
        type: String
      },
      defaultImg: {
        type: String
      },
      defaultImg2: {
        type: String
      },
      getImgList:{
        type: Array,
        default(){
          return new Array()
        }
      },
      returnImgList:{
        type:Array,
        default(){
          return new Array()
        }
      }
    },
    mounted(){
      
    },
    data() {
      return {
        list:[],
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    computed:{
      actionUrl(){
        return this.getUploadUrl
      },
      computedList(){
        this.getImgList.forEach((item, index )=>{
          if( !item.includes( this.Api.loadImgUrl ) ){
            this.getImgList[index]= this.Api.loadImgUrl + item
          }          
        })
        this.list = this.getImgList
        return this.list
      },
      edit(){   
        return (this.$route.query.order_id === undefined) || (this.list.length == 0)
      }
    },
    watch:{
      getImgList:{
        handler(curVal,oldVal){
          let arr =  Array.from(curVal , (item) => {
            return item.match(/uploads(\S*)/ig)[0]
          })
          // console.log('this.returnImgList>>>' ,arr)
          this.$emit('update:returnImgList', arr)
        },
        deep:true
      }
    },
    methods: {
      handleDeleteImg(index){
        // console.log('handleDeleteImg')
        this.list.splice(index, 1)
      },
      handleAvatarSuccess(res, file) {
         // console.log('Img uploand success', file)
        if(this.oneImage){
           this.list.pop()
           this.list.push(this.Api.loadImgUrl + file.response.content.url)
        }else{
          this.list.push(this.Api.loadImgUrl + file.response.content.url)
        }        
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'
                       || file.type === 'image/jpg' 
                       || file.type === 'image/png'
                       || file.type === 'image/pjpeg'
                       || file.type === 'image/bmp';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传图片只能是 jpeg/jpg/png/pjpeg/bmp 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG;
      },
      showBig(src){
          this.dialogImageUrl= src
          this.dialogVisible= true
      }
    }
  }
</script>

<style scoped>
  .img-li{
    position: relative;
    float: left;
    width: 145px;
    height: 145px;
    border-radius: 3px;
    padding: 3px;
    margin:  3px;
    border: 1px dashed #d9d9d9;
  }
  .img-li img{
    width: 100%;
    height: 100%
  } 
  .top-right{
    position: absolute;
    display: block;
    opacity: 0;
    top: -11px;
    right: -9px;
    -webkit-transition: opacity .25s, background 0.25s;
    -ms-transition: opacity .25s, background 0.25s;
    -o-transition: opacity .25s, background 0.25s;
    transition: opacity .25s, background 0.25s;
  }
  .img-li:hover .top-right{
    position: absolute;   
    opacity: 1;   
  }
  .avatar-uploader{
    float: left;    
    margin: 3px;  
  }
  .avatar-uploader .el-upload {     
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover{
    border-color: #409EFF;
  }
  .avatar-uploader-text{
    font-size: 20px;
    color: #8c939d;
    width: 145px;
    height: 145px;
    line-height: 145px;
    text-align: center;
  }
</style>