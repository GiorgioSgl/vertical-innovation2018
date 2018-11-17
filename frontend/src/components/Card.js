import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {

    const linkobj = {
        name: props.name,
        description: props.desc,
        image: props.img
    };

    return (
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
            <div className={'card text-center border-' + props.color + 'text-' + props.color}>
                <div className='card-header'>
                    <h1 className={'display-4 text-' + props.color}>
                        {props.name}
                    </h1>
                </div>
                <img className='card-img-top' src={props.img} alt='' />
                <div className='card-body'>
                    <p className='card-text display-5'>{props.desc}</p>
                    <div className={'card-footer border-' + props.color}>
                        <Link to={{ pathname: '/points', state: linkobj }}><button type='button' className={'btn btn-' + props.color}>Choose This One</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Card;