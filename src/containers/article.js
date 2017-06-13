import React, {Component} from 'react'
import {connect} from 'react-redux'
import ArticlePage from '../pages/articlePage'

class Article extends Component {

    render() {
        return (
            <ArticlePage {...this.props} />
        )
    }
}

export default connect((state) => {
    return {articleReducer: state.articleReducer};
})(Article);



// export default connect((state) => {
//     return { articleReducer } = state;
// })(Article);