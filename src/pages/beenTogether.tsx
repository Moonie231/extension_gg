import { useState } from "react";
import "../App.css";
import { message, Upload } from "antd";
import moment from "moment";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import HeartTwoTone from "@ant-design/icons/lib/icons/HeartTwoTone";

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

const BeenTogether = () => {
  const [dayCount, setDayCount] = useState<number>();
  const [imageUrl1, setImageUrl1] = useState<string>();
  const [imageUrl2, setImageUrl2] = useState<string>();
  const [name1, setName1] = useState<string>();
  const [name2, setName2] = useState<string>();

  const countTheDays = (event: { target: { value: any } }) => {
    const day = event.target.value;
    const dayNow = moment().format("YYYY-MM-DD");
    const dayGap = moment(dayNow).diff(day, "days");
    setDayCount(dayGap);
  };

  const handleKeyPress1 = (event: { key: string; target: { value: any } }) => {
    if (event.key === "Enter") {
      setName1(event.target.value);
    }
  };

  const handleKeyPress2 = (event: { key: string; target: { value: any } }) => {
    if (event.key === "Enter") {
      setName2(event.target.value);
    }
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
        <div>
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
          {name1 ? name1 : <input type="text" onKeyPress={() => handleKeyPress1} />}
        </div>

        {!dayCount ? (
          <input
            type="date"
            id="ngay"
            onChange={countTheDays}
            placeholder="Chọn ngày"
          />
        ) : (
          <div className="day">
            <HeartTwoTone twoToneColor="#eb2f96" />
            <div className="day-count">{dayCount}</div>
          </div>
        )}
        <div>
          <Upload
            name="avatar"
            listType="picture-circle"
            className="avatar-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange2}
          >
            {imageUrl2 ? ( <img src={imageUrl2} alt="avatar" className="ava" /> ) : ( uploadButton )}
            
          </Upload>
          {name2 ? name2 : <input type="text" onKeyPress={() => handleKeyPress2} />}
        </div>
      </div>
    </div>
  );
};

export default BeenTogether;
