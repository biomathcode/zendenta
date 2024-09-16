export default async function PureServerPage() {
  return (
    <>
      <h1 className="text-4xl font-extrabold my-8 text-center">
        Vote for Server Actions
      </h1>
      <p>This page uses only Server Components and Server Actions.</p>
      <p>The value of the counter will only update when you vote.</p>

      <p>
        Open this page in another tab to see the Client Component update in real
        time:
      </p>
    </>
  );
}
