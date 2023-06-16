import { hover } from '@testing-library/user-event/dist/hover';
import React, {FC} from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

    return (
        <div style={{cursor: "pointer"}}>
            {props.items.map(props.renderItem)}
        </div>
    )
}