import store from '../store';
import cache from '../cache/localCache';

class SoundService {

    static initSound() {
        let soundPreference = cache.getSoundPreference();
        let isOn = soundPreference == "on";
        store.commit('SET_SOUND_STATE', isOn);
    }

    static toggleSound(){
        store.commit('SET_SOUND_STATE', !store.state.soundIsOn);
    }
}


export default SoundService;