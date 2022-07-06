import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, NavLink } from 'react-router-dom';
function Dept() {
  const [depts, setDepts] = useState([]);
  const [dept, setDept] = useState();
  const [deleteCheck, setDeleteCheck] = useState(false);

  useEffect(() => {
    allSelect();
  }, [deleteCheck]);

  // Deptno 검색
  const selectByDeptno = () => {
    var num = document.getElementById('num');
    const url = '/api/dept/' + num.value;
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        if (data === null || data === '' || data === undefined) {
          setDept();
        } else {
          setDept(data);
        }
      })
      .catch((error) => console.log(error));
  };

  // 전체 검색
  const allSelect = () => {
    const url = '/api/dept/depts';
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setDepts(data);
      })
      .catch((error) => console.log(error));
  };

  // Deptno로 삭제
  const deleteByDeptno = async (deptno) => {
    console.log(deptno);

    const url = '/api/dept/' + deptno;
    const headers = {
      'Content-Type': 'application/json',
    };
    await axios.delete(url).catch((error) => console.log(error));

    setDeleteCheck(!deleteCheck);
  };

  return (
    <div>
      <h2>부서</h2>
      <br />
      <Link to='/dept/insert'>추가</Link>
      <br />
      <hr />
      <input type='number' id='num' placeholder='부서번호를 입력해주세요' />
      <input type='button' value='부서번호로 검색' onClick={selectByDeptno} />
      {dept === null || dept === '' || dept === undefined ? (
        <p>테이블이 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <td>deptno</td>
              <td>dname</td>
              <td>loc</td>
              <td>update</td>
              <td>delete</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dept.deptno}</td>
              <td>{dept.dname}</td>
              <td>{dept.loc}</td>
              <td>
                <input type='button' value='수정' />
              </td>
              <td>
                <input type='button' value='삭제' />
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <hr />

      <input type='button' value='모든검색' onClick={allSelect} />
      <br />
      <div id='dom'>
        {depts.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <td>deptno</td>
                <td>dname</td>
                <td>loc</td>
                <td>update</td>
                <td>delete</td>
              </tr>
            </thead>
            <tbody>
              {depts.map((data) => {
                return (
                  <tr key={data.deptno}>
                    <td>{data.deptno}</td>
                    <td>{data.dname}</td>
                    <td>{data.loc}</td>
                    <td>
                      <input type='button' value='수정' />
                    </td>
                    <td>
                      <input
                        type='button'
                        value='삭제'
                        onClick={async () => await deleteByDeptno(data.deptno)}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p>테이블이 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default Dept;
