import React from 'react';
import Card from './Card';

function List(props){
    const cardLis = props.cards.map(item => <li key={item.key}>
        <Card title={item.title} content={item.content}></Card>
    </li>)
    return(
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
                <div className="List-cards">
                    <ul>
                        {cardLis}
                    </ul>
                </div>
            </header>

        </section>
    )
}

export default List;