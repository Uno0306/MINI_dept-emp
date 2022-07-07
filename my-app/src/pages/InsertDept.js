import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function InsertDept() {
  const navigate = useNavigate();

  function checkIsert() {
    var inDno = document.getElementById('inDno');
    var inDname = document.getElementById('inDname');
    var inDloc = document.getElementById('inDloc');
    const dnoValue = inDno.value;
    const dnameValue = inDname.value;
    const dlocValue = inDloc.value;
    if (dnoValue === null || '' === dnoValue) {
      alert('부서번호를 입력하시오!');
    }
    if (dnameValue === null || '' === dnameValue) {
      alert('부서명을 입력하시오!');
    }
    if (dlocValue === null || '' === dlocValue) {
      alert('부서위치를 입력하시오!');
    }

    if (
      !(
        dnoValue === null ||
        '' === dnoValue ||
        dnameValue === null ||
        '' === dnameValue ||
        dlocValue === null ||
        '' === dlocValue
      )
    ) {
      console.log('되나?');
      const url = '/api/dept/' + dnoValue;
      const inputDept = {
        deptno: dnoValue,
        dname: dnameValue,
        loc: dlocValue,
      };
      const headers = {
        'Content-Type': 'application/json',
      };
      console.log(inputDept);
      axios.post(url, inputDept, { headers }).catch((error) => {
        console.log(error);
      });

      // 추가 완료 후, 페이지 이동
      navigate('/dept');
    }
  }

  return (
    <div>
      <form action='/dept' method='post'>
        <input type='number' id='inDno' placeholder='부서번호를 입력하시오.' />
        <input type='text' id='inDname' placeholder='부서명을 입력하시오.' />
        <input type='text' id='inDloc' placeholder='부서위치를 입력하시오.' />
        <input type='button' value='추가' onClick={checkIsert} />
      </form>
    </div>
  );
}

export default InsertDept;
