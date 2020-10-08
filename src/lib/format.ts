export const formatSlug = ((title: string): string => {
  const removedSpaces = title.replace(/\s+/g, '');
  const removeBar = removedSpaces.replace(/[//’]/g,'_');
  
  return removeBar;
});