class TronHelper {
   
    static waitForTronWeb(interval) {
        return new Promise((resolve, reject) => {

            let rounds = interval / 500;
            let i = 0;

            let tronCheckTimeout = window.setTimeout(() => {

                if (window.tronWeb && window.tronWeb.ready) {
                    window.clearTimeout(tronCheckTimeout);
                    resolve(true);
                }
                else {
                    if (i < rounds) {
                        reject({});
                    }
                }
                i++;
            }, 500);

        });
    }
}


export default TronHelper;