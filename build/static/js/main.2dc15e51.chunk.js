(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),u=(t(19),t(2)),l=function(e){return r.a.createElement("div",null,e.persons.map(function(n){return r.a.createElement("p",{key:n.name},n.name," ",n.number," ",r.a.createElement("button",{onClick:e.onClick,value:n.id},"Delete"))}))},i=function(e){return r.a.createElement("div",null,"Filter by name: ",r.a.createElement("input",{value:e.newFilter,onChange:e.onChange}))},m=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.newName,onChange:e.handleAddNames}),"Number: ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleAddNumbers})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},d=t(3),s=t.n(d),f="/api/persons",h=function(){return s.a.get(f).then(function(e){return console.log("Getting the entries"),e.data})},b=function(e){return s.a.post(f,e).then(function(e){return console.log("Created a new entry"),e.data})},p=function(e,n){return s.a.put("".concat(f,"/").concat(e),n).then(function(e){return console.log("Updated the data"),e.data})},v=function(e){s.a.delete("".concat(f,"/").concat(e.id))},g=function(e){var n=e.message,t=e.type;if(null===n)return null;var a="confirmation"===t?"confirmation":"error";return r.a.createElement("div",{className:a},n)},E=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),d=Object(u.a)(c,2),s=d[0],f=d[1],E=Object(a.useState)(""),w=Object(u.a)(E,2),k=w[0],j=w[1],N=Object(a.useState)(""),O=Object(u.a)(N,2),C=O[0],y=O[1],S=Object(a.useState)(null),T=Object(u.a)(S,2),A=T[0],x=T[1],D=Object(a.useState)(null),I=Object(u.a)(D,2),M=I[0],P=I[1],F=function(e,n,t){var a=e.filter(function(e){return n.name===e.name})[0];n.id=a.id,p(n.id,n).then(function(){t(e.splice(e.findIndex(function(e){return e.id===a.id}),1)),t(e.concat(n)),P("".concat(a.name,"'s phonenumber has been updated.")),setTimeout(function(){P(null)},5e3)}).catch(function(e){x("Could not update ".concat(a.name,"'s phone number.")),setTimeout(function(){x(null)},5e3)})},J=function(e){var n=t.filter(function(n){return n.name===e.name}),a=t.filter(function(n){return n.number===e.number}),r=n.length>0,o=a.length>0;return r&&!o?1:r||o?9:0};return Object(a.useEffect)(function(){h().then(function(e){return o(e)})},[]),r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(g,{message:A,type:"error"}),r.a.createElement(g,{message:M,type:"confirmation"}),r.a.createElement(i,{value:C,onChange:function(e){return y(e.target.value)}}),r.a.createElement("h2",null,"New contact"),r.a.createElement(m,{addPerson:function(e){e.preventDefault();var n={name:s,number:k,id:t.length*Math.floor(Math.random()*Math.floor(100))};switch(J(n)){case 1:var a="".concat(n.name,"  is already in the phonebook, replace the old number with the new one?");window.confirm(a)&&F(t,n,o);break;case 0:b(n).then(function(){o(t.concat(n)),P("".concat(n.name," has been added.")),setTimeout(function(){P(null)},5e3)}).catch(function(e){x("Could not add ".concat(n.name," to the phonebook.")),setTimeout(function(){x(null)},5e3)});break;case 9:alert("".concat(s," or ").concat(k," already exists in the phonebook."));break;default:console.log("Incorrect parameters")}f(""),j("")},handleAddNames:function(e){return f(e.target.value)},handleAddNumbers:function(e){return j(e.target.value)},newName:s,newNumber:k}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(l,{persons:t.filter(function(e){return e.name.toLowerCase().includes(C)}),onClick:function(e){var n=t.filter(function(n){return String(n.id)===e.target.value});window.confirm("Delete ".concat(n[0].name,"?"))&&(v(n[0]),o(t.filter(function(n){return String(n.id)!==e.target.value})),P("".concat(n[0].name," has been removed.")),setTimeout(function(){P(null)},5e3))}}))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2dc15e51.chunk.js.map