interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="flex flex-col justify-between">
      <p className="text-xl">Yoyo&apos;s Bingo</p>
      <p className="text-base">{title}</p>
    </header>
  );
}
