import React, { useEffect, useState } from "react";
import { selectAllEmp, minusPage, plusPage } from "../context/EmpAxios";
import styled from "styled-components";

const PaginationSpan = styled.span`
  &[aria-current] {
    background-color: black;
    color: white;
  }
`;

function Emp() {
  const [emps, setEmps] = useState([]);
  const [page, setPage] = useState();

  useEffect(() => {
    selectAllEmp(setEmps);
  }, []);

  return (
    <div>
      <h2>사원</h2>
      <br />
      <div id="empAllList">
        {emps.dtoList && emps.dtoList.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <td>EMPNO</td>
                <td>ENAME</td>
                <td>JOB</td>
                <td>MGR</td>
                <td>HIREDATE</td>
                <td>SAL</td>
                <td>COMM</td>
                <td>DEPTNO</td>
                <td>UPDATE</td>
                <td>DELETE</td>
              </tr>
            </thead>
            <tbody>
              {emps.dtoList.map((data) => {
                console.log(data);
                return (
                  <tr key={data.empno}>
                    <td>{data.empno}</td>
                    <td>{data.ename}</td>
                    <td>{data.job}</td>
                    <td>{data.mgr}</td>
                    <td>{data.hiredate}</td>
                    <td>{data.sal}</td>
                    <td>{data.comm}</td>
                    <td>{data.dept? data.dept.deptno : null}</td>
                    <td>
                      <input
                        type="button"
                        value="수정"
                        onClick={() => {
                          // moveUpdate(data.deptno);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="button"
                        value="삭제"
                        onClick={async () => {
                          // await deleteByDeptno(
                          //   data.deptno,
                          //   deleteCheck,
                          //   setDeleteCheck
                          // );
                        }}
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
        <div>
          {emps.prev && (
            <button
              onClick={() => {
                minusPage(page, setPage);
              }}
            >
              prev
            </button>
          )}
          {emps.pageList &&
            emps.pageList.map((number) => {
              return (
                <PaginationSpan
                  key={number}
                  onClick={(e) => {
                    setPage(e.target.id);
                  }}
                  aria-current={page == number ? "page" : null}
                >
                  {number} <span> </span>
                </PaginationSpan>
              );
            })}
          {emps.next && (
            <button onClick={() => plusPage(page, setPage)}>next</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Emp;
