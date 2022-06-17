import React from 'react';
import PlanChoices from 'components/PlanChoices';
import NavigateButton from 'components/NavigateButton';

//Page when the user is logged in
//might need to rename the page
function LoggedIn() {
    return (
        <>
            <PlanChoices />
            <NavigateButton redirect="customizeplan" message="Customize your plan"/>
        </>
    );
}

export default LoggedIn;