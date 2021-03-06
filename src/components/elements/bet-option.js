import React, { Component } from 'react'
import Translate from '../../../libs/translate'

export default class BetOption extends Component { 
  /*
    @props string betName
    @props float odds
    @props boolean disabled
  */

  constructor (props) {
    super(props)

    this._onClick = this._onClick.bind(this)
  }

  _onClick () {
    if(this.props.disabled || !this.props.odds) {
      return
    }

    this.props.onClick()
  }

  renderBadge() {
    let self = this
    
    if(this.props.showingWinner) {
      return (
        <span className="badge">{
          <span className={this.props.winner ? 'won': 'lost'}>
            {this.props.winner ? 'won' : 'lost'}
          </span>
        }</span>
      )
    }

    if(this.props.loading) {
      return (
        <span className="badge">{
          <img src="https://betgames9.betgames.tv/design/images/ajax-loader.gif" />
        }</span>
      )
    } else {
      return (
        <span className="badge">{
          this.props.odds ?
            this.props.odds.toFixed(2)
            :
            'lost'
        }</span>
      )
    }
  }

  render() {
    return (
      <a href="javascript:void(0)" 
        className={"team list-group-item " + (this.props.disabled || !this.props.odds ? 'disabled ' : 'enabled ') + (this.props.active ? 'active' : '')} 
        onClick={this._onClick}>
        <span className="fav glyphicon glyphicon-star-empty" data-toggle="tooltip" data-placement="top" title="" data-original-title="You are not logged in"></span>
        <span className="odd-name capitalized">
          {Translate(this.props.betName)}
        </span>

        { this.renderBadge() }


      </a>
    )
  }

}
