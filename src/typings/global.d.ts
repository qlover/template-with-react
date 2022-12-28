type SameString = string | number;

type PlainObject<V = any> = { [key: string]: V };

/** 扩展 Window */
declare interface Window extends Window {}
