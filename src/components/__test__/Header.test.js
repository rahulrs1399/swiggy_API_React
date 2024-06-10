import {screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


test("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole('button');

    const loginButton = screen.getByText('Login');

    expect(loginButton).toBeInTheDocument();
})