(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3WF5":function(e,t,n){var a=n("eUgh"),l=n("ut/Y"),o=n("l9OW"),i=n("Z0cm");e.exports=function(e,t){return(i(e)?a:o)(e,l(t,3))}},Dtc0:function(e,t,n){"use strict";n.r(t);var a=n("xweI"),l=n.n(a),o=n("q1tI"),i=n.n(o),r=n("ntAx"),c=n("DGZL"),s=n("bSql"),u=n("PZY4"),d=n("3WF5"),m=n.n(d),p=n("vOnD"),f=n("Wbzz"),g=p.default.div.withConfig({displayName:"SideTagList__RelativeWrapper",componentId:"sc-16cfe6k-0"})(["position:relative;"]),h=p.default.aside.withConfig({displayName:"SideTagList__Wrapper",componentId:"sc-16cfe6k-1"})(["position:absolute;left:112%;top:0px;width:200px;height:100px;font-size:16px;@media (max-width:1300px){display:none;}"]),x=p.default.div.withConfig({displayName:"SideTagList__Title",componentId:"sc-16cfe6k-2"})(["margin-bottom:25px;font-weight:bold;color:",";"],(function(e){return e.theme.colors.secondaryText})),E=p.default.li.withConfig({displayName:"SideTagList__Tag",componentId:"sc-16cfe6k-3"})(["margin-bottom:16px;color:",";cursor:pointer;transition:color 0.3s;&:hover{color:",";}& > a{color:inherit;text-decoration:none;}"],(function(e){return e.theme.colors.tertiaryText}),(function(e){return e.theme.colors.text})),k=function(e){var t=e.tags,n=e.postCount;return i.a.createElement(g,null,i.a.createElement(h,null,i.a.createElement(x,null,"TAG LIST"),i.a.createElement("ul",null,i.a.createElement(E,null,i.a.createElement(f.Link,{to:"/tags"},"all (",n,")")),m()(t,(function(e){return i.a.createElement(E,null,i.a.createElement(f.Link,{to:"/tags?q="+e.fieldValue},e.fieldValue," (",e.totalCount,")"))})))))},w=n("XUsr"),v=n("mpmw"),b=n("C4nX");t.default=function(e){var t=e.data,n=t.allMarkdownRemark.nodes,a=l()(t.allMarkdownRemark.group,["totalCount"]).reverse();return 0===n.length?i.a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'):i.a.createElement(r.a,null,i.a.createElement(c.a,{title:b.title,description:b.description,url:b.siteUrl}),i.a.createElement(v.a,{size:48}),i.a.createElement(s.a,null),i.a.createElement(w.a,null),i.a.createElement(k,{tags:a,postCount:n.length}),i.a.createElement(u.a,{postList:n}))}},GxtF:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("vOnD"),i=n("Wbzz"),r=o.default.div.withConfig({displayName:"TagList__TagListWrapper",componentId:"sc-meonqt-0"})(["margin-bottom:16px;word-break:break-all;"]),c=o.default.div.withConfig({displayName:"TagList__TagLink",componentId:"sc-meonqt-1"})(["display:inline-block;padding:9.6px 11.2px;margin-right:8px;margin-bottom:8px;border-radius:50px;background-color:",";color:",";text-decoration:none;font-size:14.4px;transition:all 0.2s;&:hover{background-color:",";}"],(function(e){return e.selected?e.theme.colors.selectedTagBackground:e.theme.colors.tagBackground}),(function(e){return e.selected?e.theme.colors.selectedTagText:e.theme.colors.tagText}),(function(e){return e.selected?e.theme.colors.hoveredSelectedTagBackground:e.theme.colors.hoveredTagBackground})),s=function(e){return e.replace(/\s+/g,"-")};t.a=function(e){var t=e.tagList,n=e.count,a=e.selected;return t?n?l.a.createElement(r,null,t.map((function(e,t){return l.a.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:a===e.fieldValue?"/tags":"/tags?q="+e.fieldValue},l.a.createElement(c,{selected:e.fieldValue===a},s(e.fieldValue)," (",e.totalCount,")"))}))):l.a.createElement(r,null,t.map((function(e,t){return l.a.createElement(i.Link,{key:JSON.stringify({tag:e,i:t}),to:"/tags?q="+e},l.a.createElement(c,null,s(e)))}))):null}},PZY4:function(e,t,n){"use strict";var a=n("DzJC"),l=n.n(a),o=n("q1tI"),i=n.n(o),r=n("vOnD"),c=n("Wbzz"),s=n("PyCY"),u=n("XUsr"),d=n("GxtF"),m=r.default.div.withConfig({displayName:"PostList__PostListWrapper",componentId:"sc-17sn8w7-0"})(["@media (max-width:768px){padding:0 10px;}"]),p=r.default.div.withConfig({displayName:"PostList__PostWrapper",componentId:"sc-17sn8w7-1"})(["position:relative;top:0;transition:all 0.5s;@media (max-width:768px){padding:0 5px;}"]),f=r.default.p.withConfig({displayName:"PostList__Date",componentId:"sc-17sn8w7-2"})(["margin-bottom:16px;font-size:14.4px;color:",";"],(function(e){return e.theme.colors.tertiaryText})),g=r.default.p.withConfig({displayName:"PostList__Excerpt",componentId:"sc-17sn8w7-3"})(["margin-bottom:32px;line-height:1.7;font-size:16px;color:",";word-break:break-all;"],(function(e){return e.theme.colors.secondaryText}));t.a=function(e){var t=e.postList,n=Object(o.useState)(10),a=n[0],r=n[1],h=l()((function(){document.documentElement.scrollHeight-document.documentElement.scrollTop<=document.documentElement.clientHeight+100&&a<t.length&&setTimeout((function(){return r(a+10)}),300)}),250);return Object(o.useEffect)((function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[a,t]),Object(o.useEffect)((function(){r(10)}),[t]),i.a.createElement(m,null,t.slice(0,a).map((function(e,n){var l=e.frontmatter,o=l.title,r=l.date,m=l.tags,h=e.excerpt,x=e.fields.slug;return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,null,i.a.createElement(s.a,{size:"bg"},i.a.createElement(c.Link,{to:x},o)),i.a.createElement(f,null,r),i.a.createElement(g,null,h),i.a.createElement(d.a,{tagList:m})),a-1!==n&&t.length-1!==n&&i.a.createElement(u.a,{mt:"48px",mb:"32px"}))})))}},bSql:function(e,t,n){"use strict";var a=n("q1tI"),l=n.n(a),o=n("vOnD"),i=n("ma3e"),r=n("C4nX"),c=o.default.div.withConfig({displayName:"Bio__BioWrapper",componentId:"sc-4kn0lz-0"})(["display:flex;align-items:center;@media (max-width:768px){padding:0 15px;}"]),s="undefined"!=typeof window&&"localhost:8001"===window.location.host?"http://localhost:8001":r.siteUrl,u=o.default.div.withConfig({displayName:"Bio__Profile",componentId:"sc-4kn0lz-1"})(["flex:0 0 auto;margin-right:16px;width:128px;height:128px;border-radius:999px;background-image:url(","/profile.jpeg);background-size:cover;background-position:center;"],s),d=o.default.div.withConfig({displayName:"Bio__Author",componentId:"sc-4kn0lz-2"})(["margin-bottom:4.8px;font-size:24px;font-weight:700;color:",";"],(function(e){return e.theme.colors.text})),m=o.default.div.withConfig({displayName:"Bio__Description",componentId:"sc-4kn0lz-3"})(["margin-bottom:11.2px;line-height:1.5;font-size:16px;color:",";"],(function(e){return e.theme.colors.secondaryText})),p=o.default.div.withConfig({displayName:"Bio__LinksWrapper",componentId:"sc-4kn0lz-4"})(["& a{margin-right:9.6px;}& svg{width:25.6px;height:25.6px;cursor:pointer;}& svg path{fill:",";transition:fill 0.3s;}& a:hover svg path{fill:",";}"],(function(e){return e.theme.colors.icon}),(function(e){return e.theme.colors.text})),f=function(e){var t=e.link,n=e.children;return t?l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},n):null};t.a=function(){var e=r.links.github,t=r.links.kaggle,n=r.links.instagram,a=r.links.facebook,o=r.links.linkedIn,s=r.links.email,g=r.links.etc;return l.a.createElement(c,{id:"bio"},l.a.createElement(u,null),l.a.createElement("div",null,l.a.createElement(d,null,"@",r.author),l.a.createElement(m,null,r.description),l.a.createElement(p,null,l.a.createElement(f,{link:e},l.a.createElement(i.c,null)),l.a.createElement(f,{link:t},l.a.createElement(i.e,null)),l.a.createElement(f,{link:n},l.a.createElement(i.d,null)),l.a.createElement(f,{link:a},l.a.createElement(i.b,null)),l.a.createElement(f,{link:o},l.a.createElement(i.g,null)),l.a.createElement(f,{link:s},l.a.createElement(i.a,null)),l.a.createElement(f,{link:g},l.a.createElement(i.f,null)))))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-e02c9b16ea4b81a6c723.js.map