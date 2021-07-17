import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render( <CheckoutForm />)
    
    // screen.debug();

    const header = screen.getByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
    expect(header).not.toBeNull();

});

test("form shows success message on submit with form details", () => {

    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const checkoutButton = screen.getByRole('button');

    let woohooMessage = screen.queryByTestId("successMessage")
    expect(woohooMessage).toBeNull();
    
    userEvent.type(firstNameInput, "Leia");
    userEvent.type(lastNameInput, "Organa");
    userEvent.type(addressInput, "Cell 2187");
    userEvent.type(cityInput, "Detention Level");
    userEvent.type(stateInput, "Death Star");
    userEvent.type(zipInput, "00001");
    userEvent.click(checkoutButton);

    woohooMessage = screen.getByTestId("successMessage");

    const fullName = screen.getByText(/leia organa/i);
    const cityStateZip = screen.getByText(/Detention Level, Death Star 00001/i);

    expect(woohooMessage).toBeInTheDocument();
    expect(fullName).toBeInTheDocument();
    expect(cityStateZip).toBeInTheDocument();

});
