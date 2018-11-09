import React from 'react';
import Item from './Item';
import ModalItem from './ModalItem';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const ItemList = ({ items , isActive }) => (
    <div>
        Items
        {items.map( (item , i) => <Item index={i} {...item} isActive={isActive}/>)}
        {isActive && <ModalItem title={'New Item Properties'} index={-1} />}
    </div>
);

const mapStateToProps = ({ items }) =>  ({items: items});

export default compose( connect(mapStateToProps) )(ItemList);