import { BrowserRouter,Route, Routes } from 'react-router-dom';

const routerConfig = (routes) => {
  if(!routes){
    return <div/>
  }
  // console.log(routes);
  return (
   
    <BrowserRouter>
      <Routes>
      {routes && routes.map(route=><Route key={route.path} path={route?.path} element={<route.component/>}/>)}
    </Routes>

    </BrowserRouter>
    
  );
};

export default routerConfig;