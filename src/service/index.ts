import httpRequest from './httpRequest'

// NPS-查询评级问题、答案相关信息
export function queryInvestInfo(investId: number, params: object) {
  return httpRequest.get(`/api/operation/nps/queryInvestInfo/${investId}`, params)
}