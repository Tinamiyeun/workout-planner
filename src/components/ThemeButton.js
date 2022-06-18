import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "styled-components";

export function ThemeButton(){
    const theme = useContext(ThemeContext);
    
    return (
        <Button variant="outline-secondary">Change Theme</Button>
    )
}