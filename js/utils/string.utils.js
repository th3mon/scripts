export const toCamel = (text) => text.replace(/(\-|_[a-z])/g, match => match.toUpperCase().replace(/\-|_/,''));

export const toDash = (text) => text.replace(/([A-Z])/g, match => `-${match.toLowerCase()}`);

export const toUnderscore = (text) => text.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);
