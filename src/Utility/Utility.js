const getStoreApp = () => {
  const storedAppSTR = localStorage.getItem("storeApp");
  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoreApp = (id) => {
  const storedData = getStoreApp();

  if (storedData.includes(id)) {
    alert(11111);
  } else {
    storedData.push(id);
    const data = JSON.stringify(storedData);
    localStorage.setItem("storeApp", data);
  }
};

const cheackBtn = (id) => {
  const storedData = getStoreApp();
  if (storedData.includes(id)) {
    return true;
  } else {
    return false;
  }
};

const removeStoreApp = (id) => {
  const storedData = getStoreApp();
  const filteredData = storedData.filter((appId) => appId !== id);
  localStorage.setItem("storeApp", JSON.stringify(filteredData));
};

export { getStoreApp, addToStoreApp, cheackBtn,removeStoreApp };
