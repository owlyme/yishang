webpackJsonp([5],{AvAN:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",[this._m(0,!1,!1),this._v(" "),this.isLoading?t("div",{staticClass:"isloading"},[this._m(1,!1,!1)]):t("div",{staticClass:"container"},[t("h2",{staticClass:"title"},[t("span",[t("i",[this._v(this._s(this.newsInfo.create_time))])]),this._v(" \r\n            "+this._s(this.newsInfo.title)+" \r\n        ")]),this._v(" "),t("div",{domProps:{innerHTML:this._s(this.newsInfo.content)}})])])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"bgimg clearfix"},[t("div",{staticStyle:{width:"520px",margin:"0 auto"}},[t("div",{staticClass:"fl",staticStyle:{"padding-top":"50px"}},[t("h2",{staticClass:"slogan center"},[t("img",{attrs:{src:"/static/login/app.png"}})]),this._v(" "),t("h2",{staticClass:"slogan center"},[this._v("买商品上"),t("span",{staticClass:"tianmao"},[this._v("天猫")])]),this._v(" "),t("h2",{staticClass:"slogan center"},[this._v("买服务上"),t("span",{staticClass:"yishang"},[this._v("衣依")])]),this._v(" "),t("h6",{staticClass:"slogan2 center"},[t("span",[this._v("衣依APP，接单发单就是那么简单")])])]),this._v(" "),t("div",{staticClass:"fl"},[t("img",{attrs:{src:"/static/login/clothes.png"}})])])])},function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"el-loading-spinner"},[t("i",{staticClass:"el-icon-loading"}),t("p",{staticClass:"el-loading-text"},[this._v("拼命加载中")])])}]},e=a("VU/8")({name:"news",props:["newsId"],data:function(){return{newsInfo:null,isLoading:!0}},created:function(){var n=this;this.getNews({id:this.newsId}).then(function(t){200==t.data.status?(n.newsInfo=t.data.content,n.isLoading=!1):n.openMessage({str:t.data.msg,ele:n})})}},i,!1,function(n){a("n/XV")},"data-v-ab41950e",null);t.default=e.exports},"n/XV":function(n,t,a){var i=a("tVWK");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);a("rjj0")("07bf1177",i,!0)},tVWK:function(n,t,a){(n.exports=a("FZ+f")(!0)).push([n.i,"\n.bgimg[data-v-ab41950e]{\n  padding:10px;\n  background: rgb(238,238,238);\n}\n.tianmao[data-v-ab41950e]{\n  color: #ff0036;\n}\n.yishang[data-v-ab41950e]{\n  color: rgb(148, 46, 234);\n}\n.slogan[data-v-ab41950e] {\n  font-size: 40px;\n  color: rgb(51, 51, 51);\n  line-height: 1.2;\n  text-align: center;\n}\n.slogan img[data-v-ab41950e]{\n  width: 186px;\n}\n.slogan2[data-v-ab41950e] {\n   width: 100%;\n  margin-top: 10px;\n  text-align: center;    \n  height: 20px;\n}\n.slogan2  span[data-v-ab41950e]{\n  padding: 0 5px;\n  width: 100%;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: rgb(255, 255, 255); \n  background: #111;\n}\n.title[data-v-ab41950e]{\n    text-align: center;\n    padding: 30px 0 50px;\n}\n.title span[data-v-ab41950e] {\n    display: inline-block;\n    position: relative;\n}\n.title span i[data-v-ab41950e]{\n      position: absolute;\n      width: 200px;\n      font-size: 0.5em;\n      top: 14px;\n      font-style: normal;\n}\n.fl[data-v-ab41950e] {\n  float: left;\n}\n.fl > img[data-v-ab41950e]{\n  position: relative;\n  display: inline-block;\n  -webkit-transform: rotate(-13deg);\n          transform: rotate(-13deg);\n}\n","",{version:3,sources:["C:/Users/yuan/Documents/vue/yishang/src/components/pages/news.vue"],names:[],mappings:";AACA;EACE,aAAa;EACb,6BAA6B;CAC9B;AACD;EACE,eAAe;CAChB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,gBAAgB;EAChB,uBAAuB;EACvB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;GACG,YAAY;EACb,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,0BAA0B;EAC1B,iBAAiB;CAClB;AACD;IACI,mBAAmB;IACnB,qBAAqB;CACxB;AACD;IACI,sBAAsB;IACtB,mBAAmB;CACtB;AACD;MACM,mBAAmB;MACnB,aAAa;MACb,iBAAiB;MACjB,UAAU;MACV,mBAAmB;CACxB;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,kCAAkC;UAC1B,0BAA0B;CACnC",file:"news.vue",sourcesContent:["\n.bgimg[data-v-ab41950e]{\n  padding:10px;\n  background: rgb(238,238,238);\n}\n.tianmao[data-v-ab41950e]{\n  color: #ff0036;\n}\n.yishang[data-v-ab41950e]{\n  color: rgb(148, 46, 234);\n}\n.slogan[data-v-ab41950e] {\n  font-size: 40px;\n  color: rgb(51, 51, 51);\n  line-height: 1.2;\n  text-align: center;\n}\n.slogan img[data-v-ab41950e]{\n  width: 186px;\n}\n.slogan2[data-v-ab41950e] {\n   width: 100%;\n  margin-top: 10px;\n  text-align: center;    \n  height: 20px;\n}\n.slogan2  span[data-v-ab41950e]{\n  padding: 0 5px;\n  width: 100%;\n  font-size: 15px;\n  font-weight: 500;\n  letter-spacing: 2px;\n  color: rgb(255, 255, 255); \n  background: #111;\n}\n.title[data-v-ab41950e]{\n    text-align: center;\n    padding: 30px 0 50px;\n}\n.title span[data-v-ab41950e] {\n    display: inline-block;\n    position: relative;\n}\n.title span i[data-v-ab41950e]{\n      position: absolute;\n      width: 200px;\n      font-size: 0.5em;\n      top: 14px;\n      font-style: normal;\n}\n.fl[data-v-ab41950e] {\n  float: left;\n}\n.fl > img[data-v-ab41950e]{\n  position: relative;\n  display: inline-block;\n  -webkit-transform: rotate(-13deg);\n          transform: rotate(-13deg);\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=5.8d8c1edea2a6cc575518.js.map