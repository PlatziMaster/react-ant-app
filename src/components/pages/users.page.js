import { PageHeader, List, Card, Spin, Alert } from "antd";
import useGetUsers from "./../../hooks/getUsers";
import { GetUsers } from "./../../services/users.service";

function UsersPage() {
  const { data, isLoading, isError, isSuccess } = GetUsers();

  return (
    <div>
      <PageHeader title="User" subTitle="lista de usuarios" />

      { isLoading && <Spin /> }
      { isError &&  <Alert message="Error Text" type="error" /> }
      { isSuccess && <List
        grid={{ gutter: 16, column: 5 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src={item.picture.large}
                />
              }
            >
              <Card.Meta title={`${item.name.title} ${item.name.first}`} description={item.email} />
            </Card>
          </List.Item>
        )}
      /> }

    </div>
  );
}

export default UsersPage;
