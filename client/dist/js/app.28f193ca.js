(function(e){function t(t){for(var a,i,o=t[0],c=t[1],u=t[2],l=0,p=[];l<o.length;l++)i=o[l],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);m&&m(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var m=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0ca1":function(e,t){e.exports="data:image/png;base64,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"},"0ed9":function(e,t,n){"use strict";var a=n("21af"),r=n.n(a);r.a},"21af":function(e,t,n){},"2b81":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("router-view")],1)},s=[],i=(n("034f"),n("2877")),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),u=c.exports,m=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page",[n("div",{staticClass:"col-sm-6"},[n("answerSharing")],1),n("div",{staticClass:"col-sm-6"},[n("imageSharing")],1)])},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center-all w-100"},[n("div",{staticClass:"w-100 h2"},[e._v("התמונה שלי")]),e.showInputs?n("imageAdd",{on:{pushData:e.pushData}}):e._e(),e.showInputs?e._e():n("div",{staticClass:"w-100 mt-2"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.showInputs=!e.showInputs}}},[e._v("הוסף תמונה")])]),e._l(e.addImg,function(e){return n("imageIn",{key:e.id,attrs:{oneImg:e}})})],2)},v=[],g=(n("96cf"),n("3b8d")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border rounded mt-2 w-100 center-all"},[n("h5",{staticClass:"w-100"},[e._v(e._s(e.oneImg.text))]),n("div",{staticClass:"center-all my-img"},[n("img",{attrs:{src:e.oneImg.img,alt:""}})]),n("p",{staticClass:"w-100 h4 text-right p-2 m-0"},[e._v(e._s(e.oneImg.name)+" "+e._s(e.oneImg.lestName)+" - "+e._s(e.oneImg.city)+" בית-ספר: "+e._s(e.oneImg.scoole))])])},h=[],w={name:"answerIn",props:["oneImg"],data:function(){return{}}},y=w,I=(n("b38e"),Object(i["a"])(y,f,h,!1,null,"3550d07a",null)),x=I.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border rounded mt-2 w-100 shadow-sm p-2"},[n("P",{staticClass:"h5"},[e._v("הוסף תמונה:")]),n("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),e.$emit("pushData",e.myImg)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.myImg.text,expression:"myImg.text"}],attrs:{name:"",id:"",cols:"30",rows:"3",required:"",placeholder:"כתוב מתכון או איפה הצטלמתם"},domProps:{value:e.myImg.text},on:{input:function(t){t.target.composing||e.$set(e.myImg,"text",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myImg.name,expression:"myImg.name"}],attrs:{type:"text",placeholder:"שם פרטי",required:""},domProps:{value:e.myImg.name},on:{input:function(t){t.target.composing||e.$set(e.myImg,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myImg.lestName,expression:"myImg.lestName"}],attrs:{type:"text",placeholder:"שם משפחה",required:""},domProps:{value:e.myImg.lestName},on:{input:function(t){t.target.composing||e.$set(e.myImg,"lestName",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myImg.scoole,expression:"myImg.scoole"}],attrs:{type:"text",placeholder:"בית ספר",required:""},domProps:{value:e.myImg.scoole},on:{input:function(t){t.target.composing||e.$set(e.myImg,"scoole",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myImg.city,expression:"myImg.city"}],attrs:{type:"text",placeholder:"ישוב",required:""},domProps:{value:e.myImg.city},on:{input:function(t){t.target.composing||e.$set(e.myImg,"city",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myImg.street,expression:"myImg.street"}],attrs:{type:"text",placeholder:"רחוב",required:""},domProps:{value:e.myImg.street},on:{input:function(t){t.target.composing||e.$set(e.myImg,"street",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.myImg.namHome,expression:"myImg.namHome"}],attrs:{type:"text",placeholder:"מספר בית",required:""},domProps:{value:e.myImg.namHome},on:{input:function(t){t.target.composing||e.$set(e.myImg,"namHome",t.target.value)}}}),n("input",{attrs:{type:"file",placeholder:"העלה תמונה",required:""},on:{change:e.previewImage}}),e._m(0)])],1)},A=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 mt-2"},[n("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("שלח תמונה")])])}],C=(n("e241"),{name:"ananswerWrite",props:["answer"],data:function(){return{myImg:{name:"",lestName:"",scoole:"",img:"",text:"",city:"",street:"",namHome:""}}},methods:{previewImage:function(e){var t=e.target.files[0];if(t){var n=new FileReader,a=this;new Compressor(t,{width:150,quality:.6,success:function(e){var t=e;console.log(t),n.onload=function(e){a.myImg.img=n.result},n.readAsDataURL(t)}})}}}}),N=C,E=(n("0ed9"),Object(i["a"])(N,b,A,!1,null,"702e3141",null)),j=E.exports,O=n("d225"),P=n("b0b4"),R="http://localhost:8000/api/posts",D=function(){function e(){Object(O["a"])(this,e)}return Object(P["a"])(e,null,[{key:"get",value:function(e){var t;return t="image"==e?"/image":"",new Promise(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(n,a){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(R+t);case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,n(s),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),a(e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t,n){return e.apply(this,arguments)}}())}},{key:"insert",value:function(e,t){var n;return n="image"==t?"/image":"",new Promise(function(){var t=Object(g["a"])(regeneratorRuntime.mark(function t(a,r){var s,i,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=JSON.stringify(e),t.next=4,fetch(R+n,{method:"post",headers:{"Content-Type":"application/json"},body:s});case 4:return i=t.sent,t.next=7,i.json();case 7:o=t.sent,console.log(o),a(),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),r(t.t0);case 15:case"end":return t.stop()}},t,null,[[0,12]])}));return function(e,n){return t.apply(this,arguments)}}())}}]),e}(),k=D,T={name:"imageSharing",components:{imageIn:x,imageAdd:j},props:{},data:function(){return{showInputs:!1,addImg:[]}},created:function(){this.apdateImages()},computed:{},methods:{pushData:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.insert(t,"image");case 3:this.apdateImages(),e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(t){return e.apply(this,arguments)}return t}(),apdateImages:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get("image");case 3:this.addImg=e.sent,this.showInputs=!1,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()}},G=T,M=Object(i["a"])(G,d,v,!1,null,"df6b9eee",null),H=M.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center-all w-100"},[n("div",{staticClass:"w-100 h2"},[e._v("השאלה היומית")]),n("div",{staticClass:"center-all w-100"},e._l(e.cotrrentImg,function(e){return n("img",{key:e.id,staticClass:"w-100",attrs:{src:e.img,alt:""}})}),0),e.showInputs?n("answerWrite",{on:{pushData:e.pushData}}):e._e(),e.showInputs?e._e():n("div",{staticClass:"w-100 mt-2"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.showInputs=!e.showInputs}}},[e._v("הוסף תשובה")])]),e._l(e.addAnswers.answers,function(e){return n("answerIn",{key:e.id,attrs:{answer:e}})})],2)},Y=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border rounded mt-2 w-100"},[n("div",{staticClass:"w-100"},[e._v("תשובה: "+e._s(e.answer.ans))]),n("div",{staticClass:"center-all w-100"},[n("div",{staticClass:"w-50 text-center"},[e._v("שם: "+e._s(e.answer.name)+" "+e._s(e.answer.lestName))]),n("div",{staticClass:"w-50 text-center"},[e._v('ביה"ס: '+e._s(e.answer.scoole))])])])},B=[],q={name:"answerIn",props:["answer"],data:function(){return{}}},S=q,Q=Object(i["a"])(S,Z,B,!1,null,"41bd69c6",null),W=Q.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"border rounded mt-2 w-100 shadow-sm p-2"},[n("P",{staticClass:"h5"},[e._v("הוסף תשובה:")]),n("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),e.$emit("pushData",e.answers)}}},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.answers.ans,expression:"answers.ans"}],attrs:{name:"",id:"",cols:"30",rows:"3",required:"",placeholder:"כתוב תשובה"},domProps:{value:e.answers.ans},on:{input:function(t){t.target.composing||e.$set(e.answers,"ans",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers.name,expression:"answers.name"}],attrs:{type:"text",placeholder:"שם פרטי",required:""},domProps:{value:e.answers.name},on:{input:function(t){t.target.composing||e.$set(e.answers,"name",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers.lestName,expression:"answers.lestName"}],attrs:{type:"text",placeholder:"שם משפחה",required:""},domProps:{value:e.answers.lestName},on:{input:function(t){t.target.composing||e.$set(e.answers,"lestName",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers.scoole,expression:"answers.scoole"}],attrs:{type:"text",placeholder:"בית ספר",required:""},domProps:{value:e.answers.scoole},on:{input:function(t){t.target.composing||e.$set(e.answers,"scoole",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers.city,expression:"answers.city"}],attrs:{type:"text",placeholder:"ישוב",required:""},domProps:{value:e.answers.city},on:{input:function(t){t.target.composing||e.$set(e.answers,"city",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers.street,expression:"answers.street"}],attrs:{type:"text",placeholder:"רחוב",required:""},domProps:{value:e.answers.street},on:{input:function(t){t.target.composing||e.$set(e.answers,"street",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answers.nam,expression:"answers.nam"}],attrs:{type:"text",placeholder:"מספר בית",required:""},domProps:{value:e.answers.nam},on:{input:function(t){t.target.composing||e.$set(e.answers,"nam",t.target.value)}}}),e._m(0)])],1)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 mt-2"},[n("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("שלח תשובה")])])}],K={name:"ananswerWrite",props:["answer"],data:function(){return{answers:{name:"",lestName:"",scoole:"",ans:"",city:"",street:"",namHome:""}}}},X=K,J=(n("f0d3"),Object(i["a"])(X,z,U,!1,null,"897b646c",null)),F=J.exports,L={name:"answerSharing",components:{answerIn:W,answerWrite:F},props:{},data:function(){return{showInputs:!1,addAnswers:{answers:[]},queDate:[{date:"2019-06-27",img:[{img:n("0ca1"),id:1},{img:"",id:2}]},{date:"2019-06-30",img:[{img:n("0ca1"),id:1},{img:"",id:2}]},{date:"2019-06-29",img:[{img:n("0ca1"),id:1},{img:"",id:2}]}]}},created:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.apdateAnswers();case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{cotrrentImg:function(){var e=this,t=this.queDate.filter(function(t){return t.date==e.formatDate()});return t[0].img}},methods:{formatDate:function(){var e=new Date,t=""+(e.getMonth()+1),n=""+e.getDate(),a=e.getFullYear();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),[a,t,n].join("-")},pushData:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.date=this.formatDate(),e.prev=1,e.next=4,k.insert(t);case 4:this.apdateAnswers(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),console.log(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));function t(t){return e.apply(this,arguments)}return t}(),apdateAnswers:function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.get();case 3:return t=e.sent,e.next=6,t.filter(function(e){return e.date==n.formatDate()});case 6:this.addAnswers.answers=e.sent,this.showInputs=!1,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}()}},V=L,$=Object(i["a"])(V,_,Y,!1,null,"6890580a",null),ee=$.exports,te={name:"home",components:{answerSharing:ee,imageSharing:H}},ne=te,ae=(n("b0cd"),Object(i["a"])(ne,l,p,!1,null,"3f29e6f6",null)),re=ae.exports;a["a"].use(m["a"]);var se=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:re}]}),ie=n("2f62");a["a"].use(ie["a"]);var oe=new ie["a"].Store({state:{},mutations:{},actions:{}}),ce=(n("4989"),n("ab8b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[e._t("default")],2)}),ue=[],me={name:"page",props:{}},le=me,pe=Object(i["a"])(le,ce,ue,!1,null,"761bf800",null),de=pe.exports;a["a"].config.productionTip=!1,a["a"].component("page",de),new a["a"]({router:se,store:oe,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,n){},abfc:function(e,t,n){},b0cd:function(e,t,n){"use strict";var a=n("d85f"),r=n.n(a);r.a},b38e:function(e,t,n){"use strict";var a=n("abfc"),r=n.n(a);r.a},d85f:function(e,t,n){},f0d3:function(e,t,n){"use strict";var a=n("2b81"),r=n.n(a);r.a}});
//# sourceMappingURL=app.28f193ca.js.map