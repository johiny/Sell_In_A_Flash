import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';
import NavBars from "components/NavBars";
import "styles/LayoutStyle.css";


const Layout = ({ children }) => {
  
  const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently, logout } =
    useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const { setUserData } = useUser();

  useEffect(() => {
    const fetchAuth0Token = async () => {

      setLoadingUserInformation(true);
      const accessToken = await getAccessTokenSilently({
        audience: `https://dev-0skfin92.us.auth0.com/api/v2/`,
      });

      localStorage.setItem('token', accessToken);
      console.log(accessToken);

      await obtenerDatosUsuario(
        (response) => {
          console.log('response con datos del usuario', response);
          setUserData(response.data);
          setLoadingUserInformation(false);
        },
        (err) => {
          console.log('err', err);
          setLoadingUserInformation(false);
          logout({ returnTo: 'http://localhost:3000/admin' });
        }
      );
    };
    if (isAuthenticated) {
      fetchAuth0Token();
    }
  }, [isAuthenticated, getAccessTokenSilently, logout, setUserData]);

  if (isLoading || loadingUserInformation)
    return <ReactLoading type='cylon' color='#abc123' height={667} width={375} />;

  if (!isAuthenticated) {
    return loginWithRedirect();
  }

  return (
    <>
    <NavBars/>
    <main className="cuerpo_central">{children}</main>
    <footer></footer>
    </>
)
}

export default Layout;