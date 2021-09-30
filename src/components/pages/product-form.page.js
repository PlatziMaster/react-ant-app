import { PageHeader, notification } from "antd";
import { useHistory } from "react-router-dom";


import ProductForm from "./../forms/product.form";
import { GetCategories }  from "./../../services/categories.service";
import { CreateProduct }  from "./../../services/products.service";


function ProductFormPage() {
  const history = useHistory();
  const { data, isSuccess } = GetCategories();
  const mutation = CreateProduct({
    onSuccess: () => {
      history.goBack();
    },
    onError: (response) => {
      notification.error({
        message: 'Ups algo salio mal',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    }
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  }

  return (
    <div>
      <PageHeader title="New product"  />
      { isSuccess && <ProductForm isLoading={mutation.isLoading} categories={data} handleSubmit={handleSubmit}></ProductForm> }
    </div>
  );
}

export default ProductFormPage;
