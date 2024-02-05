import { useCookies } from "react-cookie";
import { useState } from "react";

export const useCookie = () => {
  const [inputVal, setInputVal] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);

  const SetCookie = () => {
    //第一引数にcookieの名前、第二引数にcookieの値、第三引数にcookieのオプションを指定
    setCookie("name", inputVal, { path: "/" });
  };
  return {
    inputVal,
    setInputVal,
    cookies,
    SetCookie,
    removeCookie,
  };
};
