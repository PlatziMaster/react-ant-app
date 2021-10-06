import { PageHeader, notification } from "antd";
import { useHistory, useParams } from "react-router-dom";

import ProductForm from "./../forms/product.form";
import { GetCategories } from "./../../services/categories.service";
import {
  CreateProduct,
  GetProduct,
  UpdateProduct,
} from "./../../services/products.service";

function ProductFormPage() {
  const history = useHistory();
  const { id } = useParams();
  const { data: categories, isSuccess } = GetCategories();
  const { data: product, isSuccess: isSuccessProduct } = GetProduct(id, {
    enabled: !!id,
    initialData: null,
  });
  const createMutation = CreateProduct({
    onSuccess: () => {
      history.goBack();
    },
    onError: (response) => {
      notification.error({
        message: "Ups algo salio mal",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      });
    },
  });
  const updatedMutation = UpdateProduct({
    onSuccess: () => {
      history.goBack();
    },
    onError: (response) => {
      notification.error({
        message: "Ups algo salio mal",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      });
    },
  });

  const handleSubmit = (values) => {
    if (id) {
      updatedMutation.mutate({
        id,
        body: values
      });
    } else {
      createMutation.mutate(values);
    }
  };

  return (
    <div>
      <PageHeader title={id ? "Update product" : "New product"} />
      {isSuccess && isSuccessProduct && (
        <ProductForm
          product={product}
          isLoading={createMutation.isLoading || updatedMutation.isLoading}
          categories={categories}
          handleSubmit={handleSubmit}
        ></ProductForm>
      )}
    </div>
  );
}

export default ProductFormPage;
