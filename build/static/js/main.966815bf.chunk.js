(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,s){t.exports={statisticsList:"Statistics_statisticsList__1WaUb",statisticsItem:"Statistics_statisticsItem__19QGn"}},,,function(t,e,s){t.exports={feedbackOptions:"FeedbackOptions_feedbackOptions__3eONJ",feedbackButton:"FeedbackOptions_feedbackButton__17ZnD"}},,function(t,e,s){t.exports={title:"Section_title__3oNTT"}},function(t,e,s){t.exports={message:"Notification_message__3YD1d"}},function(t,e,s){t.exports={app:"App_app__1i7hX"}},,,,,function(t,e,s){},,function(t,e,s){"use strict";s.r(e);var c=s(1),a=s.n(c),n=s(6),i=s.n(n),r=(s(14),s(3)),o=s(7),l=s.n(o),b=s(0);function j(t){var e=t.title,s=t.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h1",{className:l.a.title,children:e}),s]})}var d=s(5),u=s.n(d);function O(t){var e=t.options,s=t.onLeaveFeedback;return Object(b.jsx)("div",{className:u.a.feedbackOptions,children:e.map((function(t){return Object(b.jsx)("button",{className:u.a.feedbackButton,type:"button",onClick:function(){return s(t)},children:t},t)}))})}var p=s(2),h=s.n(p);function x(t){var e=t.good,s=t.neutral,c=t.bad,a=t.total,n=t.positivePercentage;return Object(b.jsxs)("ul",{className:h.a.statisticsList,children:[Object(b.jsxs)("li",{className:h.a.statisticsItem,children:["Good: ",Object(b.jsx)("span",{children:e})]}),Object(b.jsxs)("li",{className:h.a.statisticsItem,children:["Neutral: ",Object(b.jsx)("span",{children:s})]}),Object(b.jsxs)("li",{className:h.a.statisticsItem,children:["Bad: ",Object(b.jsx)("span",{children:c})]}),Object(b.jsxs)("li",{className:h.a.statisticsItem,children:["Total: ",Object(b.jsx)("span",{children:a})]}),Object(b.jsxs)("li",{className:h.a.statisticsItem,children:["Positive feedback: ",Object(b.jsxs)("span",{children:[n,"%"]})]})]})}var f=s(8),m=s.n(f);function k(t){var e=t.message;return Object(b.jsx)("p",{className:m.a.message,children:e})}var _=s(9),v=s.n(_);function N(){var t=Object(c.useState)(0),e=Object(r.a)(t,2),s=e[0],a=e[1],n=Object(c.useState)(0),i=Object(r.a)(n,2),o=i[0],l=i[1],d=Object(c.useState)(0),u=Object(r.a)(d,2),p=u[0],h=u[1];function f(){return s+o+p}var m=Object.keys({good:s,neutral:o,bad:p});return Object(b.jsxs)("div",{className:v.a.app,children:[Object(b.jsx)(j,{title:"Please leave feedback",children:Object(b.jsx)(O,{options:m,onLeaveFeedback:function(t){switch(t){case"good":return a(s+1);case"neutral":return l(o+1);case"bad":return h(p+1)}}})}),Object(b.jsx)(j,{title:"Statistics",children:f()?Object(b.jsx)(x,{good:s,neutral:o,bad:p,total:f(),positivePercentage:Math.round(s/f()*100)}):Object(b.jsx)(k,{message:"No feedback given"})})]})}i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.966815bf.chunk.js.map