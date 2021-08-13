!function(_){"use strict";var B="ht",Z=_[B],V=function(){return document},Q=function(){return V().body},U=function(N,O,f){N.style.setProperty(O,f,null)},D=function($){return V().createElement($)},r=function(){return D("div")},P=function(){var K=D("canvas");return K},T=function(Q,L){U(Q,"-webkit-transform",L),U(Q,"-ms-transform",L),U(Q,"transform",L)},v=function(V,Z){U(V,"-webkit-transform-origin",Z),U(V,"-ms-transform-origin",Z),U(V,"transform-origin",Z)},x=function(d,b){d.appendChild(b)},y=function(U,D){U.removeChild(D)},s=_.parseInt,f=Z.Default,A=f.getInternal(),u=A.addEventListener,t=(A.removeEventListener,Math.PI),X="white-space",M="visibility",e="left",F="top",h="width",m="height",p="position",o="display",G="z-index",C="px",L="0 0",g="absolute",i="visible",E="hidden",z="none",n="block",W="nowrap",I="rgba(0, 0, 0, 0.005)";f.setImage("node_dragger","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN9JREFUeNrsV9sNhDAMKyzQVdgARmGzrMJNUFZhAh6nfkVcG9PQgHSR8lEksJs6pnGuLCimSRzAa0yyBK9O4gy8GokU+O0kJOAwiQYg0LP1xNYDW3+0CfBYNb7VOuN4LAGpiOaYUhFDas9F2NPHDELNENJqaHgBgSQJ3ufakfQJqckERcOiK+Ae1FGWBNKGh9oX5WPpLpdNYfffijbsxTHh7VKP7388n1g1h7OKUoUuyGpJakQEuhwkZAKcDXVOdWcrOrL/feBVBHI/q8fcjE1nA9PpyHQ+NJ2Qi8A3AQYAOtS27fCoRY0AAAAASUVORK5CYII=");var d=Z.graph.GraphView.prototype,j=d._42;d.adjustHtmlNodeIndex=!0,d._42=function(N,Z){if(j.call(this,N,Z),this.adjustHtmlNodeIndex)for(var Q=this.getDataModel()._datas._as,T=Q.length,p=1,e=0;T>e;e++){var H=Q[e];if(H instanceof Y){var v=this.getDataUI(H);U(v.$2f,G,p+""),U(v.$3f,G,p+1+""),p+=2}}};var K=Z.HtmlNodeUI=function(_,T){var C=this;K.superClass.constructor.call(C,_,T);var R=C.$2f=r(),h=C.$3f=P();U(R,p,g),U(R,M,E),U(R,X,W),h.draggable=!1,U(h,p,g),U(h,o,z),v(h,L),u(R,"change",function(H){var L=H.target,e=L.bind||L.getAttribute("bind"),D=L.type&&"checkbox"===L.type?L.checked:L.value,l=T.getContext();e&&l&&(l[e]=D,C.$4f=JSON.stringify(l))}),["mousedown","touchstart","keydown","mousewheel","DOMMouseScroll"].forEach(function(f){u(R,f,this.$9f.bind(this))},C)};f.def(K,A.ui().NodeUI,{_visible:!0,$11f:function(){var n=this,b=n.$3f,W=n._data,D=W.getDraggerImageWidth(),B=W.getDraggerImageHeight(),j=W.getDraggerImage(),c=A.initContext(b);c.beginPath(),A.setCanvas(b,D,B),A.translateAndScale(c,0,0,1),c.clearRect(0,0,D,B),f.drawImage(c,f.getImage(j),0,0,D,B),c.restore()},_80o:function(f){K.superClass._80o.call(this,f);var R=this,Q=R._data,H=Q._padding,d=2*H,q=R.$2f,j=R.$3f,A=R.gv,Z=A.getZoom(),O=A.getTranslateX(),L=A.getTranslateY(),W=A.getView(),y=R._83o,$=Q._width,B=Q._height,l=y.position,V=y.rotation,Y=($-d)/Q.$5f*Z,X=(B-d)/Q.$6f*Z,P=R._html,N=Q._html,k=Q.getHtmlType();if("html"===k){var S=Q.getContext()||{},c=R.$4f,u=Q.$10f,_=JSON.stringify(S);P&&c&&P===N&&c===_||(R.$4f=_,R._html=N,q.innerHTML=u?u(S):N)}else if(null!=k){var b=Q.getHtml();"ht"===k&&(b=b.getView()),P&&P===b&&q.contains(P)||(R._html=b,q.innerHTML="",x(q,b))}if(!q.parentNode){var J=A.$1f;if(!J){var D=r();U(D,p,g),U(D,G,"0"),J=A.$1f=D;var v=A._canvas.nextSibling;v?W.insertBefore(D,v):x(W,D)}x(J,q),x(J,j),Q.onContentInitialized&&Q.onContentInitialized(q)}if(Q._scalable){var a=Q.$5f,w=Q.$6f;T(q,"rotate("+180*(V/t)+"deg) scale("+Y+","+X+")"),U(q,h,""),U(q,m,""),U(q,e,(l.x-a/Z/2)*Z+O+C),U(q,F,(l.y-w/Z/2)*Z+L+C)}else{var nb=s(q.style.width),cs=s(q.style.height),vi=s(($-d)*Z),uo=s((B-d)*Z),Fl="100%",zm=q.children[0];U(zm,h,Fl),U(zm,m,Fl),(nb!==vi||cs!==uo)&&(U(q,h,vi+C),U(q,m,uo+C),"ht"===k&&N.invalidate()),T(q,"rotate("+180*(V/t)+"deg)"),U(q,e,(l.x-vi/Z/2)*Z+O+C),U(q,F,(l.y-uo/Z/2)*Z+L+C)}var bh=R.dragRect;A.isMovable(Q)&&A.isSelected(Q)&&bh?(f.save(),f.fillStyle=I,f.fillRect(bh.x,bh.y,bh.width,bh.height),f.restore(),U(j,e,bh.x*Z+O+C),U(j,F,bh.y*Z+L+C),T(j,"scale("+Z+","+Z+")"),U(j,o,n),R.$11f()):U(j,o,z),U(q,M,this._visible?i:E)},dispose:function(){var Y=this.gv.$1f;this.$2f.parentNode===Y&&Y.removeChild(this.$2f),this.$3f.parentNode===Y&&Y.removeChild(this.$3f)},_84o:function(y){this._visible=y,U(this.$2f,M,y?i:E),U(this.$3f,o,y?n:z)},_3O:function(){var g=this,z=g.gv,G=g._data;K.superClass._3O.call(g);var Y=G.getRect();z.isEditable(G)&&(g.dragRect={x:Y.x+Y.width+G._padding,y:Y.y+10,width:G.getDraggerImageWidth(),height:G.getDraggerImageHeight()},g._68o(g.dragRect))},rectIntersects:function(u){var q=this._79o();return Z.Default.intersection(q,u)?!0:void 0},$9f:function(E){var m=this.gv,D=this._data;m.sm().contains(D)&&E.stopPropagation()}});var Y=Z.HtmlNode=function(){Y.superClass.constructor.call(this)};Z.Default.def(Y,Z.Node,{ms_ac:["html","context","scalable","padding","draggerImage","draggerImageWidth","draggerImageHeight"],_padding:Z.Default.isTouchable?12:6,_image:null,_scalable:!0,_draggerImage:"node_dragger",_draggerImageWidth:20,_draggerImageHeight:20,setHtml:function(G){var U=this,D=U._html;U._html=G,"html"===U.getHtmlType()&&"Handlebars"in _&&(U.$10f=Handlebars.compile(G)),U.$13f(),U.fp("html",D,G)},setContext:function(d){var M=this,W=M._context;M._context=d,M.fp("context",W,d),M.$13f()},setScalable:function(l){var Y=this,u=Y._scalable;Y._scalable=l,Y.fp("scalable",u,l),Y.$13f()},getHtmlType:function(){var A=this._html;return A?"string"==typeof A?"html":A.getView?"ht":"dom":null},$13f:function(){var n=this,m=n._html,D=n.$10f;if(m){var s=r(),l=!1,L=n.getHtmlType();if(U(s,p,g),U(s,X,W),U(s,M,E),"html"===L?(s.innerHTML=D?D(n.getContext()||{}):m,l=!0):"ht"===L?(x(s,m.getView()),l=!0):"dom"===L&&(x(s,m),l=!0),l){var i=2*n._padding;x(Q(),s),n.$5f=s.scrollWidth,n.$6f=s.scrollHeight,n._width=n.$5f+i,n._height=n.$6f+i,n._originWidth=n._width,n._originHeight=n._height,y(Q(),s)}}},getUIClass:function(){return Z.HtmlNodeUI}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);