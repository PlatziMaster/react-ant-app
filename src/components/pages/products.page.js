import { PageHeader, Button, Image, Table, Space, notification } from "antd";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { GetProducts, DeleteProduct, stateProducts } from "../../services/products.service";


function ProductsPage() {

  const { isLoading, data } = GetProducts();
  const queryClient = useQueryClient();

  const deleteMutation = DeleteProduct({
    onSuccess: (response, id) => {
      // code
      // queryClient.refetchQueries(stateProducts);
      queryClient.setQueryData(stateProducts, data => {
        return data.filter(item => item.id !== id);
      });
    },
    onError: (response) => {
      notification.error({
        message: "Ups algo salio mal",
        description:
          "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
      });
    },
  });

  const handleDelete = (id) => {
    deleteMutation.mutate(id);
  }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => category.name
    },
    {
      title: 'Cover',
      dataIndex: 'images',
      key: 'images',
      render: (images) => {
        const cover = images[0];
        return <Image src={cover} width={100}/>
      }
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      render: (_, item) => {
        return <Space>
          <Link to={`/products/update/${item.id}`}>
            <Button icon={<EditOutlined />}/>
          </Link>
          <Button onClick={() => handleDelete(item.id)} icon={<DeleteOutlined />}/>
        </Space>;
      }
    },
  ];

  return (
    <div>
      <PageHeader title="Products" extra={[
        <Link to="products/new">
          <Button key="add">Add new</Button>
        </Link>
      ]}/>
      <Table loading={isLoading} dataSource={data} columns={columns} />;
    </div>
  );
}

export default ProductsPage;
