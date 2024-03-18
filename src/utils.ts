const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const isSingular = (length: number) => length > 0 && length < 2;

export {capitalize, isSingular};
