'use client'

import React, {useRef, RefObject, useEffect} from 'react';
import example1 from './ex01';
import example2 from './ex02';
import example3 from './ex03';
// import example4 from './ex04';
import example5 from './ex05';
import example6 from './ex06';
import example7 from './ex07';
import example8 from './ex08';


export default function Three() {
    
    // 특정 Dom을 가리킬 때 사용하는 Hook 함수 => useRef
    const canvasRef:RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
    
	useEffect(() => {
        example8(canvasRef);
    })

    return (
        <div>
            <canvas ref={canvasRef} >

            </canvas>
        </div>
    )
}