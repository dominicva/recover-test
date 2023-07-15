import Link from 'next/link';
import Button from './buttons/Button';

export default function Header() {
  return (
    <header>
      <div className="mx-auto flex max-w-5xl items-center justify-between p-6">
        <Link href="/">
          <h1 className="text-2xl font-semibold text-purple-darker">Recover</h1>
        </Link>
        <nav>
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="/login">
                <Button intent="text" size="small">
                  Login
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <Button intent="primary" size="small">
                  Sign up
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
