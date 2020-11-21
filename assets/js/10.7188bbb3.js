(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(s,t,a){},350:function(s,t,a){"use strict";var e=a(175);a.n(e).a},385:function(s,t,a){"use strict";a.r(t);var e={data:()=>({player:[],dealer:[],deck:[],playing:!1,suits:["c","s","h","d"],ranks:["a","2","3","4","5","6","7","8","9","t","j","q","k"],cardback:"poker-back-heartstone",score:0,alertMsg:"",alertType:"info"}),computed:{playerScore(){return this.calcScore(this.player)},dealerScore(){return this.calcScore(this.dealer)}},mounted(){this.deal()},methods:{newDeck(){let s=[];_.each(this.suits,t=>{_.each(this.ranks,a=>{s.push(t+a)})}),this.deck=_.shuffle(s)},hit(){this.playing?(this.playerScore<=21&&this.player.push(this.deck.pop()),this.playerScore>21&&this.msg("<strong>Player</strong> have busted","warning")):this.msg("Click <strong>Deal</strong> button to restart.")},stand(){if(!this.playing)return void this.msg("Click <strong>Deal</strong> button to restart.");if(this.playerScore<=21)for(;this.dealerScore<17||this.dealerScore<Math.min(this.playerScore,21);)this.dealer.push(this.deck.pop());this.playing=!1,this.playerScore<=21&&this.dealerScore<this.playerScore||this.dealerScore>21?(this.score++,this.msg("<strong>Player</strong> wins.","success")):(this.score--,this.msg("<strong>Dealer</strong> wins.","danger"))},deal(){this.newDeck(),this.player=[],this.dealer=[];for(let s=0;s<2;s++)this.player.push(this.deck.pop()),this.dealer.push(this.deck.pop());this.playing?(this.score--,this.msg("<strong>Player</strong> lose. <strong>Hit</strong> or <strong>stand</strong>?","success")):(this.playing=!0,this.msg("<strong>Hit</strong> or <strong>stand</strong>?"))},calcScore(s){let t=0,a=!1;return s.forEach((function(s){t+=Math.min(10,this.ranks.indexOf(s[1])+1),"a"==s[1]&&(a=!0)}),this),a&&t<=11&&(t+=10),t<21&&s.length>4&&(t=21),t},msg(s,t="info"){this.alertMsg=s,this.alertType=t}}},r=(a(350),a(8)),i=Object(r.a)(e,(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("h1",[s._v("Black Jack "),a("small",{staticClass:"text-muted"},[s._v("Score: "+s._s(s.score))])]),a("div",{staticClass:"alert",class:"alert-"+s.alertType,attrs:{role:"alert"},domProps:{innerHTML:s._s(s.alertMsg||"No message.")}}),a("div",{staticClass:"row mb-3 pl-3"},[a("div",{staticClass:"col pl-0"},[a("button",{staticClass:"btn btn-block btn-success",on:{click:s.hit}},[s._v("Hit")])]),a("div",{staticClass:"col pl-0"},[a("button",{staticClass:"btn btn-block btn-primary",on:{click:s.stand}},[s._v("Stand")])]),a("div",{staticClass:"col pl-0"},[a("button",{staticClass:"btn btn-block btn-danger",on:{click:s.deal}},[s._v("Deal")])])]),a("div",{staticClass:"card mb-3"},[a("div",{staticClass:"card-header bg-success text-white"},[a("span",{staticClass:"fa fa-user fa-fw"}),s._v("Player"),a("span",{staticClass:"badge badge-pill badge-light ml-2"},[s._v(s._s(s.playerScore))])]),a("div",{staticClass:"card-body pt-3 pl-3 pb-0 pr-0"},s._l(s.player,(function(s){return a("div",{staticClass:"poker rounded mr-3 mb-3",class:"poker-"+s})})),0)]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header bg-danger text-white"},[a("span",{staticClass:"fa fa-paw fa-fw"}),s._v("Dealer"),a("span",{staticClass:"badge badge-pill badge-light ml-2"},[s._v(s._s(s.playing?"?":s.dealerScore))])]),a("div",{staticClass:"card-body pt-3 pl-3 pb-0 pr-0"},s._l(s.dealer,(function(t,e){return a("div",{staticClass:"poker rounded mr-3 mb-3",class:s.playing&&0==e?s.cardback:"poker-"+t})})),0)])])}),[],!1,null,"cf36e316",null);t.default=i.exports}}]);