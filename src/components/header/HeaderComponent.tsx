import './HeaderStyles.scss';
import {Link} from 'react-router-dom';
import {Button, ButtonGroup} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';

const HeaderComponent = () => {
    return (
        <div className={'header'}>
            <ButtonGroup variant="outlined">
                <Button component={Link} to="./" startIcon={<HomeIcon />}>
                    Home
                </Button>
                <Button
                    component={Link}
                    to="./profile"
                    startIcon={<PersonIcon />}>
                    Profile
                </Button>
                <Button
                    component={Link}
                    startIcon={<LogoutIcon />}
                    color="error"
                    to={'./logout'}>
                    Log Out
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default HeaderComponent;
