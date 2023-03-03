import { Field, Formik } from "formik";

const LoginPage = ()=>
{
    return(
    <div className="container  bg-slate-700 w-96 h-">
            <Formik>
            <form>
            <label className="block font-bold text-gray-500" forhtml="username">Username</label>
            <Field type="email" placeholder="Username" className="block"/>
            <label forhtml="password" className="block">Password</label>
            <Field type="password" placeholder="Password..." className="block"/>
            <button className="block text-white bg-blue-700 p-3 rounded-xl m-2">Login Now</button>
        </form>
        </Formik>
    </div>)
}
export default LoginPage;