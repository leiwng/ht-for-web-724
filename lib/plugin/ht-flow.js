!function(e){"use strict";var s=e.ht,I=s.Default,f=I.getInternal(),g=f.ui(),T=null,c="__segmentLengths",E="__lineTotalLength",A="__linePoints",h="__distance0",W="flow.count",w="flow.step",L="flow.element.max",R="flow.element.count",t="flow.element.min",H="flow.element.space",J="flow.element.autorotate",K="flow.element.background",Q="flow.element.shadow.max",C="flow.element.shadow.min",l="flow.element.shadow.begincolor",q="flow.element.shadow.endcolor",F="flow.element.shadow.visible",y="flow.element.image",P="flow",x=s.Math.Vector2,Z=new x;new x,new x,s.List;var M=s.Default._edgeProtectMethod,r=M.getStraightLinePoints,m=function(d,E){for(var X=[],m=d.length,B=0;m>B;B++){var q=d[B];q._as&&(q=q._as);for(var i=q[0],I=1;I<q.length;I++)X.push([i,q[I]]),i=q[I]}for(var $=[],B=0;B<X.length;B++){var g=a(X[B][0],X[B][1],E);$.push(g)}return{distance:$,segments:X}},D=function(T,K,Q){if(T){for(var r,o=m(T,K),y=o.distance,i=o.segments,N=1/0,l=null,w=0,s=y.length;s>w;w++){var c=y[w];c.z<N&&(r=w,N=c.z,l=c)}if(null==Q&&(Q=.1),l.z<Q){for(var d=0,q=0;r>=q;q++)d+=I.getDistance(i[q][0],r>q?i[q][1]:l);return d}}},a=function(t,Q,X){var K=t.x,M=t.y,h=Q.x,$=Q.y,R=X.x,T=X.y,p=h-K,c=$-M,C=Math.sqrt(p*p+c*c),b=p/C,D=c/C,A=(-K+R)*b+(-M+T)*D,d={x:K+A*b,y:M+A*D};return d.x>=Math.min(t.x,Q.x)&&d.x<=Math.max(t.x,Q.x)&&d.y>=Math.min(t.y,Q.y)&&d.y<=Math.max(t.y,Q.y)||(d.x=Math.abs(d.x-t.x)<Math.abs(d.x-Q.x)?t.x:Q.x,d.y=Math.abs(d.y-t.y)<Math.abs(d.y-Q.y)?t.y:Q.y),p=R-d.x,c=T-d.y,d.z=Math.sqrt(p*p+c*c),d},j=function(_,Q){if(_){var r=m(_,Q).distance,A=1/0,B=null;return r.forEach(function(C){C.z<A&&(A=C.z,B=C)}),B}},i=M.calculateLineLength,o=M.calcSegmentIndexByDistance,d=M.calculatePointAlongLine,v=function(Z,$,z){if(!Z)return z;if(0===$){var P=Z[0][0],H=Z[0][1];return z+Math.atan2(H.y-P.y,H.x-P.x)}if(100===$){Z=Z[Z.length-1];var P=Z[Z.length-2],H=Z[Z.length-1];return z+Math.atan2(H.y-P.y,H.x-P.x)}for(var C=0,s=[],x=Z.length,M=0;x>M;M++){var K=Z[M],R=i(K);C+=R,s.push(R)}for(var Q=C*$/100,k=o(Q,s),A=0,v=0;k>v;v++)A+=s[v];Q-=A;for(var I=d(Z[k],Q),w=Z[k],V=0,y=0,F=0;F<w.length-1;F++){var t=w[F],g=w[F+1],N=g.x-t.x,f=g.y-t.y,E=Math.sqrt(N*N+f*f);if(V+=E,V>Q){y=F;break}}var L=w[y];return z+Math.atan2(I.y-L.y,I.x-L.x)},X=function(S){var H=0;if(S)if(Array.isArray(S[0]))for(var Z=S.length,u=0;Z>u;u++){var z=S[u],I=i(z);H+=I}else H=i(S);return H},S=function(N,K,n,J){return Z.set(K,n).rotateAround(null,J),N?{x:N.x+Z.x,y:N.y+Z.y}:{x:Z.x,y:Z.y}},G=function(T){var x=T._data,p=r(T);if(p){x.s("flow.reverse")&&(p.reverse(),p.forEach(function(X){X.reverse()}));for(var e=0,H=[],W=p.length,X=0;W>X;X++){var C=p[X],N=i(C);e+=N,H.push(N)}if(x[c]=H,x[E]=e,x[A]=p,x instanceof s.Edge){var Z=I.unionPoint(p),Y=Z.x+Z.width/2,z=Z.y+Z.height/2;x.$10e={x:Y,y:z}}n(T,!0)}},k=M.getPercentPosition,n=function(Y,y){var B=Y._data,j=B[E],$=B.s(W),l=B.s(w),G=0,u=B[c],_=B.s(L),f=B.s(t),a=B.s(R),n=(_-f)/(a-1),Q=[];if(u){if(1===a)Q.push(_);else if(2===a)Q.push(_),Q.push(f);else{if(!(a>2))return;Q.push(_);for(var v=a-2;v>0;v--)Q.push(f+n*v);Q.push(f)}var T=0,O=0;Q.forEach(function(R){a-1>T&&(O+=B.getFlowElementSpace(R)),T++}),O+=(_+f)/2,G=(j-$*O+O)/$;var r=Y[h];for(null==r&&(r=0),y||(r+=l);r>j+O;){var b=Y._overCount;b?b++:b=1,b>=$&&(b=null),Y._overCount=b,B.s("flow.autoreverse")?b?r-=G+O:(r=0,B.s("flow.reverse",!B.s("flow.reverse"))):r-=G+O}Y[h]=r}},p="prototype",N=s.graph.GraphView[p],U=s.Data[p],u=g.DataUI[p],O=g.ShapeUI[p],$=g.EdgeUI[p],B=s.DataModel[p],b=s.Style;b[L]==T&&(b[L]=7),b[t]==T&&(b[t]=0),b[W]==T&&(b[W]=1),b[w]==T&&(b[w]=3),b[R]==T&&(b[R]=10),b[H]==T&&(b[H]=3.5),b[J]==T&&(b[J]=!1),b[K]==T&&(b[K]="rgba(255, 255, 114, 0.4)"),b[l]==T&&(b[l]="rgba(255, 255, 0, 0.3)"),b[q]==T&&(b[q]="rgba(255, 255, 0, 0)"),b[F]==T&&(b[F]=1),b[Q]==T&&(b[Q]=22),b[C]==T&&(b[C]=4),N.calculatePointLength=function(S,T,P){var s=this.getDataUI(S),I=r(s);return D(I,T,P)},I.calculatePointLength=function(o,L,I,u){var n=r(T,o,L);return D(n,I,u)},I.calculateClosestPointOnLine=a,N.calculateClosestPoint=function(Y,k){var J=this.getDataUI(Y),q=r(J);return j(q,k)},I.calculateClosestPoint=function(O,W,D){var v=r(T,O,W);return j(v,D)},N.getPercentAngle=function(n,g){var o=this.getDataUI(n),T=r(o);return n.getRotation?n.getRotation():0,v(T,g,n.getRotation?n.getRotation():0)},I.getPercentAngle=function(f,K,B){var H=r(T,f,K);return v(H,B,0)},N.calculateLength=function(V){var o=this.getDataUI(V),f=r(o);return X(f)},I.calculateLength=function(B,G){var e=r(T,B,G);return X(e)},N.getPercentPosition=function(D,I){var t=this.getDataUI(D),i=r(t);return k(i,I)},I.getPercentPositionOnPoints=function(m,V,W){var P=r(T,m,V);return k(P,W)};var V=function(B){var h=B.data,K=this.dm();if(h&&"add"===B.kind){var R=K.$3e;R&&h.s(P)&&R.indexOf(h)<0&&R.push(h)}"clear"===B.kind&&(K.$3e=[])},Y=function(W){var X=W.property,c=W.data,_=W.newValue,x=this.dm().$3e;if(x&&"s:flow"===X)if(_)x.indexOf(c)<0&&x.push(c);else for(var o=x.length,l=0;o>l;l++)if(x[l]===c){x.splice(l,1);break}},z=N.setDataModel;N.setDataModel=function(c){var G=this,F=G._dataModel;if(F!==c){F&&(F.umm(V,G),F.umd(Y,G),F.$3e=[]),c.mm(V,G),c.md(Y,G);var q=c.$3e=[];c.each(function(y){y.s(P)&&q.indexOf(y)<0&&q.push(y)}),z.call(G,c)}},U.getFlowElementSpace=function(){return this.s(H)};var _=function(K){var v=this,Z=v._data,P=Z[E],H=Z[c],$=Z[A],Y=Z.s(W),x=0,w=v[h],i=Z.s(L),u=Z.s(t),y=Z.s(R),g=Z.s(C),I=Z.s(Q),k=Z.s(J),B=(I-g)/(y-1),M=(i-u)/(y-1),e=Z.getRotation?Z.getRotation():0,q=Z.getPosition?Z.p():Z.$10e,X=[],m=[];if(w!=T){if(1===y)X.push(i);else if(2===y)X.push(i),X.push(u);else{if(!(y>2))return;X.push(i);for(var O=y-2;O>0;O--)X.push(u+M*O);X.push(u)}if(1===y)m.push(I);else if(2===y)m.push(I),m.push(g);else{if(!(y>2))return;m.push(I);for(var O=y-2;O>0;O--)m.push(g+B*O);m.push(g)}var V=0,D=0;X.forEach(function(_){y-1>V&&(D+=Z.getFlowElementSpace(_)),V++}),D+=(i+u)/2,x=(P-Y*D+D)/Y,K.save();for(var O=0;Y>O;O++){var _=w,p=0,f=v._overCount,l=0;Z.s("flow.autoreverse")&&f&&f>Y-(O+1)||(_-=O*(x+D),V=0,X.forEach(function(y){var j=_-p;if(j>=0&&P>j){var Q=!0,c=o(j,H);l=0;for(var D=0;c>D;D++)l+=H[D];if(j-=l,Q){var I=d($[c],j),Y=e;if(k){for(var a=$[c],i=0,x=0,n=0;n<a.length-1;n++){var s=a[n],r=a[n+1],L=r.x-s.x,W=r.y-s.y,O=Math.sqrt(L*L+W*W);if(i+=O,i>j){x=n;break}}var N=a[x];Y+=Math.atan2(I.y-N.y,I.x-N.x)}e&&(I=S(q,I.x-q.x,I.y-q.y,e)),v.$5e(K,I,y,m[V],Y)}}p+=Z.getFlowElementSpace(X[V]),V++}))}K.restore()}},Hp=$._80o;$._80o=function(M){Hp.call(this,M);var G=this,b=G._data,Y=G.gv;b.s(P)&&Y.$7e!=T&&_.call(G,M)};var lg=O._80o;O._80o=function(K){lg.call(this,K);var Z=this,b=Z._data,q=Z.gv;b.s(P)&&q.$7e!=T&&_.call(Z,K)};var mq=$._79o,hs=O._79o,gq=function(){var f=this,t=f._data,_=t.s(L),S=!1,p=T;if(f._6I||(S=!0),p=t instanceof s.Edge?mq.call(f):hs.call(f),t.s(P)&&S){var V=t.s(Q),k=t.s(F);k&&V>_&&(_=V),_>0&&I.grow(p,Math.ceil(_/2)),G(f)}return!t.s(P)&&S&&(t[c]=t[E]=t[A]=f[h]=T),p};O._79o=gq,$._79o=gq,u.$5e=function(g,V,L,e,B){var P=this,Q=P._data,r=P.gv,J=Q.s(K),a=Q.s(l),w=Q.s(q),M=Q.s(F),j=r.$8e,t=Q.s(y);if(j==T&&(j=r.$8e={}),g.beginPath(),t!=T){var X=I.getImage(t),x=L/2;g.translate(V.x,V.y),g.rotate(B),g.translate(-V.x,-V.y),I.drawImage(g,X,V.x-x,V.y-x,L,L,Q),g.translate(V.x,V.y),g.rotate(-B),g.translate(-V.x,-V.y)}else if(r.__flowBatch){var D=r.__flowBatchGroup;D||(D=r.__flowBatchGroup={});var i=[V.x,V.y,L/2];D[J]?D[J].push(i):D[J]=[i]}else g.fillStyle=J,g.arc(V.x,V.y,L/2,0,2*Math.PI,!0),g.fill();if(M){var W=22,U=W+"_"+a+"_"+w,N=j[U];if(N==T){var v=document.createElement("canvas");f.setCanvas(v,W,W);var H=v.getContext("2d"),n=W/2,z=n,o=n;f.translateAndScale(H,0,0,1),H.beginPath();var c=H.createRadialGradient(z,o,0,z,z,n);c.addColorStop(0,a),c.addColorStop(1,w),H.fillStyle=c,H.arc(z,o,n,0,2*Math.PI,!0),H.fill(),N=j[U]=v}var x=e/2;I.drawImage(g,N,V.x-x,V.y-x,e,e,Q)}},N.$9e=function(){var c=this,V=c.dm().$3e;c._24I,V.forEach(function(W){c._24I[W._id]=W}),c.iv()};var $m=B.prepareRemove;B.prepareRemove=function(y){$m.call(this,y);var H=y._dataModel,c=H.$3e;if(c)for(var X=c.length,Q=0;X>Q;Q++)if(c[Q]===y){c.splice(Q,1);break}},N.setFlowInterval=function(L){var c=this,b=c.$11e;c.$11e=L,c.fp("flowInterval",b,L),c.$7e!=T&&(clearInterval(c.$7e),delete c.$7e,c.enableFlow(L))},N.getFlowInterval=function(){return this.$11e},N.enableFlow=function(h){var q=this,x=q.dm(),X=x.$3e;q.$7e==T&&(X.forEach(function(k){var v=q.getDataUI(k);G(v)}),q.$7e=setInterval(function(){x.$3e.forEach(function(c){n(q.getDataUI(c))}),q.$9e()},h||q.$11e||50))},N.disableFlow=function(){var o=this;clearInterval(o.$7e),delete o.$7e;var W=o.dm().$3e;W&&o.$9e()};var bp=function(){this.__flowBatchGroup={}},nf=function(Y){var c=this.__flowBatchGroup;if(c){Y.save();for(var y in c){Y.fillStyle=y,Y.beginPath();var u=c[y];u.forEach(function(u){Y.moveTo(u[0],u[1]),Y.arc(u[0],u[1],u[2],0,2*Math.PI,!0)}),Y.fill()}Y.restore()}};N.setFlowBatch=function(B){var l=this;!!l.__flowBatch!=!!B&&(l.__flowBatch=B,B?(l.addBottomPainter(bp),l.addTopPainter(nf)):(l.removeBottomPainter(bp),l.removeTopPainter(nf)))}}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);