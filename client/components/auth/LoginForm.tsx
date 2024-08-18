import {FC} from "react";
import {Button, Form, Input, notification} from "antd";
import {ILoginDTO} from "@/api/dto/ILoginDto";
import { auth } from "@/api";
import {setCookie} from "nookies";
import styles from "./Auth.module.scss"

export const LoginForm: FC = () => {
    const onSubmit = async (values: ILoginDTO) => {
        console.log(values)
        try {
            const {token} = await auth.login(values);

            notification.success({
                message: "Login",
                description: "You have been logged in successfully",
            })

            setCookie(null, "_token", token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            })
            location.href = "/dashboard";
        } catch (err) {
            console.warn("LoginForm", err);

            notification.error({
                message: "Error",
                description: "Wrong email or password",
                duration: 2,
            });
        }
    }
    return (
        <div className={styles.formBlock}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Enter email",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Enter password",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}