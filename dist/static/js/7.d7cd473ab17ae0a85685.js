webpackJsonp([7],{DcNa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("NYxO"),s={name:"schedule",props:["order_id"],data:function(){return{graph1Active:0,graph2Active:0,graph3Active:0,isLoading:1,selectSchedule:{}}},mounted:function(){this.getSchedule(this.order_id)},computed:(Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t})({},Object(i.b)(["getIndentBlock"]),{getUploadUrl:function(){return this.Api.loadImgUrl},curSchedule:function(){return this.selectSchedule}}),methods:{getSchedule:function(t){var e=this;this.Schedule({order_id:t}).then(function(t){200==t.data.status&&(e.$set(e.selectSchedule,"details",t.data.content.details),e.$set(e.selectSchedule,"history",t.data.content.history),e.setGraph(e.selectSchedule.details.status),e.isLoading=0)})},setGraph:function(t){t[0]<3?(this.graph1Active=0,this.graph2Active=parseInt(t[0]),this.graph3Active=0):"3"==t[0]?(this.graph1Active=parseInt(t[1])+3,this.graph2Active=parseInt(t[2])+3,this.graph3Active=parseInt(t[3])+3):t[0]>"3"&&(this.graph1Active=5,this.graph2Active=parseInt(t[0])+3-1,this.graph3Active=5)}}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-detail"},[this.isLoading?e("div",{staticClass:"isloading border-top"},[this._m(0,!1,!1)]):this._e(),this._v(" "),this.selectSchedule.details?e("div",[e("b-container",{staticClass:"bv-example-row  border-top padding-around"},[e("b-row",{attrs:{cols:"4"}},[e("b-col",{attrs:{cols:"3"}},[e("img",{attrs:{alt:"订单图片",src:this.getUploadUrl+"/"+this.selectSchedule.details.front_picture}})]),this._v(" "),e("b-col",{attrs:{cols:"9"}},[e("h5",[this._v("当前进度: "),e("span",{staticClass:"color"},[this._v(" "+this._s(this.selectSchedule.details.status_msg))])]),this._v(" "),e("div",{staticClass:"text-style"},[this._v("订单名称: "),e("span",[this._v(" "+this._s(this.selectSchedule.details.name))])]),this._v(" "),e("div",{staticClass:"text-style"},[this._v("交货时间: "),e("span",[this._v(" "+this._s(this.selectSchedule.details.delivery_date))])]),this._v(" "),e("div",{staticClass:"text-style"},[this._v("生产周期: "),e("span",[this._v(" "+this._s(this.selectSchedule.details.cycle)+" 天")])]),this._v(" "),e("div",{staticClass:"text-style"},[this._v("面辅料完备时间: "),e("span",[this._v(" "+this._s(this.selectSchedule.details.arrival_date))])]),this._v(" "),e("div",{staticClass:"text-style"},[this._v("接单方:\r\n\t\t\t \t\t\t"),e("span",[this._v(" \r\n\t\t\t \t\t\t"+this._s(this.selectSchedule.details.undertake_company.company)+" ")])]),this._v(" "),e("div",{staticClass:"text-style"},[this._v("完成件数:"),e("span",[this._v(" "+this._s(this.selectSchedule.details.done_account)+"/ "+this._s(this.selectSchedule.details.demanding_account))])])])],1)],1),this._v(" "),e("div",{staticClass:"goods-details  border-top padding-around"},[e("h5",[this._v("进度详情")]),this._v(" "),e("div",{staticClass:"graph"},[this._m(1,!1,!1),this._v(" "),e("el-steps",{staticClass:"graph3",attrs:{active:this.graph3Active,"align-center":""}},[e("el-step",{staticClass:"stephidden",attrs:{title:"",description:""}}),this._v(" "),e("el-step",{staticClass:"stephidden",attrs:{title:"",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待发样衣",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待收样衣",description:""}}),this._v(" "),e("el-step",{attrs:{title:"已收样衣",description:""}}),this._v(" "),e("el-step",{staticClass:"stephidden",attrs:{title:"",description:""}}),this._v(" "),e("el-step",{staticClass:"stephidden",attrs:{title:"",description:""}}),this._v(" "),e("el-step",{staticClass:"stephidden",attrs:{title:"",description:""}}),this._v(" "),e("el-step",{staticClass:"stephidden",attrs:{title:"",description:""}})],1),this._v(" "),e("el-steps",{staticClass:"graph2",attrs:{active:this.graph2Active,"align-center":""}},[e("el-step",{attrs:{title:"等待接单",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待选工厂",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待发面料",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待收面料",description:""}}),this._v(" "),e("el-step",{attrs:{title:"已收面料",description:""}}),this._v(" "),e("el-step",{attrs:{title:"生产加工",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待收货付款",description:""}}),this._v(" "),e("el-step",{attrs:{title:"等待评价",description:""}}),this._v(" "),e("el-step",{attrs:{title:"已评价",description:""}})],1),this._v(" "),e("el-steps",{staticClass:"graph1",attrs:{active:this.graph1Active,"align-center":""}},[e("el-step",{staticClass:"stephidden"}),this._v(" "),e("el-step",{staticClass:"stephidden"}),this._v(" "),e("el-step",{attrs:{title:"待发辅料",description:""}}),this._v(" "),e("el-step",{attrs:{title:"待收辅料",description:""}}),this._v(" "),e("el-step",{attrs:{title:"已收辅料",description:""}}),this._v(" "),e("el-step",{staticClass:"stephidden"}),this._v(" "),e("el-step",{staticClass:"stephidden"}),this._v(" "),e("el-step",{staticClass:"stephidden"}),this._v(" "),e("el-step",{staticClass:"stephidden"})],1)],1)]),this._v(" "),this.selectSchedule.history?e("div",{staticClass:"goods-details  border-top padding-around"},[e("h5",[this._v("订单动态")]),this._v(" "),e("div",{staticClass:"padding-top"},[e("el-steps",{attrs:{direction:"vertical",active:3}},this._l(this.selectSchedule.history,function(t,n){return e("el-step",{key:"history"+n,attrs:{title:"",description:t.create_time+t.operation}})}))],1)]):this._e()],1):this._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"el-loading-spinner"},[e("i",{staticClass:"el-icon-loading"}),e("p",{staticClass:"el-loading-text"},[this._v("拼命加载中")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"graph-bg"},[e("div",{staticClass:"rect"}),this._v(" "),e("div",{staticClass:"rectp-round"})])}]},d=n("VU/8")(s,a,!1,function(t){n("nrj3")},"data-v-68ede54f",null);e.default=d.exports},fyFS:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"\n#indent[data-v-68ede54f]{\n\t\tmargin-top: 20px;\n\t\tbackground: rgb(248,248,248);\n}\nli[data-v-68ede54f]{\n\t\tlist-style: none;\n}\n.myIndent[data-v-68ede54f]{\n\t\tcolor: #555;\n\t\theight: 54px;\n\t\tline-height: 54px;\n\t\t/*width: 220px;*/\n\t\tbackground: rgb(238,238,238);\n\t\tfont-size: 0.8em;\n\t\ttext-indent: 20px;\n}\n.nav-vertal[data-v-68ede54f]{\n\t\tbackground: #fff;\n}\n.muneNav[data-v-68ede54f]{\n\t\tcolor: #555;\n\t\tborder: 2px solid rgba(255,255,255,0);\n\t\theight: 54px;\n\t\tline-height: 54px;\n\t\t/*width: 220px;*/\n\t\tfont-size: 0.8em;\n\t\ttext-indent: 30px;\n\t\tcursor: pointer;\n}\n.muneNav[data-v-68ede54f]:hover{\n\t\tbackground: #C44DDC;\n\t\tcolor: #fff;\n}\n.active[data-v-68ede54f]{\n\t\tcolor: #C44DDC;\n\t\tborder-left-color: #C44DDC;\n}\n.col-3 img[data-v-68ede54f]{\n\t\twidth: 100%;\n}\n.isloading[data-v-68ede54f]{\n\t\tposition: relative;\n    \theight: 200px;\n}\n.text-style[data-v-68ede54f]{\n\t\ttext-indent: 1.5em;\n\t\theight: 30px;\n}\n.container-detail-list[data-v-68ede54f]{\n\t\theight: 345px;\n}\n.stephidden[data-v-68ede54f]{\n\t\theight: 0px;overflow: hidden;\n}\n.graph[data-v-68ede54f]{\n\t\tposition: relative;\n\t\theight: 350px;\n\t\tpadding-top: 50px;\n\t\twidth: 100%;\n}\n.graph1[data-v-68ede54f],\n\t.graph2[data-v-68ede54f],\n\t.graph3[data-v-68ede54f]{\n\t\tposition: relative;\t\t\n\t\theight: 100px;\n\t\twidth: 100%;\n\t\tz-index:4;\n}\n.graph-bg[data-v-68ede54f]{\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 0;\n}\n.graph-bg .rect[data-v-68ede54f]{\n\t\tposition: absolute;\n\t\tleft: 22.22%;\n\t\ttop: 10px;\n\t\twidth: 33.334%;\n\t\theight: 201px;\n\t\tborder: 2px solid #C44DDC;\n}\n.graph-bg .rectp-round[data-v-68ede54f]{\n\t\tposition: absolute;\n\t\tleft: 23.99%;\n\t    top: -29px;\n\t    width: 29.22%;\n\t    height: 300px;\n\t\theight: 300px;\n\t\tborder: 2px dashed #C44DDC;\n\t\tborder-radius: 20px;\n\t\tborder-color: #C44DDC;\n\t\tbackground:  rgba(196,77,220,0.07);\n}\n\t/*detail*/\n.detail-inner[data-v-68ede54f]{\n\t\tpadding: 30px;\n}\n.nav-schedule-details li[data-v-68ede54f]{\n\t\tfloat: left;\n\t\twidth: 25%;\n\t\theight: 55px;\n\t\tline-height: 55px;\n\t\ttext-align: center;\n\t\tborder-bottom: 2px solid rgba(255,255,255,0);\n}\n.nav-schedule-details li[data-v-68ede54f]:hover{\n\t\tcursor: pointer;\n\t\tcolor: #C44DDC;\n\t\tborder-bottom: 2px solid #C44DDC;\n}\n.jiben ul li[data-v-68ede54f] {\n\t\tfloat: left;\n\t\twidth: 33.33%;\n\t\theight: 35px;\n\t\tline-height: 35px;\n\t\tfont-size: 14px;\n}\n.buwei ul[data-v-68ede54f],\n\t.yanseshuliang ul[data-v-68ede54f]{\t\t\n\t\tfloat: left;\n\t\tmargin-right: 20px;\n}\n.yanseshuliang .thead li[data-v-68ede54f]{\n\t\ttext-align: right;\n}\n.thead li[data-v-68ede54f],.tbody li[data-v-68ede54f]{\n\t\tfont-size: 14px;\n\t\tcolor: rgb(102, 102, 102);\n\t\tmargin-bottom: 20px;\n}\n.tbody li[data-v-68ede54f]{\n\t\ttext-align: center;\n\t\tcolor: rgb(6, 6, 6);\n}\n.inner-icon[data-v-68ede54f]{\n\t\tfloat: left;\n\t\tmargin: 30px 30px 0 0;\n\t\tpadding:1px;\n\t\ttext-align: center;\n\t\tborder: 1px solid #e0e0e0;\n}\n.inner-icon img[data-v-68ede54f]{\n\t\twidth: 140px;\n\t\theight: 140px;\n\t\tpadding: 5px;\n}\n.banxing .inner-icon img[data-v-68ede54f]{\n\t\twidth: 200px;\n}\n","",{version:3,sources:["C:/Users/yuan/Documents/vue/yishang/src/components/pages/schedule.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,6BAA6B;CAC9B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,6BAA6B;EAC7B,iBAAiB;EACjB,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,sCAAsC;EACtC,aAAa;EACb,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,eAAe;EACf,2BAA2B;CAC5B;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;KAChB,cAAc;CAClB;AACD;EACE,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,cAAc;CACf;AACD;EACE,YAAY,iBAAiB;CAC9B;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,YAAY;CACb;AACD;;;EAGE,mBAAmB;EACnB,cAAc;EACd,YAAY;EACZ,UAAU;CACX;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,eAAe;EACf,cAAc;EACd,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,aAAa;KACV,WAAW;KACX,cAAc;KACd,cAAc;EACjB,cAAc;EACd,2BAA2B;EAC3B,oBAAoB;EACpB,sBAAsB;EACtB,mCAAmC;CACpC;CACA,UAAU;AACX;EACE,cAAc;CACf;AACD;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,6CAA6C;CAC9C;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,iCAAiC;CAClC;AACD;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,gBAAgB;CACjB;AACD;;EAEE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;CAC3B;AACD;EACE,aAAa;EACb,cAAc;EACd,aAAa;CACd;AACD;EACE,aAAa;CACd",file:"schedule.vue",sourcesContent:["\n#indent[data-v-68ede54f]{\n\t\tmargin-top: 20px;\n\t\tbackground: rgb(248,248,248);\n}\nli[data-v-68ede54f]{\n\t\tlist-style: none;\n}\n.myIndent[data-v-68ede54f]{\n\t\tcolor: #555;\n\t\theight: 54px;\n\t\tline-height: 54px;\n\t\t/*width: 220px;*/\n\t\tbackground: rgb(238,238,238);\n\t\tfont-size: 0.8em;\n\t\ttext-indent: 20px;\n}\n.nav-vertal[data-v-68ede54f]{\n\t\tbackground: #fff;\n}\n.muneNav[data-v-68ede54f]{\n\t\tcolor: #555;\n\t\tborder: 2px solid rgba(255,255,255,0);\n\t\theight: 54px;\n\t\tline-height: 54px;\n\t\t/*width: 220px;*/\n\t\tfont-size: 0.8em;\n\t\ttext-indent: 30px;\n\t\tcursor: pointer;\n}\n.muneNav[data-v-68ede54f]:hover{\n\t\tbackground: #C44DDC;\n\t\tcolor: #fff;\n}\n.active[data-v-68ede54f]{\n\t\tcolor: #C44DDC;\n\t\tborder-left-color: #C44DDC;\n}\n.col-3 img[data-v-68ede54f]{\n\t\twidth: 100%;\n}\n.isloading[data-v-68ede54f]{\n\t\tposition: relative;\n    \theight: 200px;\n}\n.text-style[data-v-68ede54f]{\n\t\ttext-indent: 1.5em;\n\t\theight: 30px;\n}\n.container-detail-list[data-v-68ede54f]{\n\t\theight: 345px;\n}\n.stephidden[data-v-68ede54f]{\n\t\theight: 0px;overflow: hidden;\n}\n.graph[data-v-68ede54f]{\n\t\tposition: relative;\n\t\theight: 350px;\n\t\tpadding-top: 50px;\n\t\twidth: 100%;\n}\n.graph1[data-v-68ede54f],\n\t.graph2[data-v-68ede54f],\n\t.graph3[data-v-68ede54f]{\n\t\tposition: relative;\t\t\n\t\theight: 100px;\n\t\twidth: 100%;\n\t\tz-index:4;\n}\n.graph-bg[data-v-68ede54f]{\n\t\tposition: absolute;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 0;\n}\n.graph-bg .rect[data-v-68ede54f]{\n\t\tposition: absolute;\n\t\tleft: 22.22%;\n\t\ttop: 10px;\n\t\twidth: 33.334%;\n\t\theight: 201px;\n\t\tborder: 2px solid #C44DDC;\n}\n.graph-bg .rectp-round[data-v-68ede54f]{\n\t\tposition: absolute;\n\t\tleft: 23.99%;\n\t    top: -29px;\n\t    width: 29.22%;\n\t    height: 300px;\n\t\theight: 300px;\n\t\tborder: 2px dashed #C44DDC;\n\t\tborder-radius: 20px;\n\t\tborder-color: #C44DDC;\n\t\tbackground:  rgba(196,77,220,0.07);\n}\n\t/*detail*/\n.detail-inner[data-v-68ede54f]{\n\t\tpadding: 30px;\n}\n.nav-schedule-details li[data-v-68ede54f]{\n\t\tfloat: left;\n\t\twidth: 25%;\n\t\theight: 55px;\n\t\tline-height: 55px;\n\t\ttext-align: center;\n\t\tborder-bottom: 2px solid rgba(255,255,255,0);\n}\n.nav-schedule-details li[data-v-68ede54f]:hover{\n\t\tcursor: pointer;\n\t\tcolor: #C44DDC;\n\t\tborder-bottom: 2px solid #C44DDC;\n}\n.jiben ul li[data-v-68ede54f] {\n\t\tfloat: left;\n\t\twidth: 33.33%;\n\t\theight: 35px;\n\t\tline-height: 35px;\n\t\tfont-size: 14px;\n}\n.buwei ul[data-v-68ede54f],\n\t.yanseshuliang ul[data-v-68ede54f]{\t\t\n\t\tfloat: left;\n\t\tmargin-right: 20px;\n}\n.yanseshuliang .thead li[data-v-68ede54f]{\n\t\ttext-align: right;\n}\n.thead li[data-v-68ede54f],.tbody li[data-v-68ede54f]{\n\t\tfont-size: 14px;\n\t\tcolor: rgb(102, 102, 102);\n\t\tmargin-bottom: 20px;\n}\n.tbody li[data-v-68ede54f]{\n\t\ttext-align: center;\n\t\tcolor: rgb(6, 6, 6);\n}\n.inner-icon[data-v-68ede54f]{\n\t\tfloat: left;\n\t\tmargin: 30px 30px 0 0;\n\t\tpadding:1px;\n\t\ttext-align: center;\n\t\tborder: 1px solid #e0e0e0;\n}\n.inner-icon img[data-v-68ede54f]{\n\t\twidth: 140px;\n\t\theight: 140px;\n\t\tpadding: 5px;\n}\n.banxing .inner-icon img[data-v-68ede54f]{\n\t\twidth: 200px;\n}\n"],sourceRoot:""}])},nrj3:function(t,e,n){var i=n("fyFS");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("3d9f59f2",i,!0)}});
//# sourceMappingURL=7.d7cd473ab17ae0a85685.js.map