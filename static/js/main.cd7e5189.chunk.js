(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,r){e.exports=r(17)},16:function(e,t,r){},17:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(7),u=r.n(s),c=(r(16),r(8)),i=r(1),l=r(2),o=r(4),m=r(3),h=r(5);var d=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(n.a.Component),b=r(9);function f(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(b.a)(t[r],3),n=a[0],s=a[1],u=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[u])return e[n]}return null}var p=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();f(r)||r[e]||(r[e]=this.currentMark(),this.setState({history:[].concat(Object(c.a)(t),[{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"currentMark",value:function(){return this.state.xIsNext?"X":"O"}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,a=r[this.state.stepNumber],s=f(a.squares);e=s?"Winner: ".concat(s):"Next player: ".concat(this.currentMark());var u=r.map(function(e,r){var a=r?"Go to move #".concat(r):"Go to game start";return n.a.createElement("li",{key:r},n.a.createElement("button",{onClick:function(){return t.jumpTo(r)}},a))});return n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(v,{squares:a.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,e),n.a.createElement("ol",null,u)))}}]),t}(n.a.Component);u.a.render(n.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cd7e5189.chunk.js.map