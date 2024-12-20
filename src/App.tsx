import { Route, Routes } from 'react-router-dom';
import Contract from './features/Contract/Contract';
import Survey from './features/Survey/Survey';

const app = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </>
  );
};

export default app;
