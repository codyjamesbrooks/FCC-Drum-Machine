(this.webpackJsonpdrummachine=this.webpackJsonpdrummachine||[]).push([[0],{19:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);var c=s(4),a=s(5),n=s(8),i=s(7),d=s(6),o=s(0),r=s.n(o),m=s(3),u=s.n(m),l=(s(19),s(1)),p=function(e){Object(i.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){var e=this.props.volume/100,t=function(t){var s=t.target.id,c=document.getElementById(s).firstChild;document.getElementById(s).firstChild.volume=e,c.play()};return Object(l.jsxs)("div",{id:"drum-buttons",children:[Object(l.jsxs)("button",{id:"Heater",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",className:"clip",id:"Q"}),"Q"]}),Object(l.jsxs)("button",{id:"Disc-Oh",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",className:"clip",id:"W"}),"W"]}),Object(l.jsxs)("button",{id:"Kick-Hat",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",className:"clip",id:"E"}),"E"]}),Object(l.jsxs)("button",{id:"Cev",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",className:"clip",id:"A"}),"A"]}),Object(l.jsxs)("button",{id:"Chord",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",className:"clip",id:"S"}),"S"]}),Object(l.jsxs)("button",{id:"Dry-Oh",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",className:"clip",id:"D"}),"D"]}),Object(l.jsxs)("button",{id:"Punch-Kick",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",className:"clip",id:"Z"}),"Z"]}),Object(l.jsxs)("button",{id:"Side-Stick",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",className:"clip",id:"X"}),"X"]}),Object(l.jsxs)("button",{id:"Break-Snare",className:"drum-pad",onClick:t,children:[Object(l.jsx)("audio",{src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",className:"clip",id:"C"}),"C"]})]})}}]),s}(r.a.Component),j=s(14),h=(s(24),function(e){Object(i.a)(s,e);var t=Object(d.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(l.jsxs)("div",{id:"drum-controls",children:[Object(l.jsx)("h4",{id:"display-label",children:"Drum Sound"}),Object(l.jsx)("label",{id:"display",children:this.props.name}),Object(l.jsxs)("label",{id:"volume-label",children:["Volume: ",this.props.volume," %"]}),Object(l.jsx)(j.a,{min:0,max:100,value:this.props.volume,onChange:this.props.sliderChange,id:"volume-slider"})]})}}]),s}(r.a.Component)),b={81:"Q",87:"W",69:"E",65:"A",83:"S",68:"D",90:"Z",88:"X",67:"C"},O=function(e){Object(i.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).sliderChange=function(e){a.setState({volume:e})},a.onKeyPress=a.onKeyPress.bind(Object(n.a)(a)),a.onButton=a.onButton.bind(Object(n.a)(a)),a.sliderChange=a.sliderChange.bind(Object(n.a)(a)),a.state={name:"Drum Sound",volume:100},a}return Object(a.a)(s,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyPress),document.addEventListener("click",this.onButton)}},{key:"onKeyPress",value:function(e){if(b.hasOwnProperty(e.keyCode)){var t=document.getElementById(b[e.keyCode]).parentElement;t.click(),t.focus()}}},{key:"onButton",value:function(e){"submit"===e.target.type&&this.setState({name:e.target.id})}},{key:"render",value:function(){return Object(l.jsxs)("div",{id:"drum-machine",children:[Object(l.jsx)(p,{volume:this.state.volume}),Object(l.jsx)(h,{name:this.state.name,volume:this.state.volume,sliderChange:this.sliderChange})]})}}]),s}(r.a.Component);u.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.3260d515.chunk.js.map