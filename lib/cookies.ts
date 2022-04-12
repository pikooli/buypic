import Cookies from "js-cookie";

const set = (name: string, value: string) => {
  Cookies.set(name, value, { expires: 1 });
};

const get = (name: string) => {
  const cookie = Cookies.get(name);
  try {
    if (typeof cookie === "object") return JSON.parse(cookie);
  } catch (e) {
    return null;
  }
  return cookie;
};

const remove = (name: string) => {
  return Cookies.remove(name);
};

const cookie = {
  set,
  get,
  remove,
};

export default cookie;
