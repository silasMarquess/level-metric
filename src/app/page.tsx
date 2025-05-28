'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-start">
      <Link href={'/dashboard'} className="mt-10">
        <div className="hover:bg-primary hover:text-primary-foreground flex h-auto flex-row items-center justify-center gap-2 rounded-2xl border p-1">
          <span>Ir para dashboard</span>
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
}
