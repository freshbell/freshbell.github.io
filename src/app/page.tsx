import axios from 'axios'
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  
  let name = 'shin2'
  let link = 'http://google.com'
  // Return 소괄호 안에는 하나의 Html 태그만 존재해야함.
  return (
    <div>
      <h4 className='title'>hello</h4>
      <p className='title-sub'>by dev {name}</p>
    </div>
  )
}
export async function getServerSideProps(context) {
  const options = {
      method:'GET',
      url:`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}`,
      headers:{
          sccpet:'application/json',
          'Notion-version' : '2022-06-28',
          'authorization':process.env.NOTION_API_KEY
      }
  };

  const response = await axios.request(options);
  console.log(response);
};
