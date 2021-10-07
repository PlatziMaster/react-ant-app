import { PageHeader, notification } from "antd";
import { useHistory, useParams } from "react-router-dom";

import ProductForm from "./../forms/product.form";
import { GetCategories } from "./../../services/categories.service";
import { CreateProduct, GetProduct, UpdateProduct } from "./../../services/products.service";

function ProductFormPage() {
  const history = useHistory();
  const { id } = useParams();
  const { data: categories, isSuccess: isSuccessCategories } = GetCategories();
  const { data: product, isSuccess: isSuccessProduct } = GetProduct(id, {
    enabled: id !== undefined,
    initialData: null
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

  const updateMutation = UpdateProduct({
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

  const handleSubmit = (body) => {
    if (id) {
      updateMutation.mutate({ id, body });
    } else {
      createMutation.mutate(body);
    }
  };

  return (
    <div>
      <PageHeader title={id ? "Update product" : "New product"} />
      {(isSuccessCategories && isSuccessProduct) && (
        <ProductForm
          isLoading={createMutation.isLoading || updateMutation.isLoading}
          categories={categories}
          handleSubmit={handleSubmit}
          product={product}
        ></ProductForm>
      )}
    </div>
  );
}

export default ProductFormPage;
