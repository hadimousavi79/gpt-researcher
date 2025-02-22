"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3249],{1335:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(6540),n=a(1312),r=a(8168),i=a(53);const s="iconEdit_mS5F",m=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,r.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var o=a(5965);function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:o.GN.common.editThisPage},l.createElement(m,null),l.createElement(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2359:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(6540),n=a(8139),r=a(5047),i=a(7087),s=a(1312),m=a(5489);const o=function(e){const{nextItem:t,prevItem:a}=e;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(m.A,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.createElement(m.A,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(s.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var c=a(5965),d=a(5751);const g=function(e){const{content:t,sidebar:a}=e,{frontMatter:s,assets:m,metadata:g}=t,{title:p,description:u,nextItem:b,prevItem:v,date:h,tags:E,authors:_}=g,{hide_table_of_contents:N,keywords:A,toc_min_heading_level:f,toc_max_heading_level:k}=s,P=m.image??s.image;return l.createElement(r.A,{wrapperClassName:c.GN.wrapper.blogPages,pageClassName:c.GN.page.blogPostPage,sidebar:a,toc:!N&&t.toc&&t.toc.length>0?l.createElement(d.A,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:k}):void 0},l.createElement(n.A,{title:p,description:u,keywords:A,image:P},l.createElement("meta",{property:"og:type",content:"article"}),l.createElement("meta",{property:"article:published_time",content:h}),_.some((e=>e.url))&&l.createElement("meta",{property:"article:author",content:_.map((e=>e.url)).filter(Boolean).join(",")}),E.length>0&&l.createElement("meta",{property:"article:tag",content:E.map((e=>e.label)).join(",")})),l.createElement(i.A,{frontMatter:s,assets:m,metadata:g,isBlogPostPage:!0},l.createElement(t,null)),(b||v)&&l.createElement(o,{nextItem:b,prevItem:v}))}},5047:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(6540),n=a(53),r=a(9360),i=a(5489);const s={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var m=a(1312);function o(e){let{sidebar:t}=e;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.A)(s.sidebar,"thin-scrollbar"),"aria-label":(0,m.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.A)(s.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>l.createElement("li",{key:e.permalink,className:s.sidebarItem},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}const c=function(e){const{sidebar:t,toc:a,children:i,...s}=e,m=t&&t.items.length>0;return l.createElement(r.A,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},m&&l.createElement("aside",{className:"col col--3"},l.createElement(o,{sidebar:t})),l.createElement("main",{className:(0,n.A)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},5137:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(6540),n=a(53),r=a(1312),i=a(5465);const s={tags:"tags_NBRY",tag:"tag_F03v"};function m(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,n.A)(s.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:s.tag},l.createElement(i.A,{name:t,permalink:a}))}))))}},5465:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(6540),n=a(53),r=a(5489);const i="tag_WK-t",s="tagRegular_LXbV",m="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:a,count:o}=e;return l.createElement(r.A,{href:t,className:(0,n.A)(i,{[s]:!o,[m]:o})},a,o&&l.createElement("span",null,o))}},5496:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(8168),n=a(6540),r=a(5965);function i(e){let{toc:t,className:a,linkClassName:l,isChild:r}=e;return t.length?n.createElement("ul",{className:r?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:o,maxHeadingLevel:c,...d}=e;const g=(0,r.pN)(),p=o??g.tableOfContents.minHeadingLevel,u=c??g.tableOfContents.maxHeadingLevel,b=(0,r.WQ)({toc:t,minHeadingLevel:p,maxHeadingLevel:u}),v=(0,n.useMemo)((()=>{if(s&&m)return{linkClassName:s,linkActiveClassName:m,minHeadingLevel:p,maxHeadingLevel:u}}),[s,m,p,u]);return(0,r.i3)(v),n.createElement(i,(0,l.A)({toc:b,className:a,linkClassName:s},d))}},5751:(e,t,a)=>{a.d(t,{A:()=>m});var l=a(8168),n=a(6540),r=a(53),i=a(5496);const s="tableOfContents_vrFS";const m=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,r.A)(s,"thin-scrollbar",t)},n.createElement(i.A,(0,l.A)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},7087:(e,t,a)=>{a.d(t,{A:()=>N});var l=a(6540),n=a(53),r=a(5680),i=a(1312),s=a(5489),m=a(6025),o=a(5965),c=a(3817),d=a(1335);const g="blogPostTitle_d4p0",p="blogPostData_-Im+",u="blogPostDetailsFull_xD8n";var b=a(5137);const v="image_9q7L";const h=function(e){let{author:t}=e;const{name:a,title:n,url:r,imageURL:i}=t;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.A,{className:"avatar__photo-link avatar__photo",href:r},l.createElement("img",{className:v,src:i,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.A,{href:r,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),n&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},E={authorCol:"authorCol_8c0z"};function _(e){let{authors:t,assets:a}=e;return 0===t.length?l.createElement(l.Fragment,null):l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>l.createElement("div",{className:(0,n.A)("col col--6",E.authorCol),key:t},l.createElement(h,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const N=function(e){const t=function(){const{selectMessage:e}=(0,o.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,i.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,m.h)(),{children:v,frontMatter:h,assets:E,metadata:N,truncated:A,isBlogPostPage:f=!1}=e,{date:k,formattedDate:P,permalink:L,tags:T,readingTime:I,title:C,editUrl:w,authors:y}=N,x=E.image??h.image,B=!f&&A,H=T.length>0;return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=f?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g,itemProp:"headline"},f?C:l.createElement(s.A,{itemProp:"url",to:L},C)),l.createElement("div",{className:(0,n.A)(p,"margin-vert--md")},l.createElement("time",{dateTime:k,itemProp:"datePublished"},P),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(_,{authors:y,assets:E}))})(),x&&l.createElement("meta",{itemProp:"image",content:a(x,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(r.xA,{components:c.A},v)),(H||A)&&l.createElement("footer",{className:(0,n.A)("row docusaurus-mt-lg",{[u]:f})},H&&l.createElement("div",{className:(0,n.A)("col",{"col--9":B})},l.createElement(b.A,{tags:T})),f&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.A,{editUrl:w})),B&&l.createElement("div",{className:(0,n.A)("col text--right",{"col--3":H})},l.createElement(s.A,{to:N.permalink,"aria-label":`Read more about ${C}`},l.createElement("b",null,l.createElement(i.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}}}]);