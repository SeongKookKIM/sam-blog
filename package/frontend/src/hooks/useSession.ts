// sessionStorage에 데이터를 저장하는 함수
const saveDataToSessionStorage = (key: string, data: unknown) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

// sessionStorage에서 데이터를 가져오는 함수
const getDataFromSessionStorage = (key: string) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

export { saveDataToSessionStorage, getDataFromSessionStorage };
