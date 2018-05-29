import React, {Component} from 'react';
import  styles from  './style.mcss'
import './style.css'
import {connect} from 'react-redux'
class CommonWrapper extends Component {
    render() {
        return (
            <div>
            <div className={styles.header}>
            </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
   
}

export default connect(null, null)(CommonWrapper)
