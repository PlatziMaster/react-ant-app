import { PageHeader, Button, Image, Table } from "antd";
import { Link } from "react-router-dom";
import { GetProducts } from "../../services/products.service";


function ProductsPage() {

  const { isLoading, data } = GetProducts();

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
