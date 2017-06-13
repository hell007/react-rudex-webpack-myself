import React, {Component} from 'react'
import { Row, Col } from 'antd'


//自定义组件、css
import Mine from '../components/mine'
import Navigation from '../components/navigation'


export default class App extends Component {
  render() {
  	
    return (

		<section className="h100 flexColumn wrap" >
			<section className="wrapBox">
				<Row gutter={16}>
					<Col className="gutter-row" span={7} >
						<Mine />
					</Col>
					<Col className="gutter-row" span={15}>
						{this.props.children}
					</Col>
					<Col className="gutter-row" span={2}>
						<Navigation pathname={this.props.location.pathname} />
					</Col>
				</Row>
			</section>
		</section>
    )
  }
}