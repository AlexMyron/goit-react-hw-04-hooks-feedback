(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={spanWrapper:"Statistics_spanWrapper__1Xj4J",output:"Statistics_output__xYRjw",total:"Statistics_total__2eSSc"}},function(e,t,n){e.exports={boxWrapper:"FeedbackOptions_boxWrapper__20p8I",btn:"FeedbackOptions_btn__1L9r5"}},,,,function(e,t,n){e.exports={wrapper:"Section_wrapper__2aw_d"}},,function(e,t,n){e.exports={message:"Notification_message__1LhoM"}},,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),r=n.n(s),o=(n(14),n(4)),i=(n(15),n(7)),b=n.n(i),u=n(0),l=function(e){var t=e.title,n=e.children;return Object(u.jsxs)("section",{className:b.a.wrapper,children:[Object(u.jsx)("h2",{className:"title",children:t}),n]})},d=n(2),p=n.n(d),j=function(e){var t=e.totalFeedbacks,n=e.positivePercentage,a=e.feedbackOptions,c=a.good,s=a.neutral,r=a.bad;return Object(u.jsx)("div",{className:"box",children:Object(u.jsxs)("div",{className:p.a.spanWrapper,children:[Object(u.jsxs)("span",{className:p.a.output,children:["good: ",c]}),Object(u.jsxs)("span",{className:p.a.output,children:["neutral: ",s]}),Object(u.jsxs)("span",{className:p.a.output,children:["bad: ",r]}),Object(u.jsxs)("span",{className:p.a.total,children:["total: ",t]}),Object(u.jsxs)("span",{className:p.a.total,children:["positive feedbacks:"," ",isNaN(n)?"0":n,"%"]})]})})},f=n(8),h=n.n(f),O=n(3),x=n.n(O),k=function(e){var t=e.onLeaveFeedback;return Object(u.jsxs)("div",{className:x.a.boxWrapper,children:[Object(u.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return t("good")},children:"good"}),Object(u.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return t("neutral")},children:"neutral"}),Object(u.jsx)("button",{className:x.a.btn,type:"button",onClick:function(){return t("bad")},children:"bad"})]})};k.prototypes={onAddFeedback:h.a.func};var g=k,m=n(9),_=n.n(m),v=function(e){var t=e.message;return Object(u.jsx)("div",{className:_.a.message,children:Object(u.jsx)("p",{children:t})})},N=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),r=Object(o.a)(s,2),i=r[0],b=r[1],d=Object(a.useState)(0),p=Object(o.a)(d,2),f=p[0],h=p[1],O=function(){return n+i+f},x=Boolean(O()),k=function(){var e=O(),t=100*n/e;return Math.round(t)}(),m=O(),_={good:n,neutral:i,bad:f};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{title:"Please leave a feedback",children:Object(u.jsx)(g,{onLeaveFeedback:function(e){switch(e){case"good":c((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":h((function(e){return e+1}));break;default:return}}})}),Object(u.jsx)(l,{title:"Statistics",children:x&&Object(u.jsx)(j,{feedbackOptions:_,totalFeedbacks:m,positivePercentage:k})}),!x&&Object(u.jsx)(v,{message:"No feedback given.."})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),S()}],[[19,1,2]]]);
//# sourceMappingURL=main.91877bbf.chunk.js.map