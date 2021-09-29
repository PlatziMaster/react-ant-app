import { useState, useEffect } from "react";
import axios from "axios";
import { PageHeader, List, Card, Spin, Alert } from "antd";


function UsersPage() {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState('female');

  const getUsers = async() => {
    console.log('getUsers', gender); // male
    try {
      setIsLoading(true);
      const response = await axios.get(`https://randomuser.me/api/?results=100&gender=${gender}`);
      const data = response.data;
      const results = data.results;
      setData(results);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  }

  useEffect(()=> {
    getUsers();
  }, [gender]);

  const changeGender = (value) => {
    setGender(value);
  }

  return (
    <div>
      <PageHeader title="User" subTitle="lista de usuarios" />
      <h1>{gender}</h1>
      <button onClick={() => changeGender('female')}>female</button>
      <button onClick={() => changeGender('male')}>Male</button>
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
