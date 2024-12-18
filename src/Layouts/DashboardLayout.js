import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import StockList from '../Page/StockList/stock-list';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddDrug from '../Page/AddDrug/add-drug';
import Home from '../Page/home';
import EditStock from '../Page/EditStock/edit-stock';
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DashboardPharmacyContent({ pathname, navigate }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Employee List */}
      {pathname === '/' && <Home />}
      {pathname === '/drug-stock/:id' && <EditStock />}
      {pathname === '/stock-list' && <StockList />}
      {pathname === '/add-stock' && <AddDrug />}
    </Box>
  );
}

DashboardPharmacyContent.propTypes = {
  navigate: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutPattern(props) {
  const { window } = props;

  const [pathname, setPathname] = React.useState('/');
  const navigate = React.useCallback((path) => setPathname(String(path)), []);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate,
    };
  }, [pathname, navigate]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={[
        {
          segment: 'stock-list',
          title: 'Stock List',
          icon: <PeopleAltIcon />,
          pattern: 'stock-list',
        },
        {
          segment: 'add-stock',
          title: 'Add Stock',
          icon: <AddCircleOutlineIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{
        title: 'Pharmacy',
        logo: <img src="/pharmacy.png" alt="Pharmacy" />,
      }}
    >
      <DashboardLayout>
        <DashboardPharmacyContent
          pathname={pathname ?? '/'}
          navigate={navigate}
        />
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayoutPattern;
