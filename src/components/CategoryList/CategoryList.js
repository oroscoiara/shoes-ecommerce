import Categories from '../Categories/Categories';
import Row from 'react-bootstrap/esm/Row';

const CategoryList = ({categories}) => {
    return(
        <>
        <Row md={1} className='g-4 mt-2 mb-4 '>
        {categories.map((item) =>{
            return <Categories key={item.id} category={item} />
        })}
        </Row>
        </>
    )
}

export default CategoryList