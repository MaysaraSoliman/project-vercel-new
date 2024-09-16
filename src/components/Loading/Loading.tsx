import { Flex, Spin } from 'antd';
import "./loading.css"
export default function Loading() {
  return (
    <Flex align='center' justify='center' id='loadingSpin'>
         <Spin tip="Loading" size="large" >
         <p>This is some content that might take time to load.</p>
           </Spin>
    </Flex >
  )
}
