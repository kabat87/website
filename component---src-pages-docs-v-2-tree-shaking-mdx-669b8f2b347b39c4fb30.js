(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{qD2Y:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return l}));var n=t("k1TG"),c=t("8o2o"),s=(t("FdF9"),t("7ljp")),o=t("7oih"),p={},r={_frontmatter:p},b=o.a;function l(e){var a=e.components,t=Object(c.a)(e,["components"]);return Object(s.b)(b,Object(n.a)({},r,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"tree-shaking",style:{position:"relative"}},Object(s.b)("a",{parentName:"h1",href:"#tree-shaking","aria-label":"tree shaking permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Tree-shaking"),Object(s.b)("p",null,"While Popper v2 saw a sizeable decrease in bundle size from v1 (-2 kB from ~7 kB\nminzipped to ~5 kB minzipped), this is still not optimal."),Object(s.b)("p",null,'Popper addresses a lot of use cases and complexity, but to help keep consumers\'\nbundle sizes small, we made the library tree-shakable. "Tree-shaking" is the\nprocess of eliminating unused code from your bundles, which is achieved by\nbundlers such as webpack, Rollup and Parcel.'),Object(s.b)("p",null,"If you're using the CDN, tree-shaking will not be available."),Object(s.b)("h2",{id:"popper-lite",style:{position:"relative"}},Object(s.b)("a",{parentName:"h2",href:"#popper-lite","aria-label":"popper lite permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Popper Lite"),Object(s.b)("p",null,"The most straightforward way to enable tree-shaking is to use Popper Lite and\nconfigure it with your needs."),Object(s.b)("p",null,"Instead of:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token comment"},"// ❌ Imports all of Popper!"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," createPopper ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"Use:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token comment"},"// ✅"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," createPopper ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/popper-lite'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";")))),Object(s.b)("p",null,"Popper Lite only comes with the following modifiers:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"popperOffsets")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"computeStyles")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"applyStyles")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("code",{parentName:"li",className:"language-text"},"eventListeners"))),Object(s.b)("p",null,"This effectively achieves the bare minimum functionality, and is around 3 kB\nminzipped. If 3 kB is still too much for your application, we recommend trying\nout CSS tooltip alternatives which are as tiny as 1 kB. Please note that such\nlibraries have many disadvantages that Popper doesn't, so assess the trade-offs\nwhere necessary."),Object(s.b)("p",null,"Now, you'll need to add the modifiers you need. These are accessible under the\n",Object(s.b)("code",{parentName:"p",className:"language-text"},"@popperjs/core/lib/modifiers/")," directory."),Object(s.b)("p",null,"Generally, we recommend ",Object(s.b)("code",{parentName:"p",className:"language-text"},"flip")," and ",Object(s.b)("code",{parentName:"p",className:"language-text"},"preventOverflow")," since these are the most\nattractive reasons for using Popper in the first place:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{")," createPopper ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/popper-lite'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," flip ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/modifiers/flip'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," preventOverflow ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(s.b)("span",{parentName:"code",className:"token function"},"createPopper"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),"reference",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," popper",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  modifiers",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),"flip",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," preventOverflow",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")")))),Object(s.b)("h3",{id:"popper-generator",style:{position:"relative"}},Object(s.b)("a",{parentName:"h3",href:"#popper-generator","aria-label":"popper generator permalink",className:"gatsby-link-icon before"},Object(s.b)("svg",{parentName:"a","aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},Object(s.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Popper Generator"),Object(s.b)("p",null,"To pass these extra modifiers as default, you can use the ",Object(s.b)("code",{parentName:"p",className:"language-text"},"popperGenerator"),"\nfunction:"),Object(s.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(s.b)("pre",{parentName:"div",className:"language-js"},Object(s.b)("code",{parentName:"pre",className:"language-js"},Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  popperGenerator",Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n  defaultModifiers",Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}")," ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/popper-lite'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," flip ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/modifiers/flip'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"import")," preventOverflow ",Object(s.b)("span",{parentName:"code",className:"token keyword"},"from")," ",Object(s.b)("span",{parentName:"code",className:"token string"},"'@popperjs/core/lib/modifiers/preventOverflow'"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(s.b)("span",{parentName:"code",className:"token keyword"},"const")," createPopper ",Object(s.b)("span",{parentName:"code",className:"token operator"},"=")," ",Object(s.b)("span",{parentName:"code",className:"token function"},"popperGenerator"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"("),Object(s.b)("span",{parentName:"code",className:"token punctuation"},"{"),"\n  defaultModifiers",Object(s.b)("span",{parentName:"code",className:"token operator"},":")," ",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"["),Object(s.b)("span",{parentName:"code",className:"token operator"},"..."),"defaultModifiers",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," flip",Object(s.b)("span",{parentName:"code",className:"token punctuation"},",")," preventOverflow",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"]"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},","),"\n",Object(s.b)("span",{parentName:"code",className:"token punctuation"},"}"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},")"),Object(s.b)("span",{parentName:"code",className:"token punctuation"},";"),"\n\n",Object(s.b)("span",{parentName:"code",className:"token comment"},"// Now you can use `createPopper`")))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-v-2-tree-shaking-mdx-669b8f2b347b39c4fb30.js.map