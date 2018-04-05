import React, { Component } from 'react'
import './CoinChart.css'

import { httpPOST } from './util/http_client'
import { BINANCE_API_URL_BASE as BASE } from './conf/conf'

export default class  extends Component {
    constructor(props){
        super(props)
    }

    getCoinDetail = () => {
        httpPOST(BASE + '/detail', JSON.stringify({"symbol": this.props.coin.symbol})).then(res => {
            res = JSON.parse(JSON.parse(res).result)
            console.log(res)
            return res
        }).catch(err => {
            console.log(err)
            return {}
        })
    }

    render() {
        const coin_detail = this.getCoinDetail()
        return (
            <div className="chart">
                {   coin_detail &&
                    Object.keys(coin_detail).map(key => (
                        <div>{key} : {coin_detail[key]}</div>
                    ))
                }
            </div>
        )
    }
}