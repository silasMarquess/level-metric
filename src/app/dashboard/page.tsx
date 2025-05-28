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
import Image from 'next/image';
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
    <div className="dark:bg-primary flex h-screen w-screen flex-col items-center justify-start bg-gray-200">
      <Card>
        <CardHeader>
          <CardTitle>Informações de Nivel de àgua</CardTitle>
        </CardHeader>
        <CardContent>
          {' '}
          {/*imagem do nivel de àgua*/}
          <div className="flex h-auto w-auto flex-col items-center justify-center space-y-4">
            <span className="dark: text-7xl text-green-700">
              {levelBox?.levelPercentage} %
            </span>
            <Image src={'/level-50.png'} alt="level" width={500} height={500} />
          </div>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
