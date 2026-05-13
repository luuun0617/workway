import "../assets/scss/pages/_user.scss"
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, auth, storage } from '../firebase';
import AppointList from "./AppointList";
import Education from "./Education";
import PersonInfo from "./PersonInfo";
import Plans from "./Plans";
import Project from "./Project";
import Skills from "./Skills";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function User() {
    const { 
      register, 
      handleSubmit, 
      formState: { errors }, 
      reset 
    } = useForm();

    useEffect(() => {
      const fetchUserData = async () => {
        const uid = auth.currentUser?.uid;
        if (!uid) return;
        try {
          const snap = await getDoc(doc(db, 'users', uid));
          if (snap.exists() && snap.data().userPlans) {
            reset(snap.data().userPlans);
          }
        } catch (error) {
          console.error("抓取舊資料失敗", error);
        }
      };
      fetchUserData();
    }, [reset]);

    const onSubmit = async (data) => {
      const uid = auth.currentUser?.uid;
      if (!uid) {
        alert("請先登入！");
        return;
      }
      try {
        let attachmentUrl = null;
        const fileList = data.attachment;
        if (fileList && fileList.length > 0) {
          const file = fileList[0];
          const fileRef = ref(storage, `users/${uid}/attachment/${file.name}`);
          await uploadBytes(fileRef, file);
          attachmentUrl = await getDownloadURL(fileRef);
        }
        await setDoc(doc(db, 'users', uid), {
          userPlans: { ...data, attachment: attachmentUrl }
        }, { merge: true });
        alert("資料已成功儲存！");
      } catch (error) {
        console.error("儲存失敗：", error);
        alert("儲存失敗，請稍後再試");
      }
    };

    return(<>
    <main className="bg-natural-95 border-bottom">
      <div className="container py-7">
        <div className="row justify-content-center">
          <div className="col-10">
            <ul className="nav nav-pills mb-5 justify-content-center tab-btn-bg" id="pills-tab" role="tablist">
              <li className="nav-item me-5" role="presentation">
                <button className="nav-link border active" 
                  id="pills-info-tab" 
                  data-bs-toggle="pill" data-bs-target="#pills-info"
                  type="button" role="tab" 
                  aria-controls="pills-info" 
                  aria-selected="true"
                  >
                  <span className="material-icons-outlined align-bottom me-1">face</span>
                  個人資料
                </button>
              </li>
              <li className="nav-item me-5" role="presentation">
                <button className="nav-link border" 
                  id="pills-record-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#pills-record"
                  type="button" role="tab" 
                  aria-controls="pills-record" 
                  aria-selected="false"
                  >
                  <span className="material-icons-outlined align-bottom me-1">pending_actions</span>
                  預約紀錄
                </button>
              </li>
              <li className="nav-item me-5" role="presentation">
                <button className="nav-link border" 
                  id="pills-plan-tab" 
                  data-bs-toggle="pill" 
                  data-bs-target="#pills-plan"
                  type="button" role="tab" 
                  aria-controls="pills-plan" 
                  aria-selected="false"
                  >
                  <span className="material-icons-outlined align-bottom me-1">list_alt</span>
                  職旅計劃</button>
              </li>
            </ul>
            <div className="tab-content rounded-panel p-6 shadow" id="pills-tabContent">
              {/* 個人資料 */}
              <PersonInfo />
              {/* 預約紀錄 */}
              <AppointList />
              {/* 職旅計劃 */}
              <div className="tab-pane fade" 
                id="pills-plan" role="tabpanel" 
                aria-labelledby="pills-plan-tab"
                tabIndex="0"
               >
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* 職旅計劃 */}
                  <Project 
                    register={register} 
                    errors={errors}
                  />
                  {/* 職涯規劃 */}
                  <Plans 
                    register={register} 
                    errors={errors}
                  />
                  {/* 專業技能 */}
                  <Skills 
                    register={register} 
                    errors={errors} 
                  />
                  {/* 教育背景 */}
                  <Education 
                    register={register} 
                    errors={errors} 
                  />
                  <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-natural-60 button-update me-4">
                      匯出 PDF
                      <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
                    </button>
                    <button type="submit" className="btn btn-dark button-update">
                      儲存更新
                      <span className="material-icons-outlined align-bottom ms-1">keyboard_arrow_right</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>)
}