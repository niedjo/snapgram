import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import { QueryPrivider } from "./lib/react-query/QueryPrivider";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <QueryPrivider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryPrivider>
    </BrowserRouter>
)