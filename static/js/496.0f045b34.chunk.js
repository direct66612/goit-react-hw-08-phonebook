"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{2496:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var a,r,i,o,c=t(4420),s=t(4412),l=t(7450),u=t(2791),p=t(4942),m=t(1413),d=t(9439),x=t(168),f=t(5867),h=(0,f.ZP)("div")(a||(a=(0,x.Z)(["\n  border: 1px solid #000;\n  width: 400px;\n  padding: 20px;\n  margin-left: 30px;\n  .form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n  }\n"]))),v=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},j=t(184),_=function(){var n=(0,u.useState)({name:"",phone:""}),e=(0,d.Z)(n,2),t=e[0],a=e[1],r=(0,c.I0)(),i=(0,c.v9)(s.K2),o=function(n){var e=n.target,t=e.name,r=e.value;a((function(n){return(0,m.Z)((0,m.Z)({},n),{},(0,p.Z)({},t,r))}))};return(0,j.jsx)(h,{children:(0,j.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),i.some((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))alert("".concat(t.name," is already in contactcs!"));else{var e=(0,m.Z)({id:v()},t);r((0,l.mu)(e)),a({name:"",phone:""})}},className:"form",children:[(0,j.jsx)("p",{className:"input__text",children:"Name"}),(0,j.jsx)("input",{className:"input__name",type:"text",name:"name",value:t.name,onChange:o}),(0,j.jsx)("input",{className:"input__tel",type:"number",name:"phone",value:t.phone,onChange:o,required:!0}),(0,j.jsx)("button",{className:"input__btn",type:"submit",children:"Add Contact"})]})})},g=t(3767),b=(0,f.ZP)("div")(r||(r=(0,x.Z)(["\n  margin-left: 35px;\n"]))),y=function(){var n=(0,c.I0)();return(0,j.jsxs)(b,{children:[(0,j.jsx)("h3",{children:"Find contacts by name"}),(0,j.jsx)("input",{className:"input__filter",type:"text",name:"contact_name",placeholder:"Search...",onChange:function(e){n((0,g.hX)(e.currentTarget.value))}})]})},C=(0,f.ZP)("ul")(i||(i=(0,x.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-left: 20px;\n  list-style-type: none;\n  .contact__item {\n    border: 1px solid #000;\n    padding: 20px;\n  }\n"]))),Z=function(){var n=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}((0,c.v9)(s.K2),(0,c.v9)(g.zK)),e=(0,c.I0)();return(0,j.jsx)(C,{children:n.map((function(n){var t=n.id,a=n.name,r=n.phone;return(0,j.jsxs)("li",{className:"contact__item",children:[(0,j.jsxs)("p",{children:[a,": ",r]}),(0,j.jsx)("button",{type:"button",onClick:function(){return n=t,void e((0,l.nt)(n));var n},className:"contact__btn",children:"Delete"})]},t)}))})},w=(0,f.ZP)("h2")(o||(o=(0,x.Z)(["\n  margin-left: 30px;\n"]))),N=function(n){var e=n.title;return(0,j.jsx)(w,{children:e})};function k(){var n=(0,c.I0)(),e=(0,c.v9)(s.NH);(0,u.useEffect)((function(){n((0,l.VR)())}),[n]);var t=(0,c.v9)(s.K2);return(0,j.jsxs)("div",{children:[(0,j.jsx)(N,{title:"Phonebook"}),(0,j.jsx)(_,{}),(0,j.jsx)(N,{title:"Contacts"}),(0,j.jsx)(y,{}),e?(0,j.jsx)("p",{children:"loading..."}):t.length>0?(0,j.jsx)(Z,{}):(0,j.jsx)("p",{children:"No contacts"})]})}}}]);
//# sourceMappingURL=496.0f045b34.chunk.js.map