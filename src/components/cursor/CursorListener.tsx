"use client";
import { useEffect } from "react";
import { cursorStore } from "@/lib/cursorStore";

export default function CursorListener() {
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            cursorStore.x = (e.clientX / window.innerWidth) * 2 - 1;
            cursorStore.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", onMove, { passive: true });
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
    return null;
}
