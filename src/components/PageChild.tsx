import React, { FC, useState, useEffect, useRef } from 'react'
import './PageChild.less';

interface IProps {
  name?: string
  score?: string
  cb?: any
  isMember: boolean
}

interface IListModel {
  title: string
  subtitle: string
  behavior: string
}

const PageChild: FC<IProps> = (props) => {
  let { name, score, isMember } = props
  let [childState] = useState({ state: 'child未登录' })
  let [backgroundStyle, setBackgroundStyle] = useState('normal-bg')
  let [showElement, setShowElement] = useState(true)
  const cardRef: React.RefObject<any> = useRef()
  const listData: Array<IListModel> = [{
    title: 'java',
    subtitle: '强语言',
    behavior: 'study'
  }, {
    title: 'js',
    subtitle: '弱语言',
    behavior: 'studyhaha'
  }, {
    title: 'delphi',
    subtitle: '强语言',
    behavior: 'yestodystudy'
  },
  {
    title: 'c++',
    subtitle: '强语言',
    behavior: 'darkstudy'
  }]
  const clickItem = (data: IListModel) => {
    console.log('>>>', data)
  }
  const clickItemBeh = (data: IListModel, event: any) => {
    event.stopPropagation();
    console.log('>>>', data.behavior)
  }
  useEffect(() => {
    if (isMember) {
      setBackgroundStyle('member-bg')
    } else {
      setBackgroundStyle('normal-bg')
    }
    // console.log('>>>>', cardRef)
    setTimeout(() => {
      setShowElement(false)
    }, 3000)
  }, [isMember])
  return (
    <div>
      <p style={{ display: showElement ? 'block' : 'none' }}>父组件传值:{name}{score}{String(isMember)}</p>
      <button onClick={() => { props.cb(childState) }}>来自组件传值,改变状态</button><br /><br />
      <div className={`card-wrapper ${backgroundStyle}`} ref={cardRef}></div>
      {listData.map((data, index) =>
        <div key={index} className="list-wrapper" onClick={() => clickItem(data)}>
          <div className="list-title">{data.title}</div>
          <div className="list-subtitle">{data.subtitle}</div>
          <div className="list-behavior" onClick={(event) => clickItemBeh(data, event)}>{data.behavior}</div>
        </div>)}
    </div>
  );
}

export default React.memo(PageChild);
