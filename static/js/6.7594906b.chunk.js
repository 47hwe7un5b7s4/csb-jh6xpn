(this.webpackJsonpMixskin=this.webpackJsonpMixskin||[]).push([[6],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a,i,r=n(99),o=n(91),c=n.n(o),s=n(92),d=n(12),u=n(3),p=n(102),g=n(1),l=n.n(g),m=n(29),f=n(16),b=n(0),h=u.b.div.withConfig({displayName:"skinview__BackgroundImage",componentId:"sc-138mb1v-0"})([""," background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABtJREFUGFdj3Lt3738nJycGxv/////ft28fAwBbawo1G1p8AgAAAABJRU5ErkJggg==\");image-rendering:pixelated;image-rendering:-moz-crisp-edges;image-rendering:crisp-edges;background-repeat:repeat;background-size:40px;background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAAXNSR0IArs4c6QAAABtJREFUGFdjfPfu3X9BQUEGxv////9///49AwBfcArIPbKUHwAAAABJRU5ErkJggg==');"],{height:"100%",width:"max-content",borderRadius:"0.5rem","--tw-shadow":"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)","--tw-border-opacity":"1",borderColor:"rgba(209, 213, 219, var(--tw-border-opacity))",borderWidth:"4px",maxWidth:"100%"});function w(e){var t=e.size,n=e.skin,r=l.a.createRef(),o=Object(g.useState)(!1),c=Object(d.a)(o,2),s=c[0],u=c[1];return Object(g.useEffect)((function(){var e;a=new p.a({canvas:null!==(e=r.current)&&void 0!==e?e:void 0,width:t.width,height:t.height,skin:n.skinUrl,cape:n.capeUrl,alpha:!0,model:n.model});var o=Object(p.c)(a);o.enableRotate=!0,o.enableZoom=!1,o.enablePan=!1,(i=a.animations.add(p.b)).progress=1.5,i.speed=.56}),[]),Object(g.useEffect)((function(){a.setSize(t.width,t.height)}),[t]),Object(g.useEffect)((function(){a.loadSkin(n.skinUrl),n.capeUrl?a.loadCape(n.capeUrl):a.resetCape()}),[n]),Object(g.useEffect)((function(){i.paused=!s}),[s]),Object(b.jsx)(x,{children:Object(b.jsxs)(h,{children:[Object(b.jsx)(j,{onClick:function(){return u(!s)},children:Object(b.jsx)(v,{children:Object(b.jsx)(m.a,{icon:s?f.f:f.h,size:"2x"})})}),Object(b.jsx)(y,{$_css:t.width,$_css2:t.height,$_css3:t.height/t.width,children:Object(b.jsx)(O,{ref:r,style:{imageRendering:"pixelated"},$_css4:t.width,$_css5:t.height,$_css6:t.height/t.width})})]})})}var x=Object(u.b)("div").withConfig({displayName:"skinview___StyledDiv",componentId:"sc-138mb1v-1"})({marginLeft:"auto",marginRight:"auto"}),j=Object(u.b)("div").withConfig({displayName:"skinview___StyledDiv2",componentId:"sc-138mb1v-2"})({"--tw-text-opacity":"1",color:"rgba(55, 65, 81, var(--tw-text-opacity))",width:"100%",display:"flex",justifyContent:"flex-end",":hover":{cursor:"pointer"}}),v=Object(u.b)("div").withConfig({displayName:"skinview___StyledDiv3",componentId:"sc-138mb1v-3"})({padding:"0.5rem",position:"absolute"}),y=Object(u.b)("div").withConfig({displayName:"skinview___StyledDiv4",componentId:"sc-138mb1v-4"})(["width:",";height:",";max-width:80vw;max-height:calc(80vw * ",");"],(function(e){return e.$_css}),(function(e){return e.$_css2}),(function(e){return e.$_css3})),O=Object(u.b)("canvas").withConfig({displayName:"skinview___StyledCanvas",componentId:"sc-138mb1v-5"})(["width:",";height:",";max-width:80vw;max-height:calc(80vw * ",");"],(function(e){return e.$_css4}),(function(e){return e.$_css5}),(function(e){return e.$_css6})),A=n(96),_=n(30),k=n.n(_),C=n(109),I=n.n(C),S=n(104);function R(e){var t=e.skinData,n=e.updateSkin,a=e.inputs,i=e.setInputs,o=e.author,u=e.name,p=Object(S.a)(),l=p.register,h=p.handleSubmit,x=Object(g.useState)("Share"),j=Object(d.a)(x,2),v=j[0],y=j[1];return Object(b.jsxs)(B,{children:[Object(b.jsx)(D,{children:u}),Object(b.jsxs)(N,{children:[Object(b.jsx)(w,{size:{height:600,width:400},skin:{skinUrl:t,model:"auto-detect"}}),Object(b.jsxs)("div",{children:[a.map((function(e,t){return Object(b.jsx)(g.Suspense,{fallback:Object(b.jsx)(P,{}),children:Object(b.jsx)(A.a,{promiseFn:Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.a.get("https://playerdb.co/api/player/minecraft/"+e).catch((function(e){return e.response}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:function(e){var o,d=e.data;return e.isLoading?Object(b.jsxs)(E,{onSubmit:function(e){return e.preventDefault()},children:[Object(b.jsx)(U,{type:"text"}),Object(b.jsx)(L,{type:"submit",children:Object(b.jsx)(m.a,{icon:f.j})})]}):Object(b.jsxs)(V,{onSubmit:h(function(){var e=Object(s.a)(c.a.mark((function e(r){var o,s,d,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r[t],e.next=3,k.a.get("https://playerdb.co/api/player/minecraft/"+o).catch((function(e){return e.response}));case 3:(s=e.sent.data).success?((u=a)[t]=null!==(d=s.data.player.id)&&void 0!==d?d:"",i(u),n()):alert("Error, Invalid Username / UUID");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),children:[Object(b.jsx)(q,Object(r.a)({type:"text",defaultValue:null!==(o=d.data.success?d.data.data.player.username:"da8a8993-adfa-4d29-99b1-9d0f62fbb78d")&&void 0!==o?o:"da8a8993-adfa-4d29-99b1-9d0f62fbb78d"},l(t.toString()))),Object(b.jsx)(F,{type:"submit",children:Object(b.jsx)(m.a,{icon:f.j})})]})}})},t)})),Object(b.jsxs)(T,{children:[Object(b.jsxs)($,{onClick:function(){I()(null!==t&&void 0!==t?t:"","MergedSkin","image/png")},children:["Download\xa0",Object(b.jsx)(m.a,{icon:f.b})]}),Object(b.jsxs)(z,{$_css:{margin:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",height:"2.5rem",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))",":hover":{cursor:"pointer",outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},flexShrink:"1",flexGrow:"1"},children:[Object(b.jsx)(Q,{$_css2:{"--tw-bg-opacity":"1",backgroundColor:"rgba(244, 63, 94, var(--tw-bg-opacity))",fontSize:"0.75rem",lineHeight:"1rem"},$_css3:{"--tw-bg-opacity":"1",backgroundColor:"rgba(244, 63, 94, var(--tw-bg-opacity))"},children:"Soon\u2122"}),"Apply\xa0",Object(b.jsx)(m.a,{icon:f.c})]})]}),Object(b.jsx)(G,{children:Object(b.jsx)(J,{onClick:function(){navigator.clipboard.writeText(window.location.origin+window.location.pathname+window.location.search+"#"+a.join("&")),y("Copied"),setTimeout((function(){y("Share")}),3e3)},children:Object(b.jsxs)(X,{children:[v,"\xa0",Object(b.jsx)(m.a,{icon:f.c})]})})}),Object(b.jsx)(H,{children:Object(b.jsxs)(M,{children:["Author:\xa0\xa0",null!==o&&void 0!==o?o:"MixSkin"]})})]})]})]})}var B=Object(u.b)("div").withConfig({displayName:"ViewPage___StyledDiv",componentId:"sc-f6wq-0"})({display:"flex",flexDirection:"column",marginTop:"2rem"}),D=Object(u.b)("span").withConfig({displayName:"ViewPage___StyledSpan",componentId:"sc-f6wq-1"})({marginLeft:"auto",marginRight:"auto",fontSize:"2.25rem",lineHeight:"2.5rem"}),N=Object(u.b)("div").withConfig({displayName:"ViewPage___StyledDiv2",componentId:"sc-f6wq-2"})({marginLeft:"auto",marginRight:"auto",marginTop:"2rem",marginBottom:"2rem",height:"max-content",width:"max-content",display:"flex",flexDirection:"column","@media (min-width: 768px)":{flexDirection:"row"}}),P=Object(u.b)("div").withConfig({displayName:"ViewPage___StyledDiv3",componentId:"sc-f6wq-3"})({width:"100%",margin:"1rem",display:"flex",flexDirection:"row",alignContent:"center",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",height:"2.5rem",borderRadius:"0.375rem"}),E=Object(u.b)("form").withConfig({displayName:"ViewPage___StyledForm",componentId:"sc-f6wq-4"})({width:"100%",margin:"1rem",display:"flex",flexDirection:"row",alignContent:"center"}),U=Object(u.b)("input").withConfig({displayName:"ViewPage___StyledInput",componentId:"sc-f6wq-5"})({height:"2.5rem",borderRadius:"0.375rem",":hover":{outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},"--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),L=Object(u.b)("button").withConfig({displayName:"ViewPage___StyledButton",componentId:"sc-f6wq-6"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",height:"2.5rem",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))",":hover":{cursor:"pointer",outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},marginLeft:"0.5rem"}),V=Object(u.b)("form").withConfig({displayName:"ViewPage___StyledForm2",componentId:"sc-f6wq-7"})({width:"100%",margin:"1rem",display:"flex",flexDirection:"row",alignContent:"center"}),q=Object(u.b)("input").withConfig({displayName:"ViewPage___StyledInput2",componentId:"sc-f6wq-8"})({height:"2.5rem",borderRadius:"0.375rem",":hover":{outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},"--tw-bg-opacity":"1",backgroundColor:"rgba(243, 244, 246, var(--tw-bg-opacity))",paddingTop:"0.25rem",paddingBottom:"0.25rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),F=Object(u.b)("button").withConfig({displayName:"ViewPage___StyledButton2",componentId:"sc-f6wq-9"})({paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",height:"2.5rem",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))",":hover":{cursor:"pointer",outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},marginLeft:"0.5rem"}),T=Object(u.b)("div").withConfig({displayName:"ViewPage___StyledDiv4",componentId:"sc-f6wq-10"})({marginLeft:"0.5rem",marginRight:"0.5rem",display:"flex"}),$=Object(u.b)("button").withConfig({displayName:"ViewPage___StyledButton3",componentId:"sc-f6wq-11"})({margin:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",height:"2.5rem",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))",":hover":{cursor:"pointer",outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},flexShrink:"1",flexGrow:"1"}),z=Object(u.b)("button").withConfig({displayName:"ViewPage___StyledButton4",componentId:"sc-f6wq-12"})([""," overflow:hidden;position:relative;"],(function(e){return e.$_css})),Q=Object(u.b)("span").withConfig({displayName:"ViewPage___StyledSpan2",componentId:"sc-f6wq-13"})([""," margin:0;color:white;padding:1px 0;position:absolute;top:0;right:0;transform:translateX(13%) translateY(0%) rotate(30deg);transform-origin:top left;:before,:after{content:'';position:absolute;top:0;margin:0 -1px;width:100%;height:100%;","}:before{right:100%;}:after{left:100%;}"],(function(e){return e.$_css2}),(function(e){return e.$_css3})),G=Object(u.b)("div").withConfig({displayName:"ViewPage___StyledDiv5",componentId:"sc-f6wq-14"})({marginLeft:"0.5rem",marginRight:"0.5rem",display:"flex"}),J=Object(u.b)("button").withConfig({displayName:"ViewPage___StyledButton5",componentId:"sc-f6wq-15"})({margin:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",height:"2.5rem",borderRadius:"0.375rem","--tw-bg-opacity":"1",backgroundColor:"rgba(209, 213, 219, var(--tw-bg-opacity))",":hover":{cursor:"pointer",outline:"2px solid transparent",outlineOffset:"2px"},":focus":{outline:"2px solid transparent",outlineOffset:"2px"},flexShrink:"1",flexGrow:"1",display:"flex",flexDirection:"column"}),X=Object(u.b)("span").withConfig({displayName:"ViewPage___StyledSpan3",componentId:"sc-f6wq-16"})({marginLeft:"auto",marginRight:"auto"}),H=Object(u.b)("div").withConfig({displayName:"ViewPage___StyledDiv6",componentId:"sc-f6wq-17"})({display:"flex"}),M=Object(u.b)("span").withConfig({displayName:"ViewPage___StyledSpan4",componentId:"sc-f6wq-18"})({marginLeft:"auto",marginRight:"auto",fontSize:"1.125rem",lineHeight:"1.75rem"})},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(91),i=n.n(a),r=n(92),o=n(95);function c(e){return s.apply(this,arguments)}function s(){return s=Object(r.a)(i.a.mark((function e(t){var n,a,r,c,s,d,u,p=arguments,g=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((g.length<=1?0:g.length-1)<t.amount)){e.next=3;break}throw console.error("Too Few Arguments"),new Error("Too Few Arguments");case 3:(n=document.createElement("canvas")).width=64,n.height=64,a=[],r=i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=document.createElement("canvas")).width=64,r.height=64,(c=new Image).crossOrigin="anonymous",c.src=t+1<1||p.length<=t+1?void 0:p[t+1],e.next=8,new Promise((function(e){c.onload=function(){e(null)}}));case 8:null===(n=r.getContext("2d"))||void 0===n||n.drawImage(c,0,0,c.width,c.height),r=Object(o.a)(r,c),a[a.length]=r;case 11:case"end":return e.stop()}}),e)})),c=0;case 9:if(!(c<t.amount)){e.next=14;break}return e.delegateYield(r(c),"t0",11);case 11:c++,e.next=9;break;case 14:if(s=n.getContext("2d")){e.next=17;break}return e.abrupt("return");case 17:d=0;case 18:if(!(d<64)){e.next=32;break}if(t.image[d]){e.next=21;break}return e.abrupt("continue",29);case 21:u=0;case 22:if(!(u<64)){e.next=29;break}if(void 0!==t.image[d][u]){e.next=25;break}return e.abrupt("continue",26);case 25:s.putImageData(a[t.image[d][u]].getContext("2d").getImageData(d,u,1,1),d,u);case 26:u++,e.next=22;break;case 29:d++,e.next=18;break;case 32:return e.abrupt("return",n.toDataURL());case 33:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}},128:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(99),i=n(91),r=n.n(i),o=n(100),c=n(92),s=n(12),d=n(3),u=n(1),p=n(101),g=n(106);function l(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(r.a.mark((function e(t){var n,a,i,o,c,s,d,u,p,g;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a={},(i=document.createElement("canvas")).width=64,i.height=64,(o=new Image).crossOrigin="anonymous",o.src=t,e.next=10,new Promise((function(e){o.onload=function(){e(null)}}));case 10:if(c=i.getContext("2d")){e.next=13;break}return e.abrupt("return",void 0);case 13:c.drawImage(o,0,0,64,64),s=0;case 15:if(!(s<64)){e.next=31;break}d=0;case 17:if(!(d<64)){e.next=28;break}if(0!==(u=c.getImageData(s,d,1,1).data)[3]){e.next=21;break}return e.abrupt("continue",25);case 21:p=f(u[0],u[1],u[2],u[3]),void 0===n[p]&&(void 0===(g=Object.values(n).sort()[Object.values(n).length-1])&&(g=-1),n[p]=g+1),a[s]||(a[s]={}),a[s][d]=n[p];case 25:d++,e.next=17;break;case 28:s++,e.next=15;break;case 31:return e.abrupt("return",{image:a,amount:Object.values(n).length});case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,t,n,a){if(e>255||t>255||n>255||a>255)throw new Error("Invalid color component");return"#"+("00"+e.toString(16)).slice(-2)+("00"+t.toString(16)).slice(-2)+("00"+n.toString(16)).slice(-2)+("00"+a.toString(16)).slice(-2)}var b=n(104);function h(e){return w.apply(this,arguments)}function w(){return(w=Object(c.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=document.createElement("canvas")).width=64,n.height=64,(a=new Image).crossOrigin="anonymous",a.src=t,e.next=8,new Promise((function(e){a.onload=function(){e(null)}}));case 8:return n.getContext("2d").drawImage(a,0,0,64,64),x(n,0,0,32,16,32,0),x(n,16,16,40,32,0,16),x(n,0,16,16,32,0,16),x(n,40,16,56,32,0,16),x(n,16,48,32,64,-16,0),x(n,32,48,48,64,16,0),e.abrupt("return",n.toDataURL());case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,n,a,i,r,o){if(e){var c=e.getContext("2d");if(c)for(var s=t;s<a;s++)for(var d=n;d<i;d++)c.putImageData(c.getImageData(s,d,1,1),s+r,d+o)}}var j=n(0),v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRJREFUeF7t1QERADAMArHi33SFfOagHBm7+Fv8/hOABsQTQCBeAJ8gAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgAAC8QQQiBfACiCAQDwBBOIFsAIIIBBPAIF4AawAAgjEE0AgXgArgECdwANo2ABBrP9ggQAAAABJRU5ErkJggg==";function y(){var e=Object(u.useState)(void 0),t=Object(s.a)(e,2),n=t[0],i=t[1],d=Object(u.useState)("Invalid PNG Image"),m=Object(s.a)(d,2),f=m[0],w=m[1],x=Object(u.useState)("No File Chosen"),y=Object(s.a)(x,2),B=y[0],D=y[1],N=Object(u.useState)(void 0),P=Object(s.a)(N,2),E=P[0],U=P[1],L=Object(u.useRef)(),V=Object(u.useState)([]),q=Object(s.a)(V,2),F=q[0],T=q[1],$=Object(b.a)(),z=$.register,Q=$.watch;return Object(j.jsxs)("div",{children:[Object(j.jsxs)(O,{children:[Object(j.jsx)(A,{type:"file",accept:"image/png",ref:L,onChange:function(){var e;if(""!==L.current.value){var t=new FileReader;t.addEventListener("load",Object(c.a)(r.a.mark((function e(){var n,a,c,s,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=new Image).crossOrigin="anonymous","string"===typeof t.result){e.next=5;break}return w("Error Parsing Image"),e.abrupt("return");case 5:return a.src=t.result,e.next=8,new Promise((function(e){a.onload=function(){e(null)}}));case 8:if(64===a.height&&64===a.width){e.next=11;break}return w("Invalid Dimensions"),e.abrupt("return");case 11:if(w(void 0),c=t.result,!Q("overlay")){e.next=17;break}return e.next=16,h(c);case 16:c=e.sent;case 17:return e.next=19,l(c);case 19:if(s=e.sent){e.next=23;break}return w("Merging Failed..."),e.abrupt("return");case 23:return U(s),d=Array.from(Array(s.amount).keys()).map((function(e){var t;return null!==(t=localStorage.getItem("skin"+e))&&void 0!==t?t:""})),T(d),e.t0=i,e.next=29,g.a.apply(void 0,[s].concat(Object(o.a)(d.map((function(e){return"https://mc-heads.net/skin/"+e})))));case 29:if(e.t2=n=e.sent,e.t1=null!==e.t2,!e.t1){e.next=33;break}e.t1=void 0!==n;case 33:if(!e.t1){e.next=37;break}e.t3=n,e.next=38;break;case 37:e.t3=v;case 38:e.t4=e.t3,(0,e.t0)(e.t4);case 40:case"end":return e.stop()}}),e)}))),!1),(null===L||void 0===L||null===(e=L.current)||void 0===e?void 0:e.files)&&L.current.files[0]?t.readAsDataURL(L.current.files[0]):w("Invalid PNG Image"),D(L.current.value.split("/").reverse()[0]),L.current.value=""}}}),Object(j.jsx)(_,{onClick:function(){return L.current.click()},children:"Select Image"}),Object(j.jsx)(k,{children:B}),Object(j.jsx)(C,{children:"Copy Main Skin to Overlay?"}),Object(j.jsx)(I,Object(a.a)({type:"checkbox"},z("overlay")))]}),f&&Object(j.jsx)(S,{children:Object(j.jsx)(R,{children:f})}),n&&E&&Object(j.jsx)(p.a,{name:"Custom Skin",skinData:n,updateSkin:Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,g.a.apply(void 0,[E].concat(Object(o.a)(F.map((function(e){return"https://mc-heads.net/skin/"+e})))));case 3:if(e.t2=t=e.sent,e.t1=null!==e.t2,!e.t1){e.next=7;break}e.t1=void 0!==t;case 7:if(!e.t1){e.next=11;break}e.t3=t,e.next=12;break;case 11:e.t3=v;case 12:e.t4=e.t3,(0,e.t0)(e.t4);case 14:case"end":return e.stop()}}),e)}))),inputs:F,setInputs:T})]})}var O=Object(d.b)("div").withConfig({displayName:"CustomPage___StyledDiv",componentId:"sc-4zs5as-0"})({display:"flex",flexDirection:"row"}),A=Object(d.b)("input").withConfig({displayName:"CustomPage___StyledInput",componentId:"sc-4zs5as-1"})({display:"none"}),_=Object(d.b)("button").withConfig({displayName:"CustomPage___StyledButton",componentId:"sc-4zs5as-2"})({margin:"1rem",marginRight:"0.5rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem",display:"inline-block","--tw-bg-opacity":"1",backgroundColor:"rgba(229, 231, 235, var(--tw-bg-opacity))"}),k=Object(d.b)("span").withConfig({displayName:"CustomPage___StyledSpan",componentId:"sc-4zs5as-3"})({display:"inline-block",marginTop:"auto",marginBottom:"auto"}),C=Object(d.b)("span").withConfig({displayName:"CustomPage___StyledSpan2",componentId:"sc-4zs5as-4"})({display:"inline-block",marginLeft:"auto",marginTop:"auto",marginBottom:"auto"}),I=Object(d.b)("input").withConfig({displayName:"CustomPage___StyledInput2",componentId:"sc-4zs5as-5"})({display:"inline-block",margin:"1rem",marginTop:"auto",marginBottom:"auto"}),S=Object(d.b)("div").withConfig({displayName:"CustomPage___StyledDiv2",componentId:"sc-4zs5as-6"})({width:"100%"}),R=Object(d.b)("div").withConfig({displayName:"CustomPage___StyledDiv3",componentId:"sc-4zs5as-7"})({padding:"0.5rem",margin:"0.5rem","--tw-bg-opacity":"1",backgroundColor:"rgba(225, 29, 72, var(--tw-bg-opacity))",borderRadius:"0.375rem"})},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(91),i=n.n(a),r=n(92);function o(e,t){if(32===t.height){var n=e.getContext("2d");if(!n)return;for(var a=0;a<16;a++)for(var i=16;i<32;i++)n.putImageData(n.getImageData(a,i,1,1),a+16,i+32);for(var r=40;r<56;r++)for(var o=16;o<32;o++)n.putImageData(n.getImageData(r,o,1,1),r-8,o+32)}return e}function c(e){return s.apply(this,arguments)}function s(){return(s=Object(r.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=document.createElement("canvas")).width=64,a.height=64,(r=new Image).crossOrigin="anonymous",r.src=t,e.next=8,new Promise((function(e){r.onload=function(){e(null)}}));case 8:return null===(n=a.getContext("2d"))||void 0===n||n.drawImage(r,0,0,r.width,r.height),o(a,r),e.abrupt("return",a.toDataURL());case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=6.7594906b.chunk.js.map