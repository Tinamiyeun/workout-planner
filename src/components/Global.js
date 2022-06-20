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
    padding-bottom: 40px;
}

table {
    background-color: ${({ theme }) => theme.table};
}
.table-striped tbody tr:nth-of-type(odd) td {
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
}
.table, table td {
    color: ${({ theme }) => theme.color};
}

.vstack .btn-outline-secondary {
    color: ${({ theme }) => theme.color};
}

`