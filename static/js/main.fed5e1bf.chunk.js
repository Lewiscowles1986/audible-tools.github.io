(this["webpackJsonpmaterial-pg-01"]=this["webpackJsonpmaterial-pg-01"]||[]).push([[0],{102:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(10),o=a.n(c);a(102),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(65),s=a(47),l=a.n(s),u=a(69),d=a(23),p=a(24),m=a(29),h=a(28),j=a(6),b=a(160),f=a(154),x=a(153),v=a(155),O=a(151),y=a(157),g=a(81),C=a.n(g),k=a(85),S=a(152),w=a(83),B=a(114),F=a(64),A=a.n(F),N=a(82),I=a.n(N),D=a(38),T=a(5),z=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e))._handleUpload=n._handleUpload.bind(Object(D.a)(n)),n}return Object(p.a)(a,[{key:"_handleUpload",value:function(e){var t=e.target.files[0];this.props.onChange(t),this.fileInput.value=null}},{key:"render",value:function(){var e=this;return Object(T.jsxs)("div",{style:this.props.style,children:[Object(T.jsx)("input",{accept:this.props.accept,type:"file",style:{display:"none"},onChange:this._handleUpload,ref:function(t){return e.fileInput=t}}),i.a.cloneElement(this.props.children,{onClick:function(){return e.fileInput.click()}})]})}}]),a}(i.a.Component),_=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e))._validate=n._validate.bind(Object(D.a)(n)),n}return Object(p.a)(a,[{key:"_validate",value:function(e){var t=this.props,a=t.onError,n=t.onChange,i=t.maxSize,c=t.extensions;if(e){if(c){var o=e.name.split(".").pop().toLowerCase();if(!c.map((function(e){return e.toLowerCase()})).includes(o))return void a("Must upload a file of type: ".concat(c.join(" or ")))}var r=1e6*i;e.size>r?a("File size must be less than ".concat(i," MB.")):n(e)}else a("Failed to upload a file.")}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.style,n=this.props.extensions.map((function(e){return".".concat(e)})).join(",");return Object(T.jsx)(z,{onChange:this._validate,style:a,accept:n,children:t})}}]),a}(i.a.Component);_.defaultProps={maxSize:2};var R=_,W=a(54),U=a(159),M=a(149),q=a(150),E=a(80),L=a.n(E),P=a(158),V=a(162),H=a(147),J=a(143),K=a(146);function X(e){var t=e.outputFormat,a=e.setOutputFormat,n=e.style;return Object(T.jsxs)(J.a,{component:"fieldset",style:n,children:[Object(T.jsx)(K.a,{component:"legend",children:"Output Format"}),Object(T.jsxs)(V.a,{"aria-label":"format",name:"format",value:t,onChange:function(e){a(e.target.value)},children:[Object(T.jsx)(H.a,{value:"m4b",control:Object(T.jsx)(P.a,{}),label:"AAC m4b"}),Object(T.jsx)(H.a,{value:"flac",control:Object(T.jsx)(P.a,{}),label:"FLAC hq"}),Object(T.jsx)(H.a,{value:"mp3",control:Object(T.jsx)(P.a,{}),label:"Lame mp3"})]})]})}function G(e){var t=e.operatingSystem,a=e.setOperatingSystem,n=e.style;return Object(T.jsxs)(J.a,{component:"fieldset",style:n,children:[Object(T.jsx)(K.a,{component:"legend",children:"Operating System"}),Object(T.jsxs)(V.a,{"aria-label":"format",name:"format",value:t,onChange:function(e){return a(e.target.value)},children:[Object(T.jsx)(H.a,{value:"win",control:Object(T.jsx)(P.a,{}),label:"Windows"}),Object(T.jsx)(H.a,{value:"linux",control:Object(T.jsx)(P.a,{}),label:"Linux"}),Object(T.jsx)(H.a,{value:"osx",control:Object(T.jsx)(P.a,{}),label:"Mac"})]})]})}var Y=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(j.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(v.a),n.setExpanded=function(e){return n.setState({expanded:e})},n.handleChange=function(e){return function(t,a){n.setExpanded(!!a&&e)}},n.getCommand=function(){var e,t=n.state,a=t.outputFormat,i=t.operatingSystem,c=n.props,o=c.fileName,r=c.activationBytes;r=null!==(e=r)&&void 0!==e?e:"00000000";var s=o.split(".")[0];s="input"==s?"output":s;var l=[{os:"win",cmd:"ffmpeg.exe",discriminator:'"'},{os:"linux",cmd:"./ffmpeg",discriminator:"'"},{os:"osx",cmd:"./ffmpeg",discriminator:"'"}].filter((function(e){return e.os==i}))[0],u=[{format:"m4b",codec:"copy"},{format:"flac",codec:"flac"},{format:"mp3",codec:"libmp3lame"}].filter((function(e){return e.format==a}))[0].codec,d=l.cmd,p=l.discriminator;return"".concat(d," -y")+" -activation_bytes ".concat(r," -i  ").concat(p,".\\").concat(o).concat(p)+" -map_metadata 0 -id3v2_version 3"+" -codec:a ".concat(u)+" -vn ".concat(p).concat(s,".").concat(a).concat(p)},n.state={expanded:"",outputFormat:"m4b",operatingSystem:"win"},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.expanded,i=a.outputFormat,c=a.operatingSystem;return Object(T.jsx)("div",{className:t.root,children:Object(T.jsxs)(U.a,{expanded:"panel2"===n,onChange:this.handleChange("panel2"),children:[Object(T.jsxs)(M.a,{expandIcon:Object(T.jsx)(L.a,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[Object(T.jsx)(k.a,{className:t.heading,children:"Command"}),Object(T.jsx)(k.a,{className:t.secondaryHeading,children:"Generate ffmpeg command"})]}),Object(T.jsxs)(q.a,{style:{display:"block"},children:[Object(T.jsx)(X,{outputFormat:i,setOutputFormat:function(t){return e.setState({outputFormat:t})}}),Object(T.jsx)(G,{operatingSystem:c,setOperatingSystem:function(t){return e.setState({operatingSystem:t})},style:{paddingLeft:"20px"}}),Object(T.jsx)(this.DarkerDisabledTextField,{value:this.getCommand(),disabled:!0,multiline:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:"cmd",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,fontSize:5,InputProps:{readOnly:!0,endAdornment:Object(T.jsx)(W.CopyToClipboard,{text:this.getCommand(),children:Object(T.jsx)(B.a,{children:Object(T.jsx)(A.a,{})})})}})]})]})})}}]),a}(i.a.Component),$=Object(j.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}))(Y),Q=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).DarkerDisabledTextField=Object(j.a)({root:{marginRight:8,"& .MuiInputBase-root.Mui-disabled":{color:"rgba(0, 0, 0, 0.6)"}}})(v.a),n.Copyright=function(){return Object(T.jsxs)(k.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(T.jsx)(O.a,{color:"inherit",href:"https://audible-tools.github.io/",children:"audible-tools"})," ",(new Date).getFullYear(),"."]})},n.setChecksum=function(e){e.length>40||n.setState({checksum:e})},n.isChecksumValid=function(){var e=n.state.checksum;return RegExp("[a-f0-9]{40}").test(e)},n.isInputInvalid=function(){var e=n.state.checksum;return!(!e||""===e)&&!n.isChecksumValid()},n.requestActivationBytes=function(){var e=n.state.checksum;fetch("https://aax.api.j-kit.me/api/v2/activation/"+e).then((function(e){return e.json()})).then((function(e){var t=e.success;e.activationBytes;!0===t?n.setState({activationBytes:e.activationBytes}):n.setState({activationBytes:"UNKNOWN"})}),(function(e){n.setState({activationBytes:"UNKNOWN"})}))},n.acceptFiles=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t[0],e.next=3,n.acceptFile(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.acceptFile=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({fileName:t.name}),a=t.slice(653,673),e.t0=n,e.next=5,a.arrayBuffer();case 5:e.t1=e.sent,i=e.t0.buf2hex.call(e.t0,e.t1),n.setChecksum(i),n.requestActivationBytes();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={checksum:"",fileName:"input.aax"},n}return Object(p.a)(a,[{key:"buf2hex",value:function(e){return Array.prototype.map.call(new Uint8Array(e),(function(e){return("00"+e.toString(16)).slice(-2)})).join("")}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.checksum,i=a.activationBytes,c=a.fileName;return Object(T.jsxs)(S.a,{component:"main",maxWidth:"md",children:[Object(T.jsx)(x.a,{}),Object(T.jsxs)("div",{className:t.paper,children:[Object(T.jsx)(b.a,{className:t.avatar,children:Object(T.jsx)(C.a,{})}),Object(T.jsx)(k.a,{component:"h1",variant:"h5",children:"AAX Checksum Resolver"}),Object(T.jsxs)("form",{className:t.form,noValidate:!0,children:[Object(T.jsx)(w.a,{noClick:!0,onDrop:function(t){console.log(t),e.acceptFiles(t)},children:function(t){var a=t.getRootProps,i=t.getInputProps;return Object(T.jsx)("section",{children:Object(T.jsxs)("div",Object(r.a)(Object(r.a)({},a()),{},{children:[Object(T.jsx)("input",Object(r.a)({},i())),Object(T.jsx)(v.a,{error:e.isInputInvalid(),variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"checksum",label:"Checksum or Drag&Drop .aax file -",name:"checksum",autoComplete:"checksum",autoFocus:!0,onChange:function(t){return e.setChecksum(t.target.value)},value:n,InputProps:{readOnly:!0,endAdornment:Object(T.jsx)(R,{extensions:["aax","AAX"],maxSize:99999,onChange:e.acceptFile,children:Object(T.jsx)(B.a,{children:Object(T.jsx)(I.a,{})})})}})]}))})}}),Object(T.jsx)(f.a,{fullWidth:!0,variant:"contained",onClick:function(){e.requestActivationBytes()},disabled:!this.isChecksumValid(),children:"Request Activation Bytes"}),Object(T.jsx)(this.DarkerDisabledTextField,{value:i,disabled:!0,variant:"outlined",margin:"normal",fullWidth:!0,id:"activationBytes",label:i?"":"Activation Bytes",name:"activationBytes",autoComplete:"activationBytes","aria-readonly":!0,InputProps:{readOnly:!0,endAdornment:Object(T.jsx)(W.CopyToClipboard,{text:i,children:Object(T.jsx)(B.a,{children:Object(T.jsx)(A.a,{})})})}})]})]}),Object(T.jsx)($,{fileName:c,activationBytes:i}),Object(T.jsx)(y.a,{mt:1,children:Object(T.jsx)(this.Copyright,{})})]})}}]),a}(i.a.Component),Z=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}))(Q),ee=a(70);ee.a.initialize("UA-174657678-1"),ee.a.pageview(window.location.pathname+window.location.search),o.a.render(Object(T.jsx)(Z,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.fed5e1bf.chunk.js.map