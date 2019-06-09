import CacheKeys from './localCacheKeys';


class LocalCache {

    static clearSideBets() {
        localStorage.setItem(CacheKeys.SIDE_BETS, '');
    }

    static getSoundPreference() {
        localStorage.getItem(CacheKeys.SOUNDS);
    }

    static setSoundPreference(soundsOn) {
        localStorage.getItem(CacheKeys.SOUNDS, soundsOn);
    }

}

export default LocalCache;