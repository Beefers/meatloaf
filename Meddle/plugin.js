(function(m,a,p,E,l,n,y,G,v){"use strict";function x(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function w(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(r){if(r!=="default"){var d=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,d.get?d:{enumerable:!0,get:function(){return e[r]}})}}),t.default=e,Object.freeze(t)}var s=w(p),i=x(v);const[S,N,{GuildFeatures:V},F,o,u,U,H]=l.batchFind(({findByProps:e,findByDisplayName:t})=>{t("SettingsView"),e("dirtyDispatch"),e("GuildFeatures"),t("FormTitle"),t("FormText"),t("FormDivider"),t("Switch"),e("Sizes","Colors","Looks","DropdownSizes")});function L(e){return s.createElement("div",{className:"beef-meddle-settings-title"},s.createElement(F,{tag:"h1"},"Meddle"),s.createElement(o,null,"A tool for those who like to mess with the Maze."),s.createElement(o,{className:"beef-meddle-settings-title-subtext"},"Currently very WIP"))}function T({items:e}){let[t,r]=s.useState(0);return s.createElement("div",null,s.createElement("div",{className:"beef-meddle-settings-section"},s.createElement(L,null),s.createElement(u,{className:"beef-meddle-settings-divider"}),s.createElement("div",{className:"beef-meddle-tabbar"},e.map((d,c)=>s.createElement("button",{className:"beef-meddle-button"+(c===t?" beef-meddle-selected":""),onClick:()=>r(c)},s.createElement(o,null,d.text))))),s.createElement(u,{className:"beef-meddle-settings-divider"}),s.createElement("div",{className:"beef-meddle-settings-section beef-meddle-tabbar-content"},s.createElement(e[t].component,{goTo:r})))}const f=l.findByDisplayName("FormText"),D=l.findByDisplayName("Switch"),I=l.findByDisplayName("TextInput");l.findByDisplayName("Select",!1).SingleSelect;const b=e=>({display:"flex",alignItems:"center",gap:".5rem",marginBottom:"1rem",marginLeft:e!==void 0?"1rem":0}),g=({k:e,depends:t,children:r})=>i.default.createElement("div",{style:b(t)},i.default.createElement(D,{checked:n.persist.ghost[e],disabled:t!==void 0&&!n.persist.ghost[t],onChange:d=>n.persist.store[e]=d}),i.default.createElement(f,{children:r})),k=({k:e,depends:t,children:r})=>i.default.createElement("div",{style:b(t)},i.default.createElement(I,{value:n.persist.ghost[e],disabled:t!==void 0&&!n.persist.ghost[t],onChange:d=>n.persist.store[e]=d}),i.default.createElement(f,{children:r})),B=e=>t=>(y.useNest(n.persist),e(t)),M=(e,t=n.persist)=>{for(const r in e)t.ghost[r]===void 0&&(t.store[r]=e[r])};function h({k:e,depends:t,children:r}){return s.createElement("div",{class:"beef-meddle-textbox-wrapper"},s.createElement(k,{k:e,depends:t},r))}function j(e){return s.createElement("div",{className:"beef-meddle-settings-tab"},s.createElement(g,{k:"dispatchLogEnabled"},"Log all FluxDispatcher calls to console"),s.createElement(g,{k:"dispatchWhiteListMode"},"Dispatch logger whitelist mode"),s.createElement(h,{k:"dispatchIgnoreList"},"FluxDispatcher calls to hide when not in whitelist mode (comma separated)"),s.createElement(h,{k:"dispatchWhiteList"},"FluxDispatcher calls to allow when in whitelist mode (comma separated)"))}function P(e){return s.createElement("div",{className:"beef-meddle-settings-tab"},s.createElement(o,null,"There will be controls here soon\u2122\uFE0F"))}function O(e){return s.createElement(E.ErrorBoundary,null,s.createElement("div",{className:"beef-meddle-settings"},s.createElement(T,{items:[{text:"FluxDispatcher",component:j},{text:"Servers",component:P}]})))}var R=()=>a.findAndPatch(()=>S,e=>a.after("getPredicateSections",e.prototype,(t,r)=>{if(r[1]?.section!="My Account")return;let d=r.findIndex(A=>A.section=="changelog")-1;const c=[{section:"DIVIDER"},{section:"HEADER",label:"Meddle"},{section:"beef_meddle_SETTINGS",label:"Settings",element:B(O)}];return r.splice(d,0,...c),r})),W=()=>a.after("dispatch",N,e=>{!n.persist.ghost.dispatchLogEnabled||n.persist.ghost.dispatchWhiteListMode&&!n.persist.ghost.dispatchWhiteList.split(",").includes(e[0].type)||n.persist.ghost.dispatchIgnoreList.split(",").includes(e[0].type)||console.log(e[0])}),$=()=>a.injectCSS(".beef-meddle-settings .beef-meddle-settings-title h1{margin-bottom:.2rem}.beef-meddle-settings .beef-meddle-settings-title :nth-child(3){color:var(--text-muted)}.beef-meddle-settings .beef-meddle-settings-title .beef-meddle-settings-title-subtext{font-size:x-small}.beef-meddle-settings .beef-meddle-settings-section{padding:1rem;border-radius:.5rem;background-color:var(--background-secondary)}.beef-meddle-settings .beef-meddle-settings-tab{padding:.25rem}.beef-meddle-settings .beef-meddle-settings-divider{margin-top:.5rem;margin-bottom:.5rem}.beef-meddle-row{display:flex;gap:1rem}.beef-meddle-row :not(:last-child){flex:1}.beef-meddle-textbox-wrapper *{display:flex;flex-direction:column-reverse}.beef-meddle-textbox-wrapper * *{width:100%}.beef-meddle-tabbar{padding:.25rem;display:grid;grid-auto-flow:column;grid-auto-columns:7rem}.beef-meddle-tabbar .beef-meddle-button *{cursor:pointer}.beef-meddle-tabbar *{margin-right:1rem;padding:.2rem;border-radius:.3rem;min-width:5rem;text-align:center;background:none}.theme-dark .beef-meddle-tabbar .beef-meddle-selected{background:rgba(255,255,255,.2666666667)}.theme-light .beef-meddle-tabbar .beef-meddle-selected{background:rgba(0,0,0,.2)}.beef-meddle-tabbar :last-child{margin-right:0}");M({dispatchLogEnabled:!1,dispatchIgnoreList:"",dispatchWhiteList:"",dispatchWhiteListMode:!1});const C=[R(),W(),$()];function z(){_.forEachRight(C,e=>e())}return m.onUnload=z,Object.defineProperty(m,"__esModule",{value:!0}),m})({},cumcord.patcher,cumcord.modules.common.React,cumcord.ui.components,cumcord.modules.webpack,cumcord.pluginData,cumcord.utils,cumcord.plugins,cumcord.modules.common.React);
