(this["webpackJsonpvcx-react"]=this["webpackJsonpvcx-react"]||[]).push([[0],{24:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),o=a.n(l),c=(a(24),a(25),a(10)),i=a(1),s=(a(26),window.EnxRtc),m=window.EnxWb;function d(e){var t,a,l,o={player:{autoplay:"",name:"",nameDisplayMode:"",frameFitMode:"",skin:"default",class:""},toolbar:{displayMode:!1}},c=Object(i.f)().token,d=[],u=!1,v=!1,f=null,E=new Map,p={video:!0,audio:!0,data:!0,videoSize:[640,480,640,480]};a={player:{height:"150px",width:"150px",minHeight:"150px",minWidth:"150px"},toolbar:{displayMode:!1},resizer:!1},l={player:{height:"100%",width:"100%"},resizer:!1,toolbar:{displayMode:!1}},Object(n.useEffect)((function(){y()}),[]);var h=function(e){e.removeAttribute("disabled"),e.style.cursor="pointer",e.style.pointerEvents="auto"},y=function(){console.log("joining the room..."),document.querySelector("#local_view").classList.add("local_class_peep"),document.querySelector("#remote_view").classList.add("remote_class_peep");var e=document.querySelector("#self_vMute");s.Logger.setLogLevel(0),t=s.joinRoom(c,p,(function(e,n){if(n&&null==n&&(document.querySelector(".error_div").innerHTML="Room connection error."+n.message),e&&null!==e){t.play("self-view",a),f=e.room,"moderator"===f.me.role;for(var r=e.publishId,o=0;o<e.streams.length;o++)f.subscribe(e.streams[o]);f.addEventListener("active-talkers-updated",(function(e){console.log("Active Talker List :- "+JSON.stringify(e));var t=document.querySelector("#call_div").childNodes;if(d=e.message.activeList,e.message&&null!==e.message&&e.message.activeList&&null!==e.message.activeList&&(0===d.length&&(document.querySelector("#call_div").innerHTML="",document.querySelector(".remote-name").innerText=""),E.size>0)){if(t.length>=1)return;for(var a in f.remoteStreams.getAll())for(var n=f.remoteStreams.getAll()[a],r=0;r<d.length;r++)d[r].streamId===n.getID()&&(n,document.querySelector(".self-name").innerHTML=f.me.name,n.play("call_div",l),document.querySelector(".remote-name").innerHTML=d[r].name)}})),f.addEventListener("room-record-on",(function(){document.querySelector("#rec_notification").style.display="block"})),f.addEventListener("room-record-off",(function(){document.querySelector("#rec_notification").style.display="none"})),f.addEventListener("stream-subscribed",(function(e){e.stream.getID()!==r&&E.set(e.stream.getID(),e.stream)})),f.addEventListener("user-disconnected",(function(e){document.querySelector("#call_div").innerHTML="",document.querySelector(".remote-name").innerText=""})),f.addEventListener("room-disconnected",(function(e){window.location.href="/"}))}})),document.querySelector("#self_aMute").addEventListener("click",(function(e){if(u){var t=new m({canvasId:"wb",initialWidth:1e3,initialHeight:500,scheme:"default"});t.create(f),t.startCollaboration(),f.addEventListener("user-connected",(function(e){var a=e.clientId;t.shareWith(a)}));var a=0;f.addEventListener("stream-subscribed",(function(e){console.log("stream_subscribed",a++)})),f.addEventListener("canvas-started",(function(e){if(e.message.clientId!=f.me.clientId){!0,!0;var t=e.message.streamId;f.remoteStreams.get(t).play("canvasStreamPlayer",o),document.querySelector("#canvasStreamPlayer").style.border="1px solid red"}}))}})),f.addEventListener("canvas-stopped",(function(e){!1,!1,document.querySelector("#canvasStreamPlayer").innerHTML="",document.querySelector("#canvasStreamPlayer").style.border="none"})),document.querySelector("#self_aMute").addEventListener("click",(function(e){u?f.mute?console.log("Your audio is muted by moderator"):t.unmuteAudio((function(e){document.querySelector("#self_aMute").classList.remove("fa-microphone-slash"),document.querySelector("#self_aMute").classList.add("fa-microphone"),u=!1})):t.muteAudio((function(e){document.querySelector("#self_aMute").classList.remove("fa-microphone"),document.querySelector("#self_aMute").classList.add("fa-microphone-slash"),u=!0}))})),document.querySelector("#disconnect_call").addEventListener("click",(function(){f.disconnect()})),document.querySelector("#mute_video").addEventListener("click",(function(){e.style.cursor="wait",e.style.pointerEvents="none",e.disabled=!0,e.setAttribute("disabled","disabled"),v?t.unmuteVideo((function(t){0===t.result?(document.querySelector("#self_vMute").classList.remove("fa-video-slash"),document.querySelector("#self_vMute").classList.add("fa-video"),v=!1,h(e)):1140===t.result&&(console.error(t.error),h(e))})):t.muteVideo((function(t){0===t.result?(document.querySelector("#self_vMute").classList.remove("fa-video"),document.querySelector("#self_vMute").classList.add("fa-video-slash"),v=!0,h(e)):1140===t.result&&h(e)}))}))};return r.a.createElement("div",null,r.a.createElement("div",{className:"layout"},r.a.createElement("div",{id:"overlay",style:{display:"none"}},r.a.createElement("div",{className:"loader",style:{width:"50px"}},r.a.createElement("img",{src:"./img/loading.gif",alt:""}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("div",{id:"main-container",className:"enx-layout-container"},r.a.createElement("canvas",{id:"wb"}))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{id:"canvasStreamPlayer"}))),r.a.createElement("div",{className:"row p-0 m-0",id:"call_container_div"},r.a.createElement("div",{className:"local_class_peep",id:"local_view"},r.a.createElement("div",{id:"self-view"}),r.a.createElement("div",{className:"self-name"},"Local User")),r.a.createElement("div",{className:"remote_class_peep",id:"remote_view"},r.a.createElement("div",{id:"call_div"}),r.a.createElement("div",{id:"show_stream_div"}),r.a.createElement("div",{className:"remote-name"},"Remote User")),r.a.createElement("div",{className:"toolbar-buttons"},r.a.createElement("div",{className:"tools"},r.a.createElement("div",{className:"mute-icon",id:"mute_audio",title:"Mute/Unmute Audio"},r.a.createElement("i",{className:"fa fa-microphone",id:"self_aMute"})),r.a.createElement("div",{className:"video-mute-icon",id:"mute_video",title:"Mute/Unmute Video"},r.a.createElement("i",{className:"fa fa-video",id:"self_vMute"})),r.a.createElement("div",{className:"video-mute-icon end-call",title:"End Call"},r.a.createElement("i",{className:"fas fa-phone fa-fw CBicon",id:"disconnect_call"}))))))))}var u=a(6),v=a(11),f=a(9),E=a.n(f),p=a(15),h="https://try.enablex.io/",y={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Basic "+btoa("demo:enablex")}},g=function(){var e=Object(p.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.assign(y,{method:"POST",body:""}),e.next=3,fetch(h+"createRoom/",y);case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(p.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object.assign(y,{method:"POST",body:JSON.stringify(t)}),e.next=3,fetch(h+"createToken/",y);case 3:return a=e.sent,e.next=6,a.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function w(){return r.a.createElement("header",null,r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.a.createElement("a",{className:"navbar-brand",href:"https://www.enablex.io/"},r.a.createElement("img",{src:"./enableX_logo.png",alt:"EnableX"})),r.a.createElement("div",{className:"navbar-collapse collapse nav justify-content-end"},r.a.createElement("ul",{className:"nav justify-content-end ton-hedr-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"#",className:"nav-link login text-dark"},"Sample Code ",r.a.createElement("span",{className:"fa fa-code"}))))))))}a(33);var N=function(e){var t=Object(n.useState)({name:"",room:"",role:""}),a=Object(v.a)(t,2),l=a[0],o=a[1],c=Object(n.useState)(""),i=Object(v.a)(c,2),s=(i[0],i[1],Object(n.useState)(!1)),m=Object(v.a)(s,2),d=m[0],f=m[1];return r.a.createElement("main",null,r.a.createElement(w,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-center align-items-center"},r.a.createElement("div",{className:"col-12 col-md-12 col-xl-6 col-lg-6 form-hedding"},r.a.createElement("h1",null,"1-To-1 Video Call"),r.a.createElement("p",null,"This Sample Code showcases how EnableX Video Service may be used to create a 1-to-1 Video Call Application. The Login Screen explains all basic information is needed to get a EnableX Token to get you connected to a Live Video Session. You may need to create your Access Processes to give a EnableX Token to your User."),r.a.createElement("h4",null,"Tech Specs"),r.a.createElement("p",null,r.a.createElement("strong",null,"Web Toolkit: ")," v",r.a.createElement("span",{id:"version_num"},"1.5")," ",r.a.createElement("br",null),r.a.createElement("strong",null,"Client Application:")," HTML5, CSS, JavaScript ",r.a.createElement("br",null),r.a.createElement("strong",null,"Application Server:")," NodeJS")),r.a.createElement("div",{className:"col-12 col-md-12 col-xl-5 col-lg-5 offset-md-1"},r.a.createElement("div",{className:"form-bg login_join_div",style:{display:"block",paddingBottom:"25px"}},r.a.createElement("h2",{className:"text-center"},"Start a Video Call"),r.a.createElement("div",{style:{display:"none"},className:"loading text-center"},"Loading...."),r.a.createElement("form",{className:"mt-4",id:"login_form",onSubmit:function(e){e.preventDefault(),f(!0),console.log("Enter room....");var t={name:l.name,role:l.role,roomId:l.room,user_ref:l.name};b(t).then((function(e){window.location="/room/"+e.token})).catch((function(e){console.log(e)}))}},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-12"},r.a.createElement("input",{type:"text",className:"form-control",id:"nameText",name:"nameText",placeholder:"Name",onChange:function(e){return o(Object(u.a)(Object(u.a)({},l),{},{name:e.target.value}))},value:l.name,required:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("input",{type:"text",className:"form-control",id:"roomName",name:"roomName",onChange:function(e){return o(Object(u.a)(Object(u.a)({},l),{},{room:e.target.value}))},value:l.room,placeholder:"Room ID",required:!0}))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("select",{className:"selectpicker show-menu-arrow form-control",id:"attendeeRole",onChange:function(e){return o(Object(u.a)(Object(u.a)({},l),{},{role:e.target.value}))},value:l.role,name:"attendeeRole",required:!0},r.a.createElement("option",{value:""},"Select Role"),r.a.createElement("option",{value:"participant"},"Join as Participant"),r.a.createElement("option",{value:"moderator"},"Join as Moderator")))),r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"form-group col-md-12"},r.a.createElement("input",{type:"checkbox",name:"agree",style:{height:"15px",width:"15px"},defaultChecked:!0,required:!0}),r.a.createElement("label",null,"I agree to ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.enablex.io/legals/tou/"},"Terms of Use")," and",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.enablex.io/legals/privacy-policy/"},"Privacy Policy")))),r.a.createElement("div",{className:"form-row justify-content-start"},r.a.createElement("div",{className:"form-group col-12 checkbox-sec"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",id:"joinRoom"},d?"Wait...":"Sign In")),r.a.createElement("div",{id:"create_room_div"},r.a.createElement("hr",null),r.a.createElement("p",{className:"text-center"},"Don't have a Room-ID?",r.a.createElement("a",{href:"#",onClick:function(e){e.preventDefault(),f(!0),g().then((function(e){0===e.result&&(o(Object(u.a)(Object(u.a)({},l),{},{room:e.room.room_id})),f(!1))})).catch((function(e){return console.log(e)}))},id:"create_room"},d?"Wait...":"Create One"))),r.a.createElement("br",null),r.a.createElement("span",{id:"message",style:{color:"red"}}))))))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("ul",{className:"footerUl"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.enablex.io/legals/tou/"},"Terms")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.enablex.io/legals/privacy-policy/"},"Privacy Policy")))),r.a.createElement("div",{className:"col-12 col-md-6"},r.a.createElement("p",{className:"footer-p"},"Copyright \xa9 VCLOUDX PTE LTD. All rights reserved."))))))};var S=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/"},r.a.createElement(N,null)),r.a.createElement(i.a,{path:"/room/:token",children:r.a.createElement(d,null)}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.f57190d6.chunk.js.map