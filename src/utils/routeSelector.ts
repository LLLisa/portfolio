export const routesArray: string[] = ['/about', '/inventory', '/rgs'];

type navSelectionType = -1 | 1;

export default (current: string, selection: navSelectionType): string => {
  const currentIndex = routesArray.indexOf(current);
  const targetIndex = currentIndex + selection;

  if (targetIndex < 0) return routesArray[routesArray.length - 1];
  if (targetIndex > routesArray.length - 1) return routesArray[0];

  return routesArray[targetIndex];
};
