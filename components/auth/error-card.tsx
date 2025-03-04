import { Header } from "@/components/auth/header";
import { BackButton } from "@/components/auth/back-button";
import { Card, CardHeader } from "@/components/ui/card";

export const ErrorCard = () => {
  return (
    <Card className="wp[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! somthing went wrong!" />
      </CardHeader>
      <CardHeader>
        <BackButton href="Back to login" label="/auth/login" />
      </CardHeader>
    </Card>
  );
};