import '../assets/scss/pages/_contact.scss'

import formTop from "../assets/images/form-top.svg"
import Basic from './contacts/Basic'
import Requirement from './contacts/Requirement'
import Link from './contacts/Link'
import Refill from '../btn/Refill'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const {
      register,
      handleSubmit,
      setValue,
      reset,
      formState: { errors }
    } = useForm({
      defaultValues: {
      name: "",
      email: "",
      number: "",
      workType: "",
      contactMethod: "",
      expert:"",
      mainChallenges:"",
      desiredGoal:"",
      },
      mode: 'onTouched',
    });

    const onSubmit = async(formData) => {
      try {
        const token = localStorage.getItem("workway_token");
        const response = await axios.post("http://localhost:3000/contacts", formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        console.log("資料已成功儲存到 json-server：", response.data);
        alert("表單已成功送出！我們會盡快與您聯絡。");

      } catch (error) {
        console.error("送出失敗", error.response?.data || error.message);
      }
    };

    const [resetKey, setResetKey] = useState(0);

    const restForm = ()=>{
      reset();
      setResetKey(prev => prev + 1);
    }

    return(<>
    <main className="py-lg-7 py-6 bg-gray">
      <div className="container px-3 px-lg-0">
        <div className="text-center mb-lg-6 mb-5">
          <h2 className="fs-4xl mb-lg-5 mb-4">聯絡我們</h2>
          <p className="fs-by-lg text-natural-50">每一封郵件，我們都會親自回覆。每一通電話，都是新可能的開始。</p>
        </div>
        <form className="contact-card p-lg-6 p-5 shadow" onSubmit={handleSubmit(onSubmit)}>
          <img src={formTop} alt="form-top" className="form-top d-none d-lg-block" />
          {/* 基本資料 */}
          <Basic 
            register={register} 
            setValue={setValue} 
            errors={errors}
            resetKey={resetKey}
            />

          {/* 諮詢需求 */}
          <Requirement 
            register={register}
            setValue={setValue} 
            errors={errors}
            resetKey={resetKey}
          />

          {/* 聯絡偏好 */}
          <Link 
            register={register}
            errors={errors}
          />

          {/* btn */}
          <div className="d-flex flex-lg-row flex-column justify-content-center">
            <Refill onClick={restForm}/>
            <button type="submit" className="btn btn-dark button-update">
              確認送出
              <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
            </button>
          </div>
        </form>
      </div>
    </main>
    </>)
}