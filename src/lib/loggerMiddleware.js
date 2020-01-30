const loggerMiddleware = store => next => action => {
  //현재 스토어 상태값 기록
  console.log("현재상태", store.getState());
  //액션 기록
  console.log("액션", action);

  //액션을 다음 미들웨어 or 리듀서로 넘김
  const result = next(action);

  //액션 처리 후 스토어 상태 기록
  console.log("다음상태", store.getState());
  console.log("\n"); //기록 구분을 위한 ln

  return result; // return = store.dispatch(ACTION_TYPE)
};

export default loggerMiddleware;
