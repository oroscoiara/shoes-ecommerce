import Categories from '../Categories/Categories';

const CategoryList = ({categories}) => {
    return(
        <>
        {categories.map((category) =>{
            return <Categories key={category.id} category={category} />
        })}
        </>
    )
}

export default CategoryList