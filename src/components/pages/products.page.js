import { PageHeader, Button } from "antd";
import { Link } from "react-router-dom";


function ProductsPage() {

  return (
    <div>
      <PageHeader title="Products" extra={[
        <Link to="products/new">
          <Button key="add">Add new</Button>
        </Link>
      ]}/>
    </div>
  );
}

export default ProductsPage;
