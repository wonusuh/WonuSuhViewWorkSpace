//[부서정보]
//[부서번호,부서명,지역]
let dData = [
  { no: "10", dname: "ACCOUNTING", location: "NEW YORK" },
  { no: "20", dname: "RESEARCH", location: "DALLAS" },
  { no: "30", dname: "SALES", location: "CHICAGO" },
  { no: "40", dname: "OPERATIONS", location: "BOSTON" }
];
// [사원정보]
// [번호,이름,직책,상사번호,입사일,급여,커미션,부서번호]
let eData = [
  { id: "7369", ename: "SMITH", title: "CLERK", sid: "7902", birth: "17-12-1980", salary: "800", commission: "0", dno: "20" },
  { id: "7499", ename: "ALLEN", title: "SALESMAN", sid: "7698", birth: "20-2-1981", salary: "1600", commission: "300", dno: "30" },
  { id: "7521", ename: "WARD", title: "SALESMAN", sid: "7698", birth: "22-2-1981", salary: "1250", commission: "500", dno: "30" },
  { id: "7566", ename: "JONES", title: "MANAGER", sid: "7839", birth: "2-4-1981", salary: "2975", commission: "0", dno: "20" },
  { id: "7654", ename: "MARTIN", title: "SALESMAN", sid: "7698", birth: "28-9-1981", salary: "1250", commission: "1400", dno: "30" },
  { id: "7698", ename: "BLAKE", title: "MANAGER", sid: "7839", birth: "1-5-1981", salary: "2850", commission: "0", dno: "30" },
  { id: "7782", ename: "CLARK", title: "MANAGER", sid: "7839", birth: "9-6-1981", salary: "2450", commission: "0", dno: "10" },
  { id: "7788", ename: "SCOTT", title: "ANALYST", sid: "7566", birth: "13-7-1987", salary: "3000", commission: "0", dno: "20" },
  { id: "7839", ename: "KING", title: "PRESIDENT", sid: "NULL", birth: "17-11-1981", salary: "5000", commission: "0", dno: "10" },
  { id: "7844", ename: "TURNER", title: "SALESMAN", sid: "7698", birth: "8-9-1981", salary: "1500", commission: "0", dno: "30" },
  { id: "7876", ename: "ADAMS", title: "CLERK", sid: "7788", birth: "13-7-1987", salary: "1100", commission: "0", dno: "20" },
  { id: "7900", ename: "JAMES", title: "CLERK", sid: "7698", birth: "3-12-1981", salary: "950", commission: "0", dno: "30" },
  { id: "7902", ename: "FORD", title: "ANALYST", sid: "7566", birth: "3-12-1981", salary: "3000", commission: "0", dno: "20" },
  { id: "7934", ename: "MILLER", title: "CLERK", sid: "7782", birth: "23-1-1982", salary: "1300", commission: "0", dno: "10" }
];

// [월급 등급]
// [등급 , 급여MIN , 급여MAX]
let salGrade = [
  { grade: 1, min: 700, max: 1200 }, // 1등급이고 급여 700~1200 사이
  { grade: 2, min: 1201, max: 1400 },
  { grade: 3, min: 1401, max: 2000 },
  { grade: 4, min: 2001, max: 3000 },
  { grade: 5, min: 3001, max: 9999 }
];


// 1. 부서별 평균월급여


// 2.부서별 전체 사원수와 커미션을 받는 사원들의 수

// 3.부서별 최대 급여와 최소 급여

// 4.부서번호가 30번인 사원들의 이름, 직급, 부서번호, 부서위치를 조회하시오.

// 5.커미션을 받는 사원의 이름, 커미션, 부서이름,부서위치를 조회하시오.

// 6.급여가 높은 순으로 조회하되 급여가 같을 경우 이름의 철자가 빠른 사원순으로 사번,이름,월급여를 조회하시오.

// 7.DALLAS에서 근무하는 사원의 이름,직급,부서번호,부서명을 조회하시오.

// 8.이름에 A 가 들어가는 사원의 이름,부서명을 조회하시오.

// 9.ALLEN과 같은 부서에 근무하는 사원의 이름, 부서번호를 조회하시오.

// 10.사원명 'JONES'가 속한 부서명을 조회하시오.

// 11.10번 부서에서 근무하는 사원의 이름과 10번 부서의 부서명을 조회하시오.

// 12.평균 월급여보다 더 많은 월급여를 받은 사원의 사원번호,이름,월급여 조회하시오.

// 13.부서번호가 20인 사원중에서 최대급여를 받는 사원과 동일한 급여를 받는 사원의 사원번호, 이름을 조회하시오.

// 14.사원 테이블에서 사원명과 해당 사원의 관리자명을 검색하시오

// 15.20번 부서의 이름과 그 부서에 근무하는 사원의 이름을 출력하시오.

// 16.사원 테이블에서 부서별 최대 급여를 받는 사원들의 사번, 이름, 부서코드, 급여를 검색하시오.

// 17.Salgrade가 2등급인 사원들의 평균 급여보다 적게 받는 사원 정보를 검색하시오.