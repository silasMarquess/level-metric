'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { getLevelBox } from '@/lib/api/metrics';
import LevelMetricBox from '@/lib/schemas/level';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [levelBox, setLevelBox] = useState<LevelMetricBox | null>(null);

  useEffect(() => {
    async function getLevel() {
      const level = await getLevelBox();
      setLevelBox(level);
    }
    getLevel();
  }, []);

  return (
    <div className="dark:bg-background flex h-screen w-screen flex-col items-center justify-start bg-gray-200">
      <Card className="mt-2 flex flex-col bg-white/67 shadow-2xl backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-sm font-light">
            Informações de Nivel de àgua
          </CardTitle>
        </CardHeader>
        <CardContent>
          {' '}
          {/*imagem do nivel de àgua*/}
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="dark: text-5xl text-green-400">
              {levelBox?.levelPercentage}%
            </span>
            <Image src={'/level-50.png'} alt="level" width={200} height={200} />
          </div>
        </CardContent>
        <CardFooter>
          <Link href={'/'} className="flex w-full flex-row">
            <div className="flex w-full flex-row items-center justify-center border">
              {' '}
              <ArrowLeft />
              <span>voltar</span>
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
