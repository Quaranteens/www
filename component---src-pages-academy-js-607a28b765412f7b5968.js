(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{PfTR:function(e,t,a){"use strict";a("KKXr");var n=a("q1tI"),l=a.n(n),r=a("ZCxb"),o=a.n(r),i=a("JI6e"),m=a("QojX"),c=a("zUrK"),u=a("cWnB"),s=a("dDCJ"),d=a("AINe"),p=a("ma3e"),E=a("vOnD").default.div.withConfig({displayName:"SignupSwal__ShareButtons",componentId:"gzrphp-0"})(["& > iframe{margin:5px;}"]),h=function(){return l.a.createElement("div",null,l.a.createElement("p",null,"You're all signed up! Stay tuned for more information, we'll send you an email as soon as we have updates. In the meantime, please spread the word and tell your friends!"),l.a.createElement(E,null,l.a.createElement("iframe",{title:"Facebook Share Button",src:"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fquaranteen.university%2F&layout=button&size=small&appId=601642820272377&width=67&height=20",width:"67",height:"20",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}),l.a.createElement("iframe",{title:"Twitter Tweet Button",id:"twitter-widget-0",scrolling:"no",frameBorder:"0",allowtransparency:"true",allowFullScreen:!0,className:"twitter-share-button twitter-share-button-rendered twitter-tweet-button",style:{position:"static",visibility:"visible",width:"60px",height:"20px"},src:"https://platform.twitter.com/widgets/tweet_button.d0f13be8321eb432fba28cfc1c3351b1.en.html#dnt=false&hashtags=QuaranteenU&id=twitter-widget-0&lang=en&original_referer=http%3A%2F%2Flocalhost%3A8000%2Fregister%2F&size=m&text=I%20just%20signed%20up%20for%20virtual%20commencement%20at%20Quaranteen%20University!%20You%20can%20too!&time=1584765354022&type=share&url=https%3A%2F%2Fquaranteen.university%2F&via=QuaranteenU","data-url":"https://quaranteen.university/"})))},T=a("rsPU"),f=a.n(T),g=a("ebkx"),y=a("ELif");t.a=function(e){var t=e.defaultRole,a=e.formId,r=e.fieldNames,E=e.simpleEmail,T=Object(n.useState)(!1),w=T[0],v=T[1],b=Object(n.useState)(t||""),S=b[0],G=b[1],M=Object(n.useState)(""),A=M[0],C=M[1],I=Object(n.useState)(!1),N=I[0],F=I[1],q=function(e){return C(e.target.value)};return l.a.createElement(m.a,{noValidate:!0,validated:w,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;if(!1===t.checkValidity())e.stopPropagation();else{F(!0);var n="https://docs.google.com/forms/d/e/"+a+"/formResponse?"+Object(g.a)(t),r=new Request(n,{method:"GET",mode:"no-cors"});fetch(r).then((function(e){if(0!==e.status&&200!==e.status)throw new Error("Request failed!");o()({title:"Woohoo!",icon:f.a,content:l.a.createElement(h,null),button:"yuh"}).then((function(){t.reset(),G(""),C(""),F(!1),v(!1)}))})).catch((function(e){o()("Oh no!",e,"error"),console.error(e)}))}v(!0)}},l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"firstName"},l.a.createElement(m.a.Label,null,"First name"),l.a.createElement(m.a.Control,{required:!0,type:"text",placeholder:"First name",name:r.firstName})),l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"lastName"},l.a.createElement(m.a.Label,null,"Last name"),l.a.createElement(m.a.Control,{required:!0,type:"text",placeholder:"Last name",name:r.lastName}))),l.a.createElement(m.a.Row,null,E?l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"email"},l.a.createElement(m.a.Label,null,"Email Address"),l.a.createElement(c.a,null,l.a.createElement(m.a.Control,{type:"email",placeholder:"someone@gmail.com",pattern:y.a,name:r.email,value:A,onChange:q,required:!0}),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter a valid email address."))):l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"email"},l.a.createElement(m.a.Label,null,"Audience"===S?"":"University ","Email Address"),l.a.createElement(c.a,null,l.a.createElement(m.a.Control,{type:"email",placeholder:"Audience"===S?"someone@gmail.com":"someone@school.edu",pattern:"Audience"===S?y.a:y.b,name:r.email,value:A,onChange:q,required:!0}),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please enter a valid"," ","Audience"===S?"":l.a.createElement("strong",null,"university/college")," ","email address."))),l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"timezone"},l.a.createElement(m.a.Label,null,"Timezone"," ",l.a.createElement(s.a,{placement:"right",overlay:l.a.createElement(d.a,null,"We'll match you with a graduation time that doesn't keep you up late.")},l.a.createElement(p.d,null))),l.a.createElement(m.a.Control,{as:"select",name:r.timezone,required:!0},l.a.createElement("option",{value:""},"-- Select a timezone --"),l.a.createElement("option",null,"GMT-11:00 (Midway Islands Time)"),l.a.createElement("option",null,"GMT-10:00 (Hawaii Standard Time)"),l.a.createElement("option",null,"GMT-9:00 (Alaska Standard Time)"),l.a.createElement("option",null,"GMT-8:00 (Pacific Standard Time)"),l.a.createElement("option",null,"GMT-7:00 (Phoenix Standard Time)"),l.a.createElement("option",null,"GMT-7:00 (Mountain Standard Time)"),l.a.createElement("option",null,"GMT-6:00 (Central Standard Time)"),l.a.createElement("option",null,"GMT-5:00 (Eastern Standard Time)"),l.a.createElement("option",null,"GMT-5:00 (Indiana Eastern Standard Time)"),l.a.createElement("option",null,"GMT-4:00 (Puerto Rico and US Virgin Islands Time)"),l.a.createElement("option",null,"GMT-3:30 (Canada Newfoundland Time)"),l.a.createElement("option",null,"GMT-3:00 (Argentina Standard Time)"),l.a.createElement("option",null,"GMT-3:00 (Brazil Eastern Time)"),l.a.createElement("option",null,"GMT-1:00 (Central African Time)"),l.a.createElement("option",null,"GMT+0:00 (Greenwich Mean Time)"),l.a.createElement("option",null,"GMT+1:00 (European Central Time)"),l.a.createElement("option",null,"GMT+2:00 (Eastern European Time)"),l.a.createElement("option",null,"GMT+2:00 (Egypt Standard Time)"),l.a.createElement("option",null,"GMT+3:00 (Eastern African Time)"),l.a.createElement("option",null,"GMT+3:30 (Middle East Time)"),l.a.createElement("option",null,"GMT+4:00 (Near East Time)"),l.a.createElement("option",null,"GMT+5:00 (Pakistan Lahore Time)"),l.a.createElement("option",null,"GMT+5:30 (India Standard Time)"),l.a.createElement("option",null,"GMT+6:00 (Bangladesh Standard Time)"),l.a.createElement("option",null,"GMT+7:00 (Vietnam Standard Time)"),l.a.createElement("option",null,"GMT+8:00 (China Standard Time)"),l.a.createElement("option",null,"GMT+8:00 (Taipei Standard Time)"),l.a.createElement("option",null,"GMT+9:00 (Japan Standard Time)"),l.a.createElement("option",null,"GMT+9:30 (Australia Central Time)"),l.a.createElement("option",null,"GMT+10:00 (Australia Eastern Time)"),l.a.createElement("option",null,"GMT+11:00 (Solomon Standard Time)"),l.a.createElement("option",null,"GMT+12:00 (New Zealand Standard Time)")),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please select a timezone."))),l.a.createElement(m.a.Row,null,l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"role"},l.a.createElement(m.a.Label,null,"How would you like to participate?"),l.a.createElement(m.a.Control,{as:"select",name:r.role,value:S,onChange:function(e){return G(e.target.value)},required:!0},l.a.createElement("option",{value:""},"-- Select a role --"),l.a.createElement("option",{value:"Graduate"},"Graduate"),l.a.createElement("option",{value:"Audience"},"Audience Member")),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"Please select an option.")),l.a.createElement(m.a.Group,{as:i.a,md:"6",controlId:"emaildomain",className:"d-none"},l.a.createElement(m.a.Label,null,"Email Domain"),l.a.createElement(c.a,null,l.a.createElement(m.a.Control,{type:"text",value:A.split("@")[1]||"",name:r.domain,readOnly:!0,required:!0}),l.a.createElement(m.a.Control.Feedback,{type:"invalid"},"You shouldn't be able to see this!")))),l.a.createElement(u.a,{type:"submit",className:"wiggle",disabled:N},"Hype hype"))}},s6NX:function(e,t,a){"use strict";a.r(t);a("rGqo"),a("yt8O"),a("Btvt");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),o=a("7oih"),i=a("EYWl"),m=a("Eavj"),c=a("PfTR");var u=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={countSignedUp:"_",countUniqueSchools:"_"},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var u=n.prototype;return u.componentDidMount=function(){var e=this;fetch("https://sheets.googleapis.com/v4/spreadsheets/1UH9s7xIR0vH0IAwx4IxP7zmo0VDLXn0C8-we_z5qSf8/values/Sheet1!A1:B1?key=AIzaSyA-pLbYH5fK9S3b2nmnog6fc1XkSY-eG6M",{method:"GET"}).then((function(e){return e.json()})).then((function(t){e.setState({countSignedUp:t.values[0][0],countUniqueSchools:t.values[0][1]})}),(function(t){e.setState({countSignedUp:-1,countUniqueSchools:-1})}))},u.render=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{title:"Academy",route:"/academy"}),l.a.createElement(m.a,{date:"05/9/2020",closedContent:l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Registration Closed!"),l.a.createElement("p",{className:"lead"},"Although registration has closed, due to a technical issue with our email system we're opening up the RSVP to all interested students instead of only those who had already registered. You can find the RSVP form ",l.a.createElement(r.Link,{to:"/academygrad"},"here"),"!"))},l.a.createElement("h1",null,"Join Quaranteen University Academy"),l.a.createElement("p",{className:"lead"},"Due to popular demand, we're opening signups for a second graduation ceremony exclusively for high school seniors! Register your interest below! ",l.a.createElement("br",null),l.a.createElement("small",{className:"text-muted"},l.a.createElement("em",null,"Currently, the QUA Class of 2020 is"," ",l.a.createElement("strong",null,this.state.countSignedUp)," strong!")),l.a.createElement("br",null),l.a.createElement("small",{className:"text-muted"},l.a.createElement("em",null,"Registration has been extended until"," ",l.a.createElement("strong",null,"May 8",l.a.createElement("sup",null,"th"))," ","at ",l.a.createElement("strong",null,"midnight"),"!"))),l.a.createElement(c.a,{formId:"1FAIpQLSeNuLMVROpzo3lAYzKNQHp2KFDgYtd6dLARuG848tEAQXKn4w",fieldNames:{firstName:"entry.1141301229",lastName:"entry.2060671913",email:"entry.1967356225",timezone:"entry.1019062185",role:"entry.1969986523",domain:"entry.1218733371"},simpleEmail:!0})))},n}(l.a.Component);t.default=u}}]);
//# sourceMappingURL=component---src-pages-academy-js-607a28b765412f7b5968.js.map