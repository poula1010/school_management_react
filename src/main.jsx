
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import StudentPage from './components/Student/StudentPage.jsx';
import StudentForm from './components/Student/StudentForm.jsx';
import TeacherPage from './components/Employee/TeacherPage.jsx';
import CoursePage from './components/Course/CoursePage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/students",
        element: <StudentPage />
      },
      {
        path: "/teachers",
        element: <TeacherPage />
      },
      {
        path: "/courses",
        element: <CoursePage />
      },
      {
        path: "/student",
        element: <StudentForm />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />
  ,
)
