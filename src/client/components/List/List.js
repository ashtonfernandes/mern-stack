import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from './ListActions';

class List extends Component {
    constructor(props) {
        // need super to call the parent's class constructor
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        this.props.getItems();
    }

    addItem = () => {
        const name = prompt('Enter item to be added to database');
        if (name) {
            this.setState(state => ({
                items: [...state.items, { id: uuid(), name }]
            }));
        }
    }

    removeItem = (id) => {
        this.setState(state => ({ 
            items: state.items.filter(item => item.id !== id)
        }));
    }

    render() {
        const { items } = this.props.list;
        return (
            <Container>
                <button color="dark" style={{ marginBottom: '2rem' }} onClick={this.addItem}>Add Item</button>
                <ListGroup>
                    <TransitionGroup className="list">
                    {items.map(({id, name}) => (
                        <CSSTransition key={id} timeout={200} classNames="fade">
                            <ListGroupItem>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        // The name items is based on the name what you will define it in the reducer
        list: state.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
