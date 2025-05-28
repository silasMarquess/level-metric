import LevelMetricBox from '../schemas/level';

export const getLevelBox = async (): Promise<LevelMetricBox> => {
  return new Promise((resolver) => {
    setTimeout(() => {
      resolver({
        description: 'Nivel de àgua - CAIXA 1 - 2000L',
        levelPercentage: 50,
        timeDate: new Date(),
      });
    }, 1000);
  });
};
