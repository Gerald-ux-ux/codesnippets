export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div className="animate-in  truncate rounded-lg bg-error p-2 text-center text-base text-error">
      <p className="text-center">{message}</p>
    </div>
  );
}
