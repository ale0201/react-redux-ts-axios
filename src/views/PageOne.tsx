import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { queryInvestInfo } from '../service/index';
import PageChild from '../components/PageChild'

const mapStateToProps = (state: any) => ({ status: state.reducers.data })
const mapDispatchToProps = {
  login: () => ({ type: 'login', data: { loginState: 'has-login' } }),
}

const PageOne: FC = (props, state) => {
  const { status, login } = props as any
  let [loginState, changeLogin] = useState({ state: '未登录' })
  let [memberState] = useState({ state: true })
  const change = () => {
    loginState = { ...loginState, state: '已登录' }
    changeLogin(loginState)
  }
  const handleChild = (value: any) => {
    loginState = { ...loginState, ...value }
    changeLogin(loginState)
  }
  useEffect(() => {
    queryInvestInfo(1001, {})
      .then((res: any) => {
        if (res && res.info && res.info.reasonList) {
          // const reasonList = res.info.reasonList
          // console.log('>>>', reasonList)
        }
      })
      .catch(err => {
        // console.log('>>>', err)
      })
    return function cleanup() {
      // 下次执行前先执行

    };
  }, []);
  return (
    <div>
      <p>redux状态:{status.loginState}</p>
      <p>页面状态:{loginState.state}</p>
      <Link to="/PageTwo" style={{ color: 'black' }}>
        <div>点击跳转到Page2</div>
      </Link>
      <button onClick={login}>redux改变状态</button><br /><br />
      <button onClick={change}>page改变状态</button><br /><br />
      <PageChild name='1' score='2' cb={handleChild} isMember={memberState.state} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(PageOne)
