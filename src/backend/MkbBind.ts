export enum MkbBind {
    Key0 = 0,
    Key1 = 1,
    Key2 = 2,
    Key3 = 3,
    Key4 = 4,
    Key5 = 5,
    Key6 = 6,
    Key7 = 7,
    Key8 = 8,
    Key9 = 9,

    Numpad0 = 10,
    Numpad1 = 11,
    Numpad2 = 12,
    Numpad3 = 13,
    Numpad4 = 14,
    Numpad5 = 15,
    Numpad6 = 16,
    Numpad7 = 17,
    Numpad8 = 18,
    Numpad9 = 19,

    Add = 20,
    Subtract = 21,
    Divide = 22,
    Multiply = 23,
    Decimal = 24,

    F1 = 25,
    F2 = 26,
    F3 = 27,
    F4 = 28,
    F5 = 29,
    F6 = 30,
    F7 = 31,
    F8 = 32,
    F9 = 33,
    F10 = 34,
    F11 = 35,
    F12 = 36,
    F13 = 37,
    F14 = 38,
    F15 = 39,
    F16 = 40,
    F17 = 41,
    F18 = 42,
    F19 = 43,
    F20 = 44,
    F21 = 45,
    F22 = 46,
    F23 = 47,
    F24 = 48,
    F25 = 49,
    F26 = 50,
    F27 = 51,
    F28 = 52,
    F29 = 53,

    A = 54,
    B = 55,
    C = 56,
    D = 57,
    E = 58,
    F = 59,
    G = 60,
    H = 61,
    I = 62,
    J = 63,
    K = 64,
    L = 65,
    M = 66,
    N = 67,
    O = 68,
    P = 69,
    Q = 70,
    R = 71,
    S = 72,
    T = 73,
    U = 74,
    V = 75,
    W = 76,
    X = 77,
    Y = 78,
    Z = 79,

    Up = 80,
    Down = 81,
    Left = 82,
    Right = 83,

    LControl = 84,
    RControl = 85,
    Control = 86,

    LAlt = 87,
    RAlt = 88,
    Alt = 89,

    LShift = 90,
    RShift = 91,
    Shift = 92,

    LWindows = 93,
    RWindows = 94,
    Context = 95,

    Tab = 96,
    Esc = 97,
    Enter = 98,
    Space = 99,
    Backspace = 100,
    CapsLock = 101,
    ScrollLock = 102,
    NumLock = 103,

    PageUp = 104,
    PageDown = 105,
    Home = 106,
    End = 107,
    Insert = 108,
    Delete = 109,

    LMouse = 110,
    MMouse = 111,
    RMouse = 112,

    BMouse = 113,
    FMouse = 114,

    ScrollUp = 115,
    ScrollDown = 116,

    VolumeUp = 117,
    VolumeDown = 118,
    Mute = 119,

    NextTrack = 120,
    PrevTrack = 121,
    StopTrack = 122,
    PlayPause = 123,

    Screenshot = 124,

    NoInput = 125,

    Calibrate = 126,

    GyroOn = 127,
    GyroOff = 128,

    GyroInvert = 129,
    GyroInvX = 130,
    GyroInvY = 131,

    GyroTrackball = 132,
    GyroTrackX = 133,
    GyroTrackY = 134,

    Semicolon = 135,
    Apostrophe = 136,
    Comma = 137,
    Period = 138,
    ForwardSlash = 139,
    BackSlash = 140,
    LSquareBracket = 141,
    RSquareBracket = 142,
    Plus = 143,
    Minus = 144,
    Backtick = 145,

    SmallRumble = 146,
    BigRumble = 147
}

export const mkbBindToJsmString = new Map<MkbBind, string>([
    [MkbBind.Key0, '0'],
    [MkbBind.Key1, '1'],
    [MkbBind.Key2, '2'],
    [MkbBind.Key3, '3'],
    [MkbBind.Key4, '4'],
    [MkbBind.Key5, '5'],
    [MkbBind.Key6, '6'],
    [MkbBind.Key7, '7'],
    [MkbBind.Key8, '8'],
    [MkbBind.Key9, '9'],
    [MkbBind.Numpad0, 'N0'],
    [MkbBind.Numpad1, 'N1'],
    [MkbBind.Numpad2, 'N2'],
    [MkbBind.Numpad3, 'N3'],
    [MkbBind.Numpad4, 'N4'],
    [MkbBind.Numpad5, 'N5'],
    [MkbBind.Numpad6, 'N6'],
    [MkbBind.Numpad7, 'N7'],
    [MkbBind.Numpad8, 'N8'],
    [MkbBind.Numpad9, 'N9'],
    [MkbBind.Add, 'ADD'],
    [MkbBind.Subtract, 'SUBTRACT'],
    [MkbBind.Divide, 'DIVIDE'],
    [MkbBind.Multiply, 'MULTIPLY'],
    [MkbBind.Decimal, 'DECIMAL'],
    [MkbBind.F1, 'F1'],
    [MkbBind.F2, 'F2'],
    [MkbBind.F3, 'F3'],
    [MkbBind.F4, 'F4'],
    [MkbBind.F5, 'F5'],
    [MkbBind.F6, 'F6'],
    [MkbBind.F7, 'F7'],
    [MkbBind.F8, 'F8'],
    [MkbBind.F9, 'F9'],
    [MkbBind.F10, 'F10'],
    [MkbBind.F11, 'F11'],
    [MkbBind.F12, 'F12'],
    [MkbBind.F13, 'F13'],
    [MkbBind.F14, 'F14'],
    [MkbBind.F15, 'F15'],
    [MkbBind.F16, 'F16'],
    [MkbBind.F17, 'F17'],
    [MkbBind.F18, 'F18'],
    [MkbBind.F19, 'F19'],
    [MkbBind.F20, 'F20'],
    [MkbBind.F21, 'F21'],
    [MkbBind.F22, 'F22'],
    [MkbBind.F23, 'F23'],
    [MkbBind.F24, 'F24'],
    [MkbBind.F25, 'F25'],
    [MkbBind.F26, 'F26'],
    [MkbBind.F27, 'F27'],
    [MkbBind.F28, 'F28'],
    [MkbBind.F29, 'F29'],
    [MkbBind.A, 'A'],
    [MkbBind.B, 'B'],
    [MkbBind.C, 'C'],
    [MkbBind.D, 'D'],
    [MkbBind.E, 'E'],
    [MkbBind.F, 'F'],
    [MkbBind.G, 'G'],
    [MkbBind.H, 'H'],
    [MkbBind.I, 'I'],
    [MkbBind.J, 'J'],
    [MkbBind.K, 'K'],
    [MkbBind.L, 'L'],
    [MkbBind.M, 'M'],
    [MkbBind.N, 'N'],
    [MkbBind.O, 'O'],
    [MkbBind.P, 'P'],
    [MkbBind.Q, 'Q'],
    [MkbBind.R, 'R'],
    [MkbBind.S, 'S'],
    [MkbBind.T, 'T'],
    [MkbBind.U, 'U'],
    [MkbBind.V, 'V'],
    [MkbBind.W, 'W'],
    [MkbBind.X, 'X'],
    [MkbBind.Y, 'Y'],
    [MkbBind.Z, 'Z'],
    [MkbBind.Up, 'UP'],
    [MkbBind.Down, 'DOWN'],
    [MkbBind.Left, 'LEFT'],
    [MkbBind.Right, 'RIGHT'],
    [MkbBind.LControl, 'LCONTROL'],
    [MkbBind.RControl, 'RCONTROL'],
    [MkbBind.Control, 'CONTROL'],
    [MkbBind.LAlt, 'LALT'],
    [MkbBind.RAlt, 'RALT'],
    [MkbBind.Alt, 'ALT'],
    [MkbBind.LShift, 'LSHIFT'],
    [MkbBind.RShift, 'RSHIFT'],
    [MkbBind.Shift, 'SHIFT'],
    [MkbBind.LWindows, 'LWINDOWS'],
    [MkbBind.RWindows, 'RWINDOWS'],
    [MkbBind.Context, 'CONTEXT'],
    [MkbBind.Tab, 'TAB'],
    [MkbBind.Esc, 'ESC'],
    [MkbBind.Enter, 'ENTER'],
    [MkbBind.Space, 'SPACE'],
    [MkbBind.Backspace, 'BACKSPACE'],
    [MkbBind.CapsLock, 'CAPS_LOCK'],
    [MkbBind.ScrollLock, 'SCROLL_LOCK'],
    [MkbBind.NumLock, 'NUM_LOCK'],
    [MkbBind.PageUp, 'PAGEUP'],
    [MkbBind.PageDown, 'PAGEDOWN'],
    [MkbBind.Home, 'HOME'],
    [MkbBind.End, 'END'],
    [MkbBind.Insert, 'INSERT'],
    [MkbBind.Delete, 'DELETE'],
    [MkbBind.LMouse, 'LMOUSE'],
    [MkbBind.MMouse, 'MMOUSE'],
    [MkbBind.RMouse, 'RMOUSE'],
    [MkbBind.BMouse, 'BMOUSE'],
    [MkbBind.FMouse, 'FMOUSE'],
    [MkbBind.ScrollUp, 'SCROLLUP'],
    [MkbBind.ScrollDown, 'SCROLLDOWN'],
    [MkbBind.VolumeUp, 'VOLUME_UP'],
    [MkbBind.VolumeDown, 'VOLUME_DOWN'],
    [MkbBind.Mute, 'MUTE'],
    [MkbBind.NextTrack, 'NEXT_TRACK'],
    [MkbBind.PrevTrack, 'PREV_TRACK'],
    [MkbBind.StopTrack, 'STOP_TRACK'],
    [MkbBind.PlayPause, 'PLAY_PAUSE'],
    [MkbBind.Screenshot, 'SCREENSHOT'],
    [MkbBind.NoInput, 'NONE'],
    [MkbBind.Calibrate, 'CALIBRATE'],
    [MkbBind.GyroOn, 'GYRO_ON'],
    [MkbBind.GyroOff, 'GYRO_OFF'],
    [MkbBind.GyroInvert, 'GYRO_INVERT'],
    [MkbBind.GyroInvX, 'GYRO_INV_X'],
    [MkbBind.GyroInvY, 'GYRO_INV_Y'],
    [MkbBind.GyroTrackball, 'GYRO_TRACKBALL'],
    [MkbBind.GyroTrackX, 'GYRO_TRACK_X'],
    [MkbBind.GyroTrackY, 'GYRO_TRACK_Y'],
    [MkbBind.Semicolon, ';'],
    [MkbBind.Apostrophe, '\''],
    [MkbBind.Comma, ','],
    [MkbBind.Period, '.'],
    [MkbBind.ForwardSlash, '/'],
    [MkbBind.BackSlash, '\\'],
    [MkbBind.LSquareBracket, '['],
    [MkbBind.RSquareBracket, ']'],
    [MkbBind.Plus, '+'],
    [MkbBind.Minus, '-'],
    [MkbBind.Backtick, '`'],
    [MkbBind.SmallRumble, 'SMALL_RUMBLE'],
    [MkbBind.BigRumble, 'BIG_RUMBLE'],
]);
export const jsmStringToMkbBind = new Map<string, MkbBind>([
    ['0', MkbBind.Key0],
    ['1', MkbBind.Key1],
    ['2', MkbBind.Key2],
    ['3', MkbBind.Key3],
    ['4', MkbBind.Key4],
    ['5', MkbBind.Key5],
    ['6', MkbBind.Key6],
    ['7', MkbBind.Key7],
    ['8', MkbBind.Key8],
    ['9', MkbBind.Key9],
    ['N0', MkbBind.Numpad0],
    ['N1', MkbBind.Numpad1],
    ['N2', MkbBind.Numpad2],
    ['N3', MkbBind.Numpad3],
    ['N4', MkbBind.Numpad4],
    ['N5', MkbBind.Numpad5],
    ['N6', MkbBind.Numpad6],
    ['N7', MkbBind.Numpad7],
    ['N8', MkbBind.Numpad8],
    ['N9', MkbBind.Numpad9],
    ['ADD', MkbBind.Add],
    ['SUBTRACT', MkbBind.Subtract],
    ['DIVIDE', MkbBind.Divide],
    ['MULTIPLY', MkbBind.Multiply],
    ['DECIMAL', MkbBind.Decimal],
    ['F1', MkbBind.F1],
    ['F2', MkbBind.F2],
    ['F3', MkbBind.F3],
    ['F4', MkbBind.F4],
    ['F5', MkbBind.F5],
    ['F6', MkbBind.F6],
    ['F7', MkbBind.F7],
    ['F8', MkbBind.F8],
    ['F9', MkbBind.F9],
    ['F10', MkbBind.F10],
    ['F11', MkbBind.F11],
    ['F12', MkbBind.F12],
    ['F13', MkbBind.F13],
    ['F14', MkbBind.F14],
    ['F15', MkbBind.F15],
    ['F16', MkbBind.F16],
    ['F17', MkbBind.F17],
    ['F18', MkbBind.F18],
    ['F19', MkbBind.F19],
    ['F20', MkbBind.F20],
    ['F21', MkbBind.F21],
    ['F22', MkbBind.F22],
    ['F23', MkbBind.F23],
    ['F24', MkbBind.F24],
    ['F25', MkbBind.F25],
    ['F26', MkbBind.F26],
    ['F27', MkbBind.F27],
    ['F28', MkbBind.F28],
    ['F29', MkbBind.F29],
    ['A', MkbBind.A],
    ['B', MkbBind.B],
    ['C', MkbBind.C],
    ['D', MkbBind.D],
    ['E', MkbBind.E],
    ['F', MkbBind.F],
    ['G', MkbBind.G],
    ['H', MkbBind.H],
    ['I', MkbBind.I],
    ['J', MkbBind.J],
    ['K', MkbBind.K],
    ['L', MkbBind.L],
    ['M', MkbBind.M],
    ['N', MkbBind.N],
    ['O', MkbBind.O],
    ['P', MkbBind.P],
    ['Q', MkbBind.Q],
    ['R', MkbBind.R],
    ['S', MkbBind.S],
    ['T', MkbBind.T],
    ['U', MkbBind.U],
    ['V', MkbBind.V],
    ['W', MkbBind.W],
    ['X', MkbBind.X],
    ['Y', MkbBind.Y],
    ['Z', MkbBind.Z],
    ['UP', MkbBind.Up],
    ['DOWN', MkbBind.Down],
    ['LEFT', MkbBind.Left],
    ['RIGHT', MkbBind.Right],
    ['LCONTROL', MkbBind.LControl],
    ['RCONTROL', MkbBind.RControl],
    ['CONTROL', MkbBind.Control],
    ['LALT', MkbBind.LAlt],
    ['RALT', MkbBind.RAlt],
    ['ALT', MkbBind.Alt],
    ['LSHIFT', MkbBind.LShift],
    ['RSHIFT', MkbBind.RShift],
    ['SHIFT', MkbBind.Shift],
    ['LWINDOWS', MkbBind.LWindows],
    ['RWINDOWS', MkbBind.RWindows],
    ['CONTEXT', MkbBind.Context],
    ['TAB', MkbBind.Tab],
    ['ESC', MkbBind.Esc],
    ['ENTER', MkbBind.Enter],
    ['SPACE', MkbBind.Space],
    ['BACKSPACE', MkbBind.Backspace],
    ['CAPS_LOCK', MkbBind.CapsLock],
    ['SCROLL_LOCK', MkbBind.ScrollLock],
    ['NUM_LOCK', MkbBind.NumLock],
    ['PAGEUP', MkbBind.PageUp],
    ['PAGEDOWN', MkbBind.PageDown],
    ['HOME', MkbBind.Home],
    ['END', MkbBind.End],
    ['INSERT', MkbBind.Insert],
    ['DELETE', MkbBind.Delete],
    ['LMOUSE', MkbBind.LMouse],
    ['MMOUSE', MkbBind.MMouse],
    ['RMOUSE', MkbBind.RMouse],
    ['BMOUSE', MkbBind.BMouse],
    ['FMOUSE', MkbBind.FMouse],
    ['SCROLLUP', MkbBind.ScrollUp],
    ['SCROLLDOWN', MkbBind.ScrollDown],
    ['VOLUME_UP', MkbBind.VolumeUp],
    ['VOLUME_DOWN', MkbBind.VolumeDown],
    ['MUTE', MkbBind.Mute],
    ['NEXT_TRACK', MkbBind.NextTrack],
    ['PREV_TRACK', MkbBind.PrevTrack],
    ['STOP_TRACK', MkbBind.StopTrack],
    ['PLAY_PAUSE', MkbBind.PlayPause],
    ['SCREENSHOT', MkbBind.Screenshot],
    ['NONE', MkbBind.NoInput],
    ['CALIBRATE', MkbBind.Calibrate],
    ['GYRO_ON', MkbBind.GyroOn],
    ['GYRO_OFF', MkbBind.GyroOff],
    ['GYRO_INVERT', MkbBind.GyroInvert],
    ['GYRO_INV_X', MkbBind.GyroInvX],
    ['GYRO_INV_Y', MkbBind.GyroInvY],
    ['GYRO_TRACKBALL', MkbBind.GyroTrackball],
    ['GYRO_TRACK_X', MkbBind.GyroTrackX],
    ['GYRO_TRACK_Y', MkbBind.GyroTrackY],
    [';', MkbBind.Semicolon],
    ['\'', MkbBind.Apostrophe],
    [',', MkbBind.Comma],
    ['.', MkbBind.Period],
    ['/', MkbBind.ForwardSlash],
    ['\\', MkbBind.BackSlash],
    ['[', MkbBind.LSquareBracket],
    [']', MkbBind.RSquareBracket],
    ['+', MkbBind.Plus],
    ['-', MkbBind.Minus],
    ['`', MkbBind.Backtick],
    ['SMALL_RUMBLE', MkbBind.SmallRumble],
    ['BIG_RUMBLE', MkbBind.BigRumble],
]);