import React, { Component } from 'react'
import './CoinChart.css'

import { httpPOST } from './util/http_client'
import { BINANCE_API_URL_BASE as BASE } from './conf/conf'

export default class  extends Component {
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
        if(Object.keys(nextProps.coin).length != 0){
            console.log(nextProps.coin.symbol)
            //TODO: コインの詳細情報を取得する処理を入れる
        }
    }

    render() {
        return (
            <div className="chart">
                {
                    Object.keys(this.props.coin).length === 0 &&
                    <div>コインを選択してください</div>
                }
                {
                    Object.keys(this.props.coin).map(key => (
                        <div>{key} : {this.props.coin[key]}</div>
                    ))
                }
            </div>
        )
    }
}