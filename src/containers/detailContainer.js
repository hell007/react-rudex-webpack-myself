import React, {Component} from 'react'
import {connect} from 'react-redux'


import DetailPage from '../pages/detailPage'

class DetailContainer extends Component {
	
	render() {
	    return (
			<section className="h100 flexColumn" >
				<DetailPage {...this.props} />
			</section>
	    )
  	}
  
  
}


export default connect((state) => {
    return {detailReducer: state.detailReducer};
})(DetailContainer)




