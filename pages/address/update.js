import { useRouter } from "next/router";
import Layout from "../../components/layout";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  doc,
  addDoc,
  updateDoc,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";
import React from "react";
import "../../components/fire";

function update() {
  const router = useRouter();
  const doAction = (_) => {
    router.push('/address/?id=" + router.query.id');
  };

  return (
    <div>
      <h1>更新しました</h1>
      <button onClick={doAction}>メッセージに戻る</button>
    </div>
  );
}

export default update;
