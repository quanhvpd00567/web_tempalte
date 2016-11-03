import React from 'react';

var Input = React.createClass({
    render: function(){
        return (
            <input type="text" id={this.props.id} className={this.props.class} defaultValue={this.props.value} />
        );
    }
});
export default Input;