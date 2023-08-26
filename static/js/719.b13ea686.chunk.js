"use strict";(self.webpackChunkreact_goit_phonebook=self.webpackChunkreact_goit_phonebook||[]).push([[719],{8719:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var i,o,a,r,s,c,l,u=t(9434),d=t(7883),m=t(4814),x=t(5705),p=t(6727),h=t(9939),f=t(168),b=t(6444),j=(0,b.ZP)(x.l0)(i||(i=(0,f.Z)(["\n  padding: 10px;\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid black;\n\n  button {\n    margin-right: 125px;\n  }\n"]))),g=(0,b.ZP)(x.gN)(o||(o=(0,f.Z)(["\n  display: block;\n"]))),y=b.ZP.label(a||(a=(0,f.Z)(["\n  margin-bottom: 20px;\n"]))),Z=(0,b.ZP)(x.Bc)(r||(r=(0,f.Z)(["\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n  color: tomato;\n"]))),v=t(918),k=t(3329),C=(0,p.Ry)().shape({name:(0,p.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Name may contain only letters, apostrophe, dash and spaces").min(2,"Too Short!").max(20,"Too Long!").required("Required"),number:(0,p.Z_)().matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +").min(5,"Too Short!").max(20,"Too Long!").required("Required")}),w=function(){var n=(0,u.I0)(),e=(0,u.v9)(v.Af);return(0,k.jsx)(x.J9,{initialValues:{name:"",number:""},validationSchema:C,onSubmit:function(t,i){if(e.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))return alert("".concat(t.name," is already in contacts!"));n((0,h.je)(t)),i.resetForm()},children:(0,k.jsxs)(j,{children:[(0,k.jsxs)(y,{children:["Name",(0,k.jsx)(g,{type:"text",name:"name"}),(0,k.jsx)(Z,{name:"name",component:"div"})]}),(0,k.jsxs)(y,{children:["Number",(0,k.jsx)(g,{type:"tel",name:"number"}),(0,k.jsx)(Z,{name:"number",component:"div"})]}),(0,k.jsx)("button",{type:"submit",children:"Add contact"})]})})},P=t(2791),A=b.ZP.ul(s||(s=(0,f.Z)(["\n  padding: 20px 0;\n  display: inline-flex;\n  flex-direction: column;\n  counter-reset: section;\n\n  /* counter-reset: section; */\n  /* list-style-type: none; */\n\n  li {\n    margin-bottom: 10px;\n    display: inline-flex;\n    gap: 5px;\n\n    &::before {\n      counter-increment: section;\n      content: counters(section, '.') '.';\n    }\n\n    button {\n      margin-left: auto;\n      padding: 0 20px;\n    }\n  }\n"]))),L=function(){var n=(0,u.I0)(),e=(0,u.v9)(v.Af),t=(0,u.v9)(v.Gd);(0,P.useEffect)((function(){n((0,h.VC)())}),[n]);var i=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,k.jsx)(A,{children:i.map((function(e){return(0,k.jsxs)("li",{children:[e.name,": ",e.number,(0,k.jsx)("button",{onClick:function(){return n((0,h.xX)(e.id))},children:"Delete"})]},e.id)}))})},_=t(96),N=b.ZP.label(c||(c=(0,f.Z)(["\n  input {\n    margin: 10px 0;\n    display: block;\n  }\n"]))),T=b.ZP.button(l||(l=(0,f.Z)(["\n  padding: 0 43px;\n"]))),q=function(){var n=(0,u.v9)(v.Gd),e=(0,u.I0)(),t=function(n){return e((0,_.h)(n.target.value))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(N,{children:["Find contacts by name",(0,k.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})]}),(0,k.jsx)(T,{onClick:t,children:"New search"})]})},z=function(){var n=(0,u.v9)(v.xU);return(0,k.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,k.jsxs)(m.$,{mainTitle:"Contacts",children:[(0,k.jsx)(q,{})," ",(0,k.jsx)("br",{}),(0,k.jsx)(L,{})]}),(0,k.jsx)(m.$,{title:"Phonebook",children:(0,k.jsx)(w,{})}),n&&(0,k.jsx)(d.D,{})]})}}}]);
//# sourceMappingURL=719.b13ea686.chunk.js.map