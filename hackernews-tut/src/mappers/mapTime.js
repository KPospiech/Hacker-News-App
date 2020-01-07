export const mapTime = timeStamp => {
    const seconds = Math.floor((new Date() - timeStamp * 1000) / 1000);

    let internal = Math.floor(seconds/ 31536000);

    if(internal > 1 ) {
        return `${internal}years`;
    }
    internal = Math.floor(seconds / 2592000);

    if(internal > 1 ) {
        return `${internal}months`;
    }
    internal = Math.floor(seconds / 86400);

    if(internal > 1 ) {
        return `${internal}days`;
    }
    internal = Math.floor(seconds / 3600);

    if(internal > 1 ) {
        return `${internal}hours`;
    }
    internal = Math.floor(seconds / 60);

    if(internal > 1 ) {
        return `${internal}minutes`;
    }
    return `${Math.floor(seconds)} seconds`

};