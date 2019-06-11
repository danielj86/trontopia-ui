import CacheKeys from './localCacheKeys';

class LocalCache {

    static clearSideBets() {
        return localStorage.setItem(CacheKeys.SIDE_BETS, '');
    }

    static getSideBets() {
        return localStorage.getItem(CacheKeys.SIDE_BETS);
    }

    static getSoundPreference() {
        return localStorage.getItem(CacheKeys.SOUNDS);
    }

    static setSoundPreference(soundsOn) {
        return localStorage.setItem(CacheKeys.SOUNDS, soundsOn);
    }

    static setSeedValue(seed) {
        return localStorage.setItem(CacheKeys.NEW_SEED, seed);
    }

    static getSeedValue() {
        return localStorage.getItem(CacheKeys.NEW_SEED);
    }

    static getPreviousBets() {
        let previoudBets = localStorage.getItem(CacheKeys.PREVIOUS_FINISH_BET);
        return JSON.parse(previoudBets);
    }

    static setPreviousBets(bets) {
        let betsStr = JSON.stringify(bets);
        return localStorage.setItem(CacheKeys.PREVIOUS_FINISH_BET, betsStr);
    }
}

export default LocalCache;