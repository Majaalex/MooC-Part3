(window.webpackJsonpphonebook=window.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=(t(19),t(2)),l=function(e){return o.a.createElement("div",null,e.persons.map(function(n){return o.a.createElement("p",{key:n.name},n.name," ",n.number," ",o.a.createElement("button",{onClick:e.onClick,value:n.id},"Delete"))}))},i=function(e){return o.a.createElement("div",null,"Filter by name: ",o.a.createElement("input",{value:e.newFilter,onChange:e.onChange}))},m=function(e){return o.a.createElement("form",{onSubmit:e.addPerson},o.a.createElement("div",null,"Name: ",o.a.createElement("input",{value:e.newName,onChange:e.handleAddNames}),"Number: ",o.a.createElement("input",{value:e.newNumber,onChange:e.handleAddNumbers})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},d=t(3),s=t.n(d),f="/api/persons",h=function(){return s.a.get(f).then(function(e){return console.log("Getting the entries"),e.data})},b=function(e){return s.a.post(f,e).then(function(e){return console.log("Created a new entry"),e.data})},p=function(e,n){console.log("Inside update");var t=s.a.post("".concat(f,"/").concat(e),n);return console.log("AFter req"),t.then(function(e){return console.log("Updated the data"),e.data})},g=function(e){s.a.delete("".concat(f,"/").concat(e.id))},v=function(e){var n=e.message,t=e.type;if(null===n)return null;var a="confirmation"===t?"confirmation":"error";return o.a.createElement("div",{className:a},n)},E=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),d=Object(u.a)(c,2),s=d[0],f=d[1],E=Object(a.useState)(""),w=Object(u.a)(E,2),k=w[0],j=w[1],N=Object(a.useState)(""),O=Object(u.a)(N,2),C=O[0],y=O[1],S=Object(a.useState)(null),A=Object(u.a)(S,2),T=A[0],I=A[1],x=Object(a.useState)(null),D=Object(u.a)(x,2),F=D[0],M=D[1],P=function(e,n,t){var a=e.filter(function(e){return n.name===e.name})[0];n.id=a.id,console.log("trying to update"),p(n.id,n).then(function(){console.log("Updating"),t(e.splice(e.findIndex(function(e){return e.id===a.id}),1)),t(e.concat(n)),M("".concat(a.name,"'s phonenumber has been updated.")),setTimeout(function(){M(null)},5e3)}).catch(function(e){I("Could not update ".concat(a.name,"'s phone number.")),setTimeout(function(){I(null)},5e3)})},J=function(e){var n=t.filter(function(n){return n.name===e.name}),a=t.filter(function(n){return n.number===e.number}),o=n.length>0,r=a.length>0;return o&&!r?1:o||r?9:0};return Object(a.useEffect)(function(){h().then(function(e){return r(e)})},[]),o.a.createElement("div",null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(v,{message:T,type:"error"}),o.a.createElement(v,{message:F,type:"confirmation"}),o.a.createElement(i,{value:C,onChange:function(e){return y(e.target.value)}}),o.a.createElement("h2",null,"New contact"),o.a.createElement(m,{addPerson:function(e){e.preventDefault();var n={name:s,number:k,id:t.length*Math.floor(Math.random()*Math.floor(100))};switch(J(n)){case 1:var a="".concat(n.name,"  is already in the phonebook, replace the old number with the new one?");window.confirm(a)&&P(t,n,r);break;case 0:b(n).then(function(){r(t.concat(n)),M("".concat(n.name," has been added.")),setTimeout(function(){M(null)},5e3)}).catch(function(e){I("Could not add ".concat(n.name," to the phonebook.")),setTimeout(function(){I(null)},5e3)});break;case 9:alert("".concat(s," or ").concat(k," already exists in the phonebook."));break;default:console.log("Incorrect parameters")}f(""),j("")},handleAddNames:function(e){return f(e.target.value)},handleAddNumbers:function(e){return j(e.target.value)},newName:s,newNumber:k}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(l,{persons:t.filter(function(e){return e.name.toLowerCase().includes(C)}),onClick:function(e){var n=t.filter(function(n){return String(n.id)===e.target.value});window.confirm("Delete ".concat(n[0].name,"?"))&&(g(n[0]),r(t.filter(function(n){return String(n.id)!==e.target.value})),M("".concat(n[0].name," has been removed.")),setTimeout(function(){M(null)},5e3))}}))};c.a.render(o.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4cb0088c.chunk.js.map