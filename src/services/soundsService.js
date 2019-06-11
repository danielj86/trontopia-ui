import store from '../store';
import cache from '../cache/localCache';

class SoundService {

    static initSound() {
        let soundPreference = cache.getSoundPreference();
        let isOn = soundPreference == "on";
        store.commit('SET_SOUND_STATE', isOn);
    }

    static toggleSound() {
        store.commit('SET_SOUND_STATE', !store.state.soundIsOn);
    }

    static playLossSound() {
        if (store.state.soundIsOn) {
            const audio = new Audio('assets/audio/loss.mp3');
            audio.play();
        }
    }

    static playWinSound() {
        if (store.state.soundIsOn) {
            const audio = new Audio('assets/audio/loss.mp3');
            audio.play();
        }
    }
}


export default SoundService;