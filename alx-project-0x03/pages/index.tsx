
import Button from "@/components/common/Button";
import { useRouter } from "next/router";
import { PageRouteProps } from "@/interface";

export default function Home() {
  const router = useRouter();

  // Routage impératif avec useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center">
      {/* Message d'accueil */}
      <h1> Welcome to Splash App </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your one-stop platform for everything AI you need. Start exploring by
        navigating to our features below.
      </p>

      {/* Options de navigation */}
      <div className="flex gap-6">
        <Button action={() => routeToNextPage({ pageRoute: '/generate-text-ai' })} buttonLabel="Generate Text" buttonBackgroundColor="blue" />
        <Button action={() => routeToNextPage({ pageRoute: '/text-to-image'})} buttonLabel="Text to Image" buttonBackgroundColor="green" />
        <Button action={() => routeToNextPage({ pageRoute: '/counter-app'})} buttonLabel="Contact us" buttonBackgroundColor="orange" />
      </div>
    </div>
  );
}
