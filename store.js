import { createStore } from 'zustand/vanilla';
import dialogPolyfill from 'dialog-polyfill';

import { persist, createJSONStorage } from 'zustand/middleware'

export const levels = [10,25,45,80,120,160,200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800,840,880,920,960,1000,1040,1080,1120,1160,1200,1240,1280,1320,1360,1400,1440,1480,1520,1560,1600,1640,1680,1720,1760,1800,1840,1880,1920,1960,2000,2040,2080,2120,2160,2200,2240,2280,2320,2360,2400,2440,2480,2520,2560,2600,2640,2680,2720,2760,2800,2840,2880,2920,2960,3000,3040,3080,3120,3160,3200,3240,3280,3320,3360,3400,3440,3480,3520,3560,3600,3640,3680,3720,3760,3800,3840];

export const getLevel = (xp) => {
  for (let index = 0; index < levels.length; index++) {
    if (xp < levels[index]) return index;
  }
}

const DEFAULT_STORE = {
  muffinLvl: 1,
  muffinXP: 0,
  weeklyXP: 0,
  muffin: 1,
  muffinTimestamp: undefined,
  sinceMuffinTimestamp: undefined,
};

const DAY = 86400
const WEEK = 86400*7

// export const store = createStore((set, get) => ())


export const store = createStore(
  persist(
    (set, get) => ({
      state: {...DEFAULT_STORE},
      addPoints: (num) => {
        const stats = get().state;
        stats.muffinXP += num;

        if (!stats.sinceMuffinTimestamp) {
          stats.sinceMuffinTimestamp = Date.now();
        }
        if (Date.now() - stats.muffinTimestamp > DAY ) {
          const num = Math.floor(Date.now() - stats.muffinTimestamp)
          stats.muffin -= num;
          if (stats.muffin < 1) stats.muffin = 1;
        }

        stats.muffinTimestamp = Date.now();

        const lastLevel = getLevel(stats.muffinXP)
        stats.muffinXP += num;
        stats.muffinLvl = getLevel(stats.muffinXP);

        if (lastLevel < getLevel(stats.muffinXP) && stats.muffin < 5) {
          stats.muffin++;
        }

        if (stats.muffinXP >= levels[levels.length -2]) {
          alert(`You have won "I'm just a little muffin"! You have reached max level and will not be able to level again without the game exploding. Please create a new character. Honestly, I had no idea somone would play this enough to reach this level. Congratulations!`);
        }
        if (num === 30) {
          window.confettiBomb();
          const audio = new Audio('./lvl.mp3');
          audio.play();
          const dialog = document.getElementById('dialog-level-up');
          dialogPolyfill.registerDialog(dialog);
          dialog.showModal();
        } else {
          const audio = new Audio('./xp.mp3');
          audio.play();
        }
        set({ state: stats });
      },
      resetGame: () => {
        const stats = get().state;
        stats.image=undefined;
        stats.muffinLvl= 1;
        stats.muffinXP= 0;
        stats.muffin= 1;
        stats.muffinTimestamp =undefined;
        stats.sinceMuffinTimestamp= undefined;
        set({ state: stats});
      },
    }),
    {
      name: 'task-quest-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
