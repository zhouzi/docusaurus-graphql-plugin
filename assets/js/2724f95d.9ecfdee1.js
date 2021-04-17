(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(87)),c={id:"scalars",title:"Scalars",slug:"scalars"},l={unversionedId:"github-example/scalars",id:"github-example/scalars",isDocsHomePage:!1,title:"Scalars",description:"Boolean",source:"@site/docs/github-example/scalars.md",slug:"/github-example/scalars",permalink:"/docusaurus-plugin-content-graphql/github-example/scalars",editUrl:"https://github.com/zhouzi/docusaurus-plugin-content-graphql/edit/main/packages/docs/docs/github-example/scalars.md",version:"current",sidebar:"docs",previous:{title:"Input objects",permalink:"/docusaurus-plugin-content-graphql/github-example/inputObjects"}},o=[{value:"Boolean",id:"boolean",children:[]},{value:"Date",id:"date",children:[]},{value:"DateTime",id:"datetime",children:[]},{value:"Float",id:"float",children:[]},{value:"GitObjectID",id:"gitobjectid",children:[]},{value:"GitRefname",id:"gitrefname",children:[]},{value:"GitSSHRemote",id:"gitsshremote",children:[]},{value:"GitTimestamp",id:"gittimestamp",children:[]},{value:"HTML",id:"html",children:[]},{value:"ID",id:"id",children:[]},{value:"Int",id:"int",children:[]},{value:"PreciseDateTime",id:"precisedatetime",children:[]},{value:"String",id:"string",children:[]},{value:"URI",id:"uri",children:[]},{value:"X509Certificate",id:"x509certificate",children:[]}],p={toc:o};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"boolean"},"Boolean"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Boolean")," scalar type represents ",Object(a.b)("inlineCode",{parentName:"p"},"true")," or ",Object(a.b)("inlineCode",{parentName:"p"},"false"),"."),Object(a.b)("h2",{id:"date"},"Date"),Object(a.b)("p",null,"An ISO-8601 encoded date string."),Object(a.b)("h2",{id:"datetime"},"DateTime"),Object(a.b)("p",null,"An ISO-8601 encoded UTC date string."),Object(a.b)("h2",{id:"float"},"Float"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Float")," scalar type represents signed double-precision fractional values as specified by ",Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_floating_point"},"IEEE 754"),"."),Object(a.b)("h2",{id:"gitobjectid"},"GitObjectID"),Object(a.b)("p",null,"A Git object ID."),Object(a.b)("h2",{id:"gitrefname"},"GitRefname"),Object(a.b)("p",null,"A fully qualified reference name (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"refs/heads/master"),")."),Object(a.b)("h2",{id:"gitsshremote"},"GitSSHRemote"),Object(a.b)("p",null,"Git SSH string"),Object(a.b)("h2",{id:"gittimestamp"},"GitTimestamp"),Object(a.b)("p",null,"An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC."),Object(a.b)("h2",{id:"html"},"HTML"),Object(a.b)("p",null,"A string containing HTML code."),Object(a.b)("h2",{id:"id"},"ID"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"ID")," scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as ",Object(a.b)("inlineCode",{parentName:"p"},'"4"'),") or integer (such as ",Object(a.b)("inlineCode",{parentName:"p"},"4"),") input value will be accepted as an ID."),Object(a.b)("h2",{id:"int"},"Int"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Int")," scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1."),Object(a.b)("h2",{id:"precisedatetime"},"PreciseDateTime"),Object(a.b)("p",null,"An ISO-8601 encoded UTC date string with millisecond precision."),Object(a.b)("h2",{id:"string"},"String"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"String")," scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text."),Object(a.b)("h2",{id:"uri"},"URI"),Object(a.b)("p",null,"An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string."),Object(a.b)("h2",{id:"x509certificate"},"X509Certificate"),Object(a.b)("p",null,"A valid x509 certificate string"))}s.isMDXComponent=!0},87:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);