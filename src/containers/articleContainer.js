import React, {Component} from 'react'
import {connect} from 'react-redux'

import ArticlePage from '../pages/articlePage'

class ArticleContainer extends Component {
	
	render() {
	    return (
			<section className="h100 flexColumn" >
				<ArticlePage {...this.props} />
			</section>
	    )
  	}
 
}

export default connect((state) => {
    return {articleReducer: state.articleReducer};
})(ArticleContainer)

