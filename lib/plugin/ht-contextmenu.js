!function(W,O){"use strict";var $="ht",S=W[$],n="position",t="absolute",N="px",C="left",E="top",L="innerHTML",R="className",Y="width",e="height",l="0",B="display",k="none",p="visibility",a="user-select",G="margin",y="padding",Q=null,c=S.Color,g=S.Default,M=g.getInternal(),Z=W.setTimeout,F=W.setInterval,i=W.clearTimeout,P=W.clearInterval,m=W.parseInt,h=g.isLeftButton,U=g.isDragging,A=g.startDragging,X=g.getDistance,s=g.isTouchable,x=g.isTouchEvent,q=g.getPagePoint,w=g.isRightButton,H=c.widgetIconHighlight,r=c.widgetIconBorder,J=c.widgetIconGradient,v=function(){return document},d=function($,j){return $.querySelectorAll(j)},I=function(O){var p=v().createElement(O);return"ul"===O&&(D(p,n,"relative"),D(p,G,l),D(p,y,l),D(p,"list-style",k),D(p,"box-sizing","border-box"),D(p,"-moz-box-sizing","border-box"),D(p,B,"inline-block"),D(p,"vertical-align","text-bottom"),D(p,"border","1px solid "+g.contextMenuBorderColor),D(p,"box-shadow","0 0 16px 1px "+g.contextMenuShadowColor),D(p,"overflow","hidden"),g.contextMenuBorderRadius&&D(p,"border-radius",g.contextMenuBorderRadius+N)),p},T=function(C){var v=C.touches[0];return v?v:C.changedTouches[0]},V=function(){return I("div")},f=function(){return I("canvas")},D=function(f,Z,x){f.style.setProperty(Z,x,Q)},o=function(G,Q,Y){g.def(S.widget[G],Q,Y)},j=function(r,H){r.appendChild(H)},b=function(H,Q){H.removeChild(Q)},u=M.addEventListener,K=M.removeEventListener;M.addMethod(g,{contextMenuCheckIcon:{width:16,height:16,comps:[{type:"border",rect:[1,1,14,14],width:1,color:r},{type:"shape",points:[13,3,7,12,4,8],borderWidth:2,borderColor:H}]},contextMenuRadioIcon:{width:16,height:16,comps:[{type:"circle",rect:[2,2,12,12],borderWidth:1,borderColor:r},{type:"circle",rect:[4,4,8,8],borderWidth:1,borderColor:H,gradient:g.imageGradient,gradientColor:J,background:H}]},contextMenuLabelFont:(s?"16":"13")+"px arial, sans-serif",contextMenuLabelColor:"#000",contextMenuBackground:"#fff",contextMenuDisabledLabelColor:"#888",contextMenuHoverBackground:"#648BFE",contextMenuHoverLabelColor:"#fff",contextMenuSeparatorWidth:1,contextMenuSeparatorColor:"#E5E5E5",contextMenuScrollerColor1:"#FDFDFD",contextMenuScrollerColor2:"#D3D3D3",contextMenuScrollerBorderColor:"#C3C3C3",contextMenuBorderColor:"#C3C3C3",contextMenuShadowColor:"rgba(128, 128, 128, 0.5)",contextMenuBorderRadius:5,contextMenuSubmenuMark:"▶"},!0);var _=function(t){var h=this,x=t._view;h.$11b=t,h.addListeners(),u(x,"contextmenu",function(p){p.preventDefault()});var U=h.$37b=h.$36b.bind(h);u(x,"mouseover",U),u(x,"mouseout",U)};g.def(_,O,{ms_listener:1,getView:function(){return this.$11b._view},handle_touchstart:function(S){if(g.preventDefault(S),h(S)){for(var D=this,t=D.$11b,C=D.getView(),W=C.children,v=0;v<W.length;v++){var e=W[v],r=e.$24b,x=e.$25b;if(r&&r.contains(S.target))return t.scrollUp(e),D.$28b=Z(function(){D.$29b=F(function(){t.scrollUp(e)},100)},500),A(D,S),void 0;if(x&&x.contains(S.target))return t.scrollDown(e),D.$28b=Z(function(){D.$29b=F(function(){t.scrollDown(e)},100)},500),A(D,S),void 0}D.$30b=q(S)}},handle_mousedown:function(A){this.handle_touchstart(A)},handle_touchend:function(f){if(h(f)){var $=this,G=$.$30b,H=x(f)?{x:T(f).pageX,y:T(f).pageY}:{x:f.pageX,y:f.pageY};if(!G||X(G,H)>1)return delete $.$30b,void 0;for(var l=$.getView(),C=$.$11b,b=f.target,I=Q,F=Q,t=C._items,q=l.$26b,r=0;r<q.length;r++)if(F=q[r],F.contains(b)){I=F.getAttribute("data-id");break}if(I&&t){var K=C.$17b(t,function(R){return R._id===I});if(K){var A=!1;K.disabled instanceof Function?A=K.disabled.call(C,K):K.disabled===!0&&(A=!0),A||(K.items?x(f)&&$.$36b(F,!0):C.$1b(K,f))}}delete $.$30b}},$36b:function(f,j){if(!U()){var w,W=this,k=W.$11b,v=W.getView(),l=k.$20b||v.children[0],i=k.$19b,S=v.$26b,a=v.children,O=f.target,q=v.getBoundingClientRect(),s=g.getWindowInfo(),Q=s.width,u=s.height,r=function(H){for(var P=0;P<a.length;P++){var e=a[P],o=new RegExp(H+"$"),$=e[R];if($&&(o.test($)||$.indexOf(H+" ")>=0))return e}},Z=function(g){for(var c=0;c<S.length;c++){var q=S[c],z=new RegExp(g+"$"),L=q[R];if(L&&(z.test(L)||L.indexOf(g+" ")>=0))return q}},y=function(p){var K=Z("menu-item"+p.$45b),o=K.getBoundingClientRect(),x=o.top-q.top,F=o.left-q.left;D(p,E,x+N),D(p,C,F+o.width+N);var A=p.getBoundingClientRect(),U=A.top,T=A.left,O=A.height,h=A.width,I=U+O+2,i=T+h+2;I>u&&D(p,E,x+u-I+N),i>Q&&D(p,C,F-h+N)};if(j)w=f;else{if("mouseover"===f.type){for(var A=0;A<S.length;A++){var P=S[A];if(P.contains(O)){w=P;break}}if(!w&&i){var z=i.parentNode,e=r("submenu"+i.getAttribute("data-id"));(e&&e.contains(O)||z&&z.contains(O))&&(w=i)}}else if("mouseout"===f.type){for(var o=!1,M=f.relatedTarget,A=0;A<a.length;A++){var F=a[A];if("hidden"!==F.style.visibility&&F.contains(M)){o=!0;break}}if(o)return}!w&&l&&(w=Z("menu-item"+(l.$45b||"NaN")))}if(w!=i){if(i)for(var X=i;X;){if(X[R]=X[R].replace(" menu-item-hover",""),X[R].indexOf("disabled")<0){var J=k.getItemByProperty("_id",X.getAttribute("data-id"));null!=J.background?J.background instanceof Function?D(X,"background-color",J.background.call(k,J)):D(X,"background-color",J.background):D(X,"background-color",g.contextMenuBackground),D(X,"color",g.contextMenuLabelColor)}var B=r("submenu"+X.getAttribute("data-id"));B&&D(B,p,"hidden");var x=X.parentNode;X=Z("menu-item"+(x.$45b||"NaN"))}if(w){for(var T=w,d=[];T;){T[R]+=" menu-item-hover",T[R].indexOf("disabled")<0&&(D(T,"background-color",g.contextMenuHoverBackground),D(T,"color",g.contextMenuHoverLabelColor));var h=r("submenu"+T.getAttribute("data-id"));h&&(D(h,p,"visible"),d.push(h));var x=T.parentNode;T=Z("menu-item"+(x.$45b||"NaN"))}d.reverse(),d.forEach(function(b){y(b)})}}k.$19b=w,k.$20b=w?w.parentNode:v.children[0]}},handle_mouseup:function(W){this.handle_touchend(W)},handleWindowTouchEnd:function(){var w=this;w.$28b!=Q&&(i(w.$28b),delete w.$28b),w.$29b!=Q&&(P(w.$29b),delete w.$29b),delete w.$34b,delete w.$30b,delete w.$35b},handleWindowMouseUp:function(A){this.handleWindowTouchEnd(A)},handle_mousemove:function(L){this.handle_touchmove(L)},handle_touchmove:function(f){if(!U()&&h(f)){for(var E=this,J=E.getView().children,u=Q,o=0;o<J.length;o++){var d=J[o];if(d.contains(f.target)){u=d;break}}var N=E.$30b,y=x(f)?{x:T(f).pageX,y:T(f).pageY}:{x:f.pageX,y:f.pageY};u&&N&&X(N,y)>2&&(A(E,f),E.$34b=u,E.$35b=u.$18b)}},handleWindowTouchMove:function(K){K.preventDefault();var U=this,M=U.$11b,Q=U.$34b,c=U.$35b,d=U.$30b;if(d&&Q){var G=x(K)?{x:T(K).pageX,y:T(K).pageY}:{x:K.pageX,y:K.pageY},m=G.y-d.y;m>0?M.scrollUp(Q,Q.$18b-(c-m)):M.scrollDown(Q,c-m-Q.$18b)}},handleWindowMouseMove:function(q){this.handleWindowTouchMove(q)},$10b:function(k,R){k.preventDefault();for(var Z=this,A=Z.getView().children,y=Q,f=0;f<A.length;f++){var J=A[f];if(J.contains(k.target)){y=J;break}}if(y){var i=this.$11b,C=i.getRowHeight();Math.abs(R)>.05&&(R>0?i.scrollUp(y,R*C):0>R&&i.scrollDown(y,-R*C))}},handle_mousewheel:function(M){this.$10b(M,M.wheelDelta/40)},handle_DOMMouseScroll:function(v){this.$10b(v,-v.detail)},$44b:function(f){this.getView().contains(f.target)||this.$11b.hide()},$41b:function(U){g.preventDefault(U)},$4b:function(O,X){var $=this.$11b;if(X=X||$._items,X&&X.length&&O.keyCode){var F=[O.keyCode];O.shiftKey&&F.push(16),O.ctrlKey&&F.push(17),O.altKey&&F.push(18),/mac/.test(W.navigator?W.navigator.userAgent.toLowerCase():"")?O.metaKey&&F.push(17):O.metaKey&&F.push(91),F.sort();var M=F.join(),e=$.$17b(X,function(d){if(d.key){var Z=d.key.slice(0);return Z.sort(),M===Z.join()}});if(e){e.preventDefault!==!1&&O.preventDefault();var U=!1;e.disabled instanceof Function?U=e.disabled.call($,e):e.disabled===!0&&(U=!0),U||$.$1b(e,O)}}},$39b:function(X){this.$32b=q(X)},$38b:function(V){if(g.preventDefault(V),!h(V)){var N=this;N._showContextMenu=w(V),N._showContextMenu||(N.$31b=q(V),N.$33b=Z(function(){N._showContextMenu=!0,delete N.$33b},600))}},$40b:function(N){var c=this;c._showContextMenu&&(w(N)?c.$11b.show(N):c.$31b&&(c.$32b?X(c.$31b,c.$32b)<10&&c.$11b.show(N):c.$11b.show(N))),c.$33b!=Q&&(i(c.$33b),delete c.$33b),delete c.$31b,delete c.$32b}}),S.widget.ContextMenu=function(F){var o=this,l=o._view=M.createView(null,o);l[R]="ht-widget-contextmenu",o.setItems(F),o.$13b=new _(o),D(l,"font",g.contextMenuLabelFont),D(l,n,t),D(l,"cursor","default"),D(l,"-webkit-"+a,k),D(l,"-moz-"+a,k),D(l,"-ms-"+a,k),D(l,a,k),D(l,"box-sizing","border-box"),D(l,"-moz-box-sizing","border-box"),g.baseZIndex!=Q&&D(l,"z-index",m(g.baseZIndex)+2+""),o.$3b=function(H){o.$13b.$4b(H)}},o("ContextMenu",O,{$16b:Q,$5b:0,_items:Q,$21b:Q,_enableGlobalKey:!1,ms_v:1,enableGlobalKey:function(){var T=this,A=T._enableGlobalKey;A===!1&&(u(v(),"keydown",T.$3b),T._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,K(v(),"keydown",this.$3b)},setItems:function(D){this._items=D},getItems:function(){return this._items},getVisibleFunc:function(){return this.$16b},setVisibleFunc:function(R){this.$16b=R},setLabelMaxWidth:function(H){this.$43b=H},$1b:function(m,l){var s=this;if("check"===m.type)m.selected=!m.selected;else if("radio"===m.type){var f=m.groupId;s.$17b(s._items,function(K){K.groupId===f&&(K.selected=!1)}),m.selected=!0}if(s.hide(),m.action)m.action.apply(m.scope||s,[m,l]);else if(m.href){var B=m.linkTarget||"_self";W.open(m.href,B)}},getItemById:function($){return this.getItemByProperty("id",$)},setItemVisible:function(x,O){var y=this.getItemById(x);y&&(y.visible=O)},getItemByProperty:function(M,O,T){var h=this;if(T=T||h._items,!T||0===T.length)return Q;var j=h.$17b(T,function(R){return R[M]===O});return j||Q},scrollUp:function(C,W){var p=this;if(W=W==Q?20:W,W=m(W),0!==W){var n=0;C.$18b>W&&(n=C.$18b-W),p.$42b(C,n),C.scrollTop=n,C.$18b=n}},scrollDown:function(k,U){var p=this;if(U=U==Q?20:U,U=m(U),0!==U){var D=k.$22b,H=k.$23b,C=D-H;H+k.$18b+U<D&&(C=k.$18b+U),p.$42b(k,C),k.scrollTop=C,k.$18b=C}},$42b:function(z,M){M=M==Q?z.$18b:M;var d=z.$24b,i=z.$25b;d&&(D(d,"top",M+N),0==M?D(d,B,k):D(d,B,"block")),i&&(D(i,"bottom",-M+N),M==z.$22b-z.$23b?D(i,B,k):D(i,B,"block"))},getRowHeight:function(){return this._view.querySelector(".menu-item").offsetHeight},$17b:function(W,H){for(var I=0;I<W.length;I++){var l=W[I];if(H(l))return l;if(l.items){var J=this.$17b(l.items,H);if(J)return J}}},$2b:function(A,c){for(var q=this,U=0;U<A.length;U++){q.$5b++;var l=A[U];if(l.visible!==!1)if(g.isFunction(l.visible)&&l.visible()===!1)this._clearItemId(l);else if(!q.$16b||q.$16b.call(q,l)){var _=I("li"),J=q.$5b+"";if(D(_,"white-space","nowrap"),D(_,B,"block"),"separator"===l||l.separator===!0){var i=V();i[R]="separator",D(i,e,g.contextMenuSeparatorWidth+N),D(i,"background",g.contextMenuSeparatorColor),j(_,i)}else{l._id=J,_.setAttribute("data-id",J);var v=I("span"),H=I("span"),z=f(),C=V();if(D(v,B,"inline-block"),D(v,e,"1.2em"),D(H,B,"inline-block"),D(H,e,"1.2em"),D(H,"line-height","1.2em"),z[R]="prefix",D(z,B,"inline-block"),D(z,Y,"1em"),D(z,e,"1em"),D(z,"vertical-align","middle"),D(z,G,"0 0.2em"),"check"===l.type&&l.selected?z[R]+=" check-prefix":"radio"===l.type&&l.selected&&(z[R]+=" radio-prefix"),j(_,z),l.icon){var r=f();r[R]="contextmenu-item-icon",D(r,B,"inline-block"),D(r,e,"1.2em"),D(r,Y,"1.2em"),D(r,"margin-right","0.2em"),D(r,"float","left"),r.$50b=l.icon,r._item=l,j(v,r)}if(H[L]=l.label,j(v,H),j(_,v),C[R]="suffix",D(C,B,"inline-block"),D(C,"margin-left","1em"),D(C,"margin-right","0.4em"),D(C,"text-align","right"),D(C,"font-size","75%"),l.items&&(C[L]=g.contextMenuSubmenuMark),l.suffix&&(C[L]=l.suffix),j(_,C),_[R]="menu-item menu-item"+J,null!=l.background?l.background instanceof Function?D(_,"background-color",l.background.call(q,l)):D(_,"background-color",l.background):D(_,"background-color",g.contextMenuBackground),D(_,"color",g.contextMenuLabelColor),D(_,y,"3px 0"),l.disabled instanceof Function){var m=l.disabled.call(q,l);m&&(_[R]+=" disabled",D(_,"color",g.contextMenuDisabledLabelColor))}else l.disabled&&(_[R]+=" disabled",D(_,"color",g.contextMenuDisabledLabelColor));if(l.items){q.$21b||(q.$21b=new S.List);var k=I("ul");k[R]="submenu"+J,k.$45b=J,D(k,p,"hidden"),D(k,n,t),j(q._view,k),q.$21b.add(k),q.$2b(l.items,k)}}j(c,_)}else this._clearItemId(l);else this._clearItemId(l)}},rebuild:function(){var T=this,e=T._items,X=T._view;if(X&&(X[L]="",T.$21b=Q,T.$5b=0,T.$19b=Q,T.$20b=Q,X.$26b=Q,e&&0!==e.length)){var F=I("ul",T._r);j(X,F),T.$2b(e,F)}},addTo:function(K){if(K){var Z=this,q=Z.$13b;Z.$12b=K,Z.$9b=function(h){q.$44b(h)};var J=Z.$6b=function(T){q.$38b(T)},_=Z.$7b=function(f){q.$39b(f)},y=Z.$8b=function(E){q.$40b(E)};g.mockTouch&&(u(K,"touchstart",J,!0),u(K,"touchmove",_),u(K,"touchend",y)),u(K,"mousedown",J,!0),u(K,"mousemove",_),u(K,"mouseup",y),Z.$27b=function(x){q.$41b(x)},u(K,"contextmenu",Z.$27b)}},showOnView:function(f,H,u){f=f.getView?f.getView():f;var t=g.getWindowInfo(),A=f.getBoundingClientRect();this.show(A.left+t.left+H,A.top+t.top+u)},show:function($,i,F){var W=this,F=F==Q?!0:!1,e=W._view;if(e){if(W.invalidate(),1===arguments.length){var w=$;if(x(w)){var b=T(w);$=b.pageX,i=b.pageY}else $=w.pageX,i=w.pageY}var G=g.getWindowInfo(),h=G.width,r=G.height,p=G.left,U=G.top,s={pageX:$,pageY:i,clientX:$-p,clientY:i-U,target:1,originEvent:w},c=s.clientX,y=s.clientY,k=function(M){M.style.height=r-6+N;var I=V(),Q=V(),w=function(b){D(b,n,t),D(b,"text-align","center"),D(b,Y,"100%"),D(b,"font-size",10+N),D(b,"padding","2px 0"),D(b,"border","0px solid "+g.contextMenuScrollerBorderColor),D(b,"background-color",g.contextMenuScrollerColor1),b.style.backgroundImage="-webkit-linear-gradient(top, "+g.contextMenuScrollerColor1+", "+g.contextMenuScrollerColor2+")",b.style.backgroundImage="linear-gradient(to bottom, "+g.contextMenuScrollerColor1+", "+g.contextMenuScrollerColor2+")"};I[R]="menu-arrow-item menu-arrow-item-top",Q[R]="menu-arrow-item menu-arrow-item-bottom",w(I),D(I,"top",l),D(I,"left",l),D(I,"border-bottom-width",1+N),I[L]="▲",w(Q),D(Q,"bottom",l),D(Q,"left",l),D(Q,"border-top-width",1+N),Q[L]="▼",M.$24b=I,M.$25b=Q,M.$18b=M.scrollTop,M.$22b=M.scrollHeight,M.$23b=M.clientHeight,j(M,I),j(M,Q),W.$42b(M)};W.beforeShow&&W.beforeShow(s);var o=W._items;if(o&&(w&&w.preventDefault(),o.length)){W.rebuild();var P=e.$26b=d(e,".menu-item");if(P.length){g.appendToScreen(e);var K=e.children[0];K.offsetHeight>r&&k(K);var z=y+(F?1:0),q=c+(F?1:0),X=function(z){for(var P=0,m=0,c=0,O=W.$43b;c<z.children.length;c++){var X=z.children[c];if(X.getAttribute("data-id")){var u=X.children[1],b=X.children[2],C=u.children;if(O){var V=C[0];C.length>1&&(V=C[1]),V.offsetWidth>O&&(V[L]="<marquee scrollamount='3'>"+V[L]+"</marquee>",V.children[0].style.verticalAlign="text-bottom",D(V,Y,O+N),D(V,B,"inline-block"))}var Q=u.offsetWidth,i=b.offsetWidth;Q>P&&(P=Q),i>m&&(m=i)}}for(c=0;c<z.children.length;c++){var X=z.children[c];if(X.getAttribute("data-id")){var u=X.children[1],b=X.children[2],A=u.children[0],T=u.children[1];!T&&A.style.width&&D(A,Y,P+N),D(u,Y,P+N),D(b,Y,m+N)}}};X(K);var f=y+3+e.offsetHeight,J=c+3+e.offsetWidth;f>r?D(e,E,z-(f-r)+U+N):D(e,E,z+U+N),J>h?D(e,C,q-(J-h)+p+N):D(e,C,q+p+N);var A=W.$21b;A&&A.each(function(u){X(u),u.offsetHeight>r&&k(u)}),W.$9b&&(g.mockTouch&&u(v(),"touchstart",W.$9b,!0),u(v(),"mousedown",W.$9b,!0)),W.afterShow&&W.afterShow(s),W.$47b()}}}},isShowing:function(){return this._view?this._view.parentNode!=Q:!1},getRelatedView:function(){return this.$12b},hide:function(){var o=this,s=o._view;s&&s.parentNode&&(b(s.parentNode,s),g.mockTouch&&K(v(),"touchstart",o.$9b,!0),K(v(),"mousedown",o.$9b,!0),o.afterHide&&o.afterHide())},dispose:function(){var E=this,P=E.$12b,h=E._view;h&&(this.hide(),E.disableGlobalKey(),P&&(g.mockTouch&&(K(P,"touchstart",E.$6b,!0),K(P,"touchmove",E.$7b),K(P,"touchend",E.$8b)),K(P,"mousedown",E.$6b,!0),K(P,"mousemove",E.$7b),K(P,"mouseup",E.$8b),K(P,"contextmenu",E.$27b)),E._view=E._items=E.$21b=E.$19b=E.$12b=E.beforeShow=E.afterShow=E.afterHide=E.$9b=E.$3b=E.$6b=E.$7b=E.$8b=E.$27b=Q)},$46b:function(a,A,H,Z,v){var q=M.initContext(a);M.translateAndScale(q,0,0,1),q.clearRect(0,0,H,Z),g.drawStretchImage(q,g.getImage(A),"fill",0,0,H,Z,v,this),q.restore()},$47b:function(){var O,Y,$,N=this,W=N._view;if(N.isShowing()){var g=d(W,".check-prefix");for($=0;$<g.length;$++){var T=g[$];O=T.clientWidth,Y=T.clientHeight,T.$48b=O,T.$49b=Y,M.setCanvas(T,O,Y)}var X=d(W,".radio-prefix");for($=0;$<X.length;$++){var y=X[$];O=y.clientWidth,Y=y.clientHeight,y.$48b=O,y.$49b=Y,M.setCanvas(y,O,Y)}var f=d(W,".contextmenu-item-icon");for($=0;$<f.length;$++){var a=f[$];O=a.clientWidth,Y=a.clientHeight,a.$48b=O,a.$49b=Y,M.setCanvas(a,O,Y)}}},validateImpl:function(){var $,E,v,U=this,c=U._view;if(U.isShowing()){var l=d(c,".check-prefix");for(v=0;v<l.length;v++){var M=l[v];$=M.$48b,E=M.$49b,$&&E&&U.$46b(M,g.contextMenuCheckIcon,$,E)}var J=d(c,".radio-prefix");for(v=0;v<J.length;v++){var y=J[v];$=y.$48b,E=y.$49b,$&&E&&U.$46b(y,g.contextMenuRadioIcon,$,E)}var k=d(c,".contextmenu-item-icon");for(v=0;v<k.length;v++){var a=k[v];$=a.$48b,E=a.$49b,$&&E&&U.$46b(a,g.getImage(a.$50b),$,E,a._item)}}},_clearItemId:function(V){var Q=this;delete V._id,V.items&&V.items.forEach(function(V){Q._clearItemId(V)})}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);