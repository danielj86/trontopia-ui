class UIHelpers {

    static isMobile() {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }

    static getWindowSize() {
        return { width: $(window).width(), heigth: $(window).height() };
    }

}

export default UIHelpers;