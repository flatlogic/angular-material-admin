import{a as de,b as me,c as pe,d as he,e as _e,f as be,g as ue,h as fe,i as ge,j as ke,k as Ht,l as Se}from"./chunk-QXTGRKPD.js";import{a as oe,b as re,c as ce,e as ot,f as ft,h as xt,i as yt,j as wt,k as It,l as Mt,m as Pt,n as Dt,o as Et,p as zt,q as Rt,r as At,s as Lt,t as Ft,u as Vt,w as Nt,x as Bt}from"./chunk-RMBTMJLB.js";import{$ as Ve,$a as ee,Ba as U,Bb as we,Ca as w,Cb as Ie,Cc as dt,Cd as Tt,D as P,Dc as mt,Ea as B,Fa as H,Ga as Ge,Gc as se,Ha as Ye,Hb as We,I as Le,Ia as Xe,Id as St,J as Z,Ja as l,Jc as pt,K as v,Ka as o,L as z,La as r,Ld as Ot,Ma as _,Mb as $,N as m,Na as Te,Nc as q,Oa as Ue,Ob as k,Pb as F,Pc as De,Qa as D,R as x,Ra as S,S as y,Sb as et,Sc as ht,T as R,Tb as tt,Tc as _t,U as J,Ub as ne,Uc as bt,V as ve,Va as I,Vb as it,W as Fe,Wa as qe,Xa as b,Xb as nt,Y as X,Ya as Qe,Yc as ut,Z as K,Za as h,Zc as le,_a as W,ba as Ne,bb as j,c as Y,cb as A,cd as gt,da as N,db as L,e as Ae,ed as kt,gb as te,hc as Me,ib as E,ic as at,j as ye,ja as c,jb as ie,jc as ae,kb as p,la as Ce,lb as O,mb as M,nc as rt,oa as Be,oc as Pe,pa as He,qc as ct,ra as je,sa as f,sc as st,sd as vt,ta as C,ua as $e,vb as Ze,wb as Je,wc as lt,xa as g,xb as Ke,yd as Ct}from"./chunk-ZQFFOVI5.js";import{a as G}from"./chunk-JKOY2XUY.js";var Wt=["mat-internal-form-field",""],ei=["*"],jt=(()=>{class n{labelPosition="after";static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,i){t&2&&E("mdc-form-field--align-end",i.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:Wt,ngContentSelectors:ei,decls:1,vars:0,template:function(t,i){t&1&&(W(),ee(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})();var ti=["input"],ii=["label"],ni=["*"],Ee={color:"accent",clickAction:"check-indeterminate",disabledInteractive:!1},ai=new z("mat-checkbox-default-options",{providedIn:"root",factory:()=>Ee}),u=(function(n){return n[n.Init=0]="Init",n[n.Checked=1]="Checked",n[n.Unchecked=2]="Unchecked",n[n.Indeterminate=3]="Indeterminate",n})(u||{}),Oe=class{source;checked},ze=(()=>{class n{_elementRef=m(N);_changeDetectorRef=m($);_ngZone=m(K);_animationsDisabled=q();_options=m(ai,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let t=new Oe;return t.source=this,t.checked=e,t}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:"mdc-checkbox--anim-unchecked-checked",uncheckedToIndeterminate:"mdc-checkbox--anim-unchecked-indeterminate",checkedToUnchecked:"mdc-checkbox--anim-checked-unchecked",checkedToIndeterminate:"mdc-checkbox--anim-checked-indeterminate",indeterminateToChecked:"mdc-checkbox--anim-indeterminate-checked",indeterminateToUnchecked:"mdc-checkbox--anim-indeterminate-unchecked"};ariaLabel="";ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition="after";name=null;change=new X;indeterminateChange=new X;value;disableRipple=!1;_inputElement;_labelElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass="";_currentCheckState=u.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){m(st).load(_t);let e=m(new We("tabindex"),{optional:!0});this._options=this._options||Ee,this.color=this._options.color||Ee.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=m(se).getId("mat-mdc-checkbox-"),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let t=e!=this._indeterminate();this._indeterminate.set(e),t&&(e?this._transitionCheckState(u.Indeterminate):this._transitionCheckState(this.checked?u.Checked:u.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=Ve(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let t=this._currentCheckState,i=this._getAnimationTargetElement();if(!(t===e||!i)&&(this._currentAnimationClass&&i.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){i.classList.add(this._currentAnimationClass);let a=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{i.classList.remove(a)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!=="noop"?(this.indeterminate&&e!=="check"&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?u.Checked:u.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e==="noop")&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,t){if(this._animationsDisabled)return"";switch(e){case u.Init:if(t===u.Checked)return this._animationClasses.uncheckedToChecked;if(t==u.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case u.Unchecked:return t===u.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case u.Checked:return t===u.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case u.Indeterminate:return t===u.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return""}_syncIndeterminate(e){let t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_onTouchTargetClick(){this._handleInputClick(),this.disabled||this._inputElement.nativeElement.focus()}_preventBubblingFromLabel(e){e.target&&this._labelElement.nativeElement.contains(e.target)&&e.stopPropagation()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-checkbox"]],viewQuery:function(t,i){if(t&1&&j(ti,5)(ii,5),t&2){let a;A(a=L())&&(i._inputElement=a.first),A(a=L())&&(i._labelElement=a.first)}},hostAttrs:[1,"mat-mdc-checkbox"],hostVars:16,hostBindings:function(t,i){t&2&&(qe("id",i.id),w("tabindex",null)("aria-label",null)("aria-labelledby",null),ie(i.color?"mat-"+i.color:"mat-accent"),E("_mat-animation-noopable",i._animationsDisabled)("mdc-checkbox--disabled",i.disabled)("mat-mdc-checkbox-disabled",i.disabled)("mat-mdc-checkbox-checked",i.checked)("mat-mdc-checkbox-disabled-interactive",i.disabledInteractive))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],ariaExpanded:[2,"aria-expanded","ariaExpanded",k],ariaControls:[0,"aria-controls","ariaControls"],ariaOwns:[0,"aria-owns","ariaOwns"],id:"id",required:[2,"required","required",k],labelPosition:"labelPosition",name:"name",value:"value",disableRipple:[2,"disableRipple","disableRipple",k],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?void 0:F(e)],color:"color",disabledInteractive:[2,"disabledInteractive","disabledInteractive",k],checked:[2,"checked","checked",k],disabled:[2,"disabled","disabled",k],indeterminate:[2,"indeterminate","indeterminate",k]},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[Je([{provide:gt,useExisting:Le(()=>n),multi:!0},{provide:kt,useExisting:n,multi:!0}]),Ne],ngContentSelectors:ni,decls:15,vars:23,consts:[["checkbox",""],["input",""],["label",""],["mat-internal-form-field","",3,"click","labelPosition"],[1,"mdc-checkbox"],["aria-hidden","true",1,"mat-mdc-checkbox-touch-target",3,"click"],["type","checkbox",1,"mdc-checkbox__native-control",3,"blur","click","change","checked","indeterminate","disabled","id","required","tabIndex"],["aria-hidden","true",1,"mdc-checkbox__ripple"],["aria-hidden","true",1,"mdc-checkbox__background"],["focusable","false","viewBox","0 0 24 24",1,"mdc-checkbox__checkmark"],["fill","none","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-checkbox__checkmark-path"],[1,"mdc-checkbox__mixedmark"],["mat-ripple","","aria-hidden","true",1,"mat-mdc-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-label",3,"for"]],template:function(t,i){if(t&1&&(W(),o(0,"div",3),b("click",function(s){return i._preventBubblingFromLabel(s)}),o(1,"div",4,0)(3,"div",5),b("click",function(){return i._onTouchTargetClick()}),r(),o(4,"input",6,1),b("blur",function(){return i._onBlur()})("click",function(){return i._onInputClick()})("change",function(s){return i._onInteractionEvent(s)}),r(),_(6,"div",7),o(7,"div",8),R(),o(8,"svg",9),_(9,"path",10),r(),J(),_(10,"div",11),r(),_(11,"div",12),r(),o(12,"label",13,2),ee(14),r()()),t&2){let a=te(2);l("labelPosition",i.labelPosition),c(4),E("mdc-checkbox--selected",i.checked),l("checked",i.checked)("indeterminate",i.indeterminate)("disabled",i.disabled&&!i.disabledInteractive)("id",i.inputId)("required",i.required)("tabIndex",i.disabled&&!i.disabledInteractive?-1:i.tabIndex),w("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby)("aria-describedby",i.ariaDescribedby)("aria-checked",i.indeterminate?"mixed":null)("aria-controls",i.ariaControls)("aria-disabled",i.disabled&&i.disabledInteractive?!0:null)("aria-expanded",i.ariaExpanded)("aria-owns",i.ariaOwns)("name",i.name)("value",i.value),c(7),l("matRippleTrigger",a)("matRippleDisabled",i.disableRipple||i.disabled)("matRippleCentered",!0),c(),l("for",i.inputId)}},dependencies:[ht,jt],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--mat-checkbox-state-layer-size, 40px);
  height: var(--mat-checkbox-state-layer-size, 40px);
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));
  top: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
  background-color: var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
  color: var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
    color: GrayText;
  }
}
.mat-mdc-checkbox label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-checkbox-touch-target-size, 48px);
  width: var(--mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return n})(),$t=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=v({imports:[ze,ae]})}return n})();var ci=["tooltip"],si=20;var li=new z("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let n=m(ve);return()=>wt(n,{scrollThrottle:si})}}),di=new z("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Gt="tooltip-panel",mi={passive:!0},pi=8,hi=8,_i=24,bi=200,Yt=(()=>{class n{_elementRef=m(N);_ngZone=m(K);_platform=m(rt);_ariaDescriber=m(pt);_focusMonitor=m(ct);_dir=m(at);_injector=m(ve);_viewContainerRef=m(je);_mediaMatcher=m(lt);_document=m(Fe);_renderer=m(Be);_animationsDisabled=q();_defaultOptions=m(di,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=ui;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=De(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=De(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Pe(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Pe(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new Y;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=pi}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(P(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(t);this._detach(),this._portal=this._portal||new vt(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(P(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof N)return this._overlayRef;this._detach()}let t=this._injector.get(Ct).getAncestorScrollContainers(this._elementRef),i=`${this._cssClassPrefix}-${Gt}`,a=It(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return a.positionChanges.pipe(P(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=Mt(this._injector,{direction:this._dir,positionStrategy:a,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,i]:i,scrollStrategy:this._injector.get(li)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(P(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(P(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(P(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(P(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();t.withPositions([this._addOffset(G(G({},i.main),a.main)),this._addOffset(G(G({},i.fallback),a.fallback))])}_addOffset(e){let t=hi,i=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=i?-t:t:e.originX==="end"&&(e.offsetX=i?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"||t=="below"?i={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={originX:"end",originY:"center"});let{x:a,y:s}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,i;t=="above"?i={overlayX:"center",overlayY:"bottom"}:t=="below"?i={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?i={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:s}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Ce(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:i,originY:a}=e,s;if(t==="center"?this._dir&&this._dir.value==="rtl"?s=i==="end"?"left":"right":s=i==="start"?"left":"right":s=t==="bottom"&&a==="top"?"above":"below",s!==this._currentPosition){let V=this._overlayRef;if(V){let Re=`${this._cssClassPrefix}-${Gt}-`;V.removePanelClass(Re+this._currentPosition),V.addPanelClass(Re+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],i=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),i=this._elementRef.nativeElement;t!==i&&!i.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,mi))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,i=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(e==="on"||!t.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Ce({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!mt(e):!0;static \u0275fac=function(t){return new(t||n)};static \u0275dir=$e({type:n,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,i){t&2&&E("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return n})(),ui=(()=>{class n{_changeDetectorRef=m($);_elementRef=m(N);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=q();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new Y;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>_i&&e.width>=bi}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(t.classList.remove(e?a:i),t.classList.add(e?i:a),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(t);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-tooltip-component"]],viewQuery:function(t,i){if(t&1&&j(ci,7),t&2){let a;A(a=L())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,i){t&1&&b("mouseleave",function(s){return i._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,i){t&1&&(Te(0,"div",1,0),Qe("animationend",function(s){return i._handleAnimationEnd(s)}),Te(2,"div",2),p(3),Ue()()),t&2&&(ie(i.tooltipClass),E("mdc-tooltip--multiline",i._isMultiline),c(3),O(i.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return n})();var Xt=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=v({imports:[dt,Pt,ae,Tt]})}return n})();function fi(n,d){if(n&1&&(o(0,"mat-option",17),p(1),r()),n&2){let e=d.$implicit;l("value",e),c(),M(" ",e," ")}}function gi(n,d){if(n&1){let e=I();o(0,"mat-form-field",14)(1,"mat-select",16,0),b("selectionChange",function(i){x(e);let a=h(2);return y(a._changePageSize(i.value))}),Ye(3,fi,2,2,"mat-option",17,Ge),r(),o(5,"div",18),b("click",function(){x(e);let i=te(2);return y(i.open())}),r()()}if(n&2){let e=h(2);l("appearance",e._formFieldAppearance)("color",e.color),c(),l("value",e.pageSize)("disabled",e.disabled),U("aria-labelledby",e._pageSizeLabelId),l("panelClass",e.selectConfig.panelClass||"")("disableOptionCentering",e.selectConfig.disableOptionCentering),c(2),Xe(e._displayedPageSizeOptions)}}function ki(n,d){if(n&1&&(o(0,"div",15),p(1),r()),n&2){let e=h(2);c(),O(e.pageSize)}}function xi(n,d){if(n&1&&(o(0,"div",3)(1,"div",13),p(2),r(),B(3,gi,6,7,"mat-form-field",14),B(4,ki,2,1,"div",15),r()),n&2){let e=h();c(),w("id",e._pageSizeLabelId),c(),M(" ",e._intl.itemsPerPageLabel," "),c(),H(e._displayedPageSizeOptions.length>1?3:-1),c(),H(e._displayedPageSizeOptions.length<=1?4:-1)}}function yi(n,d){if(n&1){let e=I();o(0,"button",19),b("click",function(){x(e);let i=h();return y(i._buttonClicked(0,i._previousButtonsDisabled()))}),R(),o(1,"svg",8),_(2,"path",20),r()()}if(n&2){let e=h();l("matTooltip",e._intl.firstPageLabel)("matTooltipDisabled",e._previousButtonsDisabled())("disabled",e._previousButtonsDisabled())("tabindex",e._previousButtonsDisabled()?-1:null),w("aria-label",e._intl.firstPageLabel)}}function vi(n,d){if(n&1){let e=I();o(0,"button",21),b("click",function(){x(e);let i=h();return y(i._buttonClicked(i.getNumberOfPages()-1,i._nextButtonsDisabled()))}),R(),o(1,"svg",8),_(2,"path",22),r()()}if(n&2){let e=h();l("matTooltip",e._intl.lastPageLabel)("matTooltipDisabled",e._nextButtonsDisabled())("disabled",e._nextButtonsDisabled())("tabindex",e._nextButtonsDisabled()?-1:null),w("aria-label",e._intl.lastPageLabel)}}var Ci=(()=>{class n{changes=new Y;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(e,t,i)=>{if(i==0||t==0)return`0 of ${i}`;i=Math.max(i,0);let a=e*t,s=a<i?Math.min(a+t,i):a+t;return`${a+1} \u2013 ${s} of ${i}`};static \u0275fac=function(t){return new(t||n)};static \u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Ti=50;var wi=new z("MAT_PAGINATOR_DEFAULT_OPTIONS"),Q=(()=>{class n{_intl=m(Ci);_changeDetectorRef=m($);_formFieldAppearance;_pageSizeLabelId=m(se).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new Ae(1);color;get pageIndex(){return this._pageIndex}set pageIndex(e){this._pageIndex=Math.max(e||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(e){this._length=e||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(e){this._pageSize=Math.max(e||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(e){this._pageSizeOptions=(e||[]).map(t=>F(t,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new X;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(){let e=this._intl,t=m(wi,{optional:!0});if(this._intlChanges=e.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),t){let{pageSize:i,pageSizeOptions:a,hidePageSize:s,showFirstLastButtons:V}=t;i!=null&&(this._pageSize=i),a!=null&&(this._pageSizeOptions=a),s!=null&&(this.hidePageSize=s),V!=null&&(this.showFirstLastButtons=V)}this._formFieldAppearance=t?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){this.hasNextPage()&&this._navigate(this.pageIndex+1)}previousPage(){this.hasPreviousPage()&&this._navigate(this.pageIndex-1)}firstPage(){this.hasPreviousPage()&&this._navigate(0)}lastPage(){this.hasNextPage()&&this._navigate(this.getNumberOfPages()-1)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let e=this.getNumberOfPages()-1;return this.pageIndex<e&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(e){let t=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(t/e)||0,this.pageSize=e,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:Ti),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((e,t)=>e-t),this._changeDetectorRef.markForCheck())}_emitPageEvent(e){this.page.emit({previousPageIndex:e,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}_navigate(e){let t=this.pageIndex;e!==t&&(this.pageIndex=e,this._emitPageEvent(t))}_buttonClicked(e,t){t||this._navigate(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",F],length:[2,"length","length",F],pageSize:[2,"pageSize","pageSize",F],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",k],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",k],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",k]},outputs:{page:"page"},exportAs:["matPaginator"],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-atomic","true","aria-live","polite","role","status",1,"mat-mdc-paginator-range-label"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","disabled","tabindex"],["aria-hidden","true",1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["matIconButton","","type","button","matTooltipPosition","above","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","disabled","tabindex"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(t,i){t&1&&(o(0,"div",1)(1,"div",2),B(2,xi,5,4,"div",3),o(3,"div",4)(4,"div",5),p(5),r(),B(6,yi,3,5,"button",6),o(7,"button",7),b("click",function(){return i._buttonClicked(i.pageIndex-1,i._previousButtonsDisabled())}),R(),o(8,"svg",8),_(9,"path",9),r()(),J(),o(10,"button",10),b("click",function(){return i._buttonClicked(i.pageIndex+1,i._nextButtonsDisabled())}),R(),o(11,"svg",8),_(12,"path",11),r()(),B(13,vi,3,5,"button",12),r()()()),t&2&&(c(2),H(i.hidePageSize?-1:2),c(3),M(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),c(),H(i.showFirstLastButtons?6:-1),c(),l("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("disabled",i._previousButtonsDisabled())("tabindex",i._previousButtonsDisabled()?-1:null),w("aria-label",i._intl.previousPageLabel),c(3),l("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("disabled",i._nextButtonsDisabled())("tabindex",i._nextButtonsDisabled()?-1:null),w("aria-label",i._intl.nextPageLabel),c(3),H(i.showFirstLastButtons?13:-1))},dependencies:[St,zt,Et,bt,Yt],styles:[`.mat-mdc-paginator {
  display: block;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-paginator-container-background-color, var(--mat-sys-surface));
  font-family: var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));
  letter-spacing: var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));
  --mat-form-field-container-height: var(--mat-paginator-form-field-container-height, 40px);
  --mat-form-field-container-vertical-padding: var(--mat-paginator-form-field-container-vertical-padding, 8px);
}
.mat-mdc-paginator .mat-mdc-select-value {
  font-size: var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size));
}
.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper {
  display: none;
}
.mat-mdc-paginator .mat-mdc-select {
  line-height: 1.5;
}

.mat-mdc-paginator-outer-container {
  display: flex;
}

.mat-mdc-paginator-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
  flex-wrap: wrap;
  width: 100%;
  min-height: var(--mat-paginator-container-size, 56px);
}

.mat-mdc-paginator-page-size {
  display: flex;
  align-items: baseline;
  margin-right: 8px;
}
[dir=rtl] .mat-mdc-paginator-page-size {
  margin-right: 0;
  margin-left: 8px;
}

.mat-mdc-paginator-page-size-label {
  margin: 0 4px;
}

.mat-mdc-paginator-page-size-select {
  margin: 0 4px;
  width: var(--mat-paginator-page-size-select-width, 84px);
}

.mat-mdc-paginator-range-label {
  margin: 0 32px 0 24px;
}

.mat-mdc-paginator-range-actions {
  display: flex;
  align-items: center;
}

.mat-mdc-paginator-icon {
  display: inline-block;
  width: 28px;
  fill: var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon {
  fill: var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
[dir=rtl] .mat-mdc-paginator-icon {
  transform: rotate(180deg);
}

@media (forced-colors: active) {
  .mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon,
  .mat-mdc-paginator-icon {
    fill: currentColor;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button {
    outline: solid 1px;
  }
  .mat-mdc-paginator-range-actions .mat-mdc-icon-button[aria-disabled] {
    color: GrayText;
  }
}
.mat-mdc-paginator-touch-target {
  display: var(--mat-paginator-touch-target-display, block);
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--mat-paginator-page-size-select-width, 84px);
  height: var(--mat-paginator-page-size-select-touch-target-height, 48px);
  background-color: transparent;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
`],encapsulation:2,changeDetection:0})}return n})(),Ut=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=C({type:n});static \u0275inj=v({imports:[le,Rt,Xt,Q]})}return n})();var xe=(()=>{class n{loadEmployeeTableData(){return ye([{name:"Joe James",company:"Example Inc.",city:"Yonkers",state:"NY"},{name:"John Walsh",company:"Example Inc.",city:"Hartford",state:"CT"},{name:"Bob Herm",company:"Example Inc.",city:"Tampa",state:"FL"},{name:"James Houston",company:"Example Inc.",city:"Dallas",state:"TX"},{name:"Prabhakar Linwood",company:"Example Inc.",city:"Hartford",state:"CT"},{name:"Kaui Ignace",company:"Example Inc.",city:"Yonkers",state:"NY"},{name:"Esperanza Susanne",company:"Example Inc.",city:"Hartford",state:"CT"},{name:"Christian Birgitte",company:"Example Inc.",city:"Tampa",state:"FL"},{name:"Meral Elias",company:"Example Inc.",city:"Hartford",state:"CT"},{name:"Deep Pau",company:"Example Inc.",city:"Yonkers",state:"NY"},{name:"Sebastiana Hani",company:"Example Inc.",city:"Dallas",state:"TX"},{name:"Marciano Oihana",company:"Example Inc.",city:"Yonkers",state:"NY"},{name:"Brigid Ankur",company:"Example Inc.",city:"Dallas",state:"TX"},{name:"Anna Siranush",company:"Example Inc.",city:"Yonkers",state:"NY"},{name:"Avram Sylva",company:"Example Inc.",city:"Hartford",state:"CT"},{name:"Serafima Babatunde",company:"Example Inc.",city:"Tampa",state:"FL"},{name:"Gaston Festus",company:"Example Inc.",city:"Tampa",state:"FL"}])}loadMaterialTableData(){return ye([{name:"Mark Otto",email:"ottoto@wxample.com",product:"ON the Road",price:"$25 224.2",date:"11 May 2017",city:"Otsego",status:"send"},{name:"Jacob Thornton",email:"thornton@wxample.com",product:"HP Core i7",price:"$1 254.2",date:"4 Jun 2017",city:"Fivepointville",status:"send"},{name:"Larry the Bird",email:"bird@wxample.com",product:"Air Pro",price:"$1 570.0",date:"27 Aug 2017",city:"Leadville North",status:"pending"},{name:"Joseph May",email:"josephmay@wxample.com",product:"Version Control",price:"$5 224.5",date:"19 Feb 2018",city:"Seaforth",status:"declined"},{name:"Peter Horadnia",email:"horadnia@wxample.com",product:"Let's Dance",price:"$43 594.7",date:"1 Mar 2018",city:"Hanoverton",status:"send"}])}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=Z({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();function Si(n,d){if(n&1&&(o(0,"th",11),p(1),r()),n&2){let e=h().$implicit;c(),O(e)}}function Ei(n,d){if(n&1&&(o(0,"span"),p(1),r()),n&2){let e=h().$implicit,t=h().$implicit;c(),O(e[t])}}function Oi(n,d){if(n&1&&(o(0,"div",15)(1,"span"),p(2),r()()),n&2){let e=h().$implicit,t=h().$implicit;l("ngClass",e[t]),c(2),O(e[t])}}function zi(n,d){if(n&1&&(o(0,"td",12),g(1,Ei,2,1,"span",13)(2,Oi,3,2,"div",14),r()),n&2){let e=h().$implicit;c(),l("ngIf",e!=="status"),c(),l("ngIf",e==="status")}}function Ri(n,d){if(n&1&&(D(0,8),g(1,Si,2,1,"th",9)(2,zi,3,2,"td",10),S()),n&2){let e=d.$implicit;l("matColumnDef",Ze(e))}}function Ai(n,d){n&1&&_(0,"tr",16)}function Li(n,d){n&1&&_(0,"tr",17)}var Qt=(()=>{class n{constructor(){this.displayedColumns=["name","email","product","price","date","city","status"]}ngOnInit(){this.dataSource=this.materialTableDate}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-material-table"]],inputs:{materialTableDate:"materialTableDate"},standalone:!1,decls:10,vars:4,consts:[[1,"material-table"],[1,"material-table__header"],[1,"material-table__title"],[1,"material-table__content"],["mat-table","",1,"material-table__table",3,"dataSource"],["class","material-table__table-row",3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"material-table__table-row",3,"matColumnDef"],["mat-header-cell","","class","material-table__table-row-title",4,"matHeaderCellDef"],["mat-cell","","class","material-table__table-content",4,"matCellDef"],["mat-header-cell","",1,"material-table__table-row-title"],["mat-cell","",1,"material-table__table-content"],[4,"ngIf"],["class","material-table__content-badge",3,"ngClass",4,"ngIf"],[1,"material-table__content-badge",3,"ngClass"],["mat-header-row",""],["mat-row",""]],template:function(t,i){t&1&&(o(0,"mat-card",0)(1,"mat-card-title",1)(2,"h5",2),p(3,"Material-UI Table"),r(),_(4,"app-settings-menu"),r(),o(5,"mat-card-content",3)(6,"table",4),g(7,Ri,3,2,"ng-container",5)(8,Ai,1,0,"tr",6)(9,Li,1,0,"tr",7),r()()()),t&2&&(c(6),l("dataSource",i.dataSource),c(),l("ngForOf",i.displayedColumns),c(),l("matHeaderRowDef",i.displayedColumns),c(),l("matRowDefColumns",i.displayedColumns))},dependencies:[et,tt,ne,oe,ce,re,de,pe,ue,he,me,fe,_e,be,ge,ke,Vt],styles:[".material-table[_ngcontent-%COMP%]{margin-top:24px;padding:0;overflow:hidden;box-shadow:0 3px 11px #e8eafc,0 3px 3px -2px #b2b2b21a,0 1px 8px #9a9a9a1a}.material-table__header[_ngcontent-%COMP%]{color:#6e6e6e;display:flex;justify-content:space-between;padding:24px 24px 8px;margin-bottom:0}.material-table__title[_ngcontent-%COMP%]{font-size:21px;font-weight:400;margin:0;line-height:40px}.material-table__content[_ngcontent-%COMP%]{height:424px;overflow-y:hidden;overflow-x:scroll}@media(max-width:576px){.material-table__content[_ngcontent-%COMP%]{height:auto}}.material-table__table[_ngcontent-%COMP%]{width:100%}.material-table__table-row[_ngcontent-%COMP%]{height:64px}.material-table__table-row-title[_ngcontent-%COMP%]{color:#4a4a4a;font-size:14px;font-weight:400;line-height:24px;text-transform:uppercase;padding:16px}.material-table__table-content[_ngcontent-%COMP%]{color:#4a4a4a;font-size:14px;padding:20px}.material-table__content-badge[_ngcontent-%COMP%]{width:fit-content;border-radius:32px;color:#fff;text-align:center;padding:5px 10px;font-size:13px;box-sizing:border-box;font-family:Roboto,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.75;letter-spacing:.457px}.material-table__content-badge[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}mat-menu[_ngcontent-%COMP%]{position:absolute}.send[_ngcontent-%COMP%]{background-color:#3cd4a0}.pending[_ngcontent-%COMP%]{background-color:#ffc260}.declined[_ngcontent-%COMP%]{background-color:#ff4081}"]})}}return n})();var Vi=()=>[10,15,100];function Ni(n,d){n&1&&(o(0,"p",21),p(1,"Employee List"),r())}function Bi(n,d){if(n&1){let e=I();o(0,"div",22)(1,"div",23)(2,"mat-icon",5),p(3,"search"),r()(),o(4,"input",24),b("keyup",function(i){x(e);let a=h();return y(a.applyFilter(i))}),r(),o(5,"button",4),b("click",function(){x(e);let i=h();return y(i.showFilterInput())}),o(6,"mat-icon",5),p(7,"close"),r()()()}}function Hi(n,d){if(n&1){let e=I();o(0,"th",25)(1,"mat-checkbox",26),b("change",function(i){x(e);let a=h();return y(i?a.masterToggle():null)}),r()()}if(n&2){let e=h();c(),l("checked",e.selection.hasValue()&&e.isAllSelected())("indeterminate",e.selection.hasValue()&&!e.isAllSelected()),U("aria-label",e.checkboxLabel())}}function ji(n,d){if(n&1){let e=I();o(0,"td",27)(1,"mat-checkbox",28),b("click",function(i){return i.stopPropagation()})("change",function(i){let a=x(e).$implicit,s=h();return y(i?s.selection.toggle(a):null)}),r()()}if(n&2){let e=d.$implicit,t=h();c(),l("checked",t.selection.isSelected(e)),U("aria-label",t.checkboxLabel(e))}}function $i(n,d){n&1&&(o(0,"th",29),p(1," Name "),r())}function Gi(n,d){if(n&1&&(o(0,"td",30),p(1),r()),n&2){let e=d.$implicit;c(),M(" ",e.name," ")}}function Yi(n,d){n&1&&(o(0,"th",29),p(1," Company "),r())}function Xi(n,d){if(n&1&&(o(0,"td",30),p(1),r()),n&2){let e=d.$implicit;c(),M(" ",e.company," ")}}function Ui(n,d){n&1&&(o(0,"th",29),p(1," City "),r())}function qi(n,d){if(n&1&&(o(0,"td",30),p(1),r()),n&2){let e=d.$implicit;c(),M(" ",e.city," ")}}function Qi(n,d){n&1&&(o(0,"th",29),p(1," State "),r())}function Zi(n,d){if(n&1&&(o(0,"td",30),p(1),r()),n&2){let e=d.$implicit;c(),M(" ",e.state," ")}}function Ji(n,d){n&1&&_(0,"tr",31)}function Ki(n,d){if(n&1){let e=I();o(0,"tr",32),b("click",function(){let i=x(e).$implicit,a=h();return y(a.selection.toggle(i))}),r()}}var Zt=(()=>{class n{constructor(){this.displayedColumns=["select","name","company","city","state"],this.selection=new ft(!0,[]),this.isShowFilterInput=!1}ngOnInit(){this.dataSource=new Se(this.employeeTableData),this.dataSource.paginator=this.paginator}isAllSelected(){let e=this.selection.selected.length,t=this.dataSource.data.length;return e===t}masterToggle(){this.isAllSelected()?this.selection.clear():this.dataSource.data.forEach(e=>this.selection.select(e))}checkboxLabel(e){return e?`${this.selection.isSelected(e)?"deselect":"select"} row ${e.position+1}`:`${this.isAllSelected()?"select":"deselect"} all`}applyFilter(e){let t=e.target.value;this.dataSource.filter=t.trim().toLowerCase()}showFilterInput(){this.isShowFilterInput=!this.isShowFilterInput,this.dataSource=new Se(this.employeeTableData)}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275cmp=f({type:n,selectors:[["app-employee-table"]],viewQuery:function(t,i){if(t&1&&j(Q,7),t&2){let a;A(a=L())&&(i.paginator=a.first)}},inputs:{employeeTableData:"employeeTableData"},standalone:!1,decls:28,vars:7,consts:[[1,"employee-table-wrapper"],[1,"employee-table-wrapper__header"],["class","employee-table-wrapper__title",4,"ngIf"],["class","employee-table-wrapper__search",4,"ngIf"],["mat-mini-fab","",1,"employee-table-wrapper__button",3,"click"],[1,"employee-table-wrapper__icon"],[1,"employee-table__content"],["mat-table","",1,"employee-table__table",3,"dataSource"],["matColumnDef","select"],["class","employee-table__table-checkbox","mat-header-cell","",4,"matHeaderCellDef"],["class","employee-table__table-checkbox","mat-cell","",4,"matCellDef"],["matColumnDef","name"],["class","employee-table__table-header","mat-header-cell","",4,"matHeaderCellDef"],["class","employee-table__table-body","mat-cell","",4,"matCellDef"],["matColumnDef","company"],["matColumnDef","city"],["matColumnDef","state"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",3,"click",4,"matRowDef","matRowDefColumns"],[1,"pagination"],["showFirstLastButtons","",3,"pageSizeOptions"],[1,"employee-table-wrapper__title"],[1,"employee-table-wrapper__search"],[1,"employee-table-wrapper__icon-wrapper"],["matInput","",1,"employee-table-wrapper__search-input",3,"keyup"],["mat-header-cell","",1,"employee-table__table-checkbox"],["color","primary",3,"change","checked","indeterminate","aria-label"],["mat-cell","",1,"employee-table__table-checkbox"],["color","primary",3,"click","change","checked","aria-label"],["mat-header-cell","",1,"employee-table__table-header"],["mat-cell","",1,"employee-table__table-body"],["mat-header-row",""],["mat-row","",3,"click"]],template:function(t,i){t&1&&(o(0,"mat-card",0)(1,"mat-card-title",1),g(2,Ni,2,0,"p",2)(3,Bi,8,0,"div",3),o(4,"button",4),b("click",function(){return i.showFilterInput()}),o(5,"mat-icon",5),p(6,"search"),r()()(),o(7,"mat-card-content",6)(8,"table",7),D(9,8),g(10,Hi,2,3,"th",9)(11,ji,2,2,"td",10),S(),D(12,11),g(13,$i,2,0,"th",12)(14,Gi,2,1,"td",13),S(),D(15,14),g(16,Yi,2,0,"th",12)(17,Xi,2,1,"td",13),S(),D(18,15),g(19,Ui,2,0,"th",12)(20,qi,2,1,"td",13),S(),D(21,16),g(22,Qi,2,0,"th",12)(23,Zi,2,1,"td",13),S(),g(24,Ji,1,0,"tr",17)(25,Ki,1,0,"tr",18),r()(),o(26,"div",19),_(27,"mat-paginator",20),r()()),t&2&&(c(2),l("ngIf",!i.isShowFilterInput),c(),l("ngIf",i.isShowFilterInput),c(5),l("dataSource",i.dataSource),c(16),l("matHeaderRowDef",i.displayedColumns),c(),l("matRowDefColumns",i.displayedColumns),c(2),l("pageSizeOptions",Ke(6,Vi)))},dependencies:[ne,oe,ce,re,xt,de,pe,ue,he,me,fe,_e,be,ge,ke,ut,ze,Q],styles:[".employee-table-wrapper[_ngcontent-%COMP%]{padding-left:0;padding-right:0;margin:16px 16px 32px;box-shadow:0 3px 11px #e8eafc,0 3px 3px -2px #b2b2b21a,0 1px 8px #9a9a9a1a}.employee-table-wrapper__header[_ngcontent-%COMP%]{padding:0 24px;display:flex;align-items:center;justify-content:space-between}@media(max-width:576px){.employee-table-wrapper__header[_ngcontent-%COMP%]{padding:0 16px}}.employee-table-wrapper__title[_ngcontent-%COMP%]{margin:0}.employee-table-wrapper__search[_ngcontent-%COMP%]{display:flex;align-items:center}.employee-table-wrapper__icon-wrapper[_ngcontent-%COMP%]{height:46px;width:46px;display:flex;align-items:center;justify-content:center}.employee-table-wrapper__icon[_ngcontent-%COMP%]{color:inherit}.employee-table-wrapper__search-input[_ngcontent-%COMP%]{font-size:16px;height:32px;border:0;border-bottom:1px solid #6E6E6E;outline:none}@media(max-width:576px){.employee-table-wrapper__search-input[_ngcontent-%COMP%]{width:150px}}.employee-table-wrapper__search-input[_ngcontent-%COMP%]:focus{border-bottom:2px solid #536DFE}.employee-table-wrapper__button[_ngcontent-%COMP%]{box-shadow:none;background-color:inherit;width:46px;height:46px;color:#6e6e6e}.employee-table-wrapper__button[_ngcontent-%COMP%]:hover{background-color:#00000014;color:#536dfe}@media(max-width:576px){.employee-table__content[_ngcontent-%COMP%]{overflow-x:scroll}}.employee-table__table[_ngcontent-%COMP%]{width:100%;box-shadow:none}@media(max-width:576px){.employee-table__table[_ngcontent-%COMP%]{width:200%}}.employee-table__table-checkbox[_ngcontent-%COMP%]{width:32px;padding-left:24px}.employee-table__table-header[_ngcontent-%COMP%], .employee-table__table-body[_ngcontent-%COMP%]{padding:1rem;font-size:14px}"]})}}return n})();var Jt=(()=>{class n{constructor(e){this.service=e,this.employeeTableData$=e.loadEmployeeTableData(),this.materialTableData$=e.loadMaterialTableData()}static{this.\u0275fac=function(t){return new(t||n)(He(xe))}}static{this.\u0275cmp=f({type:n,selectors:[["app-tables-page"]],standalone:!1,decls:10,vars:6,consts:[["role","heading",1,"page-header"],[1,"tables-wrapper"],[3,"employeeTableData"],[3,"materialTableDate"]],template:function(t,i){t&1&&(o(0,"app-layout")(1,"mat-toolbar",0)(2,"h1"),p(3,"Tables"),r()(),o(4,"div",1),_(5,"app-employee-table",2),we(6,"async"),_(7,"app-material-table",3),we(8,"async"),r(),_(9,"app-footer"),r()),t&2&&(c(5),l("employeeTableData",Ie(6,2,i.employeeTableData$)),c(2),l("materialTableDate",Ie(8,4,i.materialTableData$)))},dependencies:[At,Ft,Nt,Qt,Zt,it],styles:[".tables-wrapper[_ngcontent-%COMP%]{padding:0 8px}"]})}}return n})();var en=[{path:"",component:Jt}],Kt=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=C({type:n})}static{this.\u0275inj=v({imports:[Me.forChild(en),Me]})}}return n})();var Xa=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=C({type:n})}static{this.\u0275inj=v({providers:[xe],imports:[nt,Kt,ot,yt,Dt,Ht,le,$t,Lt,Ut,Ot,Bt]})}}return n})();export{Xa as TablesModule};
