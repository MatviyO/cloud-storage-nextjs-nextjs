import {FC} from "react";
import {Button, Form, Input, notification} from "antd";
import { auth } from "@/api";
import {setCookie} from "nookies";
import styles from "./Auth.module.scss"
import {IRegisterDTO} from "@/api/dto/IRegisterDto";

export const RegistrationForm: FC = () => {
    const onSubmit = async (values: IRegisterDTO) => {
        console.log(values)
        try {
            const {token} = await auth.register(values);

            notification.success({
                message: "Register",
                description: "You have been registered successfully",
            })

            setCookie(null, "_token", token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/",
            })

            location.href = "/dashboard";
        } catch (err) {
            console.warn("RegistrationForm", err);

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
                    label="Enter Full Name"
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: "Enter Full Name",
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
                        Sign Up
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}