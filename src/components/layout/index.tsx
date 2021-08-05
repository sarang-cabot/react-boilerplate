import LayoutContainer from './layout.styled';

interface LayoutProps {
  error: boolean;
  loading: boolean;
  children: JSX.Element;
}

function Layout({ error, loading, children }: LayoutProps): JSX.Element {
  if (error) return <LayoutContainer>Something went wrong!</LayoutContainer>;
  if (loading) return <LayoutContainer>Loading...</LayoutContainer>;
  return <LayoutContainer>{children}</LayoutContainer>;
}
export default Layout;
