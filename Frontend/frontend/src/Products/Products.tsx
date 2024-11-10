import data from "./data";
const Products = () => {
  return (
    <div className="content">
      <ul className="products">
        {data.products.map((product) => (
          <li className="product">
            <div className="product">
              <img
                src={product.imageUrl}
                alt="product"
                className="product-image"
              />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.price}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.numberOfReviews} Reviews )
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
