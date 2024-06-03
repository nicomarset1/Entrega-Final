import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return(
        <div className="cards">
            <img className='card-img' src={product.image} alt={product.title} />
            <div>
                <h4>{product.title}</h4>
                <p className='abc'>Precio: USD ${product.price}</p>
                <p className='abc'>Categoria: {product.categoryId}</p>
                <Link className='ver-mas' to={`/item/${product.id}`}>Ver Más</Link>
            </div>
        </div>
    )
}

export default Item