import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import loggerMiddleware from "./lib/loggerMiddleware";

// 미들웨어가 여러개 인경우는 파라미터로 여러개를 전달(ex(applyMiddleware(a,b,c)))
// 미들웨어의 순서 또한 파라미터의 순서
const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;
