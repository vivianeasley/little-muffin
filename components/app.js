import {store, getLevel} from "../store";
import {html} from 'uhtml';
import {character} from './character';

const affirmation = ["You're amazing! Keep at it!","You are good person who deserves love!","You're 1 in a million. Keep up the good work."]

const { getState } = store;
const state = getState().state;

export const app = () => {
return html`
    <div class="game-wrapper">
        <div class="background"></div>
        <header>
            <div class="stats">
                <span><i class="nes-icon coin is-small"></i></i> XP:${state.muffinXP}</span>
                <span><i class="nes-icon is-small star"></i> LVL:${getLevel(state.muffinXP)}</span>
            </div>
        </header>
        <main>
            ${html`${character()}`}
        </main>
        <dialog class="nes-dialog" id="dialog-level-up">
            <form method="dialog">
            <p class="title">You are doing great!</p>
            <p>${affirmation[Math.floor(Math.random() * affirmation.length)]}</p>
            <menu class="dialog-menu">
                <button class="nes-btn is-primary">Yay</button>
            </menu>
            </form>
        </dialog>

    </div>
`}