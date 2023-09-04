import { useState } from "react";
import "./App.css";
import { message, Upload } from "antd";
import moment from "moment";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const App = () => {
  const [day, setDay] = useState("");
  const [imageUrl1, setImageUrl1] = useState<string>();
  const [imageUrl2, setImageUrl2] = useState<string>();

  const countTheDays = (event: { target: { value: any } }) => {
    const day = event.target.value;
    setDay(day);
    const dayNow = moment().format("YYYY-MM-DD");
    const khoangCach = moment(dayNow).diff(day, "days");
    alert(
      `Khoảng cách từ ngày ${moment(day).format(
        "DD/MM/YYYY",
      )} đến ngày hôm nay là ${khoangCach} ngày.`,
    );
  };

  const handleChange1: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setImageUrl1(url);
    });
  };

  const handleChange2: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj as RcFile, (url) => {
      setImageUrl2(url);
    });
  };

  const uploadButton = (
    <div>
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange1}
        >
          {imageUrl1 ? (
            <img src={imageUrl1} alt="avatar" className="ava" />
          ) : (
            uploadButton
          )}
        </Upload>
        
          <label htmlFor="ngay">Chọn ngày: </label>
          <input type="date" id="ngay" value={day} onChange={countTheDays} />
        <Upload
          name="avatar"
          listType="picture-circle"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChange2}
        >
          {imageUrl2 ? (
            <img src={imageUrl2} alt="avatar" className="ava" />
          ) : (
            uploadButton
          )}
        </Upload>
      </div>
      '
    </div>
  );
};

export default App;
