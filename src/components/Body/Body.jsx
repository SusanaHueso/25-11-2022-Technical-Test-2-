import {Routes, Route} from 'react-router-dom';

import RecipiesPage from '../../containers/RecipiesPage/RecipiesPage';

const Body = () => {

    return(
        <>
            <Routes>
                <Route path='/' element={<RecipiesPage/>}/>
            </Routes>
        </>
    )
}

export default Body;