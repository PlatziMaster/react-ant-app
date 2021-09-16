import { Form, Input, Button, DatePicker, Select } from 'antd';

function EventForm() {

  const initialValues = {
    title: '',
    description: '',
    startAt: '',
    endAt: '',
    type: '',
  };

  const handleOnFinish = (values) => {
    console.log(values);

  }

  return (
    <Form
      name="eventForm"
      initialValues={initialValues}
      onFinish={handleOnFinish}
      onFinishFailed
      labelCol={{
        span: 3
      }}
      >
      <Form.Item label="Title" name="title" rules={[
        {
          required: true,
          message: 'Title is mandatory'
        }
      ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Description" name="description" rules={[
        {
          required: true,
          message: 'Description is mandatory'
        }
      ]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item label="Start Date" name="startAt" rules={[
        {
          required: true,
          message: 'Start Date is mandatory'
        }
      ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date" name="endAt" rules={[
        {
          required: true,
          message: 'End Date is mandatory'
        }
      ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Type" name="type" rules={[
        {
          required: true,
          message: 'Type is mandatory'
        }
      ]}>
        <Select>
          <Select.Option value="live">Live</Select.Option>
          <Select.Option value="workshop">Workshop</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{
        offset: 3
      }}>
        <Button type="primary" htmlType="submit"> Enviar </Button>
      </Form.Item>
    </Form>
  );
}

export default EventForm;
