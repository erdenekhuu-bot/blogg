import { Layout, Typography, Select, Upload, Input, Form, Button } from "antd";
import { useState, useEffect } from "react";
import { EditOutlined } from "@ant-design/icons";
import type { SelectProps } from "antd";
import axios from "axios";
import { ADDRESS } from "../pages/Home";
import type { GetProp, UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

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

  const categoryOptions = getCategoryOptions(getCategory);

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as FileType);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const onFinish = (values: any) => {
    console.log(values);
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
          <Form.Item name="cover" rules={[{ required: true }]}>
            <ImgCrop rotationSlider>
              <Upload
                //action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 5 && "+ Upload"}
              </Upload>
            </ImgCrop>
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
