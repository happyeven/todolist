import React from 'react'
import { addItemAction, deleteItemAction, markItemAction } from '../../actions'
import { connect } from 'react-redux';
import Item from '../Item';
import Api from '../../api/Api'
class InputText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.initList()
    }
    initList = () => {
        let that = this
        Api.getToDoList().then(res=>{
            console.log(res.data)
            for(var key in res.data){
                that.props.addItem(res.data[key].content,res.data[key].status,res.data[key].id)
            }
        })
    }
    onChange = (event) => {
        this.setState({ text: event.target.value })
    }

    onAdd = () => {
        this.props.addItem(this.state.text,false)
    }

    onDeleteItem = (index) => {
        this.props.deleteItem(index)
    }

    onMark =(index) =>{
        this.props.markItem(index)
    }
    render() {
        return (
            <div>
                <input onBlur={this.onChange} />
                <button onClick={this.onAdd}>add</button>
                {
                    this.props.texts.map((val, key) => <Item
                        key={key} index={key} text={val.content} onDelete={this.onDeleteItem} remoteId = {val.id}
                        done={val.done} markItem={this.onMark} initList = {this.initList}
                    />)
                }

            </div>
        )
    }
}
const mapStateToProps = state => {
    return { texts: state.texts };
}

const mapDispatchToProps = ({
    addItem: addItemAction,
    deleteItem: deleteItemAction,
    markItem: markItemAction

})


export default connect(mapStateToProps, mapDispatchToProps)(InputText)