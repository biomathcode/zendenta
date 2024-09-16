import { Button, Html } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <Html>
    <h1>Welcome, {firstName}!</h1>
    <Button>Hi</Button>
  </Html>
);
