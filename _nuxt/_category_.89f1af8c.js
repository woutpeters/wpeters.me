import{h as _,a as h,l as m,o as s,s as l,$ as c,U as x,u as p,Q as C,e as $,Z as w,a4 as A,a5 as B,c as u,a6 as N}from"./entry.163b691f.js";import{m as j}from"./helper.0f331916.js";import{_ as D,a as I}from"./empty.e4ee2cba.js";import{u as V}from"./asyncData.822c9373.js";import{q}from"./query.5d7501e7.js";import"./nuxt-img.c510d8ee.js";import"./Icon.3617a61f.js";import"./config.4f233351.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./nuxt-link.80b339cb.js";import"./utils.c9a40fd7.js";import"./preview.5d4c9dea.js";const E={p:"6",m:"y-4",border:"rounded-md",bg:"gray-200 dark:blue-gray-700"},F={font:"semibold leading-tight",text:"cool-gray-600 dark:cool-gray-50","md:text":"xl",m:"y-5"},T=_({__name:"topic",setup(y){const r=h(),i=m(()=>{const n=r.params.category||"";let a="";return Array.isArray(n)?a=n.at(0)||"":a=n,j(a)});return(n,a)=>(s(),l("div",null,[c("div",E,[c("span",F,x(p(i)),1)])]))}}),U={container:"",m:"x-auto",p:"x-4"},H={grid:"~ cols-1 md:cols-2 lg:cols-3 gap-4"},M=_({__name:"[category]",async setup(y){let r,i;const n=h(),a=m(()=>{const o=n.params.category||"";let e="";return Array.isArray(o)?e=o.at(0)||"":e=o,e}),{data:d}=([r,i]=C(()=>V("home",()=>q("/projects").where({tags:{$contains:a.value}}).find())),r=await r,i(),r),f=m(()=>{var o;return(o=d.value)==null?void 0:o.map(e=>({path:e._path,title:e.title||"no-title available",description:e.description||"no-descriptoin available",image:e.image||"/wpeters.me/blog/no-image_tkiuou.jpg",alt:e.alt||"no alter data available",ogImage:e.ogImage||"/wpeters.me/blog/no-image_tkiuou.jpg",date:e.date||"not-date-available",tags:e.tags||[],published:e.published||!1}))});return $({title:a.value,meta:[{name:"description",content:`You will find all the ${a.value} related post here`}],titleTemplate:"Wout Peters - %s"}),(o,e)=>{var g;const b=T,v=D,k=I;return s(),l("main",U,[w(b),c("div",H,[(s(!0),l(A,null,B(p(f),t=>(s(),u(v,{key:t.title,path:t.path,title:t.title,date:t.date,description:t.description,image:t.image,alt:t.alt,"og-image":t.ogImage,tags:t.tags,published:t.published},null,8,["path","title","date","description","image","alt","og-image","tags","published"]))),128)),((g=p(d))==null?void 0:g.length)===0?(s(),u(k,{key:0})):N("",!0)])])}}});export{M as default};
