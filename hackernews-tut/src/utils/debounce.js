export const debounce = (func, wait, immidiate, args) => {
    let timeout;

    return () => {
        const context = this;
        const callNow = immidiate && !timeout;
        const later = () => {
            timeout = null;
            if(!immidiate) func.apply(context, args)

        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, wait);
    }
}