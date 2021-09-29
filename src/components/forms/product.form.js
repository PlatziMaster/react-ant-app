import { Form, Input, Button, Select } from "antd";

function ProductForm() {
  const initialValues = {
    title: "",
    price: 0,
    categoryId: "",
    description: "",
  };


  return (
    <Form
      name="productForm"
      initialValues={initialValues}
      onFinishFailed
      labelCol={{
        span: 3,
      }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Title is mandatory",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Description is mandatory",
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Price is mandatory",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Category"
        name="categoryId"
        rules={[
          {
            required: true,
            message: "Category is mandatory",
          },
        ]}
      >
        <Select>
          <Select.Option value='uno'>Uno</Select.Option>
          <Select.Option value='dos'>Dos</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 3,
        }}
      >
        <Button  type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ProductForm;
