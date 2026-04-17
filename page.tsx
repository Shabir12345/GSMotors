import { redirect } from "next/navigation";

interface PageProps {
  params: {
    bodytype: string;
  };
}

export default function BodyTypeRedirect({ params }: PageProps) {
  redirect(`/browse/${params.bodytype}`);
}
