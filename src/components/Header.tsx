interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex flex-col justify-between">
      <h2 className="text-xl">Yoyo&apos;s Bingo</h2>
      <h1 className="text-base">{title}</h1>
    </header>
  );
}
