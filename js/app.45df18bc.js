(function(t){function s(s){for(var a,r,o=s[0],l=s[1],c=s[2],u=0,p=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(s);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(a=!1)}a&&(i.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},n={app:0},i=[];function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var c=0;c<o.length;c++)s(o[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},1265:function(t,s,e){"use strict";var a=e("531e"),n=e.n(a);n.a},"197d":function(t,s,e){"use strict";var a=e("5a1f"),n=e.n(a);n.a},"19fb":function(t,s,e){"use strict";var a=e("3a4d"),n=e.n(a);n.a},"1a59":function(t,s,e){},"1e9d":function(t,s,e){"use strict";var a=e("91cf"),n=e.n(a);n.a},"1f9e":function(t,s,e){},"212d":function(t,s,e){"use strict";var a=e("6d2d"),n=e.n(a);n.a},2190:function(t,s,e){"use strict";var a=e("b7ad"),n=e.n(a);n.a},"3a4d":function(t,s,e){},"3ae4":function(t,s,e){},"3c54":function(t,s,e){"use strict";var a=e("1a59"),n=e.n(a);n.a},4985:function(t,s,e){"use strict";var a=e("b0f0"),n=e.n(a);n.a},"4cce":function(t,s,e){},"531e":function(t,s,e){},"56d7":function(t,s,e){"use strict";e.r(s);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),n=e("bc3a"),i=e.n(n),r={},o=i.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,s){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},a["a"].use(Plugin);Plugin;var l=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:t.seller}}),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),e("router-view",{attrs:{goods:t.goods,seller:t.seller,ratings:t.ratings,"keep-alive":""}})],1)},c=[],d=(e("a481"),function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟内送达\n            ")]),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetailFn}},[e("span",{staticClass:"count"},[t._v("\n                "+t._s(t.seller.supports.length)+"个\n            ")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),e("div",{staticClass:"bulletin-wrapper"},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v("\n            "+t._s(t.seller.bulletin)+"\n        ")]),e("i",{staticClass:"icon-keyboard_arrow_right"})]),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar}})]),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("优惠信息")]),e("div",{staticClass:"line"})]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),e("span",{staticClass:"text"},[t._v("\n                            "+t._s(t.seller.supports[a].description)+"\n                        ")])])})),0):t._e(),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),e("div",{staticClass:"text"},[t._v("商家公告")]),e("div",{staticClass:"line"})]),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v("\n                        "+t._s(t.seller.bulletin)+"\n                    ")])])])]),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)}),u=[],p=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,(function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})})),0)},f=[],v=(e("c5f6"),5),h="on",C="half",m="off",_={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!==0,a=Math.floor(s),n=0;n<a;n++)t.push(h);e&&t.push(C);while(t.length<v)t.push(m);return t}}},g=_,w=(e("212d"),e("2877")),y=Object(w["a"])(g,p,f,!1,null,"c207841c",null),b=y.exports,x={props:{seller:{type:Object}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},data:function(){return{detailShow:!1}},methods:{showDetailFn:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},components:{star:b}},k=x,T=(e("197d"),Object(w["a"])(k,d,u,!1,null,"7c2adb28",null)),$=T.exports;e("28a5"),e("ac6a"),e("4917"),e("386d");function P(){var t=window.location.search,s={},e=/[?&][^?&]+=[^?&]+/g,a=t.match(e);return a&&a.forEach((function(t,e){var a=t.substring(1).split("="),n=decodeURIComponent(a[0]),i=decodeURIComponent(a[1]);s[n]=i})),s}var S={name:"App",data:function(){return{appData:{},seller:{id:function(){var t=P();return t.id}()},goods:[],ratings:{}}},methods:{getData:function(){var t=this;this.axios.get("./data.json?id=".concat(this.seller.id)).then((function(s){t.appData=s.data,t.seller=Object.assign({},t.seller,t.appData.seller),t.goods=t.appData.goods,t.ratings=t.appData.ratings})),"/goods"!=this.$router.currentRoute.path&&this.$router.replace("/goods")}},created:function(){this.getData()},components:{vHeader:$}},F=S,O=(e("d2f4"),Object(w["a"])(F,l,c,!1,null,null,null)),j=O.exports,M=e("8c4f"),N=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,(function(s,a){return e("li",{key:a,staticClass:"menu-item",class:{current:t.currentIndex===a},on:{click:function(s){return t.selectMenu(a,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n                    "+t._s(s.name)+"\n                ")])])})),0)]),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,(function(s,a){return e("li",{key:a,ref:"foodsList",refInFor:!0,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),e("ul",t._l(s.foods,(function(s,a){return e("li",{key:a,staticClass:"food-item border-1px",on:{click:function(e){return t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon}})]),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),e("p",{staticClass:"desc"},[t._v("\n                                "+t._s(s.description)+"\n                            ")]),e("div",{staticClass:"extra"},[e("span",{staticClass:"count"},[t._v("\n                                    月售"+t._s(s.sellCount)+"份\n                                ")]),e("span",[t._v("\n                                    好评率"+t._s(s.rating)+"%\n                                ")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("\n                                    ￥"+t._s(s.price)+"\n                                ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("\n                                    ￥"+t._s(s.oldPrice)+"\n                                ")])]),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{cartAdd:t.cartAddFn}})],1)])])})),0)])})),0)]),e("shopcart",{ref:"shopCart",attrs:{"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice,"select-foods":t.selectFoods},on:{shopcartReturnFold:t.shopcartReturnFoldFn}}),e("shopcart-mask",{ref:"shopCartMask",on:{shopcartReturnTrue:t.shopcartReturnTrueFn}}),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{foodCartAdd:t.cartAddFn}})],1)},E=[],D=e("1fba"),R=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount}},[e("i",{staticClass:"icon-shopping_cart"})]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),e("div",{staticClass:"price",class:{highlight:t.totalPrice}},[t._v("￥"+t._s(t.totalPrice))]),e("div",{staticClass:"desc"},[t._v("另需配送费"+t._s(t.deliveryPrice)+"元")])]),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v(t._s(t.payDesc))])])]),e("div",{staticClass:"ball-container"},t._l(t.balls,(function(s,a){return e("transition",{key:a,attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"enter-cancelled":t.enterCancelled,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave,"leave-cancelled":t.leaveCancelled}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball ^.^"},[e("div",{staticClass:"inner inner-hook"})])])})),1),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("\n                    清空\n                ")])]),e("div",{ref:"list-content",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,(function(s,a){return e("li",{key:a,staticClass:"food border-1px"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),e("div",{staticClass:"price"},[e("span",[t._v("\n                                ￥"+t._s(s.price*s.count)+"\n                            ")])]),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])})),0)])])])],1)},A=[],L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol",on:{click:function(t){t.stopPropagation()}}},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease\n        icon-remove_circle_outline",attrs:{transition:"move"},on:{click:function(s){return s.stopPropagation(),t.decreaseCart(s)}}},[e("div",{staticClass:"inner "})])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v("\n        "+t._s(t.food.count)+"\n    ")]),e("div",{staticClass:"cart-add\n    icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.addCart(s)}}})],1)},H=[],z={props:{food:{type:Object}},methods:{addCart:function(t){this.food.count?this.food.count++:a["a"].set(this.food,"count",1),this.$emit("cartAdd",t.target)},decreaseCart:function(){this.food.count&&this.food.count--}}},B=z,W=(e("76de"),Object(w["a"])(B,L,H,!1,null,"91bbe5c4",null)),Y=W.exports,I={data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},props:{selectFoods:{type:Array,default:function(){return[{price:0,count:0,name:"error"}]}},deliveryPrice:{type:Number,default:0,validator:function(t){return t>=0},required:!0},minPrice:{type:Number,default:20}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach((function(s,e){t+=s.price*s.count})),t},totalCount:function(){var t=0;return this.selectFoods.forEach((function(s,e){t+=s.count})),t},payDesc:function(){return 0===this.totalPrice?"￥".concat(this.minPrice,"元起送"):this.totalPrice<this.minPrice&&this.totalPrice>0?"还差 ".concat(this.minPrice-this.totalPrice,"元起送"):"去结算"},payClass:function(){if(this.totalPrice>=this.minPrice)return"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,this.$emit("shopcartReturnFold",this.fold),!1;var s=!this.fold;return s&&this.$nextTick((function(){t.scroll?t.scroll.refresh():t.scroll=new D["a"](t.$refs["list-content"],{click:!0})})),this.$emit("shopcartReturnFold",this.fold),s}},methods:{drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.target=t,void this.dropBalls.push(e)}},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},pay:function(){this.totalPrice<this.minPrice||window.alert("支付".concat(this.totalPrice,"元"))},empty:function(){this.selectFoods.forEach((function(t,s){t.count=0}))},beforeEnter:function(t){var s=this.balls.length;while(s--){var e=this.balls[s];if(e.show){var a=e.target.getBoundingClientRect(),n=a.left-32,i=-(window.innerHeight-a.top-22);t.style.display="",t.style.transform="translate3d(0,".concat(i,"px,0)");var r=t.getElementsByClassName("inner-hook")[0];r.style.transform="translate3d(".concat(n,"px,0,0)")}}},enter:function(t){t.offsetHeight;this.$nextTick((function(){t.style.display="",t.style.transform="translate3d(0,0,0)";var s=t.getElementsByClassName("inner-hook")[0];s.style.transform="translate3d(0,0,0)"}))},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},enterCancelled:function(){},beforeLeave:function(){},leave:function(){},afterLeave:function(){},leaveCancelled:function(){}},components:{cartcontrol:Y}},J=I,U=(e("3c54"),Object(w["a"])(J,R,A,!1,null,"6457ae37",null)),q=U.exports,X=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.hideList,expression:"hideList"}],staticClass:"list-mask",on:{click:t.shopcartMaskClick}})])},G=[],K={data:function(){return{hideList:!1}},methods:{shopcartMaskClick:function(){this.$emit("shopcartReturnTrue")}}},Q=K,V=(e("1265"),Object(w["a"])(Q,X,G,!1,null,"89401d30",null)),Z=V.exports,tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v("\n                    "+t._s(t.food.name)+"\n                ")]),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("\n                        月售"+t._s(t.food.sellCount)+"份\n                    ")]),e("span",{staticClass:"rating"},[t._v("\n                        好评率"+t._s(t.food.rating)+"%\n                    ")])]),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("\n                        ￥"+t._s(t.food.price)+"\n                    ")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("\n                        ￥"+t._s(t.food.oldPrice)+"\n                    ")])]),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food},on:{cartAdd:t.addParentFn}})],1),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),t.addFirst(s)}}},[t._v("\n                        加入购物车\n                    ")])])],1),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),e("p",{staticClass:"text"},[t._v("\n                    "+t._s(t.food.info)+"\n                ")])]),e("split"),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.food.ratings}}),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,(function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:a,staticClass:"rating-item"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v("\n                                    "+t._s(s.username)+"\n                                ")]),e("img",{staticClass:"avatar",attrs:{src:s.avatar}})]),e("div",{staticClass:"time"},[t._v("\n                                "+t._s(t._f("formatDate")(s.rateTime))+"\n                            ")]),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v("\n                                "+t._s(s.text)+"\n                            ")])])})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings||!food.ratings.length"}],staticClass:"no-rating"},[t._v("\n                        暂无评价\n                    ")])])],1)],1)])])},st=[],et=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"split"})},at=[],nt={name:"split",data:function(){return{}}},it=nt,rt=(e("2190"),Object(w["a"])(it,et,at,!1,null,"0512d78f",null)),ot=rt.exports,lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){return t.select(2,s)}}},[t._v("\n            "+t._s(t.desc.all)+"\n            "),e("span",{staticClass:"count"},[t._v("\n                "+t._s(t.ratings.length)+"\n            ")])]),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){return t.select(0,s)}}},[t._v("\n            "+t._s(t.desc.positive)+"\n            "),e("span",{staticClass:"count"},[t._v("\n                "+t._s(t.positives.length)+"\n            ")])]),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){return t.select(1,s)}}},[t._v("\n            "+t._s(t.desc.negative)+"\n            "),e("span",{staticClass:"count"},[t._v("\n                "+t._s(t.negatives.length)+"\n            ")])])]),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},ct=[],dt=0,ut=1,pt=2,ft={name:"ratingselect",data:function(){return{}},props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:pt},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},methods:{select:function(t){this.$parent.selectType=t},toggleContent:function(){this.$parent.onlyContent=!this.$parent.onlyContent}},computed:{positives:function(){return this.ratings.filter((function(t){return t.rateType===dt}))},negatives:function(){return this.ratings.filter((function(t){return t.rateType===ut}))}}},vt=ft,ht=(e("4985"),Object(w["a"])(vt,lt,ct,!1,null,"0675b925",null)),Ct=ht.exports;e("f576"),e("3b2b");function mt(t,s){/(y+)/i.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in e)if(new RegExp("(".concat(a,")")).test(s)){var n=e[a]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?n:n.padStart(n.length,"0"))}return s}var _t,gt=2,wt={props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:gt,onlyContent:!1,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=gt,this.onlyContent=!1,this.$nextTick((function(){t.scroll?t.scroll.refresh():t.scroll=new D["a"](t.$refs.food,{click:!0})}))},hide:function(){this.showFlag=!1},addFirst:function(t){a["a"].set(this.food,"count",1),this.$emit("cartAdd",t.target),this.$emit("foodCartAdd",t.target)},addParentFn:function(t){this.$emit("foodCartAdd",t)},needShow:function(t,s){return!(this.onlyContent&&!s)&&(this.selectType===gt||t===this.selectType)}},components:{cartcontrol:Y,split:ot,ratingselect:Ct},filters:{formatDate:function(t){var s=new Date(t);return mt(s,"yyyy-MM-dd hh:mm")}}},yt=wt,bt=(e("c5b7"),Object(w["a"])(yt,tt,st,!1,null,"087a8df8",null)),xt=bt.exports,kt={props:{seller:{type:Object},goods:{type:Array}},data:function(){return{listHeight:[0,1022,1174,1295,1603,1817,2049,2359,2854,3539],scrollY:0,foodList:[],selectedFood:{},classMap:[]}},mounted:function(){var t=this;this.classMap=["decrease","discount","special","invoice","guarantee"],this.$nextTick((function(){t._initScroll()}))},methods:{_initScroll:function(){var t=this;this.menuScroll=new D["a"](this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new D["a"](this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",(function(s){Math.round(s.y)>0?t.scrollY=0:t.scrollY=-Math.round(s.y)}))},_calculateHeight:function(){},selectMenu:function(t,s){this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},cartAddFn:function(t){var s=this;this.$nextTick((function(){s.$refs.shopCart.drop(t)}))},shopcartReturnFoldFn:function(t){this.$refs.shopCartMask&&(this.$refs.shopCartMask.hideList=!t)},shopcartReturnTrueFn:function(){this.$refs.shopCart.fold=!0},selectFood:function(t,s){this.selectedFood=t,this.$refs.food.show()}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach((function(s,e){s.foods.forEach((function(s,e){s.count&&t.push(s)}))})),t}},components:{shopcart:q,cartcontrol:Y,shopcartMask:Z,food:xt}},Tt=kt,$t=(e("b29e"),Object(w["a"])(Tt,N,E,!1,null,"29ed1ea8",null)),Pt=$t.exports,St=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),e("div",{staticClass:"title"},[t._v("综合评分")]),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate))])]),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),e("star",{attrs:{size:36,score:t.seller.foodScore}}),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+" 分钟")])])])]),e("split"),e("ratingselect",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,ratings:t.ratings}}),e("div",{staticClass:"rating-wrapper"},[e("ul",t._l(t.ratings,(function(s,a){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType,rating.text)"}],key:a,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v("\n                            "+t._s(s.username)+"\n                        ")]),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v("\n                                "+t._s(s.deliveryTime)+" 分钟\n                            ")])],1),e("p",{staticClass:"text"},[t._v("\n                            "+t._s(s.text)+"\n                        ")]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend&&rating.recommend.length"}],staticClass:"recommend"},[e("i",{staticClass:"icon-thumb_up"}),t._l(s.recommend,(function(s,a){return e("span",{key:a,staticClass:"item"},[t._v("\n                                "+t._s(s)+"\n                            ")])}))],2),e("div",{staticClass:"time"},[t._v("\n                            "+t._s(t._f("formatDate")(s.rateTime))+"\n                        ")])])])})),0)])],1)])},Ft=[],Ot=e("bd86"),jt=2,Mt=(_t={data:function(){return{}},methods:{needShow:function(t,s){return!(this.onlyContent&&!s)&&(this.selectType===jt||t===this.selectType)}},props:{seller:{type:Object},ratings:{type:Array}},components:{star:b,split:ot,ratingselect:Ct}},Object(Ot["a"])(_t,"data",(function(){return{selectType:jt,onlyContent:!1}})),Object(Ot["a"])(_t,"mounted",(function(){var t=this;this.$nextTick((function(){t.scroll=new D["a"](t.$refs.ratings,{click:!0})}))})),Object(Ot["a"])(_t,"filters",{formatDate:function(t){var s=new Date(t);return mt(s,"yyyy-MM-dd hh:mm")}}),_t),Nt=Mt,Et=(e("19fb"),Object(w["a"])(Nt,St,Ft,!1,null,"b3d25934",null)),Dt=Et.exports,Rt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),e("div",{staticClass:"desc"},[e("star",{attrs:{size:36,score:t.seller.score}}),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("\n                        元\n                    ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("\n                        元\n                    ")])]),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("\n                        分钟\n                    ")])])]),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),e("span",{staticClass:"text"},[t._v("\n                    "+t._s(t.favoriteText)+"\n                ")])])]),e("split"),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),e("div",{staticClass:"content-wrapper"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(s,a){return e("li",{key:a,staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[a].type]}),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])])})),0):t._e()]),e("split"),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picUl",staticClass:"pic-ul"},t._l(t.seller.pics,(function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t}})])})),0)])]),e("split"),e("div",{staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商家信息")]),e("ul",t._l(t.seller.infos,(function(s,a){return e("li",{key:a,staticClass:"info-item"},[t._v("\n                    "+t._s(s)+"\n                ")])})),0)])],1)])},At=[];function Lt(t,s,e){var a=window.localStorage.__seller__;a?(a=JSON.parse(a),a[t]||(a[t]={})):(a={},a[t]={}),a[t][s]=e,window.localStorage.__seller__=JSON.stringify(a)}function Ht(t,s,e){var a=window.localStorage.__seller__;if(!a)return e;if(a=JSON.parse(a)[t],!a)return e;var n=a[s];return n||e}var zt={data:function(){var t=this;return{favorite:function(){return Ht(t.seller.id,"favorite",!1)}()}},methods:{toggleFavorite:function(){this.favorite=!this.favorite,Lt(this.seller.id,"favorite",this.favorite)}},computed:{favoriteText:function(){return this.favorite?"已收藏":"点我收藏"}},props:{seller:{type:Object}},components:{star:b,split:ot},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},mounted:function(){var t=this;if(this.scroll=new D["a"](this.$refs.seller,{click:!0}),this.seller.pics){var s=120,e=6,a=(s+e)*this.seller.pics.length-e;this.$refs.picUl.style.width=a+"px",this.$nextTick((function(){t.picScroll?t.picScroll.refresh():t.picScroll=new D["a"](t.$refs.picWrapper,{scrollX:!0})}))}}},Bt=zt,Wt=(e("1e9d"),Object(w["a"])(Bt,Rt,At,!1,null,"72c1b7f3",null)),Yt=Wt.exports;a["a"].use(M["a"]);var It=new M["a"]({base:"/",routes:[{path:"/about",name:"about"},{path:"/goods",name:"goods",component:Pt},{path:"/ratings",name:"ratings",component:Dt},{path:"/seller",name:"seller",component:Yt},{path:"*",name:"重定向",redirect:"/goods"}],linkActiveClass:"active"});e("4cce");a["a"].config.productionTip=!1,new a["a"]({router:It,render:function(t){return t(j)}}).$mount("#app")},"5a1f":function(t,s,e){},6460:function(t,s,e){},"6d2d":function(t,s,e){},"76de":function(t,s,e){"use strict";var a=e("3ae4"),n=e.n(a);n.a},"91cf":function(t,s,e){},b0f0:function(t,s,e){},b29e:function(t,s,e){"use strict";var a=e("1f9e"),n=e.n(a);n.a},b7ad:function(t,s,e){},c417:function(t,s,e){},c5b7:function(t,s,e){"use strict";var a=e("c417"),n=e.n(a);n.a},d2f4:function(t,s,e){"use strict";var a=e("6460"),n=e.n(a);n.a}});