(this.webpackJsonpMixskin=this.webpackJsonpMixskin||[]).push([[8],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(91),n=r.n(a),i=r(92),o=r(95);function c(e){return s.apply(this,arguments)}function s(){return s=Object(i.a)(n.a.mark((function e(t){var r,a,i,c,s,d,u,g=arguments,p=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((p.length<=1?0:p.length-1)<t.amount)){e.next=3;break}throw console.error("Too Few Arguments"),new Error("Too Few Arguments");case 3:(r=document.createElement("canvas")).width=64,r.height=64,a=[],i=n.a.mark((function e(t){var r,i,c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=document.createElement("canvas")).width=64,i.height=64,(c=new Image).crossOrigin="anonymous",c.src=t+1<1||g.length<=t+1?void 0:g[t+1],e.next=8,new Promise((function(e){c.onload=function(){e(null)}}));case 8:null===(r=i.getContext("2d"))||void 0===r||r.drawImage(c,0,0,c.width,c.height),i=Object(o.a)(i,c),a[a.length]=i;case 11:case"end":return e.stop()}}),e)})),c=0;case 9:if(!(c<t.amount)){e.next=14;break}return e.delegateYield(i(c),"t0",11);case 11:c++,e.next=9;break;case 14:if(s=r.getContext("2d")){e.next=17;break}return e.abrupt("return");case 17:d=0;case 18:if(!(d<64)){e.next=32;break}if(t.image[d]){e.next=21;break}return e.abrupt("continue",29);case 21:u=0;case 22:if(!(u<64)){e.next=29;break}if(void 0!==t.image[d][u]){e.next=25;break}return e.abrupt("continue",26);case 25:s.putImageData(a[t.image[d][u]].getContext("2d").getImageData(d,u,1,1),d,u);case 26:u++,e.next=22;break;case 29:d++,e.next=18;break;case 32:return e.abrupt("return",r.toDataURL());case 33:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},111:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var a=r(91),n=r.n(a),i=r(92),o=r(1),c=r(3),s=r(102),d=r(96),u=r(10),g=r(0);function p(){return(p=Object(i.a)(n.a.mark((function e(t,r,a){var i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=new s.a({width:500,height:800,renderPaused:!0,model:null!==a&&void 0!==a&&a?"slim":"default"})).camera.rotation.x=-.62,i.camera.rotation.y=.534,i.camera.rotation.z=.348,i.camera.position.x=30.5,i.camera.position.y=24,i.camera.position.z=42,e.next=9,i.loadSkin(t);case 9:if(!r){e.next=12;break}return e.next=12,i.loadCape(r);case 12:return i.render(),o=i.canvas.toDataURL(),i.dispose(),e.abrupt("return",o);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=c.b.div.withConfig({displayName:"gridtile__BackgroundImage",componentId:"sc-9nzevj-0"})([""," background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABtJREFUGFdj3Lt3738nJycGxv/////ft28fAwBbawo1G1p8AgAAAABJRU5ErkJggg==\");image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;background-repeat:repeat;background-size:20px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABtJREFUGFdjfPfu3X9BQUEGxv////9///49AwBfcArIPbKUHwAAAABJRU5ErkJggg==');"],{height:"100%",width:"max-content",borderRadius:"0.5rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-border-opacity":"1",borderColor:"rgba(209, 213, 219, var(--tw-border-opacity))",borderWidth:"4px",marginLeft:"auto",marginRight:"auto",maxWidth:"100%"});function h(e){var t=e.skin,r=e.display,a=e.short,n=e.to;return Object(g.jsx)(u.b,{to:"/"+n+"/"+a,children:Object(g.jsxs)(m,{style:{backgroundColor:"gray"},children:[Object(g.jsx)(l,{children:Object(g.jsx)(b,{children:r})}),void 0!==t?Object(g.jsx)(o.Suspense,{fallback:Object(g.jsx)(g.Fragment,{}),children:Object(g.jsx)(d.a,{promiseFn:function(){return function(e,t,r){return p.apply(this,arguments)}(t)},children:function(e){var t=e.data;return e.isLoading?Object(g.jsx)(f,{}):Object(g.jsx)(x,{src:t,alt:"Minecraft Skin",width:250,height:400})}})}):Object(g.jsx)(w,{})]})})}var l=Object(c.b)("div").withConfig({displayName:"gridtile___StyledDiv",componentId:"sc-9nzevj-1"})({overflow:"hidden","--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",fontWeight:"500",fontSize:"1.125rem",lineHeight:"1.75rem",textAlign:"center",marginLeft:"auto",marginRight:"auto",width:"100%",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderTopLeftRadius:"0.375rem",borderTopRightRadius:"0.375rem"}),b=Object(c.b)("span").withConfig({displayName:"gridtile___StyledSpan",componentId:"sc-9nzevj-2"})({marginLeft:"0.75rem",marginRight:"0.75rem"}),f=Object(c.b)("div").withConfig({displayName:"gridtile___StyledDiv2",componentId:"sc-9nzevj-3"})(["width:250px;height:400px;"]),x=Object(c.b)("img").withConfig({displayName:"gridtile___StyledImg",componentId:"sc-9nzevj-4"})({maxWidth:"100%"}),w=Object(c.b)("div").withConfig({displayName:"gridtile___StyledDiv3",componentId:"sc-9nzevj-5"})(["width:250px;height:400px;"])},125:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return b}));var a=r(91),n=r.n(a),i=r(100),o=r(92),c=r(3),s=r(1),d=r(96),u=r(106),g=r(111),p=r(16),m=r(29),h=r(10),l=r(0);function b(e){var t=e.data;return Object(l.jsxs)(f,{children:[t.map((function(e){return Object(l.jsx)("div",{children:Object(l.jsx)(s.Suspense,{fallback:Object(l.jsx)(l.Fragment,{}),children:Object(l.jsx)(d.a,{promiseFn:Object(o.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.apply(void 0,[e].concat(Object(i.a)(Array.from(Array(e.amount).keys()).map((function(e){return"https://mc-heads.net/skin/"+localStorage.getItem("skin"+e)})))));case 2:if(t.t1=r=t.sent,t.t0=null!==t.t1,!t.t0){t.next=6;break}t.t0=void 0!==r;case 6:if(!t.t0){t.next=10;break}t.t2=r,t.next=11;break;case 10:t.t2="";case 11:return t.abrupt("return",t.t2);case 12:case"end":return t.stop()}}),t)}))),children:function(t){var r=t.data,a=t.isLoading;return Object(l.jsx)(g.a,{skin:a?void 0:r,display:e.name,short:e.short,to:"view"})}})})},e.short)})),Object(l.jsx)(h.b,{to:"/other",children:Object(l.jsx)(x,{$_css:{borderRadius:"0.5rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-border-opacity":"1",borderColor:"rgba(229, 231, 235, var(--tw-border-opacity))",borderWidth:"4px",marginLeft:"auto",marginRight:"auto",display:"flex"},children:Object(l.jsxs)(w,{children:["Other Effects",Object(l.jsx)(v,{children:Object(l.jsx)(m.a,{icon:p.a,size:"2x"})})]})})})]})}var f=Object(c.b)("div").withConfig({displayName:"home___StyledDiv",componentId:"sc-gfpyq-0"})({display:"grid",gridTemplateColumns:"repeat(1, minmax(0, 1fr))",gap:"1rem",margin:"1.5rem","@media (min-width: 640px)":{gridTemplateColumns:"repeat(2, minmax(0, 1fr))"},"@media (min-width: 768px)":{gridTemplateColumns:"repeat(3, minmax(0, 1fr))"},"@media (min-width: 1024px)":{gridTemplateColumns:"repeat(5, minmax(0, 1fr))"}}),x=Object(c.b)("div").withConfig({displayName:"home___StyledDiv2",componentId:"sc-gfpyq-1"})(["height:444px;width:258px;",""],(function(e){return e.$_css})),w=Object(c.b)("span").withConfig({displayName:"home___StyledSpan",componentId:"sc-gfpyq-2"})({margin:"auto","--tw-text-opacity":"1",color:"rgba(107, 114, 128, var(--tw-text-opacity))",display:"flex",flexDirection:"column",fontSize:"1.125rem",lineHeight:"1.75rem"}),v=Object(c.b)("span").withConfig({displayName:"home___StyledSpan2",componentId:"sc-gfpyq-3"})({marginLeft:"auto",marginRight:"auto",marginTop:"0.5rem"})},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return c}));var a=r(91),n=r.n(a),i=r(92);function o(e,t){if(32===t.height){var r=e.getContext("2d");if(!r)return;for(var a=0;a<16;a++)for(var n=16;n<32;n++)r.putImageData(r.getImageData(a,n,1,1),a+16,n+32);for(var i=40;i<56;i++)for(var o=16;o<32;o++)r.putImageData(r.getImageData(i,o,1,1),i-8,o+32)}return e}function c(e){return s.apply(this,arguments)}function s(){return(s=Object(i.a)(n.a.mark((function e(t){var r,a,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=document.createElement("canvas")).width=64,a.height=64,(i=new Image).crossOrigin="anonymous",i.src=t,e.next=8,new Promise((function(e){i.onload=function(){e(null)}}));case 8:return null===(r=a.getContext("2d"))||void 0===r||r.drawImage(i,0,0,i.width,i.height),o(a,i),e.abrupt("return",a.toDataURL());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=8.15046e46.chunk.js.map