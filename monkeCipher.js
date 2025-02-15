"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMonkeCipher = void 0;
//Highly secure encryption algorithm developed by AnshulK and LehuyH
const key = { a: 'monke', b: 'mooonke', c: 'mmonke ', d: 'monnke', e: 'monnkee', f: 'moonnkke', g: 'monnnnke', h: 'mmmmonke', i: 'mmonnkeeee', j: 'mononke', k: 'monnoke', l: 'mmonnkkeee', m: 'mone', n: 'mo', o: 'monn', p: 'moke', q: 'monek', r: 'monnekk', s: 'monen', t: 'monkek', u: 'monneke', v: 'm', w: 'onke', x: 'on', y: 'n', z: 'e', };
function toMonkeCipher(str) {
    const startStr = str.toLowerCase();
    return startStr
        .split('')
        .map((e) => key[e] || ' ')
        .join('');
}
exports.toMonkeCipher = toMonkeCipher;