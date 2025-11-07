export const isEmail = (v) => /\S+@\S+\.\S+/.test(v || "");
export const isPhone = (v) => /^[0-9+\-\s()]{7,20}$/.test(v || "");
export const isNonEmpty = (v) => String(v || "").trim().length > 0;
