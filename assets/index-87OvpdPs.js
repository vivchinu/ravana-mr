(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="170",ap=0,ku=1,cp=2,Kd=1,lp=2,ci=3,Hn=0,ze=1,We=2,Fi=0,cs=1,Bi=2,Hu=3,Vu=4,up=5,rs=100,hp=101,dp=102,fp=103,pp=104,mp=200,gp=201,_p=202,xp=203,rl=204,ol=205,vp=206,yp=207,Mp=208,Sp=209,bp=210,Tp=211,wp=212,Ep=213,Ap=214,al=0,cl=1,ll=2,Qs=3,ul=4,hl=5,dl=6,fl=7,Zd=0,Rp=1,Cp=2,Oi=0,Pp=1,Ip=2,Lp=3,Jd=4,Dp=5,Up=6,Np=7,Gu="attached",Fp="detached",Qd=300,tr=301,er=302,pl=303,ml=304,ka=306,nr=1e3,Li=1001,Pa=1002,Je=1003,tf=1004,$r=1005,xn=1006,Ma=1007,di=1008,gi=1009,ef=1010,nf=1011,so=1012,cu=1013,zi=1014,vn=1015,fo=1016,lu=1017,uu=1018,ir=1020,sf=35902,rf=1021,of=1022,ln=1023,af=1024,cf=1025,Ys=1026,sr=1027,hu=1028,Ha=1029,lf=1030,du=1031,fu=1033,Sa=33776,ba=33777,Ta=33778,wa=33779,gl=35840,_l=35841,xl=35842,vl=35843,yl=36196,Ml=37492,Sl=37496,bl=37808,Tl=37809,wl=37810,El=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Ll=37817,Dl=37818,Ul=37819,Nl=37820,Fl=37821,Ea=36492,Bl=36494,Ol=36495,uf=36283,zl=36284,kl=36285,Hl=36286,ro=2300,oo=2301,Za=2302,Wu=2400,Xu=2401,qu=2402,Bp=2500,Op=0,hf=1,Vl=2,zp=3200,kp=3201,df=0,Hp=1,Ii="",xe="srgb",Qe="srgb-linear",Va="linear",se="srgb",xs=7680,ju=519,Vp=512,Gp=513,Wp=514,ff=515,Xp=516,qp=517,jp=518,$p=519,Gl=35044,Ja=35048,$u="300 es",fi=2e3,Ia=2001;class hr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Yu=1234567;const Ks=Math.PI/180,rr=180/Math.PI;function zn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[s&255]+He[s>>8&255]+He[s>>16&255]+He[s>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function pu(s,t){return(s%t+t)%t}function Yp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kp(s,t,e){return s!==t?(e-s)/(t-s):0}function Qr(s,t,e){return(1-e)*s+e*t}function Zp(s,t,e,n){return Qr(s,t,1-Math.exp(-e*n))}function Jp(s,t=1){return t-Math.abs(pu(s,t*2)-t)}function Qp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function tm(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function em(s,t){return s+Math.floor(Math.random()*(t-s+1))}function nm(s,t){return s+Math.random()*(t-s)}function im(s){return s*(.5-Math.random())}function sm(s){s!==void 0&&(Yu=s);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rm(s){return s*Ks}function om(s){return s*rr}function am(s){return(s&s-1)===0&&s!==0}function cm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function lm(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function um(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ds={DEG2RAD:Ks,RAD2DEG:rr,generateUUID:zn,clamp:Oe,euclideanModulo:pu,mapLinear:Yp,inverseLerp:Kp,lerp:Qr,damp:Zp,pingpong:Jp,smoothstep:Qp,smootherstep:tm,randInt:em,randFloat:nm,randFloatSpread:im,seededRandom:sm,degToRad:rm,radToDeg:om,isPowerOfTwo:am,ceilPowerOfTwo:cm,floorPowerOfTwo:lm,setQuaternionFromProperEuler:um,normalize:ne,denormalize:On};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,e,n,i,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],A=i[2],E=i[5],T=i[8];return r[0]=o*_+a*v+c*A,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*T,r[1]=l*_+u*v+h*A,r[4]=l*m+u*y+h*E,r[7]=l*p+u*x+h*T,r[2]=d*_+f*v+g*A,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=e*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*l-u*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(u*e-i*c)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Bt;function pf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hm(){const s=ao("canvas");return s.style.display="block",s}const Ku={};function Yr(s){s in Ku||(Ku[s]=!0,console.warn(s))}function dm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fm(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pm(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Qe,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===se&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===se&&(s.r=Zs(s.r),s.g=Zs(s.g),s.b=Zs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ii?Va:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Zu=[.64,.33,.3,.6,.15,.06],Ju=[.2126,.7152,.0722],Qu=[.3127,.329],th=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Qe]:{primaries:Zu,whitePoint:Qu,transfer:Va,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Ju,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:Zu,whitePoint:Qu,transfer:se,toXYZ:th,fromXYZ:eh,luminanceCoefficients:Ju,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}});let vs;class mm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vs===void 0&&(vs=ao("canvas")),vs.width=t.width,vs.height=t.height;const n=vs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=pi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gm=0;class mf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=zn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tc(i[o].image)):r.push(tc(i[o]))}else r=tc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function tc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _m=0;class Le extends hr{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Li,i=Li,r=xn,o=di,a=ln,c=gi,l=Le.DEFAULT_ANISOTROPY,u=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=zn(),this.name="",this.source=new mf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case nr:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case nr:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Qd;Le.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,i=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,A=(p+1)/2,E=(u+d)/4,T=(h+_)/4,C=(g+m)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=T/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=C/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=T/r,i=C/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xm extends hr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new mf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends xm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class gf extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vm extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Je,this.minFilter=Je,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,p*v);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const x=a*v;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+u*h+c*f-l*d,t[e+1]=c*g+u*d+l*h-a*f,t[e+2]=l*g+u*f+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class b{constructor(t=0,e=0,n=0){b.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),u=2*(a*e-r*i),h=2*(r*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new b,nh=new Fe;class te{constructor(t=new b(1/0,1/0,1/0),e=new b(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mo.copy(n.boundingBox)),Mo.applyMatrix4(t.matrixWorld),this.union(Mo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),So.subVectors(this.max,br),ys.subVectors(t.a,br),Ms.subVectors(t.b,br),Ss.subVectors(t.c,br),Si.subVectors(Ms,ys),bi.subVectors(Ss,Ms),Gi.subVectors(ys,Ss);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-Gi.z,Gi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,Gi.z,0,-Gi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-Gi.y,Gi.x,0];return!nc(e,ys,Ms,Ss,So)||(e=[1,0,0,0,1,0,0,0,1],!nc(e,ys,Ms,Ss,So))?!1:(bo.crossVectors(Si,bi),e=[bo.x,bo.y,bo.z],nc(e,ys,Ms,Ss,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new b,new b,new b,new b,new b,new b,new b,new b],Ln=new b,Mo=new te,ys=new b,Ms=new b,Ss=new b,Si=new b,bi=new b,Gi=new b,br=new b,So=new b,bo=new b,Wi=new b;function nc(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wi.fromArray(s,r);const a=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),c=t.dot(Wi),l=e.dot(Wi),u=n.dot(Wi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ym=new te,Tr=new b,ic=new b;class qe{constructor(t=new b,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ym.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(ic)),this.expandByPoint(Tr.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new b,sc=new b,To=new b,Ti=new b,rc=new b,wo=new b,oc=new b;class Hi{constructor(t=new b,e=new b(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sc.copy(t).add(e).multiplyScalar(.5),To.copy(e).sub(t).normalize(),Ti.copy(this.origin).sub(sc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(To),a=Ti.dot(this.direction),c=-Ti.dot(To),l=Ti.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(sc).addScaledVector(To,d),f}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const n=ni.dot(this.direction),i=ni.dot(ni)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,n,i,r){rc.subVectors(e,t),wo.subVectors(n,t),oc.crossVectors(rc,wo);let o=this.direction.dot(oc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ti.subVectors(this.origin,t);const c=a*this.direction.dot(wo.crossVectors(Ti,wo));if(c<0)return null;const l=a*this.direction.dot(rc.cross(Ti));if(l<0||c+l>o)return null;const u=-a*Ti.dot(oc);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(t,e,n,i,r,o,a,c,l,u,h,d,f,g,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,u,h,d,f,g,_,m)}set(t,e,n,i,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-d*h,e[8]=g*h+f,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=f*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=o*u,e[9]=f*h-g,e[2]=g*h-f,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mm,t,Sm)}lookAt(t,e,n){const i=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),wi.crossVectors(n,pn),wi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),wi.crossVectors(n,pn)),wi.normalize(),Eo.crossVectors(pn,wi),i[0]=wi.x,i[4]=Eo.x,i[8]=pn.x,i[1]=wi.y,i[5]=Eo.y,i[9]=pn.y,i[2]=wi.z,i[6]=Eo.z,i[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],A=n[15],E=i[0],T=i[4],C=i[8],S=i[12],M=i[1],P=i[5],L=i[9],D=i[13],F=i[2],V=i[6],k=i[10],Y=i[14],X=i[3],rt=i[7],dt=i[11],Tt=i[15];return r[0]=o*E+a*M+c*F+l*X,r[4]=o*T+a*P+c*V+l*rt,r[8]=o*C+a*L+c*k+l*dt,r[12]=o*S+a*D+c*Y+l*Tt,r[1]=u*E+h*M+d*F+f*X,r[5]=u*T+h*P+d*V+f*rt,r[9]=u*C+h*L+d*k+f*dt,r[13]=u*S+h*D+d*Y+f*Tt,r[2]=g*E+_*M+m*F+p*X,r[6]=g*T+_*P+m*V+p*rt,r[10]=g*C+_*L+m*k+p*dt,r[14]=g*S+_*D+m*Y+p*Tt,r[3]=v*E+y*M+x*F+A*X,r[7]=v*T+y*P+x*V+A*rt,r[11]=v*C+y*L+x*k+A*dt,r[15]=v*S+y*D+x*Y+A*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*u-r*c*u)+m*(+e*l*h-e*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-i*a*u-e*c*h+e*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,y=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,x=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,A=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,E=e*v+n*y+i*x+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=v*T,t[1]=(_*d*r-h*m*r-_*i*f+n*m*f+h*i*p-n*d*p)*T,t[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*T,t[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*T,t[4]=y*T,t[5]=(u*m*r-g*d*r+g*i*f-e*m*f-u*i*p+e*d*p)*T,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*T,t[7]=(o*d*r-u*c*r+u*i*l-e*d*l-o*i*f+e*c*f)*T,t[8]=x*T,t[9]=(g*h*r-u*_*r-g*n*f+e*_*f+u*n*p-e*h*p)*T,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*T,t[11]=(u*a*r-o*h*r-u*n*l+e*h*l+o*n*f-e*a*f)*T,t[12]=A*T,t[13]=(u*_*i-g*h*i+g*n*d-e*_*d-u*n*m+e*h*m)*T,t[14]=(g*a*i-o*_*i-g*n*c+e*_*c+o*n*m-e*a*m)*T,t[15]=(o*h*i-u*a*i+u*n*c-e*h*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=c*l,y=c*u,x=c*h,A=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*A,i[1]=(f+x)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+y)*T,i[9]=(m-v)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=bs.set(i[0],i[1],i[2]).length();const o=bs.set(i[4],i[5],i[6]).length(),a=bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Dn.copy(this);const l=1/r,u=1/o,h=1/a;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=fi){const c=this.elements,l=2*r/(e-t),u=2*r/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===fi)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ia)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fi){const c=this.elements,l=1/(e-t),u=1/(n-i),h=1/(o-r),d=(e+t)*l,f=(n+i)*u;let g,_;if(a===fi)g=(o+r)*h,_=-2*h;else if(a===Ia)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const bs=new b,Dn=new yt,Mm=new b(0,0,0),Sm=new b(1,1,1),wi=new b,Eo=new b,pn=new b,ih=new yt,sh=new Fe;class tn{constructor(t=0,e=0,n=0,i=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Oe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bm=0;const rh=new b,Ts=new Fe,ii=new yt,Ao=new b,wr=new b,Tm=new b,wm=new Fe,oh=new b(1,0,0),ah=new b(0,1,0),ch=new b(0,0,1),lh={type:"added"},Em={type:"removed"},ws={type:"childadded",child:null},ac={type:"childremoved",child:null};class de extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new b,e=new tn,n=new Fe,i=new b(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new yt},normalMatrix:{value:new Bt}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(t,e){return Ts.setFromAxisAngle(t,e),this.quaternion.premultiply(Ts),this}rotateX(t){return this.rotateOnAxis(oh,t)}rotateY(t){return this.rotateOnAxis(ah,t)}rotateZ(t){return this.rotateOnAxis(ch,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oh,t)}translateY(t){return this.translateOnAxis(ah,t)}translateZ(t){return this.translateOnAxis(ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(wr,Ao,this.up):ii.lookAt(Ao,wr,this.up),this.quaternion.setFromRotationMatrix(ii),i&&(ii.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(ii),this.quaternion.premultiply(Ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lh),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Em),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lh),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}de.DEFAULT_UP=new b(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new b,si=new b,cc=new b,ri=new b,Es=new b,As=new b,uh=new b,lc=new b,uc=new b,hc=new b,dc=new Zt,fc=new Zt,pc=new Zt;class Ie{constructor(t=new b,e=new b,n=new b){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Un.subVectors(t,e),i.cross(Un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Un.subVectors(i,e),si.subVectors(n,e),cc.subVectors(t,e);const o=Un.dot(Un),a=Un.dot(si),c=Un.dot(cc),l=si.dot(si),u=si.dot(cc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ri.x),c.addScaledVector(o,ri.y),c.addScaledVector(a,ri.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(t,e),fc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(dc,r.x),o.addScaledVector(fc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(t,e,n,i){return Un.subVectors(n,e),si.subVectors(t,e),Un.cross(si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Un.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ie.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ie.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Es.subVectors(i,n),As.subVectors(r,n),lc.subVectors(t,n);const c=Es.dot(lc),l=As.dot(lc);if(c<=0&&l<=0)return e.copy(n);uc.subVectors(t,i);const u=Es.dot(uc),h=As.dot(uc);if(u>=0&&h<=u)return e.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Es,o);hc.subVectors(t,r);const f=Es.dot(hc),g=As.dot(hc);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(As,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return uh.subVectors(r,i),a=(h-u)/(h-u+(f-g)),e.copy(i).addScaledVector(uh,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Es,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function mc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=pu(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=mc(o,r,t+1/3),this.g=mc(o,r,t),this.b=mc(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){const n=_f[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return Wt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Oe(Ve.r*255,0,255))*65536+Math.round(Oe(Ve.g*255,0,255))*256+Math.round(Oe(Ve.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(Ve.copy(this),e);const n=Ve.r,i=Ve.g,r=Ve.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=xe){Wt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,n=Ve.g,i=Ve.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Ro);const n=Qr(Ei.h,Ro.h,e),i=Qr(Ei.s,Ro.s,e),r=Qr(Ei.l,Ro.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new lt;lt.NAMES=_f;let Am=0;class kn extends hr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=zn(),this.name="",this.blending=cs,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=ol,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rl&&(n.blendSrc=this.blendSrc),this.blendDst!==ol&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ju&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xe extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=Zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new b,Co=new At;class be{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=On(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=On(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=On(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=On(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}}class xf extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class vf extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rm=0;const bn=new yt,gc=new de,Rs=new b,mn=new te,Er=new te,Ne=new b;class _e extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pf(t)?vf:xf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new te);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new b(-1/0,-1/0,-1/0),new b(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new b,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(mn.min,Er.min),mn.expandByPoint(Ne),Ne.addVectors(mn.max,Er.max),mn.expandByPoint(Ne)):(mn.expandByPoint(Er.min),mn.expandByPoint(Er.max))}mn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ne.fromBufferAttribute(a,l),c&&(Rs.fromBufferAttribute(t,l),Ne.add(Rs)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new be(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new b,c[C]=new b;const l=new b,u=new b,h=new b,d=new At,f=new At,g=new At,_=new b,m=new b;function p(C,S,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[M].add(_),c[C].add(m),c[S].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,S=v.length;C<S;++C){const M=v[C],P=M.start,L=M.count;for(let D=P,F=P+L;D<F;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const y=new b,x=new b,A=new b,E=new b;function T(C){A.fromBufferAttribute(i,C),E.copy(A);const S=a[C];y.copy(S),y.sub(A.multiplyScalar(A.dot(S))).normalize(),x.crossVectors(E,S);const P=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,S=v.length;C<S;++C){const M=v[C],P=M.start,L=M.count;for(let D=P,F=P+L;D<F;D+=3)T(t.getX(D+0)),T(t.getX(D+1)),T(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new b,r=new b,o=new b,a=new b,c=new b,l=new b,u=new b,h=new b;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new be(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hh=new yt,Xi=new Hi,Po=new qe,dh=new b,Io=new b,Lo=new b,Do=new b,_c=new b,Uo=new b,fh=new b,No=new b;class Dt extends de{constructor(t=new _e,e=new Xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(_c.fromBufferAttribute(h,t),o?Uo.addScaledVector(_c,u):Uo.addScaledVector(_c.sub(e),u))}e.add(Uo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(r),Xi.copy(t.ray).recast(t.near),!(Po.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(Po,dh)===null||Xi.origin.distanceToSquared(dh)>(t.far-t.near)**2))&&(hh.copy(r).invert(),Xi.copy(t.ray).applyMatrix4(hh),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,A=y;x<A;x+=3){const E=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=Fo(this,p,t,n,l,u,h,E,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Fo(this,o,t,n,l,u,h,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,A=y;x<A;x+=3){const E=x,T=x+1,C=x+2;i=Fo(this,p,t,n,l,u,h,E,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;i=Fo(this,o,t,n,l,u,h,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cm(s,t,e,n,i,r,o,a){let c;if(t.side===ze?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Hn,a),c===null)return null;No.copy(a),No.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(No);return l<e.near||l>e.far?null:{distance:l,point:No.clone(),object:s}}function Fo(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Io),s.getVertexPosition(c,Lo),s.getVertexPosition(l,Do);const u=Cm(s,t,e,n,Io,Lo,Do,fh);if(u){const h=new b;Ie.getBarycoord(fh,Io,Lo,Do,h),i&&(u.uv=Ie.getInterpolatedAttribute(i,a,c,l,h,new At)),r&&(u.uv1=Ie.getInterpolatedAttribute(r,a,c,l,h,new At)),o&&(u.normal=Ie.getInterpolatedAttribute(o,a,c,l,h,new b),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new b,materialIndex:0};Ie.getNormal(Io,Lo,Do,d.normal),u.face=d,u.barycoord=h}return u}class gs extends _e{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ge(l,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(h,2));function g(_,m,p,v,y,x,A,E,T,C,S){const M=x/T,P=A/C,L=x/2,D=A/2,F=E/2,V=T+1,k=C+1;let Y=0,X=0;const rt=new b;for(let dt=0;dt<k;dt++){const Tt=dt*P-D;for(let Ot=0;Ot<V;Ot++){const Q=Ot*M-L;rt[_]=Q*v,rt[m]=Tt*y,rt[p]=F,l.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=E>0?1:-1,u.push(rt.x,rt.y,rt.z),h.push(Ot/T),h.push(1-dt/C),Y+=1}}for(let dt=0;dt<C;dt++)for(let Tt=0;Tt<T;Tt++){const Ot=d+Tt+V*dt,Q=d+Tt+V*(dt+1),z=d+(Tt+1)+V*(dt+1),$=d+(Tt+1)+V*dt;c.push(Ot,Q,$),c.push(Q,z,$),X+=6}a.addGroup(f,X,S),f+=X,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){const t={};for(let e=0;e<s.length;e++){const n=or(s[e]);for(const i in n)t[i]=n[i]}return t}function Pm(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Im={clone:or,merge:Ye};var Lm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lm,this.fragmentShader=Dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Pm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Mf extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new b,ph=new At,mh=new At;class Ke extends Mf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,ph,mh),e.subVectors(mh,ph)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class Um extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(Cs,Ps,t,e);i.layers=this.layers,this.add(i);const r=new Ke(Cs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new Ke(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new Ke(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const c=new Ke(Cs,Ps,t,e);c.layers=this.layers,this.add(c);const l=new Ke(Cs,Ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sf extends Le{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:tr,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nm extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Sf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:xn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gs(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Fi});r.uniforms.tEquirect.value=e;const o=new Dt(i,r),a=e.minFilter;return e.minFilter===di&&(e.minFilter=xn),new Um(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const xc=new b,Fm=new b,Bm=new Bt;class wn{constructor(t=new b(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=xc.subVectors(n,e).cross(Fm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bm.getNormalMatrix(t),i=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new qe,Bo=new b;class Ga{constructor(t=new wn,e=new wn,n=new wn,i=new wn,r=new wn,o=new wn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+u,m+g,x+v).normalize(),n[3].setComponents(c-o,d-u,m-g,x-v).normalize(),n[4].setComponents(c-a,d-h,m-_,x-y).normalize(),e===fi)n[5].setComponents(c+a,d+h,m+_,x+y).normalize();else if(e===Ia)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(t){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Bo.x=i.normal.x>0?t.max.x:t.min.x,Bo.y=i.normal.y>0?t.max.y:t.min.y,Bo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Om(s){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];s.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class po extends _e{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-o;for(let y=0;y<l;y++){const x=y*h-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),A=v+1+l*(p+1),E=v+1+l*p;f.push(y,x,E),f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.widthSegments,t.heightSegments)}}var zm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,km=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ag=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mg="gl_FragColor = linearToOutputTexel( gl_FragColor );",gg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Og=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$g=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,w0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,g_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,__=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:zm,alphahash_pars_fragment:km,alphamap_fragment:Hm,alphamap_pars_fragment:Vm,alphatest_fragment:Gm,alphatest_pars_fragment:Wm,aomap_fragment:Xm,aomap_pars_fragment:qm,batching_pars_vertex:jm,batching_vertex:$m,begin_vertex:Ym,beginnormal_vertex:Km,bsdfs:Zm,iridescence_fragment:Jm,bumpmap_pars_fragment:Qm,clipping_planes_fragment:tg,clipping_planes_pars_fragment:eg,clipping_planes_pars_vertex:ng,clipping_planes_vertex:ig,color_fragment:sg,color_pars_fragment:rg,color_pars_vertex:og,color_vertex:ag,common:cg,cube_uv_reflection_fragment:lg,defaultnormal_vertex:ug,displacementmap_pars_vertex:hg,displacementmap_vertex:dg,emissivemap_fragment:fg,emissivemap_pars_fragment:pg,colorspace_fragment:mg,colorspace_pars_fragment:gg,envmap_fragment:_g,envmap_common_pars_fragment:xg,envmap_pars_fragment:vg,envmap_pars_vertex:yg,envmap_physical_pars_fragment:Ig,envmap_vertex:Mg,fog_vertex:Sg,fog_pars_vertex:bg,fog_fragment:Tg,fog_pars_fragment:wg,gradientmap_pars_fragment:Eg,lightmap_pars_fragment:Ag,lights_lambert_fragment:Rg,lights_lambert_pars_fragment:Cg,lights_pars_begin:Pg,lights_toon_fragment:Lg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Ug,lights_phong_pars_fragment:Ng,lights_physical_fragment:Fg,lights_physical_pars_fragment:Bg,lights_fragment_begin:Og,lights_fragment_maps:zg,lights_fragment_end:kg,logdepthbuf_fragment:Hg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Gg,logdepthbuf_vertex:Wg,map_fragment:Xg,map_pars_fragment:qg,map_particle_fragment:jg,map_particle_pars_fragment:$g,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Kg,morphinstance_vertex:Zg,morphcolor_vertex:Jg,morphnormal_vertex:Qg,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:u0,iridescence_pars_fragment:h0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:_0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:b0,skinbase_vertex:T0,skinning_pars_vertex:w0,skinning_vertex:E0,skinnormal_vertex:A0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:P0,tonemapping_pars_fragment:I0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:U0,uv_pars_vertex:N0,uv_vertex:F0,worldpos_vertex:B0,background_vert:O0,background_frag:z0,backgroundCube_vert:k0,backgroundCube_frag:H0,cube_vert:V0,cube_frag:G0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:j0,equirect_vert:$0,equirect_frag:Y0,linedashed_vert:K0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:t_,meshlambert_frag:e_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:s_,meshnormal_frag:r_,meshphong_vert:o_,meshphong_frag:a_,meshphysical_vert:c_,meshphysical_frag:l_,meshtoon_vert:u_,meshtoon_frag:h_,points_vert:d_,points_frag:f_,shadow_vert:p_,shadow_frag:m_,sprite_vert:g_,sprite_frag:__},at={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},jn={basic:{uniforms:Ye([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ye([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ye([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ye([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ye([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new lt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ye([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ye([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ye([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ye([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ye([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ye([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ye([at.common,at.displacementmap,{referencePosition:{value:new b},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ye([at.lights,at.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};jn.physical={uniforms:Ye([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Oo={r:0,b:0,g:0},ji=new tn,x_=new yt;function v_(s,t,e,n,i,r,o){const a=new lt(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===ka)?(u===void 0&&(u=new Dt(new gs(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:or(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ji.copy(y.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(x_.makeRotationFromEuler(ji)),u.material.toneMapped=Wt.getTransfer(x.colorSpace)!==se,(h!==x||d!==x.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Dt(new po(2,2),new Kn({name:"BackgroundMaterial",uniforms:or(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Oo,yf(s)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function y_(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(M,P,L,D,F){let V=!1;const k=h(D,L,P);r!==k&&(r=k,l(r.object)),V=f(M,D,L,F),V&&g(M,D,L,F),F!==null&&t.update(F,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(M,P,L,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function u(M){return s.deleteVertexArray(M)}function h(M,P,L){const D=L.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let V=F[P.id];V===void 0&&(V={},F[P.id]=V);let k=V[D];return k===void 0&&(k=d(c()),V[D]=k),k}function d(M){const P=[],L=[],D=[];for(let F=0;F<e;F++)P[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:D,object:M,attributes:{},index:null}}function f(M,P,L,D){const F=r.attributes,V=P.attributes;let k=0;const Y=L.getAttributes();for(const X in Y)if(Y[X].location>=0){const dt=F[X];let Tt=V[X];if(Tt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),dt===void 0||dt.attribute!==Tt||Tt&&dt.data!==Tt.data)return!0;k++}return r.attributesNum!==k||r.index!==D}function g(M,P,L,D){const F={},V=P.attributes;let k=0;const Y=L.getAttributes();for(const X in Y)if(Y[X].location>=0){let dt=V[X];dt===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));const Tt={};Tt.attribute=dt,dt&&dt.data&&(Tt.data=dt.data),F[X]=Tt,k++}r.attributes=F,r.attributesNum=k,r.index=D}function _(){const M=r.newAttributes;for(let P=0,L=M.length;P<L;P++)M[P]=0}function m(M){p(M,0)}function p(M,P){const L=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;L[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),F[M]!==P&&(s.vertexAttribDivisor(M,P),F[M]=P)}function v(){const M=r.newAttributes,P=r.enabledAttributes;for(let L=0,D=P.length;L<D;L++)P[L]!==M[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function y(M,P,L,D,F,V,k){k===!0?s.vertexAttribIPointer(M,P,L,F,V):s.vertexAttribPointer(M,P,L,D,F,V)}function x(M,P,L,D){_();const F=D.attributes,V=L.getAttributes(),k=P.defaultAttributeValues;for(const Y in V){const X=V[Y];if(X.location>=0){let rt=F[Y];if(rt===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(rt=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(rt=M.instanceColor)),rt!==void 0){const dt=rt.normalized,Tt=rt.itemSize,Ot=t.get(rt);if(Ot===void 0)continue;const Q=Ot.buffer,z=Ot.type,$=Ot.bytesPerElement,ot=z===s.INT||z===s.UNSIGNED_INT||rt.gpuType===cu;if(rt.isInterleavedBufferAttribute){const nt=rt.data,gt=nt.stride,Rt=rt.offset;if(nt.isInstancedInterleavedBuffer){for(let zt=0;zt<X.locationSize;zt++)p(X.location+zt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let zt=0;zt<X.locationSize;zt++)m(X.location+zt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let zt=0;zt<X.locationSize;zt++)y(X.location+zt,Tt/X.locationSize,z,dt,gt*$,(Rt+Tt/X.locationSize*zt)*$,ot)}else{if(rt.isInstancedBufferAttribute){for(let nt=0;nt<X.locationSize;nt++)p(X.location+nt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let nt=0;nt<X.locationSize;nt++)m(X.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Q);for(let nt=0;nt<X.locationSize;nt++)y(X.location+nt,Tt/X.locationSize,z,dt,Tt*$,Tt/X.locationSize*nt*$,ot)}}else if(k!==void 0){const dt=k[Y];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(X.location,dt);break;case 3:s.vertexAttrib3fv(X.location,dt);break;case 4:s.vertexAttrib4fv(X.location,dt);break;default:s.vertexAttrib1fv(X.location,dt)}}}}v()}function A(){C();for(const M in n){const P=n[M];for(const L in P){const D=P[L];for(const F in D)u(D[F].object),delete D[F];delete P[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const L in P){const D=P[L];for(const F in D)u(D[F].object),delete D[F];delete P[L]}delete n[M.id]}function T(M){for(const P in n){const L=n[P];if(L[M.id]===void 0)continue;const D=L[M.id];for(const F in D)u(D[F].object),delete D[F];delete L[M.id]}}function C(){S(),o=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function M_(s,t,e){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];e.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function S_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==ln&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===fo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==gi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==vn&&!C)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function b_(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new wn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=u(g,d,y,f);for(let A=0;A!==y;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function T_(s){let t=new WeakMap;function e(o,a){return a===pl?o.mapping=tr:a===ml&&(o.mapping=er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===pl||a===ml)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Nm(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gu extends Mf{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const js=4,gh=[.125,.215,.35,.446,.526,.582],os=20,vc=new gu,_h=new lt;let yc=null,Mc=0,Sc=0,bc=!1;const is=(1+Math.sqrt(5))/2,Is=1/is,xh=[new b(-is,Is,0),new b(is,Is,0),new b(-Is,0,is),new b(Is,0,is),new b(0,is,-Is),new b(0,is,Is),new b(-1,1,-1),new b(1,1,-1),new b(-1,1,1),new b(1,1,1)];class Wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yc,Mc,Sc),this._renderer.xr.enabled=bc,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===tr||t.mapping===er?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:fo,format:ln,colorSpace:Qe,depthBuffer:!1},i=vh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=w_(r)),this._blurMaterial=E_(r,t,e)}return i}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,vc)}_sceneToCubeUV(t,e,n,i){const a=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(_h),u.toneMapping=Oi,u.autoClear=!1;const f=new Xe({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new Dt(new gs,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(_h),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;zo(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===tr||t.mapping===er;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yh());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;zo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,vc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xh[(i-r-1)%xh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Dt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*os-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);const p=[];let v=0;for(let T=0;T<os;++T){const C=T/_,S=Math.exp(-C*C/2);p.push(S),T===0?v+=S:T<m&&(v+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-js?i-y+js:0),E=4*(this._cubeSize-x);zo(e,A,E,3*x,2*x),c.setRenderTarget(e),c.render(h,vc)}}function w_(s){const t=[],e=[],n=[];let i=s;const r=s-js+1+gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-js?c=gh[o-s+js-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(S,_*g*E),y.set(d,m*g*E);const M=[E,E,E,E,E,E];x.set(M,p*g*E)}const A=new _e;A.setAttribute("position",new be(v,_)),A.setAttribute("uv",new be(y,m)),A.setAttribute("faceIndex",new be(x,p)),t.push(A),i>js&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vh(s,t,e){const n=new fs(s,t,e);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function E_(s,t,e){const n=new Float32Array(os),i=new b(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function yh(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Mh(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function _u(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A_(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===pl||c===ml,u=c===tr||c===er;if(l||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wl(s)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Wl(s)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function R_(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Yr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function C_(s,t,e,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,x=v.length;y<x;y+=3){const A=v[y+0],E=v[y+1],T=v[y+2];d.push(A,E,E,T,T,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const A=y+0,E=y+1,T=y+2;d.push(A,E,E,T,T,A)}}else return;const m=new(pf(d)?vf:xf)(d,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function P_(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function u(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function I_(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function L_(s,t,e){const n=new WeakMap,i=new Zt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*E*4*h),C=new gf(T,A,E,h);C.type=vn,C.needsUpdate=!0;const S=x*4;for(let P=0;P<h;P++){const L=p[P],D=v[P],F=y[P],V=A*E*4*P;for(let k=0;k<L.count;k++){const Y=k*S;g===!0&&(i.fromBufferAttribute(L,k),T[V+Y+0]=i.x,T[V+Y+1]=i.y,T[V+Y+2]=i.z,T[V+Y+3]=0),_===!0&&(i.fromBufferAttribute(D,k),T[V+Y+4]=i.x,T[V+Y+5]=i.y,T[V+Y+6]=i.z,T[V+Y+7]=0),m===!0&&(i.fromBufferAttribute(F,k),T[V+Y+8]=i.x,T[V+Y+9]=i.y,T[V+Y+10]=i.z,T[V+Y+11]=F.itemSize===4?i.w:1)}}d={count:h,texture:C,size:new At(A,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function D_(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);if(i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Tf extends Le{constructor(t,e,n,i,r,o,a,c,l,u=Ys){if(u!==Ys&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ys&&(n=zi),n===void 0&&u===sr&&(n=ir),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const wf=new Le,Sh=new Tf(1,1),Ef=new gf,Af=new vm,Rf=new Sf,bh=[],Th=[],wh=new Float32Array(16),Eh=new Float32Array(9),Ah=new Float32Array(4);function dr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=bh[i];if(r===void 0&&(r=new Float32Array(i),bh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Wa(s,t){let e=Th[t];e===void 0&&(e=new Int32Array(t),Th[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function U_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function N_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function F_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function B_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function O_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Ah.set(n),s.uniformMatrix2fv(this.addr,!1,Ah),Ue(e,n)}}function z_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Eh.set(n),s.uniformMatrix3fv(this.addr,!1,Eh),Ue(e,n)}}function k_(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;wh.set(n),s.uniformMatrix4fv(this.addr,!1,wh),Ue(e,n)}}function H_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function V_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function G_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function W_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function X_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function q_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function j_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function $_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function Y_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Sh.compareFunction=ff,r=Sh):r=wf,e.setTexture2D(t||r,i)}function K_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Af,i)}function Z_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Rf,i)}function J_(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ef,i)}function Q_(s){switch(s){case 5126:return U_;case 35664:return N_;case 35665:return F_;case 35666:return B_;case 35674:return O_;case 35675:return z_;case 35676:return k_;case 5124:case 35670:return H_;case 35667:case 35671:return V_;case 35668:case 35672:return G_;case 35669:case 35673:return W_;case 5125:return X_;case 36294:return q_;case 36295:return j_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return K_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return J_}}function tx(s,t){s.uniform1fv(this.addr,t)}function ex(s,t){const e=dr(t,this.size,2);s.uniform2fv(this.addr,e)}function nx(s,t){const e=dr(t,this.size,3);s.uniform3fv(this.addr,e)}function ix(s,t){const e=dr(t,this.size,4);s.uniform4fv(this.addr,e)}function sx(s,t){const e=dr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function rx(s,t){const e=dr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ox(s,t){const e=dr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ax(s,t){s.uniform1iv(this.addr,t)}function cx(s,t){s.uniform2iv(this.addr,t)}function lx(s,t){s.uniform3iv(this.addr,t)}function ux(s,t){s.uniform4iv(this.addr,t)}function hx(s,t){s.uniform1uiv(this.addr,t)}function dx(s,t){s.uniform2uiv(this.addr,t)}function fx(s,t){s.uniform3uiv(this.addr,t)}function px(s,t){s.uniform4uiv(this.addr,t)}function mx(s,t,e){const n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||wf,r[o])}function gx(s,t,e){const n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Af,r[o])}function _x(s,t,e){const n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Rf,r[o])}function xx(s,t,e){const n=this.cache,i=t.length,r=Wa(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ef,r[o])}function vx(s){switch(s){case 5126:return tx;case 35664:return ex;case 35665:return nx;case 35666:return ix;case 35674:return sx;case 35675:return rx;case 35676:return ox;case 5124:case 35670:return ax;case 35667:case 35671:return cx;case 35668:case 35672:return lx;case 35669:case 35673:return ux;case 5125:return hx;case 36294:return dx;case 36295:return fx;case 36296:return px;case 35678:case 36198:case 36298:case 36306:case 35682:return mx;case 35679:case 36299:case 36307:return gx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return xx}}class yx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Q_(e.type)}}class Mx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vx(e.type)}}class Sx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Rh(s,t){s.seq.push(t),s.map[t.id]=t}function bx(s,t,e){const n=s.name,i=n.length;for(Tc.lastIndex=0;;){const r=Tc.exec(n),o=Tc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Rh(e,l===void 0?new yx(a,s,t):new Mx(a,s,t));break}else{let h=e.map[a];h===void 0&&(h=new Sx(a),Rh(e,h)),e=h}}}class Aa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);bx(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ch(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Tx=37297;let wx=0;function Ex(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ph=new Bt;function Ax(s){Wt._getMatrix(Ph,Wt.workingColorSpace,s);const t=`mat3( ${Ph.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case Va:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ih(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ex(s.getShaderSource(t),o)}else return i}function Rx(s,t){const e=Ax(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cx(s,t){let e;switch(t){case Pp:e="Linear";break;case Ip:e="Reinhard";break;case Lp:e="Cineon";break;case Jd:e="ACESFilmic";break;case Up:e="AgX";break;case Np:e="Neutral";break;case Dp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ko=new b;function Px(){Wt.getLuminanceCoefficients(ko);const s=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Lx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Kr(s){return s!==""}function Lh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xl(s){return s.replace(Ux,Fx)}const Nx=new Map;function Fx(s,t){let e=Ht[t];if(e===void 0){const n=Nx.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xl(e)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(s){return s.replace(Bx,Ox)}function Ox(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kd?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lp?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function kx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case tr:case er:t="ENVMAP_TYPE_CUBE";break;case ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case er:t="ENVMAP_MODE_REFRACTION";break}return t}function Vx(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zd:t="ENVMAP_BLENDING_MULTIPLY";break;case Rp:t="ENVMAP_BLENDING_MIX";break;case Cp:t="ENVMAP_BLENDING_ADD";break}return t}function Gx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wx(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=zx(e),l=kx(e),u=Hx(e),h=Vx(e),d=Gx(e),f=Ix(e),g=Lx(r),_=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[Nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Oi?"#define TONE_MAPPING":"",e.toneMapping!==Oi?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Oi?Cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Rx("linearToOutputTexel",e.outputColorSpace),Px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Xl(o),o=Lh(o,e),o=Dh(o,e),a=Xl(a),a=Lh(a,e),a=Dh(a,e),o=Uh(o),a=Uh(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$u?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,A=Ch(i,i.VERTEX_SHADER,y),E=Ch(i,i.FRAGMENT_SHADER,x);i.attachShader(_,A),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(E).trim();let V=!0,k=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,E);else{const Y=Ih(i,A,"vertex"),X=Ih(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+Y+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(D===""||F==="")&&(k=!1);k&&(P.diagnostics={runnable:V,programLog:L,vertexShader:{log:D,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(A),i.deleteShader(E),C=new Aa(i,_),S=Dx(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Tx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=E,this}let Xx=0;class qx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jx(t),e.set(t,n)),n}}class jx{constructor(t){this.id=Xx++,this.code=t,this.usedTimes=0}}function $x(s,t,e,n,i,r,o){const a=new mu,c=new qx,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,P,L,D){const F=L.fog,V=D.geometry,k=S.isMeshStandardMaterial?L.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),X=Y&&Y.mapping===ka?Y.image.height:null,rt=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Tt=dt!==void 0?dt.length:0;let Ot=0;V.morphAttributes.position!==void 0&&(Ot=1),V.morphAttributes.normal!==void 0&&(Ot=2),V.morphAttributes.color!==void 0&&(Ot=3);let Q,z,$,ot;if(rt){const ee=jn[rt];Q=ee.vertexShader,z=ee.fragmentShader}else Q=S.vertexShader,z=S.fragmentShader,c.update(S),$=c.getVertexShaderID(S),ot=c.getFragmentShaderID(S);const nt=s.getRenderTarget(),gt=s.state.buffers.depth.getReversed(),Rt=D.isInstancedMesh===!0,zt=D.isBatchedMesh===!0,re=!!S.map,$t=!!S.matcap,Te=!!Y,O=!!S.aoMap,Mn=!!S.lightMap,Xt=!!S.bumpMap,qt=!!S.normalMap,Pt=!!S.displacementMap,ce=!!S.emissiveMap,Ct=!!S.metalnessMap,I=!!S.roughnessMap,w=S.anisotropy>0,H=S.clearcoat>0,Z=S.dispersion>0,tt=S.iridescence>0,K=S.sheen>0,wt=S.transmission>0,ut=w&&!!S.anisotropyMap,_t=H&&!!S.clearcoatMap,Yt=H&&!!S.clearcoatNormalMap,et=H&&!!S.clearcoatRoughnessMap,xt=tt&&!!S.iridescenceMap,It=tt&&!!S.iridescenceThicknessMap,Lt=K&&!!S.sheenColorMap,vt=K&&!!S.sheenRoughnessMap,jt=!!S.specularMap,kt=!!S.specularColorMap,oe=!!S.specularIntensityMap,U=wt&&!!S.transmissionMap,ct=wt&&!!S.thicknessMap,j=!!S.gradientMap,J=!!S.alphaMap,mt=S.alphaTest>0,ft=!!S.alphaHash,Nt=!!S.extensions;let ve=Oi;S.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ve=s.toneMapping);const ke={shaderID:rt,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:z,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:ot,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:zt,batchingColor:zt&&D._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&D.instanceColor!==null,instancingMorph:Rt&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Qe,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:$t,envMap:Te,envMapMode:Te&&Y.mapping,envMapCubeUVHeight:X,aoMap:O,lightMap:Mn,bumpMap:Xt,normalMap:qt,displacementMap:d&&Pt,emissiveMap:ce,normalMapObjectSpace:qt&&S.normalMapType===Hp,normalMapTangentSpace:qt&&S.normalMapType===df,metalnessMap:Ct,roughnessMap:I,anisotropy:w,anisotropyMap:ut,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Yt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:tt,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:jt,specularColorMap:kt,specularIntensityMap:oe,transmission:wt,transmissionMap:U,thicknessMap:ct,gradientMap:j,opaque:S.transparent===!1&&S.blending===cs&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:mt,alphaHash:ft,combine:S.combine,mapUv:re&&_(S.map.channel),aoMapUv:O&&_(S.aoMap.channel),lightMapUv:Mn&&_(S.lightMap.channel),bumpMapUv:Xt&&_(S.bumpMap.channel),normalMapUv:qt&&_(S.normalMap.channel),displacementMapUv:Pt&&_(S.displacementMap.channel),emissiveMapUv:ce&&_(S.emissiveMap.channel),metalnessMapUv:Ct&&_(S.metalnessMap.channel),roughnessMapUv:I&&_(S.roughnessMap.channel),anisotropyMapUv:ut&&_(S.anisotropyMap.channel),clearcoatMapUv:_t&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(S.sheenRoughnessMap.channel),specularMapUv:jt&&_(S.specularMap.channel),specularColorMapUv:kt&&_(S.specularColorMap.channel),specularIntensityMapUv:oe&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(qt||w),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(re||J),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:gt,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:ce&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===We,flipSided:S.side===ze,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Nt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&S.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)M.push(P),M.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(v(M,S),y(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let P;if(M){const L=jn[M];P=Im.clone(L.uniforms)}else P=S.uniforms;return P}function A(S,M){let P;for(let L=0,D=u.length;L<D;L++){const F=u[L];if(F.cacheKey===M){P=F,++P.usedTimes;break}}return P===void 0&&(P=new Wx(s,M,S,r),u.push(P)),P}function E(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function Yx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Kx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Fh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Bh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(h,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(h,d){e.length>1&&e.sort(h||Kx),n.length>1&&n.sort(d||Fh),i.length>1&&i.sort(d||Fh)}function u(){for(let h=t,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Zx(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Bh,s.set(n,[o])):i>=r.length?(o=new Bh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Jx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new b,color:new lt};break;case"SpotLight":e={position:new b,direction:new b,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new b,color:new lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new b,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":e={color:new lt,position:new b,halfWidth:new b,halfHeight:new b};break}return s[t.id]=e,e}}}function Qx(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let tv=0;function ev(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function nv(s){const t=new Jx,e=Qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new b);const i=new b,r=new yt,o=new yt;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,A=0,E=0,T=0;l.sort(ev);for(let S=0,M=l.length;S<M;S++){const P=l[S],L=P.color,D=P.intensity,F=P.distance,V=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=L.r*D,h+=L.g*D,d+=L.b*D;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],D);T++}else if(P.isDirectionalLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,X=e.get(P);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=V,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=k,f++}else if(P.isSpotLight){const k=t.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(L).multiplyScalar(D),k.distance=F,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[_]=k;const Y=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,Y.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const X=e.get(P);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=V,x++}_++}else if(P.isRectAreaLight){const k=t.get(P);k.color.copy(L).multiplyScalar(D),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=t.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const Y=P.shadow,X=e.get(P);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=V,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=k,g++}else if(P.isHemisphereLight){const k=t.get(P);k.skyColor.copy(P.color).multiplyScalar(D),k.groundColor.copy(P.groundColor).multiplyScalar(D),n.hemi[p]=k,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=T,n.version=tv++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Oh(s){const t=new nv(s),e=[],n=[];function i(u){l.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function iv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Oh(s),t.set(i,[a])):r>=o.length?(a=new Oh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class sv extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rv extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cv(s,t,e){let n=new Ga;const i=new At,r=new At,o=new Zt,a=new sv({depthPacking:kp}),c=new rv,l={},u=e.maxTextureSize,h={[Hn]:ze,[ze]:Hn,[We]:We},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:ov,fragmentShader:av}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new _e;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kd;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Fi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==ci&&this.type===ci,F=p===ci&&this.type!==ci;for(let V=0,k=E.length;V<k;V++){const Y=E[V],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const rt=X.getFrameExtents();if(i.multiply(rt),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/rt.x),i.x=r.x*rt.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/rt.y),i.y=r.y*rt.y,X.mapSize.y=r.y)),X.map===null||D===!0||F===!0){const Tt=this.type!==ci?{minFilter:Je,magFilter:Je}:{};X.map!==null&&X.map.dispose(),X.map=new fs(i.x,i.y,Tt),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const dt=X.getViewportCount();for(let Tt=0;Tt<dt;Tt++){const Ot=X.getViewport(Tt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),L.viewport(o),X.updateMatrices(Y,Tt),n=X.getFrustum(),x(T,C,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===ci&&v(X,C),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,P)};function v(E,T){const C=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fs(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,C,f,_,null)}function y(E,T,C,S){let M=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)M=P;else if(M=C.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const L=M.uuid,D=T.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let V=F[D];V===void 0&&(V=M.clone(),F[D]=V,T.addEventListener("dispose",A)),M=V}if(M.visible=T.visible,M.wireframe=T.wireframe,S===ci?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:h[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=C}return M}function x(E,T,C,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===ci)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const D=t.update(E),F=E.material;if(Array.isArray(F)){const V=D.groups;for(let k=0,Y=V.length;k<Y;k++){const X=V[k],rt=F[X.materialIndex];if(rt&&rt.visible){const dt=y(E,rt,S,M);E.onBeforeShadow(s,E,T,C,D,dt,X),s.renderBufferDirect(C,null,D,dt,E,X),E.onAfterShadow(s,E,T,C,D,dt,X)}}}else if(F.visible){const V=y(E,F,S,M);E.onBeforeShadow(s,E,T,C,D,V,null),s.renderBufferDirect(C,null,D,V,E,null),E.onAfterShadow(s,E,T,C,D,V,null)}}const L=E.children;for(let D=0,F=L.length;D<F;D++)x(L[D],T,C,S,M)}function A(E){E.target.removeEventListener("dispose",A);for(const C in l){const S=l[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const lv={[al]:cl,[ll]:dl,[ul]:fl,[Qs]:hl,[cl]:al,[dl]:ll,[fl]:ul,[hl]:Qs};function uv(s,t){function e(){let U=!1;const ct=new Zt;let j=null;const J=new Zt(0,0,0,0);return{setMask:function(mt){j!==mt&&!U&&(s.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){U=mt},setClear:function(mt,ft,Nt,ve,ke){ke===!0&&(mt*=ve,ft*=ve,Nt*=ve),ct.set(mt,ft,Nt,ve),J.equals(ct)===!1&&(s.clearColor(mt,ft,Nt,ve),J.copy(ct))},reset:function(){U=!1,j=null,J.set(-1,0,0,0)}}}function n(){let U=!1,ct=!1,j=null,J=null,mt=null;return{setReversed:function(ft){if(ct!==ft){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ve=mt;mt=null,this.setClear(ve)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?nt(s.DEPTH_TEST):gt(s.DEPTH_TEST)},setMask:function(ft){j!==ft&&!U&&(s.depthMask(ft),j=ft)},setFunc:function(ft){if(ct&&(ft=lv[ft]),J!==ft){switch(ft){case al:s.depthFunc(s.NEVER);break;case cl:s.depthFunc(s.ALWAYS);break;case ll:s.depthFunc(s.LESS);break;case Qs:s.depthFunc(s.LEQUAL);break;case ul:s.depthFunc(s.EQUAL);break;case hl:s.depthFunc(s.GEQUAL);break;case dl:s.depthFunc(s.GREATER);break;case fl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ft}},setLocked:function(ft){U=ft},setClear:function(ft){mt!==ft&&(ct&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){U=!1,j=null,J=null,mt=null,ct=!1}}}function i(){let U=!1,ct=null,j=null,J=null,mt=null,ft=null,Nt=null,ve=null,ke=null;return{setTest:function(ee){U||(ee?nt(s.STENCIL_TEST):gt(s.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!U&&(s.stencilMask(ee),ct=ee)},setFunc:function(ee,Pn,Qn){(j!==ee||J!==Pn||mt!==Qn)&&(s.stencilFunc(ee,Pn,Qn),j=ee,J=Pn,mt=Qn)},setOp:function(ee,Pn,Qn){(ft!==ee||Nt!==Pn||ve!==Qn)&&(s.stencilOp(ee,Pn,Qn),ft=ee,Nt=Pn,ve=Qn)},setLocked:function(ee){U=ee},setClear:function(ee){ke!==ee&&(s.clearStencil(ee),ke=ee)},reset:function(){U=!1,ct=null,j=null,J=null,mt=null,ft=null,Nt=null,ve=null,ke=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,A=null,E=null,T=new lt(0,0,0),C=0,S=!1,M=null,P=null,L=null,D=null,F=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=Y>=2);let rt=null,dt={};const Tt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),Q=new Zt().fromArray(Tt),z=new Zt().fromArray(Ot);function $(U,ct,j,J){const mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(U,ft),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<j;Nt++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(ct+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}const ot={};ot[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(Qs),Xt(!1),qt(ku),nt(s.CULL_FACE),O(Fi);function nt(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function gt(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function Rt(U,ct){return h[U]!==ct?(s.bindFramebuffer(U,ct),h[U]=ct,U===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ct),U===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function zt(U,ct){let j=f,J=!1;if(U){j=d.get(ct),j===void 0&&(j=[],d.set(ct,j));const mt=U.textures;if(j.length!==mt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Nt=mt.length;ft<Nt;ft++)j[ft]=s.COLOR_ATTACHMENT0+ft;j.length=mt.length,J=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,J=!0);J&&s.drawBuffers(j)}function re(U){return g!==U?(s.useProgram(U),g=U,!0):!1}const $t={[rs]:s.FUNC_ADD,[hp]:s.FUNC_SUBTRACT,[dp]:s.FUNC_REVERSE_SUBTRACT};$t[fp]=s.MIN,$t[pp]=s.MAX;const Te={[mp]:s.ZERO,[gp]:s.ONE,[_p]:s.SRC_COLOR,[rl]:s.SRC_ALPHA,[bp]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[vp]:s.DST_ALPHA,[xp]:s.ONE_MINUS_SRC_COLOR,[ol]:s.ONE_MINUS_SRC_ALPHA,[Sp]:s.ONE_MINUS_DST_COLOR,[yp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[wp]:s.ONE_MINUS_CONSTANT_COLOR,[Ep]:s.CONSTANT_ALPHA,[Ap]:s.ONE_MINUS_CONSTANT_ALPHA};function O(U,ct,j,J,mt,ft,Nt,ve,ke,ee){if(U===Fi){_===!0&&(gt(s.BLEND),_=!1);return}if(_===!1&&(nt(s.BLEND),_=!0),U!==up){if(U!==m||ee!==S){if((p!==rs||x!==rs)&&(s.blendEquation(s.FUNC_ADD),p=rs,x=rs),ee)switch(U){case cs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bi:s.blendFunc(s.ONE,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,A=null,E=null,T.set(0,0,0),C=0,m=U,S=ee}return}mt=mt||ct,ft=ft||j,Nt=Nt||J,(ct!==p||mt!==x)&&(s.blendEquationSeparate($t[ct],$t[mt]),p=ct,x=mt),(j!==v||J!==y||ft!==A||Nt!==E)&&(s.blendFuncSeparate(Te[j],Te[J],Te[ft],Te[Nt]),v=j,y=J,A=ft,E=Nt),(ve.equals(T)===!1||ke!==C)&&(s.blendColor(ve.r,ve.g,ve.b,ke),T.copy(ve),C=ke),m=U,S=!1}function Mn(U,ct){U.side===We?gt(s.CULL_FACE):nt(s.CULL_FACE);let j=U.side===ze;ct&&(j=!j),Xt(j),U.blending===cs&&U.transparent===!1?O(Fi):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):gt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(U){M!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),M=U)}function qt(U){U!==ap?(nt(s.CULL_FACE),U!==P&&(U===ku?s.cullFace(s.BACK):U===cp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):gt(s.CULL_FACE),P=U}function Pt(U){U!==L&&(k&&s.lineWidth(U),L=U)}function ce(U,ct,j){U?(nt(s.POLYGON_OFFSET_FILL),(D!==ct||F!==j)&&(s.polygonOffset(ct,j),D=ct,F=j)):gt(s.POLYGON_OFFSET_FILL)}function Ct(U){U?nt(s.SCISSOR_TEST):gt(s.SCISSOR_TEST)}function I(U){U===void 0&&(U=s.TEXTURE0+V-1),rt!==U&&(s.activeTexture(U),rt=U)}function w(U,ct,j){j===void 0&&(rt===null?j=s.TEXTURE0+V-1:j=rt);let J=dt[j];J===void 0&&(J={type:void 0,texture:void 0},dt[j]=J),(J.type!==U||J.texture!==ct)&&(rt!==j&&(s.activeTexture(j),rt=j),s.bindTexture(U,ct||ot[U]),J.type=U,J.texture=ct)}function H(){const U=dt[rt];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(U){Q.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Q.copy(U))}function vt(U){z.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),z.copy(U))}function jt(U,ct){let j=l.get(ct);j===void 0&&(j=new WeakMap,l.set(ct,j));let J=j.get(U);J===void 0&&(J=s.getUniformBlockIndex(ct,U.name),j.set(U,J))}function kt(U,ct){const J=l.get(ct).get(U);c.get(ct)!==J&&(s.uniformBlockBinding(ct,J,U.__bindingPointIndex),c.set(ct,J))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},rt=null,dt={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,A=null,E=null,T=new lt(0,0,0),C=0,S=!1,M=null,P=null,L=null,D=null,F=null,Q.set(0,0,s.canvas.width,s.canvas.height),z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:gt,bindFramebuffer:Rt,drawBuffers:zt,useProgram:re,setBlending:O,setMaterial:Mn,setFlipSided:Xt,setCullFace:qt,setLineWidth:Pt,setPolygonOffset:ce,setScissorTest:Ct,activeTexture:I,bindTexture:w,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:xt,texImage3D:It,updateUBOMapping:jt,uniformBlockBinding:kt,texStorage2D:Yt,texStorage3D:et,texSubImage2D:K,texSubImage3D:wt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Lt,viewport:vt,reset:oe}}function zh(s,t,e,n){const i=hv(n);switch(e){case rf:return s*t;case af:return s*t;case cf:return s*t*2;case hu:return s*t/i.components*i.byteLength;case Ha:return s*t/i.components*i.byteLength;case lf:return s*t*2/i.components*i.byteLength;case du:return s*t*2/i.components*i.byteLength;case of:return s*t*3/i.components*i.byteLength;case ln:return s*t*4/i.components*i.byteLength;case fu:return s*t*4/i.components*i.byteLength;case Sa:case ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ta:case wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _l:case vl:return Math.max(s,16)*Math.max(t,8)/4;case gl:case xl:return Math.max(s,8)*Math.max(t,8)/2;case yl:case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case wl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ul:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ea:case Bl:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16;case uf:case zl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kl:case Hl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function hv(s){switch(s){case gi:case ef:return{byteLength:1,components:1};case so:case nf:case fo:return{byteLength:2,components:1};case lu:case uu:return{byteLength:2,components:4};case zi:case cu:case vn:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function dv(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new At,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return f?new OffscreenCanvas(I,w):ao("canvas")}function _(I,w,H){let Z=1;const tt=Ct(I);if((tt.width>H||tt.height>H)&&(Z=H/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const K=Math.floor(Z*tt.width),wt=Math.floor(Z*tt.height);h===void 0&&(h=g(K,wt));const ut=w?g(K,wt):h;return ut.width=K,ut.height=wt,ut.getContext("2d").drawImage(I,0,0,K,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+wt+")."),ut}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(I,w,H,Z,tt=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let K=w;if(w===s.RED&&(H===s.FLOAT&&(K=s.R32F),H===s.HALF_FLOAT&&(K=s.R16F),H===s.UNSIGNED_BYTE&&(K=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.R8UI),H===s.UNSIGNED_SHORT&&(K=s.R16UI),H===s.UNSIGNED_INT&&(K=s.R32UI),H===s.BYTE&&(K=s.R8I),H===s.SHORT&&(K=s.R16I),H===s.INT&&(K=s.R32I)),w===s.RG&&(H===s.FLOAT&&(K=s.RG32F),H===s.HALF_FLOAT&&(K=s.RG16F),H===s.UNSIGNED_BYTE&&(K=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.RG8UI),H===s.UNSIGNED_SHORT&&(K=s.RG16UI),H===s.UNSIGNED_INT&&(K=s.RG32UI),H===s.BYTE&&(K=s.RG8I),H===s.SHORT&&(K=s.RG16I),H===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.RGB8UI),H===s.UNSIGNED_SHORT&&(K=s.RGB16UI),H===s.UNSIGNED_INT&&(K=s.RGB32UI),H===s.BYTE&&(K=s.RGB8I),H===s.SHORT&&(K=s.RGB16I),H===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),H===s.UNSIGNED_INT&&(K=s.RGBA32UI),H===s.BYTE&&(K=s.RGBA8I),H===s.SHORT&&(K=s.RGBA16I),H===s.INT&&(K=s.RGBA32I)),w===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),w===s.RGBA){const wt=tt?Va:Wt.getTransfer(Z);H===s.FLOAT&&(K=s.RGBA32F),H===s.HALF_FLOAT&&(K=s.RGBA16F),H===s.UNSIGNED_BYTE&&(K=wt===se?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(I,w){let H;return I?w===null||w===zi||w===ir?H=s.DEPTH24_STENCIL8:w===vn?H=s.DEPTH32F_STENCIL8:w===so&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===ir?H=s.DEPTH_COMPONENT24:w===vn?H=s.DEPTH_COMPONENT32F:w===so&&(H=s.DEPTH_COMPONENT16),H}function A(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Je&&I.minFilter!==xn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){const w=I.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&u.delete(w)}function T(I){const w=I.target;w.removeEventListener("dispose",T),M(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const H=I.source,Z=d.get(H);if(Z){const tt=Z[w.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(I),Object.keys(Z).length===0&&d.delete(H)}n.remove(I)}function S(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const H=I.source,Z=d.get(H);delete Z[w.__cacheKey],o.memory.textures--}function M(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let tt=0;tt<w.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(w.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[Z]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=I.textures;for(let Z=0,tt=H.length;Z<tt;Z++){const K=n.get(H[Z]);K.__webglTexture&&(s.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(H[Z])}n.remove(I)}let P=0;function L(){P=0}function D(){const I=P;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),P+=1,I}function F(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function V(I,w){const H=n.get(I);if(I.isVideoTexture&&Pt(I),I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){const Z=I.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(H,I,w);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function k(I,w){const H=n.get(I);if(I.version>0&&H.__version!==I.version){z(H,I,w);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function Y(I,w){const H=n.get(I);if(I.version>0&&H.__version!==I.version){z(H,I,w);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function X(I,w){const H=n.get(I);if(I.version>0&&H.__version!==I.version){$(H,I,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const rt={[nr]:s.REPEAT,[Li]:s.CLAMP_TO_EDGE,[Pa]:s.MIRRORED_REPEAT},dt={[Je]:s.NEAREST,[tf]:s.NEAREST_MIPMAP_NEAREST,[$r]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Ma]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},Tt={[Vp]:s.NEVER,[$p]:s.ALWAYS,[Gp]:s.LESS,[ff]:s.LEQUAL,[Wp]:s.EQUAL,[jp]:s.GEQUAL,[Xp]:s.GREATER,[qp]:s.NOTEQUAL};function Ot(I,w){if(w.type===vn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===xn||w.magFilter===Ma||w.magFilter===$r||w.magFilter===di||w.minFilter===xn||w.minFilter===Ma||w.minFilter===$r||w.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,rt[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,rt[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,rt[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,dt[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,dt[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Je||w.minFilter!==$r&&w.minFilter!==di||w.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Q(I,w){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));const Z=w.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const K=F(w);if(K!==I.__cacheKey){tt[K]===void 0&&(tt[K]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[K].usedTimes++;const wt=tt[I.__cacheKey];wt!==void 0&&(tt[I.__cacheKey].usedTimes--,wt.usedTimes===0&&S(w)),I.__cacheKey=K,I.__webglTexture=tt[K].texture}return H}function z(I,w,H){let Z=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=s.TEXTURE_3D);const tt=Q(I,w),K=w.source;e.bindTexture(Z,I.__webglTexture,s.TEXTURE0+H);const wt=n.get(K);if(K.version!==wt.__version||tt===!0){e.activeTexture(s.TEXTURE0+H);const ut=Wt.getPrimaries(Wt.workingColorSpace),_t=w.colorSpace===Ii?null:Wt.getPrimaries(w.colorSpace),Yt=w.colorSpace===Ii||ut===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=_(w.image,!1,i.maxTextureSize);et=ce(w,et);const xt=r.convert(w.format,w.colorSpace),It=r.convert(w.type);let Lt=y(w.internalFormat,xt,It,w.colorSpace,w.isVideoTexture);Ot(Z,w);let vt;const jt=w.mipmaps,kt=w.isVideoTexture!==!0,oe=wt.__version===void 0||tt===!0,U=K.dataReady,ct=A(w,et);if(w.isDepthTexture)Lt=x(w.format===sr,w.type),oe&&(kt?e.texStorage2D(s.TEXTURE_2D,1,Lt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,xt,It,null));else if(w.isDataTexture)if(jt.length>0){kt&&oe&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,jt[0].width,jt[0].height);for(let j=0,J=jt.length;j<J;j++)vt=jt[j],kt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,vt.width,vt.height,xt,It,vt.data):e.texImage2D(s.TEXTURE_2D,j,Lt,vt.width,vt.height,0,xt,It,vt.data);w.generateMipmaps=!1}else kt?(oe&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,et.width,et.height),U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,xt,It,et.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,et.width,et.height,0,xt,It,et.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){kt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,jt[0].width,jt[0].height,et.depth);for(let j=0,J=jt.length;j<J;j++)if(vt=jt[j],w.format!==ln)if(xt!==null)if(kt){if(U)if(w.layerUpdates.size>0){const mt=zh(vt.width,vt.height,w.format,w.type);for(const ft of w.layerUpdates){const Nt=vt.data.subarray(ft*mt/vt.data.BYTES_PER_ELEMENT,(ft+1)*mt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,ft,vt.width,vt.height,1,xt,Nt)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,et.depth,xt,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Lt,vt.width,vt.height,et.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?U&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,vt.width,vt.height,et.depth,xt,It,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Lt,vt.width,vt.height,et.depth,0,xt,It,vt.data)}else{kt&&oe&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,jt[0].width,jt[0].height);for(let j=0,J=jt.length;j<J;j++)vt=jt[j],w.format!==ln?xt!==null?kt?U&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,vt.width,vt.height,xt,It,vt.data):e.texImage2D(s.TEXTURE_2D,j,Lt,vt.width,vt.height,0,xt,It,vt.data)}else if(w.isDataArrayTexture)if(kt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,et.width,et.height,et.depth),U)if(w.layerUpdates.size>0){const j=zh(et.width,et.height,w.format,w.type);for(const J of w.layerUpdates){const mt=et.data.subarray(J*j/et.data.BYTES_PER_ELEMENT,(J+1)*j/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,xt,It,mt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,It,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,et.width,et.height,et.depth,0,xt,It,et.data);else if(w.isData3DTexture)kt?(oe&&e.texStorage3D(s.TEXTURE_3D,ct,Lt,et.width,et.height,et.depth),U&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,It,et.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,et.width,et.height,et.depth,0,xt,It,et.data);else if(w.isFramebufferTexture){if(oe)if(kt)e.texStorage2D(s.TEXTURE_2D,ct,Lt,et.width,et.height);else{let j=et.width,J=et.height;for(let mt=0;mt<ct;mt++)e.texImage2D(s.TEXTURE_2D,mt,Lt,j,J,0,xt,It,null),j>>=1,J>>=1}}else if(jt.length>0){if(kt&&oe){const j=Ct(jt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Lt,j.width,j.height)}for(let j=0,J=jt.length;j<J;j++)vt=jt[j],kt?U&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,xt,It,vt):e.texImage2D(s.TEXTURE_2D,j,Lt,xt,It,vt);w.generateMipmaps=!1}else if(kt){if(oe){const j=Ct(et);e.texStorage2D(s.TEXTURE_2D,ct,Lt,j.width,j.height)}U&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,It,et)}else e.texImage2D(s.TEXTURE_2D,0,Lt,xt,It,et);m(w)&&p(Z),wt.__version=K.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function $(I,w,H){if(w.image.length!==6)return;const Z=Q(I,w),tt=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+H);const K=n.get(tt);if(tt.version!==K.__version||Z===!0){e.activeTexture(s.TEXTURE0+H);const wt=Wt.getPrimaries(Wt.workingColorSpace),ut=w.colorSpace===Ii?null:Wt.getPrimaries(w.colorSpace),_t=w.colorSpace===Ii||wt===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Yt=w.isCompressedTexture||w.image[0].isCompressedTexture,et=w.image[0]&&w.image[0].isDataTexture,xt=[];for(let J=0;J<6;J++)!Yt&&!et?xt[J]=_(w.image[J],!0,i.maxCubemapSize):xt[J]=et?w.image[J].image:w.image[J],xt[J]=ce(w,xt[J]);const It=xt[0],Lt=r.convert(w.format,w.colorSpace),vt=r.convert(w.type),jt=y(w.internalFormat,Lt,vt,w.colorSpace),kt=w.isVideoTexture!==!0,oe=K.__version===void 0||Z===!0,U=tt.dataReady;let ct=A(w,It);Ot(s.TEXTURE_CUBE_MAP,w);let j;if(Yt){kt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,jt,It.width,It.height);for(let J=0;J<6;J++){j=xt[J].mipmaps;for(let mt=0;mt<j.length;mt++){const ft=j[mt];w.format!==ln?Lt!==null?kt?U&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,ft.width,ft.height,Lt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,0,0,ft.width,ft.height,Lt,vt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt,jt,ft.width,ft.height,0,Lt,vt,ft.data)}}}else{if(j=w.mipmaps,kt&&oe){j.length>0&&ct++;const J=Ct(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,jt,J.width,J.height)}for(let J=0;J<6;J++)if(et){kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xt[J].width,xt[J].height,Lt,vt,xt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,xt[J].width,xt[J].height,0,Lt,vt,xt[J].data);for(let mt=0;mt<j.length;mt++){const Nt=j[mt].image[J].image;kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Nt.width,Nt.height,Lt,vt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,jt,Nt.width,Nt.height,0,Lt,vt,Nt.data)}}else{kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,vt,xt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,jt,Lt,vt,xt[J]);for(let mt=0;mt<j.length;mt++){const ft=j[mt];kt?U&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,0,0,Lt,vt,ft.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,mt+1,jt,Lt,vt,ft.image[J])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),K.__version=tt.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ot(I,w,H,Z,tt,K){const wt=r.convert(H.format,H.colorSpace),ut=r.convert(H.type),_t=y(H.internalFormat,wt,ut,H.colorSpace),Yt=n.get(w),et=n.get(H);if(et.__renderTarget=w,!Yt.__hasExternalTextures){const xt=Math.max(1,w.width>>K),It=Math.max(1,w.height>>K);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,_t,xt,It,w.depth,0,wt,ut,null):e.texImage2D(tt,K,_t,xt,It,0,wt,ut,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),qt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,et.__webglTexture,0,Xt(w)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,et.__webglTexture,K),e.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(I,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const Z=w.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,K=x(w.stencilBuffer,tt),wt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=Xt(w);qt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,K,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,K,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,K,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,I)}else{const Z=w.textures;for(let tt=0;tt<Z.length;tt++){const K=Z[tt],wt=r.convert(K.format,K.colorSpace),ut=r.convert(K.type),_t=y(K.internalFormat,wt,ut,K.colorSpace),Yt=Xt(w);H&&qt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,_t,w.width,w.height):qt(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Yt,_t,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,_t,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function gt(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const tt=Z.__webglTexture,K=Xt(w);if(w.depthTexture.format===Ys)qt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(w.depthTexture.format===sr)qt(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,K):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Rt(I){const w=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const Z=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const tt=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),w.__depthDisposeCallback=tt}w.__boundDepthTexture=Z}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");gt(w.__webglFramebuffer,I)}else if(H){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=s.createRenderbuffer(),nt(w.__webglDepthbuffer[Z],I,!1);else{const tt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,K=w.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,K),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,K)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),nt(w.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(I,w,H){const Z=n.get(I);w!==void 0&&ot(Z.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Rt(I)}function re(I){const w=I.texture,H=n.get(I),Z=n.get(w);I.addEventListener("dispose",T);const tt=I.textures,K=I.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=w.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let _t=0;_t<w.mipmaps.length;_t++)H.__webglFramebuffer[ut][_t]=s.createFramebuffer()}else H.__webglFramebuffer[ut]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<w.mipmaps.length;ut++)H.__webglFramebuffer[ut]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ut=0,_t=tt.length;ut<_t;ut++){const Yt=n.get(tt[ut]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&qt(I)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<tt.length;ut++){const _t=tt[ut];H.__webglColorRenderbuffer[ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Yt=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),xt=y(_t.internalFormat,Yt,et,_t.colorSpace,I.isXRRenderTarget===!0),It=Xt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,xt,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ut,s.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),nt(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(K){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,w);for(let ut=0;ut<6;ut++)if(w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)ot(H.__webglFramebuffer[ut][_t],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else ot(H.__webglFramebuffer[ut],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(w)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ut=0,_t=tt.length;ut<_t;ut++){const Yt=tt[ut],et=n.get(Yt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Ot(s.TEXTURE_2D,Yt),ot(H.__webglFramebuffer,I,Yt,s.COLOR_ATTACHMENT0+ut,s.TEXTURE_2D,0),m(Yt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ut=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ut=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ut,Z.__webglTexture),Ot(ut,w),w.mipmaps&&w.mipmaps.length>0)for(let _t=0;_t<w.mipmaps.length;_t++)ot(H.__webglFramebuffer[_t],I,w,s.COLOR_ATTACHMENT0,ut,_t);else ot(H.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,ut,0);m(w)&&p(ut),e.unbindTexture()}I.depthBuffer&&Rt(I)}function $t(I){const w=I.textures;for(let H=0,Z=w.length;H<Z;H++){const tt=w[H];if(m(tt)){const K=v(I),wt=n.get(tt).__webglTexture;e.bindTexture(K,wt),p(K),e.unbindTexture()}}}const Te=[],O=[];function Mn(I){if(I.samples>0){if(qt(I)===!1){const w=I.textures,H=I.width,Z=I.height;let tt=s.COLOR_BUFFER_BIT;const K=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(I),ut=w.length>1;if(ut)for(let _t=0;_t<w.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let _t=0;_t<w.length;_t++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ut){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Yt=n.get(w[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Yt,0)}s.blitFramebuffer(0,0,H,Z,0,0,H,Z,tt,s.NEAREST),c===!0&&(Te.length=0,O.length=0,Te.push(s.COLOR_ATTACHMENT0+_t),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Te.push(K),O.push(K),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,O)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<w.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,wt.__webglColorRenderbuffer[_t]);const Yt=n.get(w[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Yt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Xt(I){return Math.min(i.maxSamples,I.samples)}function qt(I){const w=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(I){const w=o.render.frame;u.get(I)!==w&&(u.set(I,w),I.update())}function ce(I,w){const H=I.colorSpace,Z=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Qe&&H!==Ii&&(Wt.getTransfer(H)===se?(Z!==ln||tt!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Ct(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=V,this.setTexture2DArray=k,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=zt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Mn,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=qt}function fv(s,t){function e(n,i=Ii){let r;const o=Wt.getTransfer(i);if(n===gi)return s.UNSIGNED_BYTE;if(n===lu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===uu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===sf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return s.BYTE;if(n===nf)return s.SHORT;if(n===so)return s.UNSIGNED_SHORT;if(n===cu)return s.INT;if(n===zi)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===fo)return s.HALF_FLOAT;if(n===rf)return s.ALPHA;if(n===of)return s.RGB;if(n===ln)return s.RGBA;if(n===af)return s.LUMINANCE;if(n===cf)return s.LUMINANCE_ALPHA;if(n===Ys)return s.DEPTH_COMPONENT;if(n===sr)return s.DEPTH_STENCIL;if(n===hu)return s.RED;if(n===Ha)return s.RED_INTEGER;if(n===lf)return s.RG;if(n===du)return s.RG_INTEGER;if(n===fu)return s.RGBA_INTEGER;if(n===Sa||n===ba||n===Ta||n===wa)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ba)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===_l||n===xl||n===vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yl||n===Ml||n===Sl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yl||n===Ml)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bl||n===Tl||n===wl||n===El||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===Dl||n===Ul||n===Nl||n===Fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===bl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Tl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===El)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ul)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Nl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fl)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ea||n===Bl||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ea)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===uf||n===zl||n===kl||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ea)return r.COMPRESSED_RED_RGTC1_EXT;if(n===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ir?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class pv extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pe extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mv={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new b,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new b),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new b,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new b),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Pe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_v=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:gv,fragmentShader:_v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new po(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vv extends hr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new xv,m=e.getContextAttributes();let p=null,v=null;const y=[],x=[],A=new At;let E=null;const T=new Ke;T.viewport=new Zt;const C=new Ke;C.viewport=new Zt;const S=[T,C],M=new pv;let P=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let $=y[z];return $===void 0&&($=new wc,y[z]=$),$.getTargetRaySpace()},this.getControllerGrip=function(z){let $=y[z];return $===void 0&&($=new wc,y[z]=$),$.getGripSpace()},this.getHand=function(z){let $=y[z];return $===void 0&&($=new wc,y[z]=$),$.getHandSpace()};function D(z){const $=x.indexOf(z.inputSource);if($===-1)return;const ot=y[$];ot!==void 0&&(ot.update(z.inputSource,z.frame,l||o),ot.dispatchEvent({type:z.type,data:z.inputSource}))}function F(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",V);for(let z=0;z<y.length;z++){const $=x[z];$!==null&&(x[z]=null,y[z].disconnect($))}P=null,L=null,_.reset(),t.setRenderTarget(p),f=null,d=null,h=null,i=null,v=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",F),i.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new fs(f.framebufferWidth,f.framebufferHeight,{format:ln,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ot=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?sr:Ys,ot=m.stencil?ir:zi);const gt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new fs(d.textureWidth,d.textureHeight,{format:ln,type:gi,depthTexture:new Tf(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Q.setContext(i),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(z){for(let $=0;$<z.removed.length;$++){const ot=z.removed[$],nt=x.indexOf(ot);nt>=0&&(x[nt]=null,y[nt].disconnect(ot))}for(let $=0;$<z.added.length;$++){const ot=z.added[$];let nt=x.indexOf(ot);if(nt===-1){for(let Rt=0;Rt<y.length;Rt++)if(Rt>=x.length){x.push(ot),nt=Rt;break}else if(x[Rt]===null){x[Rt]=ot,nt=Rt;break}if(nt===-1)break}const gt=y[nt];gt&&gt.connect(ot)}}const k=new b,Y=new b;function X(z,$,ot){k.setFromMatrixPosition($.matrixWorld),Y.setFromMatrixPosition(ot.matrixWorld);const nt=k.distanceTo(Y),gt=$.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,zt=gt[14]/(gt[10]-1),re=gt[14]/(gt[10]+1),$t=(gt[9]+1)/gt[5],Te=(gt[9]-1)/gt[5],O=(gt[8]-1)/gt[0],Mn=(Rt[8]+1)/Rt[0],Xt=zt*O,qt=zt*Mn,Pt=nt/(-O+Mn),ce=Pt*-O;if($.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(ce),z.translateZ(Pt),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),gt[10]===-1)z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Ct=zt+Pt,I=re+Pt,w=Xt-ce,H=qt+(nt-ce),Z=$t*re/I*Ct,tt=Te*re/I*Ct;z.projectionMatrix.makePerspective(w,H,Z,tt,Ct,I),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function rt(z,$){$===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices($.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;let $=z.near,ot=z.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(ot=_.depthFar)),M.near=C.near=T.near=$,M.far=C.far=T.far=ot,(P!==M.near||L!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,L=M.far),T.layers.mask=z.layers.mask|2,C.layers.mask=z.layers.mask|4,M.layers.mask=T.layers.mask|C.layers.mask;const nt=z.parent,gt=M.cameras;rt(M,nt);for(let Rt=0;Rt<gt.length;Rt++)rt(gt[Rt],nt);gt.length===2?X(M,T,C):M.projectionMatrix.copy(T.projectionMatrix),dt(z,M,nt)};function dt(z,$,ot){ot===null?z.matrix.copy($.matrixWorld):(z.matrix.copy(ot.matrixWorld),z.matrix.invert(),z.matrix.multiply($.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy($.projectionMatrix),z.projectionMatrixInverse.copy($.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=rr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Tt=null;function Ot(z,$){if(u=$.getViewerPose(l||o),g=$,u!==null){const ot=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let nt=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let Rt=0;Rt<ot.length;Rt++){const zt=ot[Rt];let re=null;if(f!==null)re=f.getViewport(zt);else{const Te=h.getViewSubImage(d,zt);re=Te.viewport,Rt===0&&(t.setRenderTargetTextures(v,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(v))}let $t=S[Rt];$t===void 0&&($t=new Ke,$t.layers.enable(Rt),$t.viewport=new Zt,S[Rt]=$t),$t.matrix.fromArray(zt.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(zt.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(re.x,re.y,re.width,re.height),Rt===0&&(M.matrix.copy($t.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),nt===!0&&M.cameras.push($t)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Rt=h.getDepthInformation(ot[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,i.renderState)}}for(let ot=0;ot<y.length;ot++){const nt=x[ot],gt=y[ot];nt!==null&&gt!==void 0&&gt.update(nt,$,l||o)}Tt&&Tt(z,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const Q=new bf;Q.setAnimationLoop(Ot),this.setAnimationLoop=function(z){Tt=z},this.dispose=function(){}}}const $i=new tn,yv=new yt;function Mv(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yf(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,$i.copy(x),$i.x*=-1,$i.y*=-1,$i.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler($i)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=i[v.id];x===void 0&&(g(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(v,A);const E=t.render.frame;r[v.id]!==E&&(d(v),r[v.id]=E)}function u(v){const y=h();v.__bindingPointIndex=y;const x=s.createBuffer(),A=v.__size,E=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const y=i[v.id],x=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,T=x.length;E<T;E++){const C=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,M=C.length;S<M;S++){const P=C[S];if(f(P,E,S,A)===!0){const L=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let F=0;for(let V=0;V<D.length;V++){const k=D[V],Y=_(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,s.bufferSubData(s.UNIFORM_BUFFER,L+F,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,F),F+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,y,x,A){const E=v.value,T=y+"_"+x;if(A[T]===void 0)return typeof E=="number"||typeof E=="boolean"?A[T]=E:A[T]=E.clone(),!0;{const C=A[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const y=v.uniforms;let x=0;const A=16;for(let T=0,C=y.length;T<C;T++){const S=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,P=S.length;M<P;M++){const L=S[M],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,V=D.length;F<V;F++){const k=D[F],Y=_(k),X=x%A,rt=X%Y.boundary,dt=X+rt;x+=rt,dt!==0&&A-dt<Y.storage&&(x+=A-dt),L.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=Y.storage}}}const E=x%A;return E>0&&(x+=A-E),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class bv{constructor(t={}){const{canvas:e=hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this.toneMapping=Oi,this.toneMappingExposure=1;const x=this;let A=!1,E=0,T=0,C=null,S=-1,M=null;const P=new Zt,L=new Zt;let D=null;const F=new lt(0);let V=0,k=e.width,Y=e.height,X=1,rt=null,dt=null;const Tt=new Zt(0,0,k,Y),Ot=new Zt(0,0,k,Y);let Q=!1;const z=new Ga;let $=!1,ot=!1;const nt=new yt,gt=new yt,Rt=new b,zt=new Zt,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Te(){return C===null?X:1}let O=n;function Mn(R,N){return e.getContext(R,N)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${za}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),O===null){const N="webgl2";if(O=Mn(N,R),O===null)throw Mn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xt,qt,Pt,ce,Ct,I,w,H,Z,tt,K,wt,ut,_t,Yt,et,xt,It,Lt,vt,jt,kt,oe,U;function ct(){Xt=new R_(O),Xt.init(),kt=new fv(O,Xt),qt=new S_(O,Xt,t,kt),Pt=new uv(O,Xt),qt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),ce=new I_(O),Ct=new Yx,I=new dv(O,Xt,Pt,Ct,qt,kt,ce),w=new T_(x),H=new A_(x),Z=new Om(O),oe=new y_(O,Z),tt=new C_(O,Z,ce,oe),K=new D_(O,tt,Z,ce),Lt=new L_(O,qt,I),et=new b_(Ct),wt=new $x(x,w,H,Xt,qt,oe,et),ut=new Mv(x,Ct),_t=new Zx,Yt=new iv(Xt),It=new v_(x,w,H,Pt,K,f,c),xt=new cv(x,K,qt),U=new Sv(O,ce,qt,Pt),vt=new M_(O,Xt,ce),jt=new P_(O,Xt,ce),ce.programs=wt.programs,x.capabilities=qt,x.extensions=Xt,x.properties=Ct,x.renderLists=_t,x.shadowMap=xt,x.state=Pt,x.info=ce}ct();const j=new vv(x,O);this.xr=j,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const R=Xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(k,Y,!1))},this.getSize=function(R){return R.set(k,Y)},this.setSize=function(R,N,G=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,Y=N,e.width=Math.floor(R*X),e.height=Math.floor(N*X),G===!0&&(e.style.width=R+"px",e.style.height=N+"px"),this.setViewport(0,0,R,N)},this.getDrawingBufferSize=function(R){return R.set(k*X,Y*X).floor()},this.setDrawingBufferSize=function(R,N,G){k=R,Y=N,X=G,e.width=Math.floor(R*G),e.height=Math.floor(N*G),this.setViewport(0,0,R,N)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(Tt)},this.setViewport=function(R,N,G,W){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,N,G,W),Pt.viewport(P.copy(Tt).multiplyScalar(X).round())},this.getScissor=function(R){return R.copy(Ot)},this.setScissor=function(R,N,G,W){R.isVector4?Ot.set(R.x,R.y,R.z,R.w):Ot.set(R,N,G,W),Pt.scissor(L.copy(Ot).multiplyScalar(X).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(R){Pt.setScissorTest(Q=R)},this.setOpaqueSort=function(R){rt=R},this.setTransparentSort=function(R){dt=R},this.getClearColor=function(R){return R.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(R=!0,N=!0,G=!0){let W=0;if(R){let B=!1;if(C!==null){const it=C.texture.format;B=it===fu||it===du||it===Ha}if(B){const it=C.texture.type,pt=it===gi||it===zi||it===so||it===ir||it===lu||it===uu,Mt=It.getClearColor(),St=It.getClearAlpha(),Ut=Mt.r,Ft=Mt.g,bt=Mt.b;pt?(g[0]=Ut,g[1]=Ft,g[2]=bt,g[3]=St,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ut,_[1]=Ft,_[2]=bt,_[3]=St,O.clearBufferiv(O.COLOR,0,_))}else W|=O.COLOR_BUFFER_BIT}N&&(W|=O.DEPTH_BUFFER_BIT),G&&(W|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),_t.dispose(),Yt.dispose(),Ct.dispose(),w.dispose(),H.dispose(),K.dispose(),oe.dispose(),U.dispose(),wt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Lu),j.removeEventListener("sessionend",Du),Vi.stop()};function J(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const R=ce.autoReset,N=xt.enabled,G=xt.autoUpdate,W=xt.needsUpdate,B=xt.type;ct(),ce.autoReset=R,xt.enabled=N,xt.autoUpdate=G,xt.needsUpdate=W,xt.type=B}function ft(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nt(R){const N=R.target;N.removeEventListener("dispose",Nt),ve(N)}function ve(R){ke(R),Ct.remove(R)}function ke(R){const N=Ct.get(R).programs;N!==void 0&&(N.forEach(function(G){wt.releaseProgram(G)}),R.isShaderMaterial&&wt.releaseShaderCache(R))}this.renderBufferDirect=function(R,N,G,W,B,it){N===null&&(N=re);const pt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=sp(R,N,G,W,B);Pt.setMaterial(W,pt);let St=G.index,Ut=1;if(W.wireframe===!0){if(St=tt.getWireframeAttribute(G),St===void 0)return;Ut=2}const Ft=G.drawRange,bt=G.attributes.position;let Kt=Ft.start*Ut,ae=(Ft.start+Ft.count)*Ut;it!==null&&(Kt=Math.max(Kt,it.start*Ut),ae=Math.min(ae,(it.start+it.count)*Ut)),St!==null?(Kt=Math.max(Kt,0),ae=Math.min(ae,St.count)):bt!=null&&(Kt=Math.max(Kt,0),ae=Math.min(ae,bt.count));const le=ae-Kt;if(le<0||le===1/0)return;oe.setup(B,W,Mt,G,St);let nn,Jt=vt;if(St!==null&&(nn=Z.get(St),Jt=jt,Jt.setIndex(nn)),B.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*Te()),Jt.setMode(O.LINES)):Jt.setMode(O.TRIANGLES);else if(B.isLine){let Et=W.linewidth;Et===void 0&&(Et=1),Pt.setLineWidth(Et*Te()),B.isLineSegments?Jt.setMode(O.LINES):B.isLineLoop?Jt.setMode(O.LINE_LOOP):Jt.setMode(O.LINE_STRIP)}else B.isPoints?Jt.setMode(O.POINTS):B.isSprite&&Jt.setMode(O.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Jt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Xt.get("WEBGL_multi_draw"))Jt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,ti=B._multiDrawCounts,Qt=B._multiDrawCount,In=St?Z.get(St).bytesPerElement:1,_s=Ct.get(W).currentProgram.getUniforms();for(let fn=0;fn<Qt;fn++)_s.setValue(O,"_gl_DrawID",fn),Jt.render(Et[fn]/In,ti[fn])}else if(B.isInstancedMesh)Jt.renderInstances(Kt,le,B.count);else if(G.isInstancedBufferGeometry){const Et=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,ti=Math.min(G.instanceCount,Et);Jt.renderInstances(Kt,le,ti)}else Jt.render(Kt,le)};function ee(R,N,G){R.transparent===!0&&R.side===We&&R.forceSinglePass===!1?(R.side=ze,R.needsUpdate=!0,yo(R,N,G),R.side=Hn,R.needsUpdate=!0,yo(R,N,G),R.side=We):yo(R,N,G)}this.compile=function(R,N,G=null){G===null&&(G=R),p=Yt.get(G),p.init(N),y.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),R!==G&&R.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const W=new Set;return R.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const it=B.material;if(it)if(Array.isArray(it))for(let pt=0;pt<it.length;pt++){const Mt=it[pt];ee(Mt,G,B),W.add(Mt)}else ee(it,G,B),W.add(it)}),y.pop(),p=null,W},this.compileAsync=function(R,N,G=null){const W=this.compile(R,N,G);return new Promise(B=>{function it(){if(W.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){B(R);return}setTimeout(it,10)}Xt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Pn=null;function Qn(R){Pn&&Pn(R)}function Lu(){Vi.stop()}function Du(){Vi.start()}const Vi=new bf;Vi.setAnimationLoop(Qn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(R){Pn=R,j.setAnimationLoop(R),R===null?Vi.stop():Vi.start()},j.addEventListener("sessionstart",Lu),j.addEventListener("sessionend",Du),this.render=function(R,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(N),N=j.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,N,C),p=Yt.get(R,y.length),p.init(N),y.push(p),gt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),z.setFromProjectionMatrix(gt),ot=this.localClippingEnabled,$=et.init(this.clippingPlanes,ot),m=_t.get(R,v.length),m.init(),v.push(m),j.enabled===!0&&j.isPresenting===!0){const it=x.xr.getDepthSensingMesh();it!==null&&Ka(it,N,-1/0,x.sortObjects)}Ka(R,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(rt,dt),$t=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,$t&&It.addToRenderList(m,R),this.info.render.frame++,$===!0&&et.beginShadows();const G=p.state.shadowsArray;xt.render(G,R,N),$===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(p.setupLights(),N.isArrayCamera){const it=N.cameras;if(B.length>0)for(let pt=0,Mt=it.length;pt<Mt;pt++){const St=it[pt];Nu(W,B,R,St)}$t&&It.render(R);for(let pt=0,Mt=it.length;pt<Mt;pt++){const St=it[pt];Uu(m,R,St,St.viewport)}}else B.length>0&&Nu(W,B,R,N),$t&&It.render(R),Uu(m,R,N);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(x,R,N),oe.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Ka(R,N,G,W){if(R.visible===!1)return;if(R.layers.test(N.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(N);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||z.intersectsSprite(R)){W&&zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(gt);const pt=K.update(R),Mt=R.material;Mt.visible&&m.push(R,pt,Mt,G,zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||z.intersectsObject(R))){const pt=K.update(R),Mt=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),zt.copy(R.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),zt.copy(pt.boundingSphere.center)),zt.applyMatrix4(R.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){const St=pt.groups;for(let Ut=0,Ft=St.length;Ut<Ft;Ut++){const bt=St[Ut],Kt=Mt[bt.materialIndex];Kt&&Kt.visible&&m.push(R,pt,Kt,G,zt.z,bt)}}else Mt.visible&&m.push(R,pt,Mt,G,zt.z,null)}}const it=R.children;for(let pt=0,Mt=it.length;pt<Mt;pt++)Ka(it[pt],N,G,W)}function Uu(R,N,G,W){const B=R.opaque,it=R.transmissive,pt=R.transparent;p.setupLightsView(G),$===!0&&et.setGlobalState(x.clippingPlanes,G),W&&Pt.viewport(P.copy(W)),B.length>0&&vo(B,N,G),it.length>0&&vo(it,N,G),pt.length>0&&vo(pt,N,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Nu(R,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new fs(1,1,{generateMipmaps:!0,type:Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float")?fo:gi,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const it=p.state.transmissionRenderTarget[W.id],pt=W.viewport||P;it.setSize(pt.z,pt.w);const Mt=x.getRenderTarget();x.setRenderTarget(it),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),$t&&It.render(G);const St=x.toneMapping;x.toneMapping=Oi;const Ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),$===!0&&et.setGlobalState(x.clippingPlanes,W),vo(R,G,W),I.updateMultisampleRenderTarget(it),I.updateRenderTargetMipmap(it),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let bt=0,Kt=N.length;bt<Kt;bt++){const ae=N[bt],le=ae.object,nn=ae.geometry,Jt=ae.material,Et=ae.group;if(Jt.side===We&&le.layers.test(W.layers)){const ti=Jt.side;Jt.side=ze,Jt.needsUpdate=!0,Fu(le,G,W,nn,Jt,Et),Jt.side=ti,Jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(I.updateMultisampleRenderTarget(it),I.updateRenderTargetMipmap(it))}x.setRenderTarget(Mt),x.setClearColor(F,V),Ut!==void 0&&(W.viewport=Ut),x.toneMapping=St}function vo(R,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let B=0,it=R.length;B<it;B++){const pt=R[B],Mt=pt.object,St=pt.geometry,Ut=W===null?pt.material:W,Ft=pt.group;Mt.layers.test(G.layers)&&Fu(Mt,N,G,St,Ut,Ft)}}function Fu(R,N,G,W,B,it){R.onBeforeRender(x,N,G,W,B,it),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(x,N,G,W,R,it),B.transparent===!0&&B.side===We&&B.forceSinglePass===!1?(B.side=ze,B.needsUpdate=!0,x.renderBufferDirect(G,N,W,B,R,it),B.side=Hn,B.needsUpdate=!0,x.renderBufferDirect(G,N,W,B,R,it),B.side=We):x.renderBufferDirect(G,N,W,B,R,it),R.onAfterRender(x,N,G,W,B,it)}function yo(R,N,G){N.isScene!==!0&&(N=re);const W=Ct.get(R),B=p.state.lights,it=p.state.shadowsArray,pt=B.state.version,Mt=wt.getParameters(R,B.state,it,N,G),St=wt.getProgramCacheKey(Mt);let Ut=W.programs;W.environment=R.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(R.isMeshStandardMaterial?H:w).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?N.environmentRotation:R.envMapRotation,Ut===void 0&&(R.addEventListener("dispose",Nt),Ut=new Map,W.programs=Ut);let Ft=Ut.get(St);if(Ft!==void 0){if(W.currentProgram===Ft&&W.lightsStateVersion===pt)return Ou(R,Mt),Ft}else Mt.uniforms=wt.getUniforms(R),R.onBeforeCompile(Mt,x),Ft=wt.acquireProgram(Mt,St),Ut.set(St,Ft),W.uniforms=Mt.uniforms;const bt=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(bt.clippingPlanes=et.uniform),Ou(R,Mt),W.needsLights=op(R),W.lightsStateVersion=pt,W.needsLights&&(bt.ambientLightColor.value=B.state.ambient,bt.lightProbe.value=B.state.probe,bt.directionalLights.value=B.state.directional,bt.directionalLightShadows.value=B.state.directionalShadow,bt.spotLights.value=B.state.spot,bt.spotLightShadows.value=B.state.spotShadow,bt.rectAreaLights.value=B.state.rectArea,bt.ltc_1.value=B.state.rectAreaLTC1,bt.ltc_2.value=B.state.rectAreaLTC2,bt.pointLights.value=B.state.point,bt.pointLightShadows.value=B.state.pointShadow,bt.hemisphereLights.value=B.state.hemi,bt.directionalShadowMap.value=B.state.directionalShadowMap,bt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,bt.spotShadowMap.value=B.state.spotShadowMap,bt.spotLightMatrix.value=B.state.spotLightMatrix,bt.spotLightMap.value=B.state.spotLightMap,bt.pointShadowMap.value=B.state.pointShadowMap,bt.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ft,W.uniformsList=null,Ft}function Bu(R){if(R.uniformsList===null){const N=R.currentProgram.getUniforms();R.uniformsList=Aa.seqWithValue(N.seq,R.uniforms)}return R.uniformsList}function Ou(R,N){const G=Ct.get(R);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function sp(R,N,G,W,B){N.isScene!==!0&&(N=re),I.resetTextureUnits();const it=N.fog,pt=W.isMeshStandardMaterial?N.environment:null,Mt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qe,St=(W.isMeshStandardMaterial?H:w).get(W.envMap||pt),Ut=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ft=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),bt=!!G.morphAttributes.position,Kt=!!G.morphAttributes.normal,ae=!!G.morphAttributes.color;let le=Oi;W.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(le=x.toneMapping);const nn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Jt=nn!==void 0?nn.length:0,Et=Ct.get(W),ti=p.state.lights;if($===!0&&(ot===!0||R!==M)){const Sn=R===M&&W.id===S;et.setState(W,R,Sn)}let Qt=!1;W.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ti.state.version||Et.outputColorSpace!==Mt||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==St||W.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Ut||Et.vertexTangents!==Ft||Et.morphTargets!==bt||Et.morphNormals!==Kt||Et.morphColors!==ae||Et.toneMapping!==le||Et.morphTargetsCount!==Jt)&&(Qt=!0):(Qt=!0,Et.__version=W.version);let In=Et.currentProgram;Qt===!0&&(In=yo(W,N,B));let _s=!1,fn=!1,Mr=!1;const ue=In.getUniforms(),Wn=Et.uniforms;if(Pt.useProgram(In.program)&&(_s=!0,fn=!0,Mr=!0),W.id!==S&&(S=W.id,fn=!0),_s||M!==R){Pt.buffers.depth.getReversed()?(nt.copy(R.projectionMatrix),fm(nt),pm(nt),ue.setValue(O,"projectionMatrix",nt)):ue.setValue(O,"projectionMatrix",R.projectionMatrix),ue.setValue(O,"viewMatrix",R.matrixWorldInverse);const yi=ue.map.cameraPosition;yi!==void 0&&yi.setValue(O,Rt.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&ue.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,fn=!0,Mr=!0)}if(B.isSkinnedMesh){ue.setOptional(O,B,"bindMatrix"),ue.setOptional(O,B,"bindMatrixInverse");const Sn=B.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ue.setValue(O,"boneTexture",Sn.boneTexture,I))}B.isBatchedMesh&&(ue.setOptional(O,B,"batchingTexture"),ue.setValue(O,"batchingTexture",B._matricesTexture,I),ue.setOptional(O,B,"batchingIdTexture"),ue.setValue(O,"batchingIdTexture",B._indirectTexture,I),ue.setOptional(O,B,"batchingColorTexture"),B._colorsTexture!==null&&ue.setValue(O,"batchingColorTexture",B._colorsTexture,I));const Sr=G.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&Lt.update(B,G,In),(fn||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,ue.setValue(O,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Wn.envMap.value=St,Wn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(Wn.envMapIntensity.value=N.environmentIntensity),fn&&(ue.setValue(O,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&rp(Wn,Mr),it&&W.fog===!0&&ut.refreshFogUniforms(Wn,it),ut.refreshMaterialUniforms(Wn,W,X,Y,p.state.transmissionRenderTarget[R.id]),Aa.upload(O,Bu(Et),Wn,I)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Aa.upload(O,Bu(Et),Wn,I),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(O,"center",B.center),ue.setValue(O,"modelViewMatrix",B.modelViewMatrix),ue.setValue(O,"normalMatrix",B.normalMatrix),ue.setValue(O,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Sn=W.uniformsGroups;for(let yi=0,Mi=Sn.length;yi<Mi;yi++){const zu=Sn[yi];U.update(zu,In),U.bind(zu,In)}}return In}function rp(R,N){R.ambientLightColor.needsUpdate=N,R.lightProbe.needsUpdate=N,R.directionalLights.needsUpdate=N,R.directionalLightShadows.needsUpdate=N,R.pointLights.needsUpdate=N,R.pointLightShadows.needsUpdate=N,R.spotLights.needsUpdate=N,R.spotLightShadows.needsUpdate=N,R.rectAreaLights.needsUpdate=N,R.hemisphereLights.needsUpdate=N}function op(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,N,G){Ct.get(R.texture).__webglTexture=N,Ct.get(R.depthTexture).__webglTexture=G;const W=Ct.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,N){const G=Ct.get(R);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(R,N=0,G=0){C=R,E=N,T=G;let W=!0,B=null,it=!1,pt=!1;if(R){const St=Ct.get(R);if(St.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(O.FRAMEBUFFER,null),W=!1;else if(St.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(St.__hasExternalTextures)I.rebindTextures(R,Ct.get(R.texture).__webglTexture,Ct.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const bt=R.depthTexture;if(St.__boundDepthTexture!==bt){if(bt!==null&&Ct.has(bt)&&(R.width!==bt.image.width||R.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}const Ut=R.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Ft=Ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ft[N])?B=Ft[N][G]:B=Ft[N],it=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?B=Ct.get(R).__webglMultisampledFramebuffer:Array.isArray(Ft)?B=Ft[G]:B=Ft,P.copy(R.viewport),L.copy(R.scissor),D=R.scissorTest}else P.copy(Tt).multiplyScalar(X).floor(),L.copy(Ot).multiplyScalar(X).floor(),D=Q;if(Pt.bindFramebuffer(O.FRAMEBUFFER,B)&&W&&Pt.drawBuffers(R,B),Pt.viewport(P),Pt.scissor(L),Pt.setScissorTest(D),it){const St=Ct.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,St.__webglTexture,G)}else if(pt){const St=Ct.get(R.texture),Ut=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,St.__webglTexture,G||0,Ut)}S=-1},this.readRenderTargetPixels=function(R,N,G,W,B,it,pt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){Pt.bindFramebuffer(O.FRAMEBUFFER,Mt);try{const St=R.texture,Ut=St.format,Ft=St.type;if(!qt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=R.width-W&&G>=0&&G<=R.height-B&&O.readPixels(N,G,W,B,kt.convert(Ut),kt.convert(Ft),it)}finally{const St=C!==null?Ct.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(R,N,G,W,B,it,pt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&pt!==void 0&&(Mt=Mt[pt]),Mt){const St=R.texture,Ut=St.format,Ft=St.type;if(!qt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=R.width-W&&G>=0&&G<=R.height-B){Pt.bindFramebuffer(O.FRAMEBUFFER,Mt);const bt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.bufferData(O.PIXEL_PACK_BUFFER,it.byteLength,O.STREAM_READ),O.readPixels(N,G,W,B,kt.convert(Ut),kt.convert(Ft),0);const Kt=C!==null?Ct.get(C).__webglFramebuffer:null;Pt.bindFramebuffer(O.FRAMEBUFFER,Kt);const ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await dm(O,ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,bt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,it),O.deleteBuffer(bt),O.deleteSync(ae),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,N=null,G=0){R.isTexture!==!0&&(Yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,R=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(R.image.width*W),it=Math.floor(R.image.height*W),pt=N!==null?N.x:0,Mt=N!==null?N.y:0;I.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,pt,Mt,B,it),Pt.unbindTexture()},this.copyTextureToTexture=function(R,N,G=null,W=null,B=0){R.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,R=arguments[1],N=arguments[2],B=arguments[3]||0,G=null);let it,pt,Mt,St,Ut,Ft,bt,Kt,ae;const le=R.isCompressedTexture?R.mipmaps[B]:R.image;G!==null?(it=G.max.x-G.min.x,pt=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,St=G.min.x,Ut=G.min.y,Ft=G.isBox3?G.min.z:0):(it=le.width,pt=le.height,Mt=le.depth||1,St=0,Ut=0,Ft=0),W!==null?(bt=W.x,Kt=W.y,ae=W.z):(bt=0,Kt=0,ae=0);const nn=kt.convert(N.format),Jt=kt.convert(N.type);let Et;N.isData3DTexture?(I.setTexture3D(N,0),Et=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(I.setTexture2DArray(N,0),Et=O.TEXTURE_2D_ARRAY):(I.setTexture2D(N,0),Et=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);const ti=O.getParameter(O.UNPACK_ROW_LENGTH),Qt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),In=O.getParameter(O.UNPACK_SKIP_PIXELS),_s=O.getParameter(O.UNPACK_SKIP_ROWS),fn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,le.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,le.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,St),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ft);const Mr=R.isDataArrayTexture||R.isData3DTexture,ue=N.isDataArrayTexture||N.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const Wn=Ct.get(R),Sr=Ct.get(N),Sn=Ct.get(Wn.__renderTarget),yi=Ct.get(Sr.__renderTarget);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,yi.__webglFramebuffer);for(let Mi=0;Mi<Mt;Mi++)Mr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(R).__webglTexture,B,Ft+Mi),R.isDepthTexture?(ue&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ct.get(N).__webglTexture,B,ae+Mi),O.blitFramebuffer(St,Ut,it,pt,bt,Kt,it,pt,O.DEPTH_BUFFER_BIT,O.NEAREST)):ue?O.copyTexSubImage3D(Et,B,bt,Kt,ae+Mi,St,Ut,it,pt):O.copyTexSubImage2D(Et,B,bt,Kt,ae+Mi,St,Ut,it,pt);Pt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ue?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Et,B,bt,Kt,ae,it,pt,Mt,nn,Jt,le.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,B,bt,Kt,ae,it,pt,Mt,nn,le.data):O.texSubImage3D(Et,B,bt,Kt,ae,it,pt,Mt,nn,Jt,le):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,B,bt,Kt,it,pt,nn,Jt,le.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,B,bt,Kt,le.width,le.height,nn,le.data):O.texSubImage2D(O.TEXTURE_2D,B,bt,Kt,it,pt,nn,Jt,le);O.pixelStorei(O.UNPACK_ROW_LENGTH,ti),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,In),O.pixelStorei(O.UNPACK_SKIP_ROWS,_s),O.pixelStorei(O.UNPACK_SKIP_IMAGES,fn),B===0&&N.generateMipmaps&&O.generateMipmap(Et),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,N,G=null,W=null,B=0){return R.isTexture!==!0&&(Yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,R=arguments[2],N=arguments[3],B=arguments[4]||0),Yr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,N,G,W,B)},this.initRenderTarget=function(R){Ct.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,Pt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Cf extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Pf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const $e=new b;class co{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=On(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=On(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=On(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=On(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=On(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new co(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ls extends kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ls;const Ar=new b,Ds=new b,Us=new b,Ns=new At,Rr=new At,If=new yt,Ho=new b,Cr=new b,Vo=new b,kh=new At,Ec=new At,Hh=new At;class us extends de{constructor(t=new ls){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Pf(e,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new co(n,3,0,!1)),Ls.setAttribute("uv",new co(n,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ds.setFromMatrixScale(this.matrixWorld),If.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ds.multiplyScalar(-Us.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Go(Ho.set(-.5,-.5,0),Us,o,Ds,i,r),Go(Cr.set(.5,-.5,0),Us,o,Ds,i,r),Go(Vo.set(.5,.5,0),Us,o,Ds,i,r),kh.set(0,0),Ec.set(1,0),Hh.set(1,1);let a=t.ray.intersectTriangle(Ho,Cr,Vo,!1,Ar);if(a===null&&(Go(Cr.set(-.5,.5,0),Us,o,Ds,i,r),Ec.set(0,1),a=t.ray.intersectTriangle(Ho,Vo,Cr,!1,Ar),a===null))return;const c=t.ray.origin.distanceTo(Ar);c<t.near||c>t.far||e.push({distance:c,point:Ar.clone(),uv:Ie.getInterpolation(Ar,Ho,Cr,Vo,kh,Ec,Hh,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Go(s,t,e,n,i,r){Ns.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Rr.x=r*Ns.x-i*Ns.y,Rr.y=i*Ns.x+r*Ns.y):Rr.copy(Ns),s.copy(t),s.x+=Rr.x,s.y+=Rr.y,s.applyMatrix4(If)}const Vh=new b,Gh=new Zt,Wh=new Zt,Tv=new b,Xh=new yt,Wo=new b,Ac=new qe,qh=new yt,Rc=new Hi;class wv extends Dt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gu,this.bindMatrix=new yt,this.bindMatrixInverse=new yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new te),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wo),this.boundingBox.expandByPoint(Wo)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qe),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Wo),this.boundingSphere.expandByPoint(Wo)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ac.copy(this.boundingSphere),Ac.applyMatrix4(i),t.ray.intersectsSphere(Ac)!==!1&&(qh.copy(i).invert(),Rc.copy(t.ray).applyMatrix4(qh),!(this.boundingBox!==null&&Rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Rc)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Zt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Gu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Gh.fromBufferAttribute(i.attributes.skinIndex,t),Wh.fromBufferAttribute(i.attributes.skinWeight,t),Vh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Wh.getComponent(r);if(o!==0){const a=Gh.getComponent(r);Xh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Tv.copy(Vh).applyMatrix4(Xh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Lf extends de{constructor(){super(),this.isBone=!0,this.type="Bone"}}class to extends Le{constructor(t=null,e=1,n=1,i,r,o,a,c,l=Je,u=Je,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new yt,Ev=new yt;class xu{constructor(t=[],e=[]){this.uuid=zn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new yt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Ev;jh.multiplyMatrices(a,e[r]),jh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xu(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new to(e,t,t,ln,vn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Lf),this.bones.push(o),this.boneInverses.push(new yt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class ql extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Fs=new yt,$h=new yt,Xo=[],Yh=new te,Av=new yt,Pr=new Dt,Ir=new qe;class Df extends Dt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Av)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new te),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Yh.copy(t.boundingBox).applyMatrix4(Fs),this.boundingBox.union(Yh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new qe),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Fs),Ir.copy(t.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Ir)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ir.copy(this.boundingSphere),Ir.applyMatrix4(n),t.ray.intersectsSphere(Ir)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Fs),$h.multiplyMatrices(n,Fs),Pr.matrixWorld=$h,Pr.raycast(t,Xo);for(let o=0,a=Xo.length;o<a;o++){const c=Xo[o];c.instanceId=r,c.object=this,e.push(c)}Xo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new to(new Float32Array(i*this.count),i,this.count,hu,vn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function Cc(s,t){return s-t}function Rv(s,t){return s.z-t.z}function Cv(s,t){return t.z-s.z}class Pv{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const sn=new yt,Iv=new lt(1,1,1),Pc=new Ga,qo=new te,Yi=new qe,Lr=new b,Kh=new b,Lv=new b,Ic=new Pv,Ge=new Dt,jo=[];function Dv(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function Ki(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Uv extends Dt{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(t,e,n=e*2,i){super(new _e,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new to(e,t,t,ln,vn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new to(e,t,t,Ha,zi);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new to(e,t,t,ln,vn);n.colorSpace=Wt.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:c,normalized:l}=o,u=new a.constructor(n*c),h=new be(u,c,l);e.setAttribute(r,h)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new be(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new te);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,sn),this.getBoundingBoxAt(r,qo).applyMatrix4(sn),t.union(qo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qe);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,sn),this.getBoundingSphereAt(r,Yi).applyMatrix4(sn),t.union(Yi)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Cc),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;sn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(Iv.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");let c;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Cc),c=this._availableGeometryIds.shift(),r[c]=i):(c=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(c,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,c}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const c=a.vertexStart,l=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const u in n.attributes){const h=e.getAttribute(u),d=n.getAttribute(u);Dv(h,d,c);const f=h.itemSize;for(let g=h.count,_=l;g<_;g++){const m=c+g;for(let p=0;p<f;p++)d.setComponent(m,p,0)}d.needsUpdate=!0,d.addUpdateRange(c*f,l*f)}if(i){const u=a.indexStart,h=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let d=0;d<o.count;d++)r.setX(u+d,c+o.getX(d));for(let d=o.count,f=h;d<f;d++)r.setX(u+d,c);r.needsUpdate=!0,r.addUpdateRange(u,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?this:(e[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this)}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const c=i[o],l=n[c];if(l.active!==!1){if(r.index!==null){if(l.indexStart!==e){const{indexStart:u,vertexStart:h,reservedIndexCount:d}=l,f=r.index,g=f.array,_=t-h;for(let m=u;m<u+d;m++)g[m]=g[m]+_;f.array.copyWithin(e,u,u+d),f.addUpdateRange(e,d),l.indexStart=e}e+=l.reservedIndexCount}if(l.vertexStart!==t){const{vertexStart:u,reservedVertexCount:h}=l,d=r.attributes;for(const f in d){const g=d[f],{array:_,itemSize:m}=g;_.copyWithin(t*m,u*m,(u+h)*m),g.addUpdateRange(t*m,h*m)}l.vertexStart=t}t+=l.reservedVertexCount,l.start=r.index?l.indexStart:l.vertexStart,this._nextIndexStart=r.index?l.indexStart+l.reservedIndexCount:0,this._nextVertexStart=l.vertexStart+l.reservedVertexCount}}return this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new te,o=n.index,a=n.attributes.position;for(let c=i.start,l=i.start+i.count;c<l;c++){let u=c;o&&(u=o.getX(u)),r.expandByPoint(Lr.fromBufferAttribute(a,u))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new qe;this.getBoundingBoxAt(t,qo),qo.getCenter(r.center);const o=n.index,a=n.attributes.position;let c=0;for(let l=i.start,u=i.start+i.count;l<u;l++){let h=l;o&&(h=o.getX(h)),Lr.fromBufferAttribute(a,h),c=Math.max(c,r.center.distanceToSquared(Lr))}r.radius=Math.sqrt(c),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){const n=this._instanceInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?this:(e.toArray(r,t*16),i.needsUpdate=!0,this)}getMatrixAt(t,e){const n=this._instanceInfo,i=this._matricesTexture.image.data;return t>=n.length||n[t].active===!1?null:e.fromArray(i,t*16)}setColorAt(t,e){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._instanceInfo;return t>=r.length||r[t].active===!1?this:(e.toArray(i,t*4),n.needsUpdate=!0,this)}getColorAt(t,e){const n=this._colorsTexture.image.data,i=this._instanceInfo;return t>=i.length||i[t].active===!1?null:e.fromArray(n,t*4)}setVisibleAt(t,e){const n=this._instanceInfo;return t>=n.length||n[t].active===!1||n[t].visible===e?this:(n[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?!1:e[t].visible}setGeometryIdAt(t,e){const n=this._instanceInfo,i=this._geometryInfo;return t>=n.length||n[t].active===!1||e>=i.length||i[e].active===!1?null:(n[t].geometryIndex=e,this)}getGeometryIdAt(t){const e=this._instanceInfo;return t>=e.length||e[t].active===!1?-1:e[t].geometryIndex}getGeometryRangeAt(t,e={}){if(t<0||t>=this._geometryCount)return null;const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(Cc);e[e.length-1]===n.length;)n.pop(),e.pop();if(t<n.length)throw new Error(`BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);Ki(this._multiDrawCounts,i),Ki(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,c=this._colorsTexture;o.dispose(),this._initIndirectTexture(),Ki(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),Ki(a.image.data,this._matricesTexture.image.data),c&&(c.dispose(),this._initColorsTexture(),Ki(c.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(c=>c.indexStart+c.reservedIndexCount))>e)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new _e,this._initializeGeometry(r));const o=this.geometry;r.index&&Ki(r.index.array,o.index.array);for(const a in r.attributes)Ki(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;Ge.material=this.material,Ge.geometry.index=o.index,Ge.geometry.attributes=o.attributes,Ge.geometry.boundingBox===null&&(Ge.geometry.boundingBox=new te),Ge.geometry.boundingSphere===null&&(Ge.geometry.boundingSphere=new qe);for(let a=0,c=n.length;a<c;a++){if(!n[a].visible||!n[a].active)continue;const l=n[a].geometryIndex,u=i[l];Ge.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(a,Ge.matrixWorld).premultiply(r),this.getBoundingBoxAt(l,Ge.geometry.boundingBox),this.getBoundingSphereAt(l,Ge.geometry.boundingSphere),Ge.raycast(t,jo);for(let h=0,d=jo.length;h<d;h++){const f=jo[h];f.object=this,f.batchId=a,e.push(f)}jo.length=0}Ge.material=null,Ge.geometry.index=null,Ge.geometry.attributes={},Ge.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._geometryCount=t._geometryCount,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex(),a=o===null?1:o.array.BYTES_PER_ELEMENT,c=this._instanceInfo,l=this._multiDrawStarts,u=this._multiDrawCounts,h=this._geometryInfo,d=this.perObjectFrustumCulled,f=this._indirectTexture,g=f.image.data;d&&(sn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),Pc.setFromProjectionMatrix(sn,t.coordinateSystem));let _=0;if(this.sortObjects){sn.copy(this.matrixWorld).invert(),Lr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(sn),Kh.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(sn);for(let v=0,y=c.length;v<y;v++)if(c[v].visible&&c[v].active){const x=c[v].geometryIndex;this.getMatrixAt(v,sn),this.getBoundingSphereAt(x,Yi).applyMatrix4(sn);let A=!1;if(d&&(A=!Pc.intersectsSphere(Yi)),!A){const E=h[x],T=Lv.subVectors(Yi.center,Lr).dot(Kh);Ic.push(E.start,E.count,T,v)}}const m=Ic.list,p=this.customSort;p===null?m.sort(r.transparent?Cv:Rv):p.call(this,m,n);for(let v=0,y=m.length;v<y;v++){const x=m[v];l[_]=x.start*a,u[_]=x.count,g[_]=x.index,_++}Ic.reset()}else for(let m=0,p=c.length;m<p;m++)if(c[m].visible&&c[m].active){const v=c[m].geometryIndex;let y=!1;if(d&&(this.getMatrixAt(m,sn),this.getBoundingSphereAt(v,Yi).applyMatrix4(sn),y=!Pc.intersectsSphere(Yi)),!y){const x=h[v];l[_]=x.start*a,u[_]=x.count,g[_]=m,_++}}f.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class fr extends kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new b,Da=new b,Zh=new yt,Dr=new Hi,$o=new qe,Lc=new b,Jh=new b;class mo extends de{constructor(t=new _e,e=new fr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)La.fromBufferAttribute(e,i-1),Da.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=La.distanceTo(Da);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=r,t.ray.intersectsSphere($o)===!1)return;Zh.copy(i).invert(),Dr.copy(t.ray).applyMatrix4(Zh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),v=u.getX(_+1),y=Yo(this,t,Dr,c,p,v);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Yo(this,t,Dr,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=Yo(this,t,Dr,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Yo(this,t,Dr,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Yo(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(La.fromBufferAttribute(o,i),Da.fromBufferAttribute(o,r),e.distanceSqToSegment(La,Da,Lc,Jh)>n)return;Lc.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Lc);if(!(c<t.near||c>t.far))return{distance:c,point:Jh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Qh=new b,td=new b;class vu extends mo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Qh.fromBufferAttribute(e,i),td.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qh.distanceTo(td);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nv extends mo{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Uf extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ed=new yt,jl=new Hi,Ko=new qe,Zo=new b;class Nf extends de{constructor(t=new _e,e=new Uf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,t.ray.intersectsSphere(Ko)===!1)return;ed.copy(i).invert(),jl.copy(t.ray).applyMatrix4(ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Zo.fromBufferAttribute(h,m),nd(Zo,m,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Zo.fromBufferAttribute(h,g),nd(Zo,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nd(s,t,e,n,i,r,o){const a=jl.distanceSqToPoint(s);if(a<e){const c=new b;jl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class pr extends Le{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mr extends _e{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ge(h,3)),this.setAttribute("normal",new ge(d,3)),this.setAttribute("uv",new ge(f,2));function v(){const x=new b,A=new b;let E=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,P=M*(e-t)+t;for(let L=0;L<=i;L++){const D=L/i,F=D*c+a,V=Math.sin(F),k=Math.cos(F);A.x=P*V,A.y=-M*n+m,A.z=P*k,h.push(A.x,A.y,A.z),x.set(V,T,k).normalize(),d.push(x.x,x.y,x.z),f.push(D,1-M),S.push(g++)}_.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const M=_[S][C],P=_[S+1][C],L=_[S+1][C+1],D=_[S][C+1];(t>0||S!==0)&&(u.push(M,P,D),E+=3),(e>0||S!==r-1)&&(u.push(P,L,D),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){const A=g,E=new At,T=new b;let C=0;const S=x===!0?t:e,M=x===!0?1:-1;for(let L=1;L<=i;L++)h.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const P=g;for(let L=0;L<=i;L++){const F=L/i*c+a,V=Math.cos(F),k=Math.sin(F);T.x=S*k,T.y=m*M,T.z=S*V,h.push(T.x,T.y,T.z),d.push(0,M,0),E.x=V*.5+.5,E.y=k*.5*M+.5,f.push(E.x,E.y),g++}for(let L=0;L<i;L++){const D=A+L,F=P+L;x===!0?u.push(F,F+1,D):u.push(F+1,F,D),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yu extends mr{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new yu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xa extends _e{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(r.slice(),3)),this.setAttribute("uv",new ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new b,x=new b,A=new b;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],x),f(e[E+2],A),c(y,x,A,v)}function c(v,y,x,A){const E=A+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const S=v.clone().lerp(x,C/E),M=y.clone().lerp(x,C/E),P=E-C;for(let L=0;L<=P;L++)L===0&&C===E?T[C][L]=S:T[C][L]=S.clone().lerp(M,L/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(T[C][M+1]),d(T[C+1][M]),d(T[C][M])):(d(T[C][M+1]),d(T[C+1][M+1]),d(T[C+1][M]))}}function l(v){const y=new b;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function u(){const v=new b;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(x,1-A)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],A=o[v+4],E=Math.max(y,x,A),T=Math.min(y,x,A);E>.9&&T<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,y){const x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){const v=new b,y=new b,x=new b,A=new b,E=new At,T=new At,C=new At;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),E.set(o[M+0],o[M+1]),T.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),A.copy(v).add(y).add(x).divideScalar(3);const P=m(A);_(E,M+0,v,P),_(T,M+2,y,P),_(C,M+4,x,P)}}function _(v,y,x,A){A<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.vertices,t.indices,t.radius,t.details)}}const Jo=new b,Qo=new b,Dc=new b,ta=new Ie;class Fv extends _e{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(Ks*e),o=t.getIndex(),a=t.getAttribute("position"),c=o?o.count:a.count,l=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let g=0;g<c;g+=3){o?(l[0]=o.getX(g),l[1]=o.getX(g+1),l[2]=o.getX(g+2)):(l[0]=g,l[1]=g+1,l[2]=g+2);const{a:_,b:m,c:p}=ta;if(_.fromBufferAttribute(a,l[0]),m.fromBufferAttribute(a,l[1]),p.fromBufferAttribute(a,l[2]),ta.getNormal(Dc),h[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){const y=(v+1)%3,x=h[v],A=h[y],E=ta[u[v]],T=ta[u[y]],C=`${x}_${A}`,S=`${A}_${x}`;S in d&&d[S]?(Dc.dot(d[S].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(T.x,T.y,T.z)),d[S]=null):C in d||(d[C]={index0:l[v],index1:l[y],normal:Dc.clone()})}}for(const g in d)if(d[g]){const{index0:_,index1:m}=d[g];Jo.fromBufferAttribute(a,_),Qo.fromBufferAttribute(a,m),f.push(Jo.x,Jo.y,Jo.z),f.push(Qo.x,Qo.y,Qo.z)}this.setAttribute("position",new ge(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Mu extends Xa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Mu(t.radius,t.detail)}}class qa extends _e{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=t;const d=(e-t)/i,f=new b,g=new At;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const v=p+m,y=v,x=v+n+1,A=v+n+2,E=v+1;a.push(y,x,E),a.push(x,A,E)}}this.setIndex(a),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class gr extends _e{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new b,d=new b,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const E=A/e;h.x=-t*Math.cos(i+E*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(i+E*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(E+x,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=u[p][v+1],x=u[p][v],A=u[p+1][v],E=u[p+1][v+1];(p!==0||o>0)&&f.push(y,x,E),(p!==n-1||c<Math.PI)&&f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(_,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Su extends Xa{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Su(t.radius,t.detail)}}class _i extends kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=df,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zn extends _i{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function ea(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Bv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ov(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function id(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let c=0;c!==t;++c)i[o++]=s[a+c]}return i}function Ff(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class go{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class zv extends go{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wu,endingEnd:Wu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xu:r=t,a=2*e-n;break;case qu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xu:o=t,c=2*n-e;break;case qu:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}const l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+v*o[l+A]+y*o[c+A]+x*o[h+A];return r}}class kv extends go{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(i-e),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Hv extends go{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Jn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ea(e,this.TimeBufferType),this.values=ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ea(t.times,Array),values:ea(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Hv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new kv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case oo:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return oo;case this.InterpolantFactoryMethodSmooth:return Za}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Bv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Za,r=t.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(i)c=!0;else{const h=a*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=e[h+g];if(_!==e[d+g]||_!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];const h=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=oo;class _r extends Jn{constructor(t,e,n){super(t,e,n)}}_r.prototype.ValueTypeName="bool";_r.prototype.ValueBufferType=Array;_r.prototype.DefaultInterpolation=ro;_r.prototype.InterpolantFactoryMethodLinear=void 0;_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Bf extends Jn{}Bf.prototype.ValueTypeName="color";class ar extends Jn{}ar.prototype.ValueTypeName="number";class Vv extends go{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e);let l=t*a;for(let u=l+a;l!==u;l+=4)Fe.slerpFlat(r,0,o,l-a,o,l,c);return r}}class cr extends Jn{InterpolantFactoryMethodLinear(t){return new Vv(this.times,this.values,this.getValueSize(),t)}}cr.prototype.ValueTypeName="quaternion";cr.prototype.InterpolantFactoryMethodSmooth=void 0;class xr extends Jn{constructor(t,e,n){super(t,e,n)}}xr.prototype.ValueTypeName="string";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=ro;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;class lr extends Jn{}lr.prototype.ValueTypeName="vector";class Gv{constructor(t="",e=-1,n=[],i=Bp){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=zn(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Xv(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(Jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=Ov(c);c=id(c,1,u),l=id(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new ar(".morphTargetInfluences["+e[a].name+"]",c,l).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=t.length;a<c;a++){const l=t[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const m=[],p=[];Ff(f,m,p,g),m.length!==0&&_.push(new h(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let c=t.length||-1;const l=t.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const y=d[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new ar(".morphTargetInfluence["+_+"]",m,p))}c=f.length*o}else{const f=".bones["+e[h].name+"]";n(lr,f+".position",d,"pos",i),n(cr,f+".quaternion",d,"rot",i),n(lr,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ar;case"vector":case"vector2":case"vector3":case"vector4":return lr;case"color":return Bf;case"quaternion":return cr;case"bool":case"boolean":return _r;case"string":return xr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Wv(s.type);if(s.times===void 0){const e=[],n=[];Ff(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Di={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Of{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const qv=new Of;class vr{constructor(t){this.manager=t!==void 0?t:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vr.DEFAULT_MATERIAL_NAME="__DEFAULT";const oi={};class jv extends Error{constructor(t,e){super(t),this.response=e}}class zf extends vr{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Di.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(oi[t]!==void 0){oi[t].push({onLoad:e,onProgress:n,onError:i});return}oi[t]=[],oi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=oi[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,T=u.length;E<T;E++){const C=u[E];C.onProgress&&C.onProgress(A)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new jv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Di.add(t,l);const u=oi[t];delete oi[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=oi[t];if(u===void 0)throw this.manager.itemError(t),l;delete oi[t];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class $v extends vr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Di.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=ao("img");function c(){u(),Di.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Yv extends vr{constructor(t){super(t)}load(t,e,n,i){const r=new Le,o=new $v(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ja extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Kv extends ja{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Uc=new yt,sd=new b,rd=new b;class bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ga,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sd.setFromMatrixPosition(t.matrixWorld),e.position.copy(sd),rd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rd),e.updateMatrixWorld(),Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zv extends bu{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=rr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Jv extends ja{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Zv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const od=new yt,Ur=new b,Nc=new b;class Qv extends bu{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new At(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new b(1,0,0),new b(-1,0,0),new b(0,0,1),new b(0,0,-1),new b(0,1,0),new b(0,-1,0)],this._cubeUps=[new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,1,0),new b(0,0,1),new b(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ur.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ur),Nc.copy(n.position),Nc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Nc),n.updateMatrixWorld(),i.makeTranslation(-Ur.x,-Ur.y,-Ur.z),od.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od)}}class Tu extends ja{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ty extends bu{constructor(){super(new gu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kf extends ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new ty}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class eo{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class ey extends vr{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Di.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(l=>{e&&e(l),r.manager.itemEnd(t)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(t,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){i&&i(l),Di.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});Di.add(t,c),r.manager.itemStart(t)}}const wu="\\[\\]\\.:\\/",ny=new RegExp("["+wu+"]","g"),Eu="[^"+wu+"]",iy="[^"+wu.replace("\\.","")+"]",sy=/((?:WC+[\/:])*)/.source.replace("WC",Eu),ry=/(WCOD+)?/.source.replace("WCOD",iy),oy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eu),ay=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eu),cy=new RegExp("^"+sy+ry+oy+ay+"$"),ly=["material","materials","bones","map"];class uy{constructor(t,e,n){const i=n||ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ie{constructor(t,e,n){this.path=e,this.parsedPath=n||ie.parseTrackName(e),this.node=ie.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ie.Composite(t,e,n):new ie(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ny,"")}static parseTrackName(t){const e=cy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);ly.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ie.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}const o=t[i];if(o===void 0){const l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ie.Composite=uy;ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ie.prototype.GetterByBindingType=[ie.prototype._getValue_direct,ie.prototype._getValue_array,ie.prototype._getValue_arrayElement,ie.prototype._getValue_toArray];ie.prototype.SetterByBindingTypeAndVersioning=[[ie.prototype._setValue_direct,ie.prototype._setValue_direct_setNeedsUpdate,ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_array,ie.prototype._setValue_array_setNeedsUpdate,ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_arrayElement,ie.prototype._setValue_arrayElement_setNeedsUpdate,ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ie.prototype._setValue_fromArray,ie.prototype._setValue_fromArray_setNeedsUpdate,ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ad=new yt;class Hf{constructor(t,e,n=0,i=1/0){this.ray=new Hi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ad.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ad),this}intersectObject(t,e=!0,n=[]){return $l(t,this,n,e),n.sort(cd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)$l(t[i],this,n,e);return n.sort(cd),n}}function cd(s,t){return s.distance-t.distance}function $l(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)$l(r[o],t,e,!0)}}const ld=new b,na=new b;class mi{constructor(t=new b,e=new b){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ld.subVectors(t,this.start),na.subVectors(this.end,this.start);const n=na.dot(na);let r=na.dot(ld)/n;return e&&(r=Oe(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class hy extends vu{constructor(t=10,e=10,n=4473924,i=8947848){n=new lt(n),i=new lt(i);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:i;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const u=new _e;u.setAttribute("position",new ge(c,3)),u.setAttribute("color",new ge(l,3));const h=new fr({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function ud(s,t){if(t===Op)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Vl||t===hf){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Vl)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class dy extends vr{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _y(e)}),this.register(function(e){return new xy(e)}),this.register(function(e){return new Ay(e)}),this.register(function(e){return new Ry(e)}),this.register(function(e){return new Cy(e)}),this.register(function(e){return new yy(e)}),this.register(function(e){return new My(e)}),this.register(function(e){return new Sy(e)}),this.register(function(e){return new by(e)}),this.register(function(e){return new gy(e)}),this.register(function(e){return new Ty(e)}),this.register(function(e){return new vy(e)}),this.register(function(e){return new Ey(e)}),this.register(function(e){return new wy(e)}),this.register(function(e){return new py(e)}),this.register(function(e){return new Py(e)}),this.register(function(e){return new Iy(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=eo.extractUrlBase(t);o=eo.resolveURL(l,this.path)}else o=eo.extractUrlBase(t);this.manager.itemStart(t);const a=function(l){i?i(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new zf(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,o,function(u){e(u),r.manager.itemEnd(t)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===Vf){try{o[Vt.KHR_BINARY_GLTF]=new Ly(t)}catch(h){i&&i(h);return}r=JSON.parse(o[Vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Xy(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Vt.KHR_MATERIALS_UNLIT:o[h]=new my;break;case Vt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Dy(r,this.dracoLoader);break;case Vt.KHR_TEXTURE_TRANSFORM:o[h]=new Uy;break;case Vt.KHR_MESH_QUANTIZATION:o[h]=new Ny;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function fy(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const Vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class py{constructor(t){this.parser=t,this.name=Vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let l;const u=new lt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Qe);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new kf(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Tu(u),l.distance=h;break;case"spot":l=new Jv(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),i=Promise.resolve(l),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(e.cache,a,c)})}}class my{constructor(){this.name=Vt.KHR_MATERIALS_UNLIT}getMaterialType(){return Xe}extendParams(t,e,n){const i=[];t.color=new lt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],Qe),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,xe))}return Promise.all(i)}}class gy{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class _y{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new At(a,a)}return Promise.all(r)}}class xy{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class vy{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class yy{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new lt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],Qe)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,xe)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class My{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Sy{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new lt().setRGB(a[0],a[1],a[2],Qe),Promise.all(r)}}class by{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ty{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new lt().setRGB(a[0],a[1],a[2],Qe),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,xe)),Promise.all(r)}}class wy{constructor(t){this.parser=t,this.name=Vt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Ey{constructor(t){this.parser=t,this.name=Vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:Zn}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Ay{constructor(t){this.parser=t,this.name=Vt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class Ry{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Cy{constructor(t){this.parser=t,this.name=Vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(t,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class Py{constructor(t){this.name=Vt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class Iy{constructor(t){this.name=Vt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new yt,m=new b,p=new Fe,v=new b(1,1,1),y=new Df(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const A=c[x];y.instanceColor=new ql(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);de.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Vf="glTF",Nr=12,hd={JSON:1313821514,BIN:5130562};class Ly{constructor(t){this.name=Vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Nr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Vf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Nr,r=new DataView(t,Nr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===hd.JSON){const l=new Uint8Array(t,Nr+o,a);this.content=n.decode(l)}else if(c===hd.BIN){const l=Nr+o;this.body=t.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Dy{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Vt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=Yl[u]||u.toLowerCase();a[h]=o[u]}for(const u in t.attributes){const h=Yl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[t.attributes[u]],f=Js[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(f)},a,l,Qe,d)})})}}class Uy{constructor(){this.name=Vt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class Ny{constructor(){this.name=Vt.KHR_MESH_QUANTIZATION}}class Gf extends go{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-e,h=(n-e)/u,d=h*h,f=d*h,g=t*l,_=g-l,m=-2*f+3*d,p=f-d,v=1-m,y=p-d+h;for(let x=0;x!==a;x++){const A=o[_+x+a],E=o[_+x+c]*u,T=o[g+x+a],C=o[g+x]*u;r[x]=v*A+y*E+m*T+p*C}return r}}const Fy=new Fe;class By extends Gf{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return Fy.fromArray(r).normalize().toArray(r),r}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dd={9728:Je,9729:xn,9984:tf,9985:Ma,9986:$r,9987:di},fd={33071:Li,33648:Pa,10497:nr},Fc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Oy={CUBICSPLINE:void 0,LINEAR:oo,STEP:ro},Bc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function zy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new _i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),s.DefaultMaterial}function Zi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function hi(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function ky(s,t,e){let n=!1,i=!1,r=!1;for(let l=0,u=t.length;l<u;l++){const h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];if(n){const d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Hy(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Vy(s){let t;const e=s.extensions&&s.extensions[Vt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+Oc(e.attributes):t=s.indices+":"+Oc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+Oc(s.targets[n]);return t}function Oc(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function Kl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Wy=new yt;class Xy{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Yv(this.options.manager):this.textureLoader=new ey(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new zf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Zi(r,a,i),hi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,c=o.length;a<c;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[Vt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(eo.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=Fc[i.type],a=Js[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new be(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Fc[i.type],l=Js[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=e.cache.get(v);y||(_=new l(a,p*f,i.count*f/u),y=new Pf(_,f/u),e.cache.add(v,y)),m=new co(y,c,d%f/u,g)}else a===null?_=new l(i.count*c):_=new l(a,d,i.count*c),m=new be(_,c,g);if(i.sparse!==void 0){const p=Fc.SCALAR,v=Js[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new v(o[1],y,i.sparse.count*p),E=new l(o[2],x,i.sparse.count*c);a!==null&&(m=new be(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=A.length;T<C;T++){const S=A[T];if(m.setX(S,E[T*c]),c>=2&&m.setY(S,E[T*c+1]),c>=3&&m.setZ(S,E[T*c+2]),c>=4&&m.setW(S,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=dd[d.magFilter]||xn,u.minFilter=dd[d.minFilter]||di,u.wrapS=fd[d.wrapS]||nr,u.wrapT=fd[d.wrapT]||nr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Je&&u.minFilter!==xn,i.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());const o=i.images[t],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Le(_);m.needsUpdate=!0,d(m)}),e.load(eo.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),hi(h,o),h.userData.mimeType=o.mimeType||Gy(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Vt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[Vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Uf,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new fr,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return _i}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},c=r.extensions||{},l=[];if(c[Vt.KHR_MATERIALS_UNLIT]){const h=i[Vt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,e))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new lt(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Qe),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(a,"map",h.baseColorTexture,xe)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=We);const u=r.alphaMode||Bc.OPAQUE;if(u===Bc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Bc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Xe&&(l.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new At(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Xe&&(l.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Xe){const h=r.emissiveFactor;a.emissive=new lt().setRGB(h[0],h[1],h[2],Qe)}return r.emissiveTexture!==void 0&&o!==Xe&&l.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,xe)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),hi(h,r),e.associations.set(h,{materials:t}),r.extensions&&Zi(i,h,r),h})}createUniqueName(t){const e=ie.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(c){return pd(c,a,e)})}const o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a],u=Vy(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Vt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=pd(new _e,l,e),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?zy(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],m=o[f];let p;const v=l[f];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new wv(_,v):new Dt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=ud(p.geometry,hf):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=ud(p.geometry,Vl));else if(m.mode===Tn.LINES)p=new vu(_,v);else if(m.mode===Tn.LINE_STRIP)p=new mo(_,v);else if(m.mode===Tn.LINE_LOOP)p=new Nv(_,v);else if(m.mode===Tn.POINTS)p=new Nf(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Hy(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),hi(p,r),m.extensions&&Zi(i,p,m),e.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return r.extensions&&Zi(i,h[0],r),h[0];const d=new Pe;r.extensions&&Zi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ke(ds.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new gu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),hi(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new yt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new xu(a,c)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let v=0,y=d.length;v<y;v++){const x=d[v],A=f[v],E=g[v],T=_[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,A,E,T,C);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Gv(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Wy)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){a.push(l)}),this.nodeCache[t]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Lf:l.length>1?u=new Pe:l.length===1?u=l[0]:u=new de,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),hi(u,r),r.extensions&&Zi(n,u,r),r.matrix!==void 0){const h=new yt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new Pe;n.name&&(r.name=i.createUniqueName(n.name)),hi(r,n),n.extensions&&Zi(e,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof kn||d instanceof Le)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,c=[];Ri[r.path]===Ri.weights?t.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ri[r.path]){case Ri.weights:l=ar;break;case Ri.rotation:l=cr;break;case Ri.position:case Ri.scale:l=lr;break;default:switch(n.itemSize){case 1:l=ar;break;case 2:case 3:default:l=lr;break}break}const u=i.interpolation!==void 0?Oy[i.interpolation]:oo,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Ri[r.path],e.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=Kl(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof cr?By:Gf;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function qy(s,t,e){const n=t.attributes,i=new te;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new b(c[0],c[1],c[2]),new b(l[0],l[1],l[2])),a.normalized){const u=Kl(Js[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new b,c=new b;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=e.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=Kl(Js[d.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new qe;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function pd(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Yl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Wt.workingColorSpace!==Qe&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Wt.workingColorSpace}" not supported.`),hi(s,t),qy(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?ky(s,t.targets,e):s})}class jy extends Cf{constructor(){super();const t=new gs;t.deleteAttribute("uv");const e=new _i({side:ze}),n=new _i,i=new Tu(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Dt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Dt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Dt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Dt(t,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Dt(t,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Dt(t,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Dt(t,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new Dt(t,Bs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new Dt(t,Bs(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new Dt(t,Bs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Dt(t,Bs(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Dt(t,Bs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Dt(t,Bs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Bs(s){const t=new Xe;return t.color.setScalar(s),t}const lo=new URLSearchParams(location.search),zc=(s,t)=>lo.has(s)?Number(lo.get(s)):t,md=(s,t)=>lo.has(s)?!["0","false","off"].includes(lo.get(s)):t,ht={debug:md("debug",!1),models:{ravana:`/ravana-mr/models/${lo.get("model")==="full"?"ravana_full.glb":"ravana.glb"}`,bow:"/ravana-mr/models/bow.glb"},ravana:{defaultHeight:zc("height",6),minHeight:1.5,maxHeight:20,heightStep:1,maxPlaceDistance:60,bodyCollision:!0},hitboxes:{namePatterns:[/^Ravana_Head_Hitbox_(\d+)$/i,/Head.*Hitbox/i,/Hitbox/i,/Collider/i],expectedCount:10,sizeMultiplier:1.15,defaultHalfExtent:.09,hitsPerTarget:zc("hits",1),fallback:[{center:[-1.0335,.4437,-.4821],half:[.0918,.1674,.0918]},{center:[-.8408,.4437,-.3738],half:[.0918,.1674,.0918]},{center:[-.6429,.4437,-.3152],half:[.0918,.1674,.0918]},{center:[-.4023,.4437,-.1439],half:[.0918,.1674,.0918]},{center:[-.1901,.4496,.0104],half:[.0712,.1298,.0712]},{center:[.0257,.4356,.0968],half:[.0729,.1534,.1036]},{center:[.1802,.4279,-.0592],half:[.0702,.1216,.0821]},{center:[.4019,.3967,-.2226],half:[.0821,.1216,.0821]},{center:[.5881,.3801,-.3789],half:[.0821,.1216,.0821]},{center:[.8017,.4033,-.5191],half:[.0821,.1216,.0821]}],showMarkers:!0},navel:{modelPosition:[-.015,-.045],radius:.06,score:500},bow:{defaultHand:"left",position:[0,-.02,-.04],rotationDeg:[0,0,0],height:1,flipArrow:!1,grabRadius:.3,stringGrabRadius:.25,maxDraw:.5,minDraw:.08,stringCut:.68,flexBack:.22,flexIn:.06,stringColor:15326400,restDistance:.45,fireCooldown:.25},hands:{bowOffset:[0,0,0],fistCurlClose:1.2,fistCurlOpen:1.4},arrows:{speed:38,minSpeed:10,gravity:1.5,maxActive:14,lifetime:4,stuckLifetime:4,length:.75},scoring:{headDestroyed:100,headHit:25,fireballShot:50,playerHit:-25},attacks:{enabled:md("attacks",!0),cooldown:zc("cooldown",7),firstDelay:5,warningTime:1.4,speed:3.2,radius:.14,playerRadius:.2,maxLateralOffset:.25,minPlayerDistance:1.6,lifetime:14},ui:{panelWidth:.78,distance:1.25}},Wf=0,$y=1,Yy=2,gd=2,kc=1.25,_d=1,no=6*4+4+4,$a=65535,Ky=Math.pow(2,-24),Hc=Symbol("SKIP_GENERATION");function Zy(s){return s.index?s.index.count:s.attributes.position.count}function yr(s){return Zy(s)/3}function Jy(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function Qy(s,t){if(!s.index){const e=s.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Jy(e,n);s.setIndex(new be(i,1));for(let r=0;r<e;r++)i[r]=r}}function Xf(s,t){const e=yr(s),n=t||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,i),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function qf(s,t){if(!s.groups||!s.groups.length)return Xf(s,t);const e=[],n=new Set,i=t||s.drawRange,r=i.start/3,o=(i.start+i.count)/3;for(const c of s.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,u))}const a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){const l=a[c],u=a[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function tM(s,t){const e=yr(s),n=qf(s,t).sort((o,a)=>o.offset-a.offset),i=n[n.length-1];i.count=Math.min(e-i.offset,i.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function Vc(s,t,e,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,d=1/0,f=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=t*6,v=(t+e)*6;p<v;p+=6){const y=s[p+0],x=s[p+1],A=y-x,E=y+x;A<r&&(r=A),E>c&&(c=E),y<h&&(h=y),y>g&&(g=y);const T=s[p+2],C=s[p+3],S=T-C,M=T+C;S<o&&(o=S),M>l&&(l=M),T<d&&(d=T),T>_&&(_=T);const P=s[p+4],L=s[p+5],D=P-L,F=P+L;D<a&&(a=D),F>u&&(u=F),P<f&&(f=P),P>m&&(m=P)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=h,i[1]=d,i[2]=f,i[3]=g,i[4]=_,i[5]=m}function eM(s,t=null,e=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,o=yr(s),a=i.normalized;let c;t===null?(c=new Float32Array(o*6),e=0,n=o):(c=t,e=e||0,n=n||o);const l=i.array,u=i.offset||0;let h=3;i.isInterleavedBufferAttribute&&(h=i.data.stride);const d=["getX","getY","getZ"];for(let f=e;f<e+n;f++){const g=f*3,_=f*6;let m=g+0,p=g+1,v=g+2;r&&(m=r[m],p=r[p],v=r[v]),a||(m=m*h+u,p=p*h+u,v=v*h+u);for(let y=0;y<3;y++){let x,A,E;a?(x=i[d[y]](m),A=i[d[y]](p),E=i[d[y]](v)):(x=l[m+y],A=l[p+y],E=l[v+y]);let T=x;A<T&&(T=A),E<T&&(T=E);let C=x;A>C&&(C=A),E>C&&(C=E);const S=(C-T)/2,M=y*2;c[_+M+0]=T+S,c[_+M+1]=S+(Math.abs(T)+S)*Ky}}return c}function Me(s,t,e){return e.min.x=t[s],e.min.y=t[s+1],e.min.z=t[s+2],e.max.x=t[s+3],e.max.y=t[s+4],e.max.z=t[s+5],e}function xd(s){let t=-1,e=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>e&&(e=i,t=n)}return t}function vd(s,t){t.set(s)}function yd(s,t,e){let n,i;for(let r=0;r<3;r++){const o=r+3;n=s[r],i=t[r],e[r]=n<i?n:i,n=s[o],i=t[o],e[o]=n>i?n:i}}function ia(s,t,e){for(let n=0;n<3;n++){const i=t[s+2*n],r=t[s+2*n+1],o=i-r,a=i+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Fr(s){const t=s[3]-s[0],e=s[4]-s[1],n=s[5]-s[2];return 2*(t*e+e*n+n*t)}const li=32,nM=(s,t)=>s.candidate-t.candidate,Ci=new Array(li).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),sa=new Float32Array(6);function iM(s,t,e,n,i,r){let o=-1,a=0;if(r===Wf)o=xd(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===$y)o=xd(s),o!==-1&&(a=sM(e,n,i,o));else if(r===Yy){const c=Fr(s);let l=kc*i;const u=n*6,h=(n+i)*6;for(let d=0;d<3;d++){const f=t[d],m=(t[d+3]-f)/li;if(i<li/4){const p=[...Ci];p.length=i;let v=0;for(let x=u;x<h;x+=6,v++){const A=p[v];A.candidate=e[x+2*d],A.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:C}=A;for(let S=0;S<3;S++)C[S]=1/0,C[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;ia(x,e,E)}p.sort(nM);let y=i;for(let x=0;x<y;x++){const A=p[x];for(;x+1<y&&p[x+1].candidate===A.candidate;)p.splice(x+1,1),y--}for(let x=u;x<h;x+=6){const A=e[x+2*d];for(let E=0;E<y;E++){const T=p[E];A>=T.candidate?ia(x,e,T.rightCacheBounds):(ia(x,e,T.leftCacheBounds),T.count++)}}for(let x=0;x<y;x++){const A=p[x],E=A.count,T=i-A.count,C=A.leftCacheBounds,S=A.rightCacheBounds;let M=0;E!==0&&(M=Fr(C)/c);let P=0;T!==0&&(P=Fr(S)/c);const L=_d+kc*(M*E+P*T);L<l&&(o=d,l=L,a=A.candidate)}}else{for(let y=0;y<li;y++){const x=Ci[y];x.count=0,x.candidate=f+m+y*m;const A=x.bounds;for(let E=0;E<3;E++)A[E]=1/0,A[E+3]=-1/0}for(let y=u;y<h;y+=6){let E=~~((e[y+2*d]-f)/m);E>=li&&(E=li-1);const T=Ci[E];T.count++,ia(y,e,T.bounds)}const p=Ci[li-1];vd(p.bounds,p.rightCacheBounds);for(let y=li-2;y>=0;y--){const x=Ci[y],A=Ci[y+1];yd(x.bounds,A.rightCacheBounds,x.rightCacheBounds)}let v=0;for(let y=0;y<li-1;y++){const x=Ci[y],A=x.count,E=x.bounds,C=Ci[y+1].rightCacheBounds;A!==0&&(v===0?vd(E,sa):yd(E,sa,sa)),v+=A;let S=0,M=0;v!==0&&(S=Fr(sa)/c);const P=i-v;P!==0&&(M=Fr(C)/c);const L=_d+kc*(S*v+M*P);L<l&&(o=d,l=L,a=x.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function sM(s,t,e,n){let i=0;for(let r=t,o=t+e;r<o;r++)i+=s[r*6+n*2];return i/e}class Gc{constructor(){this.boundingData=new Float32Array(6)}}function rM(s,t,e,n,i,r){let o=n,a=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let h=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=h}for(let u=0;u<6;u++){let h=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=h}o++,a--}else return o}}function oM(s,t,e,n,i,r){let o=n,a=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=s[o];s[o]=s[a],s[a]=u;for(let h=0;h<6;h++){let d=e[o*6+h];e[o*6+h]=e[a*6+h],e[a*6+h]=d}o++,a--}else return o}}function cn(s,t){return t[s+15]===65535}function yn(s,t){return t[s+6]}function En(s,t){return t[s+14]}function An(s){return s+8}function Rn(s,t){return t[s+6]}function jf(s,t){return t[s+7]}let $f,Zr,Ra,Yf;const aM=Math.pow(2,32);function Zl(s){return"count"in s?1:1+Zl(s.left)+Zl(s.right)}function cM(s,t,e){return $f=new Float32Array(e),Zr=new Uint32Array(e),Ra=new Uint16Array(e),Yf=new Uint8Array(e),Jl(s,t)}function Jl(s,t){const e=s/4,n=s/2,i="count"in t,r=t.boundingData;for(let o=0;o<6;o++)$f[e+o]=r[o];if(i)if(t.buffer){const o=t.buffer;Yf.set(new Uint8Array(o),s);for(let a=s,c=s+o.byteLength;a<c;a+=no){const l=a/2;cn(l,Ra)||(Zr[a/4+6]+=e)}return s+o.byteLength}else{const o=t.offset,a=t.count;return Zr[e+6]=o,Ra[n+14]=a,Ra[n+15]=$a,s+no}else{const o=t.left,a=t.right,c=t.splitAxis;let l;if(l=Jl(s+no,o),l/4>aM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Zr[e+6]=l/4,l=Jl(l,a),Zr[e+7]=c,l}}function lM(s,t){const e=(s.index?s.index.count:s.attributes.position.count)/3,n=e>2**16,i=n?4:2,r=t?new SharedArrayBuffer(e*i):new ArrayBuffer(e*i),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function uM(s,t,e,n,i){const{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=i,h=s._indirectBuffer,d=s.geometry,f=d.index?d.index.array:null,g=u?oM:rM,_=yr(d),m=new Float32Array(6);let p=!1;const v=new Gc;return Vc(t,e,n,v.boundingData,m),x(v,e,n,m),v;function y(A){l&&l(A/_)}function x(A,E,T,C=null,S=0){if(!p&&S>=r&&(p=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),T<=a||S>=r)return y(E+T),A.offset=E,A.count=T,A;const M=iM(A.boundingData,C,t,E,T,c);if(M.axis===-1)return y(E+T),A.offset=E,A.count=T,A;const P=g(h,f,t,E,T,M);if(P===E||P===E+T)y(E+T),A.offset=E,A.count=T;else{A.splitAxis=M.axis;const L=new Gc,D=E,F=P-E;A.left=L,Vc(t,D,F,L.boundingData,m),x(L,D,F,m,S+1);const V=new Gc,k=P,Y=T-F;A.right=V,Vc(t,k,Y,V.boundingData,m),x(V,k,Y,m,S+1)}return A}}function hM(s,t){const e=s.geometry;t.indirect&&(s._indirectBuffer=lM(e,t.useSharedArrayBuffer),tM(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||Qy(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=eM(e),r=t.indirect?Xf(e,t.range):qf(e,t.range);s._roots=r.map(o=>{const a=uM(s,i,o.offset,o.count,t),c=Zl(a),l=new n(no*c);return cM(0,a,l),l})}class xi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){const c=t[r][e];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(t,e){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){const a=e[r],c=t.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(t){return this.min>t.max||t.min>this.max}}xi.prototype.setFromBox=function(){const s=new b;return function(e,n){const i=n.min,r=n.max;let o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);const h=e.dot(s);o=Math.min(h,o),a=Math.max(h,a)}this.min=o,this.max=a}}();const dM=function(){const s=new b,t=new b,e=new b;return function(i,r,o){const a=i.start,c=s,l=r.start,u=t;e.subVectors(a,l),s.subVectors(i.end,i.start),t.subVectors(r.end,r.start);const h=e.dot(u),d=u.dot(c),f=u.dot(u),g=e.dot(c),m=c.dot(c)*f-d*d;let p,v;m!==0?p=(h*d-g*f)/m:p=0,v=(h+p*d)/f,o.x=p,o.y=v}}(),Au=function(){const s=new At,t=new b,e=new b;return function(i,r,o,a){dM(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let h;l<0?h=r.start:h=r.end;const d=t,f=e;if(i.closestPointToPoint(h,!0,t),r.closestPointToPoint(u,!0,e),d.distanceToSquared(h)<=f.distanceToSquared(u)){o.copy(d),a.copy(h);return}else{o.copy(u),a.copy(f);return}}}}(),fM=function(){const s=new b,t=new b,e=new wn,n=new mi;return function(r,o){const{radius:a,center:c}=r,{a:l,b:u,c:h}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;const _=o.getPlane(e);if(Math.abs(_.distanceToPoint(c))<=a){const p=_.projectPoint(c,t);if(o.containsPoint(p))return!0}return!1}}(),pM=1e-15;function Wc(s){return Math.abs(s)<pM}class Vn extends Ie{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new b),this.satBounds=new Array(4).fill().map(()=>new xi),this.points=[this.a,this.b,this.c],this.sphere=new qe,this.plane=new wn,this.needsUpdate=!0}intersectsSphere(t){return fM(t,this)}update(){const t=this.a,e=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);const l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,i);const h=r[2],d=o[2];h.subVectors(e,n),d.setFromPoints(h,i);const f=r[3],g=o[3];f.subVectors(n,t),g.setFromPoints(f,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}Vn.prototype.closestPointToSegment=function(){const s=new b,t=new b,e=new mi;return function(i,r=null,o=null){const{start:a,end:c}=i,l=this.points;let u,h=1/0;for(let d=0;d<3;d++){const f=(d+1)%3;e.start.copy(l[d]),e.end.copy(l[f]),Au(e,i,s,t),u=s.distanceToSquared(t),u<h&&(h=u,r&&r.copy(s),o&&o.copy(t))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<h&&(h=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(h)}}();Vn.prototype.intersectsTriangle=function(){const s=new Vn,t=new Array(3),e=new Array(3),n=new xi,i=new xi,r=new b,o=new b,a=new b,c=new b,l=new b,u=new mi,h=new mi,d=new mi,f=new b;function g(_,m,p){const v=_.points;let y=0,x=-1;for(let A=0;A<3;A++){const{start:E,end:T}=u;E.copy(v[A]),T.copy(v[(A+1)%3]),u.delta(o);const C=Wc(m.distanceToPoint(E));if(Wc(m.normal.dot(o))&&C){p.copy(u),y=2;break}const S=m.intersectLine(u,f);if(!S&&C&&f.copy(E),(S||C)&&!Wc(f.distanceTo(T))){if(y<=1)(y===1?p.start:p.end).copy(f),C&&(x=y);else if(y>=2){(x===1?p.start:p.end).copy(f),y=2;break}if(y++,y===2&&x===-1)break}}return y}return function(m,p=null,v=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);const y=this.plane,x=m.plane;if(Math.abs(y.normal.dot(x.normal))>1-1e-10){const A=this.satBounds,E=this.satAxes;e[0]=m.a,e[1]=m.b,e[2]=m.c;for(let S=0;S<4;S++){const M=A[S],P=E[S];if(n.setFromPoints(P,e),M.isSeparated(n))return!1}const T=m.satBounds,C=m.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=T[S],P=C[S];if(n.setFromPoints(P,t),M.isSeparated(n))return!1}for(let S=0;S<4;S++){const M=E[S];for(let P=0;P<4;P++){const L=C[P];if(r.crossVectors(M,L),n.setFromPoints(r,t),i.setFromPoints(r,e),n.isSeparated(i))return!1}}return p&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const A=g(this,x,h);if(A===1&&m.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(A!==2)return!1;const E=g(m,y,d);if(E===1&&this.containsPoint(d.end))return p&&(p.start.copy(d.end),p.end.copy(d.end)),!0;if(E!==2)return!1;if(h.delta(a),d.delta(c),a.dot(c)<0){let D=d.start;d.start=d.end,d.end=D}const T=h.start.dot(a),C=h.end.dot(a),S=d.start.dot(a),M=d.end.dot(a),P=C<S,L=T<M;return T!==M&&S!==C&&P===L?!1:(p&&(l.subVectors(h.start,d.start),l.dot(a)>0?p.start.copy(h.start):p.start.copy(d.start),l.subVectors(h.end,d.end),l.dot(a)<0?p.end.copy(h.end):p.end.copy(d.end)),!0)}}}();Vn.prototype.distanceToPoint=function(){const s=new b;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();Vn.prototype.distanceToTriangle=function(){const s=new b,t=new b,e=["a","b","c"],n=new mi,i=new mi;return function(o,a=null,c=null){const l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let d;const f=e[h],g=o[f];this.closestPointToPoint(g,s),d=g.distanceToSquared(s),d<u&&(u=d,a&&a.copy(s),c&&c.copy(g));const _=this[f];o.closestPointToPoint(_,s),d=_.distanceToSquared(s),d<u&&(u=d,a&&a.copy(_),c&&c.copy(s))}for(let h=0;h<3;h++){const d=e[h],f=e[(h+1)%3];n.set(this[d],this[f]);for(let g=0;g<3;g++){const _=e[g],m=e[(g+1)%3];i.set(o[_],o[m]),Au(n,i,s,t);const p=s.distanceToSquared(t);p<u&&(u=p,a&&a.copy(s),c&&c.copy(t))}}return Math.sqrt(u)}}();class en{constructor(t,e,n){this.isOrientedBox=!0,this.min=new b,this.max=new b,this.matrix=new yt,this.invMatrix=new yt,this.points=new Array(8).fill().map(()=>new b),this.satAxes=new Array(3).fill().map(()=>new b),this.satBounds=new Array(3).fill().map(()=>new xi),this.alignedSatBounds=new Array(3).fill().map(()=>new xi),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}en.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*l|2*u|4*h,f=i[d];f.x=l?n.x:e.x,f.y=u?n.y:e.y,f.z=h?n.z:e.z,f.applyMatrix4(t)}const r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){const u=o[l],h=r[l],d=1<<l,f=i[d];u.subVectors(a,f),h.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();en.prototype.intersectsBox=function(){const s=new xi;return function(e){this.needsUpdate&&this.update();const n=e.min,i=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=o[c],u=r[c];if(s.setFromBox(l,e),u.isSeparated(s))return!1}return!0}}();en.prototype.intersectsTriangle=function(){const s=new Vn,t=new Array(3),e=new xi,n=new xi,i=new b;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);const a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let d=0;d<3;d++){const f=a[d],g=c[d];if(e.setFromPoints(g,t),f.isSeparated(e))return!1}const l=o.satBounds,u=o.satAxes,h=this.points;for(let d=0;d<3;d++){const f=l[d],g=u[d];if(e.setFromPoints(g,h),f.isSeparated(e))return!1}for(let d=0;d<3;d++){const f=c[d];for(let g=0;g<4;g++){const _=u[g];if(i.crossVectors(f,_),e.setFromPoints(i,t),n.setFromPoints(i,h),e.isSeparated(n))return!1}}return!0}}();en.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();en.prototype.distanceToPoint=function(){const s=new b;return function(e){return this.closestPointToPoint(e,s),e.distanceTo(s)}}();en.prototype.distanceToBox=function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new mi),e=new Array(12).fill().map(()=>new mi),n=new b,i=new b;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=a*a,h=o.min,d=o.max,f=this.points;let g=1/0;for(let m=0;m<8;m++){const p=f[m];i.copy(p).clamp(h,d);const v=p.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(i),v<u))return Math.sqrt(v)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const y=(m+1)%3,x=(m+2)%3,A=p<<y|v<<x,E=1<<m|p<<y|v<<x,T=f[A],C=f[E];t[_].set(T,C);const M=s[m],P=s[y],L=s[x],D=e[_],F=D.start,V=D.end;F[M]=h[M],F[P]=p?h[P]:d[P],F[L]=v?h[L]:d[P],V[M]=d[M],V[P]=p?h[P]:d[P],V[L]=v?h[L]:d[P],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){i.x=m?d.x:h.x,i.y=p?d.y:h.y,i.z=v?d.z:h.z,this.closestPointToPoint(i,n);const y=i.distanceToSquared(n);if(y<g&&(g=y,c&&c.copy(n),l&&l.copy(i),y<u))return Math.sqrt(y)}for(let m=0;m<12;m++){const p=t[m];for(let v=0;v<12;v++){const y=e[v];Au(p,y,n,i);const x=n.distanceToSquared(i);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(i),x<u))return Math.sqrt(x)}}return Math.sqrt(g)}}();class Ru{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class mM extends Ru{constructor(){super(()=>new Vn)}}const Cn=new mM;class gM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const fe=new gM;let Ui,$s;const Os=[],ra=new Ru(()=>new te);function _M(s,t,e,n,i,r){Ui=ra.getPrimitive(),$s=ra.getPrimitive(),Os.push(Ui,$s),fe.setBuffer(s._roots[t]);const o=Ql(0,s.geometry,e,n,i,r);fe.clearBuffer(),ra.releasePrimitive(Ui),ra.releasePrimitive($s),Os.pop(),Os.pop();const a=Os.length;return a>0&&($s=Os[a-1],Ui=Os[a-2]),o}function Ql(s,t,e,n,i=null,r=0,o=0){const{float32Array:a,uint16Array:c,uint32Array:l}=fe;let u=s*2;if(cn(u,c)){const g=yn(s,l),_=En(u,c);return Me(s,a,Ui),n(g,_,!1,o,r+s,Ui)}else{let L=function(F){const{uint16Array:V,uint32Array:k}=fe;let Y=F*2;for(;!cn(Y,V);)F=An(F),Y=F*2;return yn(F,k)},D=function(F){const{uint16Array:V,uint32Array:k}=fe;let Y=F*2;for(;!cn(Y,V);)F=Rn(F,k),Y=F*2;return yn(F,k)+En(Y,V)};var d=L,f=D;const g=An(s),_=Rn(s,l);let m=g,p=_,v,y,x,A;if(i&&(x=Ui,A=$s,Me(m,a,x),Me(p,a,A),v=i(x),y=i(A),y<v)){m=_,p=g;const F=v;v=y,y=F,x=A}x||(x=Ui,Me(m,a,x));const E=cn(m*2,c),T=e(x,E,v,o+1,r+m);let C;if(T===gd){const F=L(m),k=D(m)-F;C=n(F,k,!0,o+1,r+m,x)}else C=T&&Ql(m,t,e,n,i,r,o+1);if(C)return!0;A=$s,Me(p,a,A);const S=cn(p*2,c),M=e(A,S,y,o+1,r+p);let P;if(M===gd){const F=L(p),k=D(p)-F;P=n(F,k,!0,o+1,r+p,A)}else P=M&&Ql(p,t,e,n,i,r,o+1);return!!P}}const Br=new b,Xc=new b;function xM(s,t,e={},n=0,i=1/0){const r=n*n,o=i*i;let a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(Br.copy(t).clamp(u.min,u.max),Br.distanceToSquared(t)),intersectsBounds:(u,h,d)=>d<a&&d<o,intersectsTriangle:(u,h)=>{u.closestPointToPoint(t,Br);const d=t.distanceToSquared(Br);return d<a&&(Xc.copy(Br),a=d,c=h),d<r}}),a===1/0)return null;const l=Math.sqrt(a);return e.point?e.point.copy(Xc):e.point=Xc.clone(),e.distance=l,e.faceIndex=c,e}const vM=parseInt(za)>=169,Ji=new b,Qi=new b,ts=new b,oa=new At,aa=new At,ca=new At,Md=new b,Sd=new b,bd=new b,Or=new b;function yM(s,t,e,n,i,r,o,a){let c;if(r===ze?c=s.intersectTriangle(n,e,t,!0,i):c=s.intersectTriangle(t,e,n,r!==We,i),c===null)return null;const l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function MM(s,t,e,n,i,r,o,a,c,l,u){Ji.fromBufferAttribute(t,r),Qi.fromBufferAttribute(t,o),ts.fromBufferAttribute(t,a);const h=yM(s,Ji,Qi,ts,Or,c,l,u);if(h){const d=new b;Ie.getBarycoord(Or,Ji,Qi,ts,d),n&&(oa.fromBufferAttribute(n,r),aa.fromBufferAttribute(n,o),ca.fromBufferAttribute(n,a),h.uv=Ie.getInterpolation(Or,Ji,Qi,ts,oa,aa,ca,new At)),i&&(oa.fromBufferAttribute(i,r),aa.fromBufferAttribute(i,o),ca.fromBufferAttribute(i,a),h.uv1=Ie.getInterpolation(Or,Ji,Qi,ts,oa,aa,ca,new At)),e&&(Md.fromBufferAttribute(e,r),Sd.fromBufferAttribute(e,o),bd.fromBufferAttribute(e,a),h.normal=Ie.getInterpolation(Or,Ji,Qi,ts,Md,Sd,bd,new b),h.normal.dot(s.direction)>0&&h.normal.multiplyScalar(-1));const f={a:r,b:o,c:a,normal:new b,materialIndex:0};Ie.getNormal(Ji,Qi,ts,f.normal),h.face=f,h.faceIndex=r,vM&&(h.barycoord=d)}return h}function Ya(s,t,e,n,i,r,o){const a=n*3;let c=a+0,l=a+1,u=a+2;const h=s.index;s.index&&(c=h.getX(c),l=h.getX(l),u=h.getX(u));const{position:d,normal:f,uv:g,uv1:_}=s.attributes,m=MM(e,d,f,g,_,c,l,u,t,r,o);return m?(m.faceIndex=n,i&&i.push(m),m):null}function Ae(s,t,e,n){const i=s.a,r=s.b,o=s.c;let a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function SM(s,t,e,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++)Ya(c,t,e,u,r,o,a)}function bM(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,d=n+i;h<d;h++){let f;f=Ya(a,t,e,h,null,r,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function TM(s,t,e,n,i,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let d;if(d=u,Ae(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,r))return!0}return!1}function wM(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(d,f,g=!1){const _=d*2;if(a[_+15]===$a){const p=o[d+6],v=a[_+14];let y=1/0,x=1/0,A=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=3*p,M=3*(p+v);S<M;S++){let P=n[S];const L=i.getX(P),D=i.getY(P),F=i.getZ(P);L<y&&(y=L),L>E&&(E=L),D<x&&(x=D),D>T&&(T=D),F<A&&(A=F),F>C&&(C=F)}return c[d+0]!==y||c[d+1]!==x||c[d+2]!==A||c[d+3]!==E||c[d+4]!==T||c[d+5]!==C?(c[d+0]=y,c[d+1]=x,c[d+2]=A,c[d+3]=E,c[d+4]=T,c[d+5]=C,!0):!1}else{const p=d+8,v=o[d+6],y=p+f,x=v+f;let A=g,E=!1,T=!1;t?A||(E=t.has(y),T=t.has(x),A=!E&&!T):(E=!0,T=!0);const C=A||E,S=A||T;let M=!1;C&&(M=h(p,f,A));let P=!1;S&&(P=h(v,f,A));const L=M||P;if(L)for(let D=0;D<3;D++){const F=p+D,V=v+D,k=c[F],Y=c[F+3],X=c[V],rt=c[V+3];c[d+D]=k<X?k:X,c[d+D+3]=Y>rt?Y:rt}return L}}}function ki(s,t,e,n,i){let r,o,a,c,l,u;const h=1/e.direction.x,d=1/e.direction.y,f=1/e.direction.z,g=e.origin.x,_=e.origin.y,m=e.origin.z;let p=t[s],v=t[s+3],y=t[s+1],x=t[s+3+1],A=t[s+2],E=t[s+3+2];return h>=0?(r=(p-g)*h,o=(v-g)*h):(r=(v-g)*h,o=(p-g)*h),d>=0?(a=(y-_)*d,c=(x-_)*d):(a=(x-_)*d,c=(y-_)*d),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),f>=0?(l=(A-m)*f,u=(E-m)*f):(l=(E-m)*f,u=(A-m)*f),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function EM(s,t,e,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;for(let u=n,h=n+i;u<h;u++){let d=l?l[u]:u;Ya(c,t,e,d,r,o,a)}}function AM(s,t,e,n,i,r,o){const{geometry:a,_indirectBuffer:c}=s;let l=1/0,u=null;for(let h=n,d=n+i;h<d;h++){let f;f=Ya(a,t,e,c?c[h]:h,null,r,o),f&&f.distance<l&&(u=f,l=f.distance)}return u}function RM(s,t,e,n,i,r,o){const{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=s,h=t+s;u<h;u++){let d;if(d=e.resolveTriangleIndex(u),Ae(o,d*3,c,l),o.needsUpdate=!0,n(o,d,i,r))return!0}return!1}function CM(s,t,e,n,i,r,o){fe.setBuffer(s._roots[t]),tu(0,s,e,n,i,r,o),fe.clearBuffer()}function tu(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=fe,u=s*2;if(cn(u,c)){const d=yn(s,l),f=En(u,c);SM(t,e,n,d,f,i,r,o)}else{const d=An(s);ki(d,a,n,r,o)&&tu(d,t,e,n,i,r,o);const f=Rn(s,l);ki(f,a,n,r,o)&&tu(f,t,e,n,i,r,o)}}const PM=["x","y","z"];function IM(s,t,e,n,i,r){fe.setBuffer(s._roots[t]);const o=eu(0,s,e,n,i,r);return fe.clearBuffer(),o}function eu(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=fe;let l=s*2;if(cn(l,a)){const h=yn(s,c),d=En(l,a);return bM(t,e,n,h,d,i,r)}else{const h=jf(s,c),d=PM[h],g=n.direction[d]>=0;let _,m;g?(_=An(s),m=Rn(s,c)):(_=Rn(s,c),m=An(s));const v=ki(_,o,n,i,r)?eu(_,t,e,n,i,r):null;if(v){const A=v.point[d];if(g?A<=o[m+h]:A>=o[m+h+3])return v}const x=ki(m,o,n,i,r)?eu(m,t,e,n,i,r):null;return v&&x?v.distance<=x.distance?v:x:v||x||null}}const la=new te,zs=new Vn,ks=new Vn,zr=new yt,Td=new en,ua=new en;function LM(s,t,e,n){fe.setBuffer(s._roots[t]);const i=nu(0,s,e,n);return fe.clearBuffer(),i}function nu(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=fe;let c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),Td.set(e.boundingBox.min,e.boundingBox.max,n),i=Td),cn(c,o)){const u=t.geometry,h=u.index,d=u.attributes.position,f=e.index,g=e.attributes.position,_=yn(s,a),m=En(c,o);if(zr.copy(n).invert(),e.boundsTree)return Me(s,r,ua),ua.matrix.copy(zr),ua.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>ua.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=_*3,x=(m+_)*3;y<x;y+=3)if(Ae(ks,y,h,d),ks.needsUpdate=!0,v.intersectsTriangle(ks))return!0;return!1}});for(let p=_*3,v=(m+_)*3;p<v;p+=3){Ae(zs,p,h,d),zs.a.applyMatrix4(zr),zs.b.applyMatrix4(zr),zs.c.applyMatrix4(zr),zs.needsUpdate=!0;for(let y=0,x=f.count;y<x;y+=3)if(Ae(ks,y,f,g),ks.needsUpdate=!0,zs.intersectsTriangle(ks))return!0}}else{const u=s+8,h=a[s+6];return Me(u,r,la),!!(i.intersectsBox(la)&&nu(u,t,e,n,i)||(Me(h,r,la),i.intersectsBox(la)&&nu(h,t,e,n,i)))}}const ha=new yt,qc=new en,kr=new en,DM=new b,UM=new b,NM=new b,FM=new b;function BM(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),qc.set(t.boundingBox.min,t.boundingBox.max,e),qc.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,d=Cn.getPrimitive(),f=Cn.getPrimitive();let g=DM,_=UM,m=null,p=null;i&&(m=NM,p=FM);let v=1/0,y=null,x=null;return ha.copy(e).invert(),kr.matrix.copy(ha),s.shapecast({boundsTraverseOrder:A=>qc.distanceToBox(A),intersectsBounds:(A,E,T)=>T<v&&T<o?(E&&(kr.min.copy(A.min),kr.max.copy(A.max),kr.needsUpdate=!0),!0):!1,intersectsRange:(A,E)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:C=>kr.distanceToBox(C),intersectsBounds:(C,S,M)=>M<v&&M<o,intersectsRange:(C,S)=>{for(let M=C,P=C+S;M<P;M++){Ae(f,3*M,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let L=A,D=A+E;L<D;L++){Ae(d,3*L,l,c),d.needsUpdate=!0;const F=d.distanceToTriangle(f,g,m);if(F<v&&(_.copy(g),p&&p.copy(m),v=F,y=L,x=M),F<r)return!0}}}});{const T=yr(t);for(let C=0,S=T;C<S;C++){Ae(f,3*C,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=A,P=A+E;M<P;M++){Ae(d,3*M,l,c),d.needsUpdate=!0;const L=d.distanceToTriangle(f,g,m);if(L<v&&(_.copy(g),p&&p.copy(m),v=L,y=M,x=C),L<r)return!0}}}}}),Cn.releasePrimitive(d),Cn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(ha),_.applyMatrix4(ha),i.distance=_.sub(i.point).length(),i.faceIndex=x),n)}function OM(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=s.geometry,n=e.index?e.index.array:null,i=e.attributes.position;let r,o,a,c,l=0;const u=s._roots;for(let d=0,f=u.length;d<f;d++)r=u[d],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(d,f,g=!1){const _=d*2;if(a[_+15]===$a){const p=o[d+6],v=a[_+14];let y=1/0,x=1/0,A=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=p,M=p+v;S<M;S++){const P=3*s.resolveTriangleIndex(S);for(let L=0;L<3;L++){let D=P+L;D=n?n[D]:D;const F=i.getX(D),V=i.getY(D),k=i.getZ(D);F<y&&(y=F),F>E&&(E=F),V<x&&(x=V),V>T&&(T=V),k<A&&(A=k),k>C&&(C=k)}}return c[d+0]!==y||c[d+1]!==x||c[d+2]!==A||c[d+3]!==E||c[d+4]!==T||c[d+5]!==C?(c[d+0]=y,c[d+1]=x,c[d+2]=A,c[d+3]=E,c[d+4]=T,c[d+5]=C,!0):!1}else{const p=d+8,v=o[d+6],y=p+f,x=v+f;let A=g,E=!1,T=!1;t?A||(E=t.has(y),T=t.has(x),A=!E&&!T):(E=!0,T=!0);const C=A||E,S=A||T;let M=!1;C&&(M=h(p,f,A));let P=!1;S&&(P=h(v,f,A));const L=M||P;if(L)for(let D=0;D<3;D++){const F=p+D,V=v+D,k=c[F],Y=c[F+3],X=c[V],rt=c[V+3];c[d+D]=k<X?k:X,c[d+D+3]=Y>rt?Y:rt}return L}}}function zM(s,t,e,n,i,r,o){fe.setBuffer(s._roots[t]),iu(0,s,e,n,i,r,o),fe.clearBuffer()}function iu(s,t,e,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=fe,u=s*2;if(cn(u,c)){const d=yn(s,l),f=En(u,c);EM(t,e,n,d,f,i,r,o)}else{const d=An(s);ki(d,a,n,r,o)&&iu(d,t,e,n,i,r,o);const f=Rn(s,l);ki(f,a,n,r,o)&&iu(f,t,e,n,i,r,o)}}const kM=["x","y","z"];function HM(s,t,e,n,i,r){fe.setBuffer(s._roots[t]);const o=su(0,s,e,n,i,r);return fe.clearBuffer(),o}function su(s,t,e,n,i,r){const{float32Array:o,uint16Array:a,uint32Array:c}=fe;let l=s*2;if(cn(l,a)){const h=yn(s,c),d=En(l,a);return AM(t,e,n,h,d,i,r)}else{const h=jf(s,c),d=kM[h],g=n.direction[d]>=0;let _,m;g?(_=An(s),m=Rn(s,c)):(_=Rn(s,c),m=An(s));const v=ki(_,o,n,i,r)?su(_,t,e,n,i,r):null;if(v){const A=v.point[d];if(g?A<=o[m+h]:A>=o[m+h+3])return v}const x=ki(m,o,n,i,r)?su(m,t,e,n,i,r):null;return v&&x?v.distance<=x.distance?v:x:v||x||null}}const da=new te,Hs=new Vn,Vs=new Vn,Hr=new yt,wd=new en,fa=new en;function VM(s,t,e,n){fe.setBuffer(s._roots[t]);const i=ru(0,s,e,n);return fe.clearBuffer(),i}function ru(s,t,e,n,i=null){const{float32Array:r,uint16Array:o,uint32Array:a}=fe;let c=s*2;if(i===null&&(e.boundingBox||e.computeBoundingBox(),wd.set(e.boundingBox.min,e.boundingBox.max,n),i=wd),cn(c,o)){const u=t.geometry,h=u.index,d=u.attributes.position,f=e.index,g=e.attributes.position,_=yn(s,a),m=En(c,o);if(Hr.copy(n).invert(),e.boundsTree)return Me(s,r,fa),fa.matrix.copy(Hr),fa.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:v=>fa.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let y=_,x=m+_;y<x;y++)if(Ae(Vs,3*t.resolveTriangleIndex(y),h,d),Vs.needsUpdate=!0,v.intersectsTriangle(Vs))return!0;return!1}});for(let p=_,v=m+_;p<v;p++){const y=t.resolveTriangleIndex(p);Ae(Hs,3*y,h,d),Hs.a.applyMatrix4(Hr),Hs.b.applyMatrix4(Hr),Hs.c.applyMatrix4(Hr),Hs.needsUpdate=!0;for(let x=0,A=f.count;x<A;x+=3)if(Ae(Vs,x,f,g),Vs.needsUpdate=!0,Hs.intersectsTriangle(Vs))return!0}}else{const u=s+8,h=a[s+6];return Me(u,r,da),!!(i.intersectsBox(da)&&ru(u,t,e,n,i)||(Me(h,r,da),i.intersectsBox(da)&&ru(h,t,e,n,i)))}}const pa=new yt,jc=new en,Vr=new en,GM=new b,WM=new b,XM=new b,qM=new b;function jM(s,t,e,n={},i={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),jc.set(t.boundingBox.min,t.boundingBox.max,e),jc.needsUpdate=!0;const a=s.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,h=t.index,d=Cn.getPrimitive(),f=Cn.getPrimitive();let g=GM,_=WM,m=null,p=null;i&&(m=XM,p=qM);let v=1/0,y=null,x=null;return pa.copy(e).invert(),Vr.matrix.copy(pa),s.shapecast({boundsTraverseOrder:A=>jc.distanceToBox(A),intersectsBounds:(A,E,T)=>T<v&&T<o?(E&&(Vr.min.copy(A.min),Vr.max.copy(A.max),Vr.needsUpdate=!0),!0):!1,intersectsRange:(A,E)=>{if(t.boundsTree){const T=t.boundsTree;return T.shapecast({boundsTraverseOrder:C=>Vr.distanceToBox(C),intersectsBounds:(C,S,M)=>M<v&&M<o,intersectsRange:(C,S)=>{for(let M=C,P=C+S;M<P;M++){const L=T.resolveTriangleIndex(M);Ae(f,3*L,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let D=A,F=A+E;D<F;D++){const V=s.resolveTriangleIndex(D);Ae(d,3*V,l,c),d.needsUpdate=!0;const k=d.distanceToTriangle(f,g,m);if(k<v&&(_.copy(g),p&&p.copy(m),v=k,y=D,x=M),k<r)return!0}}}})}else{const T=yr(t);for(let C=0,S=T;C<S;C++){Ae(f,3*C,h,u),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let M=A,P=A+E;M<P;M++){const L=s.resolveTriangleIndex(M);Ae(d,3*L,l,c),d.needsUpdate=!0;const D=d.distanceToTriangle(f,g,m);if(D<v&&(_.copy(g),p&&p.copy(m),v=D,y=M,x=C),D<r)return!0}}}}}),Cn.releasePrimitive(d),Cn.releasePrimitive(f),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=y,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(pa),_.applyMatrix4(pa),i.distance=_.sub(i.point).length(),i.faceIndex=x),n)}function $M(){return typeof SharedArrayBuffer<"u"}const io=new fe.constructor,Ua=new fe.constructor,Pi=new Ru(()=>new te),Gs=new te,Ws=new te,$c=new te,Yc=new te;let Kc=!1;function YM(s,t,e,n){if(Kc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Kc=!0;const i=s._roots,r=t._roots;let o,a=0,c=0;const l=new yt().copy(e).invert();for(let u=0,h=i.length;u<h;u++){io.setBuffer(i[u]),c=0;const d=Pi.getPrimitive();Me(0,io.float32Array,d),d.applyMatrix4(l);for(let f=0,g=r.length;f<g&&(Ua.setBuffer(r[f]),o=Fn(0,0,e,l,n,a,c,0,0,d),Ua.clearBuffer(),c+=r[f].length,!o);f++);if(Pi.releasePrimitive(d),io.clearBuffer(),a+=i[u].length,o)break}return Kc=!1,o}function Fn(s,t,e,n,i,r=0,o=0,a=0,c=0,l=null,u=!1){let h,d;u?(h=Ua,d=io):(h=io,d=Ua);const f=h.float32Array,g=h.uint32Array,_=h.uint16Array,m=d.float32Array,p=d.uint32Array,v=d.uint16Array,y=s*2,x=t*2,A=cn(y,_),E=cn(x,v);let T=!1;if(E&&A)u?T=i(yn(t,p),En(t*2,v),yn(s,g),En(s*2,_),c,o+t,a,r+s):T=i(yn(s,g),En(s*2,_),yn(t,p),En(t*2,v),a,r+s,c,o+t);else if(E){const C=Pi.getPrimitive();Me(t,m,C),C.applyMatrix4(e);const S=An(s),M=Rn(s,g);Me(S,f,Gs),Me(M,f,Ws);const P=C.intersectsBox(Gs),L=C.intersectsBox(Ws);T=P&&Fn(t,S,n,e,i,o,r,c,a+1,C,!u)||L&&Fn(t,M,n,e,i,o,r,c,a+1,C,!u),Pi.releasePrimitive(C)}else{const C=An(t),S=Rn(t,p);Me(C,m,$c),Me(S,m,Yc);const M=l.intersectsBox($c),P=l.intersectsBox(Yc);if(M&&P)T=Fn(s,C,e,n,i,r,o,a,c+1,l,u)||Fn(s,S,e,n,i,r,o,a,c+1,l,u);else if(M)if(A)T=Fn(s,C,e,n,i,r,o,a,c+1,l,u);else{const L=Pi.getPrimitive();L.copy($c).applyMatrix4(e);const D=An(s),F=Rn(s,g);Me(D,f,Gs),Me(F,f,Ws);const V=L.intersectsBox(Gs),k=L.intersectsBox(Ws);T=V&&Fn(C,D,n,e,i,o,r,c,a+1,L,!u)||k&&Fn(C,F,n,e,i,o,r,c,a+1,L,!u),Pi.releasePrimitive(L)}else if(P)if(A)T=Fn(s,S,e,n,i,r,o,a,c+1,l,u);else{const L=Pi.getPrimitive();L.copy(Yc).applyMatrix4(e);const D=An(s),F=Rn(s,g);Me(D,f,Gs),Me(F,f,Ws);const V=L.intersectsBox(Gs),k=L.intersectsBox(Ws);T=V&&Fn(S,D,n,e,i,o,r,c,a+1,L,!u)||k&&Fn(S,F,n,e,i,o,r,c,a+1,L,!u),Pi.releasePrimitive(L)}}return T}const ma=new en,Ed=new te,KM={strategy:Wf,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Cu{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,i=t._roots,r=t._indirectBuffer,o=n.getIndex();let a;return e.cloneBuffers?a={roots:i.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:i,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:o}=t,a=new Cu(e,{...n,[Hc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){const c=e.getIndex();if(c===null){const l=new be(t.index,1,!1);e.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...KM,[Hc]:!1},e),e.useSharedArrayBuffer&&!$M())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Hc]||(hM(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new te))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?OM:wM)(this,t)}traverse(t,e=0){const n=this._roots[e],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){const l=a*2,u=r[l+15]===$a;if(u){const h=i[a+6],d=r[l+14];t(c,u,new Float32Array(n,a*4,6),h,d)}else{const h=a+no/4,d=i[a+6],f=i[a+7];t(c,u,new Float32Array(n,a*4,6),f)||(o(h,c+1),o(d,c+1))}}}raycast(t,e=Hn,n=0,i=1/0){const r=this._roots,o=this.geometry,a=[],c=e.isMaterial,l=Array.isArray(e),u=o.groups,h=c?e.side:e,d=this.indirect?zM:CM;for(let f=0,g=r.length;f<g;f++){const _=l?e[u[f].materialIndex].side:h,m=a.length;if(d(this,f,_,t,a,n,i),l){const p=u[f].materialIndex;for(let v=m,y=a.length;v<y;v++)a[v].face.materialIndex=p}}return a}raycastFirst(t,e=Hn,n=0,i=1/0){const r=this._roots,o=this.geometry,a=e.isMaterial,c=Array.isArray(e);let l=null;const u=o.groups,h=a?e.side:e,d=this.indirect?HM:IM;for(let f=0,g=r.length;f<g;f++){const _=c?e[u[f].materialIndex].side:h,m=d(this,f,_,t,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[f].materialIndex))}return l}intersectsGeometry(t,e){let n=!1;const i=this._roots,r=this.indirect?VM:LM;for(let o=0,a=i.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){const e=Cn.getPrimitive(),n=this.indirect?RM:TM;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){const h=o;o=(d,f,g,_,m)=>h(d,f,g,_,m)?!0:n(d,f,this,a,g,_,e)}else o||(a?o=(h,d,f,g)=>n(h,d,this,a,f,g,e):o=(h,d,f)=>f);let c=!1,l=0;const u=this._roots;for(let h=0,d=u.length;h<d;h++){const f=u[h];if(c=_M(this,h,r,o,i,l),c)break;l+=f.byteLength}return Cn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const o=Cn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Ae(o,_*3,a,c)}:g=>{Ae(o,g*3,a,c)},u=Cn.getPrimitive(),h=t.geometry.index,d=t.geometry.attributes.position,f=t.indirect?g=>{const _=t.resolveTriangleIndex(g);Ae(u,_*3,h,d)}:g=>{Ae(u,g*3,h,d)};if(r){const g=(_,m,p,v,y,x,A,E)=>{for(let T=p,C=p+v;T<C;T++){f(T),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let S=_,M=_+m;S<M;S++)if(l(S),o.needsUpdate=!0,r(o,u,S,T,y,x,A,E))return!0}return!1};if(i){const _=i;i=function(m,p,v,y,x,A,E,T){return _(m,p,v,y,x,A,E,T)?!0:g(m,p,v,y,x,A,E,T)}}else i=g}return YM(this,t,e,i)}intersectsBox(t,e){return ma.set(t.min,t.max,e),ma.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ma.intersectsBox(n),intersectsTriangle:n=>ma.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},i={},r=0,o=1/0){return(this.indirect?jM:BM)(this,t,e,n,i,r,o)}closestPointToPoint(t,e={},n=0,i=1/0){return xM(this,t,e,n,i)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{Me(0,new Float32Array(n),Ed),t.union(Ed)}),t}}function Ad(s,t,e){return s===null?null:(s.point.applyMatrix4(t.matrixWorld),s.distance=s.point.distanceTo(e.ray.origin),s.object=t,s)}const ga=new Hi,Rd=new b,Cd=new yt,ZM=Dt.prototype.raycast,JM=Uv.prototype.raycast,Pd=new b,Be=new Dt,_a=[];function QM(s,t){this.isBatchedMesh?tS.call(this,s,t):eS.call(this,s,t)}function tS(s,t){if(this.boundsTrees){const e=this.boundsTrees,n=this._drawInfo||this._instanceInfo,i=this._drawRanges||this._geometryInfo,r=this.matrixWorld;Be.material=this.material,Be.geometry=this.geometry;const o=Be.geometry.boundsTree,a=Be.geometry.drawRange;Be.geometry.boundingSphere===null&&(Be.geometry.boundingSphere=new qe);for(let c=0,l=n.length;c<l;c++){if(!this.getVisibleAt(c))continue;const u=n[c].geometryIndex;if(Be.geometry.boundsTree=e[u],this.getMatrixAt(c,Be.matrixWorld).premultiply(r),!Be.geometry.boundsTree){this.getBoundingBoxAt(u,Be.geometry.boundingBox),this.getBoundingSphereAt(u,Be.geometry.boundingSphere);const h=i[u];Be.geometry.setDrawRange(h.start,h.count)}Be.raycast(s,_a);for(let h=0,d=_a.length;h<d;h++){const f=_a[h];f.object=this,f.batchId=c,t.push(f)}_a.length=0}Be.geometry.boundsTree=o,Be.geometry.drawRange=a,Be.material=null,Be.geometry=null}else JM.call(this,s,t)}function eS(s,t){if(this.geometry.boundsTree){if(this.material===void 0)return;Cd.copy(this.matrixWorld).invert(),ga.copy(s.ray).applyMatrix4(Cd),Pd.setFromMatrixScale(this.matrixWorld),Rd.copy(ga.direction).multiply(Pd);const e=Rd.length(),n=s.near/e,i=s.far/e,r=this.geometry.boundsTree;if(s.firstHitOnly===!0){const o=Ad(r.raycastFirst(ga,this.material,n,i),this,s);o&&t.push(o)}else{const o=r.raycast(ga,this.material,n,i);for(let a=0,c=o.length;a<c;a++){const l=Ad(o[a],this,s);l&&t.push(l)}}}else ZM.call(this,s,t)}function nS(s={}){return this.boundsTree=new Cu(this,s),this.boundsTree}function iS(){this.boundsTree=null}_e.prototype.computeBoundsTree=nS;_e.prototype.disposeBoundsTree=iS;Dt.prototype.raycast=QM;const as=new b,Gr=new b,Xs=new b,sS=new Fe,rS=new b;new b;const _n=s=>`(${s.x.toFixed(3)}, ${s.y.toFixed(3)}, ${s.z.toFixed(3)})`;function oS(s){const t=s.geometry;return t.index?t.index.count/3:t.attributes.position.count/3}function Kf(s,t){const e={label:s,nodes:0,meshes:0,triangles:0,materials:new Set,textures:new Set,animations:t.animations.map(i=>i.name||"(unnamed)")};console.groupCollapsed(`[inspect] ${s}: scene hierarchy`),t.scene.updateMatrixWorld(!0),t.scene.traverse(i=>{e.nodes++;let r=0;for(let c=i.parent;c;c=c.parent)r++;const o=i.getWorldScale(new b);let a="";if(i.isMesh){const c=oS(i);e.meshes++,e.triangles+=c;const l=Array.isArray(i.material)?i.material:[i.material];for(const u of l){e.materials.add(u.name||u.type);for(const h of["map","normalMap","roughnessMap","metalnessMap","aoMap","emissiveMap"])u[h]&&e.textures.add(`${h}:${u[h].image?.width}x${u[h].image?.height}`)}a=` tris=${c} material=${l.map(u=>u.name).join(",")}`}console.log(`${"  ".repeat(r)}${i.type} "${i.name}" localPos${_n(i.position)} scale${_n(i.scale)} worldPos${_n(i.getWorldPosition(as))} worldScale${_n(o)}${a}`)}),console.groupEnd();const n=new te().setFromObject(t.scene);return e.bbox={min:n.min.toArray(),max:n.max.toArray(),size:n.getSize(new b).toArray()},e.materials=[...e.materials],e.textures=[...e.textures],console.log(`[inspect] ${s}:`,{nodes:e.nodes,meshes:e.meshes,triangles:e.triangles,materials:e.materials,textures:e.textures,animations:e.animations,bbox:e.bbox}),e}function aS(s,t,e,n){const i=as.subVectors(t,s),r=rS.subVectors(s,e),o=i.dot(i),a=r.dot(i),c=r.dot(r)-n*n;if(c<=0)return 0;if(o<1e-12)return-1;const l=a*a-o*c;if(l<0)return-1;const u=(-a-Math.sqrt(l))/o;return u>=0&&u<=1?u:-1}function cS(s=128){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,s*.28,s/2,s/2,s/2);n.addColorStop(0,"rgba(255,220,120,0)"),n.addColorStop(.55,"rgba(255,200,80,1)"),n.addColorStop(.75,"rgba(255,120,20,0.8)"),n.addColorStop(1,"rgba(255,80,0,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),e.fillStyle="rgba(255,240,180,1)",e.beginPath(),e.arc(s/2,s/2,s*.08,0,Math.PI*2),e.fill();const i=new pr(t);return i.colorSpace=xe,i}function lS(s,t,e,n){let i=0,r=1;for(const o of["x","y","z"]){const a=t[o]-s[o];if(Math.abs(a)<1e-9){if(s[o]<e[o]||s[o]>n[o])return-1}else{let c=(e[o]-s[o])/a,l=(n[o]-s[o])/a;if(c>l&&([c,l]=[l,c]),i=Math.max(i,c),r=Math.min(r,l),i>r)return-1}}return i}class uS{constructor(t){this.root=new Pe,this.root.name="RavanaRoot",this.pivot=new Pe,this.root.add(this.pivot),this.root.visible=!1,t.add(this.root),this.targets=[],this.bodyMeshes=[],this.materials=[],this.modelHeight=1,this.height=ht.ravana.defaultHeight,this.hitboxSource="none",this.hitboxWarning="",this.debugVisible=ht.debug,this.invMatrix=new yt,this.raycaster=new Hf,this.raycaster.firstHitOnly=!0,this.clipPlane=new wn(new b(0,1,0),0),this.sink=0}async load(t,e){const n=await t.loadAsync(ht.models.ravana,e);this.summary=Kf("ravana.glb",n),this.summary.triangles>3e5&&console.warn(`[ravana] ${this.summary.triangles} triangles — heavy for Quest 3 browser. Prefer ravana.glb (~150k tris).`),n.animations.length===0&&console.log("[ravana] No animations in the GLB (static pose).");const i=n.scene;this.model=i,this.pivot.add(i),i.updateMatrixWorld(!0);const r=new te().setFromObject(i),o=r.getSize(new b),a=r.getCenter(new b);return this.modelHeight=o.y,this.modelBox=r.clone(),this.pivot.position.set(-a.x,-r.min.y,-a.z),console.log(`[ravana] model bbox min${_n(r.min)} max${_n(r.max)} size${_n(o)}. Feet offset applied: ${_n(this.pivot.position)}`),i.traverse(c=>{if(!c.isMesh)return;this.bodyMeshes.push(c);const l=Array.isArray(c.material)?c.material:[c.material];for(const u of l)u.envMapIntensity=1,this.materials.push(u);if(ht.ravana.bodyCollision){const u=performance.now();c.geometry.computeBoundsTree(),console.log(`[ravana] BVH for "${c.name}" built in ${(performance.now()-u).toFixed(0)} ms`)}}),this.root.updateMatrixWorld(!0),this._findHitboxes(i),this._buildTargetVisuals(),this._setupNavel(),this.setHeight(this.height),this.summary}_findHitboxes(t){const{namePatterns:e,expectedCount:n,sizeMultiplier:i,defaultHalfExtent:r}=ht.hitboxes,o=[];t.traverse(u=>o.push(u));const a=o.filter(u=>/hitbox|collider|head/i.test(u.name));console.groupCollapsed(`[ravana] nodes whose names contain Hitbox / Collider / Head: ${a.length}`);for(const u of a)console.log(`${u.type} "${u.name}" isMesh=${!!u.isMesh} worldPos${_n(u.getWorldPosition(as))} worldScale${_n(u.getWorldScale(Gr))}`,u.userData);console.groupEnd();let c=null;for(const u of e){const h=o.filter(d=>d!==t&&u.test(d.name));if(h.length===n){c=h,console.log(`[ravana] Hitbox naming pattern ${u} matched ${h.length} nodes.`);break}h.length&&console.warn(`[ravana] Pattern ${u} matched ${h.length} nodes (expected ${n}) — skipped.`)}const l=new yt().copy(this.root.matrixWorld).invert();if(c){const u=h=>Number((h.name.match(/(\d+)\s*$/)||[])[1]);c.sort((h,d)=>(u(h)||0)-(u(d)||0)||h.getWorldPosition(Gr).x-d.getWorldPosition(Xs).x),this.hitboxSource="glb",c.forEach((h,d)=>{let f,g;if(h.isMesh){const _=new te().setFromObject(h);_.applyMatrix4(l),f=_.getCenter(new b),g=_.getSize(new b).multiplyScalar(.5)}else{h.updateWorldMatrix(!0,!1),f=h.getWorldPosition(new b).applyMatrix4(l),g=h.getWorldScale(new b);const _=this.root.getWorldScale(as).x;g.divideScalar(_),(g.x<1e-4||g.x>10)&&g.setScalar(r)}g.multiplyScalar(i),this.targets.push(this._makeTarget(d,h.name,f,g,h.userData?.source_name))})}else this.hitboxSource="fallback",this.hitboxWarning="No hitbox nodes found in ravana.glb — using CONFIG.hitboxes.fallback (edit src/config.js).",console.warn(`[ravana] ${this.hitboxWarning}`),ht.hitboxes.fallback.forEach((u,h)=>{const d=new b(...u.center).add(this.pivot.position),f=new b(...u.half).multiplyScalar(i);this.targets.push(this._makeTarget(h,`fallback_${h+1}`,d,f))});console.table(this.targets.map(u=>({index:u.index+1,node:u.name,source:u.sourceName||"",center:_n(u.center),halfExtents:_n(u.half)})))}_makeTarget(t,e,n,i,r){return{index:t,name:e,sourceName:r,center:n,half:i,min:n.clone().sub(i),max:n.clone().add(i),hits:0,destroyed:!1,highlight:0}}_buildTargetVisuals(){const t=new Fv(new gs(2,2,2)),e=new Mu(.035,0);this.debugGroup=new Pe,this.debugGroup.visible=this.debugVisible,this.root.add(this.debugGroup);for(const n of this.targets)n.debugBox=new vu(t,new fr({color:3407718,depthTest:!1,transparent:!0})),n.debugBox.position.copy(n.center),n.debugBox.scale.copy(n.half),n.debugBox.renderOrder=10,this.debugGroup.add(n.debugBox),n.marker=new Dt(e,new Xe({color:16761402,transparent:!0,opacity:.9})),n.marker.position.set(n.center.x,n.max.y+.06,n.center.z),n.marker.visible=ht.hitboxes.showMarkers,this.root.add(n.marker)}_setupNavel(){const t=ht.navel,e=new b(t.modelPosition[0],t.modelPosition[1],0).add(this.pivot.position);e.z=this.modelBox.max.z+this.pivot.position.z+1,this.root.updateMatrixWorld(!0),this.raycaster.set(e.clone(),new b(0,0,-1)),this.raycaster.far=10;const n=this.raycaster.intersectObjects(this.bodyMeshes,!1)[0];n?(e.z=n.point.z-t.radius*.3,console.log(`[ravana] navel target at root-local ${_n(e)} (surface found by raycast)`)):(e.z=this.pivot.position.z,console.warn("[ravana] navel raycast missed the body — using the model centre depth. Adjust CONFIG.navel.modelPosition."));const i=t.radius*ht.hitboxes.sizeMultiplier;this.navel={center:e,radius:i,active:!1,hit:!1,aimed:!1},this.navelMarker=new Pe,this.navelMarker.position.copy(e);const r=new us(new ls({map:cS(),blending:Bi,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1}));r.scale.setScalar(i*3.2),r.renderOrder=12,this.navelMarker.add(r),this.navelRing=r,this.navelMarker.visible=!1,this.root.add(this.navelMarker);const o=new Dt(new gr(i,12,8),new Xe({color:16729343,wireframe:!0,depthTest:!1,transparent:!0}));o.position.copy(e),o.renderOrder=10,this.debugGroup.add(o)}setNavelActive(t){this.navel.active=t,this.navelMarker.visible=t}setDebugVisible(t){this.debugVisible=t,this.debugGroup&&(this.debugGroup.visible=t)}setHeight(t){const{minHeight:e,maxHeight:n}=ht.ravana;this.height=ds.clamp(t,e,n),this.root.scale.setScalar(this.height/this.modelHeight),this.root.updateMatrixWorld(!0)}place(t,e){this.root.position.copy(t),e&&(this.yaw=Math.atan2(e.x-t.x,e.z-t.z),this.root.rotation.set(0,this.yaw,0)),this.floorY=t.y,this.root.visible=!0,this.root.updateMatrixWorld(!0)}update(t,e){this.root.updateMatrixWorld(!0),this.invMatrix.copy(this.root.matrixWorld).invert();for(const n of this.targets){if(n.highlight=Math.max(0,n.highlight-t*3),!n.destroyed){n.marker.rotation.y=e*2+n.index;const i=1+n.highlight*1.5+(n.aimed?.5:0);n.marker.scale.setScalar(i),n.marker.material.color.setHex(n.highlight>0?16738816:n.aimed?16777215:16761402),n.debugBox.material.color.setHex(n.aimed?16777215:3407718)}n.aimed=!1}if(this.navel?.active){const n=1+.25*Math.sin(e*6)+(this.navel.aimed?.4:0);this.navelRing.scale.setScalar(this.navel.radius*3.2*n),this.navelRing.material.rotation=e*1.5}this.navel&&(this.navel.aimed=!1)}liveTargets(){return this.targets.filter(t=>!t.destroyed)}surfacePoint(t=new b){const e=this.bodyMeshes[Math.random()*this.bodyMeshes.length|0],n=e.geometry.attributes.position;return t.fromBufferAttribute(n,Math.random()*n.count|0),t.applyMatrix4(e.matrixWorld)}navelWorld(t=new b){return t.copy(this.navel.center).applyMatrix4(this.root.matrixWorld)}worldCenter(t,e=new b){return e.copy(t.center).applyMatrix4(this.root.matrixWorld)}segmentTest(t,e){if(!this.root.visible)return null;Gr.copy(t).applyMatrix4(this.invMatrix),Xs.copy(e).applyMatrix4(this.invMatrix);let n=null;for(const o of this.targets){if(o.destroyed)continue;const a=lS(Gr,Xs,o.min,o.max);a>=0&&(!n||a<n.t)&&(n={type:"head",target:o,t:a})}if(this.navel?.active){const o=aS(Gr,Xs,this.navel.center,this.navel.radius);o>=0&&(!n||o<n.t)&&(n={type:"navel",t:o})}if(n)return n.point=new b().lerpVectors(t,e,n.t),n;if(!ht.ravana.bodyCollision)return null;const i=as.subVectors(e,t).length();if(i<1e-6)return null;this.raycaster.set(t,as.divideScalar(i)),this.raycaster.far=i;const r=this.raycaster.intersectObjects(this.bodyMeshes,!1)[0];return r?{type:"body",point:r.point.clone(),t:r.distance/i,object:r.object}:null}rayTest(t,e,n){Xs.copy(e).multiplyScalar(n).add(t);const i=this.segmentTest(t,Xs);return i&&(i.distance=i.t*n),i}registerHit(t){return t.hits++,t.highlight=1,t.hits>=ht.hitboxes.hitsPerTarget?(t.destroyed=!0,t.marker.material.color.setHex(3355443),t.marker.material.opacity=.35,t.marker.scale.setScalar(.6),t.debugBox.material.color.setHex(16724787),!0):!1}setFinale(t,e,n=[1,.62,.15]){for(const i of this.materials)i.emissive.setRGB(n[0],n[1],n[2]),i.emissiveIntensity=t*1.6,i.clippingPlanes=e>0?[this.clipPlane]:null;this.sink=e,this.clipPlane.constant=-(this.floorY??0),this.root.position.y=(this.floorY??0)-e}resetTargets(){for(const t of this.targets)t.hits=0,t.destroyed=!1,t.highlight=0,t.marker.material.opacity=.9,t.marker.visible=ht.hitboxes.showMarkers;this.setFinale(0,0);for(const t of this.materials)t.emissive.setRGB(0,0,0);this.navel&&(this.navel.hit=!1,this.setNavelActive(!1)),this.root.visible=this.floorY!==void 0}chestPoint(t=new b){const e=this.modelBox.max.z-this.modelBox.getCenter(as).z;return t.set(0,this.modelHeight*.58,e*.55),t.applyMatrix4(this.root.matrixWorld)}topPoint(t=new b){return t.set(0,this.modelHeight*1.08,0),t.applyMatrix4(this.root.matrixWorld)}getWorldQuaternion(t=sS){return this.root.getWorldQuaternion(t)}}const Zf=["x","y","z"],Zc={x:new b(1,0,0),y:new b(0,1,0),z:new b(0,0,1)},Id=new b(0,1,0),Wr=new b,xa=new b;function Ld(s){return Zf.reduce((t,e)=>s[e]>s[t]?e:t)}function hS(s){const t=new Pe,e=new _i({color:9067051,roughness:.8}),n=new _i({color:14271098,metalness:.8,roughness:.3}),i=new Dt(new mr(.006,.006,s*.9,6),e);i.rotation.x=Math.PI/2,i.position.z=s*.55;const r=new Dt(new yu(.014,s*.1,6),n);return r.rotation.x=-Math.PI/2,r.position.z=s*.05,t.add(i,r),t}class dS{constructor(t){this.group=new Pe,this.offset=new Pe,this.model=new Pe,this.group.add(this.offset),this.offset.add(this.model),this.group.visible=!1,t.add(this.group),this.cooldown=0,this.draw=0,this.drawing=!1,this.flexUniforms={uDraw:{value:0},uHalfH:{value:1},uFlexZ:{value:0},uFlexY:{value:0},uNock:{value:0},uCut:{value:1}}}async load(t){const e=await t.loadAsync(ht.models.bow);this.summary=Kf("bow.glb",e);const n=e.scene;n.updateMatrixWorld(!0);let i=null;n.traverse(Q=>{!i&&Q.isMesh&&/arrow|flecha/i.test(Q.name)&&(i=Q)});let r=null;i?(r=i.matrixWorld.clone(),i.parent.remove(i),console.log(`[bow] Using arrow mesh "${i.name}" from bow.glb as the projectile.`)):console.warn("[bow] No arrow mesh found in bow.glb — using a procedural arrow."),n.updateMatrixWorld(!0);const o=new te().setFromObject(n),a=o.getSize(new b),c=Ld(a);let l;i?(i.geometry.boundingBox||i.geometry.computeBoundingBox(),l=Ld(i.geometry.boundingBox.clone().applyMatrix4(r).getSize(new b))):l=Zf.filter(Q=>Q!==c).reduce((Q,z)=>a[z]>a[Q]?z:Q);const u=[];n.traverse(Q=>Q.isMesh&&u.push(Q));const h=u.filter(Q=>!/cuerda|string/i.test(Q.name)),d=Q=>new te().setFromObject(Q).getSize(xa)[c],f=(h.length?h:u).reduce((Q,z)=>d(z)>d(Q)?z:Q);console.log(`[bow] limb mesh for grip / orientation: "${f.name}"`);let g=1;{const Q=f.geometry.attributes.position;let z=0,$=0,ot=0,nt=0;for(let gt=0;gt<Q.count;gt++){Wr.fromBufferAttribute(Q,gt).applyMatrix4(f.matrixWorld);const Rt=(Wr[c]-o.min[c])/a[c];Rt>.4&&Rt<.6&&(z+=Wr[l],$++),(Rt<.1||Rt>.9)&&(ot+=Wr[l],nt++)}$&&nt&&(g=Math.sign(z/$-ot/nt)||1)}ht.bow.flipArrow&&(g=-g);const _=Zc[l].clone().multiplyScalar(g),m=new b().crossVectors(_,Zc[c]).normalize(),p=new yt().makeBasis(m,Zc[c],_.clone().negate()),v=new yt().makeBasis(new b(1,0,0),Id,new b(0,0,1));this.autoQuat=new Fe().setFromRotationMatrix(v.multiply(p.invert()));const y=new yt().makeRotationFromQuaternion(this.autoQuat);console.log(`[bow] size${a.toArray().map(Q=>Q.toFixed(3))} up=${c} shootAxis=${g>0?"+":"-"}${l}`);const x=u.map(Q=>{const z=Q.geometry.clone().applyMatrix4(new yt().multiplyMatrices(y,Q.matrixWorld));return{name:Q.name,geo:z,material:Q.material}}),A=new te;x.forEach(Q=>{Q.geo.computeBoundingBox(),A.union(Q.geo.boundingBox)});const E=(A.min.y+A.max.y)/2,T=(A.max.y-A.min.y)/2,C=x.find(Q=>/cuerda|string/i.test(Q.name));let S=0,M=0,P=.004;if(C){const Q=C.geo.attributes.position;let z=0;for(let $=0;$<Q.count;$++){const ot=Math.abs(Q.getY($)-E)/T;ot>.3&&ot<.55&&(S+=Q.getX($),M+=Q.getZ($),z++)}if(z){S/=z,M/=z;let $=1/0,ot=-1/0;for(let nt=0;nt<Q.count;nt++){const gt=Math.abs(Q.getY(nt)-E)/T;gt>.3&&gt<.55&&($=Math.min($,Q.getX(nt)),ot=Math.max(ot,Q.getX(nt)))}P=Math.max(.002,(ot-$)/2)}}let L=0,D=0;{const z=x.find($=>$.name===f.name).geo.attributes.position;for(let $=0;$<z.count;$++)Math.abs(z.getY($)-E)<T*.06&&(L+=z.getZ($),D++);L=D?L/D:(A.min.z+A.max.z)/2}const F=new b(-S,-E,-L);x.forEach(Q=>Q.geo.translate(F.x,F.y,F.z)),this.braceModel=M-L,this.halfHModel=T;const V=T*ht.bow.stringCut;if(C){const Q=C.geo,z=Q.attributes.position,$=Q.index?Q.index.array:[...Array(z.count).keys()],ot=[],nt=gt=>Math.hypot(z.getX(gt),z.getZ(gt)-this.braceModel)<P+T*.02&&Math.abs(z.getY(gt))<V;for(let gt=0;gt<$.length;gt+=3){const Rt=$[gt],zt=$[gt+1],re=$[gt+2];nt(Rt)||nt(zt)||nt(re)||ot.push(Rt,zt,re)}console.log(`[bow] string cut: removed ${($.length-ot.length)/3} of ${$.length/3} triangles from "${C.name}"`),Q.setIndex(ot)}const k=x[0].material,Y=Q=>{const z=k.clone();return z.side=We,z.transparent=!1,z.depthWrite=!0,z.alphaTest=.5,z.onBeforeCompile=$=>{Object.assign($.uniforms,this.flexUniforms),$.vertexShader=`uniform float uDraw; uniform float uHalfH; uniform float uFlexZ; uniform float uFlexY; uniform float uNock; uniform float uCut;
`+$.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
            ${Q?"transformed.z += uNock * max(0.0, 1.0 - abs(transformed.y) / uCut);":`float bh = abs(transformed.y) / uHalfH;
            float bt = max(0.0, bh - 0.12) / 0.88; bt *= bt;
            transformed.z += uDraw * uFlexZ * bt;
            transformed.y -= sign(transformed.y) * uDraw * uFlexY * bt;`}`)},z.customProgramCacheKey=()=>Q?"bow-string-part":"bow-flex",z},X=Y(!1),rt=Y(!0);this.flexUniforms.uHalfH.value=T,this.flexUniforms.uFlexZ.value=T*ht.bow.flexBack,this.flexUniforms.uFlexY.value=T*ht.bow.flexIn,this.flexUniforms.uCut.value=V,console.log(`[bow] material: source alphaMode ${k.transparent?"BLEND":"OPAQUE/MASK"}, side ${k.side} -> opaque, alphaTest 0.5, DoubleSide`);for(const Q of x){Q.geo.computeBoundingBox();const z=Q.geo.boundingBox,$=Q!==C&&Math.max(Math.abs(z.min.x),Math.abs(z.max.x))<P+T*.04&&Math.abs(z.min.z-this.braceModel)<T*.04&&Math.abs(z.max.z-this.braceModel)<T*.04&&Math.max(-z.min.y,z.max.y)<V*1.15;$&&console.log(`[bow] "${Q.name}" sits on the string — it will follow the draw.`);const ot=new Dt(Q.geo,$?rt:X);ot.name=Q.name,ot.frustumCulled=!1,this.model.add(ot)}const dt=ht.bow.height/(T*2);this.bowScale=dt,this.model.scale.setScalar(dt),this.brace=this.braceModel*dt,this.stringTop0=new b(0,V,this.braceModel),this.stringBottom0=new b(0,-V,this.braceModel),console.log(`[bow] grip at origin, brace height ${(this.brace*100).toFixed(1)} cm, string radius ${(P*dt*1e3).toFixed(1)} mm`);const Tt=new _i({color:ht.bow.stringColor,roughness:.7,side:We}),Ot=new mr(1,1,1,6,1,!0).translate(0,.5,0);if(this.strings=[new Dt(Ot,Tt),new Dt(Ot,Tt)],this.stringRadius=Math.max(P,.0025/dt),this.strings.forEach(Q=>{Q.frustumCulled=!1,this.model.add(Q)}),this.applyOffsets(),this.arrowTemplate=new Pe,i){const Q=new Pe;r.decompose(i.position,i.quaternion,i.scale),i.material=i.material.clone(),i.material.side=We,i.material.transparent=!1,i.material.depthWrite=!0,i.material.alphaTest=.5,Q.add(i),Q.quaternion.copy(this.autoQuat),Q.updateMatrixWorld(!0);const z=new te().setFromObject(Q),$=new Pe;$.add(Q),Q.position.set(-(z.min.x+z.max.x)/2,-(z.min.y+z.max.y)/2,-z.min.z),$.scale.setScalar(ht.arrows.length/(z.max.z-z.min.z)),this.arrowTemplate.add($)}else this.arrowTemplate.add(hS(ht.arrows.length));return this.arrowTemplate.traverse(Q=>{Q.isMesh&&(Q.frustumCulled=!1)}),this.nocked=this.arrowTemplate.clone(),this.nocked.visible=!1,this.group.add(this.nocked),this.setDraw(0,!1),this.summary}applyOffsets(){this.offset.rotation.set(...ht.bow.rotationDeg.map(ds.degToRad))}_flexed(t,e,n){const{uHalfH:i,uFlexZ:r,uFlexY:o}=this.flexUniforms,a=Math.abs(t.y)/i.value;let c=Math.max(0,a-.12)/.88;return c*=c,n.set(t.x,t.y-Math.sign(t.y)*e*o.value*c,t.z+e*r.value*c)}setDraw(t,e){this.draw=ds.clamp(t,0,ht.bow.maxDraw);const n=this.draw/ht.bow.maxDraw;this.flexUniforms.uDraw.value=n;const i=this.bowScale;this.flexUniforms.uNock.value=this.draw/i;const r=Wr.set(0,0,this.braceModel+this.draw/i);[this._flexed(this.stringTop0,n,new b),this._flexed(this.stringBottom0,n,new b)].forEach((a,c)=>{const l=this.strings[c];xa.subVectors(r,a);const u=xa.length();l.position.copy(a),l.quaternion.setFromUnitVectors(Id,xa.divideScalar(u)),l.scale.set(this.stringRadius,u,this.stringRadius)}),this.nocked.visible=!!e,this.nocked.position.set(0,0,this.brace+this.draw-ht.arrows.length)}nockWorld(t){return this.group.updateMatrixWorld(!0),t.set(0,0,this.brace+this.draw).applyMatrix4(this.group.matrixWorld)}gripWorld(t){return this.group.updateMatrixWorld(!0),t.setFromMatrixPosition(this.group.matrixWorld)}setPose(t,e){this.group.position.copy(t),this.group.quaternion.copy(e)}getFireRay(t,e){return this.group.updateMatrixWorld(!0),t.copy(this.nocked.position).applyMatrix4(this.group.matrixWorld),e.set(0,0,-1).transformDirection(this.group.matrixWorld),{origin:t,dir:e}}update(t){this.cooldown=Math.max(0,this.cooldown-t)}}const Dd=new b(0,0,-1),Jc=new b;class fS{constructor(t,e){this.scene=t,this.pool=[],this.active=[],this.fired=0;for(let n=0;n<ht.arrows.maxActive;n++){const i=e.clone();i.visible=!1,t.add(i),this.pool.push({obj:i,vel:new b,prev:new b,age:0,state:"idle"})}}fire(t,e,n=ht.arrows.speed){let i=this.pool.find(r=>r.state==="idle");return i||(i=this.active.shift(),this._release(i)),i.obj.parent!==this.scene&&this.scene.add(i.obj),i.obj.scale.setScalar(1),i.obj.position.copy(t),i.prev.copy(t),i.vel.copy(e).normalize().multiplyScalar(n),i.obj.quaternion.setFromUnitVectors(Dd,Jc.copy(i.vel).normalize()),i.age=0,i.state="flying",i.obj.visible=!0,this.active.push(i),this.fired++,i}update(t,e){const n=ht.arrows.gravity;for(let i=this.active.length-1;i>=0;i--){const r=this.active[i];if(r.age+=t,r.state==="flying"){r.prev.copy(r.obj.position),n&&(r.vel.y-=n*t),r.obj.position.addScaledVector(r.vel,t),n&&r.obj.quaternion.setFromUnitVectors(Dd,Jc.copy(r.vel).normalize());const o=e(r.prev,r.obj.position,r);if(o)if(r.obj.position.copy(o.point),o.stickTo)r.obj.position.addScaledVector(Jc.copy(r.vel).normalize(),.06),o.stickTo.attach(r.obj),r.state="stuck",r.age=0;else{this._remove(i);continue}else r.age>ht.arrows.lifetime&&this._remove(i)}else r.state==="stuck"&&r.age>ht.arrows.stuckLifetime&&this._remove(i)}}_remove(t){const e=this.active[t];this.active.splice(t,1),this._release(e)}_release(t){t.state="idle",t.obj.visible=!1,t.obj.parent!==this.scene&&this.scene.attach(t.obj)}clear(){for(;this.active.length;)this._remove(this.active.length-1);this.fired=0}}const Nn=new b,qs=new b,Qc=new Fe,Ud=new yt,pS=new b,mS=new Fe().setFromEuler(new tn(-Math.PI/2,0,0));function gS(s=64){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.7)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,s,s);const i=new pr(t);return i.colorSpace=xe,i}class Nd{constructor(t,e=900,n="additive"){this.cap=e,this.mode=n,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.baseSize=new Float32Array(e),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.alpha0=new Float32Array(e),this.grow=new Float32Array(e);const i=new _e;this.posAttr=new be(this.pos,3).setUsage(Ja),this.colAttr=new be(this.col,4).setUsage(Ja),this.sizeAttr=new be(this.size,1).setUsage(Ja),i.setAttribute("position",this.posAttr),i.setAttribute("pcolor",this.colAttr),i.setAttribute("psize",this.sizeAttr),i.setDrawRange(0,0);const r=n==="smoke";this.material=new Kn({uniforms:{uHalfH:{value:800}},vertexShader:`
        attribute vec4 pcolor; attribute float psize; uniform float uHalfH; varying vec4 vColor;
        void main() {
          vColor = pcolor;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = clamp(psize * projectionMatrix[1][1] * uHalfH / max(0.05, -mv.z), 0.0, 512.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:r?`
        varying vec4 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor.rgb, vColor.a * a * a);
        }`:`
        varying vec4 vColor;
        void main() {
          float d = length(gl_PointCoord - 0.5);
          float a = smoothstep(0.5, 0.05, d);
          float core = smoothstep(0.18, 0.0, d);
          gl_FragColor = vec4((vColor.rgb + core * 0.6) * a * vColor.a, 1.0);
        }`,blending:r?cs:Bi,depthWrite:!1,transparent:!0}),this.points=new Nf(i,this.material),this.points.frustumCulled=!1,this.points.renderOrder=r?4:5,t.add(this.points)}emit(t,e,n={}){const i=n.color||new lt(1,.75,.2),r=n.speed??2,o=n.life??.8,a=n.size??.05,c=t.x,l=t.y,u=t.z;for(let h=0;h<e&&this.n<this.cap;h++){const d=this.n++;Nn.set(Math.random()*2-1,Math.random()*2-1,Math.random()*2-1),Nn.lengthSq()>1&&Nn.normalize(),n.shell&&Nn.normalize(),n.dir&&Nn.multiplyScalar(n.spread??1).add(n.dir).normalize();const f=r*(n.shell?.85+Math.random()*.15:.35+Math.random()*.65),g=n.radius?n.radius*Math.random():0;this.pos[d*3]=c+Nn.x*g,this.pos[d*3+1]=l+Nn.y*g,this.pos[d*3+2]=u+Nn.z*g,this.vel[d*3]=Nn.x*f,this.vel[d*3+1]=Nn.y*f+(n.up??0),this.vel[d*3+2]=Nn.z*f;const _=.85+Math.random()*.3,m=n.palette?n.palette[Math.random()*n.palette.length|0]:i;this.col[d*4]=m.r*_,this.col[d*4+1]=m.g*_,this.col[d*4+2]=m.b*_,this.alpha0[d]=n.alpha??1,this.col[d*4+3]=this.alpha0[d],this.baseSize[d]=a*(.6+Math.random()*.8),this.size[d]=this.baseSize[d],this.maxLife[d]=this.life[d]=o*(.6+Math.random()*.6),this.grav[d]=n.gravity??-1.5,this.drag[d]=n.drag??2.5,this.grow[d]=n.grow??0}}_kill(t){const e=--this.n;if(t!==e){for(let n=0;n<3;n++)this.pos[t*3+n]=this.pos[e*3+n],this.vel[t*3+n]=this.vel[e*3+n];for(let n=0;n<4;n++)this.col[t*4+n]=this.col[e*4+n];this.size[t]=this.size[e],this.baseSize[t]=this.baseSize[e],this.life[t]=this.life[e],this.maxLife[t]=this.maxLife[e],this.grav[t]=this.grav[e],this.drag[t]=this.drag[e],this.alpha0[t]=this.alpha0[e],this.grow[t]=this.grow[e]}}update(t,e){this.material.uniforms.uHalfH.value=e;for(let i=this.n-1;i>=0;i--){if(this.life[i]-=t,this.life[i]<=0){this._kill(i);continue}const r=Math.max(0,1-this.drag[i]*t);this.vel[i*3]*=r,this.vel[i*3+1]=this.vel[i*3+1]*r+this.grav[i]*t,this.vel[i*3+2]*=r,this.pos[i*3]+=this.vel[i*3]*t,this.pos[i*3+1]+=this.vel[i*3+1]*t,this.pos[i*3+2]+=this.vel[i*3+2]*t;const o=this.life[i]/this.maxLife[i];this.col[i*4+3]=this.alpha0[i]*(this.mode==="smoke"?Math.min(1,o*2):o),this.size[i]=this.grow[i]?this.baseSize[i]*(1+this.grow[i]*(1-o)):this.baseSize[i]*(.4+.6*o)}this.points.geometry.setDrawRange(0,this.n),this.n&&(this.posAttr.addUpdateRange(0,this.n*3),this.colAttr.addUpdateRange(0,this.n*4),this.sizeAttr.addUpdateRange(0,this.n),this.posAttr.needsUpdate=this.colAttr.needsUpdate=this.sizeAttr.needsUpdate=!0)}clear(){this.n=0,this.points.geometry.setDrawRange(0,0)}}class tl{constructor(t,e){this.items=Array.from({length:e},()=>({obj:t(),t:0,dur:0,active:!1}))}get(){let t=this.items.find(e=>!e.active);return t||(t=this.items.reduce((e,n)=>e.t/e.dur>n.t/n.dur?e:n)),t.active=!0,t.t=0,t.obj.visible=!0,t}each(t){for(const e of this.items)e.active&&t(e)}clear(){for(const t of this.items)t.active=!1,t.obj.visible=!1}}const ui=new lt(1,.78,.25),ss=new lt(1,.45,.05),_S=new lt(1,.15,.05),es=new lt(1,1,1),Xr=new lt(1,.95,.4),el=new lt(.22,.2,.19),qr=[new lt(1,.35,.02),new lt(1,.6,.08),new lt(1,.85,.3),new lt(.95,.15,.02)],Fd=[[new lt(1,.8,.2),new lt(1,1,.7)],[new lt(1,.15,.2),new lt(1,.6,.6)],[new lt(.2,1,.35),new lt(.8,1,.6)],[new lt(.25,.5,1),new lt(.7,.85,1)],[new lt(1,.3,.9),new lt(1,.75,1)],[new lt(1,.5,.05),new lt(1,.85,.3)]];function xS(){const s=document.createElement("canvas");s.width=2048,s.height=640;const t=s.getContext("2d");t.textAlign="center",t.textBaseline="middle";const e=t.createRadialGradient(1024,300,50,1024,300,900);e.addColorStop(0,"rgba(255,170,40,0.35)"),e.addColorStop(1,"rgba(255,120,0,0)"),t.fillStyle=e,t.fillRect(0,0,2048,640),t.font='bold 230px "Trebuchet MS", "Segoe UI", sans-serif';const n=t.createLinearGradient(0,140,0,360);n.addColorStop(0,"#fff6c8"),n.addColorStop(.45,"#ffcc33"),n.addColorStop(1,"#ff7a00"),t.shadowColor="rgba(255,140,0,0.95)",t.shadowBlur=60,t.lineWidth=14,t.strokeStyle="rgba(90,20,0,0.9)",t.strokeText("HAPPY DUSSEHRA",1024,250),t.fillStyle=n,t.fillText("HAPPY DUSSEHRA",1024,250),t.shadowBlur=30,t.font='italic 92px "Trebuchet MS", "Segoe UI", sans-serif',t.fillStyle="#ffe8b0",t.fillText("Victory of good over evil",1024,470),t.fillStyle="#ffcc33";for(const r of[330,1718])t.beginPath(),t.moveTo(r,444),t.lineTo(r+26,470),t.lineTo(r,496),t.lineTo(r-26,470),t.closePath(),t.fill();const i=new pr(s);return i.colorSpace=xe,i}class vS{constructor(t,e){this.scene=t,this.camera=e,this.particles=new Nd(t,2600,"additive"),this.smoke=new Nd(t,500,"smoke"),this.glowTex=gS(),this.textCache=new Map,this.flashes=new tl(()=>{const r=new us(new ls({map:this.glowTex,blending:Bi,depthWrite:!1,transparent:!0,toneMapped:!1}));return r.visible=!1,r.renderOrder=6,t.add(r),r},16);const n=new qa(.88,1,64);this.rings=new tl(()=>{const r=new Dt(n,new Xe({blending:Bi,depthWrite:!1,transparent:!0,side:We,toneMapped:!1}));return r.visible=!1,r.renderOrder=6,t.add(r),r},10),this.texts=new tl(()=>{const r=new us(new ls({depthTest:!1,depthWrite:!1,transparent:!0}));return r.visible=!1,r.renderOrder=20,t.add(r),r},8),this.aura=new Dt(new mr(1,1,1,40,1,!0),new Kn({uniforms:{uTime:{value:0},uIntensity:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform float uIntensity; varying vec2 vUv;
          void main(){
            float band = 0.55 + 0.45 * sin(vUv.x * 50.0 + uTime * 6.0 + vUv.y * 8.0);
            float fade = pow(1.0 - vUv.y, 1.4);
            vec3 c = mix(vec3(1.0,0.55,0.1), vec3(1.0,0.9,0.5), vUv.y);
            gl_FragColor = vec4(c * fade * band * uIntensity, 1.0);
          }`,blending:Bi,depthWrite:!1,transparent:!0,side:We})),this.aura.visible=!1,this.aura.renderOrder=4,t.add(this.aura),this.light=new Tu(16752704,0,30,2),t.add(this.light),this.lightT=0;const i=new Su(1,0);this.shardMat=new _i({color:8006160,emissive:16734736,emissiveIntensity:1.5,roughness:.6,metalness:.2}),this.shards=new Df(i,this.shardMat,90),this.shards.frustumCulled=!1,this.shards.count=0,t.add(this.shards),this.shardData=Array.from({length:90},()=>({p:new b,v:new b,r:new tn,w:new b,s:1,life:0})),this.shardsActive=0,this.rockets=[],this.banner=new us(new ls({map:xS(),transparent:!0,depthWrite:!1,toneMapped:!1})),this.banner.visible=!1,this.banner.renderOrder=25,t.add(this.banner),this.bannerT=-1,this.damage=new Dt(new gr(.3,16,12),new Xe({color:16718336,side:ze,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1})),this.damage.renderOrder=100,this.damage.visible=!1,e.add(this.damage),this.damageT=0}_textTexture(t,e){const n=t+e;if(this.textCache.has(n))return this.textCache.get(n);const i=document.createElement("canvas");i.width=256,i.height=96;const r=i.getContext("2d");r.font='bold 64px "Trebuchet MS", sans-serif',r.textAlign="center",r.textBaseline="middle",r.lineWidth=8,r.strokeStyle="rgba(30,8,0,0.9)",r.strokeText(t,128,50),r.fillStyle=e,r.fillText(t,128,50);const o=new pr(i);return o.colorSpace=xe,this.textCache.set(n,o),o}flash(t,e,n,i=.35){const r=this.flashes.get();r.dur=i,r.size=n,r.obj.position.copy(t),r.obj.material.color.copy(e)}ring(t,e,n,i=.8,r=!1){const o=this.rings.get();o.dur=i,o.size=n,o.flat=r,o.obj.position.copy(t),o.obj.material.color.copy(e)}floatText(t,e,n="#ffd34d",i=.14){const r=this.texts.get();r.dur=1.5,r.size=i,r.start=t.clone(),r.obj.material.map=this._textTexture(e,n),r.obj.material.needsUpdate=!0,r.obj.position.copy(t),r.obj.scale.set(i*2.67,i,1)}hit(t,e=1){this.flash(t,ss,.5*e,.3),this.particles.emit(t,40,{color:ui,speed:2.6*e,life:.8,size:.04*e})}destroy(t,e=1){this.flash(t,ui,1.1*e,.55),this.flash(t,es,.45*e,.2),this.ring(t,ui,.8*e,.7),this.particles.emit(t,90,{color:ui,speed:3.6*e,life:1.2,size:.05*e,gravity:-1.2*e}),this.particles.emit(t,35,{palette:qr,speed:1.6*e,life:.9,size:.08*e,gravity:.8*e}),this.smoke.emit(t,6,{color:el,speed:.4*e,up:.4*e,life:1.8,size:.25*e,alpha:.35,gravity:.2,drag:1,grow:1.5}),this.lightPulse(t,3*e,.35,e*8)}bodyHit(t){this.flash(t,ss,.2,.15),this.particles.emit(t,10,{color:ss,speed:1.3,life:.45,size:.03})}fireballBurst(t){this.flash(t,_S,.7,.35),this.particles.emit(t,50,{palette:qr,speed:2.8,life:.8,size:.05})}playerDamage(){this.damageT=.5}lightPulse(t,e,n,i){this.light.position.copy(t),this.light.distance=i,this.lightPeak=e,this.lightDur=n,this.lightT=n}burn(t,e,n=1){const i=e/2.5;for(let r=0;r<Math.ceil(12*n);r++)t(qs),this.particles.emit(qs,1,{palette:qr,speed:.3*i,up:1*i,life:1,size:.24*i,gravity:1*i,drag:1.2,alpha:.75}),r%3===0&&this.particles.emit(qs,1,{color:Xr,speed:.8*i,up:1.6*i,life:.8,size:.05*i,gravity:.4*i,drag:.6});return Math.random()<.5*n&&(t(qs),qs.y>0&&this.smoke.emit(qs,1,{color:el,speed:.15*i,up:.5*i,life:2.6,size:.35*i,alpha:.4,gravity:.25*i,drag:.6,grow:2})),Math.random()<.12*n}crackerPop(t,e){const n=e/2.5;this.flash(t,Xr,.35*n,.12),this.particles.emit(t,18,{color:es,palette:[es,Xr],speed:2.2*n,life:.35,size:.025*n,gravity:-2})}bigExplosion(t,e,n){const i=n/2.5;this.flash(t,es,n*1.6,.5),this.flash(t,ui,n*2.6,1.3),this.flash(t,ss,n*3.4,1.8),this.ring(t,ui,n*1.1,1.1),this.ring(t,es,n*.6,.6),this.ring(new b(t.x,e+.05,t.z),ss,n*1.6,1.4,!0),this.ring(new b(t.x,e+.05,t.z),ui,n*.9,1,!0),this.particles.emit(t,650,{palette:[ui,Xr,ss,es],speed:7*i,life:2,size:.07*i,gravity:-1.6*i,radius:n*.18,drag:1.4}),this.particles.emit(t,260,{palette:qr,speed:3*i,up:1*i,life:1.6,size:.16*i,gravity:.6*i,radius:n*.25,drag:1.5}),this.smoke.emit(t,110,{color:el,speed:1.6*i,up:.6*i,life:4,size:.5*i,alpha:.45,gravity:.2*i,drag:.9,radius:n*.2,grow:2.5}),this.lightPulse(t,60*i*i,1.6,n*7),this.shardsActive=this.shardData.length,this.shards.count=this.shardsActive;for(const r of this.shardData)r.p.set(t.x+(Math.random()-.5)*n*.3,t.y+(Math.random()-.5)*n*.5,t.z+(Math.random()-.5)*n*.2),r.v.set(Math.random()*2-1,Math.random()*1.4-.2,Math.random()*2-1).normalize().multiplyScalar((3+Math.random()*6)*i),r.r.set(Math.random()*6,Math.random()*6,Math.random()*6),r.w.set(Math.random()*10-5,Math.random()*10-5,Math.random()*10-5),r.s=(.03+Math.random()*.06)*i,r.life=2.2+Math.random()*1.2,r.floor=e}firework(t,e,n=1){const i=Fd[Math.random()*Fd.length|0];this.rockets.push({p:t.clone(),v:new b((Math.random()-.5)*1.2*n,(4+Math.random()*2)*n,(Math.random()-.5)*1.2*n),burstY:t.y+e*(.8+Math.random()*.4),pal:i,s:n})}showBanner(t,e){this.banner.position.copy(t),this.banner.userData.base=t.clone(),this.banner.userData.width=e,this.banner.visible=!0,this.bannerT=0}startAura(t,e,n){this.aura.visible=!0,this.aura.position.set(t.x,t.y+n/2,t.z),this.aura.scale.set(e,n,e),this.aura.material.uniforms.uIntensity.value=0}setAura(t){this.aura.material.uniforms.uIntensity.value=t,this.aura.visible=t>.001}update(t,e,n,i){let r=n.domElement.height/2;if(n.xr.isPresenting){const o=n.xr.getCamera().cameras;o.length&&o[0].viewport.w>0&&(r=o[0].viewport.w/2)}for(let o=this.rockets.length-1;o>=0;o--){const a=this.rockets[o];a.v.y-=2.5*t*a.s,a.p.addScaledVector(a.v,t),this.particles.emit(a.p,3,{color:Xr,speed:.3*a.s,life:.6,size:.08*a.s,gravity:-1}),(a.p.y>=a.burstY||a.v.y<=0)&&(this.particles.emit(a.p,240,{palette:a.pal,shell:!0,speed:9*a.s,life:2.2,size:.16*a.s,gravity:-1.6*a.s,drag:1.2}),this.particles.emit(a.p,90,{palette:a.pal,shell:!0,speed:4.5*a.s,life:1.8,size:.12*a.s,gravity:-1.2*a.s,drag:1.2}),this.particles.emit(a.p,50,{color:es,speed:3*a.s,life:1.2,size:.07*a.s,gravity:-1}),this.flash(a.p,a.pal[0],5*a.s,.5),i?.play("firework"),this.rockets.splice(o,1))}if(this.particles.update(t,r),this.smoke.update(t,r),this.camera.getWorldQuaternion(Qc),this.flashes.each(o=>{o.t+=t;const a=o.t/o.dur;if(a>=1){o.active=!1,o.obj.visible=!1;return}o.obj.scale.setScalar(o.size*(.6+a*.8)),o.obj.material.opacity=1-a}),this.rings.each(o=>{o.t+=t;const a=o.t/o.dur;if(a>=1){o.active=!1,o.obj.visible=!1;return}o.obj.quaternion.copy(o.flat?mS:Qc),o.obj.scale.setScalar(.05+o.size*Math.sqrt(a)),o.obj.material.opacity=1-a}),this.texts.each(o=>{o.t+=t;const a=o.t/o.dur;if(a>=1){o.active=!1,o.obj.visible=!1;return}o.obj.position.copy(o.start).y+=a*.35,o.obj.material.opacity=a<.7?1:1-(a-.7)/.3}),this.lightT>0){this.lightT=Math.max(0,this.lightT-t);const o=this.lightT/this.lightDur;this.light.intensity=this.lightPeak*o*o}else this.light.intensity=0;if(this.shardsActive){let o=0;this.shardData.forEach((a,c)=>{a.life-=t,a.life>0&&(o++,a.v.y-=9.8*t,a.p.addScaledVector(a.v,t),a.p.y<a.floor+a.s&&(a.p.y=a.floor+a.s,a.v.y*=-.3,a.v.x*=.6,a.v.z*=.6),a.r.x+=a.w.x*t,a.r.y+=a.w.y*t,a.r.z+=a.w.z*t,Math.random()<.15&&this.particles.emit(a.p,1,{palette:qr,speed:.1,life:.5,size:a.s*1.5,gravity:.5}));const l=a.life>0?a.s*Math.min(1,a.life):0;Ud.compose(a.p,Qc.setFromEuler(a.r),pS.set(l,l,l)),this.shards.setMatrixAt(c,Ud)}),this.shards.instanceMatrix.needsUpdate=!0,this.shardMat.emissiveIntensity=1.5,o||(this.shardsActive=0,this.shards.count=0)}if(this.bannerT>=0){this.bannerT+=t;const o=Math.min(1,this.bannerT/1.2),a=1-Math.pow(1-o,3),c=this.banner.userData.width*(.6+.4*a);this.banner.scale.set(c,c*(640/2048),1),this.banner.material.opacity=a,this.banner.position.copy(this.banner.userData.base).y+=Math.sin(e*1.2)*c*.02}this.aura.material.uniforms.uTime.value=e,this.damageT>0?(this.damageT-=t,this.damage.visible=!0,this.damage.material.opacity=Math.max(0,this.damageT/.5)*.45):this.damage.visible=!1}clear(){this.particles.clear(),this.smoke.clear(),this.flashes.clear(),this.rings.clear(),this.texts.clear(),this.setAura(0),this.damageT=0,this.rockets.length=0,this.shardsActive=0,this.shards.count=0,this.lightT=0,this.light.intensity=0,this.banner.visible=!1,this.bannerT=-1}}const uo={GOLD:ui,ORANGE:ss};class yS{constructor(){this.ctx=null}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination);const e=this.ctx.sampleRate*2;this.noise=this.ctx.createBuffer(1,e,this.ctx.sampleRate);const n=this.noise.getChannelData(0);for(let i=0;i<e;i++)n[i]=Math.random()*2-1}this.ctx.state==="suspended"&&this.ctx.resume()}_env(t,e,n,i,r){const o=this.ctx.createGain();return o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(i,e+n),o.gain.exponentialRampToValueAtTime(1e-4,e+r),t.connect(o),o.connect(this.master),o}_osc(t,e,n,i,r=.3,o=0){const a=this.ctx.currentTime+o,c=this.ctx.createOscillator();c.type=t,c.frequency.setValueAtTime(e,a),n!==e&&c.frequency.exponentialRampToValueAtTime(n,a+i),this._env(c,a,.005,r,i),c.start(a),c.stop(a+i+.05)}_noise(t,e,n,i,r=.3,o=0){const a=this.ctx.currentTime+o,c=this.ctx.createBufferSource();c.buffer=this.noise;const l=this.ctx.createBiquadFilter();l.type=e,l.frequency.setValueAtTime(n,a),l.frequency.exponentialRampToValueAtTime(i,a+t),c.connect(l),this._env(l,a,.005,r,t),c.start(a),c.stop(a+t+.05)}play(t){if(!(!this.ctx||this.ctx.state!=="running"))switch(t){case"shoot":this._osc("triangle",260,90,.18,.35),this._noise(.12,"highpass",3e3,1500,.15);break;case"body":this._noise(.15,"lowpass",900,200,.4);break;case"hit":this._osc("sine",880,880,.35,.25),this._osc("sine",1320,1320,.35,.15,.04);break;case"destroy":this._osc("sine",660,1320,.4,.3),this._noise(.6,"lowpass",2500,200,.5),this._osc("sine",110,40,.5,.5);break;case"warn":this._osc("sawtooth",140,520,1.2,.08);break;case"launch":this._noise(.6,"bandpass",400,1200,.25);break;case"damage":this._osc("square",120,60,.3,.25),this._noise(.25,"lowpass",1200,300,.3);break;case"shotdown":this._noise(.3,"bandpass",1500,400,.35);break;case"explode":this._noise(1.8,"lowpass",3e3,60,.8),this._osc("sine",90,30,1.6,.7);break;case"bigboom":this._noise(3.5,"lowpass",4e3,40,1),this._osc("sine",70,22,3,.9),this._osc("sawtooth",50,25,1.2,.25);for(let e=0;e<14;e++)this._noise(.06,"highpass",3e3,2e3,.25,.6+Math.random()*2.2);break;case"burn":this._noise(2.4,"bandpass",600,300,.25);break;case"crackle":this._noise(.05,"highpass",2500,1800,.35),this._noise(.04,"highpass",3e3,2e3,.2,.05);break;case"firework":this._noise(.9,"lowpass",1800,80,.55);for(let e=0;e<6;e++)this._noise(.04,"highpass",3500,2500,.15,.25+Math.random()*.8);break;case"whistle":this._osc("sine",900,2400,.9,.06);break;case"charge":this._osc("sawtooth",110,880,2,.08),this._osc("sine",220,1760,2,.12);break;case"victory":[523,659,784,1046,1318].forEach((e,n)=>this._osc("triangle",e,e,1.4,.18,n*.13));break;case"grab":this._osc("sine",300,500,.08,.2),this._noise(.06,"bandpass",1800,900,.12);break;case"nock":this._osc("triangle",900,600,.05,.15);break;case"creak":this._noise(.12,"bandpass",500,350,.06);break;case"click":this._osc("sine",1200,900,.06,.15);break}}}const ai=new b,jr=new b;class MS{constructor(t,e,n){this.effects=e,this.sfx=n,this.enabled=ht.attacks.enabled;const i=new gr(1,16,12),r=new Xe({color:16756800,toneMapped:!1}),o=new ls({map:e.glowTex,color:16730624,blending:Bi,depthWrite:!1,transparent:!0,toneMapped:!1});this.pool=Array.from({length:4},()=>{const a=new Pe,c=new Dt(i,r),l=new us(o);l.scale.setScalar(5);const u=new us(o);return u.scale.setScalar(9),a.add(c,l,u),a.visible=!1,t.add(a),{obj:a,state:"idle",t:0,vel:new b}}),this.timer=ht.attacks.firstDelay}reset(){for(const t of this.pool)t.state="idle",t.obj.visible=!1;this.timer=ht.attacks.firstDelay}get warning(){return this.pool.some(t=>t.state==="charging")}update(t,e,n,i){const r=ht.attacks;let o=!1;if(e&&this.enabled&&(this.timer-=t,this.timer<=0)){this.timer=r.cooldown;const a=n.chestPoint(new b);if(a.distanceTo(i)>=r.minPlayerDistance){const c=this.pool.find(l=>l.state==="idle");c&&(c.state="charging",c.t=0,c.obj.position.copy(a),c.obj.scale.setScalar(.01),c.obj.visible=!0,this.sfx.play("warn"))}}for(const a of this.pool)if(a.state!=="idle")if(a.t+=t,a.state==="charging"){const c=Math.min(1,a.t/r.warningTime);if(a.obj.scale.setScalar(r.radius*(.2+.8*c)*(1+.15*Math.sin(a.t*30))),Math.random()<.5&&this.effects.particles.emit(a.obj.position,1,{color:uo.ORANGE,speed:.6,life:.4,size:.04,radius:r.radius*2,gravity:.5}),!e){this._kill(a);continue}a.t>=r.warningTime&&(ai.set((Math.random()*2-1)*r.maxLateralOffset,(Math.random()*2-1)*r.maxLateralOffset*.5,0),jr.copy(i).add(ai).sub(a.obj.position).normalize(),a.vel.copy(jr).multiplyScalar(r.speed),a.state="flying",a.t=0,this.sfx.play("launch"))}else a.state==="flying"&&(a.obj.position.addScaledVector(a.vel,t),a.obj.scale.setScalar(r.radius*(1+.1*Math.sin(a.t*25))),Math.random()<.6&&this.effects.particles.emit(a.obj.position,1,{color:uo.ORANGE,speed:.2,life:.5,size:.05,gravity:.3}),a.obj.position.distanceTo(i)<r.radius+r.playerRadius?(o=!0,this.effects.fireballBurst(a.obj.position),this._kill(a)):a.t>r.lifetime||!e?this._kill(a):(ai.subVectors(a.obj.position,i),ai.dot(a.vel)>0&&ai.length()>2&&this._kill(a)));return o}segmentTest(t,e){const n=ht.attacks.radius*1.6;for(const i of this.pool){if(i.state!=="flying"&&i.state!=="charging")continue;const r=i.obj.position;ai.subVectors(e,t);const o=ai.lengthSq(),a=o>0?ds.clamp(jr.subVectors(r,t).dot(ai)/o,0,1):0;if(jr.copy(t).addScaledVector(ai,a),jr.distanceTo(r)<n)return{fireball:i,point:r.clone()}}return null}destroy(t){this.effects.fireballBurst(t.obj.position),this._kill(t)}_kill(t){t.state="idle",t.obj.visible=!1}}const Gt=1024,on=720,SS="#ffc94d",bS="#ff7a1a",TS="#ff3b2f",va=new b,Bd=new Fe,Od=new tn;function qn(s,t,e,n,i,r){s.beginPath(),s.moveTo(t+r,e),s.arcTo(t+n,e,t+n,e+i,r),s.arcTo(t+n,e+i,t,e+i,r),s.arcTo(t,e+i,t,e,r),s.arcTo(t,e,t+n,e,r),s.closePath()}function zd(s,t,e){const n=[];for(const i of String(t).split(`
`)){let r="";for(const o of i.split(" ")){const a=r?`${r} ${o}`:o;s.measureText(a).width>e&&r?(n.push(r),r=o):r=a}n.push(r)}return n}function Ca(s,t,e){const n=s.createLinearGradient(0,t,0,e);return n.addColorStop(0,"#fff3c0"),n.addColorStop(.5,"#ffc94d"),n.addColorStop(1,"#ff8c1a"),n}function wS(s){const t=s.createLinearGradient(0,0,Gt,on);return t.addColorStop(0,"#ffe08a"),t.addColorStop(.5,"#c98a24"),t.addColorStop(1,"#ffd36b"),t}function ES(s,t){const e=s.createLinearGradient(140,0,Gt-140,0);e.addColorStop(0,"rgba(255,190,70,0)"),e.addColorStop(.5,"rgba(255,190,70,0.9)"),e.addColorStop(1,"rgba(255,190,70,0)"),s.fillStyle=e,s.fillRect(140,t-1,Gt-280,2),s.save(),s.translate(Gt/2,t),s.rotate(Math.PI/4),s.fillStyle="#ffc94d",s.fillRect(-7,-7,14,14),s.restore()}function AS(s,t,e,n){s.save(),s.translate(t,e),s.fillStyle="rgba(255,200,90,0.85)";for(let i=0;i<8;i++)s.rotate(Math.PI/4),s.beginPath(),s.ellipse(0,-n*.55,n*.22,n*.55,0,0,Math.PI*2),s.fill();s.beginPath(),s.arc(0,0,n*.28,0,Math.PI*2),s.fillStyle="#ff8c1a",s.fill(),s.restore()}function kd(s,t,e){s.save(),s.translate(t,e);const n=s.createRadialGradient(0,-22,2,0,-18,26);n.addColorStop(0,"rgba(255,250,200,1)"),n.addColorStop(.4,"rgba(255,190,60,0.9)"),n.addColorStop(1,"rgba(255,90,0,0)"),s.fillStyle=n,s.beginPath(),s.arc(0,-18,26,0,Math.PI*2),s.fill(),s.fillStyle="#ffe9a0",s.beginPath(),s.moveTo(0,-34),s.quadraticCurveTo(9,-16,0,-8),s.quadraticCurveTo(-9,-16,0,-34),s.fill(),s.fillStyle="#c4621a",s.beginPath(),s.ellipse(0,2,26,11,0,0,Math.PI),s.fill(),s.fillStyle="#e8892c",s.fillRect(-26,-2,52,5),s.restore()}function RS(s,t,e,n,i,r){s.save(),s.translate(t,e),s.beginPath(),s.arc(0,0,n+4,0,Math.PI*2),s.fillStyle=i?"rgba(50,14,8,0.95)":"rgba(255,190,70,0.16)",s.fill(),s.lineWidth=2,s.strokeStyle=i?"rgba(255,70,50,0.8)":"rgba(255,210,110,0.9)",s.stroke(),s.beginPath(),s.moveTo(-n*.7,n*.45),s.lineTo(-n*.75,-n*.35),s.lineTo(-n*.35,n*.05),s.lineTo(0,-n*.6),s.lineTo(n*.35,n*.05),s.lineTo(n*.75,-n*.35),s.lineTo(n*.7,n*.45),s.closePath(),s.fillStyle=i?"#5a2a1a":Ca(s,-n,n),s.fill(),i||(s.fillStyle="#e0242a",s.beginPath(),s.arc(0,n*.12,n*.13,0,Math.PI*2),s.fill()),s.font=`bold ${Math.round(n*.62)}px "Trebuchet MS", sans-serif`,s.fillStyle=i?"#ff5a46":"#fff0c8",s.fillText(i?"X":String(r),0,n*.95+8),s.restore()}function CS(s,t,e,n,i){const r=i==="active",o=i==="hit";s.save(),s.translate(t,e),r&&(s.shadowColor="rgba(255,160,40,1)",s.shadowBlur=22),s.beginPath(),s.arc(0,0,n+4,0,Math.PI*2),s.fillStyle=o?"rgba(50,14,8,0.95)":r?"rgba(255,150,40,0.45)":"rgba(255,190,70,0.08)",s.fill(),s.shadowBlur=0,s.strokeStyle=r?"#ffe08a":"rgba(255,200,90,0.5)",s.lineWidth=r?3:2,s.stroke();for(let a=0;a<12;a++)s.rotate(Math.PI/6),s.beginPath(),s.moveTo(0,n*.25),s.lineTo(0,n*.75),s.stroke();s.beginPath(),s.arc(0,0,n*.22,0,Math.PI*2),s.fillStyle=o?"#ff5a46":r?"#fff3c0":"rgba(255,200,90,0.5)",s.fill(),s.restore(),s.font=`bold ${Math.round(n*.55)}px "Trebuchet MS", sans-serif`,s.fillStyle=o?"#ff5a46":r?"#ffe08a":"rgba(255,220,160,0.6)",s.fillText(o?"X":"NAVEL",t,e+n*.95+8)}class PS{constructor(t){this.canvas=document.createElement("canvas"),this.canvas.width=Gt,this.canvas.height=on,this.g=this.canvas.getContext("2d"),this.texture=new pr(this.canvas),this.texture.colorSpace=xe,this.texture.anisotropy=4;const e=ht.ui.panelWidth;this.mesh=new Dt(new po(e,e*on/Gt),new Xe({map:this.texture,transparent:!0,depthWrite:!1})),this.mesh.renderOrder=30,this.mesh.name="GamePanel",t.add(this.mesh),this.buttons=[],this.hover=null,this.state={}}set(t){this.state=t,this.draw()}setHover(t){t!==this.hover&&(this.hover=t,this.draw())}draw(){const t=this.g,e=this.state;t.clearRect(0,0,Gt,on),t.textAlign="center",t.textBaseline="middle",qn(t,10,10,Gt-20,on-20,40);const n=t.createLinearGradient(0,0,0,on);n.addColorStop(0,"rgba(70,16,6,0.94)"),n.addColorStop(.45,"rgba(32,8,4,0.93)"),n.addColorStop(1,"rgba(14,4,2,0.94)"),t.fillStyle=n,t.fill(),t.save(),t.clip();const i=t.createRadialGradient(Gt/2,40,10,Gt/2,40,520);i.addColorStop(0,"rgba(255,150,40,0.28)"),i.addColorStop(1,"rgba(255,120,20,0)"),t.fillStyle=i,t.fillRect(0,0,Gt,on),t.strokeStyle="rgba(255,190,80,0.06)",t.lineWidth=2;for(let u=120;u<900;u+=70)t.beginPath(),t.arc(Gt/2,on+120,u,0,Math.PI*2),t.stroke();t.restore(),t.lineWidth=6,t.strokeStyle=wS(t),qn(t,10,10,Gt-20,on-20,40),t.stroke(),t.lineWidth=2,t.strokeStyle="rgba(255,200,90,0.55)",qn(t,26,26,Gt-52,on-52,30),t.stroke();for(const[u,h]of[[44,44],[Gt-44,44],[44,on-44],[Gt-44,on-44]])AS(t,u,h,16);kd(t,170,72),kd(t,Gt-170,72),t.font='bold 54px "Trebuchet MS", "Segoe UI", sans-serif',t.shadowColor="rgba(255,140,0,0.8)",t.shadowBlur=18,t.fillStyle=Ca(t,36,84),t.fillText("RAVANA",Gt/2,60),t.shadowBlur=0,t.font='bold 22px "Trebuchet MS", sans-serif',t.fillStyle="#ffb46a",t.fillText("T H E    F I N A L    A R R O W",Gt/2,100),ES(t,124);let r=162;if(e.victory)t.shadowColor="rgba(255,140,0,0.95)",t.shadowBlur=36,t.font='bold 96px "Trebuchet MS", sans-serif',t.fillStyle=Ca(t,165,255),t.fillText("HAPPY DUSSEHRA",Gt/2,212),t.shadowBlur=0,t.font='italic 32px "Trebuchet MS", sans-serif',t.fillStyle="#ffe2b0",t.fillText("Dharma prevails — good triumphs over evil",Gt/2,286),qn(t,Gt/2-220,324,440,96,48),t.fillStyle="rgba(255,190,70,0.14)",t.fill(),t.lineWidth=3,t.strokeStyle="rgba(255,200,90,0.8)",t.stroke(),t.font='bold 24px "Trebuchet MS", sans-serif',t.fillStyle="#ffb46a",t.fillText("FINAL SCORE",Gt/2,350),t.font='bold 46px "Trebuchet MS", sans-serif',t.fillStyle="#fff3cf",t.fillText(String(e.score),Gt/2,392),t.font='27px "Trebuchet MS", sans-serif',t.fillStyle="#f3d9b0",t.fillText(e.stats||"",Gt/2,456);else{if(e.total){t.font='bold 32px "Trebuchet MS", sans-serif',t.textAlign="left",t.fillStyle=e.navel==="active"?"#ffe08a":"#fff1d6",t.fillText(e.navel==="active"?"FINAL TARGET: THE NAVEL":`Heads remaining  ${e.remaining} / ${e.total}`,90,r),t.textAlign="right",t.fillStyle=Ca(t,r-20,r+20),t.fillText(`SCORE  ${e.score??0}`,Gt-90,r),t.textAlign="center",r+=34;const u=90,h=Gt-180,d=20;qn(t,u,r,h,d,10),t.fillStyle="rgba(255,255,255,0.10)",t.fill();const g=(e.total-e.remaining+(e.navel==="hit"?1:0))/(e.total+1);if(g>0){const v=t.createLinearGradient(u,0,u+h,0);v.addColorStop(0,TS),v.addColorStop(.5,bS),v.addColorStop(1,SS),t.save(),t.shadowColor="rgba(255,150,40,0.9)",t.shadowBlur=14,qn(t,u,r,Math.max(20,h*g),d,10),t.fillStyle=v,t.fill(),t.restore()}r+=66;const _=e.total,m=74,p=Gt/2-_*m/2;for(let v=0;v<_;v++)RS(t,p+v*m,r,25,!!e.destroyed?.[v],v+1);CS(t,p+_*m+6,r,25,e.navel),r+=48}if(e.message){t.font='30px "Trebuchet MS", sans-serif',t.fillStyle="#f6e7cf";const u=zd(t,e.message,Gt-170).slice(0,e.total?3:7);u.forEach((h,d)=>t.fillText(h,Gt/2,r+24+d*38)),r+=24+u.length*38}if(e.warning){t.font='bold 25px "Trebuchet MS", sans-serif';const u=zd(t,e.warning,Gt-220).slice(0,2),h=16+u.length*30;qn(t,90,r+4,Gt-180,h,18),t.fillStyle="rgba(200,20,10,0.22)",t.fill(),t.lineWidth=2,t.strokeStyle="rgba(255,80,60,0.7)",t.stroke(),t.fillStyle="#ff8a7a",u.forEach((d,f)=>t.fillText(d,Gt/2,r+4+23+f*30))}}this.buttons=[];const o=e.buttons||[],a=o.length>3?2:1,c=74,l=Math.ceil(o.length/2);o.forEach((u,h)=>{const d=a===2&&h>=l?1:0,f=a===2?d?o.length-l:l:o.length,g=d?h-l:h,_=Math.min(330,(Gt-150-(f-1)*26)/f),m=f*_+(f-1)*26,p=Gt/2-m/2+g*(_+26),v=on-54-c-(a-1-d)*(c+16),y=this.hover===u.id;if(t.save(),y&&(t.shadowColor="rgba(255,170,60,0.95)",t.shadowBlur=26),qn(t,p,v,_,c,c/2),u.primary){const x=t.createLinearGradient(0,v,0,v+c);x.addColorStop(0,y?"#ffe08a":"#ffcf5a"),x.addColorStop(1,y?"#ff9a2e":"#e8761a"),t.fillStyle=x}else t.fillStyle=y?"rgba(255,190,70,0.38)":"rgba(40,12,5,0.85)";t.fill(),t.restore(),t.lineWidth=y?4:2.5,t.strokeStyle=u.primary?"#fff0c0":"rgba(255,200,90,0.9)",qn(t,p,v,_,c,c/2),t.stroke(),t.fillStyle=u.primary?"#2a0e00":"#ffe7bd",t.font=`bold ${_<250?25:29}px "Trebuchet MS", sans-serif`,t.fillText(u.label,p+_/2,v+c/2+1),this.buttons.push({id:u.id,x:p,y:v,w:_,h:c})}),this.texture.needsUpdate=!0}pick(t){if(!this.mesh.visible)return null;const e=t.intersectObject(this.mesh,!1)[0];if(!e)return null;const n=e.uv.x*Gt,i=(1-e.uv.y)*on,r=this.buttons.find(o=>n>=o.x&&n<=o.x+o.w&&i>=o.y&&i<=o.y+o.h);return{id:r?r.id:null,distance:e.distance,point:e.point}}placeInFront(t,{distance:e=ht.ui.distance,down:n=.22,yawOffsetDeg:i=0}={}){t.getWorldPosition(va),t.getWorldQuaternion(Bd),Od.setFromQuaternion(Bd,"YXZ");const r=Od.y+ds.degToRad(i);this.mesh.position.set(va.x-Math.sin(r)*e,va.y-n,va.z-Math.cos(r)*e),this.mesh.rotation.set(-.12,r,0,"YXZ")}}class IS{constructor(t){this.canvas=document.createElement("canvas"),this.canvas.width=256,this.canvas.height=96,this.texture=new pr(this.canvas),this.texture.colorSpace=xe,this.sprite=new us(new ls({map:this.texture,transparent:!0,depthWrite:!1})),this.sprite.scale.set(.5,.1875,1),this.sprite.renderOrder=25,this.sprite.visible=!1,t.add(this.sprite),this.last=""}set(t){if(t===this.last)return;this.last=t;const e=this.canvas.getContext("2d");e.clearRect(0,0,256,96),qn(e,6,8,244,80,40);const n=e.createLinearGradient(0,8,0,88);n.addColorStop(0,"rgba(70,16,6,0.9)"),n.addColorStop(1,"rgba(20,6,3,0.9)"),e.fillStyle=n,e.fill(),e.strokeStyle="#ffc94d",e.lineWidth=4,e.stroke(),e.textAlign="center",e.textBaseline="middle";const i=t.startsWith("NAVEL");e.font=`bold ${i?40:50}px "Trebuchet MS", sans-serif`,e.shadowColor="rgba(255,140,0,0.9)",e.shadowBlur=12,e.fillStyle=i?"#ffe08a":"#ffc94d",e.fillText(t,128,50),this.texture.needsUpdate=!0}}class LS{constructor(){this.root=document.getElementById("overlay"),this.status=document.getElementById("status"),this.diag=document.getElementById("diagnostics"),this.buttons=document.getElementById("buttons")}setStatus(t,e=""){this.status.innerHTML=t,this.status.className=e}addDiag(t,e,n){const i=document.createElement("li");i.className=n===!0?"ok":n===!1?"bad":"info",i.innerHTML=`<span>${t}</span><b>${e}</b>`,this.diag.appendChild(i)}addButton(t,e,n=!1){const i=document.createElement("button");return i.textContent=t,n&&(i.className="primary"),i.addEventListener("click",e),this.buttons.appendChild(i),i}hide(){this.root.classList.add("hidden")}show(){this.root.classList.remove("hidden")}}const nl=new yt,il=new b,Hd=new b,DS=new wn(new b(0,1,0),0),Xn=[new b,new b,new b,new b,new b],Vd=new b,Gd=["middle","ring"].flatMap(s=>["phalanx-proximal","phalanx-intermediate","phalanx-distal","tip"].map(t=>`${s}-finger-${t}`));function Wd(s,t){t.set(0,0,0);for(const e of Gd){if(!Bn(s,e,Vd))return null;t.add(Vd)}return t.multiplyScalar(1/Gd.length)}function Bn(s,t,e){const n=s.hand?.joints?.[t];return!n||!n.visible?null:(n.updateMatrixWorld(!0),e.setFromMatrixPosition(n.matrixWorld))}async function US(){const s=navigator.userAgent,t={secure:window.isSecureContext,webxr:"xr"in navigator,ar:!1,vr:!1,questBrowser:/OculusBrowser/i.test(s),quest:/Quest/i.test(s),ua:s};if(t.webxr){try{t.ar=await navigator.xr.isSessionSupported("immersive-ar")}catch(e){t.arError=e.message}try{t.vr=await navigator.xr.isSessionSupported("immersive-vr")}catch(e){t.vrError=e.message}}return console.log("[xr] capabilities",t),t}class NS{constructor(t,e,n){this.renderer=t,this.scene=e,this.h=n,this.session=null,this.info=null,this.pointers=[],this.anchor=null,this.pendingAnchor=null;const i=new _e().setFromPoints([new b(0,0,0),new b(0,0,-1)]);for(let r=0;r<2;r++){const o=t.xr.getController(r),a=new mo(i,new fr({color:16763213,transparent:!0,opacity:.75}));a.scale.z=3,o.add(a);const c=new Dt(new gr(.008,8,6),new Xe({color:16770984}));o.add(c),e.add(o);const l=t.xr.getControllerGrip(r);e.add(l);const u=t.xr.getHand(r);e.add(u);const h={index:r,controller:o,grip:l,hand:u,line:a,connected:!1,isHand:!1,fist:!1,pinch:!1,handedness:"none",inputSource:null,hitTestSource:null,lastHit:null};o.addEventListener("connected",d=>this._onConnected(h,d.data)),o.addEventListener("disconnected",()=>this._onDisconnected(h)),o.addEventListener("selectstart",()=>this.h.onSelect?.(h)),o.addEventListener("selectend",()=>this.h.onSelectEnd?.(h)),o.addEventListener("squeezestart",()=>this.h.onSqueeze?.(h)),o.addEventListener("squeezeend",()=>this.h.onSqueezeEnd?.(h)),this.pointers.push(h)}}async start(t){const e={requiredFeatures:["local-floor"],optionalFeatures:["hit-test","anchors","plane-detection","hand-tracking","bounded-floor"]},n=await navigator.xr.requestSession(t,e);this.session=n,this.renderer.xr.setReferenceSpaceType("local-floor"),await this.renderer.xr.setSession(n),this.renderer.xr.setFoveation?.(1);try{n.supportedFrameRates?.includes(72)&&await n.updateTargetFrameRate(72)}catch{}const i=n.enabledFeatures?[...n.enabledFeatures]:null,r=n.environmentBlendMode||"unknown";this.info={mode:t,environmentBlendMode:r,passthrough:t==="immersive-ar"&&(r==="alpha-blend"||r==="additive"),enabledFeatures:i,hitTest:i?i.includes("hit-test"):typeof n.requestHitTestSource=="function",anchors:i?i.includes("anchors"):!1},console.log("[xr] session started",this.info),this.renderer.xr.getReferenceSpace()?.addEventListener?.("reset",()=>this.h.onReferenceReset?.()),n.addEventListener("end",()=>{this.session=null,this.anchor=null;for(const a of this.pointers)this._onDisconnected(a);this.h.onEnd?.()});for(const a of this.pointers)a.connected&&!a.hitTestSource&&a.inputSource&&this._onConnected(a,a.inputSource);return this.info}async _onConnected(t,e){if(t.connected=!0,t.inputSource=e,t.handedness=e.handedness,t.isHand=!!e.hand,t.fist=!1,t.line.visible=e.targetRayMode==="tracked-pointer",console.log(`[xr] input connected: ${e.handedness} ${e.targetRayMode} profiles=${e.profiles?.join(",")}`),this.session&&this.info?.hitTest&&this.session.requestHitTestSource)try{t.hitTestSource=await this.session.requestHitTestSource({space:e.targetRaySpace})}catch(n){console.warn("[xr] hit-test source failed for",e.handedness,n)}this.h.onConnected?.(t)}_onDisconnected(t){t.fist&&this.h.onFistEnd?.(t),t.fist=!1,t.connected=!1,t.hitTestSource?.cancel?.(),t.hitTestSource=null,t.inputSource=null}pointerByHand(t){return this.pointers.find(e=>e.connected&&e.handedness===t)||this.pointers.find(e=>e.connected)||null}updateHands(){for(const t of this.pointers){if(!t.connected||!t.isHand)continue;const e=Bn(t,"wrist",Xn[0]);let n=0,i=0;if(e)for(const u of["middle","ring","pinky"]){const h=Bn(t,`${u}-finger-tip`,Xn[1]),d=Bn(t,`${u}-finger-phalanx-proximal`,Xn[2]);!h||!d||(n+=h.distanceTo(e)/Math.max(1e-4,d.distanceTo(e)),i++)}const r=i===3,o=r?n/i:99;t.curl=o;const a=Bn(t,"thumb-tip",Xn[3]),c=Bn(t,"index-finger-tip",Xn[4]);t.pinchDist=a&&c?a.distanceTo(c):1;const l=t.fist?r&&o<ht.hands.fistCurlOpen:r&&o<ht.hands.fistCurlClose;l!==t.fist&&(t.fist=l,l?this.h.onFist?.(t):this.h.onFistEnd?.(t))}}fistPose(t,e,n){const i=Bn(t,"wrist",Xn[0]),r=Bn(t,"index-finger-phalanx-proximal",Xn[1]),o=Bn(t,"pinky-finger-phalanx-proximal",Xn[2]);if(!i||!r||!o||!Wd(t,e))return!1;const a=new b().subVectors(r,o).normalize(),l=new b().addVectors(r,o).multiplyScalar(.5).sub(i);l.addScaledVector(a,-l.dot(a)).normalize();const u=l.negate(),h=new b().crossVectors(a,u).normalize(),d=new b().crossVectors(u,h);return n.setFromRotationMatrix(new yt().makeBasis(h,d,u)),!0}handPosition(t,e,n="fist"){if(t.isHand){if(n==="pinch"){const r=Bn(t,"thumb-tip",Xn[0]),o=Bn(t,"index-finger-tip",Xn[1]);if(r&&o)return e.copy(r).add(o).multiplyScalar(.5)}if(Wd(t,e))return e}const i=t.grip&&t.grip.visible?t.grip:t.controller;return i.updateMatrixWorld(!0),e.setFromMatrixPosition(i.matrixWorld)}ray(t,e,n){t.controller.updateMatrixWorld(!0),e.setFromMatrixPosition(t.controller.matrixWorld),n.set(0,0,-1).transformDirection(t.controller.matrixWorld)}floorHit(t,e){if(t.hitTestSource&&e){const r=e.getHitTestResults(t.hitTestSource),o=this.renderer.xr.getReferenceSpace();for(const a of r){const c=a.getPose(o);if(!c)continue;if(nl.fromArray(c.transform.matrix),nl.elements[5]>.8)return{position:new b().setFromMatrixPosition(nl),source:"hit-test",result:a}}}this.ray(t,il,Hd);const i=new Hi(il,Hd).intersectPlane(DS,new b);return i&&i.distanceTo(il)<ht.ravana.maxPlaceDistance?{position:i,source:"floor-plane",result:null}:null}requestAnchor(t,e){this.anchor?.delete?.(),this.anchor=null,this.info?.anchors&&(this.pendingAnchor={position:t.clone(),hitResult:e})}updateAnchor(t){if(!t)return null;const e=this.renderer.xr.getReferenceSpace();if(this.pendingAnchor){const{position:n,hitResult:i}=this.pendingAnchor;this.pendingAnchor=null;const r=i?.createAnchor?i.createAnchor():t.createAnchor?.(new XRRigidTransform({x:n.x,y:n.y,z:n.z}),e);Promise.resolve(r).then(o=>{o&&(this.anchor=o,console.log("[xr] anchor created"))}).catch(o=>console.warn("[xr] anchor creation failed (placement stays in local-floor space)",o))}if(this.anchor&&t.trackedAnchors?.has(this.anchor)){const n=t.getPose(this.anchor.anchorSpace,e);if(n)return new b(n.transform.position.x,n.transform.position.y,n.transform.position.z)}return null}end(){this.session?.end()}}const rn=new b,ns=new b,FS=new b,Xd=new yt,gn=new Fe,BS=new b,ya=new tn;class OS{constructor(t,e,n,{onFire:i,sfx:r,haptic:o}){this.bow=t,this.xr=e,this.camera=n,this.onFire=i,this.sfx=r,this.haptic=o,this.holder=null,this.holdButton=null,this.drawer=null,this.drawButton=null,this.lastTick=0,this.restPos=new b,this.restQuat=new Fe,this.ctrlOffset=new b,this.ctrlOffsetQuat=new Fe,this.desktopDrawT=0}get drawing(){return!!this.drawer}placeAtRest(){this.holder=null,this.cancelDraw(),this.camera.getWorldPosition(rn),this.camera.getWorldQuaternion(gn),ya.setFromQuaternion(gn,"YXZ");const t=ht.bow.restDistance;this.restPos.set(rn.x-Math.sin(ya.y)*t,rn.y-.4,rn.z-Math.cos(ya.y)*t),this.restQuat.setFromEuler(new tn(0,ya.y+.35,0,"YXZ")),this.bow.setPose(this.restPos,this.restQuat)}_hand(t,e,n){return this.xr.handPosition(t,e,n==="select"?"pinch":"fist")}fistStart(t){return this._press(t,"fist")}fistEnd(t){this._unpress(t,"fist")}squeezeStart(t){return this._press(t,"squeeze")}squeezeEnd(t){this._unpress(t,"squeeze")}selectStart(t){return this._press(t,"select")}selectEnd(t){this._unpress(t,"select")}_press(t,e){return this.holder?t===this.holder||this.drawer?!1:this._hand(t,rn,e).distanceTo(this.bow.nockWorld(ns))<ht.bow.stringGrabRadius?(this.drawer=t,this.drawButton=e,this.bow.setDraw(0,!0),this.sfx.play("nock"),this.haptic(t,.4,30),!0):!1:t.isHand&&e!=="fist"?!1:this._hand(t,rn,e).distanceTo(this.bow.gripWorld(ns))<ht.bow.grabRadius?(this.holder=t,this.holdButton=e,this.sfx.play("grab"),this.haptic(t,.5,40),!0):!1}_unpress(t,e){t===this.drawer&&e===this.drawButton?this.release():t===this.holder&&e===this.holdButton&&(this.cancelDraw(),this.holder=null,this.restPos.copy(this.bow.group.position),this.restQuat.copy(this.bow.group.quaternion))}release(){const t=this.bow.draw,e=this.drawer;if(this.drawer=null,this.drawButton=null,t>=ht.bow.minDraw&&this.bow.cooldown<=0){const n=t/ht.bow.maxDraw,i=ht.arrows.minSpeed+(ht.arrows.speed-ht.arrows.minSpeed)*n;this.onFire(i,n),this.bow.cooldown=ht.bow.fireCooldown,this.haptic(this.holder,.3+.6*n,60),this.haptic(e,.5,30)}this.bow.setDraw(0,!1)}cancelDraw(){this.drawer=null,this.drawButton=null,this.desktopDrawT=0,this.bow.nocked&&this.bow.setDraw(0,!1)}update(t){const e=this.bow;if(!this.holder||!this.holder.connected){this.holder&&(this.holder=null),this.drawer&&this.cancelDraw(),this.camera.getWorldPosition(rn),this.restPos.distanceTo(rn)>1.6&&this.placeAtRest(),e.setPose(this.restPos,this.restQuat),e.group.scale.setScalar(1);return}let n;if(this.holder.isHand)this.xr.fistPose(this.holder,rn,gn)?(this.lastFistPos=(this.lastFistPos||new b).copy(rn),this.lastFistQuat=(this.lastFistQuat||new Fe).copy(gn)):this.lastFistPos&&(rn.copy(this.lastFistPos),gn.copy(this.lastFistQuat)),ns.fromArray(ht.hands.bowOffset).applyQuaternion(gn),n=rn.add(ns);else{const i=this.holder.controller;i.updateMatrixWorld(!0),i.matrixWorld.decompose(rn,gn,BS),ns.fromArray(ht.bow.position).applyQuaternion(gn),n=rn.add(ns)}if(e.group.scale.setScalar(1),this.drawer&&this.drawer.connected){const i=this._hand(this.drawer,FS,this.drawButton),r=ns.subVectors(n,i),o=r.length();if(o>.05){const c=r.divideScalar(o),l=new b(0,1,0).applyQuaternion(gn),u=c.clone().negate(),h=new b().crossVectors(l,u);h.lengthSq()<1e-4&&h.set(1,0,0).applyQuaternion(gn),h.normalize();const d=new b().crossVectors(u,h);Xd.makeBasis(h,d,u),gn.setFromRotationMatrix(Xd)}e.setPose(n,gn);const a=e.draw;e.setDraw(o-e.brace,!0),Math.floor(e.draw/.04)!==Math.floor(a/.04)&&(this.haptic(this.drawer,.12+.3*(e.draw/ht.bow.maxDraw),12),e.draw>a&&this.sfx.play("creak"))}else this.drawer&&this.cancelDraw(),e.setPose(n,gn)}desktopPress(){this.drawer={desktop:!0},this.drawButton="mouse",this.desktopDrawT=0,this.bow.setDraw(0,!0),this.sfx.play("nock")}desktopUpdate(t){this.drawer?.desktop&&(this.desktopDrawT+=t,this.bow.setDraw(Math.min(1,this.desktopDrawT/.9)*ht.bow.maxDraw,!0))}desktopRelease(){this.drawer?.desktop&&this.release()}}const Ce=new bv({antialias:!0,alpha:!0});Ce.setPixelRatio(Math.min(window.devicePixelRatio,2));Ce.setSize(window.innerWidth,window.innerHeight);Ce.setClearColor(0,0);Ce.toneMapping=Jd;Ce.localClippingEnabled=!0;Ce.xr.enabled=!0;document.getElementById("app").appendChild(Ce.domElement);const Re=new Cf,he=new Ke(60,window.innerWidth/window.innerHeight,.03,100);he.position.set(0,1.6,0);Re.add(he);const zS=new Wl(Ce);Re.environment=zS.fromScene(new jy,.04).texture;Re.add(new Kv(16773596,3810324,.7));const Jf=new kf(16777215,1.4);Jf.position.set(1.5,4,2.5);Re.add(Jf);const kS=new lt(1380364),Qf=new hy(20,40,7031330,2957334);Re.add(Qf);const Ni=new Dt(new qa(.22,.27,40).rotateX(-Math.PI/2),new Xe({color:16763213,transparent:!0,opacity:.9,depthTest:!1}));Ni.renderOrder=15;Ni.visible=!1;Re.add(Ni);const ye=new LS,me=new yS,pe=new vS(Re,he),st=new uS(Re),Se=new dS(Re),Yn=new PS(Re),Jr=new IS(Re),un=new MS(Re,pe,me);let ps=null;const q={state:"loading",mode:"none",score:0,shots:0,headHits:0,message:"",compatWarning:"",finaleT:0,placeYawOffset:0,placement:null,activePointer:null,panelPlacePending:0};window.RAVANA={game:q,ravana:st,bow:Se,CONFIG:ht,effects:pe,camera:he,scene:Re,fireballs:un,get arrows(){return ps}};const dn=new NS(Ce,Re,{onSelect:s=>ep(s),onSelectEnd:s=>we.selectEnd(s),onSqueeze:s=>{me.unlock(),q.activePointer=s,(q.state==="ready"||q.state==="battle")&&we.squeezeStart(s)},onSqueezeEnd:s=>we.squeezeEnd(s),onFist:s=>{me.unlock(),(q.state==="ready"||q.state==="battle")&&we.fistStart(s)},onFistEnd:s=>we.fistEnd(s),onConnected:s=>{q.activePointer||(q.activePointer=s),Gn()},onReferenceReset:()=>{!dn.anchor&&q.state!=="placing"&&(q.message="Tracking origin was reset. If Ravana moved, press Reposition.",Gn())},onEnd:()=>{q.mode="none",xo(),ye.show(),ye.setStatus("Immersive session ended. You can enter again.","")}}),we=new OS(Se,dn,he,{onFire:s=>Iu(s),sfx:me,haptic:(s,t,e)=>_o(s,t,e)});window.RAVANA.archery=we;window.RAVANA.renderer=Ce;window.RAVANA.step=(s=1/60)=>ip(au+s*1e3,null);const Pu=new At(0,0),Na={desktop:!0,handedness:"mouse",controller:null},$n=new mo(new _e().setFromPoints([new b,new b(0,0,-1)]),new fr({color:16763213,transparent:!0,opacity:.6}));$n.visible=!1;Re.add($n);const hs=new Hf,hn=new b,Ze=new b,je=new b,Fa=new b,ur=new yt,qd=new Fe,ms=new b(0,1,0);function Ba(s,t,e){s.desktop?(hs.setFromCamera(Pu,he),t.copy(hs.ray.origin),e.copy(hs.ray.direction)):dn.ray(s,t,e)}function Oa(){return st.liveTargets().length}function Gn(){const s=q.state,t={total:st.targets.length,remaining:Oa(),destroyed:st.targets.map(n=>n.destroyed),score:q.score,navel:st.navel?.hit?"hit":st.navel?.active?"active":"hidden",warning:[q.compatWarning,st.hitboxWarning].filter(Boolean).join(" ")},e={id:"hitboxes",label:`Hitboxes: ${st.debugVisible?"ON":"OFF"}`};if(s==="loading")Yn.set({message:"Loading…"});else if(s==="placing"){const n=q.mode==="desktop",i=q.placement?.source==="hit-test"?"real floor (WebXR hit test)":n?"preview floor":"runtime floor plane (local-floor, y = 0)";Yn.set({...t,total:0,message:(n?"Click the floor where Ravana should stand.":"Point at the floor where Ravana should stand and pull the trigger. Thumbstick ↕ height, ↔ turn.")+`
Height: ${st.height.toFixed(2)} m · Floor: ${q.placement?i:"searching…"}`,buttons:[{id:"heightDown",label:"Height −"},{id:"heightUp",label:"Height +"},{id:"resetPlace",label:"Reset size"}]})}else if(s==="ready"){const n=Oa()<st.targets.length;Yn.set({...t,message:q.message||`Ravana stands ${st.height.toFixed(1)} m tall. ${tp()} Practice shots are allowed before the battle.`,buttons:[{id:"start",label:n?"Resume Battle":"Start Battle",primary:!0},{id:"reposition",label:"Reposition Ravana"},{id:"attacks",label:`Fireballs: ${un.enabled?"ON":"OFF"}`},e]})}else if(s==="battle"||s==="finale")Yn.set({...t,message:s==="finale"?"BRAHMASTRA!":q.message,warning:un.warning?"⚠ FIREBALL INCOMING — shoot it down or lean aside!":t.warning,buttons:s==="finale"?[]:[{id:"restart",label:"Restart"},{id:"reposition",label:"Reposition"},e]});else if(s==="victory"){const n=q.shots?Math.round(q.headHits/q.shots*100):0;Yn.set({victory:!0,score:q.score,stats:`${st.targets.length} heads + navel in ${q.shots} arrows · accuracy ${n}%`,buttons:[{id:"restart",label:"Restart",primary:!0},{id:"reposition",label:"Reposition Ravana"}]})}}function tp(){return q.mode==="desktop"?"Hold the left mouse button to draw the string, release to shoot.":dn.pointers.some(s=>s.connected&&s.isHand)?"Close your FIST on the floating bow to hold it. With your other hand make a fist (or pinch) at the string, pull back and open your hand to shoot.":"Grab the floating bow with the GRIP button. With your other hand squeeze GRIP at the string, pull back and let go to shoot."}function HS(){(q.state==="ready"||q.state==="battle")&&!we.holder&&q.mode!=="desktop"&&we.placeAtRest(),q.state==="battle"||q.state==="finale"?Yn.placeInFront(he,{yawOffsetDeg:38,down:.4,distance:1.35}):Yn.placeInFront(he,{down:.22})}function vi(s){q.state=s,Ni.visible=!1,Se.group.visible=s==="ready"||s==="battle",Jr.sprite.visible=s==="battle"||s==="ready",q.panelPlacePending=Ce.xr.isPresenting?3:1,Gn()}function ou(s){switch(me.play("click"),s){case"heightUp":st.setHeight(st.height+ht.ravana.heightStep);break;case"heightDown":st.setHeight(st.height-ht.ravana.heightStep);break;case"resetPlace":st.setHeight(ht.ravana.defaultHeight),q.placeYawOffset=0;break;case"start":q.message=`Destroy all ten heads! ${tp()}`,un.timer=ht.attacks.firstDelay,vi("battle");return;case"reposition":we.cancelDraw(),(q.state==="victory"||q.state==="finale")&&jd(!1),ps.clear(),un.reset(),vi("placing");return;case"restart":jd(!0);return;case"attacks":un.enabled=!un.enabled;break;case"hitboxes":st.setDebugVisible(!st.debugVisible);break}Gn()}function jd(s){ps.clear(),pe.clear(),un.reset(),st.resetTargets(),q.score=0,q.shots=0,q.headHits=0,q.message="",s&&vi("ready")}function ep(s){if(me.unlock(),!s.desktop&&(s===we.holder||s===we.drawer))return;q.activePointer=s,Ba(s,hn,Ze),hs.set(hn,Ze);const t=Yn.pick(hs);if(t){t.id&&ou(t.id);return}q.state==="placing"?VS():(q.state==="ready"||q.state==="battle")&&(s.desktop?we.desktopPress():we.selectStart(s))}function VS(){q.placement&&(st.place(q.placement.position,null),dn.requestAnchor(q.placement.position,q.placement.result),q.message="",vi("ready"),console.log(`[game] Ravana placed at ${q.placement.position.toArray().map(s=>s.toFixed(2))} (${q.placement.source}), height ${st.height} m`))}function Iu(s){Se.getFireRay(hn,Ze),ps.fire(hn,Ze,s),q.state==="battle"&&q.shots++,me.play("shoot")}function _o(s,t,e){s?.inputSource?.gamepad?.hapticActuators?.[0]?.pulse?.(t,e)}Ce.domElement.addEventListener("pointermove",s=>{Pu.set(s.clientX/window.innerWidth*2-1,-(s.clientY/window.innerHeight)*2+1),an.active&&(an.yaw-=(s.clientX-an.x)*.004,an.pitch=ds.clamp(an.pitch-(s.clientY-an.y)*.004,-1.2,1.2),an.x=s.clientX,an.y=s.clientY)});const an={active:!1,x:0,y:0,yaw:0,pitch:-.05};Ce.domElement.addEventListener("pointerdown",s=>{q.mode==="desktop"&&(s.button===2?Object.assign(an,{active:!0,x:s.clientX,y:s.clientY}):s.button===0&&(Pu.set(s.clientX/window.innerWidth*2-1,-(s.clientY/window.innerHeight)*2+1),ep(Na)))});window.addEventListener("pointerup",s=>{an.active=!1,q.mode==="desktop"&&s.button===0&&we.desktopRelease()});Ce.domElement.addEventListener("contextmenu",s=>s.preventDefault());Ce.domElement.addEventListener("wheel",s=>{q.mode==="desktop"&&(he.getWorldDirection(je).setY(0).normalize(),he.position.addScaledVector(je,-Math.sign(s.deltaY)*.4))});window.addEventListener("keydown",s=>{q.mode==="desktop"&&((s.key==="h"||s.key==="H")&&ou("hitboxes"),(s.key==="r"||s.key==="R")&&ou("restart"),s.key==="Escape"&&(q.mode="none",xo(),ye.show()))});window.addEventListener("resize",()=>{he.aspect=window.innerWidth/window.innerHeight,he.updateProjectionMatrix(),Ce.setSize(window.innerWidth,window.innerHeight)});function GS(s,t){if(q.state!=="battle")return null;const e=un.segmentTest(s,t),n=st.segmentTest(s,t);return e&&(!n||s.distanceTo(e.point)<s.distanceTo(n.point))?(un.destroy(e.fireball),ho(ht.scoring.fireballShot,e.point,"#ffb347"),me.play("shotdown"),q.message="Fireball destroyed!",Gn(),{point:e.point}):n?n.type==="head"?(WS(n.target,n.point),{point:n.point}):n.type==="navel"?(qS(n.point),{point:n.point}):(pe.bodyHit(n.point),me.play("body"),{point:n.point,stickTo:st.root}):null}function WS(s,t){const e=st.registerHit(s),n=st.worldCenter(s,new b),i=st.height/2.5;if(q.headHits++,_o(we.holder,.8,80),e){pe.hit(t,i),pe.destroy(n,i),ho(ht.scoring.headDestroyed,je.copy(n).addScaledVector(ms,.25*i),"#ffd34d"),me.play("destroy");const r=Oa();q.message=r?`Head ${s.index+1} destroyed! ${r} remaining.`:"All ten heads destroyed!",console.log(`[game] target ${s.index+1} (${s.name}) destroyed. Remaining ${r}`),r===0&&XS()}else pe.hit(t,i),ho(ht.scoring.headHit,je.copy(n).addScaledVector(ms,.2*i),"#ffb347"),me.play("hit"),q.message=`Head ${s.index+1} hit (${s.hits}/${ht.hitboxes.hitsPerTarget}).`;Gn()}function XS(){st.setNavelActive(!0);const s=st.navelWorld(new b);pe.flash(s,uo.GOLD,.6,.6),pe.ring(s,uo.ORANGE,.5,.9),me.play("warn"),q.message="All ten heads destroyed! Ravana's immortality lies in his NAVEL — strike it to end him!",console.log("[game] navel phase — final target revealed"),Gn()}function qS(s){st.navel.hit=!0,st.setNavelActive(!1),q.headHits++;const t=st.navelWorld(new b),e=st.height/2.5;pe.hit(s,e*1.4),pe.destroy(t,e*1.6),ho(ht.navel.score,je.copy(t).addScaledVector(ms,.3*e),"#ffe08a"),me.play("destroy"),_o(we.holder,1,120),q.message="The navel is pierced!",console.log("[game] navel hit — Brahmastra"),jS()}function ho(s,t,e){q.score=Math.max(0,q.score+s),pe.floatText(t,s>0?`+${s}`:`${s}`,e)}function jS(){q.finaleT=0,q.exploded=!1,un.reset(),we.cancelDraw(),vi("finale"),Se.group.visible=!1;const s=st.root.scale.x,t=st.modelBox,e=Math.max(t.max.x-t.min.x,t.max.z-t.min.z)*.5*s*.85;pe.startAura(st.root.position,e,st.height*1.15),q.finaleRadius=e,me.play("charge")}const $S=[5.4,5.9,6.5,7,7.6,8.3];function YS(s){const t=q.finaleT,e=q.finaleT+=s,n=st.height,i=Math.max(1,n/4),r=new b(st.root.position.x,st.floorY,st.root.position.z),o=a=>t<a&&e>=a;if(e<1.8){const a=e/1.8;st.setFinale(a*.55,0),pe.setAura(a);for(let c=0;c<4;c++){const l=Math.random()*Math.PI*2;je.set(r.x+Math.cos(l)*q.finaleRadius,r.y+Math.random()*n*.3,r.z+Math.sin(l)*q.finaleRadius),pe.particles.emit(je,1,{color:uo.GOLD,speed:.3,up:(1.5+a*2)*i,life:1.2,size:.05*i,gravity:.5,drag:.5})}}else if(e<4.6){o(1.8)&&(me.play("burn"),q.message="The effigy of Ravana burns!",Gn());const a=(e-1.8)/2.8;st.setFinale(.12+.18*a+.1*Math.random(),0,[1,.22,.02]),pe.setAura(Math.max(0,1-a*2)),o(3.2)&&me.play("burn"),pe.burn(l=>st.surfacePoint(l),n,.6+a*1.6)&&(pe.crackerPop(st.surfacePoint(je),n),me.play("crackle"))}else if(!q.exploded){q.exploded=!0;const a=st.chestPoint(new b);st.root.visible=!1,pe.setAura(0),pe.bigExplosion(a,st.floorY,n),me.play("bigboom");for(const c of dn.pointers)_o(c,1,400);console.log("[game] Ravana explodes")}for(const a of $S)o(a)&&np(r,n,i,1+(Math.random()<.5?1:0));o(5.8)&&(pe.showBanner(new b(r.x,r.y+n*1.05+.5,r.z),Math.max(3.2,n*1.5)),me.play("victory")),e>6.6&&(q.fireworkTimer=1.2,vi("victory"),console.log(`[game] VICTORY — score ${q.score}, shots ${q.shots}`))}function np(s,t,e,n){for(let i=0;i<n;i++){const r=s.clone().add(new b((Math.random()-.5)*t*.5,0,(Math.random()-.5)*t*.5));pe.firework(r,t*1.3+2,e)}me.play("whistle")}function KS(s){if(q.mode==="desktop"){he.updateMatrixWorld(!0),hn.set(.2,-.2,-.65).applyMatrix4(he.matrixWorld),Se.group.scale.setScalar(.55),Ba(Na,je,Ze);const t=st.root.visible?st.rayTest(je,Ze,90):null,e=Fa.copy(je).addScaledVector(Ze,t?t.distance:15);ur.lookAt(hn,e,ms),qd.setFromRotationMatrix(ur),Se.setPose(hn,qd),we.desktopUpdate(s)}else we.update(s);Se.group.visible=q.state==="ready"||q.state==="battle"}function ZS(){if(!we.drawing){$n.visible=!1;return}Se.getFireRay(hn,Ze);const s=st.rayTest(hn,Ze,90);s?.type==="head"&&(s.target.aimed=!0),s?.type==="navel"&&(st.navel.aimed=!0),$n.visible=!0,$n.position.copy(hn),$n.quaternion.setFromUnitVectors(new b(0,0,-1),Ze),$n.scale.z=s?s.distance:6,$n.material.opacity=.25+.5*(Se.draw/ht.bow.maxDraw)}function JS(s){let t=null;const e=q.mode==="desktop"?[Na]:dn.pointers.filter(n=>n.connected);for(const n of e){Ba(n,hn,Ze),hs.set(hn,Ze);const i=Yn.pick(hs);if(i?.id&&(t=i.id),!n.desktop){const r=q.state==="ready"||q.state==="battle";n.line.visible=!r||!!i&&n!==we.drawer,n.line.scale.z=i?i.distance:3}}if(Yn.setHover(t),q.state==="placing"){const n=q.mode==="desktop"?Na:q.activePointer||e[0];let i=null;if(n)if(n.desktop){Ba(n,hn,Ze);const a=new Hi(hn,Ze).intersectPlane(new wn(ms,0),new b);a&&(i={position:a,source:"desktop",result:null})}else i=dn.floorHit(n,s);const r=!!q.placement,o=q.placement?.source;if(q.placement=i,i){Ni.visible=!0,Ni.position.copy(i.position),he.getWorldPosition(Fa),Ni.scale.setScalar(Math.max(1,i.position.distanceTo(Fa)*.12)*Math.max(1,st.height/4));const a=n?.inputSource?.gamepad?.axes;if(a&&a.length>=4){const c=Math.abs(a[2])>.3?a[2]:0,l=Math.abs(a[3])>.3?a[3]:0;l&&st.setHeight(st.height-l*Math.max(1.5,st.height*.6)*q.dt),c&&(q.placeYawOffset-=c*2*q.dt),(c||l)&&(q.placeDirty=!0)}he.getWorldPosition(je),st.place(i.position,je),st.root.rotation.y+=q.placeYawOffset}else Ni.visible=!1;(r!==!!i||o!==i?.source||q.placeDirty)&&(q.placeDirty=!1,Gn())}}let au=performance.now(),sl=0,$d=!1;function ip(s,t){const e=Math.min(.05,(s-au)/1e3||0);if(au=s,sl+=e,q.dt=e,q.mode==="desktop"&&(he.rotation.set(an.pitch,an.yaw,0,"YXZ"),he.updateMatrixWorld(!0)),q.state!=="loading"&&q.mode!=="none"){if(q.panelPlacePending>0&&--q.panelPlacePending===0&&HS(),t&&q.state!=="placing"){const n=dn.updateAnchor(t);n&&(st.floorY=n.y,st.root.position.set(n.x,n.y-(st.sink||0),n.z))}if(dn.updateHands(),JS(t),st.update(e,sl),q.state==="ready"||q.state==="battle"?(KS(e),ZS()):$n.visible=!1,Se.update(e),ps&&ps.update(e,GS),he.getWorldPosition(je),un.update(e,q.state==="battle",st,je)){pe.playerDamage(),me.play("damage"),ho(ht.scoring.playerHit,Fa.copy(je).addScaledVector(he.getWorldDirection(Ze),.8),"#ff5a3a");for(const n of dn.pointers)_o(n,1,200);q.message="You were hit by a fireball!",Gn()}if(un.warning!==$d&&($d=un.warning,Gn()),q.state==="finale"&&YS(e),Jr.sprite.visible&&st.root.visible){Jr.set(st.navel?.active?"NAVEL!":`${Oa()}/${st.targets.length}`),st.topPoint(Jr.sprite.position);const n=.5*Math.max(1,st.height/2.5);Jr.sprite.scale.set(n,n*.375,1)}}if(q.state==="victory"&&q.mode!=="none"&&(q.fireworkTimer-=e,q.fireworkTimer<=0)){q.fireworkTimer=1.4+Math.random()*1.2;const n=st.height;np(new b(st.root.position.x,st.floorY,st.root.position.z),n,Math.max(1,n/4),1)}pe.update(e,sl,Ce,me),Ce.render(Re,he)}window.RAVANA.shootAt=s=>{const t=st.targets[s-1];if(!t||q.state!=="battle")return"not in battle / no such target";const e=st.worldCenter(t,new b);return Se.setDraw(ht.bow.maxDraw,!0),ur.lookAt(Se.group.position,e,ms),Se.group.quaternion.setFromRotationMatrix(ur),Iu(ht.arrows.speed),Se.setDraw(0,!1),`fired at ${t.name}`};window.RAVANA.shootNavel=()=>{if(!st.navel.active||q.state!=="battle")return"navel not active";const s=st.navelWorld(new b);return Se.setDraw(ht.bow.maxDraw,!0),ur.lookAt(Se.group.position,s,ms),Se.group.quaternion.setFromRotationMatrix(ur),Iu(ht.arrows.speed),Se.setDraw(0,!1),"fired at navel"};function xo(){const s=q.mode==="immersive-ar"&&dn.info?.passthrough;Re.background=s?null:kS,Qf.visible=!s,$n.visible=!1;for(const t of dn.pointers)t.controller.visible=q.mode.startsWith("immersive")}async function Yd(s){me.unlock();try{const t=await dn.start(s);q.mode=s,s==="immersive-vr"?q.compatWarning="VR TEST MODE — no passthrough. This is NOT mixed reality.":t.passthrough?q.compatWarning="":q.compatWarning=`Passthrough not active (environmentBlendMode = "${t.environmentBlendMode}"). This is NOT mixed reality.`,s==="immersive-ar"&&!t.hitTest&&console.warn("[xr] hit-test unavailable — placement uses the local-floor plane (y = 0)."),xo(),ye.hide(),he.position.set(0,0,0),he.rotation.set(0,0,0),vi(st.floorY===void 0||q.state==="loading"?"placing":q.state)}catch(t){console.error("[xr] could not start session",t),ye.setStatus(`Could not start ${s}: ${t.message}`,"bad")}}function QS(){me.unlock(),q.mode="desktop",q.compatWarning="DESKTOP PREVIEW — not mixed reality.",he.position.set(0,1.6,0),an.yaw=0,an.pitch=-.05,xo(),ye.hide(),st.floorY===void 0?vi("placing"):vi(q.state==="loading"?"placing":q.state)}async function tb(){Ce.setAnimationLoop(ip),xo();const s=US(),t=new Of,e=new dy(t),n={},i=o=>a=>{n[o]=a.total?a.loaded/a.total:0,ye.setStatus(`Loading models… ${Object.entries(n).map(([c,l])=>`${c} ${l*100|0}%`).join(" · ")}`)};ye.setStatus("Loading models…");try{const o=performance.now(),[a]=await Promise.all([st.load(e,i("ravana")),Se.load(e)]);ps=new fS(Re,Se.arrowTemplate);const c=[];Re.traverse(l=>{l.visible||(c.push(l),l.visible=!0)}),Ce.compile(Re,he),c.forEach(l=>l.visible=!1),console.log(`[game] assets ready in ${((performance.now()-o)/1e3).toFixed(1)} s`),ye.addDiag("Ravana model",`${a.triangles.toLocaleString()} triangles`,a.triangles<3e5),ye.addDiag("Head targets",st.hitboxSource==="glb"?`${st.targets.length} hitbox nodes found in GLB`:"NOT found — using config fallback",st.hitboxSource==="glb"&&st.targets.length===10),ye.addDiag("Bow model",`${Se.summary.triangles.toLocaleString()} triangles`,!0)}catch(o){console.error("[game] asset loading failed",o),ye.setStatus(`Failed to load models: ${o.message}. Check public/models/ and the console.`,"bad");return}const r=await s;if(ye.addDiag("Secure context (HTTPS / localhost)",r.secure?"yes":"NO",r.secure),ye.addDiag("WebXR API",r.webxr?"available":"not available",r.webxr),ye.addDiag("immersive-ar (passthrough MR)",r.ar?"supported":"not supported",r.ar),ye.addDiag("immersive-vr",r.vr?"supported":"not supported",r.vr?!0:null),ye.addDiag("Browser",r.questBrowser?"Meta Quest Browser":r.quest?"Quest (other browser)":"not a Quest browser",r.questBrowser?!0:null),q.state="ready-to-enter",r.ar)ye.setStatus("Ready. Put on the headset and enter Mixed Reality.","ok"),ye.addButton("Enter Mixed Reality",()=>Yd("immersive-ar"),!0);else{let o=r.secure?r.webxr?"This browser does not support immersive-ar, so passthrough Mixed Reality is unavailable here.":"This browser has no WebXR API.":"This page is not a secure context — WebXR needs HTTPS (or localhost via adb reverse).";ye.setStatus(`${o} See README → “Troubleshooting”.`,"bad"),r.vr&&ye.addButton("Enter VR test mode (no passthrough — not MR)",()=>Yd("immersive-vr"))}ye.addButton("Desktop preview (mouse)",QS),ht.debug&&st.setDebugVisible(!0)}tb();
