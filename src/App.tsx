import { RouterProvider, useRouter } from '@/lib/router';
import { LanguageProvider } from '@/lib/i18n';
import { Layout } from '@/components/Layout';
import { DashboardPage } from '@/pages/DashboardPage';
import { CheckInPage } from '@/pages/CheckInPage';
import { MyHealthPage } from '@/pages/MyHealthPage';
import { NearbyPage } from '@/pages/NearbyPage';
import { HealthInfoPage } from '@/pages/HealthInfoPage';

function Routes() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/':
        return <DashboardPage />;
      case '/check-in':
        return <CheckInPage />;
      case '/my-health':
        return <MyHealthPage />;
      case '/nearby':
        return <NearbyPage />;
      case '/health-info':
        return <HealthInfoPage />;
      default:
        return <DashboardPage />;
    }
  };

  return <Layout>{renderPage()}</Layout>;
}

export default function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <Routes />
      </RouterProvider>
    </LanguageProvider>
  );
}
