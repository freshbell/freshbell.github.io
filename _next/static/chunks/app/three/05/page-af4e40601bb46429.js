(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[136],{859:function(e,n,t){Promise.resolve().then(t.bind(t,1436))},1436:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var i=t(9268),o=t(6006),a=t(7804),d=t(4613);function r(){let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{!function(e){document.querySelector("#three-canvas");let n=new a.CP7({canvas:e.current,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio>1?2:1);let t=new a.xsS,i=new a.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=20,t.add(i);let o=new a.Mig("white",.5);t.add(o);let r=new a.Ox3("white",1);r.position.x=1,r.position.z=2,t.add(r),new d.z(i,n.domElement);let s=new a.xo$(5,60),w=new a.Wid({color:"seagreen",side:a.ehD,flatShading:!0}),l=new a.ZAu,h=new a.ZAu,c=new a.ZAu,u=new a.Kj0(s,w),f=u.clone(),p=f.clone();f.scale.set(.3,.3,.3),p.scale.set(.1,.1,.1),c.position.x=3.5,h.position.x=15,c.add(p),h.add(f,c),l.add(u,h),t.add(l);let m=s.attributes.position.array,g=[];for(let e=0;e<m.length;e+=3)m[e]=m[e]+(Math.random()-.5)*.2,m[e+1]=m[e+1]+(Math.random()-.5)*.2,m[e+2]=m[e+2]+(Math.random()-.5)*.2,g[e]=(Math.random()-.5)*.2,g[e+1]=(Math.random()-.5)*.2,g[e+2]=(Math.random()-.5)*.2;let x=new a.SUY,M=x.getElapsedTime();window.addEventListener("resize",function(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),n.render(t,i)}),function e(){let o=x.getElapsedTime(),a=(o-M)*.001;M=o;for(let e=0;e<m.length;e+=3)l.rotation.y+=a,h.rotation.y+=a,c.rotation.y+=a,m[e]+=.001*Math.sin(o+100*g[e]),m[e+1]+=.001*Math.sin(o+100*g[e]),m[e+2]+=.001*Math.sin(o+100*g[e]);s.attributes.position.needsUpdate=!0,n.render(t,i),n.setAnimationLoop(e)}()}(e)}),(0,i.jsx)("div",{children:(0,i.jsx)("canvas",{ref:e,width:"300",height:"300"})})}}},function(e){e.O(0,[230,328,253,488,744],function(){return e(e.s=859)}),_N_E=e.O()}]);