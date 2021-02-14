import { writable, get } from 'svelte/store';
import type { Cast } from 'sotenbori-nightlife-island-core';

const initialAnteroom: Cast[] = [];
const thisStore = writable(initialAnteroom);
const { subscribe, update, set } = thisStore;

/**
 * Stateの初期化をする
 * @param casts
 */
const initialize = (casts: Cast[]) => set(casts);

/**
 * 控えにキャストを追加する
 * @param addCast
 */
const inAnteroom = (addCast: Cast): void => {
    update((currentAnteroom: Cast[]) => [...currentAnteroom, addCast]);
};

/**
 * 控えからキャストを外す
 * @param outCastIndex
 */
const outAnteroom = (outCastIndex: number) => {
    update((currentAnteroom: Cast[]) => {
        const cloneArr = [...currentAnteroom];
        cloneArr.splice(outCastIndex, 1);
        return cloneArr;
    });
};

/**
 * 控室にいるキャストと対応しているキャストを入れ替える
 * @param indexOfCastToChangeInAnteroom
 * @param castNewlyEnterAnteroom
 */
const castChange = (
    indexOfCastToChangeInAnteroom: number,
    castNewlyEnterAnteroom: Cast
): Cast => {
    const currentAnteroom = get(thisStore);
    const outCastInAnteroom = currentAnteroom[indexOfCastToChangeInAnteroom];

    update((currentAnteroom: Cast[]) => {
        const cloneArr = [...currentAnteroom];
        cloneArr.splice(
            indexOfCastToChangeInAnteroom,
            1,
            castNewlyEnterAnteroom
        );
        return cloneArr;
    });

    return outCastInAnteroom;
};

export const anteroom = {
    subscribe,
    initialize,
    in: inAnteroom,
    out: outAnteroom,
    change: castChange,
};
