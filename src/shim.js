// Required to run the Snapshot tests using enzyme-to-json/serializer in React 16

global.requestAnimationFrame = callback => {
    setTimeout(callback, 0);
};
