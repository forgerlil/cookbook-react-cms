import React from 'react';
import LinkCards from './Linkcards';

// Component to be rendered (through React Router) on the root page, when no recipes are being displayed
export default function Introduction({ recipes }) {
    
    return (
        <div className='jumbotron'>
            <h2 className="text-center intro-title" >In the mood for awesome food?</h2>
            <h4 className="text-center p-5 mt-2" >
                Do you enjoy warm and filling meals? Here we offer you some of the best 
                recipes of the food around the world. They are homey and filling, and they
                will let you taste a bit of each country's cuisine, wheter it is a satisfying
                main curse meal or a mouthwatering desert. Their rich taste and and fragrant   
                aromas won't leave you indiferent!
            </h4>
            <div className="row card-section">
				<LinkCards recipe={recipes} />		
			</div>
            
            
        </div>
    )
} 
