(function(){
'use strict';
var $=function(i){return document.getElementById(i)};
var hero=$('hero'),yw=$('yw'),cv=$('fx'),ctx=cv.getContext('2d'),brand=$('brand'),h1=brand.querySelector('h1'),sub=brand.querySelector('.sub'),insp=brand.querySelector('.insp'),mantra=$('mantra'),core=document.getElementById('g-core'),aura=$('aura'),track=$('track'),cue=$('cue');
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var W,H,Y0,D,dy,k,top0,fs,dpr,P=[],motes=[],state='idle',t0=0,raf=0,visible=true,pausedAt=0,holdMs=3200,durMs=9000;
var ease=function(x){x=Math.max(0,Math.min(1,x));return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2};
var clamp=function(x,a,b){return Math.max(a,Math.min(b,x))};
var seg=function(p,a,b){return clamp((p-a)/(b-a),0,1)};
var anims=function(){return yw.getAnimations?yw.getAnimations({subtree:true}):[]};
var lastR=0;function rate(r){r=Math.round(r*4)/4;if(r===lastR)return;lastR=r;anims().forEach(function(a){if(a.animationName&&a.animationName!=='flow')a.playbackRate=r})}

function layout(){
  var r=hero.getBoundingClientRect();W=r.width||innerWidth;H=r.height||innerHeight;dpr=Math.min(devicePixelRatio||1,2);
  cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  Y0=Math.min(W*.86,H*.7);yw.style.width=yw.style.height=Y0+'px';
  D=Math.min(Math.min(W,H)*.42,H*.3);k=D/Y0;
  fs=parseFloat(getComputedStyle(h1).fontSize);
  var total=D+26+fs*1.25+14+22+18+(insp?insp.offsetHeight+18:0)+40;
  top0=Math.max(76,(H-total)/2);
  brand.style.top=(top0+D+26)+'px';
  dy=(top0+D/2)-H/2;
}
function apply(e){
  yw.style.transform='translate(-50%,-50%) translateY('+(dy*e)+'px) scale('+(1+(k-1)*e)+')';
}
function setFinal(){
  layout();apply(1);rate(1);
  mantra.style.opacity=0;if(core)core.style.opacity=1;
  [h1,sub,insp].forEach(function(n){if(n)n.style.opacity=1});brand.style.opacity=1;
  ctx.clearRect(0,0,W,H);state='done';stopLoop();if(!reduce)startMotes()
}
/* text -> target points */
function sampleText(n){
  var txt='SUTRA INTELLIGENCE',cs=getComputedStyle(h1);
  var c=document.createElement('canvas'),x=c.getContext('2d'),cw=Math.ceil(W),ch=Math.ceil(fs*1.6);c.width=cw;c.height=ch;
  x.font=cs.fontWeight+' '+fs+'px '+cs.fontFamily;x.textBaseline='middle';x.fillStyle='#fff';
  var ls=parseFloat(cs.letterSpacing)||fs*.22,tot=0,i,w=[];
  for(i=0;i<txt.length;i++){w[i]=x.measureText(txt[i]).width+ls;tot+=w[i]}
  var px=(cw-tot)/2,cur=px;
  for(i=0;i<txt.length;i++){x.fillText(txt[i],cur,ch/2);cur+=w[i]}
  var d=x.getImageData(0,0,cw,ch).data,pts=[],step=Math.max(2,Math.round(fs/16));
  var py=top0+D+26+h1.offsetHeight/2-ch/2;
  for(var yy=0;yy<ch;yy+=step)for(var xx=0;xx<cw;xx+=step)if(d[(yy*cw+xx)*4+3]>128)pts.push([xx,py+yy]);
  for(i=pts.length-1;i>0;i--){var j=Math.random()*(i+1)|0,t=pts[i];pts[i]=pts[j];pts[j]=t}
  return pts.slice(0,n);
}
function build(){
  var n=W<640?1100:2200,tg=sampleText(n),cx=W/2,cy=H/2,R=Y0/2,radii=[.99,.9,.8,.7,.58,.45,.3,.2];
  P=[];
  for(var i=0;i<tg.length;i++){
    var sx,sy;
    if(i%5===0){var m=mantra.getBoundingClientRect(),hr=hero.getBoundingClientRect();sx=m.left-hr.left+m.width*(.5+(Math.random()+Math.random()+Math.random()-1.5)/1.5);sy=m.top-hr.top+m.height*(.5+(Math.random()+Math.random()-1)*.7)}
    else{var a=Math.random()*6.2832,r=R*radii[Math.random()*radii.length|0];sx=cx+Math.cos(a)*r;sy=cy+Math.sin(a)*r}
    P.push({sx:sx,sy:sy,tx:tg[i][0],ty:tg[i][1],d:Math.random()*.28,s:Math.random()*1.1+.6,v:Math.random()<.18})
  }
  document.fonts&&0;
}
function startMotes(){motes=[];for(var i=0;i<50;i++)motes.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.3,vx:(Math.random()-.5)*.15,vy:-Math.random()*.2-.03,a:Math.random()*.4+.1});if(!raf)loop()}
function stopLoop(){cancelAnimationFrame(raf);raf=0}
function drawMotes(){motes.forEach(function(m){m.x+=m.vx;m.y+=m.vy;if(m.y<-4)m.y=H+4;if(m.x<-4)m.x=W+4;if(m.x>W+4)m.x=-4;ctx.fillStyle='rgba(216,180,90,'+m.a+')';ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,6.2832);ctx.fill()})}
function update(p){
  /* p: 0..1 across the transformation */
  var spin=1+39*ease(seg(p,0,.3))*(1-ease(seg(p,.55,.74)));
  rate(spin);
  var mo=1-ease(seg(p,.18,.5));
  mantra.style.opacity=mo;
  mantra.style.transform='translate(-50%,-50%) scale('+(1+.25*(1-mo))+')';
  apply(ease(seg(p,.3,.74)));
  var dim=1-.45*ease(seg(p,.3,.74));
  if(!LAY)LAY=['g-ring','g-pa','g-pb','g-rad','g-siva','g-shakti'].map(function(id){return document.getElementById(id)}).filter(Boolean);for(var li=0;li<LAY.length;li++)LAY[li].style.opacity=dim;
  if(core)core.style.opacity=ease(seg(p,.4,.72));
  var hp=ease(seg(p,.84,.97));h1.style.opacity=hp;
  sub.style.opacity=ease(seg(p,.9,1));if(insp)insp.style.opacity=ease(seg(p,.92,1));brand.style.opacity=1;
  ctx.clearRect(0,0,W,H);
  var inP=seg(p,.12,.3),outP=1-ease(seg(p,.86,.98)),sw=1.6;
  for(var i=0;i<P.length;i++){
    var q=P[i],e=ease(seg((p-.3-q.d)/ (.54-.1),0,1)),x=q.sx+(q.tx-q.sx)*e,y=q.sy+(q.ty-q.sy)*e;
    var cx=W/2,cy=H/2,dx=x-cx,dyy=y-cy,ang=sw*(1-e)*Math.sin(Math.min(1,e*1.0)*3.14159)*1.0,c=Math.cos(ang),s=Math.sin(ang);
    x=cx+dx*c-dyy*s;y=cy+dx*s+dyy*c;
    var a=inP*outP*(p<.3?.55:1);
    ctx.fillStyle=q.v?'rgba(138,108,240,'+a+')':'rgba(236,200,110,'+a+')';
    ctx.beginPath();ctx.arc(x,y,q.s*(1+.5*(1-e)),0,6.2832);ctx.fill();
  }
  aura.style.opacity=.7+.3*ease(seg(p,.3,.8));
}
function loop(){
  raf=requestAnimationFrame(loop);
  if(!visible){if(state==='playing'&&!pausedAt)pausedAt=performance.now();return}
  if(pausedAt){t0+=performance.now()-pausedAt;pausedAt=0}
  if(state==='playing'){
    var p=(performance.now()-t0)/durMs;
    if(p>=1){setFinal();return}
    update(p);
  }else if(state==='done'){ctx.clearRect(0,0,W,H);drawMotes()}
}
function prep(){
  layout();state='idle';
  ['g-ring','g-pa','g-pb','g-rad','g-siva','g-shakti'].forEach(function(id){var n=document.getElementById(id);if(n)n.style.opacity=1});
  if(core)core.style.opacity=0;mantra.style.cssText='';apply(0);rate(1);
  [h1,sub,insp].forEach(function(n){if(n)n.style.opacity=0});brand.style.opacity=0;ctx.clearRect(0,0,W,H);
}
function prog(){var span=track.offsetHeight-hero.offsetHeight;return span>0?clamp(-track.getBoundingClientRect().top/span,0,1):1}
var cur=-1,tgt=0,ticking=0,LAY=null;
function show(p){
  if(p>=.999){if(state!=='done')setFinal();return}
  if(state==='done'){stopLoop()}
  state='scrub';update(p);
}
function step(){
  ticking=0;var d=tgt-cur;
  if(Math.abs(d)<.0008)cur=tgt;else cur+=d*.3;
  show(cur);
  if(cur!==tgt){ticking=1;requestAnimationFrame(step)}
}
function render(){
  tgt=prog();cue.style.opacity=tgt<.02?.8:0;
  if(cur<0){cur=tgt;show(cur);return}
  if(!ticking){ticking=1;requestAnimationFrame(step)}
}
function init(){
  if(reduce){document.documentElement.classList.add('rm');setFinal();return}
  var go=false,start=function(){if(go)return;if(!hero.offsetWidth){setTimeout(start,200);return}go=true;layout();build();render()};
  if(document.fonts&&document.fonts.ready){document.fonts.ready.then(start);setTimeout(start,2500)}else start();
}
var tk=0;addEventListener('scroll',function(){if(!go0())return;if(!tk){tk=1;requestAnimationFrame(function(){tk=0;render()})}},{passive:true});
function go0(){return P.length>0||reduce}
var rt,lastW=innerWidth;addEventListener('resize',function(){if(innerWidth===lastW)return;lastW=innerWidth;clearTimeout(rt);rt=setTimeout(function(){if(reduce){setFinal();return}state='idle';cur=-1;layout();build();render()},150)});
new IntersectionObserver(function(en){visible=en[0].isIntersecting;if(visible&&state==='done'&&!raf&&!reduce)loop()},{threshold:.2}).observe(hero);
/* reveal */
var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(n){io.observe(n)});
/* architecture link */
var rings=document.querySelectorAll('.ring'),lis=document.querySelectorAll('#layers li');
function hi(i){rings.forEach(function(r){r.classList.toggle('on',r.dataset.i===i)});lis.forEach(function(l){l.classList.toggle('on',l.dataset.i===i)})}
rings.forEach(function(r){r.addEventListener('mouseenter',function(){hi(r.dataset.i)})});
lis.forEach(function(l){['mouseenter','focus'].forEach(function(ev){l.addEventListener(ev,function(){hi(l.dataset.i)})})});
/* lifecycle */
var SA=[["संकल्प", "Sankalpa"], ["योजना", "Yojana"], ["विवेक", "Viveka"], ["कर्म", "Karma"], ["प्रमाण", "Pramana"], ["साक्षी", "Sakshi"]];var T=[['Anchor','The objective and its success criteria are fixed first. They change only when the user changes them.'],['Plan','The work is broken into dependent steps, with a bounded number of re-plans.'],['Gate','Each proposed action is checked against scope and risk. Outward or irreversible actions need a yes.'],['Execute','Models and tools do the work. What actually happened is recorded by the harness, not by the model.'],['Verify','Done means independently checked, not self-reported. Unchecked work is labelled as such.'],['Recover and report','Failures are named by type and handled with bounded retries, changed inputs, or a request for a human.']];
var nodes=document.querySelectorAll('.node');
function sel(n){nodes.forEach(function(x){x.classList.toggle('on',x===n)});var t=T[+n.dataset.i];$('lc-h').textContent=t[0];var q=SA[+n.dataset.i];$('lc-s').innerHTML=q[0]+' <i>'+q[1]+'</i>';$('lc-p').textContent=t[1]}
nodes.forEach(function(n){n.addEventListener('click',function(){sel(n)});n.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(n)}})});
var cyc=$('cycle'),ci=0,ct=null,hold=0,vis=false;
function tick(){if(!vis||Date.now()<hold)return;ci=(ci+1)%nodes.length;sel(nodes[ci])}
function pause(n){ci=+n.dataset.i;hold=Date.now()+6000}
nodes.forEach(function(n){['click'].forEach(function(ev){n.addEventListener(ev,function(){pause(n)})})});
if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){new IntersectionObserver(function(e){vis=e[0].isIntersecting;if(vis&&!ct)ct=setInterval(tick,3500);if(!vis&&ct){clearInterval(ct);ct=null}},{threshold:0}).observe(cyc)}
init();
})();
