let backendHost;

const hostname = window && window.location && window.location.hostname; // 첫 번째 falsy를 찾아 반환, falsy가 없다면 마지막 피연산자 반환

if (hostname === "localhost") { // 일치 연산자(strict equality operator), 형 변환 없이 값을 비교
  backendHost = "http://localhost:8080";
}

export const API_BASE_URL = `${backendHost}`;