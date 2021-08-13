!function(s,h){"use strict";var A="ht",o=s[A],L="innerHTML",y="className",g=null,J="px",R=o.Default,e=R.getInternal(),k="0",Q=function(){return document},V=function(L){return Q().createElement(L)},U=function(){return V("canvas")},l=function(x,i,V){x.style.setProperty(i,V,g)},K=function(c,P,L){R.def(o.widget[c],P,L)},S=function(l,W){l.appendChild(W)},P=function(x,b){x.removeChild(b)},d=e.addEventListener,M=e.removeEventListener,Y=R.isTouchable,I=R.isTouchEvent;e.addMethod(R,{menuLabelFont:(Y?"16":"13")+"px arial, sans-serif",menuLabelColor:"#000",menuBackground:"#F0EFEE",menuHoverBackground:"#648BFE",menuHoverLabelColor:"#fff",menuSeparatorWidth:1,menuSeparatorColor:"#999"},!0),o.widget.Menu=function(I){var T=this,N=T._view=e.createView(null,T),j=T.$1g=new o.widget.ContextMenu,z=V("ul");j._r=!0,j._view[y]+=" ht-widget-dropdownmenu",N[y]="ht-widget-menu",z[y]="header",l(N,"margin",k),l(N,"padding",k),l(N,"background",R.menuBackground),l(N,"-webkit-user-select","none"),l(N,"-moz-user-select","none"),l(N,"user-select","none"),l(N,"text-align","left"),l(N,"border-bottom",R.menuSeparatorWidth+"px solid "+R.menuSeparatorColor),l(N,"cursor","default"),l(N,"overflow","auto"),l(N,"white-space","nowrap"),l(N,"font",R.menuLabelFont),l(N,"color",R.menuLabelColor),l(N,"box-sizing","border-box"),l(N,"-moz-box-sizing","border-box"),l(z,"list-style","none"),l(z,"margin",k),l(z,"padding",k),l(z,"display","inline-block"),S(N,z),T.setItems(I),T.$2g=function(u){T.$3g(u)},T.$4g=function(s){T.$5g(s)},T.$6g=function(h){T.$7g(h)},T.$8g=function(W){T.$9g(W)},T.$9b=function(P){T.$10g(P)},T._autoShow=!0,T.setAutoShow(!1),j.afterHide=function(){T.$11g()},j.afterShow=function(){T.$12g()},M(Q(),"keydown",j.$3b),T.$3b=function(B){T.$13g(B)},T.invalidate()},K("Menu",h,{_items:g,$14g:R.menuHoverBackground,$15g:R.menuHoverLabelColor,$16g:{},_enableGlobalKey:!1,ms_v:1,$21g:"smallicons",$22g:0,$23g:0,$24g:"left",getDropDownMenu:function(){return this.$1g},setLayout:function(Y){var q=this;if(q.$21g=Y,q.setItems(q._items),"largeicons"===Y){for(var G=q._view.querySelectorAll(".header-item"),c=0,t=0;t<G.length;t++){var X=G[t];c=Math.max(c,X.clientWidth)}for(var t=0;t<G.length;t++){var X=G[t];l(X,"min-width",c+J)}}this.invalidate()},getLayout:function(){return this.$21g},setHeaderItemHGap:function(B){this.$22g=B;for(var L=this._view.querySelectorAll(".header-item"),U=0;U<L.length;U++){var m=L[U];l(m,"margin-left",B+J),l(m,"margin-right",B+J)}},getHeaderItemHGap:function(){return this.$22g},setHeaderItemVGap:function(U){this.$23g=U;for(var z=this._view.querySelectorAll(".header-item"),W=0;W<z.length;W++){var P=z[W];l(P,"margin-top",U+J),l(P,"margin-bottom",U+J)}},getHeaderItemVGap:function(){return this.$24g},setHeaderItemAlign:function(R){this.$24g=R,l(this._view,"text-align",R)},getHeaderItemAlign:function(){return this.$23g},enableGlobalKey:function(){var J=this,i=J._enableGlobalKey;i===!1&&(d(Q(),"keydown",J.$3b),J._enableGlobalKey=!0)},disableGlobalKey:function(){this._enableGlobalKey=!1,M(Q(),"keydown",this.$3b)},setHoverBackground:function(e){this.$14g=e},setHoverColor:function(O){this.$15g=O},setItems:function(J){var j=this,N=j._view,f=j.$21g;if(j._items=J,N.children[0][L]="",j.$16g={},J&&J.length){for(var Y=N.children[0],x=0,F=Q().createDocumentFragment();x<J.length;x++){var b=J[x],H=V("li"),d=V("span");if(b.icon){var X=U();X[y]="menu-item-icon","smallicons"===f?(l(X,"height","1.2em"),l(X,"width","1.2em"),l(X,"vertical-align","middle")):(l(X,"height","32px"),l(X,"width","32px"),l(X,"display","block"),l(X,"margin","0 auto")),X.$20g=b.icon,S(H,X)}H[y]="header-item",l(H,"display","inline-block"),l(H,"vertical-align","top"),l(H,"padding","0 1.2em"),l(H,"line-height","1.8em"),"largeicons"===f&&l(H,"text-align","center"),l(H,"background-color","rgba(0,0,0,0)"),H.setAttribute("data-index",x),j.$16g[x]=b.items,d[L]=b.label,"iconsonly"!==f&&S(H,d),S(F,H)}S(Y,F)}},showDropdownMenu:function(Y){var k=this,U=k.$16g[Y],K=k.$1g,I=k._view.children[0].children[Y],S=k.$17g;if(I&&I!==S){S&&k.hideDropdownMenu();var s=I.getBoundingClientRect(),_=R.getWindowInfo();k.$17g=I,K.setItems(U),K.show(s.left+_.left,s.top+s.height+_.top,!1)}},hideDropdownMenu:function(){this.$1g.hide()},getItemByProperty:function(e,z){var P=this,h=P._items;return h&&0!==h.length?P.$1g.getItemByProperty(e,z,h):g},$12g:function(){var a=this,b=a.$17g;b.style.background=a.$14g,b.style.color=a.$15g,a._autoShow||d(Q(),Y?"touchstart":"mousedown",a.$9b)},$11g:function(){var R=this,k=R.$17g;k&&(k.style.background="",k.style.color="",R.$17g=g),M(Q(),Y?"touchstart":"mousedown",R.$9b)},$10g:function(m){var d=this,D=d._view,$=d.$1g,q=D.children[0];!Q().body.contains(D)||q.contains(m.target)||$._view.contains(m.target)||d.hideDropdownMenu()},$13g:function(R){var W=this,s=W.$1g;Q().body.contains(W._view)&&s.$13b.$4b.call(s.$13b,R,W._items)},setAutoShow:function(R){var y=this,l=y.$1g,e=y._view;y._autoShow!==R&&(y._autoShow?(M(e,"mouseover",y.$2g),M(e,"mouseout",y.$4g),M(l._view,"mouseout",y.$4g),Y||(d(e,"mouseover",y.$8g),d(e,"mouseout",y.$8g)),d(e,Y?"touchstart":"mousedown",y.$6g)):(M(e,"mouseover",y.$8g),M(e,"mouseout",y.$8g),M(e,Y?"touchstart":"mousedown",y.$6g),M(Q(),Y?"touchstart":"mousedown",y.$9b),Y||(d(e,"mouseover",y.$2g),d(e,"mouseout",y.$4g),d(l._view,"mouseout",y.$4g))),y._autoShow=R)},$3g:function(k){var Y=this,S=Y._view.children[0],r=k.target;if(S!==r&&S.contains(r)){for(;"header-item"!==r[y];)r=r.parentNode;Y.showDropdownMenu(r.getAttribute("data-index"))}},$5g:function(n){var O=this,w=O._view.children[0],r=O.$1g,S=n.target,E=n.relatedTarget;!w.contains(S)&&!r._view.contains(S)||w.contains(E)||r._view.contains(E)||O.hideDropdownMenu()},$7g:function(x){x.preventDefault();var P=this,X=P._view.children[0],G=P.$1g,m=x.target;if(R.isLeftButton(x)&&X!==m&&X.contains(m))if(I(x)){for(;"header-item"!==m[y];)m=m.parentNode;var c=m.getAttribute("data-index"),G=P.$1g,r=P._view.children[0].children[c],v=P.$17g;G.isShowing()&&P.hideDropdownMenu(),r!==v&&P.showDropdownMenu(c)}else if(G.isShowing())P.hideDropdownMenu();else{for(;"header-item"!==m[y];)m=m.parentNode;P.showDropdownMenu(m.getAttribute("data-index"))}},$9g:function(R){var S=this,h=S._view,m=S.$1g,l=R.target;if(h.contains(l)){for(var i=h.querySelectorAll(".header-item"),n=g,v=0;v<i.length;v++){var $=i[v];$.style.background="",$.style.color="","mouseover"===R.type?$.contains(l)&&(n=$):"mouseout"===R.type&&m.isShowing()&&S.$17g===$&&(n=$)}m.isShowing()&&(n||(n=S.$17g),S.showDropdownMenu(n.getAttribute("data-index"))),n&&(n.style.background=S.$14g,n.style.color=S.$15g)}},getShowingMenuIndex:function(){var p=this.$17g;return p?p.getAttribute("data-index"):-1},addTo:function(u){var t=this,x=t._view;S(u,x),t.invalidate()},dispose:function(){var X=this,q=X._view,O=X.$1g;q&&(X._autoShow?(M(q,"mouseover",X.$2g),M(q,"mouseout",X.$4g),M(O._view,"mouseout",X.$4g)):(M(q,"mouseover",X.$8g),M(q,"mouseout",X.$8g),M(q,Y?"touchstart":"mousedown",X.$6g),M(Q(),Y?"touchstart":"mousedown",X.$9b)),M(Q(),"keydown",X.$3b),O.dispose(),q.parentNode&&P(q.parentNode,q),X._view=X.$1g=X.$16g=X._items=X.$17g=X.$2g=X.$4g=X.$6g=X.$8g=X.$9b=X.$3b=g)},$19g:function(V,q,f,b){var r=e.initContext(V);e.translateAndScale(r,0,0,1),r.clearRect(0,0,f,b),R.drawStretchImage(r,R.getImage(q),"fill",0,0,f,b),r.restore()},validateImpl:function(){var O,G,$,b=this,T=b._view,Y=T.querySelectorAll(".menu-item-icon");for($=0;$<Y.length;$++){var Z=Y[$];O=Z.clientWidth,G=Z.clientHeight,O&&G&&(e.setCanvas(Z,O,G),b.$19g(Z,R.getImage(Z.$20g),O,G))}}})}("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:(0,eval)("this"),Object);