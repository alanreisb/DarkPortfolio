(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{12:function(A,e,t){"use strict";var a=t(0),n=t.n(a),r=t(1),o=t.n(r),l=t(4),c=t.n(l),i=t(11),s=Object.assign||function(A){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(A[a]=t[a])}return A};function d(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?A:e}var m=function(A){return!!(A.metaKey||A.altKey||A.ctrlKey||A.shiftKey)},u=function(A){function e(){var t,a;!function(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=a=d(this,A.call.apply(A,[this].concat(r))),a.handleClick=function(A){if(a.props.onClick&&a.props.onClick(A),!A.defaultPrevented&&0===A.button&&!a.props.target&&!m(A)){A.preventDefault();var e=a.context.router.history,t=a.props,n=t.replace,r=t.to;n?e.replace(r):e.push(r)}},d(a,t)}return function(A,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{constructor:{value:A,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(e,A),e.prototype.render=function(){var A=this.props,e=(A.replace,A.to),t=A.innerRef,a=function(A,e){var t={};for(var a in A)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(A,a)&&(t[a]=A[a]);return t}(A,["replace","to","innerRef"]);c()(this.context.router,"You should not use <Link> outside a <Router>"),c()(void 0!==e,'You must specify the "to" property');var r=this.context.router.history,o="string"===typeof e?Object(i.b)(e,null,null,r.location):e,l=r.createHref(o);return n.a.createElement("a",s({},a,{onClick:this.handleClick,href:l,ref:t}))},e}(n.a.Component);u.propTypes={onClick:o.a.func,target:o.a.string,replace:o.a.bool,to:o.a.oneOfType([o.a.string,o.a.object]).isRequired,innerRef:o.a.oneOfType([o.a.string,o.a.func])},u.defaultProps={replace:!1},u.contextTypes={router:o.a.shape({history:o.a.shape({push:o.a.func.isRequired,replace:o.a.func.isRequired,createHref:o.a.func.isRequired}).isRequired}).isRequired},e.a=u},34:function(A,e,t){"use strict";var a=t(5),n=t(6),r=t(8),o=t(7),l=t(9),c=t(0),i=t.n(c),s=t(12),d=t(35),m=t.n(d),u=t(36),p=t.n(u),E=t(37),g=t.n(E),M=t(38),f=t.n(M),h=t(39),R=t.n(h),b=t(40),j=t.n(b),B=t(41),C=t.n(B),y=t(42),k=t.n(y),Q={top:"50%",position:"absolute",width:"100%",marginTop:"-120px",textAlign:"left"},w={position:"absolute",bottom:"20px",width:"100%",display:"block",padding:"0",listStyle:"none",textAlign:"center",margin:"0"},O={width:"100%",height:"50px",marginBottom:"15px",textAlign:"left"},D={width:"45%",height:"25px",marginBottom:"5px",textAlign:"left",marginLeft:"auto",marginRight:"auto"};function x(A){return i.a.createElement("button",{className:"w-100 h-100 botao-lateral text-center",style:{backgroundImage:"url(".concat(A.background,")"),backgroundSize:"38% 38%",backgroundRepeat:"no-repeat",backgroundPosition:"center 50%",backgroundColor:"transparent",color:"transparent",fontSize:"0.7em",zIndex:"3",margin:"0",padding:"0",cursor:"pointer",outline:"none",userSelect:"none"}},A.children)}var U=function(A){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,A),Object(n.a)(e,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{id:"nav_bar"},i.a.createElement("ul",{id:"menu-lateral-paginas",class:" flex-column",style:Q},i.a.createElement("li",{style:O},i.a.createElement(s.a,{to:"/"},i.a.createElement(x,{background:m.a},"Home "))),i.a.createElement("li",{class:"nav-item active",style:O},i.a.createElement(s.a,{to:"/sobre"},i.a.createElement(x,{background:p.a},"Sobre"))),i.a.createElement("li",{class:"nav-item",style:O},i.a.createElement(s.a,{to:"/habilidades"}," ",i.a.createElement(x,{background:g.a},"Habilidades"))),i.a.createElement("li",{class:"nav-item",style:O},i.a.createElement(s.a,{to:"/contatos"},i.a.createElement(x,{background:f.a},"Contato")))),i.a.createElement("ul",{class:"nav flex-column",style:w},i.a.createElement("li",{class:"nav-item ",style:D},i.a.createElement("a",{href:"https://www.linkedin.com/in/alanreisb",target:"_blank"}," ",i.a.createElement(x,{background:k.a}))),i.a.createElement("li",{class:"nav-item active",style:D},i.a.createElement("a",{href:"https://github.com/alanreisb",target:"_blank"},i.a.createElement(x,{background:C.a}))),i.a.createElement("li",{class:"nav-item",style:D},i.a.createElement("a",{href:"https://www.facebook.com/devalanreis",target:"_blank"}," ",i.a.createElement(x,{background:R.a}))),i.a.createElement("li",{class:"nav-item",style:D},i.a.createElement("a",{href:"tel:(12)98250-1585"},i.a.createElement(x,{background:j.a}))))))}}]),e}(c.Component);e.a=U},35:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAw4QMiFGRCkwAAACrElEQVRo3u2YzW8NURiHf3NTSQX9CoqgC1/Rja+krUrQVpBWSSTETsLKxsLewqos7Cz8AyxEIrFko6hWWwu0taESIb5CSVutfngsejKdubfTO3N75k7IfTd37jnve57nnJl7buZI/3ZQRFGS+GMM8Z3mpPDHmQDgN0eTxCej4MPPKLQmg++hw1yNcTgtq5gLXKQ8Xnw5JXS6Cod8eW0A3I0P302ZJFFKl6tw0JN5D4DPceGfUeG2lvLUtI7T4rbeB+Br7Hij0G16fnEgJoFgvCRR5lFoikFgfrxR6DEZozRaFvDge+fGG4XeWQWLAh58F6XzZi7nuckc4Z0lAd/ss24rrOCFb49cqEA0vFF4aU0gOl6SWEmfFQEP/gklkSpX8cpUTrAv73hJopJ+9xfRkHe8URhwFfbnju/IDS/5bsRIJAU7eEliLa8jK9jDSxLrPAphHkcfftlC8UbhTWgF+3hJYj2DrsLecPjH9vChFeLDSxJVvDWj/6Qu7/isCvHjJYmNvDeUH9TmHS9JbOJDhoIH/yjG2R/hKrUSmz0KNZJodfHtLDFCNzhtGb+TP8AwFRJb+WiIQ+yS6/PA4KuYBKDGqsBZQ6mTJKr5ZL73pTQsSWpXizMqSdqgmSOHLVaXIOX9dAbUpC+SpMqUjuu2rqjZ4GfDsSqQPni/mtSpQZ0vcgZ0Ik5UoEKf6r1Lk1gUBAoCBYGCQA5HzaR0TnsyKqf1UNcd8iCgM7o2Z/spfdOtqIPlcgt2BPZsjz5Y4s/AQgQqHBNak4xA4itQECgI/B8CwVvxSaoDenYH1jRwOaBnW2gjGgkb7skpq0PX1KfzMm/BcEjTKY2516MK+y+YfXRS3Akxkyku+aramA5RdZOM9605X8BYqkVZPMedsbSaxSrOUjPpjIRcp3zGX7S4COvFlzf5AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTE0VDE1OjUwOjMzKzAxOjAw0n+YXgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0xNFQxNTo1MDozMyswMTowMKMiIOIAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},36:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAw0XJBr8LcyoAAAE4ElEQVRo3r2ZbWiVZRjH/4+be8/NMdE5h7LJWmULZlY0pBAZFOWXBoVB9WEVIg0SlV4gqEVQEOVLIFFRUC0WljpE7eWDRasol7oZudCWbDq3Nm3vL3p+fTj3eXbO2Xm5n+05XefDDc/9v6///76fc67ruq/jaA5GrmpVq2qtUpGmNaAundDX+sqZnIs3r+RFNDJALBvkZRanmr6OfhJZL5u8eXQ80b+oRncFOqs/1KcMLVGVSmdA2uG8mZrdN7j77Gc7KyLmKmhkyJ1/KhX065gy7pvJj4ko5rBBjHOb3/QOPxvn77AgLmohTQZ13G8Bm4zjNhYmxGVx1iA3+ivgAACB5EfLvUZAk5/0ueb9H7VCdwAwRqYNeoENSHcqePD7rdDBvWdrrX8C1pnxeyv0t1GrfBAQDDMT6rRCn49Y5YuA5ZKkPidgA3b6NCxJKvFPQKEkqd8KK0ndYat8EbBIkjRkLSB4Ann+CQj+BtKsBaSFrfJFwDVJUo61gCBy2j8BQ3MSYPXK7AT0SZIKrAUEvzNWX1o7AT2SpGJybcAUKViYXfRPwBlJkqMbrdCVEat8EdBhxvVW6BCq3QptY2QyAsAhK/Q3AAyQ7psAiYMATLA0KbLEpO5P7TzbvQLpoCQpU/VJkVtNAGrxcf8S2fSZenhZQlwpVwHoJsNXARIvmVLrKHHvEjgcMajtPtNLFHDJON8Vuy4mjX0G8TdWicirhE0EDEELq2fNVnLMzF6nNgX0ksRz7t1nki+op4YyyqnhaQ6615YAz6aIXpLYwvWEl9NrPJlCekliA6fj0p+gJsX0kkQaT3CMyQjqcQ7zKLZRJcw8XM8pVoOm9bozKknkq0qlWiZ0Sd066YxIEjnaqXTtdXr93nU6z3AFgD0JcXtMHtiCfQGXlNzhAc64h/1ZQuznLu409/mz882cCnvXXdycEH8rF8LQbTw8j5NgBS9wPszdJG8kj3As4i03JgD8yU6We6Uu43laI37xAb6cHf3irq+kJSo6fMdOVtotLuVjpiOWT/MJVZ7Pby3NUUFrmo9Idl3jDjflBG2Q3ZR5JXe9VbDPpOeQ9ZDo0s5yk/UBrtBEnV2TIaGIbDbTzL+u394EFYVpxMA56nyt6EQGj9BlvMdrc3CLSbfnWOInuet/qZEQ4KbYgFeNwvtTQS9JPGgYXok9HewEXsZT+9aTAMd0mltjTS5gFIADqaKXJA4BMDyzyZkEWmjutKdSKUAnJUl5ctv6MwJCjwZSKmAwii1MwCIzXv1fBBTMFhAyq07YnI2oMUxA6P8ev280kRaKrO6/SzMCxsxo1Vybs4W8j88WcNEci1V/c84W9E7M7okJlBPsJSUiKGE3YwBciA34IKz2eY/bfSWv5l0mXP+xeweU83tE7v6NHayaN3Up2/g1wm8nlfHA6WylNwIc4BdeYwNZnokzuIdGfoqqii7TENk5mJV4yNLj2qaKqMcTaleb2tShLvXG65rjaJlWao2qVa0qZUdNd+ptfeiMRz504jhar3o9FKc3OqVudWtMwxrVlKQM5SpPOSpRqWJXUOPar/d13EFejGw2souLzMf+oZnHuCE+S9LcT5rWqEZ36W6Ve1D/l1r1o35Qu3M9MdDL5XSxVqtc5SpXiQqVoxzlK0/SiIY0pjENqkfngh/HOqf+B3o2dC/uGbd7AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAzLTEzVDIyOjM2OjI2KzAxOjAwVa3WlQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMy0xM1QyMjozNjoyNiswMTowMCTwbikAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},37:function(A,e){A.exports="data:image/png;base64,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"},38:function(A,e){A.exports="data:image/png;base64,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"},39:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAw8CKA1jr69zAAAAmklEQVRIx2NkwAO2sX9OZ4z6r8PADeGHM2KqYcGtfZX0560M+v8Z8AMm3Lb/38qgz0AQ4DTgczox2vEYwBBNjHZ8BmghsbcyyoQzYgtCfIHIg6QoI/gp6S5AAsFPyPECkWDgDcAI2ZX4k97ZcBOKXMA4izIvfPm1gjIDlsZ8osgAxtlYxHApRg7McJyqBkM6GDVg1IBRA6hkAACmuBu0tPSd+QAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0xNVQwMTo0MDoxMyswMTowMKIKWpIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMTVUMDE6NDA6MTMrMDE6MDDTV+IuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},40:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjAw8CJw59PuIGAAACmUlEQVQ4y5WUTUhUURTHf/c+NS1MxSzUMiqwRqQWrtQIsg/CFlbqm1EMMgIXWUq6a9HLFiFkVkTgygid9JHJLLJW1UbbRAuFjD6ssRKVyMwoP99tMR+Oo86rszrnz/mdj3fvu4JlZmoqXxWJPLaTBEwwRK/l0fr0hfBMEQbGqfNcYOPykozT9PtW5fSqsFmimtnM6vZZ1boeLoZawFEiy+A2CUSyBKGXxmU/fa6WwIYcd1MdvsQKJtibkpnd7cOlT3NcwWULBqzMYYTsbJYoM9h1lhHSiY6IK1Gsd4MEM05dD6DisUh1buOY3fDqRmssSFDn2OIXxyjTv4OzhwEbPGNtNUhToy4o3dUn/d4d283rDSkX8havhOgPeLHt/LSBNzlypSxajK3gURVN8c6utSqS5IfE2QGno4ocO1jmi85xUoK1vHKHvgBdqfPDRNluPSZDL6TYqk4DDIzRZ4tComR+idDYlQqGFVXJuD0t+bYkTpq/Z2pQPGQd5ZcN+0PyNUw6aDUBlL209jPs1yYpEKW8Cst8L+kNLyhqOmp9eMwedZM/IM44n+kPnDkcCc1WfaKzkEfLBlJcdF71ue4NMsMV7GlIx2zgN7byRUt04kfSV9iobe5sxbJbZmYor98dHUyXVXO0rPg5KqIHzHJDho1UEXSvGZYAT/z061VfrreiVWsr/gLQs2aqjgb/0J/idxXOCIAOl7gf4UgUg/QLTRWQHFDUcZcH3yWU61Sk8xRkkbUko8HlAf8bpkr4D1Nu/bLPk9CeRMG/kzS+OSn8Y0RB9AkVA8AYTzhEWgTSS41v4GBndOWl2do3mOY8NZMpLjGyIjlK/fqdoSgIcO8u7w+VTM06LA6IXJVBMhoT4oPVKzyDLwwrvN5f7l3PmHruPkMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDMtMTVUMDE6Mzk6MTQrMDE6MDCyg1pVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAzLTE1VDAxOjM5OjE0KzAxOjAww97i6QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},41:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAw8CJAcvzwlhAAAC/klEQVRIx42VW2hUVxSGv7WdOCaT1Ig2xd7Q5iFe0laLkOmFlvShlgSpop7BSwWj1ArmqbZ0LC1TqDQEUim1lEjTh0CanIm0pagtNNQGRYNGKfoQH8SAGGK8JLXFWzIzqw8zOWdPMmZmv5z1r73+f+/1L9hHyLnaQ3NeYYUu0nKQfxjk75JTa+7lqpTpKbdW9mg9wSnpBxyRQ84feQS6XpQm3ubRqy/VuKnfThg/VHGjcn5GOoRNn/tRzhscC/53iG0UtrqkwbmfDmelP61F5lfWF0iHapZXd/+lVgvl37AagGRecrpi7dLPLQ/i69iV6SgqJWygL7eBsrEkxL4M+sSty3jQHgpe4umMQI1zBlTczfKC9uugjIHOM8/pKrngdIhCZ42ZlB+Q551kAILvTdKBUQBROuiwzu4nDpH0EWNedmlqO98bFRqtUT6ZzwKz0Brhxyqm+1UW+wbJRF4Txy2jK7vDRt+yNr91TufjO6f1O+vGqw1hHwa+zns+YOyqsKHKA0PrrxQi4Fxm2ANVhvkeuFUIHYAbXrTAMNvrp6xggce8KGjw5ioVMVMIO2ao8MCo0ZseKF2yohCBqpcI+c0YGfC3JFKIgDgWGDDSa8HG+OJ89K5K2eMj7TWmx9ot1t87n5mJHn+W3yj2+fQIuL28DpyRIl0J3JH9tDmj08k/Lgjs1Kg1ATgeedOAHgSQ4eLXZCMJ5mqzjrin3CZ/JjHjNsXPzrquX2bR0YNgIHKYk6Dv3Dv2+C9EAQjwslyLpTyBlF7VVZPPn2fmicjPYEA0+T7jwBsj7zotfMYdlIvJn+xic2RaR+OJ3aLeq+w20AZ6JbFy678xA/7pGfNm68MpAjsiP4D1rLv72Qf8KducoekGHg/cyH4pvoh8mmnEz7kf0IwhyTm5rU9U1NQm/L3WovJxD6TkQ+crz4msi9ZrK0+l47I5ddalrRaGZJdz1HLHFnCOTizjAHcBRrKkS9PoLgcmltn0nH/njnmBBhZG9mZnu1pkONG2ZWxq9f+nF+iVU6RONwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0wMy0xNVQwMTozNjowNyswMTowML7KG9sAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMDMtMTVUMDE6MzY6MDcrMDE6MDDPl6NnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},42:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjAw8CJSyaaMFgAAABFklEQVRIx+2SvUoDQRSFv5kkaGWwM52dbEoLQWwUC1G3CcgO6APY2YoWakqbWKVKLe6ujRDWn8I6kgcw0edYsDJjFyaShLtbieR25xzuN5d7R0HoqwuqvKt6kJC5VOir9lDVzENWgNaXjjrLPoG2K47ycgDUh6N6OQBcOaqeAxAkyqdLSpd985gd8A9KRdaVBe+gD+M8q+JdDtlgiS/63KtWkAJo2TtxNX4j4Yhl5llknYb9vNsUA6Id22Htl1nRz9GWCPC9TZuFMcEct3FZMsENpQlJxR5LAKUpWU24ROBlsNor2D3SEdcripoHnJtrAJ7CU9V0krIMcGKGTfp15JNIrmAbpjk5FQCKrWmpfIkzwAzwpwE/x8BAKfrdDjgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDMtMTVUMDE6Mzc6NDQrMDE6MDDkqmSCAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAzLTE1VDAxOjM3OjQ0KzAxOjAwlffcPgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},43:function(A,e,t){"use strict";var a=t(5),n=t(6),r=t(8),o=t(7),l=t(9),c=t(0),i=t.n(c),s=function(A){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,A),Object(n.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"texto-principal fonte-secundaria"},i.a.createElement("h1",{className:"display-5 mb-4"},this.props.titulo),i.a.createElement("p",{className:"text-justify "},this.props.children))}}]),e}(c.Component);e.a=s},57:function(A,e,t){"use strict";t.r(e);var a=t(5),n=t(6),r=t(8),o=t(7),l=t(9),c=t(0),i=t.n(c),s=t(34),d=t(43),m=function(A){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,A),Object(n.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:" piramide-container"},i.a.createElement("section",{className:"piramide"},i.a.createElement("div",{className:"side left"}),i.a.createElement("div",{className:"side front"}),i.a.createElement("div",{className:"side right"}),i.a.createElement("div",{className:"side back"})))}}]),e}(c.Component),u=function(A){function e(){return Object(a.a)(this,e),Object(r.a)(this,Object(o.a)(e).apply(this,arguments))}return Object(l.a)(e,A),Object(n.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"pagina-principal container-fluid"},i.a.createElement(s.a,null),i.a.createElement(d.a,{titulo:"Sobre mim"},"Sou um profissional apaixonado por desafios que nunca desiste de algo que come\xe7a. Trabalhava na \xe1rea administrativa anteriormente. Por\xe9m, sempre quis me aproximar da \xe1rea de tecnologia. Desenvolvia pequenas aplica\xe7\xf5es VBA para automa\xe7\xe3o de processos nas empresas em que trabalhei at\xe9 que finalmente resolvi mudar cursando An\xe1lise e Desenvolvimento de Sistemas.",i.a.createElement("br",null),i.a.createElement("br",null),"Busco aprender toda a t\xe9cnica dispon\xedvel em grande parte do meu tempo livre. Costumo ser perfeccionista com detalhes, ao mesmo tempo procuro ser din\xe2mico ao executar uma tarefa.",i.a.createElement("br",null),i.a.createElement("br",null),"Atualmente estou \xe0 procura de um est\xe1gio onde possa empregar todos os conhecimentos e habilidades adquiridas."),i.a.createElement(m,null))}}]),e}(c.Component);e.default=u}}]);
//# sourceMappingURL=2.b27b55dc.chunk.js.map