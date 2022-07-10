import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function UpdateDept() {
  const navigate = useNavigate();

  const deptno = useParams().deptno;

  function checkUpdate() {
    var inDname = document.getElementById("inDname");
    var inDloc = document.getElementById("inDloc");

    const dnameValue = inDname.value;
    const dlocValue = inDloc.value;

    if (dnameValue === null || "" === dnameValue) {
      alert("부서명을 입력하시오!");
    }
    if (dlocValue === null || "" === dlocValue) {
      alert("부서위치를 입력하시오!");
    }

    if (
      !(
        dnameValue === null ||
        "" === dnameValue ||
        dlocValue === null ||
        "" === dlocValue
      )
    ) {
      const url = "/api/dept/" + deptno;
      const inputDept = {
        deptno: deptno,
        dname: dnameValue,
        loc: dlocValue,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      console.log(inputDept);
      axios.put(url, inputDept, { headers }).catch((error) => {
        console.log(error);
      });

      // 수정 완료 후, 페이지 이동
      navigate("/dept");
    }
  }

  return (
    <div>
      <form action="/dept" method="post">
        <input type="number" id="inDno" value={deptno} />
        <input type="text" id="inDname" placeholder="부서명을 입력하시오." />
        <input type="text" id="inDloc" placeholder="부서위치를 입력하시오." />
        <input type="button" value="수정" onClick={checkUpdate} />
      </form>
    </div>
  );
}

export default UpdateDept;
