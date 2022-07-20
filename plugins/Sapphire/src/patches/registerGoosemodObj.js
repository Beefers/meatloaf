import Divider from "../components/Divider";
import TextAndChild from "../components/TextAndChild";
import TextAndButton from "../components/TextAndButton";
import Toggle from "../components/Toggle";

import patcher from "../lib/patcher";
import webpackModules from "../lib/webpackModules";
import reactUtils from "../lib/reactUtils";

import showToast from "../lib/showToast";

export default function registerGoosemodObj() {
    window.goosemod = {
        patcher: patcher,
        webpackModules: webpackModules,
        settings: {
            Items: {
                divider: Divider,
                toggle: Toggle,
                "text-and-child": TextAndChild,
                "text-and-button": TextAndButton
            }
        },
        reactUtils: reactUtils,
        showToast: showToast,
        _SAPPHIRE: true
    }

    return () => { if(window.goosemod?._SAPPHIRE) delete window.goosemod };
}