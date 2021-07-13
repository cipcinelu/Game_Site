import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode:false,
    }
    
    activateEditMode = () => {
        this.setState({ // это асинхронный метод
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    render() {
        return <div>
            {!this.state.editMode &&
            <div className="div">
                <span onClick = {this.activateEditMode}>{this.props.status}</span>
            </div>
            }           
            {this.state.editMode &&
            <div className="div">
                <input autoFocus = {true} onBlur = {this.deactivateEditMode} value={this.props.status} />
            </div>
            }
        </div>
    }
}

export default ProfileStatus;