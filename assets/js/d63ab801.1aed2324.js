"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[1478],{47760:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var t=a(86070),r=a(31503),s=a(71750),l=a(26705);const i={title:"\u542f\u52a8\u670d\u52a1\u5668",sidebar_position:3},c="\u542f\u52a8\u670d\u52a1\u5668",d={id:"advance/Linux/start",title:"\u542f\u52a8\u670d\u52a1\u5668",description:"\u5f00\u670d\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u5b89\u88c5\u4e86 Java\uff0c\u5728\u7ec8\u7aef\u8f93\u5165",source:"@site/docs/advance/Linux/start.md",sourceDirName:"advance/Linux",slug:"/advance/Linux/start",permalink:"/advance/Linux/start",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs/advance/Linux/start.md",tags:[],version:"current",lastUpdatedBy:"SB-Reborn",lastUpdatedAt:1727754229e3,sidebarPosition:3,frontMatter:{title:"\u542f\u52a8\u670d\u52a1\u5668",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u4fdd\u6301\u670d\u52a1\u5668\u5728 Linux \u670d\u52a1\u5668\u4e2d\u540e\u53f0\u8fd0\u884c",permalink:"/advance/Linux/keep-running"},next:{title:"\u642d\u5efa\u5185\u7f51\u7a7f\u900f(Frp)",permalink:"/advance/Linux/frp"}},u={},o=[{value:"Java \u5b89\u88c5",id:"java-\u5b89\u88c5",level:2},{value:"\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u5b89\u88c5",id:"\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u5b89\u88c5",level:3},{value:"\u624b\u52a8\u2642",id:"\u624b\u52a8",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"SFTP \u6587\u4ef6\u4f20\u8f93",id:"sftp-\u6587\u4ef6\u4f20\u8f93",level:4},{value:"wegt \u4e0b\u8f7d",id:"wegt-\u4e0b\u8f7d",level:4},{value:"\u538b\u7f29\u5305\u89e3\u538b",id:"\u538b\u7f29\u5305\u89e3\u538b",level:3},{value:"\u591a\u7248\u672c Java \u5171\u5b58",id:"\u591a\u7248\u672c-java-\u5171\u5b58",level:2},{value:"\u65b9\u6cd5\u4e00",id:"\u65b9\u6cd5\u4e00",level:2},{value:"\u65b9\u6cd5\u4e8c",id:"\u65b9\u6cd5\u4e8c",level:2},{value:"\u5f00\u670d",id:"\u5f00\u670d",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u542f\u52a8\u670d\u52a1\u5668",children:"\u542f\u52a8\u670d\u52a1\u5668"})}),"\n",(0,t.jsx)(n.p,{children:"\u5f00\u670d\u4e4b\u524d\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u5b89\u88c5\u4e86 Java\uff0c\u5728\u7ec8\u7aef\u8f93\u5165"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"java -ver"})}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u4f60\u770b\u5230\u7c7b\u4f3c\u4ee5\u4e0b\u7684\u8f93\u51fa\uff0c\u90a3\u4e48\u670d\u52a1\u5668\u4e2d\u5df2\u7ecf\u5b89\u88c5\u4e86 Java"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:'openjdk version "21.0.2" 2024-01-16 LTS\nOpenJDK Runtime Environment Zulu21.32+17-CA (build 21.0.2+13-LTS)\nOpenJDK 64-Bit Server VM Zulu21.32+17-CA (build 21.0.2+13-LTS\uff0c mixed mode\uff0c sharing)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"java-\u5b89\u88c5",children:"Java \u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u4e86 Java\uff0c\u53ef\u4ee5\u5ffd\u7565\u6389\u8fd9\u4e00\u90e8\u5206\u3002\u5982\u679c\u73af\u5883\u672a\u5b89\u88c5 Java \u53ef\u4ee5\u53c2\u8003\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u5b89\u88c5",children:"\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u5b89\u88c5"}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u65b9\u4ee5\u5b89\u88c5 ",(0,t.jsx)(n.code,{children:"openjdk-17"})," \u4e3a\u4f8b"]}),"\n",(0,t.jsxs)(s.A,{defaultValue:"Debian/Ubuntu",values:[{label:"Debian/Ubuntu",value:"Debian/Ubuntu"},{label:"RedHat/CentOS",value:"RedHat/CentOS"},{label:"ArchLinux",value:"ArchLinux"}],children:[(0,t.jsx)(l.A,{value:"Debian/Ubuntu",children:"sudo apt install openjdk-17-jdk"}),(0,t.jsx)(l.A,{value:"RedHat/CentOS",children:"sudo yum install java-11-openjdk"}),(0,t.jsx)(l.A,{value:"ArchLinux",children:"sudo pacman -S jdk11-openjdk"})]}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4ed6\u53d1\u884c\u7248\u5b89\u88c5\u65b9\u5f0f\u81ea\u884c\u767e\u5ea6"}),"\n",(0,t.jsx)(n.h3,{id:"\u624b\u52a8",children:"\u624b\u52a8\u2642"}),"\n",(0,t.jsx)(n.p,{children:"\u63a8\u8350\u4f7f\u7528\u8f6f\u4ef6\u5305\u7ba1\u7406\u5668\u5b89\u88c5\u800c\u4e0d\u662f\u81ea\u5df1\u624b\u52a8\u88c5"}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b"}),(0,t.jsxs)(n.p,{children:["\u4e00\u822c\u6765\u8bf4\uff0c\u5728 Linux \u4e2d\u8fdb\u884c\u8f6f\u4ef6\u5b89\u88c5\u90e8\u7f72\u4f1a\u653e\u5728 ",(0,t.jsx)(n.code,{children:"/opt"})," \u76ee\u5f55\u4e0b\uff0c\u6211\u4eec\u4e5f\u9075\u5faa\u8fd9\u4e2a\u89c4\u5219\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u4e0d\u9075\u5faa"]}),(0,t.jsx)(n.p,{children:"\u4f7f\u7528cd\u5207\u6362\u5230/opt\u76ee\u5f55"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"cd /opt"})}),(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),(0,t.jsx)(n.h4,{id:"sftp-\u6587\u4ef6\u4f20\u8f93",children:"SFTP \u6587\u4ef6\u4f20\u8f93"}),(0,t.jsxs)(n.p,{children:["\u4e0d\u719f\u6089 wget \u65f6\uff0c\u5148\u4f7f\u7528 Windows \u524d\u5f80",(0,t.jsx)(n.a,{href:"https://www.azul.com/downloads/?package=jdk#zulu",children:"zulu\u4e0b\u8f7d"}),"\uff0c\u4e0b\u8f7d\u518d\u4f7f\u7528 SFTP \u8f6f\u4ef6\u4e0a\u4f20\u5230\u670d\u52a1\u5668 ",(0,t.jsx)(n.code,{children:"/opt"})," \u76ee\u5f55\u4e0b\u3002"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(21875).A+"",width:"1651",height:"884"})}),(0,t.jsx)(n.h4,{id:"wegt-\u4e0b\u8f7d",children:"wegt \u4e0b\u8f7d"}),(0,t.jsx)(n.p,{children:"\u4f7f\u7528 wget \u6307\u4ee4\u4e0b\u8f7d"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"wget https://cdn.azul.com/zulu/bin/zulu21.34.19-ca-jdk21.0.3-linux_x64.tar.gz"})}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(26264).A+"",width:"840",height:"205"})}),(0,t.jsx)(n.h3,{id:"\u538b\u7f29\u5305\u89e3\u538b",children:"\u538b\u7f29\u5305\u89e3\u538b"}),(0,t.jsx)(n.p,{children:"\u89e3\u538b\u538b\u7f29\u5305\uff1a"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(47393).A+"",width:"602",height:"97"})}),(0,t.jsx)(n.p,{children:"\u5c06\u76ee\u5f55\u91cd\u547d\u540d\u4e3a jdk21 \uff1a"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(48910).A+"",width:"470",height:"70"})}),(0,t.jsx)(n.p,{children:"\u8fd9\u6837\u5c31\u7b97\u662f\u5b89\u88c5\u597d\u4e86(PS\uff1a\u8fd9\u91cc\u7684\u64cd\u4f5c\u4ec5\u9002\u7528\u4e8e\u5f00\u670d\u4f7f\u7528\uff0c\u82e5\u9700\u8981\u5176\u4ed6\u9700\u8981jdk\u7684\u64cd\u4f5c\u8bf7\u4f7f\u7528\u5305\u7ba1\u7406\u5668\u5b89\u88c5openjdk)"})]}),"\n",(0,t.jsx)(n.h2,{id:"\u591a\u7248\u672c-java-\u5171\u5b58",children:"\u591a\u7248\u672c Java \u5171\u5b58"}),"\n",(0,t.jsx)(n.p,{children:"\u65b9\u6cd5\u5f88\u591a\uff0c\u8fd9\u91cc\u4e3e\u51fa\u4e24\u79cd"}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e00",children:"\u65b9\u6cd5\u4e00"}),"\n",(0,t.jsxs)(s.A,{defaultValue:"Debian/Ubuntu",values:[{label:"Debian/Ubuntu",value:"Debian/Ubuntu"},{label:"RedHat/CentOS",value:"RedHat/CentOS"},{label:"ArchLinux",value:"ArchLinux"}],children:[(0,t.jsx)(l.A,{value:"Debian/Ubuntu",children:"update-alternatives --config java"}),(0,t.jsx)(l.A,{value:"RedHat/CentOS",children:"update-alternatives --config java"}),(0,t.jsx)(l.A,{value:"ArchLinux",children:"archlinux-java set jdk-vesion"})]}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\u9009\u62e9\u4f60\u60f3\u4f7f\u7528\u7684 Java \uff0c\u63a5\u7740 ",(0,t.jsx)(n.code,{children:"java -version"})," \u9a8c\u8bc1\u7248\u672c"]}),"\n",(0,t.jsx)(n.h2,{id:"\u65b9\u6cd5\u4e8c",children:"\u65b9\u6cd5\u4e8c"}),"\n",(0,t.jsx)(n.p,{children:"\u8bbe\u7f6e\u522b\u540d"}),"\n",(0,t.jsxs)(n.p,{children:["\u786e\u5b9a\u4f60\u6240\u4f7f\u7528\u7684\u7ec8\u7aef\uff0c\u6b64\u5904\u4ee5 ",(0,t.jsx)(n.code,{children:"bash"}),"  \u548c ",(0,t.jsx)(n.code,{children:"zulu Java"})," \u4e3a\u4f8b"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"vim ~/.bashrc"})," \u5728\u8fd9\u4e2a\u6587\u4ef6\u672b\u5c3e\u8ffd\u52a0"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# java\nalias java8='/usr/lib/jvm/zulu-8/bin/java'\nalias java17='/usr/lib/jvm/zulu-17/bin/java'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u7136\u540e\u5237\u65b0\uff1a",(0,t.jsx)(n.code,{children:"source ~/.bashrc"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528 Java8 \u5f00\u670d\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java8 -jar example.jar\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528 Java17 \u5f00\u670d\uff1a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"java17 -jar example.jar\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5f00\u670d",children:"\u5f00\u670d"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"TODO - \u5b8c\u5584\u548c\u6392\u7248"})}),"\n",(0,t.jsx)(n.p,{children:"\u5728/opt\u76ee\u5f55\u4e2d\u4f7f\u7528mkdir\u521b\u5efa\u4e00\u4e2a\u76ee\u5f55\u7528\u4e8e\u5f00\u670d"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(48407).A+"",width:"221",height:"53"})}),"\n",(0,t.jsx)(n.p,{children:"\u5c06\u6838\u5fc3\u653e\u5165\u670d\u52a1\u5668\u5185\uff0c\u5e76\u7f16\u5199\u7b80\u5355\u7684\u5f00\u670d\u811a\u672c"}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528 chmod \u547d\u4ee4\u7ed9\u811a\u672c\u589e\u52a0\u8fd0\u884c\u6743\u9650"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"chmod +x example.sh\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(24476).A+"",width:"906",height:"513"})}),"\n",(0,t.jsx)(n.p,{children:"\u8f93\u5165./start.sh\u6216\u8005\u8f93\u5165bash start.sh\u5373\u53ef\u542f\u52a8"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(76741).A+"",width:"752",height:"184"})}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528vim\u4fee\u6539eula\u4e3atrue\u5c31\u53ef\u4ee5\u5f00\u670d\u4e86"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:a(55362).A+"",width:"761",height:"132"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},26705:(e,n,a)=>{a.d(n,{A:()=>l});a(30758);var t=a(13526);const r={tabItem:"tabItem_xVqK"};var s=a(86070);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,l),hidden:a,children:n})}},71750:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(30758),r=a(13526),s=a(48383),l=a(25557),i=a(28060),c=a(76128),d=a(1809),u=a(65401);function o(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:a}=e;const r=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=h(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[d,o]=j({queryString:a,groupId:r}),[x,v]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=d??x;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&c(b)}),[b]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),o(e),v(e)}),[o,v,s]),tabValues:s}}var v=a(8);const b={tabList:"tabList_YA5I",tabItem:"tabItem_SMSe"};var m=a(86070);function f(e){let{className:n,block:a,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),u=e=>{const n=e.currentTarget,a=c.indexOf(n),r=i[a].value;r!==t&&(d(n),l(r))},o=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:o,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function g(e){let{lazy:n,children:a,selectedValue:s}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function A(e){const n=x(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(f,{...n,...e}),(0,m.jsx)(g,{...n,...e})]})}function w(e){const n=(0,v.A)();return(0,m.jsx)(A,{...e,children:o(e.children)},String(n))}},21875:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/1-2e62989985c08bcd180078a0d5b4fbcf.png"},26264:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/2-813d98ab21962d9e5bb584c064c66881.png"},47393:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/3-1c1ab8388ae65c7d2513d331514bd5c1.png"},48910:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/4-b8cd44d251fce63b8af9885b4300ce4d.png"},48407:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/5-ad436380e014f6c6cfbedcdf09ab6d04.png"},24476:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/6-da6bec542850260ab00c7302000ad61a.png"},76741:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/7-40366a87a0c0b9d0801b7b0abda2268d.png"},55362:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/8-7f06aff07435414af944cfb8fcef555c.png"},31503:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var t=a(30758);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);