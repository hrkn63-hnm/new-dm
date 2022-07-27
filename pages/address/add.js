import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import { getFirestore, setDoc, doc } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import "../../components/fire";

const db = getFirestore();
const auth = getAuth();

export default function Add() {
  const [message] = useState("add address");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [tel, setTel] = useState("");
  const [memo, setMemo] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser == null) {
      router.push("/address");
    }
  }, []);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMail = (e) => {
    setMail(e.target.value);
  };
  const onChangeTel = (e) => {
    setTel(e.target.value);
  };
  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };

  const doAction = (_) => {
    const ob = {
      name: name,
      mail: mail,
      tel: tel,
      memo: memo,
      flag: false,
    };
    setDoc(
      doc(db, "address", auth.currentUser.email, "address", mail),
      ob
    ).then((_) => {
      router.push("/address");
    });
  };

  const goBack = (_) => {
    router.push("/address");
  };

  return (
    <>
      <Layout header="Next.js" title="Create data.">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">{message}</h5>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              onChange={onChangeName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Mail:</label>
            <input
              type="text"
              onChange={onChangeMail}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Tel:</label>
            <input
              type="text"
              onChange={onChangeTel}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Memo:</label>
            <input
              type="text"
              onChange={onChangeMemo}
              className="form-control"
            />
          </div>
        </div>
        <button onClick={doAction} className="btn btn-primary">
          Add
        </button>
        <button onClick={goBack} className="btn">
          Go Back
        </button>
      </Layout>
    </>
  );
}

