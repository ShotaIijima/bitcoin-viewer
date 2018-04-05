import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import CoinList from './CoinList'
import CoinChart from './CoinChart'

import { httpGET } from './util/http_client'
import { BINANCE_API_URL_BASE as BASE } from './conf/conf'

export default class  extends Component {
    constructor(props){
        super(props)
        this.state = {
            coins: [],
            selected_coin: '',
        }
    }

    componentDidMount() {
        this.getAllPrices()
    }

    getAllPrices = () => {
        httpGET(BASE + '/allPrices').then(res => {
            res = JSON.parse(JSON.parse(res).result)
            this.setState({ coins: res })
            this.setDefaultSymbol()
        }).catch(err => {
            console.log('getAllPrices fail with ' + err)
        })
    }

    setDefaultSymbol = () => {
        if(this.state.coins.length > 0){
            this.setState({ selected_coin: this.state.coins[0].symbol })
        }
    }

    onCoinListSelect = (symbol) => {
        this.setState({
            selected_coin: this.state.coins.filter(coin => coin.symbol === symbol)[0]
        })
    }

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={3} md={3}>
                        <CoinList coins={this.state.coins} onSelect={ (e)=>{ this.onCoinListSelect(e) } } />
                    </Grid>
                    <Grid item xs={12} sm={9} md={9}>
                        <CoinChart coin={this.state.selected_coin} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}