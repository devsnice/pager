!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.Pager=t(require("react")):e.Pager=t(e.react)}(this,function(e){return function(e){function t(n){if(a[n])return a[n].exports;var r=a[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){for(var a=[],n=e;n<t;n++)a.push(n);return a}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(1),c=n(u),d=0,p=1,h={first:"First",prev:"«",prevSet:"...",nextSet:"...",next:"»",last:"Last"},f=function(e){function t(e){r(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleFirstPage=a.handleFirstPage.bind(a),a.handlePreviousPage=a.handlePreviousPage.bind(a),a.handleNextPage=a.handleNextPage.bind(a),a.handleLastPage=a.handleLastPage.bind(a),a.handleMorePrevPages=a.handleMorePrevPages.bind(a),a.handleMoreNextPages=a.handleMoreNextPages.bind(a),a.handlePageChanged=a.handlePageChanged.bind(a),a}return s(t,e),o(t,[{key:"getTitles",value:function(e){return this.props.titles[e]||h[e]}},{key:"calcBlocks",value:function(){var e=this.props,t=e.total,a=e.visiblePages,n=e.current+p,r=Math.ceil(t/a),i=Math.ceil(n/a)-p;return{total:r,current:i,size:a}}},{key:"isPrevDisabled",value:function(){return this.props.current<=d}},{key:"isNextDisabled",value:function(){return this.props.current>=this.props.total-p}},{key:"isPrevMoreHidden",value:function(){var e=this.calcBlocks();return e.total===p||e.current===d}},{key:"isNextMoreHidden",value:function(){var e=this.calcBlocks();return e.total===p||e.current===e.total-p}},{key:"visibleRange",value:function(){var e=this.calcBlocks(),t=e.current*e.size,a=this.props.total-t,n=t+(a>e.size?e.size:a);return[t+p,n+p]}},{key:"handleFirstPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(d)}},{key:"handlePreviousPage",value:function(){this.isPrevDisabled()||this.handlePageChanged(this.props.current-p)}},{key:"handleNextPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.current+p)}},{key:"handleLastPage",value:function(){this.isNextDisabled()||this.handlePageChanged(this.props.total-p)}},{key:"handleMorePrevPages",value:function(){var e=this.calcBlocks();this.handlePageChanged(e.current*e.size-p)}},{key:"handleMoreNextPages",value:function(){var e=this.calcBlocks();this.handlePageChanged((e.current+p)*e.size)}},{key:"handlePageChanged",value:function(e){var t=this.props.onPageChanged;t&&t(e)}},{key:"renderPages",value:function(e){var t=this;return l(e[0],e[1]).map(function(e,a){var n=e-p,r=t.handlePageChanged.bind(t,n),i=t.props.current===n;return c.default.createElement(g,{key:a,index:a,isActive:i,className:"btn-numbered-page",onClick:r},e)})}},{key:"render",value:function(){var e=this.getTitles.bind(this),t="pagination";return this.props.className&&(t+=" "+this.props.className),c.default.createElement("nav",null,c.default.createElement("ul",{className:t},c.default.createElement(g,{className:"btn-first-page",key:"btn-first-page",isDisabled:this.isPrevDisabled(),onClick:this.handleFirstPage},e("first")),c.default.createElement(g,{className:"btn-prev-page",key:"btn-prev-page",isDisabled:this.isPrevDisabled(),onClick:this.handlePreviousPage},e("prev")),c.default.createElement(g,{className:"btn-prev-more",key:"btn-prev-more",isHidden:this.isPrevMoreHidden(),onClick:this.handleMorePrevPages},e("prevSet")),this.renderPages(this.visibleRange()),c.default.createElement(g,{className:"btn-next-more",key:"btn-next-more",isHidden:this.isNextMoreHidden(),onClick:this.handleMoreNextPages},e("nextSet")),c.default.createElement(g,{className:"btn-next-page",key:"btn-next-page",isDisabled:this.isNextDisabled(),onClick:this.handleNextPage},e("next")),c.default.createElement(g,{className:"btn-last-page",key:"btn-last-page",isDisabled:this.isNextDisabled(),onClick:this.handleLastPage},e("last"))))}}]),t}(c.default.Component);f.propTypes={current:c.default.PropTypes.number.isRequired,total:c.default.PropTypes.number.isRequired,visiblePages:c.default.PropTypes.number.isRequired,titles:c.default.PropTypes.object,onPageChanged:c.default.PropTypes.func},f.defaultProps={titles:h};var g=function(e){if(e.isHidden)return null;var t=e.className?e.className+" ":"",a=""+t+(e.isActive?" active":"")+(e.isDisabled?" disabled":"");return c.default.createElement("li",{key:e.index,className:a},c.default.createElement("a",{onClick:e.onClick},e.children))};g.propTypes={isHidden:c.default.PropTypes.bool,isActive:c.default.PropTypes.bool,isDisabled:c.default.PropTypes.bool,className:c.default.PropTypes.string,onClick:c.default.PropTypes.func},t.default=f},function(t,a){t.exports=e}])});