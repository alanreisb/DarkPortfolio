(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{12:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1),i=a.n(o),l=a(4),c=a.n(l),s=a(11),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=p(this,e.call.apply(e,[this].concat(o))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!f(e)){e.preventDefault();var t=n.context.router.history,a=n.props,r=a.replace,o=a.to;r?t.replace(o):t.push(o)}},p(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),a=e.innerRef,n=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,i="string"===typeof t?Object(s.b)(t,null,null,o.location):t,l=o.createHref(i);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:l,ref:a}))},t}(r.a.Component);m.propTypes={onClick:i.a.func,target:i.a.string,replace:i.a.bool,to:i.a.oneOfType([i.a.string,i.a.object]).isRequired,innerRef:i.a.oneOfType([i.a.string,i.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:i.a.shape({history:i.a.shape({push:i.a.func.isRequired,replace:i.a.func.isRequired,createHref:i.a.func.isRequired}).isRequired}).isRequired},t.a=m},44:function(e,t,a){e.exports=a.p+"static/media/BlackHole.09b3a5f4.gif"},52:function(e,t,a){"use strict";a.r(t);var n,r=a(5),o=a(6),i=a(8),l=a(7),c=a(9),s=a(0),u=a.n(s),p=a(12),f="nav-item text-center p-3",m={color:"white",fontWeight:"400",fontSize:"12pt",textDecoration:"none",fontFamily:"Azonix"},h=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("nav",{className:"w-100 navbar navbar-dark navbar-expand-sm p-0 m-0 shadow pb-3 pl-3  pt-3"},u.a.createElement("ul",{className:"navbar-nav p-0 pr-3 m-0 ml-auto float-right"},u.a.createElement("li",{class:f},u.a.createElement(p.a,{to:"/sobre",class:"nav-link ",style:m},"Sobre Mim")),u.a.createElement("li",{class:f},u.a.createElement(p.a,{to:"/habilidades",class:"nav-link ",style:m},"Habilidades")),u.a.createElement("li",{class:f},u.a.createElement(p.a,{to:"/portfolio",class:"nav-link ",style:m},"Portfolio")),u.a.createElement("li",{class:f},u.a.createElement(p.a,{to:"/contatos",class:"nav-link ",style:m},"Contatos"))))}}]),t}(s.Component);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b={left:"3%",top:"35%",position:"absolute",textAlign:"left",alignContent:"center",overflow:"visible",fontSize:"26pt",userSelect:"none"},y={color:"white",textAlign:"left",lineHeight:"1",fontWeight:"600",overflow:"hidden",borderRight:".15em solid transparent",whiteSpace:"nowrap",margin:"0 auto",letterSpacing:".15em",width:"0",animationFillMode:"forwards",fontFamily:"Azonix"},v=(d(n={position:"absolute",top:"57%",color:"white",textAlign:"left",lineHeight:"1",fontWeight:"600",overflow:"visible",whiteSpace:"nowrap",margin:"0 auto",letterSpacing:".10em",fontSize:"26pt"},"fontWeight","700"),d(n,"fontFamily","Azonix"),d(n,"left","3%"),n),O=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{id:"titulo-container",style:b,className:""},u.a.createElement("h1",{style:y,className:"digitacao"},"Alan Reis"),u.a.createElement("h1",{style:y,className:"digitacao delays-1_5s"},"  Desenvolvedor"),u.a.createElement("h1",{style:y,className:"digitacao delays-3s"},"Front-end")),u.a.createElement("div",{style:v,className:"text-justify mt-5 animated fadeInUp slower delays-5s"},u.a.createElement("text",{className:"text-justify "},"REACTJS - NODEJS - .NET")))}}]),t}(s.Component),w=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"player"},u.a.createElement("iframe",{width:"426",height:"240",src:"https://www.youtube.com/embed/videoseries?list=PLnNJsI412dO8Q69cvpbl3yXJdjeSpFOtC",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}]),t}(s.Component),g=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"pagina-principal"},u.a.createElement(h,null),u.a.createElement(O,null),u.a.createElement("div",{className:"cover"},u.a.createElement("img",{src:a(44),className:"imagem"})),u.a.createElement(w,null))}}]),t}(s.Component);t.default=g}}]);
//# sourceMappingURL=1.dfe65955.chunk.js.map