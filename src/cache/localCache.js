import CacheKeys from './localCacheKeys';


class LocalCache {

    static clearSideBets() {
        localStorage.setItem(CacheKeys.SIDE_BETS, '');
    }

    static getSideBets(){
        localStorage.getItem(CacheKeys.SIDE_BETS);
    }

    static getSoundPreference() {
        localStorage.getItem(CacheKeys.SOUNDS);
    }

    static setSoundPreference(soundsOn) {
        localStorage.setItem(CacheKeys.SOUNDS, soundsOn);
    }

    static setSeedValue(seed) {
        localStorage.setItem(CacheKeys.NEW_SEED, seed);
    }

    static getSeedValue() {
        localStorage.getItem(CacheKeys.NEW_SEED);
    }

    static getPreviousBet() {
        localStorage.getItem(CacheKeys.PREVIOUS_FINISH_BET);
    }

    static setPreviousBet(bet) {
        localStorage.setItem(CacheKeys.PREVIOUS_FINISH_BET, bet);
    }

}

export default LocalCache;