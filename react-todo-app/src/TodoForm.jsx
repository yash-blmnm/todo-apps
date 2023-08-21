import React, { useContext, useRef, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import { TodoContext } from './App';



const TodoForm = () => {
    const formRef = useRef(null);
    const {todos, updateTodos} = useContext(TodoContext)
    const onFinish = (values) => {
        updateTodos([...todos, {...values, status: 0}]);
        formRef.current?.resetFields();
    };
    useEffect(() => {
        formRef.current?.getFieldInstance('task').focus();
    }, [todos.length])
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (<Form
        name="basic"
        ref={formRef}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{  }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="New Item"
            name="task"
            rules={[{ required: true, message: 'Please input your todo item!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
            Add
        </Button>
        </Form.Item>
    </Form>)
};

export default TodoForm;