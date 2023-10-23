import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
    const ref = useRef();

    useEffect(
        function () {
            function handleClick(e) {
                // 窗口存在，并且鼠标点击不包含此窗口, 当点击窗口之外的页面时触发close事件
                if (ref.current && !ref.current.contains(e.target)) {
                    handler();
                }
            }
            document.addEventListener("click", handleClick, listenCapturing);
            return () => document.removeEventListener("click", handleClick, listenCapturing);
        },
        [handler, listenCapturing],
    );
    return ref
}