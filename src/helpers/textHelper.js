class TextHelper{

    static number_to_2decimals(str)
    {
        str = str.toString();
        const decimalPointIndex = str.indexOf(".");
        if (decimalPointIndex === -1) return str + ".00";
        return (str+"00").substr(0, decimalPointIndex+3);
    }

}

export default TextHelper;