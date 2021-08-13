!function(h){"use strict";var T="ht",J=h[T],j=Math,r=j.max,A=j.min,m=j.abs,H=j.atan2,U=(j.cos,j.sin,j.ceil),d=J.Default,N=d.getInternal(),w=J.List,P=N.Mat,Q=N.getNodeRect,V=N.intersectionLineRect,b=d.getDistance,F=d.setEdgeType,M="left",D="right",l="top",L="bottom",S="edge.type",u="edge.gap",X="edge.center",z="edge.extend",x=function(p,g){return Q(p,g).width},f=function(U,z){return Q(U,z).height},C=function(m,T){return N.getEdgeHostPosition(m,T,"source")},G=function(x,q){return N.getEdgeHostPosition(x,q,"target")},v=function(b,p){var f=b.s(S),Z=b.getEdgeGroup();if(Z){var X=0;if(Z.eachSiblingEdge(function(c){p.isVisible(c)&&c.s(S)==f&&X++}),X>1)return b.s(u)*(X-1)/2}return 0},I=function(k,O){var t=k.s(S),U=k.isLooped();if(!k.getEdgeGroup())return U?k.s(u):0;var w,M=0,z=0,g=0;return k.getEdgeGroup().getSiblings().each(function(N){N.each(function(J){if(J._40I===k._40I&&J.s(S)==t&&O.isVisible(J)){var h=J.s(u);w?(z+=g/2+h/2,g=h):(w=J,g=h),J===k&&(M=z)}})}),U?z-M+g:M-z/2},$=function(m,O){var T=O.s("edge.corner.radius");return d.toRoundedCorner(m,T)};N.addMethod(J.Style,{"edge.ripple.elevation":-20,"edge.ripple.size":1,"edge.ripple.both":!1,"edge.ripple.straight":!1,"edge.ripple.length":-1,"edge.corner.radius":-1,"edge.ortho":.5,"edge.flex":20,"edge.extend":20},!0),F("boundary",function(R,T,e,I){I||(T=-T);var Z,O=C(e,R),D=G(e,R),o=Q(e,R._40I),v=Q(e,R._41I),d=new P(H(D.y-O.y,D.x-O.x)),j=b(O,D),t=O.x,p=O.y;return Z=d.tf(0,T),O={x:Z.x+t,y:Z.y+p},Z=d.tf(j,T),D={x:Z.x+t,y:Z.y+p},Z=V(O,D,o),Z&&(O={x:Z[0],y:Z[1]}),Z=V(O,D,v),Z&&(D={x:Z[0],y:Z[1]}),{points:new w([O,D])}}),F("ripple",function($,r,R,E){E||(r=-r);var q=C(R,$),i=G(R,$),W=b(q,i),l=A($.s("edge.offset"),W/2),S=$.s("edge.ripple.size"),p=$.s("edge.ripple.length"),o=$.s("edge.ripple.both"),M=$.s(X),h=$.s("edge.ripple.elevation"),O=new w,u=$.s("edge.ripple.straight")?null:new w,_=new P(H(i.y-q.y,i.x-q.x));E||(h=-h),W-=2*l,p>0&&(S=U(W/p));var g=W/S;u&&u.add(1);for(var a=0;S>a;a++)u&&u.add(3),0===a?O.add({x:l+g*a,y:M?0:r}):O.add({x:l+g*a,y:r}),O.add({x:l+g*a+g/2,y:h+r}),o&&(h=-h);for(O.add({x:l+W,y:M?0:r}),a=0;a<O.size();a++){var d=_.tf(O.get(a));d.x+=q.x,d.y+=q.y,O.set(a,d)}return{points:O,segments:u}}),F("h.v",function(n,D,E){D=I(n,E);var Y=new w,T=n.s(X),P=C(E,n),i=P.x,U=P.y,W=G(E,n),A=W.x,z=W.y,v=n._40I instanceof J.Edge,c=n._41I instanceof J.Edge,k=0,B=0,s=A-i,M=z-U;return T||(k=v?0:x(E,n._40I)/2,B=c?0:f(E,n._41I)/2),s>=0&&0>=M?(Y.add({x:i+k,y:U+D}),Y.add({x:A+D,y:U+D}),Y.add({x:A+D,y:z+B})):0>=s&&M>=0?(Y.add({x:i-k,y:U+D}),Y.add({x:A+D,y:U+D}),Y.add({x:A+D,y:z-B})):s>=0&&M>=0?(Y.add({x:i+k,y:U+D}),Y.add({x:A-D,y:U+D}),Y.add({x:A-D,y:z-B})):(Y.add({x:i-k,y:U+D}),Y.add({x:A-D,y:U+D}),Y.add({x:A-D,y:z+B})),$(Y,n)}),F("v.h",function(u,R,c){R=I(u,c);var V=new w,q=u.s(X),Q=C(c,u),d=Q.x,h=Q.y,B=G(c,u),k=B.x,l=B.y,D=u._40I instanceof J.Edge,F=u._41I instanceof J.Edge,z=0,L=0,g=k-d,m=l-h;return q||(z=F?0:x(c,u._41I)/2,L=D?0:f(c,u._40I)/2),g>=0&&0>=m?(V.add({x:d+R,y:h-L}),V.add({x:d+R,y:l+R}),V.add({x:k-z,y:l+R})):0>=g&&m>=0?(V.add({x:d+R,y:h+L}),V.add({x:d+R,y:l+R}),V.add({x:k+z,y:l+R})):g>=0&&m>=0?(V.add({x:d-R,y:h+L}),V.add({x:d-R,y:l+R}),V.add({x:k-z,y:l+R})):(V.add({x:d-R,y:h-L}),V.add({x:d-R,y:l+R}),V.add({x:k+z,y:l+R})),$(V,u)}),F("ortho",function(k,N,F){var h=new w,n=k.s(X),g=k.s("edge.ortho"),E=k._40I,b=k._41I,r=C(F,k),j=r.x,p=r.y,Y=G(F,k),s=Y.x,y=Y.y,e=s-j,O=y-p,U=E instanceof J.Edge,a=b instanceof J.Edge,T=n||U?0:x(F,E)/2,l=n||U?0:f(F,E)/2,v=n||a?0:x(F,b)/2,Z=n||a?0:f(F,b)/2,Q=(e-(T+v)*(e>0?1:-1))*g,H=(O-(l+Z)*(O>0?1:-1))*g;return m(e)<m(O)?e>=0&&0>=O?(h.add({x:j+N,y:p-l}),h.add({x:j+N,y:p+H+N-l}),h.add({x:s+N,y:p+H+N-l}),h.add({x:s+N,y:y+Z})):0>=e&&O>=0?(h.add({x:j+N,y:p+l}),h.add({x:j+N,y:p+H+N+l}),h.add({x:s+N,y:p+H+N+l}),h.add({x:s+N,y:y-Z})):e>=0&&O>=0?(h.add({x:j+N,y:p+l}),h.add({x:j+N,y:p+H-N+l}),h.add({x:s+N,y:p+H-N+l}),h.add({x:s+N,y:y-Z})):(h.add({x:j+N,y:p-l}),h.add({x:j+N,y:p+H-N-l}),h.add({x:s+N,y:p+H-N-l}),h.add({x:s+N,y:y+Z})):e>=0&&0>=O?(h.add({x:j+T,y:p+N}),h.add({x:j+Q+N+T,y:p+N}),h.add({x:j+Q+N+T,y:y+N}),h.add({x:s-v,y:y+N})):0>=e&&O>=0?(h.add({x:j-T,y:p+N}),h.add({x:j+Q+N-T,y:p+N}),h.add({x:j+Q+N-T,y:y+N}),h.add({x:s+v,y:y+N})):e>=0&&O>=0?(h.add({x:j+T,y:p+N}),h.add({x:j+Q-N+T,y:p+N}),h.add({x:j+Q-N+T,y:y+N}),h.add({x:s-v,y:y+N})):(h.add({x:j-T,y:p+N}),h.add({x:j+Q-N-T,y:p+N}),h.add({x:j+Q-N-T,y:y+N}),h.add({x:s+v,y:y+N})),$(h,k)}),F("flex",function(k,u,S){var W=new w,s=k.s("edge.flex")+v(k,S),y=k.s(X),A=k._40I,P=k._41I,E=C(S,k),n=E.x,F=E.y,l=G(S,k),K=l.x,i=l.y,M=A instanceof J.Edge,j=P instanceof J.Edge,U=K-n,D=i-F,o=y||M?0:x(S,A)/2,Y=y||M?0:f(S,A)/2,Q=y||j?0:x(S,P)/2,B=y||j?0:f(S,P)/2,c=U>0?s:-s,b=D>0?s:-s;return m(U)<m(D)?U>=0&&0>=D?(W.add({x:n+u,y:F-Y}),W.add({x:n+u,y:F+b+u-Y}),W.add({x:K+u,y:i-b+u+B}),W.add({x:K+u,y:i+B})):0>=U&&D>=0?(W.add({x:n+u,y:F+Y}),W.add({x:n+u,y:F+b+u+Y}),W.add({x:K+u,y:i-b+u-B}),W.add({x:K+u,y:i-B})):U>=0&&D>=0?(W.add({x:n+u,y:F+Y}),W.add({x:n+u,y:F+b-u+Y}),W.add({x:K+u,y:i-b-u-B}),W.add({x:K+u,y:i-B})):(W.add({x:n+u,y:F-Y}),W.add({x:n+u,y:F+b-u-Y}),W.add({x:K+u,y:i-b-u+B}),W.add({x:K+u,y:i+B})):U>=0&&0>=D?(W.add({x:n+o,y:F+u}),W.add({x:n+c+u+o,y:F+u}),W.add({x:K-c+u-Q,y:i+u}),W.add({x:K-Q,y:i+u})):0>=U&&D>=0?(W.add({x:n-o,y:F+u}),W.add({x:n+c+u-o,y:F+u}),W.add({x:K-c+u+Q,y:i+u}),W.add({x:K+Q,y:i+u})):U>=0&&D>=0?(W.add({x:n+o,y:F+u}),W.add({x:n+c-u+o,y:F+u}),W.add({x:K-c-u-Q,y:i+u}),W.add({x:K-Q,y:i+u})):(W.add({x:n-o,y:F+u}),W.add({x:n+c-u-o,y:F+u}),W.add({x:K-c-u+Q,y:i+u}),W.add({x:K+Q,y:i+u})),$(W,k)}),F("extend.east",function(N,R,i){var B=new w,e=N.s(z)+v(N,i),n=N.s(X),g=C(i,N),O=N._40I instanceof J.Edge,d=N._41I instanceof J.Edge,T=g.x+(n||O?0:x(i,N._40I)/2),S=g.y,f=G(i,N),K=f.x+(n||d?0:x(i,N._41I)/2),L=f.y,a=r(T,K)+e;return S>L?(B.add({x:T,y:S+R}),B.add({x:a+R,y:S+R}),B.add({x:a+R,y:L-R}),B.add({x:K,y:L-R})):(B.add({x:T,y:S-R}),B.add({x:a+R,y:S-R}),B.add({x:a+R,y:L+R}),B.add({x:K,y:L+R})),$(B,N)}),F("extend.west",function(h,a,o){var Z=new w,Y=h.s(z)+v(h,o),r=h.s(X),c=h._40I instanceof J.Edge,V=h._41I instanceof J.Edge,O=C(o,h),L=O.x-(r||c?0:x(o,h._40I)/2),_=O.y,M=G(o,h),N=M.x-(r||V?0:x(o,h._41I)/2),U=M.y,R=A(L,N)-Y;return _>U?(Z.add({x:L,y:_+a}),Z.add({x:R-a,y:_+a}),Z.add({x:R-a,y:U-a}),Z.add({x:N,y:U-a})):(Z.add({x:L,y:_-a}),Z.add({x:R-a,y:_-a}),Z.add({x:R-a,y:U+a}),Z.add({x:N,y:U+a})),$(Z,h)}),F("extend.north",function(Y,x,r){var u=new w,I=Y.s(z)+v(Y,r),j=Y.s(X),a=Y._40I instanceof J.Edge,L=Y._41I instanceof J.Edge,o=C(r,Y),U=o.x,_=o.y-(j||a?0:f(r,Y._40I)/2),q=G(r,Y),s=q.x,V=q.y-(j||L?0:f(r,Y._41I)/2),P=A(_,V)-I;return U>s?(u.add({y:_,x:U+x}),u.add({y:P-x,x:U+x}),u.add({y:P-x,x:s-x}),u.add({y:V,x:s-x})):(u.add({y:_,x:U-x}),u.add({y:P-x,x:U-x}),u.add({y:P-x,x:s+x}),u.add({y:V,x:s+x})),$(u,Y)}),F("extend.south",function(m,y,H){var T=new w,B=m.s(z)+v(m,H),x=m.s(X),Q=m._40I instanceof J.Edge,W=m._41I instanceof J.Edge,M=C(H,m),R=M.x,E=M.y+(x||Q?0:f(H,m._40I)/2),O=G(H,m),e=O.x,c=O.y+(x||W?0:f(H,m._41I)/2),b=r(E,c)+B;return R>e?(T.add({y:E,x:R+y}),T.add({y:b+y,x:R+y}),T.add({y:b+y,x:e-y}),T.add({y:c,x:e-y})):(T.add({y:E,x:R-y}),T.add({y:b+y,x:R-y}),T.add({y:b+y,x:e+y}),T.add({y:c,x:e+y})),$(T,m)});var O=function(Y,g,G,J,C){if(J.sort(function(q,V){var I=q.getSourceAgent()===g?q.getTargetAgent():q.getSourceAgent(),a=V.getSourceAgent()===g?V.getTargetAgent():V.getSourceAgent(),x=I.p(),C=a.p();if(G===M||G===D){if(x.y>C.y)return 1;if(x.y<C.y)return-1}else{if(x.x>C.x)return 1;if(x.x<C.x)return-1}return d.sortFunc(q.getId(),V.getId())}),C){for(var $,s,A,j=Y.getSourceAgent(),S=Y.getTargetAgent(),x=0;x<J.size();x++){var Z=J.get(x);Z.getSourceAgent()===j&&Z.getTargetAgent()===S||Z.getTargetAgent()===j&&Z.getSourceAgent()===S?(s||(s=new w),s.add(Z,0)):s?(A||(A=new w),A.add(Z)):($||($=new w),$.add(Z))}J.clear(),$&&J.addAll($),s&&J.addAll(s),A&&J.addAll(A)}var a=J.indexOf(Y),B=J.size(),V=Y.s(u);return{side:G,index:a,size:B,offset:-V*(B-1)/2+V*a}},E=function(w,d,Z,$,_){var Y=d.s(S);return O(d,Z,$,Z.getAgentEdges().toList(function(G){return w.isVisible(G)&&G.s(S)===Y}),_)},B=function(f,y){var I=f.getSourceAgent()===y?f.getTargetAgent():f.getSourceAgent(),k=y.p(),N=I.p(),$=N.x-k.x,K=N.y-k.y;return $>0&&m(K)<=$?D:0>$&&m(K)<=-$?M:K>0&&m($)<=K?L:l},g=function(A,w,N){var s=w.s(S),M=B(w,N);return O(w,N,M,N.getAgentEdges().toList(function(Y){return A.isVisible(Y)&&Y.s(S)===s&&B(Y,N)===M}))},q=function(w,C){var y=w.getSourceAgent()===C,J=y?w.getTargetAgent():w.getSourceAgent(),G=C.p(),e=J.p();return y?G.y>e.y?l:L:G.x<e.x?D:M},Z=function(T,C,s){var R=C.s(S),y=q(C,s);return O(C,s,y,s.getAgentEdges().toList(function(M){return T.isVisible(M)&&M.s(S)===R&&q(M,s)===y}),y===D||y===L)},k=function(b,Y){var p=b.getSourceAgent()===Y,Z=p?b.getTargetAgent():b.getSourceAgent(),W=Y.p(),E=Z.p();return p?W.x<E.x?D:M:W.y>E.y?l:L},t=function(u,H,X){var e=H.s(S),m=k(H,X);return O(H,X,m,X.getAgentEdges().toList(function(f){return u.isVisible(f)&&f.s(S)===e&&k(f,X)===m}),m===D||m===L)},p=function(z,B,I){var s=z.getSourceAgent(),c=z.getTargetAgent(),k=s.getId()>c.getId(),e=k?c:s,i=k?s:c,y=e.p(),P=i.p(),Q=I(B,z,e),v=I(B,z,i),R=z.s(X),A=R?0:x(B,e)/2,O=R?0:x(B,i)/2,t=R?0:f(B,e)/2,a=R?0:f(B,i)/2,q=Q.offset,V=v.offset,j=Q.side,Y=v.side,r=new w;return j===l?(r.add({x:y.x+q,y:y.y-t}),r.add({x:y.x+q,y:P.y+V}),Y===M?r.add({x:P.x-O,y:P.y+V}):r.add({x:P.x+O,y:P.y+V})):j===L?(r.add({x:y.x+q,y:y.y+t}),r.add({x:y.x+q,y:P.y+V}),Y===M?r.add({x:P.x-O,y:P.y+V}):r.add({x:P.x+O,y:P.y+V})):j===M?(r.add({x:y.x-A,y:y.y+q}),r.add({x:P.x+V,y:y.y+q}),Y===L?r.add({x:P.x+V,y:P.y+a}):r.add({x:P.x+V,y:P.y-a})):j===D&&(r.add({x:y.x+A,y:y.y+q}),r.add({x:P.x+V,y:y.y+q}),Y===L?r.add({x:P.x+V,y:P.y+a}):r.add({x:P.x+V,y:P.y-a})),k&&r.reverse(),$(r,z)};F("ortho2",function(d,i,e){var G,I,b=d.s(X),s=d.s("edge.ortho"),Q=d.getSourceAgent(),_=d.getTargetAgent(),U=Q.getId()>_.getId(),B=U?_:Q,T=U?Q:_,k=B.p(),r=T.p(),t=g(e,d,B),Y=g(e,d,T),m=b?0:x(e,B)/2,h=b?0:f(e,B)/2,p=b?0:x(e,T)/2,C=b?0:f(e,T)/2,j=new w,O=t.offset,P=Y.offset,y=t.side;return y===D?(G=r.y>k.y?-O:O,I=k.x+m+(r.x-p-k.x-m)*s,j.add({x:k.x+m,y:k.y+O}),j.add({x:I+G,y:k.y+O}),j.add({x:I+G,y:r.y+P}),j.add({x:r.x-p,y:r.y+P})):y===M?(G=r.y>k.y?-O:O,I=k.x-m-(k.x-m-r.x-p)*s,j.add({x:k.x-m,y:k.y+O}),j.add({x:I-G,y:k.y+O}),j.add({x:I-G,y:r.y+P}),j.add({x:r.x+p,y:r.y+P})):y===L?(G=r.x>k.x?-O:O,I=k.y+h+(r.y-C-k.y-h)*s,j.add({x:k.x+O,y:k.y+h}),j.add({x:k.x+O,y:I+G}),j.add({x:r.x+P,y:I+G}),j.add({x:r.x+P,y:r.y-C})):y===l&&(G=r.x>k.x?-O:O,I=k.y-h-(k.y-h-r.y-C)*s,j.add({x:k.x+O,y:k.y-h}),j.add({x:k.x+O,y:I-G}),j.add({x:r.x+P,y:I-G}),j.add({x:r.x+P,y:r.y+C})),U&&j.reverse(),$(j,d)},!0),F("flex2",function(s,_,E){var G,n=s.getSourceAgent(),t=s.getTargetAgent(),S=n.getId()>t.getId(),U=S?t:n,i=S?n:t,T=U.p(),Y=i.p(),r=g(E,s,U),m=g(E,s,i),B=s.s(X),p=s.s("edge.flex")+(r.size-1)/2*s.s(u),Z=B?0:x(E,U)/2,I=B?0:f(E,U)/2,W=B?0:x(E,i)/2,R=B?0:f(E,i)/2,z=new w,k=r.offset,c=m.offset,C=r.side;return C===D?(G=Y.y>T.y?-k:k,z.add({x:T.x+Z,y:T.y+k}),z.add({x:T.x+Z+p+G,y:T.y+k}),z.add({x:Y.x-W-p+G,y:Y.y+c}),z.add({x:Y.x-W,y:Y.y+c})):C===M?(G=Y.y>T.y?-k:k,z.add({x:T.x-Z,y:T.y+k}),z.add({x:T.x-Z-p-G,y:T.y+k}),z.add({x:Y.x+W+p-G,y:Y.y+c}),z.add({x:Y.x+W,y:Y.y+c})):C===L?(G=Y.x>T.x?-k:k,z.add({x:T.x+k,y:T.y+I}),z.add({x:T.x+k,y:T.y+I+p+G}),z.add({x:Y.x+c,y:Y.y-R-p+G}),z.add({x:Y.x+c,y:Y.y-R})):C===l&&(G=Y.x>T.x?-k:k,z.add({x:T.x+k,y:T.y-I}),z.add({x:T.x+k,y:T.y-I-p-G}),z.add({x:Y.x+c,y:Y.y+R+p-G}),z.add({x:Y.x+c,y:Y.y+R})),S&&z.reverse(),$(z,s)},!0),F("extend.north2",function(W,n,J){var M=W.getSourceAgent(),i=W.getTargetAgent(),R=M.getId()>i.getId(),H=R?i:M,y=R?M:i,j=H.p(),Z=y.p(),G=E(J,W,H,l),T=E(J,W,y,l,!0),g=W.s(X),x=g?0:f(J,H)/2,Q=g?0:f(J,y)/2,N=G.offset,P=T.offset,K=W.s(z)+(G.size-1)/2*W.s(u),v=A(j.y-x,Z.y-Q)-K+(j.x<Z.x?N:-N),r=new w;return r.add({x:j.x+N,y:j.y-x}),r.add({x:j.x+N,y:v}),r.add({x:Z.x+P,y:v}),r.add({x:Z.x+P,y:Z.y-Q}),R&&r.reverse(),$(r,W)},!0),F("extend.south2",function(q,O,P){var F=q.getSourceAgent(),S=q.getTargetAgent(),D=F.getId()>S.getId(),I=D?S:F,g=D?F:S,i=I.p(),o=g.p(),V=E(P,q,I,L),e=E(P,q,g,L,!0),B=q.s(X),Z=B?0:f(P,I)/2,v=B?0:f(P,g)/2,H=V.offset,k=e.offset,J=q.s(z)+(V.size-1)/2*q.s(u),U=r(i.y+Z,o.y+v)+J+(i.x>o.x?H:-H),d=new w;return d.add({x:i.x+H,y:i.y+Z}),d.add({x:i.x+H,y:U}),d.add({x:o.x+k,y:U}),d.add({x:o.x+k,y:o.y+v}),D&&d.reverse(),$(d,q)},!0),F("extend.west2",function(D,U,d){var M=D.getSourceAgent(),k=D.getTargetAgent(),y=M.getId()>k.getId(),i=y?k:M,h=y?M:k,Z=i.p(),r=h.p(),n=E(d,D,i,l),Q=E(d,D,h,l,!0),c=D.s(X),H=c?0:x(d,i)/2,b=c?0:x(d,h)/2,s=n.offset,j=Q.offset,Y=D.s(z)+(n.size-1)/2*D.s(u),o=A(Z.x-H,r.x-b)-Y+(Z.y<r.y?s:-s),G=new w;return G.add({x:Z.x-H,y:Z.y+s}),G.add({x:o,y:Z.y+s}),G.add({x:o,y:r.y+j}),G.add({x:r.x-b,y:r.y+j}),y&&G.reverse(),$(G,D)},!0),F("extend.east2",function(y,I,B){var R=y.getSourceAgent(),d=y.getTargetAgent(),O=R.getId()>d.getId(),b=O?d:R,Q=O?R:d,h=b.p(),P=Q.p(),F=E(B,y,b,l),j=E(B,y,Q,l,!0),s=y.s(X),H=s?0:x(B,b)/2,v=s?0:x(B,Q)/2,A=F.offset,K=j.offset,m=y.s(z)+(F.size-1)/2*y.s(u),G=r(h.x+H,P.x+v)+m+(h.y>P.y?A:-A),Y=new w;return Y.add({x:h.x+H,y:h.y+A}),Y.add({x:G,y:h.y+A}),Y.add({x:G,y:P.y+K}),Y.add({x:P.x+v,y:P.y+K}),O&&Y.reverse(),$(Y,y)},!0),F("v.h2",function(t,J,K){return p(t,K,Z)},!0),F("h.v2",function(F,U,x){return p(F,x,t)},!0)}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);