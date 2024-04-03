import {GamePadBind, gamepadBindToJsmString, jsmStringToGamepadBind } from "./GamePadBind";
import {MkbBind, mkbBindToJsmString, jsmStringToMkbBind } from "./MkbBind";

interface Binding {
    gamePadBind: GamePadBind,
    mkbBind: MkbBind
}

let bindings: Array<Binding> = [
    { gamePadBind: GamePadBind.Up, mkbBind: MkbBind.A }
] 

export const generateConfig = () => {
    console.log (gamepadBindToJsmString.get(bindings[0].gamePadBind) + " = " + mkbBindToJsmString.get(bindings[0].mkbBind));
}