(this.webpackJsonpmeme_generator=this.webpackJsonpmeme_generator||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(4),o=n.n(c),i=(n(21),n(22),n(5)),r=n(6),l=n(8),u=n(7),h=n(0),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onTextChanged=function(e){var t=e.target.value,n=[];if(t.length>0){var s=new RegExp("^".concat(t),"i");n=a.item.sort().filter((function(e){return s.test(e)}))}a.setState((function(){return{suggestions:n,text:t}}))},a.item=["Channel","YouTube","YouTuber","YouTube Channel","Blogger","Bollywood","Vlogger","Vechiles","Facebook","Freelancer","Facebook Page","Designer","Developer","Web Designer","Web Developer","Login Form in HTML & CSS","How to learn HTML & CSS","How to learn JavaScript","How to became Freelancer","How to became Web Designer","How to start Gaming Channel","How to start YouTube Channel","What does HTML stands for?","What does CSS stands for?"],a.state={suggestions:[],text:""},a}return Object(r.a)(n,[{key:"suggestionSelected",value:function(e){this.setState((function(){return{text:e,suggestions:[]}}))}},{key:"renderSuggestions",value:function(){var e=this,t=this.state.suggestions;return 0===t.length?null:Object(h.jsx)("ul",{children:t.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.suggestionSelected(t)},className:"suggestions",children:t})}))})}},{key:"render",value:function(){var e=this.state.text;return Object(h.jsx)("div",{className:"wrapper",children:Object(h.jsxs)("div",{className:"search-input",children:[Object(h.jsx)("a",{href:"",target:"_blank",hidden:!0}),Object(h.jsx)("input",{type:"text",placeholder:"Search Meme..",value:e,onChange:this.onTextChanged}),Object(h.jsx)("div",{className:"autocom-box"}),Object(h.jsx)("div",{className:"icon",children:Object(h.jsx)("i",{className:"fa fa-search"})}),this.renderSuggestions()]})})}}]),n}(s.a.Component),j=n(15),b=n(2);n.p;var g=function(e){if(console.log(e.isLoad),console.log(e),!1===e.isLoad){var t=e.memes.map((function(t){return Object(h.jsxs)("div",{className:"card 1",children:[Object(h.jsxs)("div",{className:"card_image",children:[" ",Object(h.jsx)("img",{src:t.url,onClick:e.handler})," "]}),Object(h.jsx)("div",{className:"card_title title-white",children:Object(h.jsx)("p",{children:t.name})})]})}));return Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:"cards-list",children:t})})}return Object(h.jsx)("h1",{children:"loading"})},m=(n(24),n(16)),x=n.n(m),v=n(11),O=n.n(v),f=(n(32),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).Change=function(t){e.setState({activeImage:t.target.src}),window.scrollTo(0,0)},e.btn=function(e){console.log("button clicked"),e.preventDefault(),console.log(document.querySelector(".Parent")),document.querySelector(".Parent")?x.a.toBlob(document.querySelector(".Parent")).then((function(e){window.saveAs(e,"my-node.png")})):console.log("sfvf")},e.state={topText:"",bottomText:"",activeImage:"https://i.imgflip.com/30b1gx.jpg",allMemes:[],loading:!0},e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.btn=e.btn.bind(Object(b.a)(e)),e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;console.log(n[0]),e.setState({allMemes:n,loading:!1}),console.log(e.state.allMemes)}))}},{key:"componentDidUpdate",value:function(){this.state.allMemes[0].url}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(j.a)({},n,a))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"text",name:"topText",value:this.state.topText,onChange:this.handleChange,placeholder:"Enter First Line",className:"First"}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"text",name:"bottomText",value:this.state.bottomText,onChange:this.handleChange,placeholder:"Enter Second Line",className:"Second"}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{class:"sub-main",children:Object(h.jsx)("button",{id:"foo",onClick:this.btn,className:"button-two",children:Object(h.jsx)("span",{children:"Download"})})})]}),Object(h.jsxs)("div",{className:"Parent",id:"#capture",children:[Object(h.jsx)("img",{src:this.state.activeImage,className:"logo",alt:"wec"}),Object(h.jsx)(O.a,{children:Object(h.jsx)("h2",{className:"top box draggable",children:this.state.topText})}),Object(h.jsx)(O.a,{children:Object(h.jsx)("h2",{className:"bottom box",children:this.state.bottomText})})]})]}),Object(h.jsx)(g,{memes:this.state.allMemes,isLoad:this.state.loading,active:this.state.activeImage,handler:this.Change})]})}}]),n}(s.a.Component));var p=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{}),Object(h.jsx)(f,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.8ebd940a.chunk.js.map