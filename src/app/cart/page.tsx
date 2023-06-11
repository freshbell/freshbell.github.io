// Client Component에서 JavaScript 기능을 사용하기 위해서, 없으면 Server Component
// useEffect 등을 사용할 수 있음
// 'use client'

import CartItem from "@/components/cartitem";

export default await function Cart() {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* <h4 onClick={()=>console.log("1")}>use Client</h4> */}
            {
                // result.map
            }
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
        </div>
    )
}

