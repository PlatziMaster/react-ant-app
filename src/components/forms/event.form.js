import { Form, Input, Button, DatePicker, Select } from "antd";

function EventForm() {

  const initialValues = {
    title: "",
    description: "",
    startAt: "",
    endAt: "",
    type: "",
  };

  const handleOnFinish = (values) => {
    console.log(values);
  };

  const handleOnFinishFailed = () => {};

  return (
    <Form
      name="customer"
      initialValues={initialValues}
      onFinish={handleOnFinish}
      onFinishFailed={handleOnFinishFailed}
      autoComplete="off"
      labelCol={{
        span: 3,
      }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Name is mandatory!",
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
            message: "Address is mandatory!",
          },
        ]}
      >
        <Input.TextArea  />
      </Form.Item>
      <Form.Item label="Start Date" name="startAt">
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Email is mandatory!"
          },
          {
            type: "email",
            message: "It's not valid email"
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Type" name="type">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
          <Select.Option value="demo">Demo 1</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 3,
        }}
      >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
}

export default EventForm;
