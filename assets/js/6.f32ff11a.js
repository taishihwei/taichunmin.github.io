(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{157:function(t,e,s){},159:function(t,e,s){"use strict";var a=s(157);s.n(a).a},160:function(t,e,s){"use strict";var a=s(158),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(a.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(a.g)(this.link)||Object(a.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(a.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(a.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction(){this.$emit("focusout")}}},n=(s(159),s(8)),r=Object(n.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isInternal?s("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t.item.fa?s("i",{staticClass:"fa fa-fw",class:"fa-"+t.item.fa}):t._e(),t._v(" "+t._s(t.item.text))]):s("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.fa?s("i",{staticClass:"fa fa-fw",class:"fa-"+t.item.fa}):t._e(),t._v(" "+t._s(t.item.text)+" "),t.isBlankTarget?s("OutboundLink"):t._e()],1)}),[],!1,null,"0f747b16",null);e.a=r.exports},170:function(t,e,s){},174:function(t,e,s){},345:function(t,e,s){"use strict";var a=s(170);s.n(a).a},349:function(t,e,s){"use strict";var a=s(174);s.n(a).a},383:function(t,e,s){"use strict";s.r(e);var a=s(379),i=s(187),n=s(381),r=s(382),o={components:{PageEdit:n.a,PageNav:r.a},props:["sidebarItems"],computed:{contentClass(){const t=[];return/^\/blog\//.test(this.$page.path)&&t.push("blog"),t}}},l=(s(345),s(8)),c=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{class:"my-3 container"+(this.$frontmatter.fluid?"-fluid":"")},[this._t("top"),e("Content",{class:this.contentClass}),e("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._t("bottom")],2)}),[],!1,null,null,null).exports,u=s(380),h=s(158),b={name:"Layout",components:{Home:a.a,Page:c,Sidebar:u.a,Navbar:i.a},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(h.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},d=(s(349),Object(l.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?s("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),s("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),s("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t.$frontmatter.home?s("Home"):s("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null));e.default=d.exports}}]);