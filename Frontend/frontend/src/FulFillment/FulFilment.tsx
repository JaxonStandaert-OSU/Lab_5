import data from "./data";

const FulFillment = () => {
  return (
    <div className="content content-margined">
      <div className="order-header">
        <h3>Order FulFillment Status</h3>
      </div>
      <div className="order-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>TOTAL PRICE</th>
              <th>STATUS</th>
              <th>PRODUCTS</th>
            </tr>
          </thead>
          <tbody>
            {data.orders.map((order) => (
              <tr key={order.id} className="bg-red">
                <td>{order.id}</td>
                <td>${order.totalPrice}</td>
                <td>{order.status}</td>
                <td>
                  {order.products.map((product, index) => (
                    <div key={index}>
                      {product.name} (Qty: {product.quantity}, Price: $
                      {product.price})
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FulFillment;
