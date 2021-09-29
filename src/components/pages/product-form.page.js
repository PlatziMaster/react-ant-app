import { PageHeader } from "antd";
import ProductForm from "./../forms/product.form";

function ProductFormPage() {

  return (
    <div>
      <PageHeader title="New product"  />
      <ProductForm></ProductForm>
    </div>
  );
}

export default ProductFormPage;
