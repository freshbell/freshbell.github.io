(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{5511:function(e,t,n){Promise.resolve().then(n.bind(n,2096))},2096:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var o=n(9268),i=n(6006),r=n(7804);let s=new r.USm(0,0,0,"YXZ"),c=new r.Pa4,a={type:"change"},d={type:"lock"},l={type:"unlock"},m=Math.PI/2;class h extends r.pBf{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=u.bind(this),this._onPointerlockChange=w.bind(this),this._onPointerlockError=p.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){let t=this.camera;c.setFromMatrixColumn(t.matrix,0),c.crossVectors(t.up,c),t.position.addScaledVector(c,e)}moveRight(e){let t=this.camera;c.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(c,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function u(e){if(!1===this.isLocked)return;let t=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0,o=this.camera;s.setFromQuaternion(o.quaternion),s.y-=.002*t*this.pointerSpeed,s.x-=.002*n*this.pointerSpeed,s.x=Math.max(m-this.maxPolarAngle,Math.min(m-this.minPolarAngle,s.x)),o.quaternion.setFromEuler(s),this.dispatchEvent(a)}function w(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(d),this.isLocked=!0):(this.dispatchEvent(l),this.isLocked=!1)}function p(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}var k=class{constructor(){this.keys=[],window.addEventListener("keydown",e=>{console.log(e.code+" key down"),this.keys[e.code]=!0}),window.addEventListener("keyup",e=>{console.log(e.code+" key up"),delete this.keys[e.code]})}};function v(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{!function(e){let t,n;let o=new r.CP7({canvas:e.current,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(window.devicePixelRatio>1?2:1);let i=new r.xsS,s=new r.cPb(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.y=1.5,s.position.z=4,i.add(s);let c=new r.Mig("white",.5);i.add(c);let a=new r.Ox3("white",1);a.position.x=1,a.position.z=2,i.add(a);let d=new h(s,o.domElement);d.domElement.addEventListener("click",()=>{d.lock()}),d.addEventListener("lock",()=>{console.log("lock")}),d.addEventListener("unlock",()=>{console.log("unlock")});var l=new k;let m=new r.DvJ(1,1,1);for(let e=0;e<20;e++)n=new r.Wid({color:"rgb(\n					".concat(50+Math.floor(205*Math.random()),",\n					").concat(50+Math.floor(205*Math.random()),",\n					").concat(50+Math.floor(205*Math.random()),"\n				)")}),(t=new r.Kj0(m,n)).position.x=(Math.random()-.5)*5,t.position.y=(Math.random()-.5)*5,t.position.z=(Math.random()-.5)*5,i.add(t);let u=new r.SUY;window.addEventListener("resize",function(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),o.render(i,s)}),function e(){u.getDelta(),l.keys.KeyW&&d.moveForward(.05),l.keys.KeyS&&d.moveForward(-.05),l.keys.KeyA&&d.moveRight(-.05),l.keys.KeyD&&d.moveRight(.05),o.render(i,s),o.setAnimationLoop(e)}()}(e)}),(0,o.jsx)("div",{children:(0,o.jsx)("canvas",{ref:e})})}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=n(6006),i=Symbol.for("react.element"),r=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,n){var o,a={},d=null,l=null;for(o in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:i,type:e,key:d,ref:l,props:a,_owner:s.current}}},9268:function(e,t,n){"use strict";e.exports=n(3177)}},function(e){e.O(0,[230,253,488,744],function(){return e(e.s=5511)}),_N_E=e.O()}]);