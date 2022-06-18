import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
box-sizing: border-box;
}
body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.color};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
}

`