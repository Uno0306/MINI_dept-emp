import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Outlet, NavLink } from 'react-router-dom';

// Deptno 검색
export const selectByDeptno = async (setDept, num) => {
  const url = 'api/dept/' + num;
  await axios
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

// 전체 검색 페이징이용
export const selectByPaging = async (setPage, setDeptPaging, page, size) => {
  setPage(page);
  const url = 'api/dept/deptspaging';
  const str = url + '?page=' + page + '&size=' + size;
  await axios
    .get(str)
    .then((response) => response.data)
    .then((data) => {
      setDeptPaging(data);
    })
    .catch((error) => console.log(error));
};

export const minusPage = async (page, setPage) => {
  console.log(page);
  await setPage(page - 1);
};
export const plusPage = async (page, setPage) => {
  console.log(page);
  if (page === '1') {
    await setPage(2);
  } else {
    await setPage(page + 1);
  }
};

// 페이지 클릭 시 이용
export const changeByPageNumber = async (page, size, setDeptPaging) => {
  const url = 'api/dept/deptspaging';
  const str = url + '?page=' + page + '&size=' + size;
  await axios
    .get(str)
    .then((response) => response.data)
    .then((data) => {
      setDeptPaging(data);
    })
    .catch((error) => console.log(error));
};

// 전체 검색
export const allSelect = async (setDepts) => {
  const url = 'api/dept/depts';
  await axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      setDepts(data);
    })
    .catch((error) => console.log(error));
};

// Deptno로 삭제
export const deleteByDeptno = async (deptno, deleteCheck, setDeleteCheck) => {
  const url = 'api/dept/' + deptno;
  await axios.delete(url).catch((error) => console.log(error));

  setDeleteCheck(!deleteCheck);
};
