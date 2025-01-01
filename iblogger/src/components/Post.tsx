import { Layout, Typography, Select, Upload, Input, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined, UploadOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";
import axios from "axios";
import { ADDRESS } from "../pages/Home";
import type { UploadProps } from "antd";

const { Content } = Layout;
const { TextArea } = Input;

type LabelRender = SelectProps["labelRender"];

const labelRender: LabelRender = (props) => {
  const { label, value } = props;

  if (label) {
    return value;
  }
  return <span>Категори сонгох</span>;
};

export default function Post() {
  const [getCategory, setCategory] = useState<any[]>([]);
  const [value, setValue] = useState("");

  const fetching = async function () {
    try {
      const response = await axios.get(`http://${ADDRESS}:3000/api/category`, {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      });
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  const getCategoryOptions = (data: any[]) => {
    return data.map((item) => ({
      value: item.content,
      label: item.content,
    }));
  };

  const props: UploadProps = {
    name: "image",
    action: `http://${ADDRESS}:3000/api/savefile/`,
    headers: {
      authorization: `Bearer ${process.env.TOKEN}`,
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        alert(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        alert(`${info.file.name} file upload failed.`);
      }
    },
  };

  const categoryOptions = getCategoryOptions(getCategory);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
    formData.append("category", values.category);
    if (values.image && values.image.file) {
      formData.append("image", values.image.file.originFileObj);
    }

    try {
      await axios.post(`http://${ADDRESS}:3000/api/createpost`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${process.env.TOKEN}`,
        },
      });
      alert("Post created successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout className="bg-white">
      <Content className="mx-10">
        <Typography>
          <EditOutlined /> <span className="px-2">Пост Нэмэх</span>
        </Typography>

        <Form
          name="wrap"
          labelCol={{ flex: "110px" }}
          labelAlign="left"
          labelWrap
          onFinish={onFinish}
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
        >
          <p className="mt-8 mb-4 font-bold text-lg">Категори сонгох</p>
          <Form.Item name="category" rules={[{ required: true }]}>
            <Select
              labelRender={labelRender}
              defaultValue="1"
              style={{ width: "100%" }}
              options={categoryOptions}
            />
          </Form.Item>
          <p className="mt-8 mb-4 font-bold text-lg">Cover зураг</p>
          <Form.Item rules={[{ required: true }]}>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <p className="mt-8 mb-4 font-bold text-lg">Гарчиг</p>
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input placeholder="Жишээ: Миний дуртай ном" />
          </Form.Item>
          <p className="mt-8 mb-4 font-bold text-lg">Үндсэн хэсэг</p>
          <Form.Item name="content" rules={[{ required: true }]}>
            <TextArea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Controlled autosize"
              autoSize={{ minRows: 3, maxRows: 15 }}
            />
          </Form.Item>

          <div className="flex justify-end">
            <Form.Item label=" ">
              <Button type="primary" className="bg-[#E86B02]" htmlType="submit">
                Постлох
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Content>
    </Layout>
  );
}
