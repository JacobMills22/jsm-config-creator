import { GamepadBind } from '@/backend/GamepadBind'
import { MkbBind } from '@/backend/MkbBind'

import { gamepadBindToJsmString } from '@/backend/GamepadBind'
import { mkbBindToJsmString } from '@/backend/MkbBind'

export const generateConfig = (bindings: Map<GamepadBind, MkbBind>): Array<string> => {
    let config = []

    config.push('#Config generated by JSM Config Creator Dev Build')
    config.push('')

    config.push('#Gamepad Buttons')
    config.push(createBindingLine(GamepadBind.North, bindings.get(GamepadBind.North)))
    config.push(createBindingLine(GamepadBind.East, bindings.get(GamepadBind.East)))
    config.push(createBindingLine(GamepadBind.South, bindings.get(GamepadBind.South)))
    config.push(createBindingLine(GamepadBind.West, bindings.get(GamepadBind.West)))

    return config
}

const createBindingLine = (gamepadBind: GamepadBind, mkbBind: MkbBind | undefined): string => {
    const gamepadBindJsmString = gamepadBindToJsmString.get(gamepadBind)
    const mkbBindJsmString =
        mkbBind === undefined
            ? mkbBindToJsmString.get(MkbBind.NoInput)
            : mkbBindToJsmString.get(mkbBind)

    return gamepadBindJsmString + ' = ' + mkbBindJsmString + ' #TODO'
}
