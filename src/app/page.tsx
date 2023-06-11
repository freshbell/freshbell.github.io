import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  
  let name = 'shin2'
  // Return 소괄호 안에는 하나의 Html 태그만 존재해야함.
  return (
    <div>
      <h4 className='title'>hello</h4>
      <p className='title-sub'>by dev {name}</p>
    </div>
  )
}