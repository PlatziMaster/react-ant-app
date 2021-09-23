import { Button, Spin, Checkbox, Divider } from "antd";
import { useQueryClient } from "react-query";

import { GetTodos } from "./../../services/todos.service";
import { stateUsers } from "./../../services/users.service";
import './demo.css';

function DemoPage() {
  const { status, data } = GetTodos({
    initData: [],
  });
  const client = useQueryClient();
  const users = client.getQueryData(stateUsers);
  return (
    <div className="DemoPage">
      <h1>Users ({users?.length})</h1>
      <Button type="primary">Button</Button>
      <Divider />
      {status === "loading" ? (
        <Spin />
      ) : (
        data.map((todo) => (
          <>
            <p>
              <Checkbox checked={todo.completed}>{todo.title}</Checkbox>
            </p>
            <Divider />
          </>
        ))
      )}
    </div>
  );
}

export default DemoPage;
