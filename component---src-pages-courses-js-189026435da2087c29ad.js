(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{iwTS:function(e,t,o){"use strict";o.r(t);var a=o("q1tI"),r=o.n(a),n=o("RjKG"),c=o("vrFN");var i=function(e){var t,o;function a(t){var o;return(o=e.call(this,t)||this).iframe=r.a.createRef(),o.state={bamboozled:!1,dogURL:""},o}o=e,(t=a).prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o;var i=a.prototype;return i.componentDidMount=function(){var e=this;this.setState({bamboozled:JSON.parse(window.localStorage.getItem("bamboozled"))}),this.iframe.current&&this.iframe.current.addEventListener("load",(function(){setTimeout((function(){e.setState({bamboozled:!0}),window.localStorage.setItem("bamboozled",JSON.stringify(!0))}),6e3)})),fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()})).then((function(t){return e.setState({dogURL:t.message})})).catch((function(e){return console.error(e)}))},i.render=function(){var e=this.state,t=e.bamboozled,o=e.dogURL;return r.a.createElement(n.a,null,r.a.createElement(c.a,{title:"Courses",route:"courses"}),!t&&r.a.createElement("iframe",{title:"you fool",ref:this.iframe,className:"thunder",width:"560",height:"315",src:"https://www.youtube.com/embed/hB8S6oKjiw8?autoplay=1",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),t&&r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"sorry"},"🤔")," Bamboozled"),r.a.createElement("p",null,"Sorry about that. We don't actually have courses. However, our virtual commencement is 100% real! We hope to see you there! Please accept this randomized dog picture as reparation for our academic deceit."),r.a.createElement("div",{className:"doggo"},r.a.createElement("img",{src:o,alt:"doggo"}))))},a}(r.a.Component);t.default=i}}]);
//# sourceMappingURL=component---src-pages-courses-js-189026435da2087c29ad.js.map