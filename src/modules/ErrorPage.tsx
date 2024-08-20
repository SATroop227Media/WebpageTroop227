import { useRouteError } from "react-router-dom"
import AppNav from "../components/AppNav";
import Footer from "../components/Footer";

export default function ErrorPage() {
    const error:any = useRouteError();
    console.error(error);

    return (
      <>
        <AppNav />
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <span className="italics">{error.statusText || error.message}</span>
          </p>
        </div>
        <Footer />
      </>
      );
}