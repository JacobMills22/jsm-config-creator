import {GamepadBind, gamepadBindToJsmString, jsmStringToGamepadBind } from "./GamepadBind";
import {MkbBind, mkbBindToJsmString, jsmStringToMkbBind } from "./MkbBind";

interface Binding {
    gamePadBind: GamepadBind,
    mkbBind: MkbBind
}

let bindings: Array<Binding> = [
    { gamePadBind: GamepadBind.Up, mkbBind: MkbBind.A }
] 

export const generateConfig = () => {
    console.log (gamepadBindToJsmString.get(bindings[0].gamePadBind) + " = " + mkbBindToJsmString.get(bindings[0].mkbBind));
}