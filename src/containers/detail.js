import React, {Component} from 'react'
import {connect} from 'react-redux'
import DetailPage from '../pages/detailPage'

class Detail extends Component {

    render() {
        return (
            <DetailPage {...this.props} />
        )
    }
}

export default connect((state) => {
    return {detailReducer: state.detailReducer};
})(Detail);
