import React from 'react';
import {render, cleanup, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UserSignUpPage } from './user-sign-up-page';

beforeEach(cleanup);

describe('User Sign Up Page', () => {
    describe('Layout', () => {
        it('has header of Sign Up', () => {
            const { container } = render(<UserSignUpPage />);
            const header = container.querySelector('h1');
            expect(header).toHaveTextContent('Sign Up');
        });

        it('has input for display name', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const displayNameInput = queryByPlaceholderText('Your display name');
            expect(displayNameInput).toBeInTheDocument();
        });

        it('has input for username', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const userNameInput = queryByPlaceholderText('Your username');
            expect(userNameInput).toBeInTheDocument();
        });

        it('has input for password', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput).toBeInTheDocument();
        });

        it('has input for repeat password', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const repeatPasswordInput = queryByPlaceholderText('Repeat your password');
            expect(repeatPasswordInput).toBeInTheDocument();
        });

        it('has password type for password input', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage />);
            const passwordInput = queryByPlaceholderText('Your password');
            expect(passwordInput.type).toBe('password');
        });

        it('has submit button', () => {
            const { container } = render(<UserSignUpPage />);
            const submitButton = container.querySelector('button');
            expect(submitButton).toBeInTheDocument();
        })
    });
    describe('interactions', () => {
        const changeEvent = (content) => {
            return {
                target: {
                    value: content
                }
            }
        };

        it('sets the displayName value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const displayNameInput = queryByPlaceholderText('Your display name');

            fireEvent.change(displayNameInput, changeEvent('my-display-name'));
            expect(displayNameInput).toHaveValue('my-display-name');
        });

        it('sets the username value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const usernameInput = queryByPlaceholderText('Your username');

            fireEvent.change(usernameInput, changeEvent('my-user-name'));
            expect(usernameInput).toHaveValue('my-user-name');
        });

        it('sets the password value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const passwordInput = queryByPlaceholderText('Your password');

            fireEvent.change(passwordInput, changeEvent('P4ssword'));
            expect(passwordInput).toHaveValue('P4ssword');
        });

        it('sets the passwordRepeat value into state', () => {
            const { queryByPlaceholderText } = render(<UserSignUpPage/>);
            const passwordRepeatInput = queryByPlaceholderText('Repeat your password');

            fireEvent.change(passwordRepeatInput, changeEvent('P4ssword'));
            expect(passwordRepeatInput).toHaveValue('P4ssword');
        })
    })
})
