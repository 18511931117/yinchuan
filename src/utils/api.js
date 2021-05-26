import { get,post } from "./http"
import QS, { stringify } from "qs"

export const login = (params) => {
    return post('https://api.xhboke.com/ip/v1',QS.stringify(params))
}