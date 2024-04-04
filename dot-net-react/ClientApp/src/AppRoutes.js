import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { MyFunnyJokes } from "./components/MyFunnyJokes";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
      path: '/myfunnyjokes',
      element: <MyFunnyJokes />
  },

];

export default AppRoutes;
