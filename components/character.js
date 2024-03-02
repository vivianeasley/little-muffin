import {html} from 'uhtml';
import {store} from "../store";
import dialogPolyfill from 'dialog-polyfill';

const { getState } = store;
const state = getState().state;
const addPoints = getState().addPoints;
const resetGame = getState().resetGame;

export const character = () => {
  return html`
<div>
  <div class="nes-container muffin-wrapper">
    <img class="muffin-img" src=${`./muffins/${state.muffin}.png`} />
    <div>
      <div>
      <button type="button" class="nes-btn is-success muffin-button" onclick=${()=>addPoints(5)}>
      <span class="muffin-coin">5x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Just a little muffin</span>
      </button>
      <button type="button" class="nes-btn is-primary muffin-button" onclick=${()=>addPoints(10)}>
      <span class="muffin-coin">10x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Why a little muffin?</span>
      </button>
      <button type="button" class="nes-btn is-primary muffin-button" onclick=${()=>addPoints(15)}>
      <span class="muffin-coin">15x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Mean to a muffin?</span>
      </button>
      <button type="button" class="nes-btn is-primary muffin-button" onclick=${()=>addPoints(30)}>
      <span class="muffin-coin">30x<i class="nes-icon coin is-small"> </i></span><span class="button-text">Muffin compassion!</span>
      </button>
      <div onclick=${()=>{
        const dialog = document.getElementById('dialog-help');
        dialogPolyfill.registerDialog(dialog);
        dialog.showModal();
      }}>
        Help?
      </div>
    </div>
  </div>
  <dialog class="nes-dialog" id="dialog-help">
      <form method="dialog">
          <p class="title">How to play "I'm just a little muffin"</p>
          <p>
            <b>Just a little muffin (5 points):</b><br/>
            If you have done something and you are feeling bad about yourself, ashamed, or guilty, cut yourself a break and say to yourself "I'm just a little muffin". This can also be applied to other people. Someone cuts you off in traffic. Try to say "They're just a little muffin" and score 5 points!
          </p>
          <p>
          <b>Why a little muffin (10 points):</b><br/>
            Explain why you or someone else is just a little muffin. For example you spent too much time on your phone and now feel bad about yourself. Tell yourself, "I'm just a little muffin seeking dopamine. I'm doing my best".
          </p>
          <p>
          <b>Mean to a muffin? (15 points):</b><br/>
            If you've thought mean things about yourself or had an inner voice say mean or judgmental things to you, instead reframe it. Would you say those things to someone you loved? Would someone who you cared about deserve that? 
          </p>
          <p>
          <b>Muffin compassion! (30 points):</b><br/>
            Talk to yourself with compassion as you would talk to someone you cared deeply about. Talk with undertsanding, support, and love.
          </p>
          <p>
            <button onclick=${resetGame}>Reset Game</button>
          </p>
          <menu class="dialog-menu">
              <button class="nes-btn is-primary" onclick=${()=>console.log("done")}>Thanks!</button>
          </menu>
      </form>
  </dialog>
  <div>
</div>

`}
