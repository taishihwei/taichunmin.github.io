(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{182:function(t,a,s){},183:function(t,a,s){},374:function(t,a,s){"use strict";var i=s(182);s.n(i).a},375:function(t,a,s){"use strict";var i=s(183);s.n(i).a},393:function(t,a,s){"use strict";s.r(a);var i={props:["work"],computed:{modalId(){return"workmodal-"+this._uid},albumId(){return _.isArray(this.work.album)&&this.work.album?"workalbum-"+this._uid:null}},data:()=>({slide:0,showAlbum:!1,caption:!0})},r=(s(374),s(375),s(8)),o=Object(r.a)(i,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"work-card"},[s("b-card",{staticClass:"bg-light text-center",attrs:{title:t.work.title,"img-src":t.$withBase(t.work.img),"img-top":""}},[s("b-card-text",{domProps:{innerHTML:t._s(t.work.desc)}}),t.albumId?s("b-button",{staticClass:"mr-1",attrs:{variant:"primary"},on:{click:function(a){t.showAlbum=!0}}},[s("span",{staticClass:"fa fa-picture-o"}),t._v(" 圖集")]):t._e(),t.work.url?s("b-link",{staticClass:"btn btn-primary",attrs:{href:t.$withBase(t.work.url),target:"_blank"}},[s("span",{staticClass:"fa fa-external-link"}),t._v(" 網站")]):t._e()],1),t.albumId?s("b-modal",{attrs:{id:t.modalId,size:"lg",title:"作品集："+t.work.title},model:{value:t.showAlbum,callback:function(a){t.showAlbum=a},expression:"showAlbum"}},[s("b-carousel",{staticClass:"work-card-album",attrs:{id:t.albumId,interval:!1,controls:"",indicators:t.caption,"img-width":"100%"},model:{value:t.slide,callback:function(a){t.slide=a},expression:"slide"}},t._l(t.work.album,(function(a){return s("b-carousel-slide",[s("img",{staticClass:"d-block w-100",attrs:{slot:"img",src:t.$withBase(a.img),alt:a.alt||""},slot:"img"}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.caption,expression:"caption"}],staticClass:"carousel-caption rounded"},[s("p",{domProps:{innerHTML:t._s(a.caption)}})])])})),1),s("template",{slot:"modal-footer"},[s("b-button",{attrs:{variant:"info"},on:{click:function(a){t.caption=!t.caption}}},[t._v("開關圖片說明")]),t.work.url?s("b-link",{staticClass:"btn btn-primary",attrs:{href:t.$withBase(t.work.url),target:"_blank"}},[s("span",{staticClass:"fa fa-external-link"}),t._v(" 網站")]):t._e(),s("b-button",{attrs:{variant:"secondary"},on:{click:function(a){t.showAlbum=!1}}},[t._v("關閉")])],1)],2):t._e()],1)}),[],!1,null,"576ec4b0",null);a.default=o.exports}}]);