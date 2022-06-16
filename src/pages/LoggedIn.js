//welcome page for users. its shows the predefined plans
import React from 'react';
import PlanChoices from 'components/PlanChoices';
import NavigateButton from 'components/NavigateButton';

function LoggedIn() {
    return (
        <>
            <PlanChoices />
            <NavigateButton redirect="/" message="Click here"/>
        </>
    );
}