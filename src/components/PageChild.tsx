import { FC, useState } from 'react'

interface IProps {
  name?: string
  score?: string
  cb?: any
}

const PageChild: FC<IProps> = (props) => {
  const { name, score } = props
  let [childState] = useState({ state: 'child未登录' });
  return (
    <div>
      <p>父组件传值:{name}{score}</p>
      <button onClick={() => { props.cb(childState) }}>来自组件传值,改变状态</button><br /><br />
    </div>
  );
}

export default PageChild;
