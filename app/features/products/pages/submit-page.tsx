import type { Route } from "../../../features/products/pages/+types/submit-page";
import type { MetaFunction } from "react-router";

export function meta(): MetaFunction {
  return [
    { title: "Submit Product | ProductHunt Clone" },
    { name: "description", content: "Submit your product" },
  ];
}

export function action({ request }: Route.ActionArgs) {
  // Add product submission logic
  return {};
}

export default function SubmitPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Submit Your Product</h1>
      {/* Add submission form */}
    </div>
  );
}
