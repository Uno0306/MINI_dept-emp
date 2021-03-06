import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  selectByDeptno,
  selectByPaging,
  minusPage,
  plusPage,
  changeByPageNumber,
  allSelect,
  deleteByDeptno,
} from "../context/DeptAxios";

const PaginationSpan = styled.span`
  &[aria-current] {
    background-color: black;
    color: white;
  }
`;

function Dept() {
  const [depts, setDepts] = useState([]);
  const [deptpaging, setDeptPaging] = useState([]);
  const [page, setPage] = useState();
  const [dept, setDept] = useState();
  const [deleteCheck, setDeleteCheck] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (page === undefined || page === null) {
    } else {
      changeByPageNumber(
        page,
        document.getElementById("size").value,
        setDeptPaging
      );
    }
  }, [page]);

  const moveUpdate = (deptno) => {
    navigate("/dept/update/" + deptno);
  };

  return (
    <div>
      <h2>부서</h2>
      <br />
      <Link to="/dept/insert">추가</Link>
      <br />
      <hr />
      <input type="number" id="num" placeholder="부서번호를 입력해주세요" />
      <input
        type="button"
        value="부서번호로 검색"
        onClick={() => {
          selectByDeptno(setDept, document.getElementById("num").value);
        }}
      />
      {dept === null || dept === "" || dept === undefined ? (
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
                <input
                  type="button"
                  value="수정"
                  onClick={() => {
                    moveUpdate(dept.deptno);
                  }}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="삭제"
                  onClick={async () => {
                    await deleteByDeptno(
                      document.getElementById("num").value,
                      deleteCheck,
                      setDeleteCheck
                    );
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <hr />

      <input type="number" id="page" placeholder="페이지 수 입력" />
      <input type="number" id="size" placeholder="사이즈 수 입력" />
      <input
        type="button"
        value="모든검색_페이징이용"
        onClick={() => {
          selectByPaging(
            setPage,
            setDeptPaging,
            document.getElementById("page").value,
            document.getElementById("size").value
          );
        }}
      />
      <br />
      <div id="dom2">
        {deptpaging.dtoList && deptpaging.dtoList.length !== 0 ? (
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
              {deptpaging.dtoList.map((data) => {
                return (
                  <tr key={data.deptno}>
                    <td>{data.deptno}</td>
                    <td>{data.dname}</td>
                    <td>{data.loc}</td>
                    <td>
                      <input
                        type="button"
                        value="수정"
                        onClick={() => {
                          moveUpdate(data.deptno);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="button"
                        value="삭제"
                        onClick={async () => {
                          await deleteByDeptno(
                            data.deptno,
                            deleteCheck,
                            setDeleteCheck
                          );
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
          {deptpaging.prev && (
            <button
              onClick={() => {
                minusPage(page, setPage);
              }}
            >
              prev
            </button>
          )}
          {deptpaging.pageList &&
            deptpaging.pageList.map((number) => {
              return (
                <PaginationSpan
                  id={number}
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
          {deptpaging.next && (
            <button onClick={() => plusPage(page, setPage)}>next</button>
          )}
        </div>
      </div>

      <hr />

      <input
        type="button"
        value="모든검색"
        onClick={() => {
          allSelect(setDepts);
        }}
      />
      <br />
      <div id="dom">
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
                      <input
                        type="button"
                        value="수정"
                        onClick={() => {
                          moveUpdate(data.deptno);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="button"
                        value="삭제"
                        onClick={async () =>
                          await deleteByDeptno(
                            data.deptno,
                            deleteCheck,
                            setDeleteCheck
                          )
                        }
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
