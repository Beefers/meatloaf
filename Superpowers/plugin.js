(function(a,r,s,S,m){"use strict";function g(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(o){if(o!=="default"){var h=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(t,o,h.get?h:{enumerable:!0,get:function(){return e[o]}})}}),t.default=e,Object.freeze(t)}var n=g(a);const E=r.findByDisplayName("Checkbox");function c({children:e,value:t,checkboxArgs:o}){return n.createElement(E,{value:s.persist.ghost[t],type:"inverted",onChange:()=>s.persist.store[t]=!s.persist.ghost[t],...o},e)}const u=r.findByDisplayName("Text");var C=()=>(S.useNest(s.persist),n.createElement(n.Fragment,null,n.createElement("style",null,`
                .cumcord-settings-modal {
                    min-width: 200px;
                    min-height: 180px;
                } 
            `),n.createElement(c,{value:"screenshareCrack"},n.createElement(u,null,"Screenshare crack")),n.createElement("div",{style:{marginTop:10}}),n.createElement(c,{value:"spotifyListenAlong"},n.createElement(u,null,"Spotify listen along")),n.createElement("div",{style:{marginTop:10}}),n.createElement(c,{value:"infiniteAccounts"},n.createElement(u,null,"Infinite account switcher accounts"))));const l=r.findByProps("ApplicationStreamFPSButtons"),{ApplicationStreamSettingRequirements:p}=l;function O(e){e===!0?l.ApplicationStreamSettingRequirements=p.map(t=>({resolution:t.resolution,fps:t.fps})):l.ApplicationStreamSettingRequirements=p}const{getAccounts:v}=r.findByProps("getAccounts");function d(){return v().filter(e=>e.type==="spotify")}function y(e,t){return r.findByProps("dispatch","_lastID").dispatch({type:"SPOTIFY_PROFILE_UPDATE",accountId:e,isPremium:t})}function T(e){if(e===!0)for(let t of d())y(t.id,!0);else for(let t of d())y(t.id,!1)}let{MAX_ACCOUNTS:_}=r.findByProps("MAX_ACCOUNTS");function P(e){e===!0?r.findByProps("MAX_ACCOUNTS").MAX_ACCOUNTS=1/0:r.findByProps("MAX_ACCOUNTS").MAX_ACCOUNTS=_}var i={screenshareCrack:O,spotifyListenAlong:T,infiniteAccounts:P};function f(e,t){if(console.log(t.path[0],t.value),i[t.path[0]])return i[t.path[0]](t.value)}function A(e,t){return f("SET",{path:[e],value:t})}var N=()=>{s.persist.on(m.nests.Events.SET,f);for(let e of Object.keys(i))s.persist.ghost[e]&&A(e,s.persist.ghost[e]);return{onUnload:()=>{s.persist.off(m.nests.Events.SET,f);for(let e of Object.keys(i))A(e,!1)},settings:a.createElement(C)}};return N})(cumcord.modules.common.React,cumcord.modules.webpack,cumcord.pluginData,cumcord.utils,cumcord.modules.internal);
