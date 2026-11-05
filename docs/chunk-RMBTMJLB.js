import{$ as ut,$a as b,Aa as pi,Ac as _n,Ad as ft,B as vt,Bb as se,Bc as fn,C as Wt,Ca as B,Cb as le,Cc as bn,Cd as Tt,D as V,Dc as mt,Dd as yi,E as Ui,Ea as Q,Ec as vn,F as ve,Fa as G,Fc as yn,Gc as xt,Gd as Fn,Hb as Re,Hc as xn,Hd as Ln,Ic as fi,J as yt,Ja as _,Jc as wn,Jd as Bn,K as M,Ka as c,Kc as kn,Kd as zn,L as I,La as l,Lc as bi,Ld as We,M as ne,Ma as E,Mb as q,N as s,Na as re,Nc as it,Nd as Nn,Oa as Me,Ob as k,Oc as z,Od as Kt,P as Qi,Pb as gi,Pc as nt,Q as Yt,Qc as Cn,Qd as Vn,R as Z,Rb as en,Rc as Mn,Rd as jn,S as $,Sb as Te,Sc as ze,T as oe,Tb as nn,Tc as Gt,Ub as Ae,V as H,Va as Ct,Vb as on,Vc as qt,W as j,Wa as Se,Wc as Ne,Xa as D,Xb as Fe,Xc as Sn,Y as S,Ya as Ji,Yc as ht,Z as W,Za as F,Zc as Ve,_ as ye,_a as T,a as U,ab as ct,ac as an,ad as je,ba as ae,bb as J,bc as rn,c as C,ca as st,cb as y,da as P,db as x,dc as sn,ea as xe,ec as ln,fc as cn,fd as On,ga as Gi,gb as tt,gd as En,hb as Oe,hc as dn,hd as Dn,ia as Xt,ib as w,ic as Mt,j as wt,ja as p,jb as It,jc as L,k as Ni,kb as m,kc as mn,kd as In,la as Dt,lb as Pt,lc as hn,m as ot,ma as we,mb as Ee,mc as Ut,md as Pn,na as ke,nb as tn,nc as dt,o as Vi,oa as gt,oc as ce,p as ji,pa as Bt,pb as De,pd as Rn,qa as qi,qb as Ie,qc as de,qd as Tn,r as at,ra as Ce,rb as Pe,s as rt,sa as g,sc as _t,ta as O,tc as Le,td as He,u as Hi,ua as A,uc as Qt,ud as vi,v as Wi,va as Ki,vb as Rt,vc as _i,w as Et,wa as lt,wb as et,wc as pn,x as hi,xa as kt,xc as un,xd as An,y as Yi,ya as Zi,yb as ui,yc as gn,yd as zt,z as Xi,za as $i,zc as Be,zd as Nt}from"./chunk-ZQFFOVI5.js";import{a as Lt,b as be}from"./chunk-JKOY2XUY.js";var Vo=["*"];var jo=new I("MAT_CARD_CONFIG"),Pr=(()=>{class n{appearance;constructor(){let t=s(jo,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(e,i){e&2&&w("mat-mdc-card-outlined",i.appearance==="outlined")("mdc-card--outlined",i.appearance==="outlined")("mat-mdc-card-filled",i.appearance==="filled")("mdc-card--filled",i.appearance==="filled")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Vo,decls:1,vars:0,template:function(e,i){e&1&&(T(),b(0))},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0})}return n})(),Rr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Tr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),Ar=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var Fr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[L]})}return n})();function Hn(n){return Error(`Unable to find icon with the name "${n}"`)}function Ho(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Wn(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function Yn(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var St=class{url;svgText;options;svgElement=null;constructor(o,t,e){this.url=o,this.svgText=t,this.options=e}},Un=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,i,a){this._httpClient=t,this._sanitizer=e,this._errorHandler=a,this._document=i}addSvgIcon(t,e,i){return this.addSvgIconInNamespace("",t,e,i)}addSvgIconLiteral(t,e,i){return this.addSvgIconLiteralInNamespace("",t,e,i)}addSvgIconInNamespace(t,e,i,a){return this._addSvgIconConfig(t,e,new St(i,null,a))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,i,a){let r=this._sanitizer.sanitize(Yt.HTML,i);if(!r)throw Yn(i);let d=Qt(r);return this._addSvgIconConfig(t,e,new St("",d,a))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,i){return this._addSvgIconSetConfig(t,new St(e,null,i))}addSvgIconSetLiteralInNamespace(t,e,i){let a=this._sanitizer.sanitize(Yt.HTML,e);if(!a)throw Yn(e);let r=Qt(a);return this._addSvgIconSetConfig(t,new St("",r,i))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Yt.RESOURCE_URL,t);if(!e)throw Wn(t);let i=this._cachedIconsByUrl.get(e);return i?wt(Ye(i)):this._loadSvgIconFromConfig(new St(t,null)).pipe(ve(a=>this._cachedIconsByUrl.set(e,a)),ot(a=>Ye(a)))}getNamedSvgIcon(t,e=""){let i=Xn(e,t),a=this._svgIconConfigs.get(i);if(a)return this._getSvgFromConfig(a);if(a=this._getIconConfigFromResolvers(e,t),a)return this._svgIconConfigs.set(i,a),this._getSvgFromConfig(a);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):Ni(Hn(i))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?wt(Ye(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ot(e=>Ye(e)))}_getSvgFromIconSetConfigs(t,e){let i=this._extractIconWithNameFromAnySet(t,e);if(i)return wt(i);let a=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Hi(d=>{let f=`Loading icon set URL: ${this._sanitizer.sanitize(Yt.RESOURCE_URL,r.url)} failed: ${d.message}`;return this._errorHandler.handleError(new Error(f)),wt(null)})));return ji(a).pipe(ot(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw Hn(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let i=e.length-1;i>=0;i--){let a=e[i];if(a.svgText&&a.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(a),d=this._extractSvgIconFromSet(r,t,a.options);if(d)return d}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(ve(e=>t.svgText=e),ot(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?wt(null):this._fetchIcon(t).pipe(ve(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,i){let a=t.querySelector(`[id="${e}"]`);if(!a)return null;let r=a.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,i);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),i);let d=this._svgElementFromString(Qt("<svg></svg>"));return d.appendChild(r),this._setSvgAttributes(d,i)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let i=e.querySelector("svg");if(!i)throw Error("<svg> tag not found");return i}_toSvgElement(t){let e=this._svgElementFromString(Qt("<svg></svg>")),i=t.attributes;for(let a=0;a<i.length;a++){let{name:r,value:d}=i[a];r!=="id"&&e.setAttribute(r,d)}for(let a=0;a<t.childNodes.length;a++)t.childNodes[a].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[a].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:i}=t,a=i?.withCredentials??!1;if(!this._httpClient)throw Ho();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(Yt.RESOURCE_URL,e);if(!r)throw Wn(e);let d=this._inProgressUrlFetches.get(r);if(d)return d;let h=this._httpClient.get(r,{responseType:"text",withCredentials:a}).pipe(ot(f=>Qt(f)),Yi(()=>this._inProgressUrlFetches.delete(r)),Xi());return this._inProgressUrlFetches.set(r,h),h}_addSvgIconConfig(t,e,i){return this._svgIconConfigs.set(Xn(t,e),i),this}_addSvgIconSetConfig(t,e){let i=this._iconSetConfigs.get(t);return i?i.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let i=0;i<this._resolvers.length;i++){let a=this._resolvers[i](e,t);if(a)return Wo(a)?new St(a.url,null,a.options):new St(a,null)}}static \u0275fac=function(e){return new(e||n)(ne(an,8),ne(rn),ne(j,8),ne(ye))};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ye(n){return n.cloneNode(!0)}function Xn(n,o){return n+":"+o}function Wo(n){return!!(n.url&&n.options)}var Yo=["*"],Xo=new I("MAT_ICON_DEFAULT_OPTIONS"),Uo=new I("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(j),o=n?n.location:null;return{getPathname:()=>o?o.pathname+o.search:""}}}),Qn=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Qo=Qn.map(n=>`[${n}]`).join(", "),Go=/^url\(['"]?#(.*?)['"]?\)$/,Y=(()=>{class n{_elementRef=s(P);_iconRegistry=s(Un);_location=s(Uo);_errorHandler=s(ye);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=U.EMPTY;constructor(){let t=s(new Re("aria-hidden"),{optional:!0}),e=s(Xo,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let i=t.childNodes[e];(i.nodeType!==1||i.nodeName.toLowerCase()==="svg")&&i.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(i=>i.length>0);this._previousFontSetClass.forEach(i=>t.classList.remove(i)),e.forEach(i=>t.classList.add(i)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((i,a)=>{i.forEach(r=>{a.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(Qo),i=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let a=0;a<e.length;a++)Qn.forEach(r=>{let d=e[a],h=d.getAttribute(r),f=h?h.match(Go):null;if(f){let u=i.get(d);u||(u=[],i.set(d,u)),u.push({name:r,value:f[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,i]=this._splitIconName(t);e&&(this._svgNamespace=e),i&&(this._svgName=i),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(i,e).pipe(Et(1)).subscribe(a=>this._setSvgElement(a),a=>{let r=`Error retrieving icon ${e}:${i}! ${a.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,i){e&2&&(B("data-mat-icon-type",i._usingFontIcon()?"font":"svg")("data-mat-icon-name",i._svgName||i.fontIcon)("data-mat-icon-namespace",i._svgNamespace||i.fontSet)("fontIcon",i._usingFontIcon()?i.fontIcon:null),It(i.color?"mat-"+i.color:""),w("mat-icon-inline",i.inline)("mat-icon-no-color",i.color!=="primary"&&i.color!=="accent"&&i.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",k],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Yo,decls:1,vars:0,template:function(e,i){e&1&&(T(),b(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),Xe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[L]})}return n})();var Gn=kn();function eo(n){return new Ue(n.get(ft),n.get(j))}var Ue=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(o,t){this._viewportRuler=o,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let o=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=o.style.left||"",this._previousHTMLStyles.top=o.style.top||"",o.style.left=z(-this._previousScrollPosition.left),o.style.top=z(-this._previousScrollPosition.top),o.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let o=this._document.documentElement,t=this._document.body,e=o.style,i=t.style,a=e.scrollBehavior||"",r=i.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,o.classList.remove("cdk-global-scrollblock"),Gn&&(e.scrollBehavior=i.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Gn&&(e.scrollBehavior=a,i.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let t=this._document.documentElement,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}};function io(n,o){return new Qe(n.get(zt),n.get(W),n.get(ft),o)}var Qe=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(o,t,e,i){this._scrollDispatcher=o,this._ngZone=t,this._viewportRuler=e,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(this._scrollSubscription)return;let o=this._scrollDispatcher.scrolled(0).pipe(rt(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=o.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=o.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var me=class{enable(){}disable(){}attach(){}};function xi(n,o){return o.some(t=>{let e=n.bottom<t.top,i=n.top>t.bottom,a=n.right<t.left,r=n.left>t.right;return e||i||a||r})}function qn(n,o){return o.some(t=>{let e=n.top<t.top,i=n.bottom>t.bottom,a=n.left<t.left,r=n.right>t.right;return e||i||a||r})}function Ht(n,o){return new Ge(n.get(zt),n.get(ft),n.get(W),o)}var Ge=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(o,t,e,i){this._scrollDispatcher=o,this._viewportRuler=t,this._ngZone=e,this._config=i}attach(o){this._overlayRef,this._overlayRef=o}enable(){if(!this._scrollSubscription){let o=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(o).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();xi(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},no=(()=>{class n{_injector=s(H);constructor(){}noop=()=>new me;close=t=>io(this._injector,t);block=()=>eo(this._injector);reposition=t=>Ht(this._injector,t);static \u0275fac=function(e){return new(e||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),jt=class{positionStrategy;scrollStrategy=new me;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(o){if(o){let t=Object.keys(o);for(let e of t)o[e]!==void 0&&(this[e]=o[e])}}};var qe=class{connectionPair;scrollableViewProperties;constructor(o,t){this.connectionPair=o,this.scrollableViewProperties=t}};var oo=(()=>{class n{_attachedOverlays=[];_document=s(j);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,e,i){return i.observers.length<1?!1:t.eventPredicate?t.eventPredicate(e):!0}static \u0275fac=function(e){return new(e||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ao=(()=>{class n extends oo{_ngZone=s(W);_renderer=s(ke).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--){let a=e[i];if(this.canReceiveEvent(a,t,a._keydownEvents)){this._ngZone.run(()=>a._keydownEvents.next(t));break}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ro=(()=>{class n extends oo{_platform=s(dt);_ngZone=s(W);_renderer=s(ke).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let e=this._document.body,i={capture:!0},a=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[a.listen(e,"pointerdown",this._pointerDownListener,i),a.listen(e,"click",this._clickListener,i),a.listen(e,"auxclick",this._clickListener,i),a.listen(e,"contextmenu",this._clickListener,i)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=e.style.cursor,e.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=Ut(t)};_clickListener=t=>{let e=Ut(t),i=t.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:e;this._pointerDownEventTarget=null;let a=this._attachedOverlays.slice();for(let r=a.length-1;r>-1;r--){let d=a[r],h=d._outsidePointerEvents;if(!(!d.hasAttached()||!this.canReceiveEvent(d,t,h))){if(Kn(d.overlayElement,e)||Kn(d.overlayElement,i))break;this._ngZone?this._ngZone.run(()=>h.next(t)):h.next(t)}}};static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Kn(n,o){let t=typeof ShadowRoot<"u"&&ShadowRoot,e=o;for(;e;){if(e===n)return!0;e=t&&e instanceof ShadowRoot?e.host:e.parentNode}return!1}var so=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(e,i){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),lo=(()=>{class n{_platform=s(dt);_containerElement;_document=s(j);_styleLoader=s(_t);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t="cdk-overlay-container";if(this._platform.isBrowser||bi()){let i=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let a=0;a<i.length;a++)i[a].remove()}let e=this._document.createElement("div");e.classList.add(t),bi()?e.setAttribute("platform","test"):this._platform.isBrowser||e.setAttribute("platform","server"),this._document.body.appendChild(e),this._containerElement=e}_loadStyles(){this._styleLoader.load(so)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),wi=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(o,t,e,i){this._renderer=t,this._ngZone=e,this.element=o.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=t.listen(this.element,"click",i)}detach(){this._ngZone.runOutsideAngular(()=>{let o=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(o,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),o.style.pointerEvents="none",o.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function ki(n){return n&&n.nodeType===1}var Ke=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C;_attachments=new C;_detachments=new C;_positionStrategy;_scrollStrategy;_locationChanges=U.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C;_outsidePointerEvents=new C;_afterNextRenderRef;constructor(o,t,e,i,a,r,d,h,f,u=!1,v,N){this._portalOutlet=o,this._host=t,this._pane=e,this._config=i,this._ngZone=a,this._keyboardDispatcher=r,this._document=d,this._location=h,this._outsideClickDispatcher=f,this._animationsDisabled=u,this._injector=v,this._renderer=N,i.scrollStrategy&&(this._scrollStrategy=i.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=i.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(o){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(o);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Dt(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof t?.onDestroy=="function"&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let o=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),o}dispose(){if(this._disposed)return;let o=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,o&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(o){o!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=o,this.hasAttached()&&(o.attach(this),this.updatePosition()))}updateSize(o){this._config=Lt(Lt({},this._config),o),this._updateElementSize()}setDirection(o){this._config=be(Lt({},this._config),{direction:o}),this._updateElementDirection()}addPanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!0)}removePanelClass(o){this._pane&&this._toggleClasses(this._pane,o,!1)}getDirection(){let o=this._config.direction;return o?typeof o=="string"?o:o.value:"ltr"}updateScrollStrategy(o){o!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=o,this.hasAttached()&&(o.attach(this),o.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let o=this._pane.style;o.width=z(this._config.width),o.height=z(this._config.height),o.minWidth=z(this._config.minWidth),o.minHeight=z(this._config.minHeight),o.maxWidth=z(this._config.maxWidth),o.maxHeight=z(this._config.maxHeight)}_togglePointerEvents(o){this._pane.style.pointerEvents=o?"":"none"}_attachHost(){if(!this._host.parentElement){let o=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ki(o)?o.after(this._host):o?.type==="parent"?o.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(o){}}_attachBackdrop(){let o="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new wi(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(o))}):this._backdropRef.element.classList.add(o)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(o,t,e){let i=_i(t||[]).filter(a=>!!a);i.length&&(e?o.classList.add(...i):o.classList.remove(...i))}_detachContentWhenEmpty(){let o=!1;try{this._detachContentAfterRenderRef=Dt(()=>{o=!0,this._detachContent()},{injector:this._injector})}catch(t){if(o)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let o=this._scrollStrategy;o?.disable(),o?.detach?.()}},Zn="cdk-overlay-connected-position-bounding-box",qo=/([A-Za-z%]+)$/;function he(n,o){return new Ze(o,n.get(ft),n.get(j),n.get(dt),n.get(lo))}var Ze=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C;_resizeSubscription=U.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(o,t,e,i,a){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=a,this.setOrigin(o)}attach(o){this._overlayRef&&this._overlayRef,this._validatePositions(),o.hostElement.classList.add(Zn),this._overlayRef=o,this._boundingBox=o.hostElement,this._pane=o.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let o=this._originRect,t=this._overlayRect,e=this._viewportRect,i=this._containerRect,a=[],r;for(let d of this._preferredPositions){let h=this._getOriginPoint(o,i,d),f=this._getOverlayPoint(h,t,d),u=this._getOverlayFit(f,t,e,d);if(u.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(d,h);return}if(this._canFitWithFlexibleDimensions(u,f,e)){a.push({position:d,origin:h,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(h,d)});continue}(!r||r.overlayFit.visibleArea<u.visibleArea)&&(r={overlayFit:u,overlayPoint:f,originPoint:h,position:d,overlayRect:t})}if(a.length){let d=null,h=-1;for(let f of a){let u=f.boundingBoxRect.width*f.boundingBoxRect.height*(f.position.weight||1);u>h&&(h=u,d=f)}this._isPushed=!1,this._applyPosition(d.position,d.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Vt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Zn),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let o=this._lastPosition;o?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(o,this._getOriginPoint(this._originRect,this._containerRect,o))):this.apply()}withScrollableContainers(o){return this._scrollables=o,this}withPositions(o){return this._preferredPositions=o,o.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(o){return this._viewportMargin=o,this}withFlexibleDimensions(o=!0){return this._hasFlexibleDimensions=o,this}withGrowAfterOpen(o=!0){return this._growAfterOpen=o,this}withPush(o=!0){return this._canPush=o,this}withLockedPosition(o=!0){return this._positionLocked=o,this}setOrigin(o){return this._origin=o,this}withDefaultOffsetX(o){return this._offsetX=o,this}withDefaultOffsetY(o){return this._offsetY=o,this}withTransformOriginOn(o){return this._transformOriginSelector=o,this}withPopoverLocation(o){return this._popoverLocation=o,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof P?this._origin.nativeElement:ki(this._origin)?this._origin:null}_getOriginPoint(o,t,e){let i;if(e.originX=="center")i=o.left+o.width/2;else{let r=this._isRtl()?o.right:o.left,d=this._isRtl()?o.left:o.right;i=e.originX=="start"?r:d}t.left<0&&(i-=t.left);let a;return e.originY=="center"?a=o.top+o.height/2:a=e.originY=="top"?o.top:o.bottom,t.top<0&&(a-=t.top),{x:i,y:a}}_getOverlayPoint(o,t,e){let i;e.overlayX=="center"?i=-t.width/2:e.overlayX==="start"?i=this._isRtl()?-t.width:0:i=this._isRtl()?0:-t.width;let a;return e.overlayY=="center"?a=-t.height/2:a=e.overlayY=="top"?0:-t.height,{x:o.x+i,y:o.y+a}}_getOverlayFit(o,t,e,i){let a=Jn(t),{x:r,y:d}=o,h=this._getOffset(i,"x"),f=this._getOffset(i,"y");h&&(r+=h),f&&(d+=f);let u=0-r,v=r+a.width-e.width,N=0-d,X=d+a.height-e.height,K=this._subtractOverflows(a.width,u,v),bt=this._subtractOverflows(a.height,N,X),zi=K*bt;return{visibleArea:zi,isCompletelyWithinViewport:a.width*a.height===zi,fitsInViewportVertically:bt===a.height,fitsInViewportHorizontally:K==a.width}}_canFitWithFlexibleDimensions(o,t,e){if(this._hasFlexibleDimensions){let i=e.bottom-t.y,a=e.right-t.x,r=$n(this._overlayRef.getConfig().minHeight),d=$n(this._overlayRef.getConfig().minWidth),h=o.fitsInViewportVertically||r!=null&&r<=i,f=o.fitsInViewportHorizontally||d!=null&&d<=a;return h&&f}return!1}_pushOverlayOnScreen(o,t,e){if(this._previousPushAmount&&this._positionLocked)return{x:o.x+this._previousPushAmount.x,y:o.y+this._previousPushAmount.y};let i=Jn(t),a=this._viewportRect,r=Math.max(o.x+i.width-a.width,0),d=Math.max(o.y+i.height-a.height,0),h=Math.max(a.top-e.top-o.y,0),f=Math.max(a.left-e.left-o.x,0),u=0,v=0;return i.width<=a.width?u=f||-r:u=o.x<this._getViewportMarginStart()?a.left-e.left-o.x:0,i.height<=a.height?v=h||-d:v=o.y<this._getViewportMarginTop()?a.top-e.top-o.y:0,this._previousPushAmount={x:u,y:v},{x:o.x+u,y:o.y+v}}_applyPosition(o,t){if(this._setTransformOrigin(o),this._setOverlayElementStyles(t,o),this._setBoundingBoxStyles(t,o),o.panelClass&&this._addPanelClasses(o.panelClass),this._positionChanges.observers.length){let e=this._getScrollVisibility();if(o!==this._lastPosition||!this._lastScrollVisibility||!Ko(this._lastScrollVisibility,e)){let i=new qe(o,e);this._positionChanges.next(i)}this._lastScrollVisibility=e}this._lastPosition=o,this._isInitialRender=!1}_setTransformOrigin(o){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),e,i=o.overlayY;o.overlayX==="center"?e="center":this._isRtl()?e=o.overlayX==="start"?"right":"left":e=o.overlayX==="start"?"left":"right";for(let a=0;a<t.length;a++)t[a].style.transformOrigin=`${e} ${i}`}_calculateBoundingBoxRect(o,t){let e=this._viewportRect,i=this._isRtl(),a,r,d;if(t.overlayY==="top")r=o.y,a=e.height-r+this._getViewportMarginBottom();else if(t.overlayY==="bottom")d=e.height-o.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),a=e.height-d+this._getViewportMarginTop();else{let X=Math.min(e.bottom-o.y+e.top,o.y),K=this._lastBoundingBoxSize.height;a=X*2,r=o.y-X,a>K&&!this._isInitialRender&&!this._growAfterOpen&&(r=o.y-K/2)}let h=t.overlayX==="start"&&!i||t.overlayX==="end"&&i,f=t.overlayX==="end"&&!i||t.overlayX==="start"&&i,u,v,N;if(f)N=e.width-o.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),u=o.x-this._getViewportMarginStart();else if(h)v=o.x,u=e.right-o.x-this._getViewportMarginEnd();else{let X=Math.min(e.right-o.x+e.left,o.x),K=this._lastBoundingBoxSize.width;u=X*2,v=o.x-X,u>K&&!this._isInitialRender&&!this._growAfterOpen&&(v=o.x-K/2)}return{top:r,left:v,bottom:d,right:N,width:u,height:a}}_setBoundingBoxStyles(o,t){let e=this._calculateBoundingBoxRect(o,t);!this._isInitialRender&&!this._growAfterOpen&&(e.height=Math.min(e.height,this._lastBoundingBoxSize.height),e.width=Math.min(e.width,this._lastBoundingBoxSize.width));let i={};if(this._hasExactPosition())i.top=i.left="0",i.bottom=i.right="auto",i.maxHeight=i.maxWidth="",i.width=i.height="100%";else{let a=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;i.width=z(e.width),i.height=z(e.height),i.top=z(e.top)||"auto",i.bottom=z(e.bottom)||"auto",i.left=z(e.left)||"auto",i.right=z(e.right)||"auto",t.overlayX==="center"?i.alignItems="center":i.alignItems=t.overlayX==="end"?"flex-end":"flex-start",t.overlayY==="center"?i.justifyContent="center":i.justifyContent=t.overlayY==="bottom"?"flex-end":"flex-start",a&&(i.maxHeight=z(a)),r&&(i.maxWidth=z(r))}this._lastBoundingBoxSize=e,Vt(this._boundingBox.style,i)}_resetBoundingBoxStyles(){Vt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Vt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(o,t){let e={},i=this._hasExactPosition(),a=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(i){let u=this._viewportRuler.getViewportScrollPosition();Vt(e,this._getExactOverlayY(t,o,u)),Vt(e,this._getExactOverlayX(t,o,u))}else e.position="static";let d="",h=this._getOffset(t,"x"),f=this._getOffset(t,"y");h&&(d+=`translateX(${h}px) `),f&&(d+=`translateY(${f}px)`),e.transform=d.trim(),r.maxHeight&&(i?e.maxHeight=z(r.maxHeight):a&&(e.maxHeight="")),r.maxWidth&&(i?e.maxWidth=z(r.maxWidth):a&&(e.maxWidth="")),Vt(this._pane.style,e)}_getExactOverlayY(o,t,e){let i={top:"",bottom:""},a=this._getOverlayPoint(t,this._overlayRect,o);if(this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e)),o.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;i.bottom=`${r-(a.y+this._overlayRect.height)}px`}else i.top=z(a.y);return i}_getExactOverlayX(o,t,e){let i={left:"",right:""},a=this._getOverlayPoint(t,this._overlayRect,o);this._isPushed&&(a=this._pushOverlayOnScreen(a,this._overlayRect,e));let r;if(this._isRtl()?r=o.overlayX==="end"?"left":"right":r=o.overlayX==="end"?"right":"left",r==="right"){let d=this._document.documentElement.clientWidth;i.right=`${d-(a.x+this._overlayRect.width)}px`}else i.left=z(a.x);return i}_getScrollVisibility(){let o=this._getOriginRect(),t=this._pane.getBoundingClientRect(),e=this._scrollables.map(i=>i.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:qn(o,e),isOriginOutsideView:xi(o,e),isOverlayClipped:qn(t,e),isOverlayOutsideView:xi(t,e)}}_subtractOverflows(o,...t){return t.reduce((e,i)=>e-Math.max(i,0),o)}_getNarrowedViewportRect(){let o=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,e=this._viewportRuler.getViewportScrollPosition();return{top:e.top+this._getViewportMarginTop(),left:e.left+this._getViewportMarginStart(),right:e.left+o-this._getViewportMarginEnd(),bottom:e.top+t-this._getViewportMarginBottom(),width:o-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(o,t){return t==="x"?o.offsetX==null?this._offsetX:o.offsetX:o.offsetY==null?this._offsetY:o.offsetY}_validatePositions(){}_addPanelClasses(o){this._pane&&_i(o).forEach(t=>{t!==""&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(o=>{this._pane.classList.remove(o)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let o=this._origin;if(o instanceof P)return o.nativeElement.getBoundingClientRect();if(o instanceof Element)return o.getBoundingClientRect();let t=o.width||0,e=o.height||0;return{top:o.y,bottom:o.y+e,left:o.x,right:o.x+t,height:e,width:t}}_getContainerRect(){let o=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",t=this._overlayContainer.getContainerElement();o&&(t.style.display="block");let e=t.getBoundingClientRect();return o&&(t.style.display=""),e}};function Vt(n,o){for(let t in o)o.hasOwnProperty(t)&&(n[t]=o[t]);return n}function $n(n){if(typeof n!="number"&&n!=null){let[o,t]=n.split(qo);return!t||t==="px"?parseFloat(o):null}return n||null}function Jn(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function Ko(n,o){return n===o?!0:n.isOriginClipped===o.isOriginClipped&&n.isOriginOutsideView===o.isOriginOutsideView&&n.isOverlayClipped===o.isOverlayClipped&&n.isOverlayOutsideView===o.isOverlayOutsideView}var to="cdk-global-overlay-wrapper";function co(n){return new $e}var $e=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(o){let t=o.getConfig();this._overlayRef=o,this._width&&!t.width&&o.updateSize({width:this._width}),this._height&&!t.height&&o.updateSize({height:this._height}),o.hostElement.classList.add(to),this._isDisposed=!1}top(o=""){return this._bottomOffset="",this._topOffset=o,this._alignItems="flex-start",this}left(o=""){return this._xOffset=o,this._xPosition="left",this}bottom(o=""){return this._topOffset="",this._bottomOffset=o,this._alignItems="flex-end",this}right(o=""){return this._xOffset=o,this._xPosition="right",this}start(o=""){return this._xOffset=o,this._xPosition="start",this}end(o=""){return this._xOffset=o,this._xPosition="end",this}width(o=""){return this._overlayRef?this._overlayRef.updateSize({width:o}):this._width=o,this}height(o=""){return this._overlayRef?this._overlayRef.updateSize({height:o}):this._height=o,this}centerHorizontally(o=""){return this.left(o),this._xPosition="center",this}centerVertically(o=""){return this.top(o),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let o=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,e=this._overlayRef.getConfig(),{width:i,height:a,maxWidth:r,maxHeight:d}=e,h=(i==="100%"||i==="100vw")&&(!r||r==="100%"||r==="100vw"),f=(a==="100%"||a==="100vh")&&(!d||d==="100%"||d==="100vh"),u=this._xPosition,v=this._xOffset,N=this._overlayRef.getConfig().direction==="rtl",X="",K="",bt="";h?bt="flex-start":u==="center"?(bt="center",N?K=v:X=v):N?u==="left"||u==="end"?(bt="flex-end",X=v):(u==="right"||u==="start")&&(bt="flex-start",K=v):u==="left"||u==="start"?(bt="flex-start",X=v):(u==="right"||u==="end")&&(bt="flex-end",K=v),o.position=this._cssPosition,o.marginLeft=h?"0":X,o.marginTop=f?"0":this._topOffset,o.marginBottom=this._bottomOffset,o.marginRight=h?"0":K,t.justifyContent=bt,t.alignItems=f?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let o=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,e=t.style;t.classList.remove(to),e.justifyContent=e.alignItems=o.marginTop=o.marginBottom=o.marginLeft=o.marginRight=o.position="",this._overlayRef=null,this._isDisposed=!0}},mo=(()=>{class n{_injector=s(H);constructor(){}global(){return co()}flexibleConnectedTo(t){return he(this._injector,t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),pe=new I("OVERLAY_DEFAULT_CONFIG");function ue(n,o){n.get(_t).load(so);let t=n.get(lo),e=n.get(j),i=n.get(xt),a=n.get(pi),r=n.get(Mt),d=n.get(gt,null,{optional:!0})||n.get(ke).createRenderer(null,null),h=new jt(o),f=n.get(pe,null,{optional:!0})?.usePopover??!0;h.direction=h.direction||r.value,"showPopover"in e.body?h.usePopover=o?.usePopover??f:h.usePopover=!1;let u=e.createElement("div"),v=e.createElement("div");u.id=i.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),v.appendChild(u),h.usePopover&&(v.setAttribute("popover","manual"),v.classList.add("cdk-overlay-popover"));let N=h.usePopover?h.positionStrategy?.getPopoverInsertionPoint?.():null;return ki(N)?N.after(v):N?.type==="parent"?N.element.appendChild(v):t.getContainerElement().appendChild(v),new Ke(new vi(u,a,n),v,u,h,n.get(W),n.get(ao),e,n.get(en),n.get(ro),o?.disableAnimations??n.get(Gi,null,{optional:!0})==="NoopAnimations",n.get(Qi),d)}var ho=(()=>{class n{scrollStrategies=s(no);_positionBuilder=s(mo);_injector=s(H);constructor(){}create(t){return ue(this._injector,t)}position(){return this._positionBuilder}static \u0275fac=function(e){return new(e||n)};static \u0275prov=yt({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Zo=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],$o=new I("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(H);return()=>Ht(n)}}),Zt=(()=>{class n{elementRef=s(P);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return n})(),po=new I("cdk-connected-overlay-default-config"),Je=(()=>{class n{_dir=s(Mt,{optional:!0});_injector=s(H);_overlayRef;_templatePortal;_backdropSubscription=U.EMPTY;_attachSubscription=U.EMPTY;_detachSubscription=U.EMPTY;_positionSubscription=U.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s($o);_ngZone=s(W);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(t){this._offsetX=t,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(t){this._offsetY=t,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(t){typeof t!="string"&&this._assignConfig(t)}backdropClick=new S;positionChange=new S;attach=new S;detach=new S;overlayKeydown=new S;overlayOutsideClick=new S;constructor(){let t=s(we),e=s(Ce),i=s(po,{optional:!0}),a=s(pe,{optional:!0});this.usePopover=a?.usePopover===!1?null:"global",this._templatePortal=new He(t,e),this.scrollStrategy=this._scrollStrategyFactory(),i&&this._assignConfig(i)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(t){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),t.origin&&this.open&&this._position.apply()),t.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=Zo);let t=this._overlayRef=ue(this._injector,this._buildConfig());this._attachSubscription=t.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=t.detachments().subscribe(()=>this.detach.emit()),t.keydownEvents().subscribe(e=>{this.overlayKeydown.next(e),e.keyCode===27&&!this.disableClose&&!mt(e)&&(e.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(e=>{let i=this._getOriginElement(),a=Ut(e);(!i||i!==a&&!i.contains(a))&&this.overlayOutsideClick.next(e)})}_buildConfig(){let t=this._position=this.positionStrategy||this._createPositionStrategy(),e=new jt({direction:this._dir||"ltr",positionStrategy:t,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(e.height=this.height),(this.minWidth||this.minWidth===0)&&(e.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(e.minHeight=this.minHeight),this.backdropClass&&(e.backdropClass=this.backdropClass),this.panelClass&&(e.panelClass=this.panelClass),e}_updatePositionStrategy(t){let e=this.positions.map(i=>({originX:i.originX,originY:i.originY,overlayX:i.overlayX,overlayY:i.overlayY,offsetX:i.offsetX||this.offsetX,offsetY:i.offsetY||this.offsetY,panelClass:i.panelClass||void 0}));return t.setOrigin(this._getOrigin()).withPositions(e).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let t=he(this._injector,this._getOrigin());return this._updatePositionStrategy(t),t}_getOrigin(){return this.origin instanceof Zt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Zt?this.origin.elementRef.nativeElement:this.origin instanceof P?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let t=this._overlayRef;t.getConfig().hasBackdrop=this.hasBackdrop,t.updateSize({width:this._getWidth()}),t.hasAttached()||t.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=t.backdropClick().subscribe(e=>this.backdropClick.emit(e)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ui(()=>this.positionChange.observers.length>0)).subscribe(e=>{this._ngZone.run(()=>this.positionChange.emit(e)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(t){this.origin=t.origin??this.origin,this.positions=t.positions??this.positions,this.positionStrategy=t.positionStrategy??this.positionStrategy,this.offsetX=t.offsetX??this.offsetX,this.offsetY=t.offsetY??this.offsetY,this.width=t.width??this.width,this.height=t.height??this.height,this.minWidth=t.minWidth??this.minWidth,this.minHeight=t.minHeight??this.minHeight,this.backdropClass=t.backdropClass??this.backdropClass,this.panelClass=t.panelClass??this.panelClass,this.viewportMargin=t.viewportMargin??this.viewportMargin,this.scrollStrategy=t.scrollStrategy??this.scrollStrategy,this.disableClose=t.disableClose??this.disableClose,this.transformOriginSelector=t.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=t.hasBackdrop??this.hasBackdrop,this.lockPosition=t.lockPosition??this.lockPosition,this.flexibleDimensions=t.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=t.growAfterOpen??this.growAfterOpen,this.push=t.push??this.push,this.disposeOnNavigation=t.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=t.usePopover??this.usePopover,this.matchWidth=t.matchWidth??this.matchWidth}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",k],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",k],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",k],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",k],push:[2,"cdkConnectedOverlayPush","push",k],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",k],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",k],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ae]})}return n})(),ge=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({providers:[ho],imports:[L,An,yi,yi]})}return n})();var Jo=["mat-menu-item",""],ta=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],ea=["mat-icon, [matMenuItemIcon]","*"];function ia(n,o){n&1&&(oe(),c(0,"svg",2),E(1,"polygon",3),l())}var na=["*"];function oa(n,o){if(n&1){let t=Ct();re(0,"div",0),Ji("click",function(){Z(t);let i=F();return $(i.closed.emit("click"))})("animationstart",function(i){Z(t);let a=F();return $(a._onAnimationStart(i.animationName))})("animationend",function(i){Z(t);let a=F();return $(a._onAnimationDone(i.animationName))})("animationcancel",function(i){Z(t);let a=F();return $(a._onAnimationDone(i.animationName))}),re(1,"div",1),b(2),Me()()}if(n&2){let t=F();It(t._classList),w("mat-menu-panel-animations-disabled",t._animationsDisabled)("mat-menu-panel-exit-animation",t._panelAnimationState==="void")("mat-menu-panel-animating",t._isAnimating()),Se("id",t.panelId),B("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby||null)("aria-describedby",t.ariaDescribedby||null)}}var Mi=new I("MAT_MENU_PANEL"),Ot=(()=>{class n{_elementRef=s(P);_document=s(j);_focusMonitor=s(de);_parentMenu=s(Mi,{optional:!0});_changeDetectorRef=s(q);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new C;_focused=new C;_highlighted=!1;_triggersSubmenu=!1;constructor(){s(_t).load(Gt),this._parentMenu?.addItem?.(this)}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll("mat-icon, .material-icons");for(let i=0;i<e.length;i++)e[i].remove();return t.textContent?.trim()||""}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(e,i){e&1&&D("click",function(r){return i._checkDisabled(r)})("mouseenter",function(){return i._handleMouseEnter()}),e&2&&(B("role",i.role)("tabindex",i._getTabIndex())("aria-disabled",i.disabled)("disabled",i.disabled||null),w("mat-mdc-menu-item-highlighted",i._highlighted)("mat-mdc-menu-item-submenu-trigger",i._triggersSubmenu))},inputs:{role:"role",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k]},exportAs:["matMenuItem"],attrs:Jo,ngContentSelectors:ea,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(e,i){e&1&&(T(ta),b(0),c(1,"span",0),b(2,1),l(),E(3,"div",1),Q(4,ia,2,0,":svg:svg",2)),e&2&&(p(3),_("matRippleDisabled",i.disableRipple||i.disabled)("matRippleTrigger",i._getHostElement()),p(),G(i._triggersSubmenu?4:-1))},dependencies:[ze],encapsulation:2,changeDetection:0})}return n})();var aa=new I("MatMenuContent");var ra=new I("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),Ci="_mat-menu-enter",ti="_mat-menu-exit",pt=(()=>{class n{_elementRef=s(P);_changeDetectorRef=s(q);_injector=s(H);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=it();_allItems;_directDescendantItems=new xe;_classList={};_panelAnimationState="void";_animationDone=new C;_isAnimating=ut(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(t){let e=this._previousPanelClass,i=Lt({},this._classList);e&&e.length&&e.split(" ").forEach(a=>{i[a]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(" ").forEach(a=>{i[a]=!0}),this._elementRef.nativeElement.className=""),this._classList=i}_previousPanelClass;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new S;close=this.closed;panelId=s(xt).getId("mat-menu-panel-");constructor(){let t=s(ra);this.overlayPanelClass=t.overlayPanelClass||"",this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new yn(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(vt(this._directDescendantItems),Wt(t=>at(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState==="enter"&&e.activeItem?._hasFocus()){let i=t.toArray(),a=Math.max(0,Math.min(i.length-1,e.activeItemIndex||0));i[a]&&!i[a].disabled?e.setActiveItem(a):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(vt(this._directDescendantItems),Wt(e=>at(...e.map(i=>i._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,i=this._keyManager;switch(e){case 27:mt(t)||(t.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(e===38||e===40)&&i.setFocusOrigin("keyboard"),i.onKeydown(t);return}}focusFirstItem(t="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Dt(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(t).setFirstItemActive(),!i.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=be(Lt({},this._classList),{"mat-menu-before":t==="before","mat-menu-after":t==="after","mat-menu-above":e==="above","mat-menu-below":e==="below"}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===ti;(e||t===Ci)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?"void":"enter"),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Ci||t===ti)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?"enter":"void",t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ti),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Ci:ti)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(vt(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-menu"]],contentQueries:function(e,i,a){if(e&1&&ct(a,aa,5)(a,Ot,5)(a,Ot,4),e&2){let r;y(r=x())&&(i.lazyContent=r.first),y(r=x())&&(i._allItems=r),y(r=x())&&(i.items=r)}},viewQuery:function(e,i){if(e&1&&J(we,5),e&2){let a;y(a=x())&&(i.templateRef=a.first)}},hostVars:3,hostBindings:function(e,i){e&2&&B("aria-label",null)("aria-labelledby",null)("aria-describedby",null)},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",k],hasBackdrop:[2,"hasBackdrop","hasBackdrop",t=>t==null?null:k(t)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[et([{provide:Mi,useExisting:n}])],ngContentSelectors:na,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(e,i){e&1&&(T(),Zi(0,oa,3,12,"ng-template"))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),sa=new I("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(H);return()=>Ht(n)}});var Jt=new WeakMap,la=(()=>{class n{_canHaveBackdrop;_element=s(P);_viewContainerRef=s(Ce);_menuItemInstance=s(Ot,{optional:!0,self:!0});_dir=s(Mt,{optional:!0});_focusMonitor=s(de);_ngZone=s(W);_injector=s(H);_scrollStrategy=s(sa);_changeDetectorRef=s(q);_animationsDisabled=it();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=U.EMPTY;_menuCloseSubscription=U.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t&&(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e==="click"||e==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=s(Mi,{optional:!0});this._parentMaterialMenu=e instanceof pt?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&Jt.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let i=Jt.get(e);Jt.set(e,this),i&&i!==this&&i._closeMenu();let a=this._createOverlay(e),r=a.getConfig(),d=r.positionStrategy;this._setPosition(e,d),this._canHaveBackdrop?r.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:r.hasBackdrop=e.hasBackdrop??!1,a.hasAttached()||(a.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),e instanceof pt&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(V(e.close)).subscribe(()=>{d.withLockedPosition(!1).reapplyLastPosition(),d.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,i=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof pt&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Et(1)).subscribe(()=>{e.detach(),Jt.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(e.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&Jt.delete(i),this.restoreFocus&&(t==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=ue(this._injector,e),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof pt&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(t){return new jt({positionStrategy:he(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:t.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let a=i.connectionPair.overlayX==="start"?"after":"before",r=i.connectionPair.overlayY==="top"?"below":"above";t.setPositionClasses(a,r)})})}_setPosition(t,e){let[i,a]=t.xPosition==="before"?["end","start"]:["start","end"],[r,d]=t.yPosition==="above"?["bottom","top"]:["top","bottom"],[h,f]=[r,d],[u,v]=[i,a],N=0;if(this._triggersSubmenu()){if(v=i=t.xPosition==="before"?"start":"end",a=u=i==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let X=this._parentMaterialMenu.items.first;this._parentInnerPadding=X?X._getHostElement().offsetTop:0}N=r==="bottom"?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(h=r==="top"?"bottom":"top",f=d==="top"?"bottom":"top");e.withPositions([{originX:i,originY:h,overlayX:u,overlayY:r,offsetY:N},{originX:a,originY:h,overlayX:v,overlayY:r,offsetY:N},{originX:i,originY:f,overlayX:u,overlayY:d,offsetY:-N},{originX:a,originY:f,overlayX:v,overlayY:d,offsetY:-N}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:wt(),a=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(rt(r=>this._menuOpen&&r!==this._menuItemInstance)):wt();return at(t,i,a,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new He(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return Jt.get(t)===this}_triggerIsAriaDisabled(){return k(this._element.nativeElement.getAttribute("aria-disabled"))}static \u0275fac=function(e){qi()};static \u0275dir=A({type:n})}return n})(),Ft=(()=>{class n extends la{_cleanupTouchstart;_hoverSubscription=U.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new S;onMenuOpen=this.menuOpened;menuClosed=new S;onMenuClose=this.menuClosed;constructor(){super(!0);let t=s(gt);this._cleanupTouchstart=t.listen(this._element.nativeElement,"touchstart",e=>{hn(e)||(this._openedBy="touch")},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){mn(t)||(this._openedBy=t.button===0?"mouse":void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(e===39&&this.dir==="ltr"||e===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1))}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(e,i){e&1&&D("click",function(r){return i._handleClick(r)})("mousedown",function(r){return i._handleMousedown(r)})("keydown",function(r){return i._handleKeydown(r)}),e&2&&B("aria-haspopup",i.menu?"menu":null)("aria-expanded",i.menuOpen)("aria-controls",i.menuOpen?i.menu==null?null:i.menu.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[lt]})}return n})();var ai=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[qt,ge,L,Tt]})}return n})();var ca=["*",[["mat-toolbar-row"]]],da=["*","mat-toolbar-row"],ma=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return n})(),uo=(()=>{class n{_elementRef=s(P);_platform=s(dt);_document=s(j);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-toolbar"]],contentQueries:function(e,i,a){if(e&1&&ct(a,ma,5),e&2){let r;y(r=x())&&(i._toolbarRows=r)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,i){e&2&&(It(i.color?"mat-"+i.color:""),w("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:da,decls:2,vars:0,template:function(e,i){e&1&&(T(ca),b(0),b(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var go=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[L]})}return n})();var _e=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new C;constructor(o=!1,t,e=!0,i){this._multiple=o,this._emitChanges=e,this.compareWith=i,t&&t.length&&(o?t.forEach(a=>this._markSelected(a)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...o){this._verifyValueAssignment(o),o.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...o){this._verifyValueAssignment(o),o.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...o){this._verifyValueAssignment(o);let t=this.selected,e=new Set(o.map(a=>this._getConcreteValue(a)));o.forEach(a=>this._markSelected(a)),t.filter(a=>!e.has(this._getConcreteValue(a,e))).forEach(a=>this._unmarkSelected(a));let i=this._hasQueuedChanges();return this._emitChangeEvent(),i}toggle(o){return this.isSelected(o)?this.deselect(o):this.select(o)}clear(o=!0){this._unmarkAll();let t=this._hasQueuedChanges();return o&&this._emitChangeEvent(),t}isSelected(o){return this._selection.has(this._getConcreteValue(o))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(o){this._multiple&&this.selected&&this._selected.sort(o)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(o){o=this._getConcreteValue(o),this.isSelected(o)||(this._multiple||this._unmarkAll(),this.isSelected(o)||this._selection.add(o),this._emitChanges&&this._selectedToEmit.push(o))}_unmarkSelected(o){o=this._getConcreteValue(o),this.isSelected(o)&&(this._selection.delete(o),this._emitChanges&&this._deselectedToEmit.push(o))}_unmarkAll(){this.isEmpty()||this._selection.forEach(o=>this._unmarkSelected(o))}_verifyValueAssignment(o){o.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(o,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(o,e))return e;return o}else return o}};var _o=class{applyChanges(o,t,e,i,a){o.forEachOperation((r,d,h)=>{let f,u;if(r.previousIndex==null){let v=e(r,d,h);f=t.createEmbeddedView(v.templateRef,v.context,v.index),u=je.INSERTED}else h==null?(t.remove(d),u=je.REMOVED):(f=t.get(d),t.move(f,h),u=je.MOVED);a&&a({context:f?.context,operation:u,record:r})})}detach(){}};var fo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[L]})}return n})();var bo=(()=>{class n{_animationsDisabled=it();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,i){e&2&&w("mat-pseudo-checkbox-indeterminate",i.state==="indeterminate")("mat-pseudo-checkbox-checked",i.state==="checked")("mat-pseudo-checkbox-disabled",i.disabled)("mat-pseudo-checkbox-minimal",i.appearance==="minimal")("mat-pseudo-checkbox-full",i.appearance==="full")("_mat-animation-noopable",i._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,i){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var si=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[L]})}return n})();var pa=["*"],ua=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,ga=["unscopedContent"],_a=["text"],fa=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],ba=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var va=new I("ListOption"),ya=(()=>{class n{_elementRef=s(P);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),xa=(()=>{class n{_elementRef=s(P);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),wa=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),vo=(()=>{class n{_listOption=s(va,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,hostVars:4,hostBindings:function(e,i){e&2&&w("mdc-list-item__start",i._isAlignedAtStart())("mdc-list-item__end",!i._isAlignedAtStart())}})}return n})(),ka=(()=>{class n extends vo{static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275dir=A({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[lt]})}return n})(),Ca=(()=>{class n extends vo{static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275dir=A({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[lt]})}return n})(),Ma=new I("MAT_LIST_CONFIG"),Si=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=nt(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(nt(t))}_disabled=ut(!1);_defaultOptions=s(Ma,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,hostVars:1,hostBindings:function(e,i){e&2&&B("aria-disabled",i.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),Sa=(()=>{class n{_elementRef=s(P);_ngZone=s(W);_listBase=s(Si,{optional:!0});_platform=s(dt);_hostElement;_isButtonElement;_noopAnimations=it();_avatars;_icons;set lines(t){this._explicitLines=ce(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=nt(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(nt(t))}_disabled=ut(!1);_subscriptions=new U;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(_t).load(Gt);let t=s(Mn,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Cn(this,this._ngZone,this._hostElement,this._platform,s(H)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(at(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),i=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&e===1;i.classList.toggle("mdc-list-item__primary-text",a),i.classList.toggle("mdc-list-item__secondary-text",!a)}else i.classList.remove("mdc-list-item__primary-text"),i.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,contentQueries:function(e,i,a){if(e&1&&ct(a,ka,4)(a,Ca,4),e&2){let r;y(r=x())&&(i._avatars=r),y(r=x())&&(i._icons=r)}},hostVars:4,hostBindings:function(e,i){e&2&&(B("aria-disabled",i.disabled)("disabled",i._isButtonElement&&i.disabled||null),w("mdc-list-item--disabled",i.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var yo=(()=>{class n extends Si{static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-list"]],hostAttrs:[1,"mat-mdc-list","mat-mdc-list-base","mdc-list"],exportAs:["matList"],features:[et([{provide:Si,useExisting:n}]),lt],ngContentSelectors:pa,decls:1,vars:0,template:function(e,i){e&1&&(T(),b(0))},styles:[ua],encapsulation:2,changeDetection:0})}return n})(),xo=(()=>{class n extends Sa{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=nt(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,i,a){if(e&1&&ct(a,xa,5)(a,ya,5)(a,wa,5),e&2){let r;y(r=x())&&(i._lines=r),y(r=x())&&(i._titles=r),y(r=x())&&(i._meta=r)}},viewQuery:function(e,i){if(e&1&&J(ga,5)(_a,5),e&2){let a;y(a=x())&&(i._unscopedContent=a.first),y(a=x())&&(i._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,i){e&2&&(B("aria-current",i._getAriaCurrent()),w("mdc-list-item--activated",i.activated)("mdc-list-item--with-leading-avatar",i._avatars.length!==0)("mdc-list-item--with-leading-icon",i._icons.length!==0)("mdc-list-item--with-trailing-meta",i._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",i._hasBothLeadingAndTrailing())("_mat-animation-noopable",i._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[lt],ngContentSelectors:ba,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,i){e&1&&(T(fa),b(0),c(1,"span",1),b(2,1),b(3,2),c(4,"span",2,0),D("cdkObserveContent",function(){return i._updateItemLines(!0)}),b(6,3),l()(),b(7,4),b(8,5),E(9,"div",3))},dependencies:[un],encapsulation:2,changeDetection:0})}return n})();var wo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[gn,qt,si,L,fo]})}return n})();var Ea=["text"],Da=[[["mat-icon"]],"*"],Ia=["mat-icon","*"];function Pa(n,o){if(n&1&&E(0,"mat-pseudo-checkbox",1),n&2){let t=F();_("disabled",t.disabled)("state",t.selected?"checked":"unchecked")}}function Ra(n,o){if(n&1&&E(0,"mat-pseudo-checkbox",3),n&2){let t=F();_("disabled",t.disabled)}}function Ta(n,o){if(n&1&&(c(0,"span",4),m(1),l()),n&2){let t=F();p(),Ee("(",t.group.label,")")}}var Ei=new I("MAT_OPTION_PARENT_COMPONENT"),Di=new I("MatOptgroup");var Oi=class{source;isUserInput;constructor(o,t=!1){this.source=o,this.isUserInput=t}},ie=(()=>{class n{_element=s(P);_changeDetectorRef=s(q);_parent=s(Ei,{optional:!0});group=s(Di,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(xt).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(t){this._disabled.set(t)}_disabled=ut(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new S;_text;_stateChanges=new C;constructor(){let t=s(_t);t.load(Gt),t.load(Le),this._signalDisableRipple=!!this._parent&&$i(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(t=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}deselect(t=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),t&&this._emitSelectionChangeEvent())}focus(t,e){let i=this._getHostElement();typeof i.focus=="function"&&i.focus(e)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(t){(t.keyCode===13||t.keyCode===32)&&!mt(t)&&(this._selectViaInteraction(),t.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let t=this.viewValue;t!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=t)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(t=!1){this.onSelectionChange.emit(new Oi(this,t))}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-option"]],viewQuery:function(e,i){if(e&1&&J(Ea,7),e&2){let a;y(a=x())&&(i._text=a.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(e,i){e&1&&D("click",function(){return i._selectViaInteraction()})("keydown",function(r){return i._handleKeydown(r)}),e&2&&(Se("id",i.id),B("aria-selected",i.selected)("aria-disabled",i.disabled.toString()),w("mdc-list-item--selected",i.selected)("mat-mdc-option-multiple",i.multiple)("mat-mdc-option-active",i.active)("mdc-list-item--disabled",i.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",k]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ia,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(e,i){e&1&&(T(Da),Q(0,Pa,1,2,"mat-pseudo-checkbox",1),b(1),c(2,"span",2,0),b(4,1),l(),Q(5,Ra,1,1,"mat-pseudo-checkbox",3),Q(6,Ta,2,1,"span",4),E(7,"div",5)),e&2&&(G(i.multiple?0:-1),p(5),G(!i.multiple&&i.selected&&!i.hideSingleSelectionIndicator?5:-1),p(),G(i.group&&i.group._inert?6:-1),p(),_("matRippleTrigger",i._getHostElement())("matRippleDisabled",i.disabled||i.disableRipple))},dependencies:[bo,ze],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})();function ko(n,o,t){if(t.length){let e=o.toArray(),i=t.toArray(),a=0;for(let r=0;r<n+1;r++)e[r].group&&e[r].group===i[a]&&a++;return a}return 0}function Co(n,o,t,e){return n<t?n:n+o>t+e?Math.max(0,n-e+o):t}var Ii=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[qt,si,ie,L]})}return n})();var Fa=["trigger"],La=["panel"],Ba=[[["mat-select-trigger"]],"*"],za=["mat-select-trigger","*"];function Na(n,o){if(n&1&&(c(0,"span",4),m(1),l()),n&2){let t=F();p(),Pt(t.placeholder)}}function Va(n,o){n&1&&b(0)}function ja(n,o){if(n&1&&(c(0,"span",11),m(1),l()),n&2){let t=F(2);p(),Pt(t.triggerValue)}}function Ha(n,o){if(n&1&&(c(0,"span",5),Q(1,Va,1,0)(2,ja,2,1,"span",11),l()),n&2){let t=F();p(),G(t.customTrigger?1:2)}}function Wa(n,o){if(n&1){let t=Ct();c(0,"div",12,1),D("keydown",function(i){Z(t);let a=F();return $(a._handleKeydown(i))}),b(2,1),l()}if(n&2){let t=F();It(t.panelClass),w("mat-select-panel-animations-enabled",!t._animationsDisabled)("mat-primary",(t._parentFormField==null?null:t._parentFormField.color)==="primary")("mat-accent",(t._parentFormField==null?null:t._parentFormField.color)==="accent")("mat-warn",(t._parentFormField==null?null:t._parentFormField.color)==="warn")("mat-undefined",!(t._parentFormField!=null&&t._parentFormField.color)),B("id",t.id+"-panel")("aria-multiselectable",t.multiple)("aria-label",t.ariaLabel||null)("aria-labelledby",t._getPanelAriaLabelledby())}}var Ya=new I("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let n=s(H);return()=>Ht(n)}}),Xa=new I("MAT_SELECT_CONFIG"),Ua=new I("MatSelectTrigger"),Pi=class{source;value;constructor(o,t){this.source=o,this.value=t}},Mo=(()=>{class n{_viewportRuler=s(ft);_changeDetectorRef=s(q);_elementRef=s(P);_dir=s(Mt,{optional:!0});_idGenerator=s(xt);_renderer=s(gt);_parentFormField=s(Ln,{optional:!0});ngControl=s(En,{self:!0,optional:!0});_liveAnnouncer=s(fn);_defaultOptions=s(Xa,{optional:!0});_animationsDisabled=it();_popoverLocation;_initialized=new C;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(t){let e=this.options.toArray()[t];if(e){let i=this.panel.nativeElement,a=ko(t,this.options,this.optionGroups),r=e._getHostElement();t===0&&a===1?i.scrollTop=0:i.scrollTop=Co(r.offsetTop,r.offsetHeight,i.scrollTop,i.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(t){return new Pi(this,t)}_scrollStrategyFactory=s(Ya);_panelOpen=!1;_compareWith=(t,e)=>t===e;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C;_errorStateTracker;stateChanges=new C;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=ut(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(t){this._placeholder=t,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(On.required)??!1}set required(t){this._required=t,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(t){this._selectionModel,this._multiple=t}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(t){this._compareWith=t,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(t){this._assignValue(t)&&this._onChange(t)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(t){this._errorStateTracker.matcher=t}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(t){this._id=t||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(t){this._errorStateTracker.errorState=t}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Vi(()=>{let t=this.options;return t?t.changes.pipe(vt(t),Wt(()=>at(...t.map(e=>e.onSelectionChange)))):this._initialized.pipe(Wt(()=>this.optionSelectionChanges))});openedChange=new S;_openedStream=this.openedChange.pipe(rt(t=>t),ot(()=>{}));_closedStream=this.openedChange.pipe(rt(t=>!t),ot(()=>{}));selectionChange=new S;valueChange=new S;constructor(){let t=s(Bn),e=s(In,{optional:!0}),i=s(Rn,{optional:!0}),a=s(new Re("tabindex"),{optional:!0}),r=s(pe,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new zn(t,this.ngControl,i,e,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=a==null?0:parseInt(a)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new _e(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(V(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(V(this._destroy)).subscribe(t=>{t.added.forEach(e=>e.select()),t.removed.forEach(e=>e.deselect())}),this.options.changes.pipe(vt(null),V(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let t=this._getTriggerAriaLabelledby(),e=this.ngControl;if(t!==this._triggerAriaLabelledBy){let i=this._elementRef.nativeElement;this._triggerAriaLabelledBy=t,t?i.setAttribute("aria-labelledby",t):i.removeAttribute("aria-labelledby")}e&&(this._previousControl!==e.control&&(this._previousControl!==void 0&&e.disabled!==null&&e.disabled!==this.disabled&&(this.disabled=e.disabled),this._previousControl=e.control),this.updateErrorState())}ngOnChanges(t){(t.disabled||t.userAriaDescribedBy)&&this.stateChanges.next(),t.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),t.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(Et(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let t=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!t)return;let e=`${this.id}-panel`;this._trackedModal&&fi(this._trackedModal,"aria-owns",e),xn(t,"aria-owns",e),this._trackedModal=t}_clearFromModal(){if(!this._trackedModal)return;let t=`${this.id}-panel`;fi(this._trackedModal,"aria-owns",t),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{e(),clearTimeout(i),this._cleanupDetach=void 0};let t=this.panel.nativeElement,e=this._renderer.listen(t,"animationend",a=>{a.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),i=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);t.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(t){this._assignValue(t)}registerOnChange(t){this._onChange=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let t=this._selectionModel.selected.map(e=>e.viewValue);return this._isRtl()&&t.reverse(),t.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(t){this.disabled||(this.panelOpen?this._handleOpenKeydown(t):this._handleClosedKeydown(t))}_handleClosedKeydown(t){let e=t.keyCode,i=e===40||e===38||e===37||e===39,a=e===13||e===32,r=this._keyManager;if(!r.isTyping()&&a&&!mt(t)||(this.multiple||t.altKey)&&i)t.preventDefault(),this.open();else if(!this.multiple){let d=this.selected;r.onKeydown(t);let h=this.selected;h&&d!==h&&this._liveAnnouncer.announce(h.viewValue,1e4)}}_handleOpenKeydown(t){let e=this._keyManager,i=t.keyCode,a=i===40||i===38,r=e.isTyping();if(a&&t.altKey)t.preventDefault(),this.close();else if(!r&&(i===13||i===32)&&e.activeItem&&!mt(t))t.preventDefault(),e.activeItem._selectViaInteraction();else if(!r&&this._multiple&&i===65&&t.ctrlKey){t.preventDefault();let d=this.options.some(h=>!h.disabled&&!h.selected);this.options.forEach(h=>{h.disabled||(d?h.select():h.deselect())})}else{let d=e.activeItemIndex;e.onKeydown(t),this._multiple&&a&&t.shiftKey&&e.activeItem&&e.activeItemIndex!==d&&e.activeItem._selectViaInteraction()}}_handleOverlayKeydown(t){t.keyCode===27&&!mt(t)&&(t.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(t){if(this.options.forEach(e=>e.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&t)Array.isArray(t),t.forEach(e=>this._selectOptionByValue(e)),this._sortValues();else{let e=this._selectOptionByValue(t);e?this._keyManager.updateActiveItem(e):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(t){let e=this.options.find(i=>{if(this._selectionModel.isSelected(i))return!1;try{return(i.value!=null||this.canSelectNullableOptions)&&this._compareWith(i.value,t)}catch(a){return!1}});return e&&this._selectionModel.select(e),e}_assignValue(t){return t!==this._value||this._multiple&&Array.isArray(t)?(this.options&&this._setSelectionByValue(t),this._value=t,!0):!1}_skipPredicate=t=>this.panelOpen?!1:t.disabled;_getOverlayWidth(t){return this.panelWidth==="auto"?(t instanceof Zt?t.elementRef:t||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let t of this.options)t._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new vn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let t=at(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(V(t)).subscribe(e=>{this._onSelect(e.source,e.isUserInput),e.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),at(...this.options.map(e=>e._stateChanges)).pipe(V(t)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(t,e){let i=this._selectionModel.isSelected(t);!this.canSelectNullableOptions&&t.value==null&&!this._multiple?(t.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(t.value)):(i!==t.selected&&(t.selected?this._selectionModel.select(t):this._selectionModel.deselect(t)),e&&this._keyManager.setActiveItem(t),this.multiple&&(this._sortValues(),e&&this.focus())),i!==this._selectionModel.isSelected(t)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let t=this.options.toArray();this._selectionModel.sort((e,i)=>this.sortComparator?this.sortComparator(e,i,t):t.indexOf(e)-t.indexOf(i)),this.stateChanges.next()}}_propagateChanges(t){let e;this.multiple?e=this.selected.map(i=>i.value):e=this.selected?this.selected.value:t,this._value=e,this.valueChange.emit(e),this._onChange(e),this.selectionChange.emit(this._getChangeEvent(e)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let t=-1;for(let e=0;e<this.options.length;e++)if(!this.options.get(e).disabled){t=e;break}this._keyManager.setActiveItem(t)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(t){this._elementRef.nativeElement.focus(t)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||null,e=t?t+" ":"";return this.ariaLabelledby?e+this.ariaLabelledby:t}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let t=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(t+=" "+this.ariaLabelledby),t||(t=this._valueId),t}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(t){let e=this._elementRef.nativeElement;t.length?e.setAttribute("aria-describedby",t.join(" ")):e.removeAttribute("aria-describedby")}onContainerClick(t){let e=Ut(t);e&&(e.tagName==="MAT-OPTION"||e.classList.contains("cdk-overlay-backdrop")||e.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-select"]],contentQueries:function(e,i,a){if(e&1&&ct(a,Ua,5)(a,ie,5)(a,Di,5),e&2){let r;y(r=x())&&(i.customTrigger=r.first),y(r=x())&&(i.options=r),y(r=x())&&(i.optionGroups=r)}},viewQuery:function(e,i){if(e&1&&J(Fa,5)(La,5)(Je,5),e&2){let a;y(a=x())&&(i.trigger=a.first),y(a=x())&&(i.panel=a.first),y(a=x())&&(i._overlayDir=a.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(e,i){e&1&&D("keydown",function(r){return i._handleKeydown(r)})("focus",function(){return i._onFocus()})("blur",function(){return i._onBlur()}),e&2&&(B("id",i.id)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i.panelOpen?i.id+"-panel":null)("aria-expanded",i.panelOpen)("aria-label",i.ariaLabel||null)("aria-required",i.required.toString())("aria-disabled",i.disabled.toString())("aria-invalid",i.errorState)("aria-activedescendant",i._getAriaActiveDescendant()),w("mat-mdc-select-disabled",i.disabled)("mat-mdc-select-invalid",i.errorState)("mat-mdc-select-required",i.required)("mat-mdc-select-empty",i.empty)("mat-mdc-select-multiple",i.multiple)("mat-select-open",i.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",k],disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",t=>t==null?0:gi(t)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",k],placeholder:"placeholder",required:[2,"required","required",k],multiple:[2,"multiple","multiple",k],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",k],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",gi],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",k]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[et([{provide:Fn,useExisting:n},{provide:Ei,useExisting:n}]),ae],ngContentSelectors:za,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(e,i){if(e&1&&(T(Ba),c(0,"div",2,0),D("click",function(){return i.open()}),c(3,"div",3),Q(4,Na,2,1,"span",4)(5,Ha,3,1,"span",5),l(),c(6,"div",6)(7,"div",7),oe(),c(8,"svg",8),E(9,"path",9),l()()()(),kt(10,Wa,3,16,"ng-template",10),D("detach",function(){return i.close()})("backdropClick",function(){return i.close()})("overlayKeydown",function(r){return i._handleOverlayKeydown(r)})),e&2){let a=tt(1);p(3),B("id",i._valueId),p(),G(i.empty?4:5),p(6),_("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",i._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",i._scrollStrategy)("cdkConnectedOverlayOrigin",i._preferredOverlayOrigin||a)("cdkConnectedOverlayPositions",i._positions)("cdkConnectedOverlayWidth",i._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",i._popoverLocation)}},dependencies:[Zt,Je],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return n})();var So=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[ge,Ii,L,Tt,We,Ii]})}return n})();var di=["*"],Ga=["content"],qa=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ka=["mat-drawer","mat-drawer-content","*"];function Za(n,o){if(n&1){let t=Ct();c(0,"div",1),D("click",function(){Z(t);let i=F();return $(i._onBackdropClicked())}),l()}if(n&2){let t=F();w("mat-drawer-shown",t._isShowingBackdrop())}}function $a(n,o){n&1&&(c(0,"mat-drawer-content"),b(1,2),l())}var Ja=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],tr=["mat-sidenav","mat-sidenav-content","*"];function er(n,o){if(n&1){let t=Ct();c(0,"div",1),D("click",function(){Z(t);let i=F();return $(i._onBackdropClicked())}),l()}if(n&2){let t=F();w("mat-drawer-shown",t._isShowingBackdrop())}}function ir(n,o){n&1&&(c(0,"mat-sidenav-content"),b(1,2),l())}var nr=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var or=new I("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ai=new I("MAT_DRAWER_CONTAINER"),li=(()=>{class n extends Nt{_platform=s(dt);_changeDetectorRef=s(q);_container=s(Ti);constructor(){let t=s(P),e=s(zt),i=s(W);super(t,e,i)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,i){e&2&&(Oe("margin-left",i._container._contentMargins.left,"px")("margin-right",i._container._contentMargins.right,"px"),w("mat-drawer-content-hidden",i._shouldBeHidden()))},features:[et([{provide:Nt,useExisting:n}]),lt],ngContentSelectors:di,decls:1,vars:0,template:function(e,i){e&1&&(T(),b(0))},encapsulation:2,changeDetection:0})}return n})(),Ri=(()=>{class n{_elementRef=s(P);_focusTrapFactory=s(_n);_focusMonitor=s(de);_platform=s(dt);_ngZone=s(W);_renderer=s(gt);_interactivityChecker=s(Be);_doc=s(j);_container=s(Ai,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=nt(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=nt(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(nt(t))}_opened=ut(!1);_openedVia=null;_animationStarted=new C;_animationEnd=new C;openedChange=new S(!0);_openedStream=this.openedChange.pipe(rt(t=>t),ot(()=>{}));openedStart=this._animationStarted.pipe(rt(()=>this.opened),hi(void 0));_closedStream=this.openedChange.pipe(rt(t=>!t),ot(()=>{}));closedStart=this._animationStarted.pipe(rt(()=>!this.opened),hi(void 0));_destroyed=new C;onPositionChanged=new S;_content;_modeChanged=new C;_injector=s(H);_changeDetectorRef=s(q);constructor(){this.openedChange.pipe(V(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",i=>{i.keyCode===27&&!this.disableClose&&!mt(i)&&this._ngZone.run(()=>{this.close(),i.stopPropagation(),i.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),r(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",i),r=this._renderer.listen(t,"mousedown",i)})),t.focus(e)}_focusByCssSelector(t,e){let i=this._elementRef.nativeElement.querySelector(t);i&&this._forceFocus(i,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Dt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let i=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),i}_setOpen(t,e,i){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(i),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(Et(1)).subscribe(r=>a(r?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,i=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,e)),i.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,i){if(e&1&&J(Ga,5),e&2){let a;y(a=x())&&(i._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,i){e&2&&(B("align",null)("tabIndex",i.mode!=="side"?"-1":null),Oe("visibility",!i._container&&!i.opened?"hidden":null),w("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:di,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(T(),c(0,"div",1,0),b(2),l())},dependencies:[Nt],encapsulation:2,changeDetection:0})}return n})(),Ti=(()=>{class n{_dir=s(Mt,{optional:!0});_element=s(P);_ngZone=s(W);_changeDetectorRef=s(q);_animationDisabled=it();_transitionsEnabled=!1;_allDrawers;_drawers=new xe;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=nt(t)}_autosize=s(or);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:nt(t)}_backdropOverride=null;backdropClick=new S;_start=null;_end=null;_left=null;_right=null;_destroyed=new C;_doCheckSubject=new C;_contentMargins={left:null,right:null};_contentMarginChanges=new C;get scrollable(){return this._userContent||this._content}_injector=s(H);constructor(){let t=s(dt),e=s(ft);this._dir?.change.pipe(V(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(V(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(vt(this._allDrawers),V(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(vt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Wi(10),V(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let i=this._left._getWidth();t+=i,e-=i}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let i=this._right._getWidth();e+=i,t-=i}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(V(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(V(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(V(this._drawers.changes)).subscribe(()=>{Dt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(V(at(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,i="mat-drawer-container-has-open";t?e.add(i):e.remove(i)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,i,a){if(e&1&&ct(a,li,5)(a,Ri,5),e&2){let r;y(r=x())&&(i._content=r.first),y(r=x())&&(i._allDrawers=r)}},viewQuery:function(e,i){if(e&1&&J(li,5),e&2){let a;y(a=x())&&(i._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,i){e&2&&w("mat-drawer-container-explicit-backdrop",i._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[et([{provide:Ai,useExisting:n}])],ngContentSelectors:Ka,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(T(qa),Q(0,Za,1,2,"div",0),b(1),b(2,1),Q(3,$a,2,0,"mat-drawer-content")),e&2&&(G(i.hasBackdrop?0:-1),p(3),G(i._content?-1:3))},dependencies:[li],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),ci=(()=>{class n extends li{static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[et([{provide:Nt,useExisting:n}]),lt],ngContentSelectors:di,decls:1,vars:0,template:function(e,i){e&1&&(T(),b(0))},encapsulation:2,changeDetection:0})}return n})(),Fi=(()=>{class n extends Ri{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=nt(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ce(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ce(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,i){e&2&&(B("tabIndex",i.mode!=="side"?"-1":null)("align",null),Oe("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),w("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[et([{provide:Ri,useExisting:n}]),lt],ngContentSelectors:di,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,i){e&1&&(T(),c(0,"div",1,0),b(2),l())},dependencies:[Nt],encapsulation:2,changeDetection:0})}return n})(),Oo=(()=>{class n extends Ti{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(i){return(t||(t=st(n)))(i||n)}})();static \u0275cmp=g({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,i,a){if(e&1&&ct(a,ci,5)(a,Fi,5),e&2){let r;y(r=x())&&(i._content=r.first),y(r=x())&&(i._allDrawers=r)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,i){e&2&&w("mat-drawer-container-explicit-backdrop",i._backdropOverride)},exportAs:["matSidenavContainer"],features:[et([{provide:Ai,useExisting:n},{provide:Ti,useExisting:n}]),lt],ngContentSelectors:tr,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,i){e&1&&(T(Ja),Q(0,er,1,2,"div",0),b(1),b(2,1),Q(3,ir,2,0,"mat-sidenav-content")),e&2&&(G(i.hasBackdrop?0:-1),p(3),G(i._content?-1:3))},dependencies:[ci],styles:[nr],encapsulation:2,changeDetection:0})}return n})(),Eo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[Tt,L,Tt]})}return n})();var Do="mat-badge-content",rr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=g({type:n,selectors:[["ng-component"]],decls:0,vars:0,template:function(e,i){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--mat-badge-background-color, var(--mat-sys-error));
  color: var(--mat-badge-text-color, var(--mat-sys-on-error));
  font-family: var(--mat-badge-text-font, var(--mat-sys-label-small-font));
  font-weight: var(--mat-badge-text-weight, var(--mat-sys-label-small-weight));
  border-radius: var(--mat-badge-container-shape, var(--mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--mat-badge-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-error) 38%, transparent));
  color: var(--mat-badge-disabled-state-text-color, var(--mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--mat-badge-legacy-small-size-container-size, unset);
  height: var(--mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--mat-badge-small-size-container-size, 6px);
  min-height: var(--mat-badge-small-size-container-size, 6px);
  line-height: var(--mat-badge-small-size-line-height, 6px);
  padding: var(--mat-badge-small-size-container-padding, 0);
  font-size: var(--mat-badge-small-size-text-size, 0);
  margin: var(--mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--mat-badge-legacy-container-size, unset);
  height: var(--mat-badge-legacy-container-size, unset);
  min-width: var(--mat-badge-container-size, 16px);
  min-height: var(--mat-badge-container-size, 16px);
  line-height: var(--mat-badge-line-height, 16px);
  padding: var(--mat-badge-container-padding, 0 4px);
  font-size: var(--mat-badge-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--mat-badge-legacy-large-size-container-size, unset);
  height: var(--mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--mat-badge-large-size-container-size, 16px);
  min-height: var(--mat-badge-large-size-container-size, 16px);
  line-height: var(--mat-badge-large-size-line-height, 16px);
  padding: var(--mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--mat-badge-large-size-text-size, var(--mat-sys-label-small-size));
  margin: var(--mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2,changeDetection:0})}return n})(),mi=(()=>{class n{_ngZone=s(W);_elementRef=s(P);_ariaDescriber=s(wn);_renderer=s(gt);_animationsDisabled=it();_idGenerator=s(xt);get color(){return this._color}set color(t){this._setColor(t),this._color=t}_color="primary";overlap=!0;disabled=!1;position="above after";get content(){return this._content}set content(t){this._updateRenderedContent(t)}_content;get description(){return this._description}set description(t){this._updateDescription(t)}_description;size="medium";hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=s(Be);_document=s(j);constructor(){let t=s(_t);t.load(rr),t.load(Le)}isAbove(){return this.position.indexOf("below")===-1}isAfter(){return this.position.indexOf("before")===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let t=this._renderer.createElement("span"),e="mat-badge-active";return t.setAttribute("id",this._idGenerator.getId("mat-badge-content-")),t.setAttribute("aria-hidden","true"),t.classList.add(Do),this._animationsDisabled&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),typeof requestAnimationFrame=="function"&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(e)})}):t.classList.add(e),t}_updateRenderedContent(t){let e=`${t??""}`.trim();this._isInitialized&&e&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=e),this._content=e}_updateDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!t||this._isHostInteractive())&&this._removeInlineDescription(),this._description=t,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,t):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement("span"),this._inlineBadgeDescription.classList.add("cdk-visually-hidden")),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-badge-${this._color}`),t&&e.add(`mat-badge-${t}`)}_clearExistingBadges(){let t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Do}`);for(let e of Array.from(t))e!==this._badgeElement&&e.remove()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=A({type:n,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(e,i){e&2&&w("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small",i.size==="small")("mat-badge-medium",i.size==="medium")("mat-badge-large",i.size==="large")("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{color:[0,"matBadgeColor","color"],overlap:[2,"matBadgeOverlap","overlap",k],disabled:[2,"matBadgeDisabled","disabled",k],position:[0,"matBadgePosition","position"],content:[0,"matBadge","content"],description:[0,"matBadgeDescription","description"],size:[0,"matBadgeSize","size"],hidden:[2,"matBadgeHidden","hidden",k]}})}return n})(),Io=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=O({type:n});static \u0275inj=M({imports:[bn,L]})}return n})();var Ro=(()=>{class n{constructor(){this.signOut=new S,this.routes=Kt,this.flatlogicEmail="https://flatlogic.com"}signOutEmit(){this.signOut.emit()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-user"]],inputs:{user:"user"},outputs:{signOut:"signOut"},standalone:!1,decls:25,vars:4,consts:[["userMenu","matMenu"],["mat-mini-fab","",1,"user-button",3,"matMenuTriggerFor"],[1,"user-button__icon"],["xPosition","before"],[1,"user-menu-title"],[1,"user-menu-title__name"],[1,"user-menu-title__link",3,"href"],["mat-menu-item","",1,"user-menu__item-title"],[1,"user-menu-icon"],[1,"sign-button-wrapper"],["mat-flat-button","",1,"sign-button",3,"click"]],template:function(e,i){if(e&1&&(c(0,"button",1)(1,"mat-icon",2),m(2,"person"),l()(),c(3,"mat-menu",3,0)(5,"div",4)(6,"h4",5),m(7),l(),c(8,"a",6),m(9,"Flatlogic.com"),l()(),c(10,"button",7)(11,"mat-icon",8),m(12,"person"),l(),m(13,"Profile "),l(),c(14,"button",7)(15,"mat-icon",8),m(16,"description"),l(),m(17,"Tasks "),l(),c(18,"button",7)(19,"mat-icon",8),m(20,"email"),l(),m(21,"Messages "),l(),c(22,"div",9)(23,"button",10),D("click",function(){return i.signOutEmit()}),m(24,"Sign out"),l()()()),e&2){let a=tt(4);_("matMenuTriggerFor",a),p(7),tn("",i.user.name," ",i.user.lastName),p(),_("href",i.flatlogicEmail,Xt)}},dependencies:[Y,pt,Ot,Ft,Ne,ht],styles:[".user-button[_ngcontent-%COMP%]{background-color:#536dfe;box-shadow:none;margin-left:16px}.user-button__icon[_ngcontent-%COMP%]{color:#ffffff59}.user-button[_ngcontent-%COMP%]:hover{background-color:#00000014}@media(max-width:576px){.user-button[_ngcontent-%COMP%]{margin-top:0}}.user-menu-title[_ngcontent-%COMP%]{padding:16px 48px 0 16px;margin-bottom:4px}.user-menu-title__name[_ngcontent-%COMP%]{margin-bottom:4px;font-weight:400;font-size:24px;color:#4a4a4a}.user-menu-title__link[_ngcontent-%COMP%]{color:#536dfe;font-weight:400;font-size:14px;text-decoration:none}.user-menu-icon[_ngcontent-%COMP%]{color:#b9b9b9;margin-right:16px;opacity:.8}.sign-button-wrapper[_ngcontent-%COMP%]{text-align:center;padding:8px 0 16px;width:100%}.sign-button[_ngcontent-%COMP%]{border:1px solid;color:#536dfe;width:80%}.user-menu__item-title[_ngcontent-%COMP%]{color:#b9b9b9}.user-menu__item-title[_ngcontent-%COMP%]:hover{color:#4a4a4a;background-color:#f3f5ff}.user-menu__item-title[_ngcontent-%COMP%]:hover   .user-menu-icon[_ngcontent-%COMP%]{color:#536dfe}"]})}}return n})();var To=(()=>{class n{transform(t){let e=t.search("\\s");return""+t[0].toUpperCase()+t[e+1].toUpperCase()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275pipe=Ki({name:"shortName",type:n,pure:!0,standalone:!1})}}return n})();function cr(n,o){if(n&1&&(c(0,"div",11)(1,"div",12)(2,"button",13),m(3),se(4,"shortName"),l(),c(5,"span",14),m(6),l()(),c(7,"div",15)(8,"span",16),m(9),l(),c(10,"span",17),m(11),l()()()),n&2){let t=o.$implicit,e=o.index,i=F();p(2),_("ngClass",i.colors[e]),p(),Pt(le(4,5,t.name)),p(3),Pt(t.time),p(3),Pt(t.name),p(2),Pt(t.message)}}var Fo=(()=>{class n{constructor(){this.colors=["yellow","green","blue","ping"]}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-email"]],inputs:{emails:"emails"},standalone:!1,decls:16,vars:3,consts:[["email","matMenu"],["mat-mini-fab","",1,"email-button",3,"matMenuTriggerFor"],["matBadge","4","matBadgeColor","accent",1,"email-button__icon"],["xPosition","before"],[1,"email-menu-header"],[1,"email-menu-header__title"],[1,"email-menu-header__subtitle"],["class","mail-wrapper",4,"ngFor","ngForOf"],[1,"send-message-button-wrapper"],["mat-fab","",1,"send-message-button"],[1,"send-message-button__icon"],[1,"mail-wrapper"],[1,"mail-wrapper__icon-wrapper"],["mat-mini-fab","",1,"mail-wrapper__icon",3,"ngClass"],[1,"mail-wrapper__time"],[1,"mail-content"],[1,"mail-content__user"],[1,"mail-content__message"]],template:function(e,i){if(e&1&&(c(0,"button",1)(1,"mat-icon",2),m(2,"mail_outline"),l()(),c(3,"mat-menu",3,0)(5,"div",4)(6,"h4",5),m(7,"New Messages"),l(),c(8,"p",6),m(9),l()(),kt(10,cr,12,7,"div",7),c(11,"div",8)(12,"button",9),m(13," Send New Message "),c(14,"mat-icon",10),m(15,"send"),l()()()()),e&2){let a=tt(4);_("matMenuTriggerFor",a),p(9),Ee("",i.emails.length," New Messages"),p(),_("ngForOf",i.emails)}},dependencies:[Te,nn,Y,pt,Ft,ht,Sn,mi,To],styles:[".email-button[_ngcontent-%COMP%]{background-color:#536dfe;box-shadow:none;margin-left:16px}.email-button__icon[_ngcontent-%COMP%]{color:#ffffff59}.email-button[_ngcontent-%COMP%]:hover{background-color:#00000014}@media(max-width:576px){.email-button[_ngcontent-%COMP%]{margin-top:0}}.email-menu-header[_ngcontent-%COMP%]{padding:16px 16px 0}.email-menu-header__title[_ngcontent-%COMP%]{margin:0;font-weight:400;font-size:24px;color:#4a4a4a}.email-menu-header__subtitle[_ngcontent-%COMP%]{color:#ff4081;font-weight:400;font-size:14px;margin:4px 0 16px}.mail-wrapper[_ngcontent-%COMP%]{cursor:pointer;display:flex;padding:6px 16px}.mail-wrapper[_ngcontent-%COMP%]:hover{background-color:#f3f5ff}.mail-wrapper__icon-wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mail-wrapper__icon[_ngcontent-%COMP%]{font-weight:400;font-size:14px;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:none;width:30px;height:30px}.mail-wrapper__time[_ngcontent-%COMP%]{text-align:center;color:#6e6e6e;font-weight:400;font-size:11.2px}.mail-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;overflow:hidden;padding-left:16px;justify-content:space-between}.mail-content__user[_ngcontent-%COMP%]{margin-top:3px;font-weight:500;font-size:14px;color:#4a4a4a}.mail-content__message[_ngcontent-%COMP%]{color:#6e6e6e;font-weight:14px;font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.send-message-button-wrapper[_ngcontent-%COMP%]{margin:16px 0;text-align:center;padding:0 16px}.send-message-button[_ngcontent-%COMP%]{width:224px;height:48px;padding:0 16px;border-radius:32px;color:#fff;background-color:#536dfe}.send-message-button[_ngcontent-%COMP%]   .mat-button-wrapper[_ngcontent-%COMP%]{padding:0}.send-message-button__icon[_ngcontent-%COMP%]{color:#fff;margin-left:16px}.yellow[_ngcontent-%COMP%]{background-color:#ffc260}.green[_ngcontent-%COMP%]{background-color:#3cd4a0}.blue[_ngcontent-%COMP%]{background-color:#536dfe}.ping[_ngcontent-%COMP%]{background-color:#ff4081}"]})}}return n})();var Lo=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-notifications"]],standalone:!1,decls:21,vars:1,consts:[["bell","matMenu"],["mat-mini-fab","",1,"notification-button",3,"matMenuTriggerFor"],["matBadge","4","matBadgeColor","warn",1,"notification-button__icon"],["xPosition","before",1,"notification-menu"],["mat-menu-item","",1,"notification-menu__button"],[1,"notification-menu__icon_yellow"],[1,"notification-menu__icon_green"],[1,"notification-menu__icon_pink"],[1,"notification-menu__icon_blue"]],template:function(e,i){if(e&1&&(c(0,"button",1)(1,"mat-icon",2),m(2,"notifications_none"),l()(),c(3,"mat-menu",3,0)(5,"button",4)(6,"mat-icon",5),m(7,"local_offer"),l(),m(8,"Check out this awesome ticket "),l(),c(9,"button",4)(10,"mat-icon",6),m(11,"thumb_up"),l(),m(12,"What is the best way to get ... "),l(),c(13,"button",4)(14,"mat-icon",7),m(15,"notifications_none"),l(),m(16,"This is just a simple notification "),l(),c(17,"button",4)(18,"mat-icon",8),m(19,"local_grocery_store"),l(),m(20,"12 new orders has arrived today "),l()()),e&2){let a=tt(4);_("matMenuTriggerFor",a)}},dependencies:[Y,pt,Ot,Ft,ht,mi],styles:[".notification-button[_ngcontent-%COMP%]{background-color:#536dfe;box-shadow:none;margin-left:16px}.notification-button__icon[_ngcontent-%COMP%]{color:#ffffff59}.notification-button[_ngcontent-%COMP%]:hover{background-color:#00000014}@media(max-width:576px){.notification-button[_ngcontent-%COMP%]{margin-top:0}}.notification-menu__button[_ngcontent-%COMP%]:hover{background-color:#f3f5ff}.notification-menu__icon_yellow[_ngcontent-%COMP%]{color:#ffc260}.notification-menu__icon_green[_ngcontent-%COMP%]{color:#3cd4a0}.notification-menu__icon_pink[_ngcontent-%COMP%]{color:#ff4081}.notification-menu__icon_blue[_ngcontent-%COMP%]{color:#536dfe}"]})}}return n})();var hr=n=>({"show-search-input":n}),pr=n=>({"open-search":n});function ur(n,o){n&1&&E(0,"input",3)}var Bo=(()=>{class n{constructor(){this.isShowInput=!1}showInput(){this.isShowInput=!0}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-search"]],standalone:!1,decls:4,vars:7,consts:[[1,"search",3,"click","ngClass"],[1,"search-icon",3,"ngClass"],["class","search-input","placeholder","Search...",4,"ngIf"],["placeholder","Search...",1,"search-input"]],template:function(e,i){e&1&&(c(0,"div",0),D("click",function(){return i.showInput()}),c(1,"mat-icon",1),m(2,"search"),l(),kt(3,ur,1,0,"input",2),l()),e&2&&(_("ngClass",ui(3,hr,i.isShowInput)),p(),_("ngClass",ui(5,pr,i.isShowInput)),p(2),_("ngIf",i.isShowInput))},dependencies:[Te,Ae,Y],styles:[".search[_ngcontent-%COMP%]{display:flex;height:36px;border-radius:32px;box-sizing:border-box;align-items:center;width:36px;padding-left:4px;cursor:pointer;flex-direction:row-reverse}.search[_ngcontent-%COMP%]:hover{background-color:#00000014}@media(max-width:576px){.search[_ngcontent-%COMP%]{display:none}}.show-search-input[_ngcontent-%COMP%]{animation:.3s _ngcontent-%COMP%_open_search;width:250px;padding-left:22.4px;background-color:#00000014}.search-input[_ngcontent-%COMP%]{color:#fff;font-family:Roboto,Helvetica,Arial,sans-serif;line-height:19px;font-size:14px;background-color:transparent;border:none;outline:none;height:36px;width:100%}.search-input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#ffffff59}.search-icon[_ngcontent-%COMP%]{padding:0 7px 3px 0;color:#ffffff59}.open-search[_ngcontent-%COMP%]{animation:.3s _ngcontent-%COMP%_move_search-icon;padding-right:16px;padding-left:4px}@keyframes _ngcontent-%COMP%_open_search{0%{width:36px}to{width:250px}}@keyframes _ngcontent-%COMP%_open_search_large{0%{width:36px}to{width:150px}}@keyframes _ngcontent-%COMP%_move_search-icon{0%{padding:0 7px 3px 0}to{padding-right:16px}}"]})}}return n})();function fr(n,o){n&1&&(c(0,"mat-icon",9),m(1,"menu"),l())}function br(n,o){n&1&&(c(0,"mat-icon",9),m(1,"arrow_back"),l())}var zo=(()=>{class n{constructor(t,e,i){this.userService=t,this.emailService=e,this.router=i,this.isShowSidebar=new S,this.routers=Kt,this.user$=this.userService.getUser(),this.emails$=this.emailService.loadEmails()}openMenu(){this.isMenuOpened=!this.isMenuOpened,this.isShowSidebar.emit(this.isMenuOpened)}signOut(){this.userService.signOut(),this.router.navigate([this.routers.LOGIN])}static{this.\u0275fac=function(e){return new(e||n)(Bt(Vn),Bt(jn),Bt(sn))}}static{this.\u0275cmp=g({type:n,selectors:[["app-header"]],inputs:{isMenuOpened:"isMenuOpened"},outputs:{isShowSidebar:"isShowSidebar"},standalone:!1,decls:16,vars:8,consts:[[1,"header"],[1,"header__title"],["mat-mini-fab","",1,"header__title-button",3,"click"],["class","header__title-button-icon",4,"ngIf"],[1,"header__title-text"],[1,"header-toolbar"],["mat-flat-button","","href","https://flatlogic.com/templates/angular-material-admin-full/demo","target","_blank",1,"unlock-button"],[3,"emails"],[3,"signOut","user"],[1,"header__title-button-icon"]],template:function(e,i){e&1&&(c(0,"mat-toolbar",0)(1,"div",1)(2,"button",2),D("click",function(){return i.openMenu()}),kt(3,fr,2,0,"mat-icon",3)(4,br,2,0,"mat-icon",3),l(),c(5,"h6",4),m(6,"Angular Material Admin"),l()(),c(7,"div",5)(8,"a",6),m(9,"Unlock Full Version"),l(),E(10,"app-search")(11,"app-notifications")(12,"app-email",7),se(13,"async"),c(14,"app-user",8),se(15,"async"),D("signOut",function(){return i.signOut()}),l()()()),e&2&&(p(3),_("ngIf",!i.isMenuOpened),p(),_("ngIf",i.isMenuOpened),p(8),_("emails",le(13,4,i.emails$)),p(2),_("user",le(15,6,i.user$)))},dependencies:[Ae,uo,Y,Ne,ht,Ro,Fo,Lo,Bo,on],styles:[".header[_ngcontent-%COMP%]{background-color:#536dfe;display:flex;justify-content:space-between;position:fixed;z-index:2;height:64px}.header__title[_ngcontent-%COMP%]{display:flex;align-items:center}.header__title-button[_ngcontent-%COMP%]{background-color:#536dfe;box-shadow:none}.header__title-button[_ngcontent-%COMP%]:hover{background-color:#00000014}@media(max-width:576px){.header__title-button[_ngcontent-%COMP%]{margin-top:0}}.header__title-button-icon[_ngcontent-%COMP%]{color:#fff}.header__title-text[_ngcontent-%COMP%]{color:#fff;margin-left:32px;font-weight:400}@media(max-width:576px){.header__title-text[_ngcontent-%COMP%]{display:none}}.header-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center}.header-toolbar[_ngcontent-%COMP%]   .unlock-button[_ngcontent-%COMP%]{border-color:#3cd4a0;margin-right:16px;text-transform:uppercase;background-color:#3cd4a0;color:#fff;letter-spacing:.0892857143em}@media(max-width:576px){.header-toolbar[_ngcontent-%COMP%]   .unlock-button[_ngcontent-%COMP%]{display:none}}"]})}}return n})();var Li=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=O({type:n})}static{this.\u0275inj=M({imports:[Fe,go,We,Xe,ai,Ve,Nn,Io]})}}return n})();var No=(()=>{class n{constructor(){this.routes=Kt,this.isOpenUiElements=!1}openUiElements(){this.isOpenUiElements=!this.isOpenUiElements}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-sidebar"]],standalone:!1,decls:61,vars:14,consts:[["routerLinkActive","active",3,"routerLink"],[3,"click"],["routerLinkActive","active",1,"ui-element",3,"routerLink"],[1,"circle"],[1,"sidebar-title"],["href","https://flatlogic.com/templates","target","_blank",2,"text-decoration","none"],["href","https://flatlogic.com/forum/","target","_blank",2,"text-decoration","none"],["href","https://flatlogic.com/forum","target","_blank",2,"text-decoration","none"],[1,"project-circle","project-circle_yellow"],[1,"project-circle","project-circle_blue"],[1,"project-circle","project-circle_pink"]],template:function(e,i){e&1&&(c(0,"mat-list")(1,"mat-list-item",0)(2,"mat-icon"),m(3,"home"),l(),m(4," Dashboard "),l(),c(5,"mat-list-item",0)(6,"mat-icon"),m(7,"text_fields"),l(),m(8," Typography "),l(),c(9,"mat-list-item",0)(10,"mat-icon"),m(11,"border_all"),l(),m(12," Tables "),l(),c(13,"mat-list-item",0)(14,"mat-icon"),m(15,"notifications_none"),l(),m(16," Notification "),l(),c(17,"mat-list-item",1),D("click",function(){return i.openUiElements()}),c(18,"mat-icon"),m(19,"filter_none"),l(),m(20," UI Elements "),l(),c(21,"div")(22,"mat-list-item",2),E(23,"div",3),m(24,"Icons "),l(),c(25,"mat-list-item",2),E(26,"div",3),m(27,"Charts "),l(),c(28,"mat-list-item",2),E(29,"div",3),m(30,"Map "),l()()(),c(31,"p",4),m(32,"Help"),l(),c(33,"mat-list")(34,"a",5)(35,"mat-list-item")(36,"mat-icon"),m(37,"library_books"),l(),m(38," Library "),l()(),c(39,"a",6)(40,"mat-list-item")(41,"mat-icon"),m(42,"question_answer"),l(),m(43," Support "),l()(),c(44,"a",7)(45,"mat-list-item")(46,"mat-icon"),m(47,"help_outline"),l(),m(48," FAQ "),l()()(),c(49,"p",4),m(50,"Projects"),l(),c(51,"mat-list")(52,"mat-list-item"),E(53,"div",8),m(54," My resend "),l(),c(55,"mat-list-item"),E(56,"div",9),m(57," Starred"),l(),c(58,"mat-list-item"),E(59,"div",10),m(60," Background "),l()()),e&2&&(p(),_("routerLink",Rt(i.routes.DASHBOARD)),p(4),_("routerLink",Rt(i.routes.TYPOGRAPHY)),p(4),_("routerLink",Rt(i.routes.TABLES)),p(4),_("routerLink",Rt(i.routes.NOTIFICATION)),p(9),_("routerLink",Rt(i.routes.UI_ELEMENTS_ICONS)),p(3),_("routerLink",Rt(i.routes.UI_ELEMENTS_CHARTS)),p(3),_("routerLink",Rt(i.routes.UI_ELEMENTS_MAP)))},dependencies:[yo,xo,Y,ln,cn],styles:[".mat-mdc-list[_ngcontent-%COMP%]{border-bottom:1px solid rgba(216,216,216,.5019607843);width:210px;padding-bottom:16px}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]{display:flex;cursor:pointer;color:#6e6e6ecc;width:auto;padding-left:4px}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]{color:#4a4a4a;background-color:#f3f5ff;outline:none}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:#536dfe}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.active[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:#536dfe}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:hover{background-color:#f3f5ff}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item[_ngcontent-%COMP%]:focus{outline:none}.mat-icon[_ngcontent-%COMP%]{margin-right:15px;color:#6e6e6e99}.sidebar-title[_ngcontent-%COMP%]{color:#6e6e6ecc;font-size:16px;text-transform:uppercase;margin-top:32px;margin-left:24px;margin-bottom:16px}.mat-mdc-list[_ngcontent-%COMP%]   .mat-mdc-list-item.ui-element[_ngcontent-%COMP%]{padding-left:40px}.circle[_ngcontent-%COMP%]{width:5px;height:5px;border-radius:50%;background-color:#b9b9b9;margin-right:30px}.project-circle[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;margin-right:15px;margin-left:8px}.project-circle_yellow[_ngcontent-%COMP%]{background-color:#ffc260}.project-circle_blue[_ngcontent-%COMP%]{background-color:#536dfe}.project-circle_pink[_ngcontent-%COMP%]{background-color:#ff4081}"]})}}return n})();var Om=(()=>{class n{constructor(){this.flatlogic="https://flatlogic.com/",this.flatlogicAbout="https://flatlogic.com/about",this.flatlogicBlog="https://flatlogic.com/blog"}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-footer"]],standalone:!1,decls:15,vars:3,consts:[[1,"footer"],[1,"footer__link"],[1,"footer__link-item",3,"href"],[1,"footer__icon"],["mat-mini-fab",""],["fontSet","fa fa-fs","fontIcon","fa-facebook-square"],["fontSet","fa fa-fs","fontIcon","fa-twitter-square"],["fontSet","fa fa-fs","fontIcon","fa-github-square"]],template:function(e,i){e&1&&(c(0,"div",0)(1,"div",1)(2,"a",2),m(3,"Flatlogic"),l(),c(4,"a",2),m(5,"About Us"),l(),c(6,"a",2),m(7,"Blog"),l()(),c(8,"div",3)(9,"button",4),E(10,"mat-icon",5),l(),c(11,"button",4),E(12,"mat-icon",6),l(),c(13,"button",4),E(14,"mat-icon",7),l()()()),e&2&&(p(2),_("href",i.flatlogic,Xt),p(2),_("href",i.flatlogicAbout,Xt),p(2),_("href",i.flatlogicBlog,Xt))},dependencies:[Y,ht],styles:[".footer[_ngcontent-%COMP%]{height:48px;margin-top:40px;width:calc(100% - 48px);display:flex;justify-content:space-between;padding:0 24px 24px}@media(max-width:576px){.footer[_ngcontent-%COMP%]{flex-direction:column;align-items:start}}.footer__link[_ngcontent-%COMP%]{display:flex;align-items:center}@media(max-width:576px){.footer__link[_ngcontent-%COMP%]{margin-bottom:8px}}@media(max-width:576px){.footer__icon[_ngcontent-%COMP%]{margin:0 0 8px -14px}}.footer__link-item[_ngcontent-%COMP%]{margin-right:16px;color:#536dfe;text-decoration:none}.footer__link-item[_ngcontent-%COMP%]:hover{text-decoration:underline}.mat-mdc-mini-fab[_ngcontent-%COMP%]{box-shadow:none;background-color:inherit;width:46px;height:46px}.mat-mdc-mini-fab[_ngcontent-%COMP%]:hover{background-color:#00000014}.mat-icon[_ngcontent-%COMP%]{color:#6e6e6e99;padding:3px 0 0}"]})}}return n})();var Dm=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-settings-menu"]],standalone:!1,decls:14,vars:1,consts:[["settings","matMenu"],["mat-mini-fab","",1,"settings-button",3,"matMenuTriggerFor"],[1,"settings-button__icon"],[1,"settings-menu"],["xPosition","before"],["mat-menu-item","",1,"settings-menu__item"]],template:function(e,i){if(e&1&&(c(0,"button",1)(1,"mat-icon",2),m(2,"more_vert"),l()(),c(3,"div",3)(4,"mat-menu",4,0)(6,"button",5),m(7,"Edit"),l(),c(8,"button",5),m(9,"Copy"),l(),c(10,"button",5),m(11,"Delete"),l(),c(12,"button",5),m(13,"Print"),l()()()),e&2){let a=tt(5);_("matMenuTriggerFor",a)}},dependencies:[Y,ht,pt,Ot,Ft],styles:[".settings-button[_ngcontent-%COMP%]{box-shadow:none;background-color:#fff;color:#b9b9b9}.settings-button[_ngcontent-%COMP%]:hover{background-color:#536dfe;color:#ffffff59}.settings-button__icon[_ngcontent-%COMP%]{color:inherit}.settings-menu[_ngcontent-%COMP%]{position:absolute}.settings-menu__item[_ngcontent-%COMP%]{color:#4a4a4a}.settings-menu__item[_ngcontent-%COMP%]:hover{background-color:#f3f5ff}"]})}}return n})();var Bi=(function(n){return n.daily="Daily",n.weekly="Weekly",n.monthly="Monthly",n})(Bi||{}),Fm=(()=>{class n{constructor(){this.changeDateType=new S,this.matSelectFields=Bi,this.selectedMatSelectValue=Bi.daily}changedMatSelectionValue(t){this.changeDateType.emit(t)}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=g({type:n,selectors:[["app-date-menu"]],outputs:{changeDateType:"changeDateType"},standalone:!1,decls:7,vars:4,consts:[[1,"date-menu",3,"ngModelChange","selectionChange","ngModel"],[3,"value"]],template:function(e,i){e&1&&(c(0,"mat-select",0),Pe("ngModelChange",function(r){return Ie(i.selectedMatSelectValue,r)||(i.selectedMatSelectValue=r),r}),D("selectionChange",function(r){return i.changedMatSelectionValue(r.value)}),c(1,"mat-option",1),m(2,"Daily"),l(),c(3,"mat-option",1),m(4,"Weekly"),l(),c(5,"mat-option",1),m(6,"Monthly"),l()()),e&2&&(De("ngModel",i.selectedMatSelectValue),p(),_("value",i.matSelectFields.daily),p(2),_("value",i.matSelectFields.weekly),p(2),_("value",i.matSelectFields.monthly))},dependencies:[Mo,ie,Dn,Pn],styles:[".date-menu[_ngcontent-%COMP%]{border:none;width:55px;padding:8px 0 8px 4px}"]})}}return n})();var xr=["sidenav"],wr=["*"],zm=(()=>{class n{constructor(t,e){this.mobileQuery=e.matchMedia("(max-width: 1024px)"),this.mobileQueryListener=()=>t.detectChanges(),this.mobileQuery.addListener(this.mobileQueryListener),this.isShowSidebar=!this.mobileQuery.matches}ngOnDestroy(){this.mobileQuery.removeListener(this.mobileQueryListener),this.sidenav.close()}static{this.\u0275fac=function(e){return new(e||n)(Bt(q),Bt(pn))}}static{this.\u0275cmp=g({type:n,selectors:[["app-layout"]],viewQuery:function(e,i){if(e&1&&J(xr,5),e&2){let a;y(a=x())&&(i.sidenav=a.first)}},standalone:!1,ngContentSelectors:wr,decls:7,vars:4,consts:[["sidenav",""],[3,"isShowSidebar","isMenuOpened"],[1,"layout"],["mode","side",1,"layout-sidebar",3,"openedChange","opened","mode","fixedInViewport"],[1,"layout-content"]],template:function(e,i){if(e&1){let a=Ct();T(),c(0,"app-header",1),D("isShowSidebar",function(d){Z(a);let h=tt(3);return $(h.toggle(d))}),l(),c(1,"mat-sidenav-container",2)(2,"mat-sidenav",3,0),Pe("openedChange",function(d){return Z(a),Ie(i.isShowSidebar,d)||(i.isShowSidebar=d),$(d)}),E(4,"app-sidebar"),l(),c(5,"mat-sidenav-content",4),b(6),l()()}e&2&&(_("isMenuOpened",i.isShowSidebar),p(2),De("opened",i.isShowSidebar),_("mode",i.mobileQuery.matches?"over":"side")("fixedInViewport",i.mobileQuery.matches))},dependencies:[zo,Fi,Oo,ci,No],styles:[".layout[_ngcontent-%COMP%]{width:100%}.layout-sidebar[_ngcontent-%COMP%]{height:calc(100vh - 64px);margin-top:64px}@media(max-width:576px){.layout-sidebar[_ngcontent-%COMP%]{width:218px}}.layout-content[_ngcontent-%COMP%]{background-color:#f6f7ff;height:calc(100vh - 64px);margin-top:64px}@media(max-width:576px){.layout-content[_ngcontent-%COMP%]{width:100%}}"]})}}return n})();var rh=(()=>{class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=O({type:n})}static{this.\u0275inj=M({imports:[Li,wo,Xe,dn,Ve,Fe,ai,So,Tn,Eo,Li]})}}return n})();export{Pr as a,Rr as b,Tr as c,Ar as d,Fr as e,_e as f,_o as g,Y as h,Xe as i,Ht as j,he as k,ue as l,ge as m,ai as n,ie as o,Mo as p,So as q,uo as r,go as s,Om as t,Dm as u,Fm as v,zm as w,rh as x};
