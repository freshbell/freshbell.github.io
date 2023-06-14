'use client'

import React, {useRef, RefObject, useEffect} from 'react';
// import example from './ex02';

export default function Three() {
    
    // 특정 Dom을 가리킬 때 사용하는 Hook 함수 => useRef
    const canvasRef:RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        // example(canvasRef);
    })

    return (
        <div>
            <canvas ref={canvasRef} width="300" height="300">

            </canvas>
        </div>
    )
}